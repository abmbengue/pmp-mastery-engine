import { getTranslations, setRequestLocale } from "next-intl/server";
import { requireSession } from "@/modules/auth/session";
import { buildPmpReadinessReport } from "@/modules/assessment-engine/readiness-report-service";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";
import { ReadinessReportActions } from "@/app/[locale]/components/exam/ReadinessReportActions";

export default async function PmpReadinessReportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireSession(locale);
  const t = await getTranslations("readinessReport");
  const loc = locale as Locale;
  const report = await buildPmpReadinessReport(session.user.id, loc);

  return (
    <section className="space-y-6 print:space-y-4" data-testid="readiness-report-page">
      <header className="print:break-inside-avoid">
        <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        <p
          className="mt-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-950"
          data-testid="readiness-disclaimer"
          role="note"
        >
          {report.disclaimer}
        </p>
        <p className="mt-2 text-sm text-gray-700" data-testid="readiness-narrative">
          {report.narrative}
        </p>
        <ReadinessReportActions
          locale={locale}
          labels={{
            print: t("print"),
            back: t("backExam"),
            downloadPdf: t("downloadPdf"),
            backDashboard: t("backDashboard"),
          }}
        />
      </header>

      <dl className="grid gap-3 rounded-xl border bg-white p-5 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
        <div>
          <dt className="text-xs text-gray-500">{t("practiceReadiness")}</dt>
          <dd className="text-lg font-semibold" data-testid="report-readiness">
            {report.practiceReadiness}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">{t("averageScore")}</dt>
          <dd className="font-semibold" data-testid="report-average">
            {report.averageScore == null ? "—" : `${report.averageScore}%`}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">{t("bestScore")}</dt>
          <dd className="font-semibold">{report.bestScore == null ? "—" : `${report.bestScore}%`}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">{t("recentScore")}</dt>
          <dd className="font-semibold">
            {report.recentScore == null ? "—" : `${report.recentScore}%`}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">{t("scoreTrend")}</dt>
          <dd className="font-semibold" data-testid="report-trend">
            {report.scoreTrend}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">{t("questionsAnswered")}</dt>
          <dd className="font-semibold">{report.questionsAnswered}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">{t("target")}</dt>
          <dd className="font-semibold">
            {report.targetScorePercent}% ({t("gap")}: {report.targetGap}%)
          </dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">{t("retryAverage")}</dt>
          <dd className="font-semibold">
            {report.retryAverage == null ? "—" : `${report.retryAverage}%`}
          </dd>
        </div>
      </dl>

      {report.readinessExplanation && (
        <p className="text-sm text-gray-700" data-testid="report-explanation">
          {report.readinessExplanation}
        </p>
      )}

      <section data-testid="report-domains">
        <h2 className="mb-2 text-lg font-semibold">{t("domains")}</h2>
        <ul className="grid gap-2 sm:grid-cols-3">
          {report.domains.map((d) => (
            <li key={d.domain} className="rounded border bg-white p-3 text-sm">
              {d.domain}: {d.total ? `${d.percentage}%` : "—"} ({d.band})
            </li>
          ))}
        </ul>
      </section>

      <section data-testid="report-delivery">
        <h2 className="mb-2 text-lg font-semibold">{t("delivery")}</h2>
        <ul className="grid gap-2 sm:grid-cols-3">
          {report.delivery.map((d) => (
            <li key={d.approach} className="rounded border bg-white p-3 text-sm">
              {d.approach}: {d.total ? `${d.percentage}%` : "—"} ({d.band})
            </li>
          ))}
        </ul>
      </section>

      <section data-testid="report-weak-skills">
        <h2 className="mb-2 text-lg font-semibold">{t("weakSkills")}</h2>
        <ul className="space-y-1 text-sm">
          {report.weakSkills.length === 0 ? (
            <li>{t("none")}</li>
          ) : (
            report.weakSkills.map((s) => (
              <li key={s.slug}>
                {s.title} — {s.level}
              </li>
            ))
          )}
        </ul>
      </section>

      <section data-testid="report-errors">
        <h2 className="mb-2 text-lg font-semibold">{t("recurringErrors")}</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {report.recurringErrors.length === 0 ? (
            <li>{t("none")}</li>
          ) : (
            report.recurringErrors.map((e) => (
              <li key={e.category} className="rounded-full border px-3 py-1">
                {e.category}: {e.count}
              </li>
            ))
          )}
        </ul>
      </section>

      <section data-testid="report-actions">
        <h2 className="mb-2 text-lg font-semibold">{t("nextActions")}</h2>
        <ul className="space-y-3">
          {report.recommendedActions.length === 0 ? (
            <li className="text-sm text-gray-600">{t("none")}</li>
          ) : (
            report.recommendedActions.map((a, i) => (
              <li key={`${a.path}-${i}`} className="rounded border bg-white p-3">
                <p className="font-medium">{a.title}</p>
                <p className="text-sm text-gray-600">{a.reason}</p>
                <Link
                  href={a.path}
                  className="mt-2 inline-flex text-sm font-medium text-indigo-700 underline"
                  data-testid={`report-action-${i + 1}`}
                >
                  {t("open")}
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>

      <p className="text-xs text-gray-500 print:mt-6">
        {t("evolution")}:{" "}
        {report.evolution.length
          ? report.evolution.map((s) => `${s}%`).join(" → ")
          : "—"}
      </p>
    </section>
  );
}
