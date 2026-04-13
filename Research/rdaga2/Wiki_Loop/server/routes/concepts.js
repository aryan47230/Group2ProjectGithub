import { Router } from 'express';
import { searchWikipedia, getArticle, getArticleSections, getArticleLinks, getArticleImage, getArticleLinksLight, getShortExtracts } from '../services/wikipedia.js';
import { enrichConcept } from '../services/gemini.js';
import { rankConnections } from '../services/algorithmic.js';

// BUG-05 fix: filter out Wikipedia maintenance/hidden categories
const MAINTENANCE_PREFIXES = [
  'All articles', 'Articles with', 'Articles containing', 'Articles lacking',
  'Articles needing', 'Articles to be', 'Articles using', 'Articles that',
  'Pages using', 'Pages with', 'Pages containing',
  'Webarchive template', 'CS1', 'Use dmy dates', 'Use mdy dates',
  'All pages', 'All stub', 'All Wikipedia', 'Wikipedia articles', 'Short description',
  'Use American English', 'Use British English', 'Use Indian English',
  'Good articles', 'Featured articles', 'Commons category',
  'Articles needing additional references',
  'Pages that use', 'Pages needing', 'Harv and Sfn',
  'AC with', 'Wikidata', 'Cleanup tagged',
];

function filterCategories(categories) {
  return categories.filter((cat) => {
    const lower = cat.toLowerCase();
    return !MAINTENANCE_PREFIXES.some((prefix) => lower.startsWith(prefix.toLowerCase()));
  });
}

export function createConceptsRouter() {
  const router = Router();

  // Search endpoint
  router.get('/search', async (req, res) => {
    try {
      const { q } = req.query;
      if (!q) return res.status(400).json({ error: 'Query parameter "q" is required' });

      const results = await searchWikipedia(q);
      res.json({ results });
    } catch (err) {
      console.error('Search error:', err);
      res.status(500).json({ error: 'Failed to search Wikipedia' });
    }
  });

  // Get full concept data — pure Wikipedia, no Gemini
  router.get('/:title', async (req, res) => {
    try {
      const { title } = req.params;
      const decodedTitle = decodeURIComponent(title);

      // Fetch Wikipedia data in parallel
      const [article, links, image, sections] = await Promise.all([
        getArticle(decodedTitle),
        getArticleLinks(decodedTitle),
        getArticleImage(decodedTitle),
        getArticleSections(decodedTitle),
      ]);

      if (!article) {
        return res.status(404).json({ error: `Article "${decodedTitle}" not found` });
      }

      const cleanCategories = filterCategories(article.categories);
      const summary = article.extract.split('. ').slice(0, 2).join('. ').trim() + '.';
      const facts = [
        { label: 'Category', value: cleanCategories[0] || 'Unknown' },
        { label: 'Also known as', value: cleanCategories[1] || article.title },
        { label: 'Related topics', value: `${links.length} connected articles` },
        { label: 'Sections', value: `${sections.length} Wikipedia sections` },
      ];
      const connections = await rankConnections(article.title, links, cleanCategories);

      // Fetch real Wikipedia descriptions for connection nodes
      const connTitles = connections.map((c) => c.title);
      const shortExtracts = await getShortExtracts(connTitles, 2);
      for (const conn of connections) {
        if (shortExtracts[conn.title]) {
          conn.description = shortExtracts[conn.title];
        }
      }

      res.json({
        title: article.title,
        extract: article.extract,
        image,
        sections,
        categories: cleanCategories,
        wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(article.title)}`,
        summary,
        facts,
        connections,
      });
    } catch (err) {
      console.error('Concept fetch error:', err);
      res.status(500).json({ error: 'Failed to fetch concept data' });
    }
  });

  // Enrich with Gemini — replaces connection nodes with curated picks
  router.post('/:title/enrich', async (req, res) => {
    try {
      const { title } = req.params;
      const decodedTitle = decodeURIComponent(title);
      const { extract } = req.body;

      const enrichment = await enrichConcept(decodedTitle, extract);
      if (!enrichment || !enrichment.connections) {
        return res.status(503).json({ error: 'Gemini unavailable — no API key or quota exhausted' });
      }

      // Verify Gemini's picks exist on Wikipedia and fetch real descriptions
      const pickedTitles = enrichment.connections.map((c) => c.title);
      const extracts = await getShortExtracts(pickedTitles, 2);

      // Only keep connections that actually exist on Wikipedia
      const verified = enrichment.connections
        .filter((c) => extracts[c.title])
        .map((c) => ({
          title: c.title,
          relation: c.relation || 'related',
          strength: c.relation === 'core' ? 3 : c.relation === 'foundation' ? 3 : 2,
          description: extracts[c.title],
        }));

      res.json({ connections: verified });
    } catch (err) {
      console.error('Enrich error:', err);
      res.status(500).json({ error: 'Failed to enrich concept' });
    }
  });

  // Lightweight links for second-layer nodes
  router.get('/:title/links', async (req, res) => {
    try {
      const { title } = req.params;
      const decodedTitle = decodeURIComponent(title);
      const links = await getArticleLinksLight(decodedTitle, 6);
      res.json({ links });
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch links' });
    }
  });

  return router;
}
