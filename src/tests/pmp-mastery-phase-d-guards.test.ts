/**
 * Phase D — Iteration 1 GUARDS / FOUNDATION.
 * Locks protected-bank + batch contract + metadata + validator invariants.
 * Pure / read-only: no live Q201+, no Phase C feature work, no DB writes.
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import {
  PROTECTED_BANK_AGGREGATE,
  PROTECTED_BANK_SIZE,
  combineExamBanks,
  isExpansionBankKey,
  isProtectedBankKey,
} from "@/modules/mastery-engine/bank-batch-contract";
import {
  detectIncompleteProtectedBank,
  detectProtectedBankDeletions,
  detectProtectedQuestionMutation,
  validateProtectedBankImmutability,
} from "@/modules/mastery-engine/protected-bank-guard";
import { validateExamBankBatch } from "@/modules/mastery-engine/bank-batch-validator";
import {
  validateBatchMetadataContract,
  validateQuestionMetadataContract,
} from "@/modules/mastery-engine/question-metadata-contract";
import { buildExamBankMasteryMetadata } from "@/modules/mastery-engine/question-metadata";
import {
  ECO_TASKS,
  ECO_TASK_COUNT,
} from "@/modules/mastery-engine/eco-taxonomy";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";
import type { ExamBankQuestionSeed } from "../../prisma/seed/pmp-exam-bank-types";

function cloneQuestion(
  source: ExamBankQuestionSeed,
  externalKey: string,
  overrides: Partial<ExamBankQuestionSeed> = {}
): ExamBankQuestionSeed {
  return {
    ...structuredClone(source),
    externalKey,
    options: structuredClone(source.options),
    ...overrides,
  };
}

function makeSyntheticExpansion(externalKey: string): ExamBankQuestionSeed {
  return {
    externalKey,
    domain: "PROCESS",
    deliveryApproach: "HYBRID",
    processArea: "Integration management",
    examDifficulty: "MEDIUM",
    scenarioType: "NEXT_ACTION",
    learningObjective: "APPLY",
    skills: ["integrated-planning"],
    type: "SINGLE_CHOICE",
    scenarioEn: `Guards synthetic scenario ${externalKey} — unique actors and context`,
    scenarioFr: `Scénario synthétique guards ${externalKey}`,
    promptEn: `Best next action for guards expansion ${externalKey}?`,
    promptFr: `Meilleure action pour expansion guards ${externalKey}?`,
    explanationCorrectEn: "Analyze impact then recommend with stakeholders.",
    explanationCorrectFr: "Analyser l'impact puis recommander avec les parties prenantes.",
    options: [
      {
        labelEn: "Analyze impact then present options with recommendation",
        labelFr: "Analyser l'impact puis présenter des options",
        isCorrect: true,
      },
      {
        labelEn: "Escalate immediately without analysis",
        labelFr: "Escalader immédiatement sans analyse",
        isCorrect: false,
      },
      {
        labelEn: "Ignore stakeholder concerns",
        labelFr: "Ignorer les préoccupations",
        isCorrect: false,
      },
      {
        labelEn: "Change baseline without approval",
        labelFr: "Modifier la baseline sans approbation",
        isCorrect: false,
      },
    ],
    ecoTaskCode: "PR-01",
    conceptSlug: "integrated-planning",
  };
}

describe("Iteration 1 — Guards / protected bank", () => {
  it("200 protected questions present", () => {
    expect(PMP_EXAM_BANK_STEMS).toHaveLength(PROTECTED_BANK_SIZE);
    expect(PROTECTED_BANK_SIZE).toBe(200);
  });

  it("no protected question missing (Q001–Q200 keys)", () => {
    const keys = new Set(PMP_EXAM_BANK_STEMS.map((q) => q.externalKey));
    for (let i = 1; i <= 200; i += 1) {
      expect(keys.has(`pmp-exam-${String(i).padStart(3, "0")}`)).toBe(true);
    }
    expect(detectIncompleteProtectedBank(PMP_EXAM_BANK_STEMS)).toHaveLength(0);
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("fingerprint exact", () => {
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(PROTECTED_BANK_AGGREGATE).toBe(
      "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2"
    );
  });

  it("mutation stem rejected", () => {
    const original = PMP_EXAM_BANK_STEMS[0]!;
    const mutated = cloneQuestion(original, original.externalKey, {
      promptEn: "MUTATED STEM — must be rejected by guards",
    });
    expect(detectProtectedQuestionMutation(original, mutated)).toContain(
      "PROTECTED_STEM_CHANGED"
    );
    const report = validateProtectedBankImmutability(
      PMP_EXAM_BANK_STEMS,
      [mutated],
      PROTECTED_BANK_AGGREGATE
    );
    expect(report.some((d) => d.code === "PROTECTED_STEM_CHANGED")).toBe(true);
  });

  it("mutation option rejected", () => {
    const original = PMP_EXAM_BANK_STEMS[1]!;
    const mutated = cloneQuestion(original, original.externalKey, {
      options: original.options.map((o, i) =>
        i === 1 ? { ...o, labelEn: "MUTATED OPTION LABEL" } : o
      ),
    });
    expect(detectProtectedQuestionMutation(original, mutated)).toContain(
      "PROTECTED_OPTION_CHANGED"
    );
  });

  it("mutation correct answer rejected", () => {
    const original = PMP_EXAM_BANK_STEMS[2]!;
    const mutated = cloneQuestion(original, original.externalKey, {
      options: original.options.map((o) => ({ ...o, isCorrect: !o.isCorrect })),
    });
    expect(detectProtectedQuestionMutation(original, mutated)).toContain(
      "PROTECTED_CORRECT_ANSWER_CHANGED"
    );
  });

  it("mutation scoring rejected", () => {
    const original = PMP_EXAM_BANK_STEMS[3]!;
    const mutated = cloneQuestion(original, original.externalKey, {
      examDifficulty:
        original.examDifficulty === "EASY" ? "HARD" : "EASY",
    });
    expect(detectProtectedQuestionMutation(original, mutated)).toContain(
      "PROTECTED_SCORING_CHANGED"
    );
    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [mutated],
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(report.status).toBe("ERROR");
    expect(report.protectedBankIntact).toBe(false);
    expect(
      report.diagnostics.some((d) => d.code === "PROTECTED_SCORING_CHANGED")
    ).toBe(true);
  });

  it("multiple mutations on same protected question all reported", () => {
    const original = PMP_EXAM_BANK_STEMS[4]!;
    const mutated = cloneQuestion(original, original.externalKey, {
      promptEn: "MULTI MUTATION STEM",
      examDifficulty:
        original.examDifficulty === "EASY" ? "HARD" : "EASY",
      options: original.options.map((o, i) =>
        i === 0
          ? { ...o, labelEn: "MULTI MUTATION OPTION", isCorrect: !o.isCorrect }
          : { ...o, isCorrect: false }
      ),
    });
    const kinds = detectProtectedQuestionMutation(original, mutated);
    expect(kinds).toEqual(
      expect.arrayContaining([
        "PROTECTED_STEM_CHANGED",
        "PROTECTED_OPTION_CHANGED",
        "PROTECTED_CORRECT_ANSWER_CHANGED",
        "PROTECTED_SCORING_CHANGED",
      ])
    );
  });

  it("Q201+ absent from live protected bank", () => {
    const nums = PMP_EXAM_BANK_STEMS.map((q) =>
      Number(q.externalKey.replace("pmp-exam-", ""))
    );
    expect(Math.max(...nums)).toBe(200);
    expect(PMP_EXAM_BANK_STEMS.every((q) => isProtectedBankKey(q.externalKey))).toBe(
      true
    );
    expect(
      PMP_EXAM_BANK_STEMS.filter((q) => isExpansionBankKey(q.externalKey))
    ).toHaveLength(0);
  });
});

describe("Iteration 1 — Guards / ECO", () => {
  it("ECO = 26 with People 8 / Process 10 / Business 8", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_TASKS).toHaveLength(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);
    expect(ECO_TASKS.filter((t) => t.domainId === "PEOPLE")).toHaveLength(8);
    expect(ECO_TASKS.filter((t) => t.domainId === "PROCESS")).toHaveLength(10);
    expect(ECO_TASKS.filter((t) => t.domainId === "BUSINESS")).toHaveLength(8);
  });

  it("T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).toBe("PEOPLE-T04");
    expect(t07.task.id).toBe("PEOPLE-T07");
    expect(t08.task.id).toBe("PEOPLE-T08");
    expect(t04.task.titleEn).not.toBe(t07.task.titleEn);
    expect(t07.task.titleEn).not.toBe(t08.task.titleEn);
    expect(t04.task.titleEn).not.toBe(t08.task.titleEn);
  });
});

describe("Iteration 1 — Guards / batch contract + validator", () => {
  it("empty batch returns WARNING BATCH_EMPTY", () => {
    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [],
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(report.status).toBe("WARNING");
    expect(report.diagnostics.some((d) => d.code === "BATCH_EMPTY")).toBe(true);
    expect(report.protectedBankIntact).toBe(true);
  });

  it("duplicate ID in candidate batch rejected", () => {
    const a = makeSyntheticExpansion("pmp-exam-901");
    const b = makeSyntheticExpansion("pmp-exam-901");
    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [a, b],
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(report.status).toBe("ERROR");
    expect(
      report.diagnostics.some((d) => d.code === "DUPLICATE_EXTERNAL_KEY")
    ).toBe(true);
  });

  it("invalid metadata rejected", () => {
    const q = makeSyntheticExpansion("pmp-exam-902");
    const meta = buildExamBankMasteryMetadata([q])[0]!;
    const diagnostics = validateQuestionMetadataContract(q, {
      ...meta,
      ecoTaskId: "PEOPLE-T99" as typeof meta.ecoTaskId,
      primarySkillId: "not-a-real-skill",
      cognitiveLevel: undefined as unknown as typeof meta.cognitiveLevel,
    });
    expect(diagnostics.some((d) => d.code === "UNKNOWN_ECO_TASK")).toBe(true);
    expect(diagnostics.some((d) => d.code === "INVALID_SKILL")).toBe(true);
    expect(diagnostics.some((d) => d.code === "MISSING_COGNITIVE_LEVEL")).toBe(
      true
    );
  });

  it("valid synthetic expansion metadata passes contract", () => {
    const batch = [makeSyntheticExpansion("pmp-exam-903")];
    const diagnostics = validateBatchMetadataContract(batch);
    expect(diagnostics.filter((d) => d.severity === "ERROR")).toHaveLength(0);
  });

  it("validation is deterministic (same input → same report)", () => {
    const batch = [makeSyntheticExpansion("pmp-exam-904")];
    const a = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: batch,
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    const b = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: batch,
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(a).toEqual(b);
  });

  it("combined bank order is deterministic by externalKey number", () => {
    const batch = [
      makeSyntheticExpansion("pmp-exam-910"),
      makeSyntheticExpansion("pmp-exam-905"),
    ];
    const combined = combineExamBanks(PMP_EXAM_BANK_STEMS, batch);
    const keys = combined.map((q) => q.externalKey);
    const expansionKeys = keys.filter((k) => Number(k.replace("pmp-exam-", "")) > 200);
    expect(expansionKeys).toEqual(["pmp-exam-905", "pmp-exam-910"]);
    expect(keys.slice(0, 200)).toEqual(
      Array.from({ length: 200 }, (_, i) => `pmp-exam-${String(i + 1).padStart(3, "0")}`)
    );
  });

  it("missing protected question in combined bank detected", () => {
    const incomplete = PMP_EXAM_BANK_STEMS.slice(1);
    const deletions = detectProtectedBankDeletions(
      PMP_EXAM_BANK_STEMS,
      incomplete
    );
    expect(deletions.some((d) => d.code === "PROTECTED_QUESTION_REMOVED")).toBe(
      true
    );
    expect(
      detectIncompleteProtectedBank(incomplete).some(
        (d) => d.code === "PROTECTED_QUESTION_MISSING"
      )
    ).toBe(true);
  });

  it("validateExamBankBatch performs no DB writes", async () => {
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");
    const createSpy = vi.spyOn(prisma.quizAttempt, "create");
    const questionCreateSpy = vi.spyOn(prisma.question, "create");

    validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [makeSyntheticExpansion("pmp-exam-906")],
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });

    expect(upsertSpy).not.toHaveBeenCalled();
    expect(createSpy).not.toHaveBeenCalled();
    expect(questionCreateSpy).not.toHaveBeenCalled();

    upsertSpy.mockRestore();
    createSpy.mockRestore();
    questionCreateSpy.mockRestore();

    const validatorSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/bank-batch-validator.ts"),
      "utf8"
    );
    expect(validatorSource).not.toContain("updateConceptMastery");
    expect(validatorSource).not.toContain("@/data/prisma-client");
    expect(validatorSource).not.toContain("prisma.");
  });
});

describe("Iteration 1 — Guards / freeze invariants", () => {
  it("no new Prisma migrations", () => {
    const dirs = readdirSync(join(process.cwd(), "prisma/migrations"), {
      withFileTypes: true,
    })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
    expect(dirs).toEqual([
      "20260824064545_init",
      "20260824073721_add_lesson_progress_metadata",
      "20260824080800_add_user_password_hash",
      "20260824090402_phase4_content_difficulty_lesson_skills",
      "20260824153000_phase7_pmp_exam_simulator",
      "20260824160000_phase8_learning_analytics",
      "20260824170000_phase10_next_review_at",
      "20260824193000_p1_password_reset",
      "20260826211500_phase_b_eco_proxy_metadata",
      "20260826214500_phase_b_mastery_metadata",
    ]);
  });

  it("fingerprint stable after guards validation run", () => {
    validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [makeSyntheticExpansion("pmp-exam-907")],
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
  });
});
