"use client";

import { useState } from "react";
import type { ExercisePayload, FlashcardPayload } from "@/shared/types/content-payloads";
import type { Locale } from "@/shared/types/locale";

interface ExerciseBlockProps {
  payload: ExercisePayload;
  locale: Locale;
  labels: { title: string; markDone: string; done: string };
}

export function ExerciseBlock({ payload, locale, labels }: ExerciseBlockProps) {
  const [isDone, setIsDone] = useState(false);
  const prompt = locale === "fr" ? payload.promptFr : payload.promptEn;
  const hint = locale === "fr" ? payload.hintFr : payload.hintEn;

  return (
    <div className="rounded-lg border bg-amber-50 p-4 sm:p-6" data-testid="exercise-block">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-700">
        {labels.title}
      </h3>
      <p className="mb-4 leading-relaxed text-gray-800">{prompt}</p>
      {hint && (
        <p className="mb-4 text-sm text-gray-500 italic">💡 {hint}</p>
      )}
      <button
        type="button"
        onClick={() => setIsDone(true)}
        disabled={isDone}
        className={[
          "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
          isDone
            ? "bg-green-100 text-green-700 cursor-default"
            : "bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400",
        ].join(" ")}
        aria-pressed={isDone}
        data-testid="exercise-done-btn"
      >
        {isDone ? labels.done : labels.markDone}
      </button>
    </div>
  );
}

interface FlashcardBlockProps {
  payload: FlashcardPayload;
  locale: Locale;
  labels: { reveal: string; hide: string; front: string; back: string };
}

export function FlashcardBlock({ payload, locale, labels }: FlashcardBlockProps) {
  const [revealed, setRevealed] = useState(false);
  const front = locale === "fr" ? payload.frontFr : payload.frontEn;
  const back = locale === "fr" ? payload.backFr : payload.backEn;

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm sm:p-6" data-testid="flashcard-block">
      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {labels.front}
        </span>
        <p className="mt-1 text-base font-medium text-gray-900">{front}</p>
      </div>

      {revealed ? (
        <div className="border-t pt-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-green-600">
            {labels.back}
          </span>
          <p className="mt-1 leading-relaxed text-gray-800">{back}</p>
          <button
            type="button"
            onClick={() => setRevealed(false)}
            className="mt-3 text-sm text-gray-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            data-testid="flashcard-hide-btn"
          >
            {labels.hide}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          data-testid="flashcard-reveal-btn"
        >
          {labels.reveal}
        </button>
      )}
    </div>
  );
}
