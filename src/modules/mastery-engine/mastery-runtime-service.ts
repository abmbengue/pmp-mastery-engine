/**
 * Phase C — post-quiz mastery runtime.
 * QuizAttempt → adapter → weakness-model → ConceptMastery (single write path).
 *
 * recordQuizAttempt persists attempts only; this service owns mastery upserts
 * after lesson TEST submission. finishLesson no longer writes ConceptMastery.
 */

import prisma from "@/data/prisma-client";
import { updateConceptMastery } from "@/modules/learning-engine/progress-service";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";
import {
  quizAttemptsToMasteryInputs,
  type QuestionMasteryContext,
  type QuizAttemptObservation,
} from "./attempt-adapter";
import {
  buildWeaknessSignals,
  computeWeightedPerformance,
  type WeaknessSignal,
} from "./weakness-model";

export type QuizMasteryRuntimeResult = {
  weaknessSignals: WeaknessSignal[];
  updatedSkillIds: string[];
};

export async function processQuizMasteryForAttempts(
  userId: string,
  attemptIds: string[]
): Promise<QuizMasteryRuntimeResult> {
  if (attemptIds.length === 0) {
    return { weaknessSignals: [], updatedSkillIds: [] };
  }

  const batchAttempts = await prisma.quizAttempt.findMany({
    where: { id: { in: attemptIds }, userId },
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      questionId: true,
      isCorrect: true,
      confidenceLevel: true,
      createdAt: true,
      question: {
        select: {
          id: true,
          externalKey: true,
          skillId: true,
          conceptSlug: true,
          ecoTaskCode: true,
          examDifficulty: true,
          difficulty: true,
          learningObjective: true,
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
    },
  });

  if (batchAttempts.length === 0) {
    return { weaknessSignals: [], updatedSkillIds: [] };
  }

  const skillIds = [
    ...new Set(
      batchAttempts
        .map((a) => a.question.skillId)
        .filter((id): id is string => typeof id === "string" && id.length > 0)
    ),
  ];

  const allSkillAttempts = skillIds.length
    ? await prisma.quizAttempt.findMany({
        where: {
          userId,
          question: { skillId: { in: skillIds } },
        },
        orderBy: { createdAt: "asc" },
        select: {
          questionId: true,
          isCorrect: true,
          confidenceLevel: true,
          createdAt: true,
          question: {
            select: {
              id: true,
              externalKey: true,
              skillId: true,
              conceptSlug: true,
              ecoTaskCode: true,
              examDifficulty: true,
              difficulty: true,
              learningObjective: true,
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
        },
      })
    : [];

  const questionsById: Record<string, QuestionMasteryContext> = {};
  for (const row of allSkillAttempts) {
    questionsById[row.question.id] = {
      ...row.question,
      masteryMetadata: row.question.masteryMetadata,
    };
  }

  const weaknessInputs = quizAttemptsToMasteryInputs(
    allSkillAttempts.map((a) => ({
      questionId: a.questionId,
      isCorrect: a.isCorrect,
      confidenceLevel: a.confidenceLevel,
      answeredAt: a.createdAt,
    })),
    questionsById
  );

  const weaknessSignals = buildWeaknessSignals(weaknessInputs);

  const updatedSkillIds: string[] = [];
  for (const skillId of skillIds) {
    const skillAttempts = allSkillAttempts.filter((a) => a.question.skillId === skillId);
    const observations: QuizAttemptObservation[] = skillAttempts.map((a) => ({
      questionId: a.questionId,
      isCorrect: a.isCorrect,
      confidenceLevel: a.confidenceLevel,
      answeredAt: a.createdAt,
    }));

    const skillInputs = quizAttemptsToMasteryInputs(observations, questionsById);
    const weightedPerf = computeWeightedPerformance(skillInputs);
    const level = computeMasteryLevelFromScore(weightedPerf);

    await updateConceptMastery(userId, skillId, level);
    updatedSkillIds.push(skillId);
  }

  return { weaknessSignals, updatedSkillIds };
}
