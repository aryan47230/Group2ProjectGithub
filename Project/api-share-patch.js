// ── Sharing API helpers ───────────────────────────────────────────────────────
// Add these three functions to client/src/utils/api.js

const API_BASE = '/api';

export async function apiShareTree(topic) {
  const res = await fetch(`${API_BASE}/trees/${encodeURIComponent(topic)}/share`, { method: 'POST' });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to generate share link');
  return data.shareId;
}

export async function apiSendTree(topic, targetUsername) {
  const res = await fetch(`${API_BASE}/trees/${encodeURIComponent(topic)}/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ targetUsername }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to send tree');
  return data;
}

export async function apiGetSharedTree(shareId) {
  const res = await fetch(`${API_BASE}/shared/${shareId}`);
  if (!res.ok) return null;
  return res.json();
}
