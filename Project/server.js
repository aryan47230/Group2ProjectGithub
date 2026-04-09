import "dotenv/config";
import express from "express";
import session from "express-session";
import bcrypt from "bcryptjs";
import { db } from "./db.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(session({
  secret: process.env.SESSION_SECRET || "dev-secret-change-in-prod",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 7 days
}));

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// ── Auth ───────────────────────────────────────────────────────────────────────

app.get("/api/me", (req, res) => {
  if (req.session.userId) {
    const user = db.getUserById(req.session.userId);
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
  const user = db.createUser(username, hash);
  if (!user) return res.status(409).json({ error: "Username already taken" });

  req.session.userId = user.id;
  res.json({ user: { id: user.id, username: user.username } });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Username and password required" });

  const user = db.getUserByUsername(username);
  if (!user) return res.status(401).json({ error: "Invalid username or password" });

  const ok = await bcrypt.compare(password, user.passwordHash);
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

app.get("/api/trees", requireAuth, (req, res) => {
  const trees = db.getTreesByUserId(req.session.userId);
  res.json(trees.map(t => ({
    topic: t.topic,
    nodes: t.nodes,
    completed: t.completed,
    savedAt: t.savedAt
  })));
});

app.post("/api/trees", requireAuth, (req, res) => {
  const { topic, nodes, completed } = req.body;
  if (!topic || !nodes) return res.status(400).json({ error: "Missing topic or nodes" });
  db.upsertTree(req.session.userId, topic, nodes, completed || []);
  res.json({ ok: true });
});

app.delete("/api/trees/:topic", requireAuth, (req, res) => {
  db.deleteTree(req.session.userId, decodeURIComponent(req.params.topic));
  res.json({ ok: true });
});

// ── Gemini ─────────────────────────────────────────────────────────────────────

app.post("/api/skill-tree", async (req, res) => {
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
            text: `Generate a ${topic} skill tree with 3-5 levels from basic to advanced. Respond with ONLY this exact JSON, no extra text, no other keys:
            {"nodes": [{"name": "skill name", "emoji": "🎯", "level": 1, "requires": [], "description": "1-2 sentences on how to develop this skill", "tips": ["tip 1", "tip 2", "tip 3"]}]}
            Rules: level 1 = most basic skills with no requirements, higher levels = more advanced, requires = array of skill names from lower levels that must be learned first, description = practical advice on developing this skill, tips = 3 short actionable practice tips, emoji = a single emoji that best represents this specific skill. Generate 10-16 total skills.`
          }]
        }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(500).json({ error: `Gemini API error ${response.status}: ${errText}` });
    }

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    const cleaned = rawText.replace(/```json[\s\S]*?```|```[\s\S]*?```/g, m =>
      m.replace(/```json|```/g, "")
    ).trim();

    const skillTree = JSON.parse(cleaned);
    res.json(skillTree);
  } catch (err) {
    console.error("Handler error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
