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

// ── Schema ──
// scale classifies topic complexity so the UI can display it.
// Nodes flow from level 1 (foundations) up to the highest level (the final goal).
const skillTreeSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "The name of the final learning goal (the topic)",
    },
    description: {
      type: "string",
      description: "One sentence overview of this learning path",
    },
    scale: {
      type: "string",
      description:
        "Complexity classification chosen in Step 1: exactly one of 'micro' | 'small' | 'medium' | 'large' | 'massive'",
    },
    nodes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Unique kebab-case identifier, e.g. 'limits-and-continuity'",
          },
          name: {
            type: "string",
            description: "Short display name for the node (3-5 words max)",
          },
          summary: {
            type: "string",
            description:
              "2-3 sentences describing the specific concepts and skills to master at this node, and how mastering them feeds into reaching the final goal",
          },
          level: {
            type: "integer",
            description:
              "Hierarchy level: 1 = foundational prerequisites, increasing toward the highest level which is reserved for the final goal node itself",
          },
          prerequisites: {
            type: "array",
            items: { type: "string" },
            description: "IDs of nodes that must be mastered before this one",
          },
        },
        required: ["id", "name", "summary", "level", "prerequisites"],
      },
    },
  },
  required: ["title", "description", "scale", "nodes"],
};

app.get("/api/test", async (_req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Say hello and tell me a fun fact about learning. Keep it to 2 sentences.",
    });
    res.json({ message: response.text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/skill-tree", async (req, res) => {
  const { topic } = req.body;
  if (!topic) {
    return res.status(400).json({ error: "Please provide a topic" });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert curriculum designer. Create a prerequisite skill tree for learning "${topic}".

Structure rules:
- First, classify "${topic}" as exactly one of: 'micro' | 'small' | 'medium' | 'large' | 'massive', then strictly follow the node and level counts for that classification:
  • micro   = a single concept (e.g. "git commit", "CSS Flexbox")          → EXACTLY 5-7 nodes,   3 levels
  • small   = a focused skill (e.g. "React Hooks", "SQL Joins")            → EXACTLY 8-12 nodes,  4 levels
  • medium  = a library/tool (e.g. "React", "PostgreSQL", "Docker")        → EXACTLY 13-18 nodes, 6 levels
  • large   = a broad subject (e.g. "Calculus 3", "Systems Design")        → EXACTLY 19-26 nodes, 8 levels
  • massive = a full discipline (e.g. "Machine Learning", "Web Dev")       → EXACTLY 27-36 nodes, 10 levels
- Every level must be meaningfully distinct — no level should be skippable or feel redundant.
- Nodes at the same level should be independent of each other (no same-level prerequisites).
- Prefer more nodes over fewer when the subject has real depth — only omit a concept if it is truly not needed to reach "${topic}".
- "${topic}" must be included as a node at the HIGHEST level (the final goal). Give it a clean short name.
- Work backwards from "${topic}": what 2-4 high-level concepts are needed right before mastering it? Those go one level below.
- What foundational skills underpin those concepts? Those go at level 1.
- You can have intermediate levels (level 2, level 3, etc.) if the subject demands it.
- Each node's "summary" must explain: (a) what specific concepts/skills to master here, and (b) how this prepares you for the next step toward "${topic}".
- Prerequisites must reference real node IDs you defined in this tree.
- The result should look like a rooted DAG: multiple foundational nodes feed into fewer intermediate nodes, which all converge on the final goal.
- Use accurate, real educational content. Do not invent fake prerequisites.
- Every node except level-1 foundation nodes MUST have at least one prerequisite. No node (other than level-1 nodes) can have an empty prerequisites array.
- CRITICAL: You must output EXACTLY the number of levels shown in the example for your chosen scale. Outputting fewer levels than specified is an error. Count your levels before responding.

Example structure for "git commit" (micro → 3 levels, 6 nodes):
  Level 1: Git Installation & Setup, Command Line Basics
  Level 2: Staging & the Index, Commit Messages & Best Practices, Undoing Changes
  Level 3: git commit

Example structure for "CSS Flexbox" (small → 4 levels, 10 nodes):
  Level 1: HTML Basics, CSS Fundamentals
  Level 2: The Box Model, Display & Positioning
  Level 3: Flex Container Properties, Flex Item Properties, Flex Sizing & Wrapping
  Level 4: Flexbox Alignment & Justification, Responsive Flexbox Patterns
  Level 5: CSS Flexbox

Example structure for "React" (medium → 6 levels, 16 nodes):
  Level 1: HTML & CSS, JavaScript Fundamentals, Command Line & npm
  Level 2: ES6+ Features, DOM Manipulation
  Level 3: JSX & Component Basics, Props & State
  Level 4: useEffect & Lifecycle, Event Handling, Conditional Rendering & Lists
  Level 5: React Router, useContext & useReducer, Custom Hooks
  Level 6: React

Example structure for "Calculus 3" (large → 8 levels, 22 nodes):
  Level 1: Algebra & Trigonometry, Pre-Calculus & Functions
  Level 2: Limits & Continuity, Single-Variable Differentiation
  Level 3: Integration Techniques, Sequences & Series
  Level 4: Vectors & Vector Algebra, Parametric & Polar Curves
  Level 5: Multivariable Functions, Partial Derivatives
  Level 6: Multiple Integrals, Vector Fields & Curl/Divergence
  Level 7: Line Integrals & Surface Integrals, Stokes & Divergence Theorem
  Level 8: Calculus 3

Example structure for "Machine Learning" (massive → 10 levels, 30 nodes):
  Level 1:  Python Basics, Linear Algebra, Calculus Fundamentals, Probability & Statistics
  Level 2:  Python for Data Science, Multivariable Calculus, Statistical Inference
  Level 3:  Data Wrangling & EDA, Optimization Theory, Bayesian Thinking
  Level 4:  Supervised Learning Fundamentals, Unsupervised Learning Fundamentals
  Level 5:  Regression & Classification Models, Clustering & Dimensionality Reduction
  Level 6:  Model Evaluation & Regularization, Feature Engineering
  Level 7:  Ensemble Methods, Neural Network Basics
  Level 8:  Deep Learning & Backpropagation, Advanced Optimization
  Level 9:  CNNs & RNNs, NLP Fundamentals, Reinforcement Learning Basics
  Level 10: Machine Learning


  Now generate the skill tree for: "${topic}"
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
  console.log("");
  console.log("===========================================");
  console.log(`  Server running: http://localhost:${port}`);
  console.log("===========================================");
  console.log("");
});
