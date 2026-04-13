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

export async function rankConnections(title, linkedTitles, categories) {
  const scored = [];

  // Only check backlinks for first 15 to stay within rate limits
  const toCheck = linkedTitles.slice(0, 15);

  const backlinkResults = await Promise.all(
    toCheck.map((linked) => getBacklinks(linked, title))
  );

  for (let i = 0; i < toCheck.length; i++) {
    const linked = toCheck[i];
    let score = 1;

    // Bidirectional link = stronger connection
    if (backlinkResults[i]) {
      score += 2;
    }

    // Position in article (earlier = more important)
    const positionScore = 1 - (linkedTitles.indexOf(linked) / linkedTitles.length);
    score += positionScore;

    scored.push({
      title: linked,
      strength: Math.min(3, Math.round(score)),
      relation: 'related',
      description: `A topic related to ${title}.`,
    });
  }

  // Sort by score descending, take top 8
  scored.sort((a, b) => b.strength - a.strength);
  return scored.slice(0, 8);
}
