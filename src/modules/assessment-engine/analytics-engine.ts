import type {
  ExamDifficultyCode,
  PmpDeliveryApproachCode,
  PmpDomainCode,
} from "@/modules/assessment-engine/exam-types";
import type {
  LearningObjectiveCode,
  PmpScenarioTypeCode,
} from "@/modules/assessment-engine/exam-blueprint";

export type ExamErrorCategoryCode =
  | "KNOWLEDGE_GAP"
  | "MISREAD_SCENARIO"
  | "WRONG_PRIORITY"
  | "WRONG_ACTION"
  | "AGILE_MINDSET"
  | "STAKEHOLDER_ERROR"
  | "RISK_ERROR"
  | "PROCESS_ERROR"
  | "OTHER";

export type ScoreTrendCode =
  | "IMPROVING"
  | "STABLE"
  | "DECLINING"
  | "INSUFFICIENT_DATA";

export type RetryTypeCode =
  | "RETRY_WRONG_QUESTIONS"
  | "RETRY_WEAK_SKILLS"
  | "RETRY_WEAK_DOMAIN"
  | "RETRY_ERROR_TYPE"
  | "RETRY_MIXED";

export interface ErrorClassificationInput {
  scenarioType?: PmpScenarioTypeCode | null;
  domain?: PmpDomainCode | null;
  deliveryApproach?: PmpDeliveryApproachCode | null;
  skillSlugs?: string[];
  learningObjective?: LearningObjectiveCode | null;
  unanswered?: boolean;
}

/**
 * Deterministic error taxonomy from question metadata.
 * Never uses LLM output as scoring truth.
 */
export function classifyError(
  input: ErrorClassificationInput
): ExamErrorCategoryCode {
  if (input.unanswered) return "KNOWLEDGE_GAP";

  const skills = (input.skillSlugs ?? []).map((s) => s.toLowerCase());
  const scenario = input.scenarioType;

  if (
    scenario === "STAKEHOLDER" ||
    skills.some((s) => s.includes("stakeholder"))
  ) {
    return "STAKEHOLDER_ERROR";
  }
  if (scenario === "RISK" || skills.some((s) => s.includes("risk"))) {
    return "RISK_ERROR";
  }
  if (
    scenario === "AGILE" ||
    input.deliveryApproach === "AGILE" ||
    skills.some((s) => s.includes("agile"))
  ) {
    return "AGILE_MINDSET";
  }
  if (
    scenario === "FIRST_ACTION" ||
    scenario === "NEXT_ACTION" ||
    scenario === "BEST_ACTION"
  ) {
    if (input.learningObjective === "IDENTIFY") return "MISREAD_SCENARIO";
    if (input.learningObjective === "ANALYZE") return "WRONG_PRIORITY";
    return "WRONG_ACTION";
  }
  if (scenario === "CONFLICT" || skills.some((s) => s.includes("conflict"))) {
    return "WRONG_PRIORITY";
  }
  if (
    scenario === "CHANGE" ||
    scenario === "GOVERNANCE" ||
    input.domain === "PROCESS"
  ) {
    return "PROCESS_ERROR";
  }
  if (input.domain === "BUSINESS_ENVIRONMENT") return "KNOWLEDGE_GAP";
  return "OTHER";
}

/**
 * Score trend from chronological percentages (oldest → newest).
 * Requires ≥3 attempts; otherwise INSUFFICIENT_DATA.
 */
export function calculateScoreTrend(
  chronologicalPercentages: number[]
): ScoreTrendCode {
  if (chronologicalPercentages.length < 3) return "INSUFFICIENT_DATA";
  const recent = chronologicalPercentages.slice(-5);
  const first = recent.slice(0, Math.ceil(recent.length / 2));
  const second = recent.slice(Math.floor(recent.length / 2));
  const avg = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const delta = avg(second) - avg(first);
  if (delta >= 4) return "IMPROVING";
  if (delta <= -4) return "DECLINING";
  return "STABLE";
}

export interface ReadinessV2Input {
  recentPercentages: number[];
  averageScore: number;
  scoreTrend: ScoreTrendCode;
  domainPerformances: Array<{
    domain: PmpDomainCode;
    percentage: number;
    total: number;
    band: string;
  }>;
  skillPerformances: Array<{
    skillSlug: string;
    percentage: number;
    total: number;
    band: string;
  }>;
  unansweredRate: number;
  repeatedMistakeCount: number;
  retryPercentages: number[];
  targetScorePercent: number;
}

