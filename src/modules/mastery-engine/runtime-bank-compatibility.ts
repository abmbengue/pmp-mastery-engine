/**
 * Phase D — runtime compatibility for future bank expansion.
 * Maps metadata to existing mastery pipeline types without new write paths.
 */

import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import {
  quizAttemptToMasteryInput,
  quizAttemptsToMasteryInputs,
  type QuestionMasteryContext,
} from "./attempt-adapter";
import { buildQuestionMasteryMetadata } from "./question-metadata";
import { buildWeaknessSignals, computeWeightedPerformance } from "./weakness-model";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";
import type { BatchValidationDiagnostic } from "./bank-batch-contract";
import type { QuestionMasteryMetadata } from "./types";

/** Runtime paths that remain safe for bank sizes beyond 200 (no fixed-size coupling). */
export const RUNTIME_BANK_EXTENSION_SAFE_PATHS = [
  "src/modules/mastery-engine/mastery-runtime-service.ts",
  "src/modules/mastery-engine/attempt-adapter.ts",
  "src/modules/mastery-engine/weakness-model.ts",
  "src/modules/mastery-engine/mastery-review-schedule.ts",
  "src/modules/learning-engine/spaced-repetition.ts",
  "src/modules/mastery-engine/adaptive-task-resolver.ts",
  "src/modules/mastery-engine/pmp-study-progress.ts",
  "src/modules/mastery-engine/weakness-dashboard-service.ts",
  "src/modules/learning-engine/review-rehydrate.ts",
] as const;

/** Paths that intentionally guard Q001–Q200 (must remain). */
export const PROTECTED_BANK_GUARD_PATHS = [
  "src/modules/mastery-engine/integrity.ts",
  "src/modules/mastery-engine/protected-bank-guard.ts",
  "src/modules/mastery-engine/bank-batch-validator.ts",
  "prisma/seed/pmp-exam-bank-data.ts",
] as const;

/**
 * Build a QuestionMasteryContext compatible with attempt-adapter from bank metadata.
 */
export function metadataToQuestionMasteryContext(
  metadata: QuestionMasteryMetadata,
  overrides?: Partial<QuestionMasteryContext>
): QuestionMasteryContext {
  return {
    id: overrides?.id ?? `future-${metadata.externalKey}`,
    externalKey: metadata.externalKey,
    skillId: overrides?.skillId ?? metadata.primarySkillId ?? null,
    conceptSlug: metadata.primaryConceptId,
    ecoTaskCode: null,
    examDifficulty: metadata.difficulty,
    difficulty: metadata.difficulty === "HARD" ? 3 : metadata.difficulty === "EASY" ? 1 : 2,
    learningObjective: "APPLY",
    masteryMetadata: {
      ecoTaskId: metadata.ecoTaskId,
      primaryConceptId: metadata.primaryConceptId,
      primarySkillId: metadata.primarySkillId ?? null,
      cognitiveLevel: metadata.cognitiveLevel,
      difficulty: metadata.difficulty,
      misconceptionIds: metadata.misconceptionIds,
    },
    ...overrides,
  };
}

/**
 * Verify a future question can traverse weakness + mastery level derivation.
 */
export function validateMasteryPipelineCompatibility(
  q: ExamBankQuestionSeed
): BatchValidationDiagnostic[] {
  const diagnostics: BatchValidationDiagnostic[] = [];
  const metadata = buildQuestionMasteryMetadata(q);
  const context = metadataToQuestionMasteryContext(metadata, {
    skillId: metadata.primarySkillId ?? "skill-placeholder",
  });
  const answeredAt = new Date("2026-08-28T12:00:00.000Z");

  try {
    const input = quizAttemptToMasteryInput(
      {
        questionId: context.id,
        isCorrect: false,
        confidenceLevel: "MEDIUM",
        answeredAt,
      },
      context
    );
    if (!input.ecoTaskId && !input.skillId) {
      diagnostics.push({
        code: "PIPELINE_MISSING_ROUTING",
        severity: "ERROR",
        message: "Attempt adapter produced no ecoTaskId or skillId",
        entityId: q.externalKey,
      });
    }

    const batch = quizAttemptsToMasteryInputs(
      [
        {
          questionId: context.id,
          isCorrect: false,
          confidenceLevel: "MEDIUM",
          answeredAt,
        },
      ],
      { [context.id]: context }
    );
    const signals = buildWeaknessSignals(batch);
    const perf = computeWeightedPerformance(batch);
    const level = computeMasteryLevelFromScore(perf);
    if (!["WEAK", "LEARNING", "MASTERED"].includes(level)) {
      diagnostics.push({
        code: "PIPELINE_INVALID_TIER",
        severity: "ERROR",
        message: `Mastery level derivation returned invalid tier: ${level}`,
        entityId: q.externalKey,
      });
    }
    if (signals.length === 0 && !input.correct) {
      diagnostics.push({
        code: "PIPELINE_NO_WEAKNESS_SIGNAL",
        severity: "WARNING",
        message: "Incorrect attempt produced no weakness signal",
        entityId: q.externalKey,
      });
    }
  } catch (err) {
    diagnostics.push({
      code: "PIPELINE_RUNTIME_ERROR",
      severity: "ERROR",
      message: err instanceof Error ? err.message : "Pipeline compatibility error",
      entityId: q.externalKey,
    });
  }

  return diagnostics;
}
