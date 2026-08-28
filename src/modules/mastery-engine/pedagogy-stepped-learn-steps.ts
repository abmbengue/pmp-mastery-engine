/**
 * Step builder for interactive LEARN (Phase B.3.2 P1+).
 * Composes existing pack + canonical critical-distinctions only — no new pedagogy content.
 */

import type { CriticalDistinctionCard } from "./critical-distinctions";
import type { LessonPedagogyPack, PedagogyScreen } from "./lesson-pedagogy";

export type PedagogyMindsetPhase = "ASSESS" | "ALIGN" | "DECIDE" | "ACT";

export type SteppedMiniCaseChoice = {
  id: string;
  labelFr: string;
  labelEn: string;
  correct?: boolean;
};

export type SteppedLearnStep =
  | { kind: "what"; bodyFr: string; bodyEn: string }
  | { kind: "why"; bodyFr: string; bodyEn: string }
  | {
      kind: "recognize";
      cues: Array<{ fr: string; en: string }>;
    }
  | {
      kind: "decide";
      mindset: Array<{
        phase: PedagogyMindsetPhase;
        bodyFr: string;
        bodyEn: string;
      }>;
      rules: Array<{ fr: string; en: string }>;
      visualLinesFr: string[];
      visualLinesEn: string[];
    }
  | {
      kind: "distinctions";
      distinctions: CriticalDistinctionCard[];
    }
  | {
      kind: "mini_case";
      scenarioFr: string;
      scenarioEn: string;
      promptFr: string;
      promptEn: string;
      reflectFr: string;
      reflectEn: string;
      choices: SteppedMiniCaseChoice[];
      rationaleFr: string;
      rationaleEn: string;
    }
  | { kind: "takeaway"; bodyFr: string; bodyEn: string };

/** Lessons using the stepped interactive LEARN flow (mobile one-card-at-a-time). */
export const STEPPED_LEARN_LESSON_IDS = [
  "shared-vision",
  "knowledge-transfer",
  "communication",
  "risk-vs-issue",
] as const;

export type SteppedLearnLessonId = (typeof STEPPED_LEARN_LESSON_IDS)[number];

const MINI_CASE_CHOICE_ORDER: Partial<
  Record<SteppedLearnLessonId, readonly string[]>
> = {
  "shared-vision": ["b", "a", "c"],
  "knowledge-transfer": ["b", "a", "c"],
  communication: ["b", "a", "c"],
};

export function usesSteppedLearn(lessonId: string): lessonId is SteppedLearnLessonId {
  return (STEPPED_LEARN_LESSON_IDS as readonly string[]).includes(lessonId);
}

function pickMiniCaseScreen(pack: LessonPedagogyPack): PedagogyScreen | undefined {
  return pack.screens.find((s) => s.intent === "MINI_CASE");
}

function pickDecisionRuleScreen(pack: LessonPedagogyPack): PedagogyScreen | undefined {
  return pack.screens.find((s) => s.intent === "DECISION_RULE");
}

/**
 * Limits mini-case to 3 conceptual choices (pedagogical — not exam bank).
 */
export function selectSteppedMiniCaseChoices(
  lessonId: SteppedLearnLessonId,
  screen: PedagogyScreen
): SteppedMiniCaseChoice[] {
  if (!screen.choices?.length) return [];
  const order = MINI_CASE_CHOICE_ORDER[lessonId];
  if (!order?.length) return screen.choices.slice(0, 3);
  const byId = new Map(screen.choices.map((c) => [c.id, c] as const));
  const ordered = order.map((id) => byId.get(id)).filter(
    (c): c is NonNullable<typeof c> => c != null
  );
  return ordered.slice(0, 3);
}

/** @deprecated Use selectSteppedMiniCaseChoices */
export function selectSharedVisionMiniCaseChoices(
  screen: PedagogyScreen
): SteppedMiniCaseChoice[] {
  return selectSteppedMiniCaseChoices("shared-vision", screen);
}

function buildRecognizeCues(
  pack: LessonPedagogyPack,
  distinctions: CriticalDistinctionCard[]
): Array<{ fr: string; en: string }> {
  const cues: Array<{ fr: string; en: string }> = [];

  for (const m of pack.misconceptions) {
    cues.push({
      fr: `Piège : ${m.wrongFr} → ${m.rightFr}`,
      en: `Trap: ${m.wrongEn} → ${m.rightEn}`,
    });
  }

  for (const d of distinctions) {
    cues.push({ fr: d.examCueFr, en: d.examCueEn });
  }

  return cues;
}

