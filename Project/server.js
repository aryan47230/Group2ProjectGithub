import "dotenv/config";
import express from "express";
import session from "express-session";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { db } from "./db.js";
import { createConceptsRouter } from "./routes/concepts.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(session({
  secret: process.env.SESSION_SECRET || "dev-secret-change-in-prod",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 7 days
}));

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

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
  const user = await db.createUser(username, hash);
  if (!user) return res.status(409).json({ error: "Username already taken" });

  req.session.userId = user.id;
  res.json({ user: { id: user.id, username: user.username } });
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

// ── Gemini ─────────────────────────────────────────────────────────────────────

app.post("/api/skill-tree/questions", async (req, res) => {
  const { topic } = req.body;
  if (!topic) return res.status(400).json({ error: "Missing topic" });

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "x-goog-api-key": process.env.GEMINI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are helping tailor a learning skill tree for "${topic}". Return 3-5 short follow-up questions the learner should answer so the tree matches their goals, background, and constraints.

Rules:
- Each question must be answerable in one or two sentences.
- Mix these angles: (a) what they hope to be able to do after, (b) current experience with "${topic}" or adjacent topics, (c) time, depth, or resource constraints.
- Questions must be specific to "${topic}" — do not return generic boilerplate.
- placeholder must be a concrete, realistic example answer for that question (not a restatement of the question).
- id is kebab-case and unique.

Respond with ONLY valid JSON in this exact shape:
{"questions":[{"id":"kebab-case-id","prompt":"Question text?","placeholder":"short example answer"}]}`
          }]
        }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini questions error:", response.status, errText);
      return res.status(500).json({ error: `Gemini API error ${response.status}: ${errText}` });
    }

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    const parsed = JSON.parse(rawText);
    res.json(parsed);
  } catch (err) {
    console.error("Questions handler error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/skill-tree", async (req, res) => {
  const { topic, context } = req.body;
  if (!topic) return res.status(400).json({ error: "Missing topic" });

  const contextBlock = Array.isArray(context) && context.length
    ? `\n\nLearner context (use this to tailor node choice, depth, and resources — do not ignore it):\n${context
        .filter(c => c && c.question && c.answer && String(c.answer).trim())
        .map(c => `- ${c.question} → ${String(c.answer).trim()}`)
        .join("\n")}\n`
    : "";

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "x-goog-api-key": process.env.GEMINI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are an expert curriculum designer. Create a prerequisite skill tree for learning "${topic}".${contextBlock}

First, classify "${topic}" as exactly one of these scales, then follow the counts strictly:
  - micro   (single concept, e.g. "git commit")        → 5-7 nodes, 3 levels
  - small   (focused skill, e.g. "React Hooks")        → 8-12 nodes, 4 levels
  - medium  (library/tool, e.g. "React", "Docker")     → 13-18 nodes, 6 levels
  - large   (broad subject, e.g. "Calculus 3")          → 19-26 nodes, 8 levels
  - massive (full discipline, e.g. "Machine Learning")  → 27-36 nodes, 10 levels

Rules:
- level 1 = most basic foundation skills with no requirements
- Higher levels = more advanced; "${topic}" itself should be the highest-level node
- requires = array of skill names from lower levels that must be learned first
- Every node except level-1 nodes MUST have at least one prerequisite
- Nodes at the same level should be independent of each other
- description = practical 1-2 sentence advice on developing this specific skill
- tips = exactly 3 short actionable practice tips
- emoji = a single emoji that best represents this specific skill
- keyConcepts = 3-5 objects, each with:
    - term: the concept name (short phrase)
    - explanation: 1-sentence plain-English definition of what the term means and why it matters
- outcomes = 2-3 strings describing concrete things the learner will be able to do after mastering this skill (start each with a verb)
- commonMistakes = 2-3 strings describing typical errors beginners make on this skill and why they happen
- resources = 4-5 real, well-known learning resources for this skill. Each resource has:
    - name: descriptive title including creator/site (e.g. "NUSensei: Bow Grip Explained", "MDN: CSS Flexbox")
    - type: one of "video", "article", "course", "book", "docs", "tool"
    - url: use the real URL if it is a stable, well-known page (official docs, MDN, etc.); otherwise use a Google search URL like "https://www.google.com/search?q=..."
    - description: 1 sentence explaining what this resource covers and who it is best for

Respond with ONLY valid JSON in this exact shape:
{"nodes": [{"name": "skill name", "emoji": "🎯", "level": 1, "requires": [], "description": "...", "tips": ["tip 1", "tip 2", "tip 3"], "keyConcepts": [{"term": "term name", "explanation": "what it means"}], "outcomes": ["outcome 1", "outcome 2"], "commonMistakes": ["mistake 1", "mistake 2"], "resources": [{"name": "Resource Title", "type": "video", "url": "https://...", "description": "What this covers."}]}]}`
          }]
        }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini error:", response.status, errText);
      return res.status(500).json({ error: `Gemini API error ${response.status}: ${errText}` });
    }

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    const skillTree = JSON.parse(rawText);
    res.json(skillTree);
  } catch (err) {
    console.error("Handler error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ── Wiki Loop (concept explorer) ──────────────────────────────────────────────

app.use("/api/concepts", createConceptsRouter());

// SPA fallback — the unified React app handles client-side routing for / and /explore
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
