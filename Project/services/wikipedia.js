const BASE_URL = 'https://en.wikipedia.org/w/api.php';
const HEADERS = {
  'User-Agent': 'WikiLoop/1.0 (educational app; https://github.com/wiki-loop) Node.js',
  'Accept': 'application/json',
};

function buildUrl(params) {
  const query = new URLSearchParams({
    format: 'json',
    origin: '*',
    ...params,
  });
  return `${BASE_URL}?${query}`;
}

export async function searchWikipedia(query, limit = 10) {
  const url = buildUrl({
    action: 'query',
    list: 'search',
    srsearch: query,
    srlimit: String(limit),
  });

  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();
  return data.query.search.map((item) => ({
    title: item.title,
    snippet: item.snippet.replace(/<[^>]+>/g, ''),
  }));
}

export async function getArticle(title) {
  const url = buildUrl({
    action: 'query',
    titles: title,
    prop: 'extracts|categories',
    exintro: '1',
    explaintext: '1',
    cllimit: '20',
    redirects: '1',
  });

  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];

  if (page.missing !== undefined) {
    return null;
  }

  return {
    pageid: page.pageid,
    title: page.title,
    extract: page.extract || '',
    categories: (page.categories || []).map((c) => c.title.replace('Category:', '')),
  };
}

export async function getArticleSections(title) {
  const url = buildUrl({
    action: 'parse',
    page: title,
    prop: 'sections',
    redirects: '1',
  });

  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();

  if (data.error) return [];

  return data.parse.sections
    .filter((s) => s.toclevel <= 2)
    .map((s) => ({
      index: s.index,
      heading: s.line,
      level: s.toclevel,
    }));
}

// Wikipedia returns links alphabetically. With a small pllimit you only get
// titles starting with "A". Use the API max (500) so we have a real spread
// to sample from in the ranker.
export async function getArticleLinks(title, limit = 500) {
  const url = buildUrl({
    action: 'query',
    titles: title,
    prop: 'links',
    pllimit: String(limit),
    plnamespace: '0',
    redirects: '1',
  });

  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  return (page.links || []).map((l) => l.title);
}

// Lightweight link fetch for second-layer nodes — no backlink scoring, just titles.
// Always fetch a wide sample so the caller can shuffle past Wikipedia's A-bias.
export async function getArticleLinksLight(title, limit = 50) {
  const url = buildUrl({
    action: 'query',
    titles: title,
    prop: 'links',
    pllimit: String(limit),
    plnamespace: '0',
    redirects: '1',
  });

  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  return (page.links || []).map((l) => l.title);
}

/**
 * Batch-fetch one-sentence extracts for multiple titles.
 * Wikipedia API supports up to 50 titles pipe-separated.
 */
export async function getShortExtracts(titles, sentences = 1) {
  if (!titles.length) return {};
  const batched = titles.slice(0, 20);
  const url = buildUrl({
    action: 'query',
    titles: batched.join('|'),
    prop: 'extracts',
    exintro: '1',
    explaintext: '1',
    exsentences: String(sentences),
    redirects: '1',
  });

  try {
    const res = await fetch(url, { headers: HEADERS });
    const data = await res.json();
    const result = {};
    for (const page of Object.values(data.query.pages)) {
      if (page.missing === undefined && page.extract) {
        result[page.title] = page.extract.trim();
      }
    }
    return result;
  } catch {
    return {};
  }
}

export async function getArticleImage(title) {
  const url = buildUrl({
    action: 'query',
    titles: title,
    prop: 'pageimages',
    pithumbsize: '800',
    redirects: '1',
  });

  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  return page.thumbnail?.source || null;
}
