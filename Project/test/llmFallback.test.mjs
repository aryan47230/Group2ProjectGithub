import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { tryBrowserThenServer } from "../client/src/utils/llmFallback.js";
import { shouldUseBrowserLlm } from "../client/src/utils/llmSettings.js";
import {
  validateQuestions,
  validateSkillTree,
} from "../prompts/skillTree.js";

describe("browser LLM fallback", () => {
  it("uses server when browser path is disabled", async () => {
    const out = await tryBrowserThenServer(
      false,
      async () => "browser",
      async () => "server"
    );
    assert.deepEqual(out, { source: "server", result: "server" });
  });

  it("uses browser when it succeeds", async () => {
    const out = await tryBrowserThenServer(
      true,
      async () => "browser",
      async () => "server"
    );
    assert.deepEqual(out, { source: "browser", result: "browser" });
  });

  it("falls back to server when browser throws (invalid JSON / load fail)", async () => {
    const out = await tryBrowserThenServer(
      true,
      async () => {
        throw new Error("browser LLM JSON invalid: missing nodes array");
      },
      async () => ["ok"]
    );
    assert.equal(out.source, "server");
    assert.deepEqual(out.result, ["ok"]);
    assert.match(out.fallbackReason, /JSON invalid/);
  });

  it("shouldUseBrowserLlm defaults ON only when GPU exists", () => {
    assert.equal(shouldUseBrowserLlm({ hasGpu: false, pref: null }), false);
    assert.equal(shouldUseBrowserLlm({ hasGpu: true, pref: null }), true);
    assert.equal(shouldUseBrowserLlm({ hasGpu: true, pref: false }), false);
    assert.equal(shouldUseBrowserLlm({ hasGpu: true, pref: true }), true);
    assert.equal(shouldUseBrowserLlm({ hasGpu: false, pref: true }), false);
  });

  it("rejects invalid skill-tree / questions payloads (triggers fallback)", () => {
    assert.equal(validateQuestions({ questions: "nope" }).ok, false);
    assert.equal(validateSkillTree({ nodes: [{ name: 1 }] }).ok, false);
    assert.equal(
      validateSkillTree({
        nodes: [{ name: "Git", level: 1, requires: [] }],
      }).ok,
      true
    );
  });
});
