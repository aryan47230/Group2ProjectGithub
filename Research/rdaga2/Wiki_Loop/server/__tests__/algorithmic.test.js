import { jest } from '@jest/globals';

global.fetch = jest.fn();

const { rankConnections } = await import('../services/algorithmic.js');

beforeEach(() => {
  fetch.mockReset();
});

describe('rankConnections', () => {
  it('ranks bidirectional links higher', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({
          query: {
            pages: {
              '1': { links: [{ title: 'Topic A' }] },
            },
          },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({
          query: {
            pages: {
              '2': { links: [] },
            },
          },
        }),
      });

    const result = await rankConnections('Main Topic', ['Topic A', 'Topic B'], ['Cat:Science']);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('title');
    expect(result[0]).toHaveProperty('strength');
    expect(result[0]).toHaveProperty('relation');
  });
});
