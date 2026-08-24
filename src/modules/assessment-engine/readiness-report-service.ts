import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";
import {
  getPmpPerformanceHistory,
  getPmpPracticeDashboard,
  getOrCreatePracticeTarget,
} from "@/modules/assessment-engine/exam-service";
import { calculateScoreTrend } from "@/modules/assessment-engine/analytics-engine";
import { rankRecurringErrors } from "@/modules/learning-engine/corrective-learning";
import { getCorrectiveLearningForUser } from "@/modules/learning-engine/review-service";
import { recommendNextLearning } from "@/modules/learning-engine/recommendation-service";
import prisma from "@/data/prisma-client";

export type ReadinessReport = {
  disclaimerEn: string;
  disclaimerFr: string;
  disclaimer: string;
  practiceReadiness: string;
  readinessExplanation: string | null;
  averageScore: number | null;
  bestScore: number | null;
  recentScore: number | null;
  scoreTrend: string;
  evolution: number[];
  questionsAnswered: number;
  targetScorePercent: number;
  targetGap: number;
  domains: Array<{ domain: string; percentage: number; band: string; total: number }>;
  delivery: Array<{ approach: string; percentage: number; band: string; total: number }>;
  weakSkills: Array<{ slug: string; title: string; level: string }>;
  recurringErrors: Array<{ category: string; count: number }>;
  retryAverage: number | null;
  recommendedActions: Array<{ title: string; reason: string; path: string }>;
  narrative: string;
};

function narrativeFor(
  level: string,
  locale: Locale,
  trend: string
): string {
  if (locale === "fr") {
    if (level === "READY") {
      return "Votre performance de pratique actuelle indique un bon niveau de préparation, mais une pratique continue est recommandée. Ce n'est pas un score PMI officiel.";
    }
    if (level === "DEVELOPING") {
      return `Votre préparation pratique est en développement (tendance : ${trend}). Concentrez-vous sur les skills faibles et les retries ciblés.`;
    }
    return `Votre préparation pratique n'est pas encore suffisante (tendance : ${trend}). Priorisez la révision des erreurs récurrentes et les leçons recommandées.`;
  }
  if (level === "READY") {
    return "Your current practice performance indicates a strong level of preparation, but continued practice is recommended. This is not an official PMI score.";
  }
  if (level === "DEVELOPING") {
    return `Your practice readiness is developing (trend: ${trend}). Focus on weak skills and targeted retries.`;
  }
  return `Your practice readiness is not yet sufficient (trend: ${trend}). Prioritize recurring errors and recommended lessons.`;
}

export async function buildPmpReadinessReport(
  userId: string,
  locale: Locale
): Promise<ReadinessReport> {
  const dash = await getPmpPracticeDashboard(userId, locale);
  const history = await getPmpPerformanceHistory(userId, locale);
  const target = await getOrCreatePracticeTarget(userId);
  const corrective = await getCorrectiveLearningForUser(userId, locale);
  const recommendation = await recommendNextLearning(userId, locale);

  const lastResult = await prisma.examResult.findFirst({
    where: { session: { userId } },
    orderBy: { createdAt: "desc" },
  });

  const domains =
    (lastResult?.domainBreakdown as Array<{
      domain: string;
      percentage: number;
      band: string;
      total: number;
    }> | null) ?? [];
  const delivery =
    (lastResult?.deliveryBreakdown as Array<{
      approach: string;
      percentage: number;
      band: string;
      total: number;
    }> | null) ?? [];

  const errorRows = await prisma.examError.groupBy({
    by: ["category"],
    where: { userId },
    _count: { category: true },
  });
  const counts: Record<string, number> = {};
  for (const e of errorRows) counts[e.category] = e._count.category;
  const recurringErrors = rankRecurringErrors(counts);

  const retryResults = await prisma.examResult.findMany({
    where: { session: { userId, retryType: { not: null } } },
    select: { percentage: true },
  });
  const retryAverage =
    retryResults.length === 0
      ? null
      : Math.round(
          retryResults.reduce((s, r) => s + r.percentage, 0) / retryResults.length
        );

  const weakSkills = await prisma.conceptMastery.findMany({
    where: { userId, level: "WEAK" },
    include: { skill: true },
    take: 8,
  });

  const recommendedActions: ReadinessReport["recommendedActions"] = [];
  if (recommendation) {
    recommendedActions.push({
      title: recommendation.title,
      reason: recommendation.reason,
      path: recommendation.path,
    });
  }
  if (
    corrective.recommendation &&
    corrective.recommendation.path !== recommendation?.path
  ) {
    recommendedActions.push({
      title: corrective.recommendation.title,
      reason: corrective.recommendation.reason,
      path: corrective.recommendation.path,
    });
  }

  const disclaimerEn =
    "Practice Readiness — NOT AN OFFICIAL PMI SCORE. Educational estimate only; not a pass/fail prediction.";
  const disclaimerFr =
    "Préparation pratique — PAS UN SCORE PMI OFFICIEL. Estimation pédagogique uniquement ; pas une prédiction de réussite.";

  const trend =
    history.scoreTrend ||
    calculateScoreTrend(history.evolution);

  return {
    disclaimerEn,
    disclaimerFr,
    disclaimer: locale === "fr" ? disclaimerFr : disclaimerEn,
    practiceReadiness: dash.practiceReadiness,
    readinessExplanation: dash.readinessExplanation ?? null,
    averageScore: dash.averageScore,
    bestScore: dash.bestScore,
    recentScore: history.currentScore,
    scoreTrend: trend,
    evolution: history.evolution,
    questionsAnswered: dash.questionsAnswered,
    targetScorePercent: target.targetScorePercent,
    targetGap: target.targetScorePercent - (dash.averageScore ?? 0),
    domains,
    delivery,
    weakSkills: weakSkills.map((w) => ({
      slug: w.skill.slug,
      title: pickLocalized(w.skill.titleFr, w.skill.titleEn, locale),
      level: w.level,
    })),
    recurringErrors: recurringErrors.map((r) => ({
      category: r.category,
      count: r.count,
    })),
    retryAverage,
    recommendedActions,
    narrative: narrativeFor(dash.practiceReadiness, locale, trend),
  };
}
