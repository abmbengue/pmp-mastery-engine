/**
 * Extended error model — maps existing ExamErrorCategory to concept/skill/misconception.
 * Does NOT replace classifyError in analytics-engine.ts.
 */

import type { ExamErrorCategoryCode } from "@/modules/assessment-engine/analytics-engine";
import type { MisconceptionErrorKind } from "./types";

export type ExtendedErrorClassification = {
  legacyCategory: ExamErrorCategoryCode;
  extendedKind: MisconceptionErrorKind;
  conceptId?: string;
  skillId?: string;
  misconceptionId?: string;
  interpretationEn: string;
  interpretationFr: string;
};

const LEGACY_TO_KIND: Partial<Record<ExamErrorCategoryCode, MisconceptionErrorKind>> = {
  KNOWLEDGE_GAP: "knowledge-recall",
  MISREAD_SCENARIO: "application-error",
  WRONG_PRIORITY: "strategy-error",
  WRONG_ACTION: "application-error",
  AGILE_MINDSET: "strategy-error",
  STAKEHOLDER_ERROR: "stakeholder-confusion",
  RISK_ERROR: "risk-confusion",
  PROCESS_ERROR: "scope-confusion",
  OTHER: "application-error",
};

export function extendErrorClassification(input: {
  legacyCategory: ExamErrorCategoryCode;
  primaryConceptId?: string;
  primarySkillId?: string;
  misconceptionId?: string;
}): ExtendedErrorClassification {
  const kind = LEGACY_TO_KIND[input.legacyCategory] ?? "application-error";
  return {
    legacyCategory: input.legacyCategory,
    extendedKind: kind,
    conceptId: input.primaryConceptId,
    skillId: input.primarySkillId,
    misconceptionId: input.misconceptionId,
    interpretationEn:
      kind === "misconception"
        ? "Likely concept confusion — not mere recall gap."
        : kind === "knowledge-recall"
          ? "Missing foundational knowledge."
          : "Correct concept may be present but misapplied in context.",
    interpretationFr:
      kind === "misconception"
        ? "Confusion conceptuelle probable — pas seulement un trou de connaissance."
        : kind === "knowledge-recall"
          ? "Connaissance de base manquante."
          : "Le concept peut être connu mais mal appliqué au contexte.",
  };
}

export const EXTENDED_ERROR_KINDS: readonly MisconceptionErrorKind[] = [
  "conceptual-gap",
  "misconception",
  "application-error",
  "careless-error",
  "communication-error",
  "strategy-error",
  "knowledge-recall",
  "scope-confusion",
  "risk-confusion",
  "stakeholder-confusion",
];
