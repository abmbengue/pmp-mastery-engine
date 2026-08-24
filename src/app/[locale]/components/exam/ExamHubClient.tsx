"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/shared/types/locale";

type ExamCard = {
  id: string;
  slug: string;
  type: string;
  title: string;
  description: string;
  questionCount: number;
  durationMinutes: number;
  domainFilter: string | null;
};

export function ExamHubClient({
  locale,
  exams,
  inProgressSessionId,
  labels,
}: {
  locale: Locale;
  exams: ExamCard[];
  inProgressSessionId: string | null;
  labels: Record<string, string>;
}) {
  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startExam(slug: string) {
    setLoadingSlug(slug);
    setError(null);
    const res = await fetch("/api/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ examSlug: slug }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? labels.startError);
      setLoadingSlug(null);
      return;
    }
    router.push(`/${locale}/pmp-exam/${data.sessionId}`);
  }

  return (
    <div className="space-y-6" data-testid="pmp-exam-hub">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">{labels.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">{labels.subtitle}</p>
        <p className="mt-2 text-xs text-amber-800" data-testid="pmp-ip-notice">
          {labels.ipNotice}
        </p>
      </header>

      {inProgressSessionId && (
        <div
          className="rounded-xl border border-blue-200 bg-blue-50 p-4"
          data-testid="resume-exam-banner"
        >
          <p className="text-sm font-medium text-blue-900">{labels.resumeHint}</p>
          <button
            type="button"
            className="mt-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white"
            onClick={() => router.push(`/${locale}/pmp-exam/${inProgressSessionId}`)}
            data-testid="resume-exam-btn"
          >
            {labels.resume}
          </button>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <ul className="grid gap-4 md:grid-cols-2">
        {exams
          .filter((e) => e.slug !== "full-pmp")
          .map((exam) => (
            <li
              key={exam.id}
              className="rounded-xl border bg-white p-5"
              data-testid={`exam-card-${exam.slug}`}
            >
              <h2 className="text-lg font-semibold">{exam.title}</h2>
              <p className="mt-1 text-sm text-gray-600">{exam.description}</p>
              <p className="mt-3 text-xs text-gray-500">
                {exam.questionCount} {labels.questions}
                {exam.durationMinutes > 0
                  ? ` · ${exam.durationMinutes} ${labels.minutes}`
                  : ` · ${labels.untimed}`}
                {exam.domainFilter ? ` · ${exam.domainFilter}` : ""}
              </p>
              <button
                type="button"
                className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => void startExam(exam.slug)}
                disabled={loadingSlug === exam.slug}
                data-testid={`start-exam-${exam.slug}`}
              >
                {loadingSlug === exam.slug ? labels.starting : labels.start}
              </button>
            </li>
          ))}
      </ul>

      <p className="text-xs text-gray-500" data-testid="full-exam-architecture-note">
        {labels.fullExamNote}
      </p>
    </div>
  );
}
