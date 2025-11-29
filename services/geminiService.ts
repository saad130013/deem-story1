// src/services/geminiService.ts

// ⚠️ ضع مفتاح Gemini هنا مؤقتًا (تجربة فقط)
// تقدر تجيبه من Google AI Studio
const GEMINI_API_KEY = "gen-lang-client-0290607115";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export async function generateLesson(prompt: string): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key is missing");
  }

  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Gemini error:", response.status, text);
    throw new Error(`Gemini request failed: ${response.status}`);
  }

  const data = await response.json();

  // نحاول نقرأ النص من أول candidate
  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ??
    "لم يتمكن Gemini من توليد نص، حاول مرة أخرى.";

  return text;
}

// لو عندك كويز أو أشياء ثانية تقدر تبنيها من نفس النص
export async function generateQuiz(prompt: string): Promise<string> {
  const quizPrompt = `
اكتب أسئلة تفاعلية للأطفال بناءً على هذا الدرس:

${prompt}

- اجعل الأسئلة بسيطة وواضحة.
- استخدم ترقيم (1,2,3...) للأسئلة.
- ضع الخيارات على شكل (أ، ب، ج، د) إن أمكن.
`;

  return generateLesson(quizPrompt);
}
