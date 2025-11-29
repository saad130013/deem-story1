// src/lib/gemini.js
export async function generateLessonOrStory(prompt) {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("❌ API key is missing. Add VITE_GEMINI_API_KEY to .env");
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }   // ← النص الذي يدخل من المستخدم
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("❌ Gemini Error:", data);
      throw new Error(data.error?.message || "API Error");
    }

    const output =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ لم يتم استرجاع نص من Gemini";

    return output;
  } catch (err) {
    console.error("Gemini Request Failed:", err);
    throw err;
  }
}
