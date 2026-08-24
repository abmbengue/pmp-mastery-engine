"use client";

import type { QuizResult } from "./TestPhase";
import { AiTutorPanel } from "@/app/[locale]/components/ai-tutor/AiTutorPanel";
import type { AiTutorPanelLabels } from "@/app/[locale]/components/ai-tutor/AiTutorPanel";

interface ReviewPhaseProps {
  score: number;
  results: QuizResult[];
  locale: "fr" | "en";
  academySlug: string;
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
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
  aiTutorLabels: AiTutorPanelLabels;
}

export function ReviewPhase({
  score,
  results,
  locale,
  academySlug,
  courseSlug,
  moduleSlug,
  lessonSlug,
  labels,
  aiTutorLabels,
}: ReviewPhaseProps) {
  const correct = results.filter((r) => r.isCorrect);
  const wrong = results.filter((r) => !r.isCorrect);

  const scoreColor =
    score >= 80 ? "text-green-600" : score >= 60 ? "text-amber-600" : "text-red-600";

  return (
    <div className="space-y-6" data-testid="review-phase">
      <div className="rounded-lg border bg-white p-5 text-center">
        <p className="mb-1 text-sm text-gray-500">{labels.yourScore}</p>
        <p className={`text-5xl font-bold ${scoreColor}`} data-testid="review-score">
          {score}%
        </p>
      </div>

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

                  <div className="mt-3">
                    <AiTutorPanel
                      testId={`ai-tutor-panel-wrong-${r.questionId}`}
                      context={{
                        locale,
                        academySlug,
                        courseSlug,
                        moduleSlug,
                        lessonSlug,
                        questionId: r.questionId,
                        selectedOptionIds: r.selectedOptionIds,
                        showMistakeAction: true,
                      }}
                      labels={aiTutorLabels}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <AiTutorPanel
        context={{
          locale,
          academySlug,
          courseSlug,
          moduleSlug,
          lessonSlug,
          questionId: results[0]?.questionId,
          selectedOptionIds: results[0]?.selectedOptionIds,
          showMistakeAction: wrong.length > 0,
        }}
        labels={aiTutorLabels}
      />
    </div>
  );
}
