const API_BASE = '/api';

export async function fetchConcept(title) {
  const res = await fetch(`${API_BASE}/concepts/${encodeURIComponent(title)}`);
  if (!res.ok) throw new Error(`Failed to fetch concept: ${res.statusText}`);
  return res.json();
}

export async function searchConcepts(query) {
  const res = await fetch(`${API_BASE}/concepts/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error(`Search failed: ${res.statusText}`);
  const data = await res.json();
  return data.results;
}

export async function enrichConceptApi(title, extract) {
  const res = await fetch(`${API_BASE}/concepts/${encodeURIComponent(title)}/enrich`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ extract }),
  });
  if (!res.ok) throw new Error(`Enrich failed: ${res.statusText}`);
  return res.json();
}

export async function fetchSecondLayerLinks(title) {
  const res = await fetch(`${API_BASE}/concepts/${encodeURIComponent(title)}/links`);
  if (!res.ok) throw new Error(`Links failed: ${res.statusText}`);
  const data = await res.json();
  return data.links;
}

export async function fetchNodeSummary(title) {
  const res = await fetch(`${API_BASE}/concepts/${encodeURIComponent(title)}`);
  if (!res.ok) return null;
  const data = await res.json();
  return { title: data.title, summary: data.summary, extract: data.extract, image: data.image };
}

// ── Auth ──────────────────────────────────────────────────────────────────────
export async function apiMe() {
  const res = await fetch(`${API_BASE}/me`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.user;
}

export async function apiLogin(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data.user;
}

export async function apiRegister(username, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data.user;
}

export async function apiLogout() {
  await fetch(`${API_BASE}/logout`, { method: 'POST' });
}

// ── Skill tree ────────────────────────────────────────────────────────────────
export async function apiGetTrees() {
  const res = await fetch(`${API_BASE}/trees`);
  if (!res.ok) return [];
  return res.json();
}

export async function apiSaveTree(entry) {
  await fetch(`${API_BASE}/trees`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });
}

export async function apiDeleteTree(topic) {
  await fetch(`${API_BASE}/trees/${encodeURIComponent(topic)}`, { method: 'DELETE' });
}

export async function apiGenerateSkillTree(topic) {
  const res = await fetch(`${API_BASE}/skill-tree`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || res.status);
  }
  const data = await res.json();
  if (!data.nodes || !Array.isArray(data.nodes)) throw new Error('Unexpected response format');
  return data.nodes;
}
