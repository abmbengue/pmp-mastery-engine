/**
 * Personal Finance content factory — rich micro-learning bodies (FR/EN).
 * Educational only — not personalized financial advice.
 */

import { buildPedagogicalBody, buildShortScript } from "./pedagogy";
import type { CompactLesson } from "./compact";
import type { LessonSeedConfig } from "../helpers";

export type QuizQ = LessonSeedConfig["question"];

export type PfLessonInput = {
  slug: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  moduleSlug: string;
  sortOrder: number;
  estimatedMinutes: number;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  skillSlug: string;
  learningObjective: "IDENTIFY" | "APPLY" | "ANALYZE" | "DECIDE";
  objectiveFr: string;
  objectiveEn: string;
  explanationFr: string;
  explanationEn: string;
  exampleFr: string;
  exampleEn: string;
  practicalFr: string;
  practicalEn: string;
  mistakeFr: string;
  mistakeEn: string;
  takeawayFr: string;
  takeawayEn: string;
  decisionFr: string;
  decisionEn: string;
  /** Optional pedagogical link to an existing simulator */
  simulatorFr?: string;
  simulatorEn?: string;
  flashcardFrontFr: string;
  flashcardFrontEn: string;
  flashcardBackFr: string;
  flashcardBackEn: string;
  exercisePromptFr: string;
  exercisePromptEn: string;
  question: QuizQ;
  questions?: QuizQ[];
  isShort?: boolean;
  shortDurationSeconds?: number;
};

const DISCLAIMER_FR =
  "Les règles fiscales, bancaires et réglementaires peuvent varier selon le pays. Contenu pédagogique — pas un conseil personnalisé.";
const DISCLAIMER_EN =
  "Tax, banking, and regulatory rules can vary by country. Educational content — not personalized advice.";

export function buildPfLesson(input: PfLessonInput): CompactLesson {
  const base = buildPedagogicalBody({
    objectiveFr: input.objectiveFr,
    objectiveEn: input.objectiveEn,
    explanationFr: `${input.explanationFr}\n\n${DISCLAIMER_FR}`,
    explanationEn: `${input.explanationEn}\n\n${DISCLAIMER_EN}`,
    exampleFr: input.exampleFr,
    exampleEn: input.exampleEn,
    practicalFr: input.practicalFr,
    practicalEn: input.practicalEn,
    mistakeFr: input.mistakeFr,
    mistakeEn: input.mistakeEn,
    takeawayFr: input.takeawayFr,
    takeawayEn: input.takeawayEn,
  });

  const decisionBlockFr = `Décision\n${input.decisionFr}`;
  const decisionBlockEn = `Decision\n${input.decisionEn}`;
  const simFr = input.simulatorFr
    ? `\n\nProlongement simulateur\n${input.simulatorFr}`
    : "";
  const simEn = input.simulatorEn
    ? `\n\nSimulator extension\n${input.simulatorEn}`
    : "";

  const textBodyFr = `${base.textBodyFr}\n\n${decisionBlockFr}${simFr}`;
  const textBodyEn = `${base.textBodyEn}\n\n${decisionBlockEn}${simEn}`;

  const shortBits = input.isShort
    ? buildShortScript({
        titleFr: input.titleFr,
        titleEn: input.titleEn,
        textBodyFr,
        textBodyEn,
        takeawayFr: input.takeawayFr,
        takeawayEn: input.takeawayEn,
      })
    : null;

  return {
    slug: input.slug,
    titleFr: input.titleFr,
    titleEn: input.titleEn,
    descriptionFr: input.descriptionFr,
    descriptionEn: input.descriptionEn,
    moduleSlug: input.moduleSlug,
    sortOrder: input.sortOrder,
    estimatedMinutes: input.estimatedMinutes,
    difficulty: input.difficulty,
    skillSlug: input.skillSlug,
    learningObjective: input.learningObjective,
    isShort: input.isShort,
    shortTopic: input.isShort ? input.slug : undefined,
    shortDurationSeconds: input.isShort ? (input.shortDurationSeconds ?? 150) : undefined,
    shortScriptFr: shortBits?.scriptFr,
    shortScriptEn: shortBits?.scriptEn,
    keyTakeawayFr: input.isShort ? input.takeawayFr : undefined,
    keyTakeawayEn: input.isShort ? input.takeawayEn : undefined,
    textBodyFr,
    textBodyEn,
    flashcardFrontFr: input.flashcardFrontFr,
    flashcardFrontEn: input.flashcardFrontEn,
    flashcardBackFr: input.flashcardBackFr,
    flashcardBackEn: input.flashcardBackEn,
    exercisePromptFr: input.exercisePromptFr,
    exercisePromptEn: input.exercisePromptEn,
    question: input.question,
    questions: input.questions,
  };
}

export function q(
  partial: QuizQ
): QuizQ {
  return partial;
}

export function opt(
  labelFr: string,
  labelEn: string,
  isCorrect: boolean,
  whyFr?: string,
  whyEn?: string
) {
  return {
    labelFr,
    labelEn,
    isCorrect,
    ...(isCorrect
      ? {}
      : {
          explanationWrongFr: whyFr ?? "Cette option est moins appropriée. Relisez l'exemple chiffré.",
          explanationWrongEn: whyEn ?? "This option is less appropriate. Re-read the numbered example.",
        }),
  };
}
