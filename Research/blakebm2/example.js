/**
 * Same request as the curl in gemini-curl-command.txt, using JavaScript fetch().
 * Loads the API key from the .env file in this folder.
 *
 * Run from this folder:
 *   node example.js
 */

import "dotenv/config";
import readline from "readline";

const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";
const apiKey = process.env.GEMINI_API_KEY;

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const topic = await new Promise(resolve => rl.question("Enter a skill tree topic: ", resolve));
rl.close();

async function callGemini() {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "x-goog-api-key": apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: `Generate a ${topic} skill tree with 3-5 levels from basic to advanced. Respond with ONLY this exact JSON, no extra text, no other keys:
            {"nodes": [{"name": "skill name", "emoji": "🎯", "level": 1, "requires": [], "description": "1-2 sentences on how to develop this skill", "tips": ["tip 1", "tip 2", "tip 3"]}]}
            Rules: level 1 = most basic skills with no requirements, higher levels = more advanced, requires = array of skill names from lower levels that must be learned first, description = practical
             advice on developing this skill, tips = 3 short actionable practice tips, emoji = a single emoji that best represents this specific skill. Generate 10-16 total skills.`
          }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    console.error("Request failed:", response.status, await response.text());
    return;
  }

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));

  // Testing Stuff

  const rawText = data.candidates[0].content.parts[0].text;
  const cleaned = rawText.replace(/```json|```/g, "").trim();
  const skillTree = JSON.parse(cleaned);

  console.log(skillTree.nodes.length);
  skillTree.nodes.forEach(node => console.log(node.name));
}

callGemini();