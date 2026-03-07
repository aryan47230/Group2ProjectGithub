async function callGemini() {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";
  const apiKey = process.env.GEMINI_API_KEY;  // Replace with your key

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

  // ... your fetch code above ...

    if (response.ok) {
        const data = await response.json(); // This reads the JSON body
        
        // This digs directly into the object to grab just the text response
        const aiText = data.candidates[0].content.parts[0].text; 
        
        console.log("Gemini says:");
        console.log(aiText);
    } else {
        console.log("Request failed with status:", response.status);
    }
}

callGemini();
