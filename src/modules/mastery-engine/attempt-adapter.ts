/**
 * Phase C — maps persisted quiz observations to weakness-model inputs.
 * No scoring logic; reuses canonical weakness-model types only.
 */

import type { ExamDifficulty, LearningObjective, Question } from "@/generated/prisma/client";
import { legacyToStableEcoId } from "./eco-taxonomy";
import { mapLearningObjectiveToCognitive } from "./mastery-skills";
import { isConfidenceLevel } from "./confidence";
import type { AttemptMasteryInput } from "./weakness-model";
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
    return mapLearningObjectiveToCognitive(question.learningObjective as LearningObjective);
  }
  return "APPLICATION";
}

function resolveEcoTaskId(question: QuestionMasteryContext): EcoTaskStableId | undefined {
  if (question.masteryMetadata?.ecoTaskId) {
    return question.masteryMetadata.ecoTaskId as EcoTaskStableId;
  }
  if (question.ecoTaskCode) {
    return legacyToStableEcoId(question.ecoTaskCode);
  }
  return undefined;
}

function resolveConceptId(question: QuestionMasteryContext): string | undefined {
  return question.masteryMetadata?.primaryConceptId ?? question.conceptSlug ?? undefined;
}

function resolveSkillId(question: QuestionMasteryContext): string | undefined {
  return question.skillId ?? undefined;
}

function parseAttemptConfidence(value: string | null): ConfidenceLevel | null {
  if (!value) return null;
  return isConfidenceLevel(value) ? value : null;
}

function firstMisconceptionId(question: QuestionMasteryContext): string | undefined {
  const raw = question.masteryMetadata?.misconceptionIds;
  if (!Array.isArray(raw) || raw.length === 0) return undefined;
  const first = raw[0];
  return typeof first === "string" ? first : undefined;
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

export function quizAttemptsToMasteryInputs(
  attempts: QuizAttemptObservation[],
  questionsById: Record<string, QuestionMasteryContext | undefined>
): AttemptMasteryInput[] {
  return attempts.map((attempt) => {
    const question = questionsById[attempt.questionId];
    if (!question) {
      return {
        correct: attempt.isCorrect,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        confidence: parseAttemptConfidence(attempt.confidenceLevel),
        answeredAt: attempt.answeredAt,
      };
    }
    return quizAttemptToMasteryInput(attempt, question);
  });
}
