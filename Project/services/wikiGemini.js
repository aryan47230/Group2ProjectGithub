import { generateText, resolveProvider } from './llm.js';

const cache = new Map();
let disabled = false;

function isEnabled() {
  if (disabled) return false;
  const provider = resolveProvider();
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

  const prompt = `You are a knowledge curator. Given a Wikipedia article, identify the 8 most important and interesting related Wikipedia articles that someone exploring this topic should know about.

Article: "${title}"
Intro: "${(extract || '').slice(0, 800)}"

Return this JSON:
{
  "connections": [
    {
      "title": "Exact Wikipedia article title",
      "relation": "core|related|application|foundation",
      "description": "One sentence on why this connects to ${title}"
    }
  ]
}

Rules:
- Return EXACTLY 8 connections.
- Each "title" MUST be the exact title of a real Wikipedia article. Do not invent titles.
- Use "core" for fundamental subtopics, "related" for closely related concepts, "application" for practical uses, "foundation" for prerequisite knowledge.
- Pick topics that are genuinely insightful and would help someone understand ${title} deeply — not generic or tangential links.
- Pure JSON only.`;

  try {
    const parsed = await generateText({ prompt, json: true });
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
