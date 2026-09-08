export const STORAGE_KEY = "brancher.webgpuGen";

export function webgpuSupported() {
  return typeof navigator !== "undefined" && Boolean(navigator.gpu);
}

/** pref: true | false | null (unset → default ON when GPU exists) */
export function readWebgpuPref(storage) {
  try {
    const v = (storage || (typeof localStorage !== "undefined" ? localStorage : null))?.getItem(STORAGE_KEY);
    if (v === "0") return false;
    if (v === "1") return true;
  } catch {
    /* ignore */
  }
  return null;
}

export function writeWebgpuPref(on, storage) {
  try {
    (storage || localStorage).setItem(STORAGE_KEY, on ? "1" : "0");
  } catch {
    /* ignore */
  }
}

export function shouldUseBrowserLlm({ hasGpu, pref } = {}) {
  const gpu = hasGpu ?? webgpuSupported();
  if (!gpu) return false;
  const p = pref === undefined ? readWebgpuPref() : pref;
  if (p === false) return false;
  return true;
}
