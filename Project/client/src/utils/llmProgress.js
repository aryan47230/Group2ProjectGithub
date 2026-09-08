let state = { phase: "idle", text: "", progress: 0 };
const listeners = new Set();

export function getLlmProgress() {
  return state;
}

export function setLlmProgress(next) {
  state = { phase: "idle", text: "", progress: 0, ...next };
  for (const fn of listeners) {
    try {
      fn(state);
    } catch {
      /* ignore */
    }
  }
}

export function subscribeLlmProgress(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
