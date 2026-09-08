import {
  QUESTIONS_SYSTEM,
  questionsPrompt,
  TREE_SYSTEM,
  treePrompt,
  contextBlockFrom,
  ENRICH_SYSTEM,
  enrichPrompt,
  validateQuestions,
  validateSkillTree,
  validateEnrich,
} from "../prompts/skillTree.js";
import { setLlmProgress } from "./llmProgress.js";

export const BROWSER_MODEL_ID = "Qwen2.5-1.5B-Instruct-q4f16_1-MLC";

let enginePromise = null;

function stripJsonFences(text) {
  return String(text ?? "")
    .replace(/```json\n?/gi, "")
    .replace(/```\n?/g, "")
    .trim();
}

function parseJson(text) {
  return JSON.parse(stripJsonFences(text));
}

export function resetBrowserEngine() {
  enginePromise = null;
}

export async function getBrowserEngine() {
  if (!enginePromise) {
    enginePromise = (async () => {
      setLlmProgress({ phase: "loading", text: "Loading in-browser model…", progress: 0 });
      const { CreateMLCEngine } = await import("@mlc-ai/web-llm");
      const engine = await CreateMLCEngine(BROWSER_MODEL_ID, {
        initProgressCallback: (p) => {
          const progress = typeof p?.progress === "number" ? p.progress : 0;
          setLlmProgress({
            phase: "loading",
            text: p?.text || "Downloading / compiling model…",
            progress,
          });
        },
      });
      setLlmProgress({ phase: "idle", text: "", progress: 1 });
      return engine;
    })().catch((err) => {
      enginePromise = null;
      setLlmProgress({ phase: "idle", text: "", progress: 0 });
      throw err;
    });
  }
  return enginePromise;
}

async function completeJson({ system, prompt, maxTokens }) {
  const engine = await getBrowserEngine();
  setLlmProgress({ phase: "generating", text: "Generating in browser…", progress: 1 });
  try {
    const reply = await engine.chat.completions.create({
      messages: [
        ...(system ? [{ role: "system", content: system }] : []),
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
      max_tokens: maxTokens || 2048,
      response_format: { type: "json_object" },
    });
    const text = reply?.choices?.[0]?.message?.content;
    if (typeof text !== "string" || !text.trim()) {
      throw new Error("Empty browser LLM response");
    }
    return parseJson(text);
  } finally {
    setLlmProgress({ phase: "idle", text: "", progress: 0 });
  }
}

export async function browserGetQuestions(topic) {
  const data = await completeJson({
    system: QUESTIONS_SYSTEM,
    prompt: questionsPrompt(topic),
    maxTokens: 1024,
  });
  const v = validateQuestions(data);
  if (!v.ok) throw new Error(`browser LLM JSON invalid: ${v.error}`);
  return data.questions;
}

export async function browserGenerateSkillTree(topic, context) {
  const data = await completeJson({
    system: TREE_SYSTEM,
    prompt: treePrompt(topic, contextBlockFrom(context)),
    maxTokens: 3500,
  });
  const v = validateSkillTree(data);
  if (!v.ok) throw new Error(`browser LLM JSON invalid: ${v.error}`);
  return data.nodes;
}

export async function browserEnrichConcept(title, extract) {
  const data = await completeJson({
    system: ENRICH_SYSTEM,
    prompt: enrichPrompt(title, extract),
    maxTokens: 1024,
  });
  const v = validateEnrich(data);
  if (!v.ok) throw new Error(`browser LLM JSON invalid: ${v.error}`);
  return data;
}
