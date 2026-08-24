"use client";

import { useState } from "react";
import type { AiTutorMode } from "@/modules/ai-tutor/ai-tutor-port";

export type AiTutorPanelLabels = {
  title: string;
  needHelp: string;
  explainConcept: string;
  giveHint: string;
  explainMistake: string;
  teachConcept: string;
  ask: string;
  placeholder: string;
  unavailable: string;
  loading: string;
  response: string;
};

export type AiTutorPanelContext = {
  locale: "fr" | "en";
  academySlug?: string;
  courseSlug?: string;
  moduleSlug?: string;
  lessonSlug?: string;
  questionId?: string;
  selectedOptionIds?: string[];
  showMistakeAction?: boolean;
};

type Props = {
  context: AiTutorPanelContext;
  labels: AiTutorPanelLabels;
  testId?: string;
};

export function AiTutorPanel({ context, labels, testId = "ai-tutor-panel" }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [userMessage, setUserMessage] = useState("");

  async function ask(mode: AiTutorMode) {
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/ai-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          locale: context.locale,
          academySlug: context.academySlug,
          courseSlug: context.courseSlug,
          moduleSlug: context.moduleSlug,
          lessonSlug: context.lessonSlug,
          questionId: context.questionId,
          selectedOptionIds: context.selectedOptionIds,
          userMessage: userMessage.trim() || undefined,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!res.ok || !data.ok || !data.message) {
        setError(labels.unavailable);
        return;
      }
      setMessage(data.message);
    } catch {
      setError(labels.unavailable);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="rounded-lg border border-blue-200 bg-blue-50/60 p-4"
      data-testid={testId}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-blue-900">{labels.title}</h3>
        <button
          type="button"
          className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setOpen((v) => !v)}
          data-testid="ask-ai-tutor"
          aria-expanded={open}
        >
          {labels.ask}
        </button>
      </div>

      {context.showMistakeAction && (
        <p className="mt-2 text-xs font-medium text-blue-800" data-testid="need-help-label">
          {labels.needHelp}
        </p>
      )}

      {open && (
        <div className="mt-3 space-y-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={loading}
              onClick={() => ask("EXPLAIN")}
              className="rounded border border-blue-300 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              data-testid="ai-tutor-explain"
            >
              {labels.explainConcept}
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={() => ask("HINT")}
              className="rounded border border-blue-300 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              data-testid="ai-tutor-hint"
            >
              {labels.giveHint}
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={() => ask("TEACH")}
              className="rounded border border-blue-300 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              data-testid="ai-tutor-teach"
            >
              {labels.teachConcept}
            </button>
            {context.showMistakeAction && (
              <button
                type="button"
                disabled={loading}
                onClick={() => ask("EXPLAIN_MISTAKE")}
                className="rounded border border-blue-300 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                data-testid="ai-tutor-mistake"
              >
                {labels.explainMistake}
              </button>
            )}
          </div>

          <label className="block text-xs text-gray-600">
            <span className="sr-only">{labels.placeholder}</span>
            <textarea
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              rows={2}
              maxLength={500}
              placeholder={labels.placeholder}
              className="mt-1 w-full rounded border border-blue-200 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-testid="ai-tutor-user-message"
            />
          </label>

          {loading && (
            <p className="text-xs text-gray-500" data-testid="ai-tutor-loading">
              {labels.loading}
            </p>
          )}
          {error && (
            <p className="text-xs text-red-700" role="alert" data-testid="ai-tutor-error">
              {error}
            </p>
          )}
          {message && (
            <div
              className="rounded border border-blue-100 bg-white p-3 text-sm text-gray-800"
              data-testid="ai-tutor-response"
              aria-live="polite"
            >
              <p className="mb-1 text-xs font-semibold text-blue-800">{labels.response}</p>
              <p className="whitespace-pre-wrap">{message}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
