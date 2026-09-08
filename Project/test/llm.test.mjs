import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import {
  generateText,
  resolveProvider,
  stripJsonFences,
  LlmError,
  _setLlmTestHooks,
  _resetLlmTestHooks,
} from "../services/llm.js";

const ENV_KEYS = [
  "LLM_PROVIDER",
  "ANTHROPIC_API_KEY",
  "GEMINI_API_KEY",
  "ANTHROPIC_MODEL",
];

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

  it("auto uses gemini when no Anthropic key is set", () => {
    process.env.LLM_PROVIDER = "auto";
    delete process.env.ANTHROPIC_API_KEY;
    process.env.GEMINI_API_KEY = "gemini-test";
    assert.equal(resolveProvider(), "gemini");
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
        return {
          ok: true,
          json: async () => ({
            candidates: [{ content: { parts: [{ text: "from-gemini" }] } }],
          }),
        };
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
});
