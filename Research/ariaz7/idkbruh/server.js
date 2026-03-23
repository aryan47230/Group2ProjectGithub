require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

if (!process.env.GEMINI_API_KEY) {
  console.error("ERROR: GEMINI_API_KEY not found in .env file!");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const skillTreeSchema = {
  type: "object",
  properties: {
    title:       { type: "string" },
    description: { type: "string" },
    scale:       { type: "string" },
    nodes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id:            { type: "string" },
          name:          { type: "string" },
          summary:       { type: "string" },
          level:         { type: "integer" },
          prerequisites: { type: "array", items: { type: "string" } },
        },
        required: ["id", "name", "summary", "level", "prerequisites"],
      },
    },
    // Sideways — related but not prerequisite
    relatedTopics: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name:   { type: "string" },
          type:   { type: "string", description: "One of: skill, tool, project, field" },
          reason: { type: "string", description: "One sentence on why this is related" },
        },
        required: ["name", "type", "reason"],
      },
    },
    // What to learn AFTER mastering this topic
    nextSteps: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name:   { type: "string" },
          type:   { type: "string", description: "One of: skill, tool, project, field" },
          reason: { type: "string", description: "One sentence on why to explore this next" },
        },
        required: ["name", "type", "reason"],
      },
    },
  },
  required: ["title", "description", "scale", "nodes", "relatedTopics", "nextSteps"],
};

app.post("/api/skill-tree", async (req, res) => {
  const { topic } = req.body;
  if (!topic) return res.status(400).json({ error: "Please provide a topic" });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert curriculum designer. Create a prerequisite skill tree for learning "${topic}".

SKILL TREE RULES:
- Classify "${topic}" as exactly one of: micro | small | medium | large | massive, then strictly follow:
  • micro   = 5-7 nodes,   3 levels  (e.g. "git commit", "CSS Flexbox")
  • small   = 8-12 nodes,  4 levels  (e.g. "React Hooks", "SQL Joins")
  • medium  = 13-18 nodes, 6 levels  (e.g. "React", "PostgreSQL")
  • large   = 19-26 nodes, 8 levels  (e.g. "Calculus 3", "Systems Design")
  • massive = 27-36 nodes, 10 levels (e.g. "Machine Learning", "Web Dev")
- "${topic}" must be the highest-level node (the final goal).
- Every node except level-1 nodes MUST have at least one prerequisite.
- Nodes at the same level must be independent of each other.
- Each node summary: (a) what to master, (b) how it prepares you for "${topic}".

RELATED TOPICS (relatedTopics):
- 4-6 adjacent skills, tools, or fields that relate to "${topic}" but are NOT prerequisites.
- These are sideways connections — useful companions, not stepping stones.
- type must be exactly one of: skill, tool, project, field

NEXT STEPS (nextSteps):
- 4-5 topics to explore AFTER mastering "${topic}".
- What naturally comes next in the learning journey?
- type must be exactly one of: skill, tool, project, field

Now generate the full skill tree for: "${topic}"
      `.trim(),
      config: {
        responseMimeType: "application/json",
        responseJsonSchema: skillTreeSchema,
      },
    });

    const skillTree = JSON.parse(response.text);
    res.json(skillTree);
  } catch (error) {
    console.error("Gemini error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`\n  Server running: http://localhost:${port}\n`);
});
