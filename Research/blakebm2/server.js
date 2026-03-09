import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

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
      console.error("Gemini error:", response.status, errText);
      return res.status(500).json({ error: `Gemini API error ${response.status}: ${errText}` });
    }

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    const cleaned = rawText.replace(/```json[\s\S]*?```|```[\s\S]*?```/g, m =>
      m.replace(/```json|```/g, "")
    ).trim();

    console.log("Gemini raw response:", rawText);

    const skillTree = JSON.parse(cleaned);
    res.json(skillTree);
  } catch (err) {
    console.error("Handler error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
