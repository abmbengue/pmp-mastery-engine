import { describe, expect, it } from "vitest";
import {
  ECO_TASKS,
  ECO_TASK_COUNT,
  legacyToStableEcoId,
} from "@/modules/mastery-engine/eco-taxonomy";
import {
  PMBOK8_PERFORMANCE_DOMAINS,
  CROSS_CUTTING_QUALITY,
} from "@/modules/mastery-engine/pmbok8-domains";
import {
  CONCEPT_COUNT,
  conceptsForEcoTask,
} from "@/modules/mastery-engine/concept-graph";
import { MASTERY_SKILL_COUNT } from "@/modules/mastery-engine/mastery-skills";
import {
  MISCONCEPTIONS,
  MISCONCEPTION_COUNT,
} from "@/modules/mastery-engine/misconceptions";
import {
  buildExamBankMasteryMetadata,
  buildQuestionMasteryMetadata,
} from "@/modules/mastery-engine/question-metadata";
import { buildCoverageMatrix } from "@/modules/mastery-engine/coverage-matrix";
import { detectDuplicatesAmongBank } from "@/modules/mastery-engine/duplicate-detection";
import { buildKnowledgePack } from "@/modules/mastery-engine/knowledge-pack";
import { deriveMasteryState } from "@/modules/mastery-engine/mastery-states";
import { extendErrorClassification } from "@/modules/mastery-engine/error-model-ext";
import {
  PMP_EXAM_BANK,
  PMP_EXAM_BANK_STEMS,
} from "../../prisma/seed/pmp-exam-bank-data";
import { PMP_QUESTION_MASTERY_METADATA } from "../../prisma/seed/pmp-question-mastery-metadata";

describe("PMP Mastery Engine Phase B — ECO taxonomy", () => {
  it("defines 26 stable ECO task IDs (PEOPLE/PROCESS/BUSINESS)", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_TASKS.filter((t) => t.domainId === "PEOPLE")).toHaveLength(8);
    expect(ECO_TASKS.filter((t) => t.domainId === "PROCESS")).toHaveLength(10);
    expect(ECO_TASKS.filter((t) => t.domainId === "BUSINESS")).toHaveLength(8);
    expect(ECO_TASKS[0].id).toMatch(/^PEOPLE-T\d{2}$/);
  });

  it("maps legacy PE-xx codes to stable IDs", () => {
    expect(legacyToStableEcoId("PE-04")).toBe("PEOPLE-T04");
    expect(legacyToStableEcoId("PR-06")).toBe("PROCESS-T06");
    expect(legacyToStableEcoId("BE-05")).toBe("BUSINESS-T05");
  });
});

describe("PMP Mastery Engine Phase B — PMBOK 8 PDs", () => {
  it("has 7 performance domains + cross-cutting quality", () => {
    expect(PMBOK8_PERFORMANCE_DOMAINS).toHaveLength(7);
    expect(PMBOK8_PERFORMANCE_DOMAINS.map((d) => d.id)).toEqual([
      "PD-GOVERNANCE",
      "PD-SCOPE",
      "PD-SCHEDULE",
      "PD-FINANCE",
      "PD-STAKEHOLDERS",
      "PD-RESOURCES",
      "PD-RISK",
    ]);
    expect(CROSS_CUTTING_QUALITY.id).toBe("KN-QUALITY");
  });
});

describe("PMP Mastery Engine Phase B — concept & skill graph", () => {
  it("has concepts for every ECO task", () => {
    for (const task of ECO_TASKS) {
      expect(conceptsForEcoTask(task.id).length, task.id).toBeGreaterThan(0);
    }
  });

  it("includes required confusion pairs", () => {
    const ids = new Set(MISCONCEPTIONS.map((m) => m.id));
    expect(ids.has("mc-communication-engagement")).toBe(true);
    expect(ids.has("mc-conflict-issue")).toBe(true);
    expect(ids.has("mc-risk-issue")).toBe(true);
    expect(MISCONCEPTION_COUNT).toBeGreaterThanOrEqual(20);
    expect(CONCEPT_COUNT).toBeGreaterThan(30);
    expect(MASTERY_SKILL_COUNT).toBeGreaterThan(40);
  });
});

