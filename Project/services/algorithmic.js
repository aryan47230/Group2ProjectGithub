const BASE_URL = 'https://en.wikipedia.org/w/api.php';

function buildUrl(params) {
  const query = new URLSearchParams({ format: 'json', origin: '*', ...params });
  return `${BASE_URL}?${query}`;
}

async function getBacklinks(targetTitle, sourceTitle) {
  const url = buildUrl({
    action: 'query',
    titles: targetTitle,
    prop: 'links',
    pllimit: '50',
    plnamespace: '0',
  });

  try {
    const res = await fetch(url);
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];
    const links = (page.links || []).map((l) => l.title);
    return links.includes(sourceTitle);
  } catch {
    return false;
  }
}

// Deterministic FNV-1a hash → stable shuffle order seeded by the seed title.
// This way the same article always gets the same connections (good UX),
// but two different articles never share an alphabetical bias.
function hashString(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h = (h ^ s.charCodeAt(i)) >>> 0;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

export function seededShuffle(arr, seed) {
  // Fisher-Yates with an LCG seeded from the title hash.
  const a = [...arr];
  let state = hashString(seed) || 1;
  for (let i = a.length - 1; i > 0; i--) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const j = state % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function rankConnections(title, linkedTitles, categories) {
  // Wikipedia returns links in alphabetical order. Shuffle deterministically by
  // the seed title so we sample across the full article. We do NOT use the
  // alphabetical position as a score input — that bakes the bias right back in.
  const shuffled = seededShuffle(linkedTitles, title);
  const sample = shuffled.slice(0, 15);

  const backlinkResults = await Promise.all(
    sample.map((linked) => getBacklinks(linked, title))
  );

  const scored = sample.map((linked, i) => {
    let score = 1;
    if (backlinkResults[i]) score += 2;     // bidirectional link bonus

    // Tiebreaker uses the SHUFFLED index, not the alphabetical one. Earlier
    // shuffled position = stable preference per seed, no A-bias.
    score += (1 - i / sample.length) * 0.5;

    return {
      title: linked,
      strength: Math.min(3, Math.round(score)),
      relation: 'related',
      description: `A topic related to ${title}.`,
      _score: score,
    };
  });

  scored.sort((a, b) => b._score - a._score);
  return scored.slice(0, 8).map(({ _score, ...c }) => c);
}
