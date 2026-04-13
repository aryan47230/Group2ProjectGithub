import { jest } from '@jest/globals';

// Mock the @google/generative-ai module
jest.unstable_mockModule('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
    getGenerativeModel: jest.fn().mockReturnValue({
      generateContent: jest.fn().mockResolvedValue({
        response: {
          text: () => JSON.stringify({
            summary: 'A brief one-liner about the concept.',
            facts: [
              { label: 'Era', value: '1900-present' },
              { label: 'Key Figures', value: 'Einstein, Bohr' },
            ],
            coreIdeas: [
              { title: 'Idea 1', description: 'Description of idea 1', icon: '🌊' },
              { title: 'Idea 2', description: 'Description of idea 2', icon: '🎯' },
            ],
            history: [
              { year: '1900', event: 'Something happened' },
            ],
            connections: [
              { title: 'Related Topic', relation: 'core', strength: 3, description: 'Why it connects' },
              { title: 'Applied Topic', relation: 'application', strength: 2, description: 'How it applies' },
            ],
          }),
        },
      }),
    }),
  })),
}));

const { curateConcept } = await import('../services/gemini.js');

describe('curateConcept', () => {
  it('returns structured concept data from Gemini', async () => {
    const result = await curateConcept(
      'Quantum mechanics',
      'Quantum mechanics is a fundamental theory...',
      ['Wave function', 'Planck constant', 'Albert Einstein']
    );

    expect(result.summary).toBe('A brief one-liner about the concept.');
    expect(result.facts).toHaveLength(2);
    expect(result.coreIdeas).toHaveLength(2);
    expect(result.history).toHaveLength(1);
    expect(result.connections).toHaveLength(2);
    expect(result.connections[0].relation).toBe('core');
  });
});
