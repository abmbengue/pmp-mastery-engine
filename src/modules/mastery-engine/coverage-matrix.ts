/**
 * ECO × Concept × Skill × Question coverage matrix.
 */

import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import { ECO_TASKS } from "./eco-taxonomy";
import { CONCEPTS } from "./concept-graph";
import { MASTERY_SKILLS } from "./mastery-skills";
import { buildExamBankMasteryMetadata } from "./question-metadata";
import type { CoverageStatus, EcoTaskStableId } from "./types";

export type CoverageCell = {
  ecoTaskId: EcoTaskStableId;
  conceptId: string;
  skillId: string;
  questionCount: number;
  status: CoverageStatus;
};

export type CoverageMatrixReport = {
  cells: CoverageCell[];
  byEcoTask: Record<string, { questions: number; status: CoverageStatus }>;
  byConcept: Record<string, { questions: number; status: CoverageStatus }>;
  bySkill: Record<string, { questions: number; status: CoverageStatus }>;
  gaps: {
    ecoTaskIds: EcoTaskStableId[];
    conceptIds: string[];
    skillIds: string[];
  };
};

function statusFromCount(n: number): CoverageStatus {
  if (n === 0) return "RED";
  if (n < 3) return "YELLOW";
  return "GREEN";
}

export function buildCoverageMatrix(bank: ExamBankQuestionSeed[]): CoverageMatrixReport {
  const metadata = buildExamBankMasteryMetadata(bank);
  const ecoCounts = new Map<string, number>();
  const conceptCounts = new Map<string, number>();
  const skillCounts = new Map<string, number>();

  for (const m of metadata) {
    ecoCounts.set(m.ecoTaskId, (ecoCounts.get(m.ecoTaskId) ?? 0) + 1);
    conceptCounts.set(
      m.primaryConceptId,
      (conceptCounts.get(m.primaryConceptId) ?? 0) + 1
    );
    if (m.primarySkillId) {
      skillCounts.set(
        m.primarySkillId,
        (skillCounts.get(m.primarySkillId) ?? 0) + 1
      );
    }
    for (const sid of m.secondarySkillIds) {
      skillCounts.set(sid, (skillCounts.get(sid) ?? 0) + 1);
    }
  }

  const byEcoTask: CoverageMatrixReport["byEcoTask"] = {};
  for (const t of ECO_TASKS) {
    const n = ecoCounts.get(t.id) ?? 0;
    byEcoTask[t.id] = { questions: n, status: statusFromCount(n) };
  }

  const byConcept: CoverageMatrixReport["byConcept"] = {};
  for (const c of CONCEPTS) {
    const n = conceptCounts.get(c.id) ?? 0;
    byConcept[c.id] = { questions: n, status: statusFromCount(n) };
  }

  const bySkill: CoverageMatrixReport["bySkill"] = {};
  for (const s of MASTERY_SKILLS) {
    const n = skillCounts.get(s.id) ?? 0;
    bySkill[s.id] = { questions: n, status: statusFromCount(n) };
  }

  const cells: CoverageCell[] = [];
  for (const t of ECO_TASKS) {
    for (const c of CONCEPTS.filter((x) => x.ecoTaskIds.includes(t.id))) {
      for (const sk of MASTERY_SKILLS.filter((x) => x.conceptId === c.id)) {
        const n = skillCounts.get(sk.id) ?? 0;
        cells.push({
          ecoTaskId: t.id,
          conceptId: c.id,
          skillId: sk.id,
          questionCount: n,
          status: statusFromCount(n),
        });
      }
    }
  }

  return {
    cells,
    byEcoTask,
    byConcept,
    bySkill,
    gaps: {
      ecoTaskIds: ECO_TASKS.filter((t) => (ecoCounts.get(t.id) ?? 0) === 0).map(
        (t) => t.id
      ),
      conceptIds: CONCEPTS.filter((c) => (conceptCounts.get(c.id) ?? 0) === 0).map(
        (c) => c.id
      ),
      skillIds: MASTERY_SKILLS.filter((s) => (skillCounts.get(s.id) ?? 0) === 0).map(
        (s) => s.id
      ),
    },
  };
}

export const PRIORITY_GAP_TOPICS = [
  "PROCESS-T06 project finance / EVM",
  "PROCESS-T05 procurement",
  "PROCESS-T01 integration",
  "PROCESS-T04 resources",
  "PEOPLE-T04 vs PEOPLE-T08 engagement vs communication",
  "PEOPLE-T02 vs BUSINESS-T04 conflict vs issue",
] as const;

export type CoverageComparisonReport = {
  current: CoverageMatrixReport;
  candidate: CoverageMatrixReport;
  combined: CoverageMatrixReport;
  deltaByEcoTask: Record<string, number>;
  deltaBySkill: Record<string, number>;
  improvedEcoTaskIds: EcoTaskStableId[];
  improvedSkillIds: string[];
  remainingGapEcoTaskIds: EcoTaskStableId[];
  remainingGapSkillIds: string[];
};

/**
 * Compare coverage across existing bank, candidate batch, and combined bank.
 * Taxonomy (26 ECO tasks) is unchanged — only counts differ.
 */
export function buildCoverageComparison(
  existingBank: ExamBankQuestionSeed[],
  candidateBatch: ExamBankQuestionSeed[]
): CoverageComparisonReport {
  const current = buildCoverageMatrix(existingBank);
  const candidate = buildCoverageMatrix(candidateBatch);
  const combined = buildCoverageMatrix([...existingBank, ...candidateBatch]);

  const deltaByEcoTask: Record<string, number> = {};
  const improvedEcoTaskIds: EcoTaskStableId[] = [];
  for (const task of ECO_TASKS) {
    const before = current.byEcoTask[task.id]?.questions ?? 0;
    const after = combined.byEcoTask[task.id]?.questions ?? 0;
    const delta = after - before;
    deltaByEcoTask[task.id] = delta;
    if (delta > 0 && before === 0) {
      improvedEcoTaskIds.push(task.id);
    }
  }

  const deltaBySkill: Record<string, number> = {};
  const improvedSkillIds: string[] = [];
  for (const skill of MASTERY_SKILLS) {
    const before = current.bySkill[skill.id]?.questions ?? 0;
    const after = combined.bySkill[skill.id]?.questions ?? 0;
    const delta = after - before;
    deltaBySkill[skill.id] = delta;
    if (delta > 0 && before === 0) {
      improvedSkillIds.push(skill.id);
    }
  }

  return {
    current,
    candidate,
    combined,
    deltaByEcoTask,
    deltaBySkill,
    improvedEcoTaskIds,
    improvedSkillIds,
    remainingGapEcoTaskIds: combined.gaps.ecoTaskIds,
    remainingGapSkillIds: combined.gaps.skillIds,
  };
}
