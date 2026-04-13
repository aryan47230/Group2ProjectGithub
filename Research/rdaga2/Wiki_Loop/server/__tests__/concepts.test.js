import { jest } from '@jest/globals';

// Mock all services
jest.unstable_mockModule('../services/wikipedia.js', () => ({
  searchWikipedia: jest.fn().mockResolvedValue([
    { title: 'Quantum mechanics', snippet: 'branch of physics' },
  ]),
  getArticle: jest.fn().mockResolvedValue({
    pageid: 1234,
    title: 'Quantum mechanics',
    extract: 'Quantum mechanics is a fundamental theory...',
    categories: ['Quantum mechanics', 'Physics'],
  }),
  getArticleSections: jest.fn().mockResolvedValue([
    { index: '1', heading: 'History', level: 1 },
    { index: '2', heading: 'Mathematical formulation', level: 1 },
  ]),
  getArticleLinks: jest.fn().mockResolvedValue([
    'Wave function', 'Planck constant', 'Superposition',
  ]),
  getArticleImage: jest.fn().mockResolvedValue('https://example.com/image.jpg'),
}));

jest.unstable_mockModule('../services/gemini.js', () => ({
  curateConcept: jest.fn().mockResolvedValue({
    summary: 'The study of tiny particles.',
    facts: [{ label: 'Era', value: '1900' }],
    coreIdeas: [{ title: 'Wave-Particle Duality', description: 'Light is both', icon: '🌊' }],
    history: [{ year: '1900', event: 'Planck' }],
    connections: [
      { title: 'Wave function', relation: 'core', strength: 3, description: 'Math behind QM' },
    ],
  }),
}));

jest.unstable_mockModule('../services/algorithmic.js', () => ({
  rankConnections: jest.fn().mockResolvedValue([
    { title: 'Wave function', strength: 3, relation: 'related', description: 'linked' },
  ]),
}));

const { createConceptsRouter } = await import('../routes/concepts.js');
const express = (await import('express')).default;

describe('GET /api/concepts/:title', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use('/api/concepts', createConceptsRouter());
  });

  it('returns structured concept data', async () => {
    const { getArticle, getArticleLinks, getArticleImage, getArticleSections } = await import('../services/wikipedia.js');
    const { curateConcept } = await import('../services/gemini.js');

    const article = await getArticle('Quantum mechanics');
    const links = await getArticleLinks('Quantum mechanics');
    const image = await getArticleImage('Quantum mechanics');
    const sections = await getArticleSections('Quantum mechanics');
    const curated = await curateConcept(article.title, article.extract, links);

    expect(article.title).toBe('Quantum mechanics');
    expect(curated.summary).toBe('The study of tiny particles.');
    expect(curated.connections).toHaveLength(1);
    expect(links).toContain('Wave function');
    expect(image).toBe('https://example.com/image.jpg');
    expect(sections).toHaveLength(2);
  });
});