describe("PMP Mastery Engine Phase B — 200 question metadata", () => {
  it("maps all 200 without altering stems", () => {
    expect(PMP_QUESTION_MASTERY_METADATA).toHaveLength(200);
    for (let i = 0; i < PMP_EXAM_BANK.length; i += 1) {
      expect(PMP_EXAM_BANK[i].options).toEqual(PMP_EXAM_BANK_STEMS[i].options);
      expect(PMP_EXAM_BANK[i].promptEn).toBe(PMP_EXAM_BANK_STEMS[i].promptEn);
    }
  });

  it("assigns ecoTaskId and primaryConcept to every item", () => {
    for (const m of PMP_QUESTION_MASTERY_METADATA) {
      expect(m.ecoTaskId).toMatch(/^(PEOPLE|PROCESS|BUSINESS)-T\d{2}$/);
      expect(m.primaryConceptId.length).toBeGreaterThan(2);
      expect(["VERIFIED", "PARTIAL", "UNVERIFIED"]).toContain(m.mappingStatus);
    }
  });

  it("reports coverage gaps for priority topics", () => {
    const cov = buildCoverageMatrix(PMP_EXAM_BANK);
    expect(cov.gaps.ecoTaskIds).toEqual(
      expect.arrayContaining(["PROCESS-T06", "PROCESS-T09", "PROCESS-T10"])
    );
  });

  it("does not claim all mappings VERIFIED", () => {
    const unverified = PMP_QUESTION_MASTERY_METADATA.filter(
      (m) => m.mappingStatus !== "VERIFIED"
    ).length;
    expect(unverified).toBeGreaterThan(0);
  });
});

describe("PMP Mastery Engine Phase B — mastery & error models", () => {
  it("requires evidence beyond 3 correct for MASTERED", () => {
    expect(
      deriveMasteryState({
        attempts: 3,
        weightedCorrectRate: 100,
        distinctQuestionCount: 3,
        maxCognitiveAchieved: "RECOGNITION",
        daysSinceFirstExposure: 0,
        recentIncorrectStreak: 0,
        confidenceCalibrated: false,
      })
    ).not.toBe("MASTERED");
  });

  it("extends legacy error categories without breaking taxonomy", () => {
    const ext = extendErrorClassification({
      legacyCategory: "STAKEHOLDER_ERROR",
      primaryConceptId: "stakeholder-engagement",
      misconceptionId: "mc-communication-engagement",
    });
    expect(ext.extendedKind).toBe("stakeholder-confusion");
    expect(ext.legacyCategory).toBe("STAKEHOLDER_ERROR");
  });

  it("builds knowledge pack with expected counts", () => {
    const pack = buildKnowledgePack();
    expect(pack.counts.ecoTasks).toBe(26);
    expect(pack.counts.pmbokDomains).toBe(7);
    expect(pack.counts.concepts).toBe(CONCEPT_COUNT);
    expect(pack.counts.skills).toBe(MASTERY_SKILL_COUNT);
    expect(pack.counts.misconceptions).toBe(MISCONCEPTION_COUNT);
  });

  it("runs duplicate detection without crashing", () => {
    const meta = buildExamBankMasteryMetadata(PMP_EXAM_BANK);
    const dups = detectDuplicatesAmongBank(PMP_EXAM_BANK, meta);
    expect(Array.isArray(dups)).toBe(true);
  });

  it("builds per-question metadata consistently with batch", () => {
    const one = buildQuestionMasteryMetadata(PMP_EXAM_BANK[0]);
    const batch = PMP_QUESTION_MASTERY_METADATA[0];
    expect(one.externalKey).toBe(batch.externalKey);
    expect(one.ecoTaskId).toBe(batch.ecoTaskId);
  });
});
