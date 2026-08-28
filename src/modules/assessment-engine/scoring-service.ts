import prisma from "@/data/prisma-client";
import type { QuestionType } from "@/generated/prisma/client";
import { updateConceptMastery } from "@/modules/learning-engine/progress-service";
import type { ConfidenceLevel } from "@/modules/mastery-engine/types";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";

export interface AnswerValidationInput {
  questionId: string;
  selectedOptionIds: string[];
}

export interface AnswerValidationResult {
  isCorrect: boolean;
  score: number;
  correctOptionIds: string[];
}

export async function validateAnswer(
  input: AnswerValidationInput
): Promise<AnswerValidationResult> {
  const question = await prisma.question.findUnique({
    where: { id: input.questionId },
    include: { answerOptions: true },
  });

  if (!question) {
    throw new Error(`Question not found: ${input.questionId}`);
  }

  const correctOptionIds = question.answerOptions
    .filter((o) => o.isCorrect)
    .map((o) => o.id);

  const isCorrect = evaluateAnswer(
    question.type,
    input.selectedOptionIds,
    correctOptionIds
  );

  const score = isCorrect ? 100 : 0;

  return { isCorrect, score, correctOptionIds };
}

export function evaluateAnswer(
  type: QuestionType,
  selectedIds: string[],
  correctIds: string[]
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

export function computeQuizScore(results: AnswerValidationResult[]): number {
  if (results.length === 0) return 0;
  const total = results.reduce((sum, r) => sum + r.score, 0);
  return Math.round(total / results.length);
}

export async function recordQuizAttempt(
  userId: string,
  questionId: string,
  selectedOptionIds: string[],
  learningItemId?: string,
  confidenceLevel?: ConfidenceLevel | null
) {
  const validation = await validateAnswer({ questionId, selectedOptionIds });

  const previousAttempts = await prisma.quizAttempt.count({
    where: { userId, questionId },
  });

  const attempt = await prisma.quizAttempt.create({
    data: {
      userId,
      questionId,
      learningItemId,
      score: validation.score,
      answers: selectedOptionIds,
      attemptNo: previousAttempts + 1,
      isCorrect: validation.isCorrect,
      confidenceLevel: confidenceLevel ?? null,
    },
  });

  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });

  if (question?.skillId) {
    const allAttempts = await prisma.quizAttempt.findMany({
      where: { userId, question: { skillId: question.skillId } },
    });
    const avgScore =
      allAttempts.reduce((s, a) => s + a.score, 0) / allAttempts.length;
    await updateConceptMastery(
      userId,
      question.skillId,
      computeMasteryLevelFromScore(avgScore)
    );
  }

  return { attempt, validation };
}
