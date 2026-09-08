import Anthropic from "@anthropic-ai/sdk";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
const DEFAULT_ANTHROPIC_MODEL = "claude-opus-5";
const DEFAULT_MAX_TOKENS = 16384;
const LOCATION_SNIPPET = "location is not supported";

export class LlmError extends Error {
  constructor(provider, detail, status = 502) {
    const message = stringifyDetail(detail);
    super(message);
    this.name = "LlmError";
    this.provider = provider;
    this.detail = message;
    this.status = status;
  }
}

function stringifyDetail(detail) {
  if (detail == null) return "LLM request failed";
  if (typeof detail === "string") return detail;
  try {
    return JSON.stringify(detail);
  } catch {
    return String(detail);
  }
}

let testHooks = { anthropicClient: null, geminiFetch: null };

export function _setLlmTestHooks(hooks = {}) {
  testHooks = { ...testHooks, ...hooks };
}

export function _resetLlmTestHooks() {
  testHooks = { anthropicClient: null, geminiFetch: null };
}

export function resolveProvider() {
  const raw = (process.env.LLM_PROVIDER || "auto").trim().toLowerCase();
  if (raw === "anthropic" || raw === "gemini") return raw;
  return process.env.ANTHROPIC_API_KEY ? "anthropic" : "gemini";
}

export function stripJsonFences(text) {
  return String(text ?? "")
    .replace(/```json\n?/gi, "")
    .replace(/```\n?/g, "")
    .trim();
}

function parseMaybeJson(text, json, provider) {
  if (!json) return text;
  const cleaned = stripJsonFences(text);
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    throw new LlmError(provider, `Invalid JSON from model: ${err.message}`, 502);
  }
}

function getAnthropicClient() {
  return testHooks.anthropicClient || new Anthropic();
}

function getFetch() {
  return testHooks.geminiFetch || fetch;
}

function isLocationUnsupported(status, body) {
  if (Number(status) !== 400) return false;
  return stringifyDetail(body).toLowerCase().includes(LOCATION_SNIPPET);
}

async function generateAnthropic({ system, prompt, json, maxTokens }) {
  const client = getAnthropicClient();
  const model = process.env.ANTHROPIC_MODEL || DEFAULT_ANTHROPIC_MODEL;
  const jsonInstruction =
    "Return only valid JSON. Do not wrap the JSON in markdown fences or add any other text.";
  const systemPrompt = json
    ? [system, jsonInstruction].filter(Boolean).join("\n\n")
    : system;

  const params = {
    model,
    max_tokens: maxTokens || DEFAULT_MAX_TOKENS,
    messages: [{ role: "user", content: prompt }],
  };
  if (systemPrompt) params.system = systemPrompt;

  let response;
  try {
    response = await client.messages.create(params);
  } catch (err) {
    const status = err?.status || err?.statusCode || 502;
    throw new LlmError("anthropic", err?.message || String(err), status);
  }

  const text = (response.content || [])
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");
  return text;
}

async function generateGemini({ system, prompt, json, maxTokens }) {
  const generationConfig = {};
  if (json) generationConfig.responseMimeType = "application/json";
  if (maxTokens) generationConfig.maxOutputTokens = maxTokens;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
  };
  if (Object.keys(generationConfig).length) {
    body.generationConfig = generationConfig;
  }
  if (system) {
    body.systemInstruction = { parts: [{ text: system }] };
  }

  let response;
  try {
    response = await getFetch()(GEMINI_URL, {
      method: "POST",
      headers: {
        "x-goog-api-key": process.env.GEMINI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new LlmError("gemini", err?.message || String(err), 502);
  }

  if (!response.ok) {
    let errText = "";
    try {
      errText = await response.text();
    } catch {
      errText = `Gemini HTTP ${response.status}`;
    }
    throw new LlmError("gemini", errText || `Gemini HTTP ${response.status}`, response.status);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (typeof rawText !== "string") {
    throw new LlmError("gemini", "Empty Gemini response", 502);
  }
  return rawText;
}

export async function generateText({ system, prompt, json = false, maxTokens } = {}) {
  const provider = resolveProvider();
  if (!prompt) throw new LlmError(provider, "Missing prompt", 400);

  const run = async (p) => {
    const text =
      p === "anthropic"
        ? await generateAnthropic({ system, prompt, json, maxTokens })
        : await generateGemini({ system, prompt, json, maxTokens });
    return parseMaybeJson(text, json, p);
  };

  try {
    return await run(provider);
  } catch (err) {
    const locationBlocked =
      err instanceof LlmError &&
      err.provider === "gemini" &&
      isLocationUnsupported(err.status, err.detail);
    if (locationBlocked && process.env.ANTHROPIC_API_KEY) {
      try {
        return await run("anthropic");
      } catch (retryErr) {
        if (retryErr instanceof LlmError) throw retryErr;
        throw new LlmError("anthropic", retryErr?.message || String(retryErr), 502);
      }
    }
    if (err instanceof LlmError) throw err;
    throw new LlmError(provider, err?.message || String(err), 502);
  }
}

export function llmErrorPayload(err) {
  const provider = err instanceof LlmError ? err.provider : resolveProvider();
  const detail =
    err instanceof LlmError ? err.detail : err?.message || String(err);
  return { error: "llm_unavailable", provider, detail };
}
