import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import {
  generateText,
  resolveProvider,
  resolveProviderAsync,
  stripJsonFences,
  LlmError,
  _setLlmTestHooks,
  _resetLlmTestHooks,
} from "../services/llm.js";
import {
  validateQuestions,
  validateSkillTree,
  validateEnrich,
} from "../prompts/skillTree.js";

const ENV_KEYS = [
  "LLM_PROVIDER",
  "ANTHROPIC_API_KEY",
  "GEMINI_API_KEY",
  "ANTHROPIC_MODEL",
  "LLM_LOCAL_URL",
  "LLM_LOCAL_MODEL",
];

function jsonResponse(obj, { ok = true, status = 200 } = {}) {
  return {
    ok,
    status,
    json: async () => obj,
    text: async () => JSON.stringify(obj),
  };
}

describe("llm provider", () => {
  let saved;

  beforeEach(() => {
    saved = {};
    for (const k of ENV_KEYS) saved[k] = process.env[k];
    _resetLlmTestHooks();
  });

  afterEach(() => {
    for (const k of ENV_KEYS) {
      if (saved[k] === undefined) delete process.env[k];
      else process.env[k] = saved[k];
    }
    _resetLlmTestHooks();
  });

  it("auto uses anthropic when ANTHROPIC_API_KEY is set", () => {
    process.env.LLM_PROVIDER = "auto";
    process.env.ANTHROPIC_API_KEY = "sk-test";
    process.env.GEMINI_API_KEY = "gemini-test";
    assert.equal(resolveProvider(), "anthropic");
  });

  it("auto uses local when reachable and no Anthropic key", async () => {
    process.env.LLM_PROVIDER = "auto";
    delete process.env.ANTHROPIC_API_KEY;
    process.env.GEMINI_API_KEY = "gemini-test";
    process.env.LLM_LOCAL_URL = "http://brancher-llm:8081/v1";

    _setLlmTestHooks({
      localFetch: async (url) => {
        if (String(url).includes("/health")) return jsonResponse({ status: "ok" });
        return jsonResponse({
          choices: [{ message: { content: "from-local" } }],
        });
      },
      geminiFetch: async () => {
        throw new Error("gemini should not be called");
      },
    });

    assert.equal(await resolveProviderAsync(), "local");
    const text = await generateText({ prompt: "hi" });
    assert.equal(text, "from-local");
  });

  it("auto uses gemini when local is unreachable and no Anthropic key", async () => {
    process.env.LLM_PROVIDER = "auto";
    delete process.env.ANTHROPIC_API_KEY;
    process.env.GEMINI_API_KEY = "gemini-test";

    _setLlmTestHooks({
      localFetch: async () => {
        throw new Error("connection refused");
      },
      geminiFetch: async () =>
        jsonResponse({
          candidates: [{ content: { parts: [{ text: "from-gemini" }] } }],
        }),
    });

    assert.equal(await resolveProviderAsync(), "gemini");
    const text = await generateText({ prompt: "hi" });
    assert.equal(text, "from-gemini");
  });

  it("LLM_PROVIDER=gemini uses Gemini even if an Anthropic key exists", async () => {
    process.env.LLM_PROVIDER = "gemini";
    process.env.ANTHROPIC_API_KEY = "sk-test";
    process.env.GEMINI_API_KEY = "gemini-test";

    let anthropicCalled = false;
    let geminiCalled = false;
    _setLlmTestHooks({
      anthropicClient: {
        messages: {
          create: async () => {
            anthropicCalled = true;
            return { content: [{ type: "text", text: "from-anthropic" }] };
          },
        },
      },
      geminiFetch: async () => {
        geminiCalled = true;
        return jsonResponse({
          candidates: [{ content: { parts: [{ text: "from-gemini" }] } }],
        });
      },
    });

    const text = await generateText({ prompt: "hi" });
    assert.equal(text, "from-gemini");
    assert.equal(geminiCalled, true);
    assert.equal(anthropicCalled, false);
  });

  it("LLM_PROVIDER=anthropic calls Anthropic and omits thinking/temperature", async () => {
    process.env.LLM_PROVIDER = "anthropic";
    process.env.ANTHROPIC_API_KEY = "sk-test";
    delete process.env.ANTHROPIC_MODEL;

    let params;
    _setLlmTestHooks({
      anthropicClient: {
        messages: {
          create: async (p) => {
            params = p;
            return {
              content: [
                { type: "thinking", thinking: "nope" },
                { type: "text", text: "hello" },
              ],
            };
          },
        },
      },
    });

    const text = await generateText({ prompt: "hi", system: "sys" });
    assert.equal(text, "hello");
    assert.equal(params.model, "claude-opus-5");
    assert.equal(params.system, "sys");
    assert.deepEqual(params.messages, [{ role: "user", content: "hi" }]);
    assert.equal("thinking" in params, false);
    assert.equal("temperature" in params, false);
    assert.ok(params.max_tokens > 0);
  });

  it("local provider reports truncated output (finish_reason=length) as a clear 502", async () => {
    process.env.LLM_PROVIDER = "local";
    process.env.LLM_LOCAL_URL = "http://brancher-llm:8081/v1";
    delete process.env.ANTHROPIC_API_KEY;

    _setLlmTestHooks({
      localFetch: async () =>
        jsonResponse({
          choices: [{ finish_reason: "length", message: { content: '{"nodes":[{"name":"cut' } }],
        }),
    });

    await assert.rejects(
      generateText({ prompt: "tree", json: true, maxTokens: 100 }),
      (err) => err.provider === "local" && err.status === 502 && /truncated at max_tokens \(100\)/.test(err.detail),
    );
  });

  it("LLM_PROVIDER=local posts OpenAI chat completions with json_schema", async () => {
    process.env.LLM_PROVIDER = "local";
    process.env.LLM_LOCAL_URL = "http://brancher-llm:8081/v1";
    process.env.LLM_LOCAL_MODEL = "qwen-test";
    delete process.env.ANTHROPIC_API_KEY;

    let captured;
    _setLlmTestHooks({
      localFetch: async (url, init) => {
        captured = { url, init };
        return jsonResponse({
          choices: [
            {
              message: {
                content: '{"questions":[{"id":"a","prompt":"Q?","placeholder":"ex"}]}',
              },
            },
          ],
        });
      },
    });

    const schema = {
      type: "object",
      properties: { questions: { type: "array" } },
      required: ["questions"],
    };
    const parsed = await generateText({
      prompt: "give json",
      json: true,
      schema,
      system: "sys",
    });
    assert.deepEqual(parsed, {
      questions: [{ id: "a", prompt: "Q?", placeholder: "ex" }],
    });
    assert.equal(captured.url, "http://brancher-llm:8081/v1/chat/completions");
    const body = JSON.parse(captured.init.body);
    assert.equal(body.model, "qwen-test");
    assert.equal(body.response_format.type, "json_schema");
    assert.deepEqual(body.response_format.json_schema.schema, schema);
    assert.equal(body.messages[0].role, "system");
    assert.equal(body.messages[1].role, "user");
  });

  it("falls back to Anthropic on Gemini location 400 when an Anthropic key exists", async () => {
    process.env.LLM_PROVIDER = "gemini";
    process.env.ANTHROPIC_API_KEY = "sk-test";
    process.env.GEMINI_API_KEY = "gemini-test";

    let anthropicCalled = false;
    _setLlmTestHooks({
      geminiFetch: async () => ({
        ok: false,
        status: 400,
        text: async () =>
          JSON.stringify({
            error: { message: "User location is not supported for the API use" },
          }),
      }),
      anthropicClient: {
        messages: {
          create: async () => {
            anthropicCalled = true;
            return { content: [{ type: "text", text: "fallback-ok" }] };
          },
        },
      },
    });

    const text = await generateText({ prompt: "hi" });
    assert.equal(text, "fallback-ok");
    assert.equal(anthropicCalled, true);
  });

  it("does not fall back when Gemini location-fails and no Anthropic key is set", async () => {
    process.env.LLM_PROVIDER = "gemini";
    delete process.env.ANTHROPIC_API_KEY;
    process.env.GEMINI_API_KEY = "gemini-test";

    _setLlmTestHooks({
      geminiFetch: async () => ({
        ok: false,
        status: 400,
        text: async () => "User location is not supported for the API use",
      }),
      anthropicClient: {
        messages: {
          create: async () => {
            throw new Error("should not be called");
          },
        },
      },
    });

    await assert.rejects(
      () => generateText({ prompt: "hi" }),
      (err) => {
        assert.ok(err instanceof LlmError);
        assert.equal(err.provider, "gemini");
        assert.match(err.detail, /location is not supported/i);
        return true;
      }
    );
  });

  it("strips ```json fences before JSON.parse", async () => {
    process.env.LLM_PROVIDER = "anthropic";
    process.env.ANTHROPIC_API_KEY = "sk-test";

    _setLlmTestHooks({
      anthropicClient: {
        messages: {
          create: async (params) => {
            assert.match(params.system, /only valid JSON/i);
            return {
              content: [
                {
                  type: "text",
                  text: "```json\n{\"questions\":[{\"id\":\"a\"}]}\n```",
                },
              ],
            };
          },
        },
      },
    });

    const parsed = await generateText({ prompt: "give json", json: true });
    assert.deepEqual(parsed, { questions: [{ id: "a" }] });
  });

  it("stripJsonFences matches the Gemini path", () => {
    const cleaned = stripJsonFences("```json\n{\"ok\":true}\n```");
    assert.equal(cleaned, '{"ok":true}');
  });

  it("validateQuestions / validateSkillTree / validateEnrich", () => {
    assert.equal(
      validateQuestions({ questions: [{ id: "a", prompt: "Q?" }] }).ok,
      true
    );
    assert.equal(validateQuestions({ questions: [] }).ok, false);
    assert.equal(
      validateSkillTree({ nodes: [{ name: "Git", level: 1, requires: [] }] }).ok,
      true
    );
    assert.equal(validateSkillTree({ nodes: [] }).ok, false);
    assert.equal(
      validateEnrich({ connections: [{ title: "Git" }] }).ok,
      true
    );
    assert.equal(validateEnrich({ connections: [] }).ok, false);
  });
});
