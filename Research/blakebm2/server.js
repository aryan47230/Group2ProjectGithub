import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

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
            text: `Generate a ${topic} skill tree with 3-5 levels from basic to advanced.
Rules:
- level 1 = most basic skills with no requirements, higher levels = more advanced
- requires = array of skill names from lower levels that must be learned first
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
- Generate 10-16 total skills.

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

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
