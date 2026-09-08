import Anthropic from "@anthropic-ai/sdk";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
const DEFAULT_ANTHROPIC_MODEL = "claude-opus-5";
const DEFAULT_MAX_TOKENS = 16384;
const LOCAL_MAX_TOKENS = 2048;
const DEFAULT_LOCAL_URL = "http://brancher-llm:8081/v1";
const LOCATION_SNIPPET = "location is not supported";
const LOCAL_PROBE_TTL_MS = 5000;

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

let testHooks = { anthropicClient: null, geminiFetch: null, localFetch: null };
let localProbe = { at: 0, ok: false };

export function _setLlmTestHooks(hooks = {}) {
  testHooks = { ...testHooks, ...hooks };
}

export function _resetLlmTestHooks() {
  testHooks = { anthropicClient: null, geminiFetch: null, localFetch: null };
  localProbe = { at: 0, ok: false };
}

export function getLocalUrl() {
  const raw = (process.env.LLM_LOCAL_URL || DEFAULT_LOCAL_URL).trim();
  return raw.replace(/\/+$/, "");
}

function localBaseUrl() {
  return getLocalUrl().replace(/\/v1$/i, "");
}

function getGeminiFetch() {
  return testHooks.geminiFetch || fetch;
}

function getLocalFetch() {
  return testHooks.localFetch || testHooks.geminiFetch || fetch;
}

export async function isLocalReachable() {
  const now = Date.now();
  if (now - localProbe.at < LOCAL_PROBE_TTL_MS) return localProbe.ok;
  const health = `${localBaseUrl()}/health`;
  try {
    const res = await getLocalFetch()(health, { signal: AbortSignal.timeout(1500) });
    localProbe = { at: now, ok: Boolean(res && res.ok) };
  } catch {
    localProbe = { at: now, ok: false };
  }
  return localProbe.ok;
}

/**
 * Sync resolver for explicit providers and Anthropic-first auto.
 * Returns "anthropic" | "gemini" | "local" | "auto".
 * "auto" means: probe local, else gemini (see resolveProviderAsync).
 */
export function resolveProvider() {
  const raw = (process.env.LLM_PROVIDER || "auto").trim().toLowerCase();
  if (raw === "anthropic" || raw === "gemini" || raw === "local") return raw;
  if (process.env.ANTHROPIC_API_KEY) return "anthropic";
  return "auto";
}

export async function resolveProviderAsync() {
  const p = resolveProvider();
  if (p !== "auto") return p;
  if (await isLocalReachable()) return "local";
  if (process.env.GEMINI_API_KEY) return "gemini";
  return "local";
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
    response = await getGeminiFetch()(GEMINI_URL, {
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

function openaiJsonSchema(schema) {
  if (!schema) return { type: "json_object" };
  return {
    type: "json_schema",
    json_schema: {
      name: "response",
      strict: true,
      schema,
    },
  };
}

async function generateLocal({ system, prompt, json, schema, maxTokens }) {
  const url = `${getLocalUrl()}/chat/completions`;
  const model = process.env.LLM_LOCAL_MODEL || "local";
  const messages = [];
  if (system) messages.push({ role: "system", content: system });
  messages.push({ role: "user", content: prompt });

  const body = {
    model,
    messages,
    temperature: 0.3,
    max_tokens: maxTokens || LOCAL_MAX_TOKENS,
  };
  if (json) body.response_format = openaiJsonSchema(schema);

  let response;
  try {
    response = await getLocalFetch()(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new LlmError("local", err?.message || String(err), 502);
  }

  if (!response.ok) {
    let errText = "";
    try {
      errText = await response.text();
    } catch {
      errText = `Local LLM HTTP ${response.status}`;
    }
    throw new LlmError("local", errText || `Local LLM HTTP ${response.status}`, response.status);
  }

  const data = await response.json();
  const rawText = data?.choices?.[0]?.message?.content;
  if (typeof rawText !== "string") {
    throw new LlmError("local", "Empty local LLM response", 502);
  }
  return rawText;
}

async function runProvider(p, args) {
  if (p === "anthropic") return generateAnthropic(args);
  if (p === "local") return generateLocal(args);
  return generateGemini(args);
}

export async function generateText({ system, prompt, json = false, schema, maxTokens } = {}) {
  const provider = await resolveProviderAsync();
  if (!prompt) throw new LlmError(provider, "Missing prompt", 400);

  const args = { system, prompt, json, schema, maxTokens };
  const run = async (p) => {
    const text = await runProvider(p, args);
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
