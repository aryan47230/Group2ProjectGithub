/**
 * Same request as the curl in gemini-curl-command.txt, using JavaScript fetch().
 * Uses the API key from the GEMINI_API_KEY environment variable so you don't put keys in code.
 *
 * Run from this folder:
 *   GEMINI_API_KEY=your_key_here node example.js
 *
 * (On Windows CMD: set GEMINI_API_KEY=your_key_here && node example.js)
 */

const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("Missing GEMINI_API_KEY. Run: GEMINI_API_KEY=your_key node example.js");
  process.exit(1);
}

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
            { text: `Generate a fishing skill tree. Respond with ONLY this exact JSON, no extra text, no other keys:
              {"nodes": [{"name": "skill name"}]}`}

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