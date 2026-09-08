/** Shared skill-tree / questions / enrich prompts + JSON schemas + validators.
 *  Imported by the Express API and duplicated in the Vite client
 *  (Vercel root is Project/client, so it cannot import this file).
 */

export const QUESTIONS_SCHEMA = {
  type: "object",
  properties: {
    questions: {
      type: "array",
      minItems: 3,
      maxItems: 5,
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          prompt: { type: "string" },
          placeholder: { type: "string" },
        },
        required: ["id", "prompt", "placeholder"],
        additionalProperties: false,
      },
    },
  },
  required: ["questions"],
  additionalProperties: false,
};

export const TREE_SCHEMA = {
  type: "object",
  properties: {
    nodes: {
      type: "array",
      minItems: 5,
      maxItems: 12,
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          emoji: { type: "string" },
          level: { type: "integer" },
          requires: { type: "array", items: { type: "string" } },
          description: { type: "string" },
          tips: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 3 },
          keyConcepts: {
            type: "array",
            minItems: 2,
            maxItems: 4,
            items: {
              type: "object",
              properties: {
                term: { type: "string" },
                explanation: { type: "string" },
              },
              required: ["term", "explanation"],
              additionalProperties: false,
            },
          },
          outcomes: { type: "array", items: { type: "string" }, minItems: 2, maxItems: 3 },
          commonMistakes: { type: "array", items: { type: "string" }, minItems: 2, maxItems: 3 },
          resources: {
            type: "array",
            minItems: 2,
            maxItems: 4,
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                type: { type: "string", enum: ["video", "article", "course", "book", "docs", "tool"] },
                url: { type: "string" },
                description: { type: "string" },
              },
              required: ["name", "type", "url", "description"],
              additionalProperties: false,
            },
          },
        },
        required: [
          "name",
          "emoji",
          "level",
          "requires",
          "description",
          "tips",
          "keyConcepts",
          "outcomes",
          "commonMistakes",
          "resources",
        ],
        additionalProperties: false,
      },
    },
  },
  required: ["nodes"],
  additionalProperties: false,
};

export const ENRICH_SCHEMA = {
  type: "object",
  properties: {
    connections: {
      type: "array",
      minItems: 4,
      maxItems: 8,
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          relation: { type: "string", enum: ["core", "related", "application", "foundation"] },
          description: { type: "string" },
        },
        required: ["title", "relation", "description"],
        additionalProperties: false,
      },
    },
  },
  required: ["connections"],
  additionalProperties: false,
};

export const QUESTIONS_SYSTEM =
  "You output ONLY valid JSON. No markdown, no fences, no commentary. Match the schema exactly.";

export function questionsPrompt(topic) {
  return `Tailor a learning skill tree for "${topic}". Return 3-5 short follow-up questions.

Rules:
- Each question is answerable in one or two sentences.
- Mix: (a) what they want to do after, (b) current experience with "${topic}", (c) time/depth constraints.
- Specific to "${topic}", not generic.
- placeholder = a concrete example answer (not a restatement).
- id is kebab-case and unique.

JSON shape:
{"questions":[{"id":"kebab-id","prompt":"Question?","placeholder":"example answer"}]}`;
}

export const TREE_SYSTEM =
  "You output ONLY valid JSON. No markdown, no fences, no commentary. Keep strings short. Match the schema exactly.";

export function treePrompt(topic, contextBlock = "") {
  return `Create a prerequisite skill tree for learning "${topic}".${contextBlock}

Pick a compact tree: 5-8 nodes, 3-4 levels. Level 1 = foundations (requires []). Higher levels depend on named lower-level skills. "${topic}" is the highest-level node. Same-level nodes are independent. Shape should be uneven (wide base, 1 apex).

Each node fields:
- name, emoji (one emoji), level (int), requires (string array of names)
- description: 1 short sentence
- tips: exactly 3 short practice tips
- keyConcepts: 2-3 {term, explanation}
- outcomes: 2 short verb phrases
- commonMistakes: 2 short beginner errors
- resources: 2-3 {name, type (video|article|course|book|docs|tool), url, description}
  Use real well-known URLs when sure, else https://www.google.com/search?q=...

JSON shape:
{"nodes":[{"name":"...","emoji":"🎯","level":1,"requires":[],"description":"...","tips":["t1","t2","t3"],"keyConcepts":[{"term":"...","explanation":"..."}],"outcomes":["...","..."],"commonMistakes":["...","..."],"resources":[{"name":"...","type":"article","url":"https://...","description":"..."}]}]}`;
}

export function contextBlockFrom(context) {
  if (!Array.isArray(context) || !context.length) return "";
  const lines = context
    .filter((c) => c && c.question && c.answer && String(c.answer).trim())
    .map((c) => `- ${c.question} → ${String(c.answer).trim()}`);
  if (!lines.length) return "";
  return `\n\nLearner context (tailor nodes to this):\n${lines.join("\n")}\n`;
}

export const ENRICH_SYSTEM =
  "You output ONLY valid JSON. No markdown, no fences, no commentary. Use real Wikipedia article titles.";

export function enrichPrompt(title, extract) {
  return `Knowledge curator. Given a Wikipedia article, pick the most important related Wikipedia articles.

Article: "${title}"
Intro: "${String(extract || "").slice(0, 600)}"

Return JSON:
{"connections":[{"title":"Exact Wikipedia article title","relation":"core|related|application|foundation","description":"Why it connects to ${title}"}]}

Rules:
- 6-8 connections.
- title MUST be a real Wikipedia article title.
- core = subtopics, related = close concepts, application = uses, foundation = prerequisites.`;
}

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

export function validateQuestions(data) {
  if (!data || !Array.isArray(data.questions) || data.questions.length < 1) {
    return { ok: false, error: "missing questions array" };
  }
  for (const q of data.questions) {
    if (!isNonEmptyString(q?.id) || !isNonEmptyString(q?.prompt)) {
      return { ok: false, error: "invalid question" };
    }
  }
  return { ok: true };
}

export function validateSkillTree(data) {
  if (!data || !Array.isArray(data.nodes) || data.nodes.length < 1) {
    return { ok: false, error: "missing nodes array" };
  }
  for (const n of data.nodes) {
    if (!isNonEmptyString(n?.name) || typeof n.level !== "number") {
      return { ok: false, error: "invalid node" };
    }
    if (!Array.isArray(n.requires)) return { ok: false, error: "invalid requires" };
  }
  return { ok: true };
}

export function validateEnrich(data) {
  if (!data || !Array.isArray(data.connections) || data.connections.length < 1) {
    return { ok: false, error: "missing connections array" };
  }
  for (const c of data.connections) {
    if (!isNonEmptyString(c?.title)) return { ok: false, error: "invalid connection" };
  }
  return { ok: true };
}
