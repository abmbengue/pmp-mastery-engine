import type { Locale } from "@/shared/types/locale";
import type { ReadinessReport } from "@/modules/assessment-engine/readiness-report-service";
import { buildSimplePdf } from "@/modules/assessment-engine/simple-pdf";

/**
 * PDF export for PMP Readiness Report.
 * Uses buildPmpReadinessReport data — does NOT recalculate scores.
 */
export function generateReadinessReportPdf(
  report: ReadinessReport,
  locale: Locale,
  generatedAt: Date = new Date()
): Uint8Array {
  const isFr = locale === "fr";
  const title = isFr
    ? "Rapport de preparation PMP (pratique)"
    : "PMP Practice Readiness Report";

  const lines: string[] = [
    report.disclaimer,
    "",
    isFr
      ? `Date du rapport : ${generatedAt.toISOString().slice(0, 10)}`
      : `Report date: ${generatedAt.toISOString().slice(0, 10)}`,
    "",
    isFr
      ? `Preparation pratique : ${report.practiceReadiness}`
      : `Practice readiness: ${report.practiceReadiness}`,
    report.narrative,
    "",
    isFr
      ? `Score moyen : ${report.averageScore ?? "—"}%`
      : `Average score: ${report.averageScore ?? "—"}%`,
    isFr
      ? `Meilleur score : ${report.bestScore ?? "—"}%`
      : `Best score: ${report.bestScore ?? "—"}%`,
    isFr
      ? `Score recent : ${report.recentScore ?? "—"}%`
      : `Recent score: ${report.recentScore ?? "—"}%`,
    isFr
      ? `Tendance : ${report.scoreTrend}`
      : `Score trend: ${report.scoreTrend}`,
    isFr
      ? `Questions repondues : ${report.questionsAnswered}`
      : `Questions answered: ${report.questionsAnswered}`,
    isFr
      ? `Moyenne retries : ${report.retryAverage ?? "—"}%`
      : `Retry average: ${report.retryAverage ?? "—"}%`,
    "",
    isFr ? "Domaines :" : "Domains:",
    ...report.domains.map(
      (d) =>
        `- ${d.domain}: ${d.total ? `${d.percentage}%` : "—"} (${d.band})`
    ),
    "",
    isFr ? "Approche de livraison :" : "Delivery approach:",
    ...report.delivery.map(
      (d) =>
        `- ${d.approach}: ${d.total ? `${d.percentage}%` : "—"} (${d.band})`
    ),
    "",
    isFr ? "Skills faibles :" : "Weak skills:",
    ...(report.weakSkills.length
      ? report.weakSkills.map((s) => `- ${s.title} (${s.level})`)
      : [isFr ? "- Aucun" : "- None"]),
    "",
    isFr ? "Erreurs recurrentes :" : "Recurring errors:",
    ...(report.recurringErrors.length
      ? report.recurringErrors.map((e) => `- ${e.category}: ${e.count}`)
      : [isFr ? "- Aucune" : "- None"]),
    "",
    isFr ? "Prochaines actions :" : "Recommended next actions:",
    ...(report.recommendedActions.length
      ? report.recommendedActions.map((a) => `- ${a.title}: ${a.reason}`)
      : [isFr ? "- Aucune" : "- None"]),
    "",
    isFr
      ? "Evolution : " +
        (report.evolution.length
          ? report.evolution.map((s) => `${s}%`).join(" -> ")
          : "—")
      : "Evolution: " +
        (report.evolution.length
          ? report.evolution.map((s) => `${s}%`).join(" -> ")
          : "—"),
    "",
    isFr
      ? "PAS UN SCORE PMI OFFICIEL — estimation pedagogique uniquement."
      : "NOT AN OFFICIAL PMI SCORE — educational estimate only.",
  ];

  return buildSimplePdf(lines, title);
}
