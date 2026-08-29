/**
 * Phase C2 — maps persisted quiz observations to weakness-model inputs.
 * Deterministic adapter only: no scoring, no ConceptMastery writes.
 * Weakness aggregation stays in weakness-model.buildWeaknessSignals().
 */

import type { ExamDifficulty, LearningObjective, Question } from "@/generated/prisma/client";
import { legacyToStableEcoId } from "./eco-taxonomy";
import { mapLearningObjectiveToCognitive } from "./mastery-skills";
import { isConfidenceLevel } from "./confidence";
import {
  buildWeaknessSignals,
  type AttemptMasteryInput,
  type WeaknessSignal,
} from "./weakness-model";
import type {
  CognitiveLevel,
  ConfidenceLevel,
  EcoTaskStableId,
} from "./types";

export type QuizAttemptObservation = {
  questionId: string;
  isCorrect: boolean;
  confidenceLevel: string | null;
  answeredAt: Date;
};

export type QuestionMasteryContext = Pick<
  Question,
  | "id"
  | "externalKey"
  | "skillId"
  | "conceptSlug"
  | "ecoTaskCode"
  | "examDifficulty"
  | "difficulty"
  | "learningObjective"
> & {
  masteryMetadata?: {
    ecoTaskId: string;
    primaryConceptId: string;
    primarySkillId: string | null;
    cognitiveLevel: string;
    difficulty: string;
    misconceptionIds: unknown;
  } | null;
};

function mapDifficulty(
  examDifficulty: ExamDifficulty | null,
  legacyDifficulty: number
): "EASY" | "MEDIUM" | "HARD" {
  if (examDifficulty === "EASY") return "EASY";
  if (examDifficulty === "HARD") return "HARD";
  if (examDifficulty === "MEDIUM") return "MEDIUM";
  if (legacyDifficulty <= 1) return "EASY";
  if (legacyDifficulty >= 3) return "HARD";
  return "MEDIUM";
}

function mapCognitiveLevel(
  question: QuestionMasteryContext
): CognitiveLevel {
  const metaLevel = question.masteryMetadata?.cognitiveLevel;
  if (
    metaLevel === "RECOGNITION" ||
    metaLevel === "UNDERSTANDING" ||
    metaLevel === "APPLICATION" ||
    metaLevel === "ANALYSIS" ||
    metaLevel === "JUDGMENT" ||
    metaLevel === "TRANSFER"
  ) {
    return metaLevel;
  }
  if (question.learningObjective) {
    return mapLearningObjectiveToCognitive(
      question.learningObjective as LearningObjective
    );
  }
  return "APPLICATION";
}

function resolveEcoTaskId(
  question: QuestionMasteryContext
): EcoTaskStableId | undefined {
  if (question.masteryMetadata?.ecoTaskId) {
    return question.masteryMetadata.ecoTaskId as EcoTaskStableId;
  }
  if (question.ecoTaskCode) {
    return legacyToStableEcoId(question.ecoTaskCode);
  }
  return undefined;
}

function resolveConceptId(question: QuestionMasteryContext): string | undefined {
  return (
    question.masteryMetadata?.primaryConceptId ??
    question.conceptSlug ??
    undefined
  );
}

function resolveSkillId(question: QuestionMasteryContext): string | undefined {
  return question.skillId ?? undefined;
}

function parseAttemptConfidence(value: string | null): ConfidenceLevel | null {
  if (!value) return null;
  return isConfidenceLevel(value) ? value : null;
}

function firstMisconceptionId(
  question: QuestionMasteryContext
): string | undefined {
  const raw = question.masteryMetadata?.misconceptionIds;
  if (!Array.isArray(raw) || raw.length === 0) return undefined;
  const first = raw[0];
  return typeof first === "string" ? first : undefined;
}

/**
 * Convert a persisted QuizAttempt-like row into a wiring observation.
 * Invalid rows (missing questionId) return null — callers must handle explicitly.
 */
export function toQuizAttemptObservation(row: {
  questionId: string | null | undefined;
  isCorrect: boolean;
  confidenceLevel?: string | null;
  createdAt?: Date | null;
  answeredAt?: Date | null;
}): QuizAttemptObservation | null {
  if (!row.questionId) return null;
  const answeredAt = row.answeredAt ?? row.createdAt;
  if (!answeredAt || Number.isNaN(answeredAt.getTime())) return null;
  return {
    questionId: row.questionId,
    isCorrect: row.isCorrect,
    confidenceLevel: row.confidenceLevel ?? null,
    answeredAt,
  };
}

export function quizAttemptToMasteryInput(
  attempt: QuizAttemptObservation,
  question: QuestionMasteryContext
): AttemptMasteryInput {
  return {
    correct: attempt.isCorrect,
    difficulty: mapDifficulty(question.examDifficulty, question.difficulty),
    cognitiveLevel: mapCognitiveLevel(question),
    confidence: parseAttemptConfidence(attempt.confidenceLevel),
    ecoTaskId: resolveEcoTaskId(question),
    conceptId: resolveConceptId(question),
    skillId: resolveSkillId(question),
    misconceptionId: firstMisconceptionId(question),
    answeredAt: attempt.answeredAt,
    questionExternalKey: question.externalKey ?? undefined,
  };
}

/**
 * Deterministic batch conversion. Missing question context yields a partial
 * input (no skillId/ecoTaskId) so weakness aggregation skips unknown skills
 * rather than inventing data.
 */
export function quizAttemptsToMasteryInputs(
  attempts: QuizAttemptObservation[],
  questionsById: Record<string, QuestionMasteryContext | undefined>
): AttemptMasteryInput[] {
  const inputs: AttemptMasteryInput[] = [];

  for (const attempt of attempts) {
    if (!attempt.questionId) continue;
    if (!attempt.answeredAt || Number.isNaN(attempt.answeredAt.getTime())) {
      continue;
    }

    const question = questionsById[attempt.questionId];
    if (!question) {
      inputs.push({
        correct: attempt.isCorrect,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        confidence: parseAttemptConfidence(attempt.confidenceLevel),
        answeredAt: attempt.answeredAt,
      });
      continue;
    }

    inputs.push(quizAttemptToMasteryInput(attempt, question));
  }

  return inputs;
}

/**
 * C2 wiring surface: QuizAttempt observations → AttemptMasteryInput[] → weakness signals.
 * Does not write ConceptMastery (that remains C3 runtime).
 */
export function weaknessSignalsFromQuizAttempts(
  attempts: QuizAttemptObservation[],
  questionsById: Record<string, QuestionMasteryContext | undefined>
): WeaknessSignal[] {
  return buildWeaknessSignals(
    quizAttemptsToMasteryInputs(attempts, questionsById)
  );
}
