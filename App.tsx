// src/App.tsx
import React, { useState } from "react";
import { generateLesson, generateQuiz } from "./services/geminiService";

const App: React.FC = () => {
  const [userPrompt, setUserPrompt] = useState("");         // نص الطلب من المستخدم
  const [lessonText, setLessonText] = useState("");         // نص القصة / الدرس من Gemini
  const [quizText, setQuizText] = useState("");             // الكويز (اختياري)
  const [isLoadingLesson, setIsLoadingLesson] = useState(false);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // دالة تبني برومبت مرتب من النص اللي يكتبه المستخدم
  const buildLessonPrompt = (prompt: string): string => {
    return `
أنت معلم مبدع للأطفال. اكتب قصة تعليمية أو درس تفاعلي باللغة العربية للأطفال،
مبنية على الفكرة التالية التي سيكتبها المعلم:

"${prompt}"

الشروط:
- لغة بسيطة وواضحة تناسب الأطفال.
- أسلوب ممتع وتشويقي.
- تقسيم إلى فقرات قصيرة.
- إضافة حوارات خفيفة بين الشخصيات إن أمكن.
- في نهاية القصة ضع فقرة قصيرة بعنوان "رسالة تربوية" تلخص الفائدة الأساسية.

اكتب النص فقط بدون عناوين تنسيقية إضافية مثل (مقدمة، خاتمة).
    `.trim();
  };

  const handleGenerateLesson = async () => {
    if (!userPrompt.trim()) {
      setError("اكتب فكرة القصة أو الدرس أولاً 👇");
      return;
    }

    setError(null);
    setLessonText("");
    setQuizText("");
    setIsLoadingLesson(true);

    try {
      const prompt = buildLessonPrompt(userPrompt);
      const result = await generateLesson(prompt);
      setLessonText(result);
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء الاتصال بـ Gemini، حاول مرة أخرى.");
    } finally {
      setIsLoadingLesson(false);
    }
  };

  const handleGenerateQuiz = async () => {
    if (!lessonText.trim()) {
      setError("أنشئ الدرس أولاً، ثم اطلب توليد أسئلة عليه.");
      return;
    }

    setError(null);
    setIsLoadingQuiz(true);
    setQuizText("");

    try {
      const result = await generateQuiz(lessonText);
      setQuizText(result);
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء توليد الأسئلة من Gemini.");
    } finally {
      setIsLoadingQuiz(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-sky-50 to-pink-50 text-slate-900">
      {/* الهيدر / العنوان */}
      <header className="border-b border-slate-100 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <div>
              <div className="text-sm text-slate-500">مساعد المعلم الذكي</div>
              <div className="font-bold text-slate-800">منصة ديم التعليمية</div>
            </div>
          </div>
          <span className="text-xs text-slate-400">
            نسخة تجريبية – توليد قصص ودروس باستخدام Gemini
          </span>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
        {/* الهيرو */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-relaxed text-slate-900">
            حوِّل أفكارك إلى{" "}
            <span className="text-pink-500">قصص</span> و{" "}
            <span className="text-sky-500">دروس تفاعلية</span> للأطفال ✨
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            اكتب فكرة بسيطة، ودع Gemini يصنع منها درسًا أو قصة تعليمية جميلة يمكنك
            استخدامها في الفصل أو في أولادك في البيت.
          </p>
        </section>

        {/* نموذج إدخال الفكرة */}
        <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            ✏️ اكتب هنا فكرة الدرس أو القصة:
          </label>
          <textarea
            className="w-full min-h-[120px] rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-slate-50/70"
            placeholder="مثال: قصة عن طفل يتعلم أهمية الأمانة في المدرسة، العمر من ٨ إلى ١٠ سنوات..."
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
          />

          <div className="flex flex-wrap items-center gap-3 justify-between">
            <button
              onClick={handleGenerateLesson}
              disabled={isLoadingLesson}
              className="inline-flex items-center gap-2 rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoadingLesson ? "جاري توليد الدرس..." : "توليد الدرس / القصة بالذكاء الاصطناعي"}
            </button>

            <button
              onClick={handleGenerateQuiz}
              disabled={isLoadingQuiz || !lessonText}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingQuiz ? "جاري توليد الأسئلة..." : "توليد أسئلة تفاعلية على الدرس"}
            </button>
          </div>

          {error && (
            <div className="mt-2 rounded-xl bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700">
              {error}
            </div>
          )}
        </section>

        {/* نتيجة الدرس */}
        {lessonText && (
          <section className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-slate-100 p-6 space-y-3">
            <h2 className="text-lg font-bold text-slate-800 mb-2">📚 الدرس / القصة الناتجة:</h2>
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
              {lessonText}
            </div>
          </section>
        )}

        {/* نتيجة الكويز */}
        {quizText && (
          <section className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-slate-100 p-6 space-y-3">
            <h2 className="text-lg font-bold text-slate-800 mb-2">🧩 أسئلة تفاعلية على الدرس:</h2>
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
              {quizText}
            </div>
          </section>
        )}
      </main>

      {/* الفوتر */}
      <footer className="py-6 text-center text-xs text-slate-400">
        منصة ديم التعليمية – نسخة تجريبية • تم التطوير حبًا في التعليم 💜
      </footer>
    </div>
  );
};

export default App;
