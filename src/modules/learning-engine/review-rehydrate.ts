/**
 * Phase C Iteration 7 — READ-ONLY REVIEW rehydration from persisted QuizAttempt rows.
 */

import prisma from "@/data/prisma-client";
import { computeQuizScore } from "@/modules/assessment-engine/scoring-service";
import { quizAttemptsToMasteryInputs } from "@/modules/mastery-engine/attempt-adapter";
import type { QuestionMasteryContext } from "@/modules/mastery-engine/attempt-adapter";
import { buildSkillMasterySnapshotViews } from "@/modules/mastery-engine/mastery-snapshot";
import type { SkillMasterySnapshotView } from "@/modules/mastery-engine/mastery-snapshot-view";
import type { Locale } from "@/shared/types/locale";
import type { LessonPhase } from "./lesson-phases";
import {
  mapPersistedQuizAttemptsToLessonQuizResults,
  type LessonQuizResult,
} from "./quiz-result-mapper";

export type ReviewRehydrateReason =
  | "LEGACY_NO_PHASE"
  | "LEGACY_NO_SCORE"
  | "LEGACY_NO_QUIZ_ITEM"
  | "LEGACY_NO_ATTEMPTS"
  | "LEGACY_INCOMPLETE_ATTEMPTS"
  | "REVIEW_REHYDRATED";

export type ReviewRehydrateContract = {
  canRehydrateReview: boolean;
  reason: ReviewRehydrateReason;
  effectivePhase: LessonPhase | null;
};

/**
 * Pure contract — determines whether persisted data can restore REVIEW/MASTER.
 */
export function resolveReviewRehydrateContract(input: {
  currentPhase: LessonPhase;
  quizScore: number | null;
  learningItemId: string | null;
  expectedQuestionCount: number;
  latestAttemptCount: number;
}): ReviewRehydrateContract {
  if (input.currentPhase !== "REVIEW" && input.currentPhase !== "MASTER") {
    return {
      canRehydrateReview: false,
      reason: "LEGACY_NO_PHASE",
      effectivePhase: null,
    };
  }
  if (input.quizScore == null) {
    return {
      canRehydrateReview: false,
      reason: "LEGACY_NO_SCORE",
      effectivePhase: null,
    };
  }
  if (!input.learningItemId) {
    return {
      canRehydrateReview: false,
      reason: "LEGACY_NO_QUIZ_ITEM",
      effectivePhase: null,
    };
  }
  if (input.latestAttemptCount === 0) {
    return {
      canRehydrateReview: false,
      reason: "LEGACY_NO_ATTEMPTS",
      effectivePhase: null,
    };
  }
  if (input.latestAttemptCount < input.expectedQuestionCount) {
    return {
      canRehydrateReview: false,
      reason: "LEGACY_INCOMPLETE_ATTEMPTS",
      effectivePhase: null,
    };
  }
  return {
    canRehydrateReview: true,
    reason: "REVIEW_REHYDRATED",
    effectivePhase: input.currentPhase,
  };
}

export type LessonReviewRehydrateData = {
  quizResults: LessonQuizResult[];
  quizScore: number;
  attemptIds: string[];
  skillSnapshots: SkillMasterySnapshotView[];
};

const attemptSelect = {
  id: true,
  questionId: true,
  score: true,
  answers: true,
  isCorrect: true,
  confidenceLevel: true,
  attemptNo: true,
  createdAt: true,
  question: {
    select: {
      id: true,
      type: true,
      promptFr: true,
      promptEn: true,
      explanationCorrectFr: true,
      explanationCorrectEn: true,
      skillId: true,
      conceptSlug: true,
      ecoTaskCode: true,
      examDifficulty: true,
      difficulty: true,
      learningObjective: true,
      externalKey: true,
      answerOptions: {
        orderBy: { sortOrder: "asc" as const },
        select: {
          id: true,
          labelFr: true,
          labelEn: true,
          isCorrect: true,
          explanationWrongFr: true,
          explanationWrongEn: true,
        },
      },
      masteryMetadata: {
        select: {
          ecoTaskId: true,
          primaryConceptId: true,
          primarySkillId: true,
          cognitiveLevel: true,
          difficulty: true,
          misconceptionIds: true,
        },
      },
    },
  },
} as const;

