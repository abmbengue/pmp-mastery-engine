/**
 * Duplicate detection architecture (Phase B — hooks only, no ML).
 */

import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import type { QuestionMasteryMetadata } from "./types";

export type DuplicateKind =
  | "exact"
  | "near"
  | "same-scenario-actors"
  | "same-reasoning-pattern"
  | "same-misconception"
  | "same-correct-pattern";

export type DuplicateCandidate = {
  externalKeyA: string;
  externalKeyB: string;
  kind: DuplicateKind;
  score: number;
  reason: string;
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSet(text: string): Set<string> {
  return new Set(normalize(text).split(" ").filter((t) => t.length > 3));
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter += 1;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

export function fingerprintQuestion(q: ExamBankQuestionSeed): {
  scenario: Set<string>;
  prompt: Set<string>;
  pattern: string;
} {
  return {
    scenario: tokenSet(q.scenarioEn),
    prompt: tokenSet(q.promptEn),
    pattern: `${q.scenarioType}:${q.learningObjective}:${q.processArea}`,
  };
}

export function detectDuplicatesAmongBank(
  bank: ExamBankQuestionSeed[],
  metadata: QuestionMasteryMetadata[],
  minNearScore = 0.72
): DuplicateCandidate[] {
  const metaByKey = new Map(metadata.map((m) => [m.externalKey, m]));
  const out: DuplicateCandidate[] = [];

  for (let i = 0; i < bank.length; i += 1) {
    for (let j = i + 1; j < bank.length; j += 1) {
      const a = bank[i];
      const b = bank[j];
      const fa = fingerprintQuestion(a);
      const fb = fingerprintQuestion(b);
      const ma = metaByKey.get(a.externalKey);
      const mb = metaByKey.get(b.externalKey);

      if (a.promptEn === b.promptEn && a.scenarioEn === b.scenarioEn) {
        out.push({
          externalKeyA: a.externalKey,
          externalKeyB: b.externalKey,
          kind: "exact",
          score: 1,
          reason: "Identical EN prompt and scenario",
        });
        continue;
      }

      const scenSim = jaccard(fa.scenario, fb.scenario);
      if (scenSim >= minNearScore) {
        out.push({
          externalKeyA: a.externalKey,
          externalKeyB: b.externalKey,
          kind: scenSim >= 0.9 ? "same-scenario-actors" : "near",
          score: scenSim,
          reason: `Scenario token similarity ${scenSim.toFixed(2)}`,
        });
      }

      if (fa.pattern === fb.pattern && fa.pattern.length > 5) {
        out.push({
          externalKeyA: a.externalKey,
          externalKeyB: b.externalKey,
          kind: "same-reasoning-pattern",
          score: 0.6,
          reason: `Shared pattern ${fa.pattern}`,
        });
      }

      if (
        ma &&
        mb &&
        ma.primaryConceptId === mb.primaryConceptId &&
        ma.misconceptionIds.some((id) => mb.misconceptionIds.includes(id))
      ) {
        out.push({
          externalKeyA: a.externalKey,
          externalKeyB: b.externalKey,
          kind: "same-misconception",
          score: 0.5,
          reason: `Shared misconception on ${ma.primaryConceptId}`,
        });
      }
    }
  }

  return out.sort((x, y) => y.score - x.score);
}
