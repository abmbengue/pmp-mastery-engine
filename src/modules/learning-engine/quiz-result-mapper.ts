/**
 * Shared quiz result mapping for lesson TEST/REVIEW (client + server).
 */

import type { Locale } from "@/shared/types/locale";

export interface QuizOptionShape {
  id: string;
  label: string;
  isCorrect: boolean;
  explanationWrong?: string;
}

export interface QuizQuestionShape {
  id: string;
  type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE";
  prompt: string;
  explanationCorrect: string;
  options: QuizOptionShape[];
}

export interface LessonQuizResult {
  questionId: string;
  isCorrect: boolean;
  score: number;
  selectedOptionIds: string[];
  correctOptionIds: string[];
  question: QuizQuestionShape;
}

type AnswerOptionRow = {
  id: string;
  labelFr: string;
  labelEn: string;
  isCorrect: boolean;
  explanationWrongFr?: string | null;
  explanationWrongEn?: string | null;
};

type QuestionRow = {
  id: string;
  type: string;
  promptFr: string;
  promptEn: string;
  explanationCorrectFr: string;
  explanationCorrectEn: string;
  answerOptions: AnswerOptionRow[];
};

export type QuizAttemptApiResult = {
  questionId: string;
  isCorrect: boolean;
  score: number;
  correctOptionIds: string[];
  selectedOptionIds: string[];
  question: QuestionRow;
};

export function mapQuizAttemptApiResultsToLessonQuizResults(
  results: QuizAttemptApiResult[],
  locale: Locale
): LessonQuizResult[] {
  return results.map((r) => mapSingleQuizAttemptApiResult(r, locale));
}

function mapSingleQuizAttemptApiResult(
  r: QuizAttemptApiResult,
  locale: Locale
): LessonQuizResult {
  return {
    questionId: r.questionId,
    isCorrect: r.isCorrect,
    score: r.score,
    selectedOptionIds: r.selectedOptionIds,
    correctOptionIds: r.correctOptionIds,
    question: {
      id: r.question.id,
      type: r.question.type as LessonQuizResult["question"]["type"],
      prompt: locale === "fr" ? r.question.promptFr : r.question.promptEn,
      explanationCorrect:
        locale === "fr"
          ? r.question.explanationCorrectFr
          : r.question.explanationCorrectEn,
      options: r.question.answerOptions.map((o) => ({
        id: o.id,
        label: locale === "fr" ? o.labelFr : o.labelEn,
        isCorrect: o.isCorrect,
        explanationWrong:
          locale === "fr"
            ? (o.explanationWrongFr ?? undefined)
            : (o.explanationWrongEn ?? undefined),
      })),
    },
  };
}

export type PersistedQuizAttemptRow = {
  questionId: string;
  isCorrect: boolean;
  score: number;
  answers: unknown;
  question: QuestionRow;
};

export function mapPersistedQuizAttemptsToLessonQuizResults(
  attempts: PersistedQuizAttemptRow[],
  locale: Locale
): LessonQuizResult[] {
  return attempts.map((attempt) => {
    const selectedOptionIds = Array.isArray(attempt.answers)
      ? (attempt.answers as string[])
      : [];
    const correctOptionIds = attempt.question.answerOptions
      .filter((o) => o.isCorrect)
      .map((o) => o.id);

    return mapSingleQuizAttemptApiResult(
      {
        questionId: attempt.questionId,
        isCorrect: attempt.isCorrect,
        score: attempt.score,
        correctOptionIds,
        selectedOptionIds,
        question: attempt.question,
      },
      locale
    );
  });
}