function visualModelChain(lines: string[]): string {
  return lines.filter((line) => line !== "↓").join(" → ");
}

function buildMindsetFrames(
  pack: LessonPedagogyPack,
  decisionScreen: PedagogyScreen | undefined
): Array<{
  phase: PedagogyMindsetPhase;
  bodyFr: string;
  bodyEn: string;
}> {
  const [ruleAssess, ruleAct] = pack.decisionRules;
  const decisionBodyFr = decisionScreen?.bodyFr ?? "";
  const decisionBodyEn = decisionScreen?.bodyEn ?? "";

  return [
    {
      phase: "ASSESS",
      bodyFr: ruleAssess?.fr ?? pack.whyItMattersFr,
      bodyEn: ruleAssess?.en ?? pack.whyItMattersEn,
    },
    {
      phase: "ALIGN",
      bodyFr: visualModelChain(pack.visualModel.linesFr),
      bodyEn: visualModelChain(pack.visualModel.linesEn),
    },
    {
      phase: "DECIDE",
      bodyFr: decisionBodyFr || ruleAssess?.fr || "",
      bodyEn: decisionBodyEn || ruleAssess?.en || "",
    },
    {
      phase: "ACT",
      bodyFr: ruleAct?.fr ?? "",
      bodyEn: ruleAct?.en ?? "",
    },
  ];
}

export function buildSteppedLearnSteps(
  pack: LessonPedagogyPack,
  criticalDistinctions: CriticalDistinctionCard[],
  takeaway?: string | null
): SteppedLearnStep[] {
  if (!usesSteppedLearn(pack.lessonId)) {
    throw new Error(`buildSteppedLearnSteps: unsupported lesson ${pack.lessonId}`);
  }

  const lessonId = pack.lessonId;
  const miniCase = pickMiniCaseScreen(pack);
  const decisionScreen = pickDecisionRuleScreen(pack);
  const recognizeCues = buildRecognizeCues(pack, criticalDistinctions);

  const steps: SteppedLearnStep[] = [
    { kind: "what", bodyFr: pack.objectiveFr, bodyEn: pack.objectiveEn },
    { kind: "why", bodyFr: pack.whyItMattersFr, bodyEn: pack.whyItMattersEn },
    { kind: "recognize", cues: recognizeCues },
    {
      kind: "decide",
      mindset: buildMindsetFrames(pack, decisionScreen),
      rules: pack.decisionRules.map((r) => ({ fr: r.fr, en: r.en })),
      visualLinesFr: pack.visualModel.linesFr,
      visualLinesEn: pack.visualModel.linesEn,
    },
    { kind: "distinctions", distinctions: criticalDistinctions },
  ];

  if (miniCase) {
    steps.push({
      kind: "mini_case",
      scenarioFr: miniCase.bodyFr,
      scenarioEn: miniCase.bodyEn,
      promptFr: "Que ferais-tu en premier ?",
      promptEn: "What would you do first?",
      reflectFr: "Prenez un moment pour réfléchir avant de voir les options.",
      reflectEn: "Take a moment to think before seeing the options.",
      choices: selectSteppedMiniCaseChoices(lessonId, miniCase),
      rationaleFr: miniCase.whyFr ?? "",
      rationaleEn: miniCase.whyEn ?? "",
    });
  }

  const takeawayFr =
    takeaway ?? pack.masteryHooks.noteFr ?? pack.masteryHooks.noteEn ?? "";
  const takeawayEn =
    takeaway ?? pack.masteryHooks.noteEn ?? pack.masteryHooks.noteFr ?? "";
  if (takeawayFr || takeawayEn) {
    steps.push({ kind: "takeaway", bodyFr: takeawayFr, bodyEn: takeawayEn });
  }

  return steps;
}

/** @deprecated Use buildSteppedLearnSteps */
export function buildSharedVisionLearnSteps(
  pack: LessonPedagogyPack,
  criticalDistinctions: CriticalDistinctionCard[],
  takeaway?: string | null
): SteppedLearnStep[] {
  return buildSteppedLearnSteps(pack, criticalDistinctions, takeaway);
}

export type SharedVisionLearnStep = SteppedLearnStep;
export type SharedVisionMiniCaseChoice = SteppedMiniCaseChoice;
