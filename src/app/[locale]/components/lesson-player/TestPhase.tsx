"use client";

import { useState } from "react";
import type { Locale } from "@/shared/types/locale";

export interface QuizOption {
  id: string;
  label: string;
  isCorrect: boolean;
  explanationWrong?: string;
}

export interface QuizQuestion {
  id: string;
  type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE";
  prompt: string;
  explanationCorrect: string;
  options: QuizOption[];
}

export interface QuizResult {
  questionId: string;
  isCorrect: boolean;
  score: number;
  selectedOptionIds: string[];
  correctOptionIds: string[];
  question: QuizQuestion;
}

interface TestPhaseProps {
  questions: QuizQuestion[];
  locale: Locale; // reserved for future per-locale question rendering
  onSubmit: (answers: { questionId: string; selectedOptionIds: string[] }[]) => Promise<void>;
  labels: {
    instruction: string;
    selectOne: string;
    selectMultiple: string;
    trueOrFalse: string;
    submit: string;
  };
}

export function TestPhase({ questions, locale: _locale, onSubmit, labels }: TestPhaseProps) {  // eslint-disable-line @typescript-eslint/no-unused-vars
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [submitting, setSubmitting] = useState(false);

  function toggleSingle(questionId: string, optionId: string) {
    setSelections((prev) => ({ ...prev, [questionId]: [optionId] }));
  }

  function toggleMultiple(questionId: string, optionId: string) {
    setSelections((prev) => {
      const current = prev[questionId] ?? [];
      return {
        ...prev,
        [questionId]: current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : [...current, optionId],
      };
    });
  }

  const allAnswered = questions.every((q) => (selections[q.id]?.length ?? 0) > 0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!allAnswered || submitting) return;
    setSubmitting(true);
    const answers = questions.map((q) => ({
      questionId: q.id,
      selectedOptionIds: selections[q.id] ?? [],
    }));
    await onSubmit(answers);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" data-testid="test-phase">
      {questions.map((q) => {
        const isMultiple = q.type === "MULTIPLE_CHOICE";
        const instruction = isMultiple ? labels.selectMultiple : q.type === "TRUE_FALSE" ? labels.trueOrFalse : labels.selectOne;

        return (
          <fieldset key={q.id} className="rounded-lg border bg-white p-4 sm:p-6">
            <legend className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {instruction}
            </legend>
            <p
              id={`prompt-${q.id}`}
              className="mb-4 text-base font-medium leading-relaxed text-gray-900"
              data-testid="quiz-question-prompt"
            >
              {q.prompt}
            </p>
            <div className="space-y-2" role="group" aria-labelledby={`prompt-${q.id}`}>
              {q.options.map((opt) => {
                const selected = (selections[q.id] ?? []).includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={[
                      "flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors focus-within:ring-2 focus-within:ring-blue-500",
                      selected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    <input
                      type={isMultiple ? "checkbox" : "radio"}
                      name={`q-${q.id}`}
                      value={opt.id}
                      checked={selected}
                      onChange={() =>
                        isMultiple
                          ? toggleMultiple(q.id, opt.id)
                          : toggleSingle(q.id, opt.id)
                      }
                      className="h-4 w-4 shrink-0 accent-blue-600"
                      data-testid={`option-${opt.id}`}
                    />
                    <span className="text-sm text-gray-800">{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}
      <button
        type="submit"
        disabled={!allAnswered || submitting}
        className="min-h-11 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 sm:w-auto sm:px-8"
        data-testid="submit-quiz"
      >
        {submitting ? "…" : labels.submit}
      </button>
    </form>
  );
}
