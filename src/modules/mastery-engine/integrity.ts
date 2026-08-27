/**
 * Phase B.2 — mastery integrity & masterability validators.
 * Read-only checks + protected bank fingerprint. No adaptive selection.
 */

import { createHash } from "crypto";
import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import { ECO_TASKS } from "./eco-taxonomy";
import { CONCEPTS, getConcept } from "./concept-graph";
import { MASTERY_SKILLS, getMasterySkill } from "./mastery-skills";
import { MISCONCEPTIONS } from "./misconceptions";
import { buildExamBankMasteryMetadata } from "./question-metadata";
import type { CoverageStatus, EcoTaskStableId, MasteryState } from "./types";

export type IntegrityIssue = {
  severity: "P0" | "P1" | "P2" | "P3";
  code: string;
  message: string;
  entityId?: string;
};

export type Masterability = "YES" | "PARTIAL" | "NO";

export function fingerprintProtectedQuestion(q: ExamBankQuestionSeed): string {
  const payload = JSON.stringify({
    externalKey: q.externalKey,
    promptEn: q.promptEn,
    promptFr: q.promptFr,
    scenarioEn: q.scenarioEn,
    scenarioFr: q.scenarioFr,
    explanationCorrectEn: q.explanationCorrectEn,
    explanationCorrectFr: q.explanationCorrectFr,
    options: q.options.map((o) => ({
      labelEn: o.labelEn,
      labelFr: o.labelFr,
      isCorrect: o.isCorrect,
    })),
    examDifficulty: q.examDifficulty,
    type: q.type,
  });
  return createHash("sha256").update(payload).digest("hex");
}

export function buildProtectedBankFingerprint(
  stems: ExamBankQuestionSeed[]
): { count: number; keys: string[]; fingerprints: Record<string, string>; aggregate: string } {
  const fingerprints: Record<string, string> = {};
  const keys: string[] = [];
  for (const q of stems) {
    keys.push(q.externalKey);
    fingerprints[q.externalKey] = fingerprintProtectedQuestion(q);
  }
  const aggregate = createHash("sha256")
    .update(keys.map((k) => `${k}:${fingerprints[k]}`).join("|"))
    .digest("hex");
  return { count: stems.length, keys, fingerprints, aggregate };
}

export function assertProtectedBankIntact(
  stems: ExamBankQuestionSeed[],
  expectedAggregate?: string
): IntegrityIssue[] {
  const issues: IntegrityIssue[] = [];
  if (stems.length !== 200) {
    issues.push({
      severity: "P0",
      code: "BANK_COUNT",
      message: `Expected 200 protected stems, found ${stems.length}`,
    });
  }
  for (let i = 0; i < stems.length; i += 1) {
    const expected = `pmp-exam-${String(i + 1).padStart(3, "0")}`;
    if (stems[i].externalKey !== expected) {
      issues.push({
        severity: "P0",
        code: "BANK_KEY_ORDER",
        message: `Index ${i} expected ${expected}, got ${stems[i].externalKey}`,
        entityId: stems[i].externalKey,
      });
    }
  }
  if (expectedAggregate) {
    const fp = buildProtectedBankFingerprint(stems);
    if (fp.aggregate !== expectedAggregate) {
      issues.push({
        severity: "P0",
        code: "BANK_HASH_MISMATCH",
        message: "Protected bank aggregate fingerprint changed",
      });
    }
  }
  return issues;
}

export function auditGraphIntegrity(): IntegrityIssue[] {
  const issues: IntegrityIssue[] = [];
  for (const c of CONCEPTS) {
    for (const sid of c.skillIds) {
      if (!getMasterySkill(sid)) {
        issues.push({
          severity: "P1",
          code: "CONCEPT_SKILL_MISSING",
          message: `Concept ${c.id} references missing skill ${sid}`,
          entityId: c.id,
        });
      }
    }
    // Inverse integrity: declared parent must list this concept as a sub-concept.
    if (c.parentConceptId) {
      const parent = getConcept(c.parentConceptId);
      if (!parent) {
        issues.push({
          severity: "P1",
          code: "PARENT_MISSING",
          message: `Concept ${c.id} parent ${c.parentConceptId} missing`,
          entityId: c.id,
        });
      } else if (!parent.subConceptIds.includes(c.id)) {
        issues.push({
          severity: "P2",
          code: "PARENT_OMITS_CHILD",
          message: `Parent ${c.parentConceptId} omits sub-concept ${c.id}`,
          entityId: c.id,
        });
      }
    }
    // Cross-listed confusion pairs in subConceptIds (different parent) are allowed as related pedagogy.
  }
  for (const s of MASTERY_SKILLS) {
    if (!getConcept(s.conceptId)) {
      issues.push({
        severity: "P0",
        code: "SKILL_ORPHAN_CONCEPT",
        message: `Skill ${s.id} points to missing concept ${s.conceptId}`,
        entityId: s.id,
      });
    }
  }
  for (const m of MISCONCEPTIONS) {
    if (!getConcept(m.conceptAId) || !getConcept(m.conceptBId)) {
      issues.push({
        severity: "P1",
        code: "MISCONCEPTION_CONCEPT_MISSING",
        message: `Misconception ${m.id} references missing concept`,
        entityId: m.id,
      });
    }
  }
  return issues;
}

