import type { ExamErrorCategoryCode } from "@/modules/assessment-engine/analytics-engine";
import type { LearningObjectiveCode } from "@/modules/assessment-engine/exam-blueprint";

/**
 * Deterministic mapping from exam error categories to corrective learning focus.
 * Extends the existing recommendation path — does NOT score via LLM.
 */

export interface CorrectiveLearningHint {
  errorCategory: ExamErrorCategoryCode;
  preferredSkillSlugs: string[];
  learningObjective: LearningObjectiveCode;
  reasonCode: "CORRECTIVE_LEARNING";
  summaryEn: string;
  summaryFr: string;
}

const ERROR_MAP: Record<ExamErrorCategoryCode, Omit<CorrectiveLearningHint, "errorCategory" | "reasonCode">> = {
  KNOWLEDGE_GAP: {
    preferredSkillSlugs: ["pmp-foundations", "pmp-process", "business-value"],
    learningObjective: "IDENTIFY",
    summaryEn: "Review core concepts to close a knowledge gap.",
    summaryFr: "Revoir les concepts de base pour combler un manque de connaissances.",
  },
  MISREAD_SCENARIO: {
    preferredSkillSlugs: ["pmp-situational-thinking", "communication"],
    learningObjective: "ANALYZE",
    summaryEn: "Practice reading scenarios carefully before choosing an action.",
    summaryFr: "S'entraîner à lire attentivement les scénarios avant d'agir.",
  },
  WRONG_PRIORITY: {
    preferredSkillSlugs: ["pmp-situational-thinking", "leadership", "governance"],
    learningObjective: "DECIDE",
    summaryEn: "Focus on what the project manager should do first / next.",
    summaryFr: "Se concentrer sur ce que le chef de projet doit faire en premier / ensuite.",
  },
  WRONG_ACTION: {
    preferredSkillSlugs: ["pmp-situational-thinking", "change-management"],
    learningObjective: "DECIDE",
    summaryEn: "Practice choosing the best action among competing options.",
    summaryFr: "S'entraîner à choisir la meilleure action parmi des options concurrentes.",
  },
  AGILE_MINDSET: {
    preferredSkillSlugs: ["agile-mindset", "pmp-agile", "team-development"],
    learningObjective: "APPLY",
    summaryEn: "Reinforce agile mindset and iterative delivery practices.",
    summaryFr: "Renforcer la mentalité agile et les pratiques itératives.",
  },
  STAKEHOLDER_ERROR: {
    preferredSkillSlugs: ["stakeholder-engagement", "communication", "pmp-people"],
    learningObjective: "APPLY",
    summaryEn: "Strengthen stakeholder engagement and communication.",
    summaryFr: "Renforcer l'engagement des parties prenantes et la communication.",
  },
  RISK_ERROR: {
    preferredSkillSlugs: ["risk-management", "pmp-process"],
    learningObjective: "APPLY",
    summaryEn: "Review risk identification, analysis, and response.",
    summaryFr: "Revoir l'identification, l'analyse et la réponse aux risques.",
  },
  PROCESS_ERROR: {
    preferredSkillSlugs: ["pmp-process", "governance", "change-management", "schedule"],
    learningObjective: "APPLY",
    summaryEn: "Reinforce process, governance, and delivery controls.",
    summaryFr: "Renforcer le process, la gouvernance et les contrôles de livraison.",
  },
  OTHER: {
    preferredSkillSlugs: ["pmp-situational-thinking", "pmp-foundations"],
    learningObjective: "IDENTIFY",
    summaryEn: "Return to situational thinking foundations.",
    summaryFr: "Revenir aux bases de la pensée situationnelle.",
  },
};

export function mapErrorToCorrectiveLearning(
  errorCategory: ExamErrorCategoryCode,
  skillSlugHint?: string | null
): CorrectiveLearningHint {
  const base = ERROR_MAP[errorCategory] ?? ERROR_MAP.OTHER;
  const preferred = [...base.preferredSkillSlugs];
  if (skillSlugHint && !preferred.includes(skillSlugHint)) {
    preferred.unshift(skillSlugHint);
  }
  return {
    errorCategory,
    preferredSkillSlugs: preferred,
    learningObjective: base.learningObjective,
    reasonCode: "CORRECTIVE_LEARNING",
    summaryEn: base.summaryEn,
    summaryFr: base.summaryFr,
  };
}

/**
 * Aggregate recurring error categories (deterministic sort).
 */
export function rankRecurringErrors(
  counts: Record<string, number>
): Array<{ category: ExamErrorCategoryCode; count: number }> {
  return Object.entries(counts)
    .map(([category, count]) => ({
      category: category as ExamErrorCategoryCode,
      count,
    }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}
