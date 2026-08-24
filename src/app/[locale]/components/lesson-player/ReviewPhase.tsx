"use client";

import type { QuizResult } from "./TestPhase";
import type { Locale } from "@/shared/types/locale";

interface ReviewPhaseProps {
  score: number;
  results: QuizResult[];
  locale: Locale;
  labels: {
    title: string;
    yourScore: string;
    mastered: string;
    toReview: string;
    explanation: string;
    askAiTutor: string;
    aiTutorSoon: string;
    correct: string;
    incorrect: string;
  };
}

export function ReviewPhase({ score, results, locale: _locale, labels }: ReviewPhaseProps) {
  const correct = results.filter((r) => r.isCorrect);
  const wrong = results.filter((r) => !r.isCorrect);

  const scoreColor =
    score >= 80 ? "text-green-600" : score >= 60 ? "text-amber-600" : "text-red-600";

  return (
    <div className="space-y-6" data-testid="review-phase">
      {/* Score */}
      <div className="rounded-lg border bg-white p-5 text-center">
        <p className="mb-1 text-sm text-gray-500">{labels.yourScore}</p>
        <p className={`text-5xl font-bold ${scoreColor}`} data-testid="review-score">
          {score}%
        </p>
      </div>

      {/* Correct answers */}
      {correct.length > 0 && (
        <section>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-700">
            <span aria-hidden="true">✓</span> {labels.mastered}
          </h3>
          <div className="space-y-3">
            {correct.map((r) => (
              <div key={r.questionId} className="rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="mb-2 text-sm font-medium text-gray-800">{r.question.prompt}</p>
                <div className="flex items-start gap-1.5">
                  <span className="mt-0.5 text-xs font-bold text-green-600" aria-hidden="true">✓</span>
                  <div>
                    <p className="text-xs font-semibold text-green-600">{labels.correct}</p>
                    <p className="text-xs text-gray-600">{r.question.explanationCorrect}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Wrong answers */}
      {wrong.length > 0 && (
        <section>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-700">
            <span aria-hidden="true">✗</span> {labels.toReview}
          </h3>
          <div className="space-y-3">
            {wrong.map((r) => {
              const correctOpts = r.question.options.filter((o) =>
                r.correctOptionIds.includes(o.id)
              );
              const wrongOpts = r.question.options.filter(
                (o) => r.selectedOptionIds.includes(o.id) && !o.isCorrect
              );
              return (
                <div key={r.questionId} className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="mb-2 text-sm font-medium text-gray-800">{r.question.prompt}</p>

                  {wrongOpts.map((opt) => (
                    <div key={opt.id} className="mb-1 flex items-start gap-1.5">
                      <span className="mt-0.5 text-xs font-bold text-red-600" aria-hidden="true">✗</span>
                      <div>
                        <p className="text-xs text-red-700">{opt.label}</p>
                        {opt.explanationWrong && (
                          <p className="text-xs text-gray-600 italic">{opt.explanationWrong}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="mt-2 border-t border-red-200 pt-2">
                    <p className="text-xs font-semibold text-green-700">
                      {labels.explanation} : {correctOpts.map((o) => o.label).join(", ")}
                    </p>
                    <p className="text-xs text-gray-600">{r.question.explanationCorrect}</p>
                  </div>

                  {/* AI Tutor stub */}
                  <button
                    type="button"
                    title={labels.aiTutorSoon}
                    className="mt-2 text-xs text-blue-500 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-400 rounded disabled:opacity-50"
                    disabled
                    data-testid="ask-ai-tutor"
                  >
                    🤖 {labels.askAiTutor}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