type LoadedAttempt = Awaited<
  ReturnType<
    typeof prisma.quizAttempt.findMany<{ select: typeof attemptSelect }>
  >
>[number];

function pickLatestAttemptsPerQuestion(
  attempts: LoadedAttempt[],
  questionIds: string[]
): LoadedAttempt[] | null {
  const latestByQuestion = new Map<string, LoadedAttempt>();
  for (const attempt of attempts) {
    const existing = latestByQuestion.get(attempt.questionId);
    if (!existing || attempt.attemptNo > existing.attemptNo) {
      latestByQuestion.set(attempt.questionId, attempt);
    }
  }

  if (latestByQuestion.size < questionIds.length) return null;

  return questionIds.map((questionId) => {
    const row = latestByQuestion.get(questionId);
    return row ?? null;
  }).filter((row): row is LoadedAttempt => row != null);
}

/**
 * READ-ONLY loader — rebuilds REVIEW payload from QuizAttempt rows.
 * Does not write LessonProgress, QuizAttempt, or ConceptMastery.
 */
export async function loadLessonReviewRehydrateData(
  userId: string,
  learningItemId: string,
  locale: Locale,
  questionIds: string[]
): Promise<LessonReviewRehydrateData | null> {
  if (questionIds.length === 0) return null;

  const attempts = await prisma.quizAttempt.findMany({
    where: {
      userId,
      learningItemId,
      questionId: { in: questionIds },
    },
    select: attemptSelect,
  });

  const latestAttempts = pickLatestAttemptsPerQuestion(attempts, questionIds);
  if (!latestAttempts || latestAttempts.length !== questionIds.length) {
    return null;
  }

  const quizResults = mapPersistedQuizAttemptsToLessonQuizResults(
    latestAttempts,
    locale
  );

  const quizScore = computeQuizScore(
    latestAttempts.map((attempt) => ({
      isCorrect: attempt.isCorrect,
      score: attempt.score,
      correctOptionIds: attempt.question.answerOptions
        .filter((option) => option.isCorrect)
        .map((option) => option.id),
    }))
  );

  const questionsById: Record<string, QuestionMasteryContext> = {};
  for (const attempt of latestAttempts) {
    questionsById[attempt.question.id] = {
      ...attempt.question,
      masteryMetadata: attempt.question.masteryMetadata,
    };
  }

  const masteryInputs = quizAttemptsToMasteryInputs(
    latestAttempts.map((attempt) => ({
      questionId: attempt.questionId,
      isCorrect: attempt.isCorrect,
      confidenceLevel: attempt.confidenceLevel,
      answeredAt: attempt.createdAt,
    })),
    questionsById
  );

  const skillIds = [
    ...new Set(
      latestAttempts
        .map((attempt) => attempt.question.skillId)
        .filter((id): id is string => typeof id === "string" && id.length > 0)
    ),
  ];

  const attemptsBySkillId: Record<string, typeof masteryInputs> = {};
  for (const skillId of skillIds) {
    attemptsBySkillId[skillId] = masteryInputs.filter(
      (input) => input.skillId === skillId
    );
  }

  return {
    quizResults,
    quizScore,
    attemptIds: latestAttempts.map((attempt) => attempt.id),
    skillSnapshots: buildSkillMasterySnapshotViews(skillIds, attemptsBySkillId),
  };
}

export async function countLatestQuizAttemptsForLearningItem(
  userId: string,
  learningItemId: string,
  questionIds: string[]
): Promise<number> {
  if (questionIds.length === 0) return 0;

  const attempts = await prisma.quizAttempt.findMany({
    where: {
      userId,
      learningItemId,
      questionId: { in: questionIds },
    },
    select: { questionId: true, attemptNo: true },
  });

  const latestByQuestion = new Map<string, number>();
  for (const attempt of attempts) {
    const prev = latestByQuestion.get(attempt.questionId) ?? 0;
    if (attempt.attemptNo > prev) {
      latestByQuestion.set(attempt.questionId, attempt.attemptNo);
    }
  }

  return latestByQuestion.size;
}
