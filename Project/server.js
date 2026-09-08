import "dotenv/config";
import express from "express";
import session from "express-session";
import cors from "cors";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { db } from "./db.js";
import { runMigrations } from "./db/migrate.js";
import { createConceptsRouter } from "./routes/concepts.js";
import { generateText, llmErrorPayload } from "./services/llm.js";
import {
  questionsPrompt,
  QUESTIONS_SYSTEM,
  QUESTIONS_SCHEMA,
  treePrompt,
  TREE_SYSTEM,
  TREE_SCHEMA,
  contextBlockFrom,
} from "./prompts/skillTree.js";

const isProd = process.env.NODE_ENV === "production";
const FRONTEND_URLS = (process.env.FRONTEND_URL || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const app = express();
if (isProd) app.set("trust proxy", 1);
if (FRONTEND_URLS.length) {
  app.use(cors({
    origin(origin, cb) {
      if (!origin || FRONTEND_URLS.includes(origin)) return cb(null, true);
      return cb(null, false);
    },
    credentials: true,
  }));
}
app.use(express.json());

// Status route — Railway hosts the API only; the SPA lives on Vercel.
app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "brancher-api",
    frontend: FRONTEND_URLS.length ? FRONTEND_URLS : null,
    docs: "API only. Visit the frontend for the app.",
  });
});
app.use(session({
  secret: process.env.SESSION_SECRET || "dev-secret-change-in-prod",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    // auto: Secure on HTTPS (public sslip / Vercel cross-site), unset on HTTP Caddy
    secure: isProd ? "auto" : false,
    sameSite: isProd ? "none" : "lax",
  }
}));

// ── Auth ───────────────────────────────────────────────────────────────────────

app.get("/api/me", async (req, res) => {
  if (req.session.userId) {
    const user = await db.getUserById(req.session.userId);
    if (user) return res.json({ user: { id: user.id, username: user.username } });
  }
  res.json({ user: null });
});

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Username and password required" });
  if (username.length < 2 || username.length > 24) return res.status(400).json({ error: "Username must be 2–24 characters" });
  if (password.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters" });

  const hash = await bcrypt.hash(password, 10);
  let result;
  try {
    result = await db.createUser(username, hash);
  } catch (err) {
    return res.status(503).json({ error: "Authentication service unavailable. Try again in a moment." });
  }
  if (result?.taken) return res.status(409).json({ error: "Username already taken" });
  if (!result?.user) return res.status(503).json({ error: "Authentication service unavailable. Try again in a moment." });

  req.session.userId = result.user.id;
  res.json({ user: { id: result.user.id, username: result.user.username } });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Username and password required" });

  const user = await db.getUserByUsername(username);
  if (!user) return res.status(401).json({ error: "Invalid username or password" });

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: "Invalid username or password" });

  req.session.userId = user.id;
  res.json({ user: { id: user.id, username: user.username } });
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

// ── Skill tree CRUD ────────────────────────────────────────────────────────────

function requireAuth(req, res, next) {
  if (!req.session.userId) return res.status(401).json({ error: "Not logged in" });
  next();
}

app.get("/api/trees", requireAuth, async (req, res) => {
  const trees = await db.getTreesByUserId(req.session.userId);
  res.json(trees.map(t => ({
    topic: t.topic,
    nodes: t.nodes,
    completed: t.completed,
    savedAt: t.savedAt
  })));
});

app.post("/api/trees", requireAuth, async (req, res) => {
  const { topic, nodes, completed } = req.body;
  if (!topic || !nodes) return res.status(400).json({ error: "Missing topic or nodes" });
  await db.upsertTree(req.session.userId, topic, nodes, completed || []);
  res.json({ ok: true });
});

app.delete("/api/trees/:topic", requireAuth, async (req, res) => {
  await db.deleteTree(req.session.userId, decodeURIComponent(req.params.topic));
  res.json({ ok: true });
});

// ── Sharing ────────────────────────────────────────────────────────────────────

app.post("/api/trees/:topic/share", requireAuth, async (req, res) => {
  const topic = decodeURIComponent(req.params.topic);
  const trees = await db.getTreesByUserId(req.session.userId);
  const tree = trees.find(t => t.topic.toLowerCase() === topic.toLowerCase());
  if (!tree) return res.status(404).json({ error: "Tree not found" });
  let shareId = tree.shareId;
  if (!shareId) {
    shareId = randomUUID();
    await db.setShareId(req.session.userId, topic, shareId);
  }
  res.json({ shareId });
});

app.get("/api/shared/:shareId", async (req, res) => {
  const tree = await db.getTreeByShareId(req.params.shareId);
  if (!tree) return res.status(404).json({ error: "Shared tree not found" });
  res.json({ topic: tree.topic, nodes: tree.nodes, completed: tree.completed });
});

app.post("/api/trees/:topic/send", requireAuth, async (req, res) => {
  const { targetUsername } = req.body;
  if (!targetUsername) return res.status(400).json({ error: "Missing targetUsername" });
  const targetUser = await db.getUserByUsername(targetUsername);
  if (!targetUser) return res.status(404).json({ error: "User not found" });
  if (targetUser.id === req.session.userId) return res.status(400).json({ error: "Cannot send to yourself" });
  const topic = decodeURIComponent(req.params.topic);
  const ok = await db.sendTree(req.session.userId, topic, targetUser.id);
  if (!ok) return res.status(404).json({ error: "Tree not found" });
  res.json({ ok: true });
});

// ── Skill-tree generation (Gemini / Anthropic via services/llm.js) ─────────────

app.post("/api/skill-tree/questions", async (req, res) => {
  const { topic } = req.body;
  if (!topic) return res.status(400).json({ error: "Missing topic" });

  try {
    const parsed = await generateText({
      json: true,
      system: QUESTIONS_SYSTEM,
      schema: QUESTIONS_SCHEMA,
      maxTokens: 1024,
      prompt: questionsPrompt(topic),
    });
    res.json(parsed);
  } catch (err) {
    console.error("Questions handler error:", err);
    res.status(502).json(llmErrorPayload(err));
  }
});

app.post("/api/skill-tree", async (req, res) => {
  const { topic, context } = req.body;
  if (!topic) return res.status(400).json({ error: "Missing topic" });

  const contextBlock = contextBlockFrom(context);

  try {
    const skillTree = await generateText({
      json: true,
      system: TREE_SYSTEM,
      schema: TREE_SCHEMA,
      maxTokens: 3500,
      prompt: treePrompt(topic, contextBlock),
    });
    res.json(skillTree);
  } catch (err) {
    console.error("Skill-tree handler error:", err);
    res.status(502).json(llmErrorPayload(err));
  }
});

// ── Wiki Loop (concept explorer) ──────────────────────────────────────────────

app.use("/api/concepts", createConceptsRouter());

const PORT = process.env.PORT || 3000;
runMigrations()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
  });
