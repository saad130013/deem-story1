// services/geminiService.ts

// دالة بسيطة للتجربة لو احتجتها لاحقاً
export async function callGeminiService(prompt: string): Promise<string> {
  // مؤقتاً نرجّع نفس النص أو رسالة تجريبية
  return `Gemini placeholder response for: ${prompt}`;
}

// دالة إنشاء درس (نسخة تجريبية فقط عشان يكمل البناء)
export async function generateLesson(request: any): Promise<any> {
  // هنا تقدر لاحقاً تربط مع Gemini وترجع بيانات حقيقية
  return {
    title: 'Demo lesson',
    topic: request?.topic || 'Sample topic',
    level: request?.level || 'Grade 4',
    language: request?.language || 'ar',
    // محتوى بسيط للعرض
    content: 'This is a placeholder lesson generated for demo purposes.',
  };
}

// دالة إنشاء اختبار للدرس (نسخة تجريبية)
export async function generateQuiz(lesson: any): Promise<any[]> {
  return [
    {
    question: 'Placeholder question about the lesson.',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswerIndex: 0,
    },
  ];
}
