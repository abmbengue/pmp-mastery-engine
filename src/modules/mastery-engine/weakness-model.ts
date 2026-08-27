/**
 * Weakness model — aggregates attempts into task/concept/skill weaknesses.
 */

import type { ExamErrorCategoryCode } from "@/modules/assessment-engine/analytics-engine";
import type {
  CognitiveLevel,
  ConfidenceLevel,
  EcoTaskStableId,
  MasteryState,
} from "./types";
import { deriveMasteryState, type MasteryEvidenceInput } from "./mastery-states";
import { assessConfidenceCalibration } from "./confidence";
import { buildRetentionRecord } from "./retention";

export type WeaknessSignal = {
  ecoTaskId?: EcoTaskStableId;
  conceptId?: string;
  skillId?: string;
  misconceptionId?: string;
  errorCategory?: ExamErrorCategoryCode;
  weaknessLabelEn: string;
  weaknessLabelFr: string;
  priority: number;
};

export type AttemptMasteryInput = {
  correct: boolean;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  cognitiveLevel: CognitiveLevel;
  confidence?: ConfidenceLevel | null;
  ecoTaskId?: EcoTaskStableId;
  conceptId?: string;
  skillId?: string;
  misconceptionId?: string;
  errorCategory?: ExamErrorCategoryCode;
  answeredAt: Date;
  /** Optional item key for distinct-question evidence (not required for all callers) */
  questionExternalKey?: string;
};

function difficultyWeight(d: "EASY" | "MEDIUM" | "HARD"): number {
  if (d === "HARD") return 1.35;
  if (d === "EASY") return 0.85;
  return 1;
}

export function computeWeightedPerformance(
  attempts: Pick<AttemptMasteryInput, "correct" | "difficulty">[]
): number {
  if (attempts.length === 0) return 0;
  let earned = 0;
  let total = 0;
  for (const a of attempts) {
    const w = difficultyWeight(a.difficulty);
    total += w;
    if (a.correct) earned += w;
  }
  return Math.round((earned / total) * 100);
}

export function buildWeaknessSignals(
  attempts: AttemptMasteryInput[]
): WeaknessSignal[] {
  const signals: WeaknessSignal[] = [];
  const bySkill = new Map<string, AttemptMasteryInput[]>();
  const byConcept = new Map<string, AttemptMasteryInput[]>();
  const byTask = new Map<string, AttemptMasteryInput[]>();

  for (const a of attempts) {
    if (a.skillId) {
      const list = bySkill.get(a.skillId) ?? [];
      list.push(a);
      bySkill.set(a.skillId, list);
    }
    if (a.conceptId) {
      const list = byConcept.get(a.conceptId) ?? [];
      list.push(a);
      byConcept.set(a.conceptId, list);
    }
    if (a.ecoTaskId) {
      const list = byTask.get(a.ecoTaskId) ?? [];
      list.push(a);
      byTask.set(a.ecoTaskId, list);
    }
  }

  for (const [skillId, list] of bySkill) {
    const perf = computeWeightedPerformance(list);
    if (perf >= 70) continue;
    const last = list[list.length - 1];
    const cal = assessConfidenceCalibration(last.correct, last.confidence);
    signals.push({
      skillId,
      conceptId: last.conceptId,
      ecoTaskId: last.ecoTaskId,
      misconceptionId: last.misconceptionId,
      errorCategory: last.errorCategory,
      weaknessLabelEn: `Weak skill performance (${perf}%)`,
      weaknessLabelFr: `Compétence fragile (${perf}%)`,
      priority: cal === "OVERCONFIDENT" ? 1 : 2,
    });
  }

  for (const [conceptId, list] of byConcept) {
    const perf = computeWeightedPerformance(list);
    if (perf >= 65) continue;
    signals.push({
      conceptId,
      ecoTaskId: list[list.length - 1]?.ecoTaskId,
      weaknessLabelEn: `Concept gap: ${conceptId}`,
      weaknessLabelFr: `Lacune conceptuelle : ${conceptId}`,
      priority: 2,
    });
  }

  for (const [ecoTaskId, list] of byTask) {
    const perf = computeWeightedPerformance(list);
    if (perf >= 65) continue;
    signals.push({
      ecoTaskId: ecoTaskId as EcoTaskStableId,
      weaknessLabelEn: `ECO task weakness: ${ecoTaskId}`,
      weaknessLabelFr: `Faiblesse tâche ECO : ${ecoTaskId}`,
      priority: 3,
    });
  }

  return signals.sort((a, b) => a.priority - b.priority);
}

export function buildSkillMasterySnapshot(input: {
  skillId: string;
  attempts: AttemptMasteryInput[];
}): {
  skillId: string;
  attempts: number;
  correct: number;
  incorrect: number;
  recentPerformance: number;
  historicalPerformance: number;
  confidence: ConfidenceLevel | null;
  retention: ReturnType<typeof buildRetentionRecord>;
  masteryState: MasteryState;
} {
  const { attempts } = input;
  const correct = attempts.filter((a) => a.correct).length;
  const incorrect = attempts.length - correct;
  const recent = attempts.slice(-5);
  const recentPerformance = computeWeightedPerformance(recent);
  const historicalPerformance = computeWeightedPerformance(attempts);
  const last = attempts[attempts.length - 1];
  const first = attempts[0];
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysSinceFirstExposure =
    first && last
      ? Math.max(
          0,
          Math.floor(
            (last.answeredAt.getTime() - first.answeredAt.getTime()) / msPerDay
          )
        )
      : 0;
  const distinctKeys = new Set(
    attempts
      .map((a) => a.questionExternalKey)
      .filter((k): k is string => typeof k === "string" && k.length > 0)
  );
  const maxCognitive = attempts.reduce<CognitiveLevel>((acc, a) => {
    const rank: Record<CognitiveLevel, number> = {
      RECOGNITION: 1,
      UNDERSTANDING: 2,
      APPLICATION: 3,
      ANALYSIS: 4,
      JUDGMENT: 5,
      TRANSFER: 6,
    };
    return rank[a.cognitiveLevel] > rank[acc] ? a.cognitiveLevel : acc;
  }, last?.cognitiveLevel ?? "RECOGNITION");
  const evidence: MasteryEvidenceInput = {
    attempts: attempts.length,
    weightedCorrectRate: historicalPerformance,
    distinctQuestionCount:
      distinctKeys.size > 0 ? distinctKeys.size : attempts.length,
    maxCognitiveAchieved: maxCognitive,
    daysSinceFirstExposure,
    recentIncorrectStreak: attempts
      .slice(-3)
      .filter((a) => !a.correct).length,
    confidenceCalibrated:
      last != null &&
      assessConfidenceCalibration(last.correct, last.confidence) === "CALIBRATED",
  };
  const masteryState = deriveMasteryState(evidence);
  return {
    skillId: input.skillId,
    attempts: attempts.length,
    correct,
    incorrect,
    recentPerformance,
    historicalPerformance,
    confidence: last?.confidence ?? null,
    retention: buildRetentionRecord({
      lastSeen: last?.answeredAt ?? null,
      lastCorrect: [...attempts].reverse().find((a) => a.correct)?.answeredAt ?? null,
      lastIncorrect: [...attempts].reverse().find((a) => !a.correct)?.answeredAt ?? null,
      reviewCount: attempts.length,
      masteryState,
    }),
    masteryState,
  };
}
