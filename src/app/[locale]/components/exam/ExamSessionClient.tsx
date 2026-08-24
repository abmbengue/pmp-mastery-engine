"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/shared/types/locale";

type ExamOption = {
  id: string;
  label: string;
  isCorrect?: boolean;
  explanationWrong?: string;
};

type ExamQuestionView = {
  sessionQuestionId: string;
  questionId: string;
  sortOrder: number;
  flagged: boolean;
  answered: boolean;
  selectedOptionIds: string[];
  type: string;
  scenario: string | null;
  prompt: string;
  difficulty: string | null;
  domain: string | null;
  deliveryApproach: string | null;
  options: ExamOption[];
  explanation?: string;
  correctOptionIds?: string[];
};

type SessionView = {
  id: string;
  status: string;
  currentIndex: number;
  elapsedSeconds: number;
  remainingSeconds: number | null;
  exam: {
    slug: string;
    title: string;
    questionCount: number;
    durationMinutes: number;
  };
  summary: {
    answered: number;
    unanswered: number;
    flagged: number;
    total: number;
  };
  questions: ExamQuestionView[];
  result: null | {
    percentage: number;
    readinessLevel: string;
  };
};

type Labels = Record<string, string>;

function formatTimer(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export function ExamSessionClient({
  locale,
  sessionId,
  initial,
  labels,
}: {
  locale: Locale;
  sessionId: string;
  initial: SessionView;
  labels: Labels;
}) {
  const router = useRouter();
  const [view, setView] = useState(initial);
  const [index, setIndex] = useState(initial.currentIndex);
  const [selected, setSelected] = useState<string[]>(
    initial.questions[initial.currentIndex]?.selectedOptionIds ?? []
  );
  const [elapsed, setElapsed] = useState(initial.elapsedSeconds);
  const [remaining, setRemaining] = useState(initial.remainingSeconds);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const question = view.questions[index];
  const isMulti = question?.type === "MULTIPLE_CHOICE";
  const completed = view.status === "COMPLETED";

  const navigatorItems = useMemo(
    () =>
      view.questions.map((q, i) => ({
        index: i,
        answered: q.answered || (i === index && selected.length > 0),
        flagged: q.flagged,
        current: i === index,
      })),
    [view.questions, index, selected]
  );

  const persistAnswer = useCallback(
    async (sessionQuestionId: string, selectedOptionIds: string[], nextIndex: number) => {
      await fetch(`/api/exam/${sessionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "answer",
          sessionQuestionId,
          selectedOptionIds,
          currentIndex: nextIndex,
          elapsedSeconds: elapsed,
          remainingSeconds: remaining,
        }),
      });
    },
    [sessionId, elapsed, remaining]
  );

  useEffect(() => {
    if (completed) return;
    tickRef.current = setInterval(() => {
      setElapsed((e) => e + 1);
      setRemaining((r) => (r == null ? r : Math.max(0, r - 1)));
    }, 1000);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [completed]);

  useEffect(() => {
    if (remaining === 0 && !completed && !submitting) {
      void handleSubmit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining]);

  useEffect(() => {
    questionRef.current?.focus();
  }, [index]);

  async function goTo(next: number) {
    if (!question) return;
    const clamped = Math.max(0, Math.min(view.questions.length - 1, next));
    if (selected.length > 0 && !completed) {
      await persistAnswer(question.sessionQuestionId, selected, clamped);
      setView((v) => ({
        ...v,
        questions: v.questions.map((q) =>
          q.sessionQuestionId === question.sessionQuestionId
            ? { ...q, answered: true, selectedOptionIds: selected }
            : q
        ),
        summary: {
          ...v.summary,
          answered: v.questions.filter(
            (q) =>
              q.sessionQuestionId === question.sessionQuestionId ||
              q.answered ||
              (q.sortOrder === clamped && selected.length > 0)
          ).length,
        },
      }));
    } else if (!completed) {
      await fetch(`/api/exam/${sessionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "navigate",
          currentIndex: clamped,
          elapsedSeconds: elapsed,
          remainingSeconds: remaining,
        }),
      });
    }
    setIndex(clamped);
    setSelected(view.questions[clamped]?.selectedOptionIds ?? []);
  }

  function toggleOption(id: string) {
    if (completed) return;
    if (isMulti) {
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    } else {
      setSelected([id]);
    }
  }

  async function toggleFlag() {
    if (!question || completed) return;
    const next = !question.flagged;
    await fetch(`/api/exam/${sessionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "flag",
        sessionQuestionId: question.sessionQuestionId,
        flagged: next,
      }),
    });
    setView((v) => ({
      ...v,
      questions: v.questions.map((q) =>
        q.sessionQuestionId === question.sessionQuestionId
          ? { ...q, flagged: next }
          : q
      ),
      summary: {
        ...v.summary,
        flagged: v.questions.filter((q) =>
          q.sessionQuestionId === question.sessionQuestionId ? next : q.flagged
        ).length,
      },
    }));
  }

  async function handleSubmit(force = false) {
    if (!force) {
      setShowSubmitConfirm(true);
      return;
    }
    setSubmitting(true);
    setError(null);
    if (question && selected.length > 0) {
      await persistAnswer(question.sessionQuestionId, selected, index);
    }
    const res = await fetch(`/api/exam/${sessionId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale, elapsedSeconds: elapsed }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? labels.submitError);
      setSubmitting(false);
      return;
    }
    router.push(`/${locale}/pmp-exam/${sessionId}/review`);
    router.refresh();
  }

  if (!question) {
    return <p role="alert">{labels.loadError}</p>;
  }

  const answeredCount = view.questions.filter(
    (q, i) => q.answered || (i === index && selected.length > 0)
  ).length;
  const unansweredCount = view.questions.length - answeredCount;
  const flaggedCount = view.summary.flagged;

  return (
    <section className="space-y-4" data-testid="exam-session-page">
      <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-white/95 p-3 shadow-sm backdrop-blur">
        <div>
          <p className="text-sm text-gray-500">{view.exam.title}</p>
          <p
            className="text-lg font-semibold"
            data-testid="exam-progress"
            aria-live="polite"
          >
            {labels.question} {index + 1} / {view.questions.length}
          </p>
        </div>
        <div
          className="rounded-md bg-slate-900 px-3 py-2 font-mono text-sm text-white"
          data-testid="exam-timer"
          role="timer"
          aria-label={labels.timer}
          aria-live="off"
        >
          {remaining != null
            ? formatTimer(remaining)
            : `${labels.elapsed}: ${formatTimer(elapsed)}`}
        </div>
      </div>

      <div
        ref={questionRef}
        tabIndex={-1}
        className="rounded-xl border bg-white p-5 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        data-testid="exam-question"
      >
        {question.scenario && (
          <div
            className="mb-4 rounded-lg bg-slate-50 p-4 text-sm text-gray-800"
            data-testid="exam-scenario"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {labels.scenario}
            </p>
            <p>{question.scenario}</p>
          </div>
        )}
        <h2 className="text-xl font-semibold text-gray-900" data-testid="exam-prompt">
          {question.prompt}
        </h2>
        <p className="mt-2 text-xs text-gray-500">
          {[question.domain, question.deliveryApproach, question.difficulty]
            .filter(Boolean)
            .join(" · ")}
        </p>

        <fieldset className="mt-5 space-y-3" aria-label={labels.options}>
          <legend className="sr-only">{labels.options}</legend>
          {question.options.map((opt) => {
            const checked = selected.includes(opt.id);
            return (
              <label
                key={opt.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition ${
                  checked
                    ? "border-blue-600 bg-blue-50 ring-2 ring-blue-500"
                    : "border-gray-200 hover:border-blue-300"
                }`}
                data-testid={`exam-option-${opt.id}`}
              >
                <input
                  type={isMulti ? "checkbox" : "radio"}
                  name="exam-answer"
                  className="mt-1"
                  checked={checked}
                  disabled={completed}
                  onChange={() => toggleOption(opt.id)}
                />
                <span>{opt.label}</span>
              </label>
            );
          })}
        </fieldset>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-40"
          onClick={() => void goTo(index - 1)}
          disabled={index === 0}
          data-testid="exam-previous"
        >
          {labels.previous}
        </button>
        <button
          type="button"
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-40"
          onClick={() => void goTo(index + 1)}
          disabled={index >= view.questions.length - 1}
          data-testid="exam-next"
        >
          {labels.next}
        </button>
        <button
          type="button"
          className={`rounded-lg border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            question.flagged ? "border-amber-500 bg-amber-50 text-amber-900" : ""
          }`}
          onClick={() => void toggleFlag()}
          aria-pressed={question.flagged}
          data-testid="exam-flag"
        >
          {question.flagged ? labels.unflag : labels.flag}
        </button>
        <button
          type="button"
          className="ml-auto rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => void handleSubmit(false)}
          data-testid="exam-finish"
          disabled={completed || submitting}
        >
          {labels.finish}
        </button>
      </div>

      <div
        className="rounded-xl border bg-white p-4"
        data-testid="exam-navigator"
        aria-label={labels.navigator}
      >
        <div className="mb-2 flex flex-wrap gap-3 text-xs text-gray-600">
          <span data-testid="exam-answered-count">
            {labels.answered}: {answeredCount}
          </span>
          <span data-testid="exam-unanswered-count">
            {labels.unanswered}: {unansweredCount}
          </span>
          <span data-testid="exam-flagged-count">
            {labels.flagged}: {flaggedCount}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {navigatorItems.map((item) => (
            <button
              key={item.index}
              type="button"
              onClick={() => void goTo(item.index)}
              className={`h-9 min-w-9 rounded border px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                item.current
                  ? "border-blue-700 bg-blue-700 text-white"
                  : item.flagged
                    ? "border-amber-500 bg-amber-50"
                    : item.answered
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-300 bg-white"
              }`}
              aria-current={item.current ? "true" : undefined}
              aria-label={`${labels.question} ${item.index + 1}${
                item.flagged ? `, ${labels.flagged}` : ""
              }${item.answered ? `, ${labels.answered}` : `, ${labels.unanswered}`}`}
              data-testid={`exam-nav-${item.index + 1}`}
            >
              {item.index + 1}
            </button>
          ))}
        </div>
      </div>

      {showSubmitConfirm && (
        <div
          className="fixed inset-0 z-20 flex items-end justify-center bg-black/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="submit-confirm-title"
          data-testid="exam-submit-confirm"
        >
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl">
            <h3 id="submit-confirm-title" className="text-lg font-semibold">
              {labels.confirmTitle}
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-gray-700">
              <li>
                {labels.answered}: {answeredCount}
              </li>
              <li>
                {labels.unanswered}: {unansweredCount}
              </li>
              <li>
                {labels.flagged}: {flaggedCount}
              </li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">{labels.practiceNotice}</p>
            {error && (
              <p className="mt-2 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-lg border px-4 py-2 text-sm"
                onClick={() => setShowSubmitConfirm(false)}
                data-testid="exam-submit-cancel"
              >
                {labels.cancel}
              </button>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => void handleSubmit(true)}
                disabled={submitting}
                data-testid="exam-submit-confirm-btn"
              >
                {submitting ? labels.submitting : labels.confirmSubmit}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
