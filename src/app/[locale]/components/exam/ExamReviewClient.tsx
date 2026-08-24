"use client";

import { useState } from "react";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

type ReviewQuestion = {
  sessionQuestionId: string;
  questionId: string;
  sortOrder: number;
  selectedOptionIds: string[];
  prompt: string;
  scenario: string | null;
  explanation?: string;
  correctOptionIds?: string[];
  options: Array<{
    id: string;
    label: string;
    isCorrect?: boolean;
    explanationWrong?: string;
  }>;
};

type SkillRow = {
  skillSlug: string;
  percentage: number;
  band: string;
};

type DomainRow = {
  domain: string;
  percentage: number;
  band: string;
  total: number;
};

type DeliveryRow = {
  approach: string;
  percentage: number;
  band: string;
  total: number;
};

type Recommendation = {
  title: string;
  reason: string;
  path: string;
} | null;

export function ExamReviewClient({
  locale,
  sessionId,
  practiceScore,
  readiness,
  domains,
  skills,
  delivery,
  questions,
  recommendation,
  labels,
}: {
  locale: Locale;
  sessionId: string;
  practiceScore: {
    percentage: number;
    correct: number;
    incorrect: number;
    unanswered: number;
    total: number;
  };
  readiness: {
    level: string;
    label: string;
    limitations: string;
  };
  domains: DomainRow[];
  skills: SkillRow[];
  delivery: DeliveryRow[];
  questions: ReviewQuestion[];
  recommendation: Recommendation;
  labels: Record<string, string>;
}) {
  const [aiByQuestion, setAiByQuestion] = useState<Record<string, string>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  const wrong = questions.filter((q) => {
    const correct = new Set(q.correctOptionIds ?? []);
    const selected = new Set(q.selectedOptionIds);
    if (selected.size === 0) return true;
    if (correct.size !== selected.size) return true;
    for (const id of correct) if (!selected.has(id)) return true;
    return false;
  });

  const weakSkills = skills.filter((s) => s.band === "WEAK");
  const learningSkills = skills.filter((s) => s.band === "NEEDS_PRACTICE");
  const masteredSkills = skills.filter((s) => s.band === "STRONG");

  async function explainWithAi(q: ReviewQuestion) {
    setLoadingId(q.questionId);
    setAiError(null);
    const res = await fetch("/api/ai-tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: "EXPLAIN_MISTAKE",
        locale,
        questionId: q.questionId,
        selectedOptionIds: q.selectedOptionIds,
        examSessionId: sessionId,
        userMessage:
          locale === "fr"
            ? "Explique cette question d'examen PMP pédagogique après soumission."
            : "Explain this educational PMP exam question after submission.",
      }),
    });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      setAiError(labels.aiError);
      setLoadingId(null);
      return;
    }
    setAiByQuestion((prev) => ({ ...prev, [q.questionId]: data.message }));
    setLoadingId(null);
  }

  return (
    <section className="space-y-8" data-testid="exam-review-page">
      <header className="rounded-xl border bg-white p-6">
        <h1 className="text-2xl font-bold">{labels.reviewTitle}</h1>
        <p className="mt-2 text-sm text-amber-800" data-testid="practice-score-notice">
          {labels.practiceNotice}
        </p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs text-gray-500">{labels.practiceScore}</dt>
            <dd className="text-2xl font-semibold" data-testid="practice-score">
              {practiceScore.percentage}%
            </dd>
          </div>
          <div>
            <dt className="text-xs text-gray-500">{labels.correct}</dt>
            <dd className="text-lg font-semibold" data-testid="score-correct">
              {practiceScore.correct}/{practiceScore.total}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-gray-500">{labels.incorrect}</dt>
            <dd className="text-lg font-semibold">{practiceScore.incorrect}</dd>
          </div>
          <div>
            <dt className="text-xs text-gray-500">{labels.unanswered}</dt>
            <dd className="text-lg font-semibold">{practiceScore.unanswered}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm" data-testid="practice-readiness">
          <span className="font-medium">{readiness.label}</span>
          <span className="mt-1 block text-xs text-gray-500">{readiness.limitations}</span>
        </p>
      </header>

      <section aria-labelledby="domain-perf-heading" data-testid="domain-performance">
        <h2 id="domain-perf-heading" className="mb-3 text-lg font-semibold">
          {labels.domainPerformance}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {domains.map((d) => (
            <li key={d.domain} className="rounded-lg border bg-white p-3 text-sm">
              <p className="font-medium">{d.domain}</p>
              <p data-testid={`domain-${d.domain}`}>
                {d.total === 0 ? "—" : `${d.percentage}%`} · {d.band}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="delivery-perf-heading" data-testid="delivery-performance">
        <h2 id="delivery-perf-heading" className="mb-3 text-lg font-semibold">
          {labels.deliveryPerformance}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {delivery.map((d) => (
            <li key={d.approach} className="rounded-lg border bg-white p-3 text-sm">
              <p className="font-medium">{d.approach}</p>
              <p data-testid={`delivery-${d.approach}`}>
                {d.total === 0 ? "—" : `${d.percentage}%`} · {d.band}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skill-perf-heading" data-testid="skill-performance">
        <h2 id="skill-perf-heading" className="mb-3 text-lg font-semibold">
          {labels.skillPerformance}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium text-red-700">{labels.weakSkills}</h3>
            <ul className="mt-1 space-y-1 text-sm" data-testid="weak-skills-list">
              {weakSkills.length === 0 ? (
                <li>{labels.none}</li>
              ) : (
                weakSkills.map((s) => (
                  <li key={s.skillSlug} data-testid={`weak-skill-${s.skillSlug}`}>
                    {s.skillSlug} — {s.percentage}%
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-amber-700">{labels.learningSkills}</h3>
            <ul className="mt-1 space-y-1 text-sm">
              {learningSkills.length === 0 ? (
                <li>{labels.none}</li>
              ) : (
                learningSkills.map((s) => (
                  <li key={s.skillSlug}>
                    {s.skillSlug} — {s.percentage}%
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-green-700">{labels.masteredSkills}</h3>
            <ul className="mt-1 space-y-1 text-sm">
              {masteredSkills.length === 0 ? (
                <li>{labels.none}</li>
              ) : (
                masteredSkills.map((s) => (
                  <li key={s.skillSlug}>
                    {s.skillSlug} — {s.percentage}%
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </section>

      {recommendation && (
        <section
          className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5"
          data-testid="exam-recommendation"
        >
          <h2 className="text-lg font-semibold">{labels.recommendedLesson}</h2>
          <p className="mt-2 font-medium" data-testid="exam-reco-title">
            {recommendation.title}
          </p>
          <p className="mt-1 text-sm text-gray-700">{recommendation.reason}</p>
          <Link
            href={recommendation.path}
            className="mt-3 inline-flex rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
            data-testid="exam-reco-open"
          >
            {labels.openLesson}
          </Link>
        </section>
      )}

      <section aria-labelledby="review-questions-heading">
        <h2 id="review-questions-heading" className="mb-3 text-lg font-semibold">
          {labels.reviewWrong}
        </h2>
        <div className="space-y-4" data-testid="review-questions">
          {(wrong.length ? wrong : questions).map((q) => {
            const correctSet = new Set(q.correctOptionIds ?? []);
            const selectedSet = new Set(q.selectedOptionIds);
            return (
              <article
                key={q.sessionQuestionId}
                className="rounded-xl border bg-white p-5"
                data-testid={`review-q-${q.sortOrder + 1}`}
              >
                {q.scenario && (
                  <p className="mb-2 text-sm text-gray-600">{q.scenario}</p>
                )}
                <h3 className="font-semibold">{q.prompt}</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {q.options.map((o) => {
                    const isUser = selectedSet.has(o.id);
                    const isCorrect = correctSet.has(o.id);
                    return (
                      <li
                        key={o.id}
                        className={`rounded border p-2 ${
                          isCorrect
                            ? "border-emerald-500 bg-emerald-50"
                            : isUser
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200"
                        }`}
                      >
                        <span>
                          {o.label}
                          {isUser ? ` (${labels.yourAnswer})` : ""}
                          {isCorrect ? ` (${labels.correctAnswer})` : ""}
                        </span>
                        {!isCorrect && isUser && o.explanationWrong && (
                          <p className="mt-1 text-xs text-red-800">{o.explanationWrong}</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {q.explanation && (
                  <p className="mt-3 text-sm text-gray-800">
                    <span className="font-medium">{labels.explanation}: </span>
                    {q.explanation}
                  </p>
                )}
                <button
                  type="button"
                  className="mt-3 rounded-lg border border-blue-600 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => void explainWithAi(q)}
                  disabled={loadingId === q.questionId}
                  data-testid={`explain-ai-${q.sortOrder + 1}`}
                >
                  {loadingId === q.questionId ? labels.aiLoading : labels.explainAi}
                </button>
                {aiByQuestion[q.questionId] && (
                  <div
                    className="mt-2 rounded-lg bg-blue-50 p-3 text-sm"
                    data-testid={`ai-explain-${q.sortOrder + 1}`}
                  >
                    {aiByQuestion[q.questionId]}
                  </div>
                )}
              </article>
            );
          })}
        </div>
        {aiError && (
          <p className="mt-2 text-sm text-red-700" role="alert">
            {aiError}
          </p>
        )}
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/pmp-exam"
          className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white"
          data-testid="retry-practice"
        >
          {labels.retry}
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg border px-4 py-2 text-sm font-medium"
          data-testid="back-dashboard"
        >
          {labels.dashboard}
        </Link>
      </div>
    </section>
  );
}
