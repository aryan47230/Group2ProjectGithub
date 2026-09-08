import { shouldUseBrowserLlm } from './llmSettings';
import { tryBrowserThenServer } from './llmFallback';

const NEW_API = 'https://brancher-api.40-160-241-64.sslip.io';
const rawBase = import.meta.env.VITE_API_BASE ?? '';
const API_ORIGIN = (!rawBase || String(rawBase).includes('railway.app')) ? NEW_API : rawBase.replace(/\/$/, '');
const API_BASE = `${API_ORIGIN}/api`;

function withCreds(init = {}) {
  return { credentials: 'include', ...init };
}

export async function fetchConcept(title) {
  const res = await fetch(`${API_BASE}/concepts/${encodeURIComponent(title)}`, withCreds());
  if (!res.ok) throw new Error(`Failed to fetch concept: ${res.statusText}`);
  return res.json();
}

export async function searchConcepts(query) {
  const res = await fetch(`${API_BASE}/concepts/search?q=${encodeURIComponent(query)}`, withCreds());
  if (!res.ok) throw new Error(`Search failed: ${res.statusText}`);
  const data = await res.json();
  return data.results;
}

async function enrichConceptOnServer(title, extract) {
  const res = await fetch(`${API_BASE}/concepts/${encodeURIComponent(title)}/enrich`, withCreds({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ extract }),
  }));
  if (!res.ok) throw new Error(`Enrich failed: ${res.statusText}`);
  return res.json();
}

export async function enrichConceptApi(title, extract) {
  if (!shouldUseBrowserLlm()) return enrichConceptOnServer(title, extract);
  const { browserEnrichConcept } = await import('./browserLlm');
  const { result } = await tryBrowserThenServer(
    true,
    () => browserEnrichConcept(title, extract),
    () => enrichConceptOnServer(title, extract),
  );
  return result;
}

export async function fetchSecondLayerLinks(title) {
  const res = await fetch(`${API_BASE}/concepts/${encodeURIComponent(title)}/links`, withCreds());
  if (!res.ok) throw new Error(`Links failed: ${res.statusText}`);
  const data = await res.json();
  return data.links;
}

export async function fetchNodeSummary(title) {
  const res = await fetch(`${API_BASE}/concepts/${encodeURIComponent(title)}`, withCreds());
  if (!res.ok) return null;
  const data = await res.json();
  return { title: data.title, summary: data.summary, extract: data.extract, image: data.image };
}

// ── Auth ──────────────────────────────────────────────────────────────────────
export async function apiMe() {
  const res = await fetch(`${API_BASE}/me`, withCreds());
  if (!res.ok) return null;
  const data = await res.json();
  return data.user;
}

export async function apiLogin(username, password) {
  const res = await fetch(`${API_BASE}/login`, withCreds({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }));
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data.user;
}

export async function apiRegister(username, password) {
  const res = await fetch(`${API_BASE}/register`, withCreds({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }));
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data.user;
}

export async function apiLogout() {
  await fetch(`${API_BASE}/logout`, withCreds({ method: 'POST' }));
}

// ── Skill tree ────────────────────────────────────────────────────────────────
export async function apiGetTrees() {
  const res = await fetch(`${API_BASE}/trees`, withCreds());
  if (!res.ok) return [];
  return res.json();
}

export async function apiSaveTree(entry) {
  await fetch(`${API_BASE}/trees`, withCreds({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  }));
}

export async function apiDeleteTree(topic) {
  await fetch(`${API_BASE}/trees/${encodeURIComponent(topic)}`, withCreds({ method: 'DELETE' }));
}

async function generateSkillTreeOnServer(topic, context) {
  const body = { topic };
  if (Array.isArray(context) && context.length) body.context = context;
  const res = await fetch(`${API_BASE}/skill-tree`, withCreds({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }));
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || res.status);
  }
  const data = await res.json();
  if (!data.nodes || !Array.isArray(data.nodes)) throw new Error('Unexpected response format');
  return data.nodes;
}

export async function apiGenerateSkillTree(topic, context) {
  if (!shouldUseBrowserLlm()) return generateSkillTreeOnServer(topic, context);
  const { browserGenerateSkillTree } = await import('./browserLlm');
  const { result } = await tryBrowserThenServer(
    true,
    () => browserGenerateSkillTree(topic, context),
    () => generateSkillTreeOnServer(topic, context),
  );
  return result;
}

async function getSkillTreeQuestionsOnServer(topic) {
  const res = await fetch(`${API_BASE}/skill-tree/questions`, withCreds({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
  }));
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || res.status);
  }
  const data = await res.json();
  if (!Array.isArray(data.questions)) throw new Error('Unexpected response format');
  return data.questions;
}

export async function apiGetSkillTreeQuestions(topic) {
  if (!shouldUseBrowserLlm()) return getSkillTreeQuestionsOnServer(topic);
  const { browserGetQuestions } = await import('./browserLlm');
  const { result } = await tryBrowserThenServer(
    true,
    () => browserGetQuestions(topic),
    () => getSkillTreeQuestionsOnServer(topic),
  );
  return result;
}
