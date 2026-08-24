import type {
  DeliveryPerformanceRow,
  DomainPerformanceRow,
  ExamScoreResult,
  PerformanceBand,
  PmpDeliveryApproachCode,
  PmpDomainCode,
  PracticeReadinessLevel,
  ReadinessInput,
  ReadinessResult,
  ScoredExamItem,
  SkillPerformanceRow,
} from "@/modules/assessment-engine/exam-types";

export function performanceBandFromPercentage(
  percentage: number
): PerformanceBand {
  if (percentage >= 80) return "STRONG";
  if (percentage >= 60) return "NEEDS_PRACTICE";
  return "WEAK";
}

/**
 * Deterministic practice score — NOT an official PMP / PMI score.
 */
export function calculateExamScore(items: ScoredExamItem[]): ExamScoreResult {
  const total = items.length;
  if (total === 0) {
    return {
      rawScore: 0,
      percentage: 0,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      total: 0,
    };
  }

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  for (const item of items) {
    if (item.unanswered || item.selectedOptionIds.length === 0) {
      unanswered += 1;
    } else if (item.isCorrect) {
      correct += 1;
    } else {
      incorrect += 1;
    }
  }

  const percentage = Math.round((correct / total) * 100);

  return {
    rawScore: correct,
    percentage,
    correct,
    incorrect,
    unanswered,
    total,
  };
}

export function calculateDomainPerformance(
  items: ScoredExamItem[]
): DomainPerformanceRow[] {
  const domains: PmpDomainCode[] = [
    "PEOPLE",
    "PROCESS",
    "BUSINESS_ENVIRONMENT",
  ];
  return domains.map((domain) => {
    const subset = items.filter((i) => i.domain === domain);
    const total = subset.length;
    const correct = subset.filter((i) => i.isCorrect && !i.unanswered).length;
    const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
    return {
      domain,
      correct,
      total,
      percentage,
      band: performanceBandFromPercentage(percentage),
    };
  });
}

export function calculateDeliveryPerformance(
  items: ScoredExamItem[]
): DeliveryPerformanceRow[] {
  const approaches: PmpDeliveryApproachCode[] = [
    "AGILE",
    "HYBRID",
    "PREDICTIVE",
  ];
  return approaches.map((approach) => {
    const subset = items.filter((i) => i.deliveryApproach === approach);
    const total = subset.length;
    const correct = subset.filter((i) => i.isCorrect && !i.unanswered).length;
    const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
    return {
      approach,
      correct,
      total,
      percentage,
      band: performanceBandFromPercentage(percentage),
    };
  });
}

export function calculateSkillPerformance(
  items: ScoredExamItem[]
): SkillPerformanceRow[] {
  const map = new Map<string, { correct: number; total: number }>();

  for (const item of items) {
    for (const slug of item.skillSlugs) {
      const row = map.get(slug) ?? { correct: 0, total: 0 };
      row.total += 1;
      if (item.isCorrect && !item.unanswered) row.correct += 1;
      map.set(slug, row);
    }
  }

  return [...map.entries()]
    .map(([skillSlug, { correct, total }]) => {
      const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
      return {
        skillSlug,
        correct,
        total,
        percentage,
        band: performanceBandFromPercentage(percentage),
      };
    })
    .sort((a, b) => a.percentage - b.percentage);
}

/**
 * Deterministic practice readiness heuristic.
 * Labels must never be presented as official PMI readiness.
 */
export function calculatePmpReadiness(
  input: ReadinessInput
): ReadinessResult {
  const recent = input.recentPercentages;
  const avgRecent =
    recent.length === 0
      ? 0
      : Math.round(recent.reduce((s, n) => s + n, 0) / recent.length);

  const domainScores = input.domainPerformances
    .filter((d) => d.total > 0)
    .map((d) => d.percentage);
  const avgDomain =
    domainScores.length === 0
      ? avgRecent
      : Math.round(
          domainScores.reduce((s, n) => s + n, 0) / domainScores.length
        );

  const weakSkills = input.skillPerformances.filter(
    (s) => s.total > 0 && s.band === "WEAK"
  ).length;
  const masteredSkills = input.skillPerformances.filter(
    (s) => s.total > 0 && s.band === "STRONG"
  ).length;

  let score = Math.round(avgRecent * 0.5 + avgDomain * 0.4);
  score -= Math.min(20, Math.round(input.unansweredRate * 15));
  score -= Math.min(15, input.repeatedMistakeCount * 3);
  score -= Math.min(12, weakSkills * 2);
  score += Math.min(12, masteredSkills * 2);
  score = Math.max(0, Math.min(100, score));

  let level: PracticeReadinessLevel;
  if (score >= 72 && weakSkills <= 2 && input.unansweredRate < 0.2) {
    level = "READY";
  } else if (score >= 45) {
    level = "DEVELOPING";
  } else {
    level = "NOT_READY";
  }

  return {
    level,
    labelEn:
      level === "READY"
        ? "Practice Readiness: Ready"
        : level === "DEVELOPING"
          ? "Practice Readiness: Developing"
          : "Practice Readiness: Not ready",
    labelFr:
      level === "READY"
        ? "Préparation pratique : Prêt"
        : level === "DEVELOPING"
          ? "Préparation pratique : En développement"
          : "Préparation pratique : Pas prêt",
    score,
    limitationsEn:
      "This is Learning / Practice Readiness only — not an official PMI score, not a pass/fail prediction for the real PMP exam.",
    limitationsFr:
      "Il s'agit uniquement d'une Préparation pratique / d'apprentissage — ce n'est pas un score PMI officiel, ni une prédiction de réussite à l'examen PMP réel.",
  };
}

export function evaluateSelectedOptions(
  selectedIds: string[],
  correctIds: string[],
  type: string
): boolean {
  const selected = [...selectedIds].sort();
  const correct = [...correctIds].sort();

  switch (type) {
    case "SINGLE_CHOICE":
    case "TRUE_FALSE":
      return selected.length === 1 && selected[0] === correct[0];
    case "MULTIPLE_CHOICE":
      return (
        selected.length === correct.length &&
        selected.every((id, i) => id === correct[i])
      );
    default:
      return false;
  }
}
