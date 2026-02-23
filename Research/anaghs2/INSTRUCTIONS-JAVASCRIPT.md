# How to Do the Same Request in JavaScript (Beginner Guide)

This guide turns the **curl** command from `gemini-curl-command.txt` into JavaScript. You don't need to learn JavaScript deeply—just follow the steps to call the same API.

---

## What the curl command does (in plain language)

- **URL:** We send a request to  
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent`
- **Method:** We use **POST** (we are sending data to the server).
- **Headers:** We send two pieces of metadata:
  1. `x-goog-api-key` — your API key (replace `YOUR_API_KEY` with your real key; never commit real keys to git).
  2. `Content-Type: application/json` — tells the server we are sending JSON text.
- **Body:** A JSON object with one prompt: `"Explain how AI works in a few words"`.

In JavaScript we do the same thing using the built-in **Fetch API** (`fetch()`).

---

## Step-by-step in JavaScript

1. **Store the URL in a variable.**  
   Use the same URL as in the curl command.

2. **Call `fetch()` with options.**  
   We pass the URL and an options object with:
   - `method: 'POST'`
   - `headers`: an object with `x-goog-api-key` and `Content-Type: application/json`
   - `body`: the same JSON as in curl, but turned into a string with `JSON.stringify(...)`

3. **Wait for the response.**  
   `fetch()` returns a Promise, so we use `await` (inside an `async` function) to get the response.

4. **Read the result.**  
   Use `response.ok` to check if the request succeeded, and `response.json()` to read the JSON body.

---

## Full code example

Replace `YOUR_API_KEY` with your actual API key before running. Do **not** commit your real key to the repo.

```javascript
async function callGemini() {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";
  const apiKey = "YOUR_API_KEY";  // Replace with your key

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
            { text: "Explain how AI works in a few words" }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    console.log("Request failed with status:", response.status);
    return;
  }

  const data = await response.json();
  console.log(data);
}

callGemini();
```

**How to run:**

- **In the browser:** Open Developer Tools (F12) → Console, paste the code, and press Enter.
- **In Node.js (v18+):** Save as a `.js` file and run: `node yourfile.js`
- **Using the included `example.js`:** This folder has an `example.js` script that does the same thing. It reads your API key from the **environment variable** `GEMINI_API_KEY` so you don't type the key into the file. From this folder in the terminal run:
  - **Mac/Linux:** `GEMINI_API_KEY=your_key_here node example.js`
  - **Windows (CMD):** `set GEMINI_API_KEY=your_key_here && node example.js`
  Never commit your real API key; using an env var keeps it out of the code.

---

## What could go wrong?

| Problem | What to check |
|--------|----------------|
| Wrong or missing API key | Use a valid key and put it in the `apiKey` variable. Never commit the real key. |
| Wrong URL | Copy the URL exactly from `gemini-curl-command.txt`. |
| Request failed (e.g. 400, 401, 404) | Log `response.status` and the response body. 401 usually means bad/missing API key. |
| Bad JSON in body | The body must match the shape above; use `JSON.stringify()` so it's a string. |

---

## Quick reference: curl vs JavaScript

| curl | JavaScript (Fetch) |
|------|---------------------|
| `-X POST` | `method: "POST"` |
| `-H "Header: value"` | `headers: { "Header": "value" }` |
| `-d '{ ... }'` | `body: JSON.stringify({ ... })` |

This matches the official Fetch API pattern for POST requests with JSON (see MDN Web Docs).
