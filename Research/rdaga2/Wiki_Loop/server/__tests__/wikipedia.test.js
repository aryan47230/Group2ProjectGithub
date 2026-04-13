import { jest } from '@jest/globals';

// Mock global fetch
global.fetch = jest.fn();

// Import after mock
const { searchWikipedia, getArticle, getArticleSections, getArticleLinks, getArticleImage } = await import('../services/wikipedia.js');

beforeEach(() => {
  fetch.mockReset();
});

describe('searchWikipedia', () => {
  it('returns matching article titles', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        query: {
          search: [
            { title: 'Quantum mechanics', snippet: 'branch of physics' },
            { title: 'Quantum field theory', snippet: 'theoretical framework' },
          ],
        },
      }),
    });

    const results = await searchWikipedia('quantum');
    expect(results).toHaveLength(2);
    expect(results[0].title).toBe('Quantum mechanics');
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('action=query&list=search&srsearch=quantum')
    );
  });
});

describe('getArticle', () => {
  it('returns parsed article with extract and metadata', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        query: {
          pages: {
            '1234': {
              pageid: 1234,
              title: 'Quantum mechanics',
              extract: 'Quantum mechanics is a fundamental theory...',
              categories: [{ title: 'Category:Quantum mechanics' }],
            },
          },
        },
      }),
    });

    const article = await getArticle('Quantum mechanics');
    expect(article.title).toBe('Quantum mechanics');
    expect(article.extract).toContain('fundamental theory');
    expect(article.categories).toContain('Quantum mechanics');
  });
});

describe('getArticleLinks', () => {
  it('returns array of linked article titles', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        query: {
          pages: {
            '1234': {
              links: [
                { title: 'Wave function' },
                { title: 'Planck constant' },
                { title: 'Albert Einstein' },
              ],
            },
          },
        },
      }),
    });

    const links = await getArticleLinks('Quantum mechanics');
    expect(links).toEqual(['Wave function', 'Planck constant', 'Albert Einstein']);
  });
});

describe('getArticleImage', () => {
  it('returns thumbnail URL when available', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        query: {
          pages: {
            '1234': {
              thumbnail: {
                source: 'https://upload.wikimedia.org/thumb/example.jpg',
              },
            },
          },
        },
      }),
    });

    const image = await getArticleImage('Quantum mechanics');
    expect(image).toBe('https://upload.wikimedia.org/thumb/example.jpg');
  });

  it('returns null when no image', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        query: { pages: { '1234': {} } },
      }),
    });

    const image = await getArticleImage('Some article');
    expect(image).toBeNull();
  });
});