export function masterabilityForEcoTask(
  taskId: EcoTaskStableId,
  bank: ExamBankQuestionSeed[]
): Masterability {
  const concepts = CONCEPTS.filter((c) => c.ecoTaskIds.includes(taskId));
  const skills = MASTERY_SKILLS.filter((s) =>
    concepts.some((c) => c.id === s.conceptId)
  );
  const meta = buildExamBankMasteryMetadata(bank);
  const primary = meta.filter((m) => m.ecoTaskId === taskId).length;
  const secondary = meta.filter((m) =>
    m.ecoTaskIdsSecondary.includes(taskId)
  ).length;
  if (concepts.length === 0 || skills.length === 0) return "NO";
  if (primary >= 3) return "YES";
  if (primary >= 1 || secondary >= 3) return "PARTIAL";
  return "NO";
}

export function masterabilityForConcept(
  conceptId: string,
  bank: ExamBankQuestionSeed[]
): Masterability {
  const concept = getConcept(conceptId);
  if (!concept) return "NO";
  const ownedSkills = MASTERY_SKILLS.filter((s) => s.conceptId === conceptId);
  const meta = buildExamBankMasteryMetadata(bank);
  const evidence = meta.filter(
    (m) =>
      m.primaryConceptId === conceptId ||
      m.secondaryConceptIds.includes(conceptId)
  ).length;
  if (ownedSkills.length === 0 && concept.skillIds.length === 0) return "NO";
  if (ownedSkills.length === 0) return "PARTIAL"; // borrowed skills only
  if (evidence >= 3) return "YES";
  if (evidence >= 1) return "PARTIAL";
  return "NO";
}

export function masterabilityForSkill(
  skillId: string,
  bank: ExamBankQuestionSeed[]
): Masterability {
  const skill = getMasterySkill(skillId);
  if (!skill) return "NO";
  const meta = buildExamBankMasteryMetadata(bank);
  const evidence = meta.filter(
    (m) =>
      m.primarySkillId === skillId || m.secondarySkillIds.includes(skillId)
  ).length;
  if (evidence >= 3) return "YES";
  if (evidence >= 1) return "PARTIAL";
  return "NO";
}

export function buildMasterabilityReport(bank: ExamBankQuestionSeed[]): {
  ecoTasks: { yes: number; partial: number; no: number };
  concepts: { yes: number; partial: number; no: number };
  skills: { yes: number; partial: number; no: number };
  ecoByTask: Record<string, Masterability>;
} {
  const ecoByTask: Record<string, Masterability> = {};
  let ty = 0,
    tp = 0,
    tn = 0;
  for (const t of ECO_TASKS) {
    const m = masterabilityForEcoTask(t.id, bank);
    ecoByTask[t.id] = m;
    if (m === "YES") ty += 1;
    else if (m === "PARTIAL") tp += 1;
    else tn += 1;
  }
  let cy = 0,
    cp = 0,
    cn = 0;
  for (const c of CONCEPTS) {
    const m = masterabilityForConcept(c.id, bank);
    if (m === "YES") cy += 1;
    else if (m === "PARTIAL") cp += 1;
    else cn += 1;
  }
  let sy = 0,
    sp = 0,
    sn = 0;
  for (const s of MASTERY_SKILLS) {
    const m = masterabilityForSkill(s.id, bank);
    if (m === "YES") sy += 1;
    else if (m === "PARTIAL") sp += 1;
    else sn += 1;
  }
  return {
    ecoTasks: { yes: ty, partial: tp, no: tn },
    concepts: { yes: cy, partial: cp, no: cn },
    skills: { yes: sy, partial: sp, no: sn },
    ecoByTask,
  };
}

export function coverageStatusFromCount(n: number): CoverageStatus {
  if (n === 0) return "RED";
  if (n < 3) return "YELLOW";
  return "GREEN";
}

/** Architectural readiness score (PLA internal — not PMI). */
export function computeArchitecturalReadinessScore(input: {
  taxonomyIntegrity: number;
  conceptIntegrity: number;
  skillObservability: number;
  diagnosticQuality: number;
  evidenceSufficiency: number;
  retentionSupport: number;
  traceability: number;
}): { score: number; dimensions: Record<string, number> } {
  const dimensions = {
    taxonomyIntegrity: input.taxonomyIntegrity,
    conceptIntegrity: input.conceptIntegrity,
    skillObservability: input.skillObservability,
    diagnosticQuality: input.diagnosticQuality,
    evidenceSufficiency: input.evidenceSufficiency,
    retentionSupport: input.retentionSupport,
    traceability: input.traceability,
  };
  const values = Object.values(dimensions);
  const score = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  return { score, dimensions };
}

export function isMasteredReachableInTheory(state: MasteryState): boolean {
  return state === "MASTERED";
}
