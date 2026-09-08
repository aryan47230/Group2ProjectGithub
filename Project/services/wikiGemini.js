import { generateText, resolveProvider } from './llm.js';
import { enrichPrompt, ENRICH_SYSTEM, ENRICH_SCHEMA } from '../prompts/skillTree.js';

const cache = new Map();
let disabled = false;

function isEnabled() {
  if (disabled) return false;
  const provider = resolveProvider();
  if (provider === 'local' || provider === 'auto') return true;
  if (provider === 'anthropic') {
    if (!process.env.ANTHROPIC_API_KEY) {
      disabled = true;
      console.log('LLM disabled — no ANTHROPIC_API_KEY configured.');
      return false;
    }
    return true;
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key || key.trim() === '') {
    disabled = true;
    console.log('Gemini disabled — no API key configured.');
    return false;
  }
  return true;
}

/**
 * Called on-demand via Enrich button.
 * The LLM reads the Wikipedia article and selects the most relevant
 * Wikipedia article titles that are genuinely important connections.
 * Returns an array of { title, relation, description } objects.
 */
export async function enrichConcept(title, extract) {
  if (!isEnabled()) return null;

  const cacheKey = title;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const prompt = enrichPrompt(title, extract);

  try {
    const parsed = await generateText({
      prompt,
      system: ENRICH_SYSTEM,
      json: true,
      schema: ENRICH_SCHEMA,
      maxTokens: 1024,
    });
    cache.set(cacheKey, parsed);
    return parsed;
  } catch (err) {
    if (err.message?.includes('429') || err.message?.includes('quota') || err.status === 429) {
      disabled = true;
      console.warn('LLM quota exhausted — enrichment disabled for this session');
    } else {
      console.warn('LLM enrich error:', err.message);
    }
    throw err;
  }
}