export interface ReadinessV2Result {
  level: "NOT_READY" | "DEVELOPING" | "READY";
  score: number;
  labelEn: string;
  labelFr: string;
  explanationEn: string;
  explanationFr: string;
  currentAverage: number;
  targetScorePercent: number;
  gap: number;
  limitationsEn: string;
  limitationsFr: string;
}

export function calculatePmpReadinessV2(
  input: ReadinessV2Input
): ReadinessV2Result {
  const recent = input.recentPercentages;
  const avgRecent =
    recent.length === 0
      ? input.averageScore
      : Math.round(recent.reduce((s, n) => s + n, 0) / recent.length);

  const domainScores = input.domainPerformances
    .filter((d) => d.total > 0)
    .map((d) => d.percentage);
  const avgDomain =
    domainScores.length === 0
      ? avgRecent
      : Math.round(domainScores.reduce((s, n) => s + n, 0) / domainScores.length);

  const weakDomains = input.domainPerformances.filter(
    (d) => d.total > 0 && d.band === "WEAK"
  );
  const weakSkills = input.skillPerformances.filter(
    (s) => s.total > 0 && s.band === "WEAK"
  );
  const masteredSkills = input.skillPerformances.filter(
    (s) => s.total > 0 && s.band === "STRONG"
  );

  const retryAvg =
    input.retryPercentages.length === 0
      ? null
      : Math.round(
          input.retryPercentages.reduce((a, b) => a + b, 0) /
            input.retryPercentages.length
        );

  let score = Math.round(avgRecent * 0.4 + avgDomain * 0.3 + input.averageScore * 0.15);
  if (retryAvg != null) score = Math.round(score * 0.85 + retryAvg * 0.15);

  if (input.scoreTrend === "IMPROVING") score += 5;
  if (input.scoreTrend === "DECLINING") score -= 8;
  score -= Math.min(15, Math.round(input.unansweredRate * 15));
  score -= Math.min(15, input.repeatedMistakeCount * 3);
  score -= Math.min(12, weakSkills.length * 2);
  score += Math.min(10, masteredSkills.length * 2);
  score = Math.max(0, Math.min(100, score));

  const gap = input.targetScorePercent - avgRecent;
  let level: ReadinessV2Result["level"];
  if (
    score >= 72 &&
    weakSkills.length <= 2 &&
    input.unansweredRate < 0.2 &&
    avgRecent >= input.targetScorePercent - 5
  ) {
    level = "READY";
  } else if (score >= 45) {
    level = "DEVELOPING";
  } else {
    level = "NOT_READY";
  }

  const weakSkillNames = weakSkills.slice(0, 3).map((s) => s.skillSlug);
  const weakDomainNames = weakDomains.slice(0, 2).map((d) => d.domain);

  const explanationEn = buildExplanationEn(
    level,
    input.scoreTrend,
    avgRecent,
    input.targetScorePercent,
    weakDomainNames,
    weakSkillNames
  );
  const explanationFr = buildExplanationFr(
    level,
    input.scoreTrend,
    avgRecent,
    input.targetScorePercent,
    weakDomainNames,
    weakSkillNames
  );

  return {
    level,
    score,
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
    explanationEn,
    explanationFr,
    currentAverage: avgRecent,
    targetScorePercent: input.targetScorePercent,
    gap,
    limitationsEn:
      "This is Learning / Practice Readiness only — not an official PMI score, not a pass/fail prediction for the real PMP exam.",
    limitationsFr:
      "Il s'agit uniquement d'une Préparation pratique / d'apprentissage — ce n'est pas un score PMI officiel, ni une prédiction de réussite à l'examen PMP réel.",
  };
}

function buildExplanationEn(
  level: string,
  trend: ScoreTrendCode,
  avg: number,
  target: number,
  weakDomains: string[],
  weakSkills: string[]
): string {
  const parts: string[] = [];
  if (trend === "IMPROVING") parts.push("Your recent scores are improving");
  else if (trend === "DECLINING") parts.push("Your recent scores are declining");
  else if (trend === "STABLE") parts.push("Your recent scores are stable");
  else parts.push("Not enough attempts yet to establish a score trend");

  parts.push(`current average ${avg}% vs target ${target}%`);

  if (weakDomains.length) {
    parts.push(`${weakDomains.join(" and ")} remain below your target`);
  }
  if (weakSkills.length) {
    parts.push(`skills to reinforce: ${weakSkills.join(", ")}`);
  }
  if (level === "READY" && !weakSkills.length) {
    parts.push("practice indicators look solid for continued mock exams");
  }
  return parts.join("; ") + ".";
}

