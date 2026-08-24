"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/shared/types/locale";

interface QuizPageClientProps {
  locale: Locale;
  academySlug: string;
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  questionId: string;
  prompt: string;
  options: Array<{ id: string; label: string }>;
  labels: {
    quiz: string;
    submit: string;
  };
}

export function QuizPageClient({
  locale,
  academySlug,
  courseSlug,
  moduleSlug,
  lessonSlug,
  questionId,
  prompt,
  options,
  labels,
}: QuizPageClientProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    setSubmitting(true);

    const res = await fetch("/api/quiz/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionId,
        selectedOptionIds: [selected],
        userEmail: "demo@pla.local",
      }),
    });

    const data = await res.json();
    const params = new URLSearchParams({
      score: String(data.score),
      correct: String(data.isCorrect),
    });

    router.push(
      `/${locale}/academies/${academySlug}/courses/${courseSlug}/modules/${moduleSlug}/lessons/${lessonSlug}/quiz/${questionId}/result?${params}`
    );
  }

  return (
    <section data-testid="quiz-page">
      <h1 className="mb-4 text-2xl font-bold">{labels.quiz}</h1>
      <p className="mb-6" data-testid="quiz-prompt">
        {prompt}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {options.map((opt) => (
          <label
            key={opt.id}
            className="flex cursor-pointer items-center gap-3 rounded border bg-white p-3"
          >
            <input
              type="radio"
              name="answer"
              value={opt.id}
              checked={selected === opt.id}
              onChange={() => setSelected(opt.id)}
              data-testid={`option-${opt.id}`}
            />
            {opt.label}
          </label>
        ))}
        <button
          type="submit"
          disabled={!selected || submitting}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
          data-testid="submit-quiz"
        >
          {labels.submit}
        </button>
      </form>
    </section>
  );
}
