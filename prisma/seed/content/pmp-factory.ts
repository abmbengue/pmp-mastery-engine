/**
 * PMP / Project Management content factory — rich micro-learning bodies (FR/EN).
 * ORIGINAL pedagogical content — NOT PMI / PMBOK reproduction.
 */

import { buildPedagogicalBody, buildShortScript } from "./pedagogy";
import type { LessonSeedConfig } from "../helpers";
import type { PmpLesson } from "./pmp-types";

export type QuizQ = LessonSeedConfig["question"];

export type PmpSituation = NonNullable<PmpLesson["situation"]>;

export type PmpLessonInput = {
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
  flashcardFrontFr: string;
  flashcardFrontEn: string;
  flashcardBackFr: string;
  flashcardBackEn: string;
  exercisePromptFr: string;
  exercisePromptEn: string;
  question: QuizQ;
  questions?: QuizQ[];
  situation?: PmpSituation;
  isShort?: boolean;
  shortDurationSeconds?: number;
};

const DISCLAIMER_FR =
  "Contenu pédagogique PLA original — pas une certification PMI, pas une reproduction PMBOK®, pas un score officiel.";
const DISCLAIMER_EN =
  "Original PLA educational content — not a PMI certification, not PMBOK® reproduction, not an official score.";

export function buildPmpLesson(input: PmpLessonInput): PmpLesson {
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

  let textBodyFr = `${base.textBodyFr}\n\n${decisionBlockFr}`;
  let textBodyEn = `${base.textBodyEn}\n\n${decisionBlockEn}`;

  if (input.situation) {
    textBodyFr += `\n\nSituation\n${input.situation.scenarioFr}`;
    textBodyEn += `\n\nSituation\n${input.situation.scenarioEn}`;
    if (input.situation.problemFr) {
      textBodyFr += `\nProblème : ${input.situation.problemFr}`;
      textBodyEn += `\nProblem: ${input.situation.problemEn ?? input.situation.problemFr}`;
    }
    textBodyFr += `\nMeilleure action : ${input.situation.bestActionFr}`;
    textBodyEn += `\nBest action: ${input.situation.bestActionEn}`;
  }

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
    situation: input.situation,
  };
}

export function q(partial: QuizQ): QuizQ {
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
          explanationWrongFr:
            whyFr ??
            "Cette option reflète une erreur plausible. Relisez le mini-cas et la méthode PLA.",
          explanationWrongEn:
            whyEn ??
            "This option reflects a plausible mistake. Re-read the mini-case and PLA method.",
        }),
  };
}
