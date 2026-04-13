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