function buildExplanationFr(
  level: string,
  trend: ScoreTrendCode,
  avg: number,
  target: number,
  weakDomains: string[],
  weakSkills: string[]
): string {
  const parts: string[] = [];
  if (trend === "IMPROVING") parts.push("Vos scores récents s'améliorent");
  else if (trend === "DECLINING") parts.push("Vos scores récents baissent");
  else if (trend === "STABLE") parts.push("Vos scores récents sont stables");
  else parts.push("Pas assez de tentatives pour établir une tendance");

  parts.push(`moyenne actuelle ${avg}% vs objectif ${target}%`);

  if (weakDomains.length) {
    parts.push(`${weakDomains.join(" et ")} restent sous votre objectif`);
  }
  if (weakSkills.length) {
    parts.push(`skills à renforcer : ${weakSkills.join(", ")}`);
  }
  if (level === "READY" && !weakSkills.length) {
    parts.push("les indicateurs de pratique sont solides pour continuer");
  }
  return parts.join(" ; ") + ".";
}

export interface RetryPlanInput {
  type: RetryTypeCode;
  wrongQuestionIds: string[];
  weakSkillSlugs: string[];
  weakDomain?: PmpDomainCode;
  errorCategories: ExamErrorCategoryCode[];
  easyFailStreak: number;
  lastRetryPercentage: number | null;
}

export interface RetryPlan {
  type: RetryTypeCode;
  questionCount: number;
  skillSlugs: string[];
  domain?: PmpDomainCode;
  errorCategories: ExamErrorCategoryCode[];
  preferDifficulties: ExamDifficultyCode[];
  includeQuestionIds: string[];
}

/**
 * Deterministic retry plan. Difficulty steps up only after improvement.
 */
export function buildRetryExam(input: RetryPlanInput): RetryPlan {
  let preferDifficulties: ExamDifficultyCode[] = ["EASY", "MEDIUM"];
  if (input.easyFailStreak >= 3 && (input.lastRetryPercentage ?? 0) >= 70) {
    preferDifficulties = ["MEDIUM", "HARD"];
  } else if (input.easyFailStreak >= 3) {
    preferDifficulties = ["EASY", "MEDIUM"];
  } else if ((input.lastRetryPercentage ?? 0) >= 80) {
    preferDifficulties = ["MEDIUM", "HARD"];
  }

  switch (input.type) {
    case "RETRY_WRONG_QUESTIONS":
      return {
        type: input.type,
        questionCount: Math.min(10, Math.max(5, input.wrongQuestionIds.length)),
        skillSlugs: [],
        errorCategories: [],
        preferDifficulties,
        includeQuestionIds: input.wrongQuestionIds.slice(0, 10),
      };
    case "RETRY_WEAK_SKILLS": {
      const skills = input.weakSkillSlugs.slice(0, 3);
      const count = skills.length >= 2 ? 15 : 10;
      return {
        type: input.type,
        questionCount: count,
        skillSlugs: skills,
        errorCategories: [],
        preferDifficulties,
        includeQuestionIds: [],
      };
    }
    case "RETRY_WEAK_DOMAIN":
      return {
        type: input.type,
        questionCount: 12,
        skillSlugs: [],
        domain: input.weakDomain,
        errorCategories: [],
        preferDifficulties,
        includeQuestionIds: [],
      };
    case "RETRY_ERROR_TYPE":
      return {
        type: input.type,
        questionCount: 10,
        skillSlugs: [],
        errorCategories: input.errorCategories.slice(0, 2),
        preferDifficulties,
        includeQuestionIds: [],
      };
    case "RETRY_MIXED":
    default:
      return {
        type: "RETRY_MIXED",
        questionCount: 12,
        skillSlugs: input.weakSkillSlugs.slice(0, 2),
        domain: input.weakDomain,
        errorCategories: input.errorCategories.slice(0, 1),
        preferDifficulties,
        includeQuestionIds: input.wrongQuestionIds.slice(0, 3),
      };
  }
}
