import { PMP_EXAM_BANK_STEMS } from "../../../../prisma/seed/pmp-exam-bank-data";
import { getLessonPedagogy } from "../../../../src/modules/mastery-engine/lesson-pedagogy";
import { PMP_LESSON_CATALOG } from "../../../../src/modules/mastery-engine/pmp-lesson-catalog";

export type LocalLesson = {
  id: string;
  title: string;
  objective: string;
  explanation: string;
  concept: string;
};

export type LocalQuestion = {
  id: string;
  prompt: string;
  explanation: string;
  concept: string;
  correctOptionId: string;
  options: Array<{ id: string; text: string }>;
};

const FALLBACK_EXPLANATION =
  "Analysez la situation, identifiez l'objectif projet, puis choisissez l'action qui maximise la valeur tout en alignant les parties prenantes.";

export const LESSONS: LocalLesson[] = PMP_LESSON_CATALOG.slice(0, 79).map((lesson) => {
  const pedagogy = getLessonPedagogy(lesson.slug);
  return {
    id: lesson.slug,
    title: lesson.titleFr,
    objective: pedagogy?.objectiveFr ?? `Comprendre ${lesson.titleFr} dans un contexte PMP.`,
    explanation:
      pedagogy?.whyItMattersFr ?? pedagogy?.screens[0]?.bodyFr ?? FALLBACK_EXPLANATION,
    concept: pedagogy?.concepts[0] ?? "pmp-core",
  };
});

export const QUESTIONS: LocalQuestion[] = PMP_EXAM_BANK_STEMS.map((q) => {
  const options = q.options.map((option, index) => ({
    id: `${q.externalKey}-opt-${index + 1}`,
    text: option.labelFr || option.labelEn,
  }));
  const correctIndex = q.options.findIndex((option) => option.isCorrect);

  return {
    id: q.externalKey,
    prompt: q.promptFr || q.promptEn,
    explanation: q.explanationCorrectFr || q.explanationCorrectEn || FALLBACK_EXPLANATION,
    concept: q.conceptSlug || q.processArea,
    correctOptionId: options[correctIndex]!.id,
    options,
  };
});

export function getLessonById(lessonId: string): LocalLesson | undefined {
  return LESSONS.find((lesson) => lesson.id === lessonId);
}

export function getQuestionsForLesson(lessonId: string): LocalQuestion[] {
  const lessonIndex = Math.max(LESSONS.findIndex((lesson) => lesson.id === lessonId), 0);
  const size = 8;
  const start = (lessonIndex * size) % QUESTIONS.length;
  const chunk = QUESTIONS.slice(start, start + size);
  if (chunk.length === size) return chunk;
  return chunk.concat(QUESTIONS.slice(0, size - chunk.length));
}

export function getQuestionById(questionId: string): LocalQuestion | undefined {
  return QUESTIONS.find((question) => question.id === questionId);
}
