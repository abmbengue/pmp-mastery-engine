"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  shortId: string;
  academySlug: string;
  initiallyCompleted: boolean;
  labels: {
    markCompleted: string;
    completed: string;
    error: string;
  };
};

export function MarkShortCompletedButton({
  shortId,
  academySlug,
  initiallyCompleted,
  labels,
}: Props) {
  const router = useRouter();
  const [completed, setCompleted] = useState(initiallyCompleted);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onMark() {
    if (completed || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/shorts/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shortId, academySlug }),
      });
      const data = (await res.json()) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setError(labels.error);
        return;
      }
      setCompleted(true);
      router.refresh();
    } catch {
      setError(labels.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={onMark}
        disabled={completed || loading}
        className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-default disabled:border-green-300 disabled:bg-green-50 disabled:text-green-800"
        data-testid="mark-short-completed"
        aria-pressed={completed}
      >
        {completed ? labels.completed : labels.markCompleted}
      </button>
      {error && (
        <p className="mt-2 text-xs text-red-700" role="alert" data-testid="short-complete-error">
          {error}
        </p>
      )}
      {completed && (
        <p className="mt-2 text-xs text-green-700" data-testid="short-completed-badge">
          {labels.completed}
        </p>
      )}
    </div>
  );
}
