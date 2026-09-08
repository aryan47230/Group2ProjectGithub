/**
 * Try in-browser generation, then the server. Used by api.js and unit-tested
 * without loading web-llm.
 */
export async function tryBrowserThenServer(enabled, browserFn, serverFn) {
  if (enabled) {
    try {
      const result = await browserFn();
      return { source: "browser", result };
    } catch (err) {
      return {
        source: "server",
        result: await serverFn(),
        fallbackReason: err?.message || String(err),
      };
    }
  }
  return { source: "server", result: await serverFn() };
}
