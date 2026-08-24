import prisma from "@/data/prisma-client";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

export async function findQuestionById(id: string) {
  return prisma.question.findUnique({
    where: { id },
    include: {
      answerOptions: { orderBy: { sortOrder: "asc" } },
      skill: true,
    },
  });
}

export async function findQuestionsByLearningItemId(learningItemId: string) {
  return prisma.question.findMany({
    where: { learningItemId },
    include: { answerOptions: { orderBy: { sortOrder: "asc" } } },
  });
}

export function localizeQuestion(
  question: {
    promptFr: string;
    promptEn: string;
    explanationCorrectFr: string;
    explanationCorrectEn: string;
  },
  locale: Locale
) {
  return {
    prompt: pickLocalized(question.promptFr, question.promptEn, locale),
    explanationCorrect: pickLocalized(
      question.explanationCorrectFr,
      question.explanationCorrectEn,
      locale
    ),
  };
}

export function localizeAnswerOption(
  option: {
    labelFr: string;
    labelEn: string;
    explanationWrongFr: string | null;
    explanationWrongEn: string | null;
  },
  locale: Locale
) {
  return {
    label: pickLocalized(option.labelFr, option.labelEn, locale),
    explanationWrong: pickLocalized(
      option.explanationWrongFr ?? "",
      option.explanationWrongEn ?? "",
      locale
    ) || undefined,
  };
}
