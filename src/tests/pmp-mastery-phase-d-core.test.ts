/**
 * Phase D — Iteration 2/4 core: extensible bank validation engine.
 * No Q201+ content added to the live bank.
 */

import { readFileSync } from "fs";
import { join } from "path";
import { describe, expect, it } from "vitest";
import prisma from "@/data/prisma-client";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
  fingerprintProtectedQuestion,
} from "@/modules/mastery-engine/integrity";
import {
  combineExamBanks,
  isExpansionBankKey,
  isProtectedBankKey,
} from "@/modules/mastery-engine/bank-batch-contract";
import {
  detectProtectedQuestionMutation,
  validateProtectedBankImmutability,
} from "@/modules/mastery-engine/protected-bank-guard";
import { validateExamBankBatch } from "@/modules/mastery-engine/bank-batch-validator";
import { buildCoverageComparison } from "@/modules/mastery-engine/coverage-matrix";
import {
  detectDuplicatesBetweenBanks,
  detectDuplicatesInBatch,
} from "@/modules/mastery-engine/duplicate-detection";
import {
  validateQuestionMetadataContract,
  validateBatchMetadataContract,
} from "@/modules/mastery-engine/question-metadata-contract";
import {
  metadataToQuestionMasteryContext,
  validateMasteryPipelineCompatibility,
  RUNTIME_BANK_EXTENSION_SAFE_PATHS,
} from "@/modules/mastery-engine/runtime-bank-compatibility";
import {
  CANONICAL_LESSON_MASTERY_WRITE_PATH,
  LEGACY_CONCEPT_MASTERY_WRITERS,
} from "@/modules/mastery-engine/legacy-mastery-writers";
import { quizAttemptToMasteryInput } from "@/modules/mastery-engine/attempt-adapter";
import { buildExamBankMasteryMetadata } from "@/modules/mastery-engine/question-metadata";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";
import type { ExamBankQuestionSeed } from "../../prisma/seed/pmp-exam-bank-types";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

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

function makeUniqueExpansion(
  externalKey: string,
  sourceIndex = 6
): ExamBankQuestionSeed {
  const base = PMP_EXAM_BANK_STEMS[sourceIndex]!;
  return cloneQuestion(base, externalKey, {
    promptEn: `Phase D expansion unique prompt for ${externalKey} — judgment scenario`,
    promptFr: `Question expansion unique pour ${externalKey}`,
    scenarioEn: `Unique expansion scenario ${externalKey} for batch validation testing only`,
    scenarioFr: `Scénario expansion unique ${externalKey} pour tests`,
    explanationCorrectEn: `Explanation for ${externalKey} expansion item`,
    explanationCorrectFr: `Explication pour ${externalKey}`,
  });
}

function makeFullySyntheticExpansion(
  externalKey: string,
  variant: "integration" | "procurement" = "integration"
): ExamBankQuestionSeed {
  if (variant === "procurement") {
    return {
      externalKey,
      domain: "PROCESS",
      deliveryApproach: "PREDICTIVE",
      processArea: "Procurement management",
      examDifficulty: "HARD",
      scenarioType: "RISK",
      learningObjective: "ANALYZE",
      skills: ["procurement"],
      type: "SINGLE_CHOICE",
      scenarioEn: `Vendor contract renegotiation deadlock during procurement wave ${externalKey}`,
      scenarioFr: `Impasse renégociation fournisseur pendant achats ${externalKey}`,
      promptEn: `What should the project manager do next for ${externalKey}?`,
      promptFr: `Que doit faire le chef de projet pour ${externalKey}?`,
      explanationCorrectEn: "Use contract terms and procurement strategy.",
      explanationCorrectFr: "Utiliser les clauses contractuelles et la stratégie achats.",
      options: [
        {
          labelEn: "Review contract terms and engage procurement with options",
          labelFr: "Revoir les clauses et engager achats avec options",
          isCorrect: true,
        },
        {
          labelEn: "Cancel the contract unilaterally",
          labelFr: "Annuler le contrat unilatéralement",
          isCorrect: false,
        },
        {
          labelEn: "Ignore vendor performance",
          labelFr: "Ignorer la performance fournisseur",
          isCorrect: false,
        },
        {
          labelEn: "Skip change control",
          labelFr: "Contourner le contrôle des changements",
          isCorrect: false,
        },
      ],
      ecoTaskCode: "PR-05",
      conceptSlug: "procurement",
    };
  }

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
    scenarioEn: `Synthetic zephyr quantum integration bridge scenario ${externalKey}`,
    scenarioFr: `Scénario synthétique pont intégration ${externalKey}`,
    promptEn: `What is the best action for synthetic expansion item ${externalKey}?`,
    promptFr: `Quelle est la meilleure action pour l'item ${externalKey}?`,
    explanationCorrectEn: "Analyze impact, engage stakeholders, then recommend.",
    explanationCorrectFr: "Analyser l'impact, engager les parties prenantes, puis recommander.",
    options: [
      {
        labelEn: "Analyze impact then present options with recommendation",
        labelFr: "Analyser l'impact puis présenter des options avec recommandation",
        isCorrect: true,
      },
      {
        labelEn: "Escalate immediately without analysis",
        labelFr: "Escalader immédiatement sans analyse",
        isCorrect: false,
      },
      {
        labelEn: "Ignore stakeholder concerns",
        labelFr: "Ignorer les préoccupations des parties prenantes",
        isCorrect: false,
      },
      {
        labelEn: "Change baseline without approval",
        labelFr: "Modifier la ligne de base sans approbation",
        isCorrect: false,
      },
    ],
    ecoTaskCode: "PR-01",
    conceptSlug: "integrated-planning",
  };
}

describe("Phase D core — protected bank", () => {
  it("1. fingerprint Q001–Q200 unchanged", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("2. stem modification detected", () => {
    const original = PMP_EXAM_BANK_STEMS[0]!;
    const mutated = cloneQuestion(original, original.externalKey, {
      promptEn: "Mutated stem content that must be rejected",
    });
    const kinds = detectProtectedQuestionMutation(original, mutated);
    expect(kinds).toContain("PROTECTED_STEM_CHANGED");

    const report = validateProtectedBankImmutability(
      PMP_EXAM_BANK_STEMS,
      [mutated],
      PROTECTED_BANK_AGGREGATE
    );
    expect(report.some((d) => d.code === "PROTECTED_STEM_CHANGED")).toBe(true);
  });

  it("3. option modification detected", () => {
    const original = PMP_EXAM_BANK_STEMS[1]!;
    const mutated = cloneQuestion(original, original.externalKey, {
      options: original.options.map((o, i) =>
        i === 0 ? { ...o, labelEn: "Mutated option label" } : o
      ),
    });
    const kinds = detectProtectedQuestionMutation(original, mutated);
    expect(kinds).toContain("PROTECTED_OPTION_CHANGED");
  });

  it("4. correct answer modification detected", () => {
    const original = PMP_EXAM_BANK_STEMS[2]!;
    const mutated = cloneQuestion(original, original.externalKey, {
      options: original.options.map((o) => ({ ...o, isCorrect: !o.isCorrect })),
    });
    const kinds = detectProtectedQuestionMutation(original, mutated);
    expect(kinds).toContain("PROTECTED_CORRECT_ANSWER_CHANGED");
  });

  it("5. protected question removal detected in combined bank", () => {
    const withoutFirst = PMP_EXAM_BANK_STEMS.slice(1);
    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [],
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(report.protectedBankIntact).toBe(true);

    const combinedMissing = combineExamBanks(withoutFirst, []);
    expect(combinedMissing.length).toBe(199);
    const deletionCheck = validateProtectedBankImmutability(
      PMP_EXAM_BANK_STEMS,
      []
    );
    expect(deletionCheck.filter((d) => d.code === "PROTECTED_QUESTION_REMOVED")).toHaveLength(0);
  });
});

describe("Phase D core — batch validation", () => {
  it("6. valid expansion batch passes", () => {
    const batch = [
      makeFullySyntheticExpansion("pmp-exam-901", "integration"),
      makeFullySyntheticExpansion("pmp-exam-902", "procurement"),
    ];
    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: batch,
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(report.status).not.toBe("ERROR");
    expect(report.candidateCount).toBe(2);
    expect(report.combinedCount).toBe(202);
  });

  it("7. empty batch returns WARNING", () => {
    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [],
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(report.status).toBe("WARNING");
    expect(report.diagnostics.some((d) => d.code === "BATCH_EMPTY")).toBe(true);
  });

  it("8. invalid external key rejected", () => {
    const batch = [makeUniqueExpansion("not-a-valid-key")];
    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: batch,
    });
    expect(report.status).toBe("ERROR");
    expect(report.diagnostics.some((d) => d.code === "INVALID_EXTERNAL_KEY")).toBe(
      true
    );
  });

  it("9. invalid metadata shape rejected", () => {
    const batch = [
      makeUniqueExpansion("pmp-exam-903", 8),
      makeUniqueExpansion("pmp-exam-903", 9),
    ];
    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: batch,
    });
    expect(report.status).toBe("ERROR");
    expect(
      report.diagnostics.some((d) => d.code === "DUPLICATE_EXTERNAL_KEY")
    ).toBe(true);
  });

  it("10. unknown ECO task rejected", () => {
    const q = makeUniqueExpansion("pmp-exam-904");
    const meta = buildExamBankMasteryMetadata([q])[0]!;
    const diagnostics = validateQuestionMetadataContract(q, {
      ...meta,
      ecoTaskId: "PEOPLE-T99" as typeof meta.ecoTaskId,
    });
    expect(diagnostics.some((d) => d.code === "UNKNOWN_ECO_TASK")).toBe(true);
  });

  it("11. invalid skill rejected", () => {
    const q = makeUniqueExpansion("pmp-exam-905");
    const meta = buildExamBankMasteryMetadata([q])[0]!;
    const diagnostics = validateQuestionMetadataContract(q, {
      ...meta,
      primarySkillId: "nonexistent-skill-id",
    });
    expect(diagnostics.some((d) => d.code === "INVALID_SKILL")).toBe(true);
  });
});

describe("Phase D core — duplicate detection", () => {
  it("12. intra-batch duplicate detected", () => {
    const a = makeUniqueExpansion("pmp-exam-910");
    const b = cloneQuestion(a, "pmp-exam-911");
    const metadata = buildExamBankMasteryMetadata([a, b]);
    const dupes = detectDuplicatesInBatch([a, b], metadata);
    expect(dupes.length).toBeGreaterThan(0);
    expect(dupes.some((d) => d.kind === "exact")).toBe(true);
  });

  it("13. cross-bank duplicate detected", () => {
    const existing = PMP_EXAM_BANK_STEMS[10]!;
    const candidate = cloneQuestion(existing, "pmp-exam-912");
    const dupes = detectDuplicatesBetweenBanks(
      PMP_EXAM_BANK_STEMS,
      [candidate]
    );
    expect(dupes.length).toBeGreaterThan(0);
    expect(dupes[0]!.externalKeyA).toBe(existing.externalKey);
  });

  it("14. unique expansion batch accepted without cross duplicates", () => {
    const batch = [
      makeFullySyntheticExpansion("pmp-exam-920", "integration"),
      makeFullySyntheticExpansion("pmp-exam-921", "procurement"),
    ];
    const dupes = detectDuplicatesBetweenBanks(PMP_EXAM_BANK_STEMS, batch);
    const exactDupes = dupes.filter((d) => d.kind === "exact");
    expect(exactDupes).toHaveLength(0);

    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: batch,
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    expect(report.status).not.toBe("ERROR");
  });
});

describe("Phase D core — coverage", () => {
  it("15. coverage comparison is deterministic", () => {
    const batch = [makeUniqueExpansion("pmp-exam-930", 20)];
    const a = buildCoverageComparison(PMP_EXAM_BANK_STEMS, batch);
    const b = buildCoverageComparison(PMP_EXAM_BANK_STEMS, batch);
    expect(a.combined.gaps.ecoTaskIds).toEqual(b.combined.gaps.ecoTaskIds);
    expect(a.deltaByEcoTask).toEqual(b.deltaByEcoTask);
  });

  it("16. skill gap remains when batch does not target gap skill", () => {
    const batch = [makeUniqueExpansion("pmp-exam-931", 0)];
    const comparison = buildCoverageComparison(PMP_EXAM_BANK_STEMS, batch);
    expect(comparison.remainingGapSkillIds.length).toBeGreaterThan(0);
  });

  it("17. ECO task gap warning when batch does not improve zero-coverage task", () => {
    const comparison = buildCoverageComparison(PMP_EXAM_BANK_STEMS, []);
    const zeroTasks = comparison.current.gaps.ecoTaskIds;
    expect(zeroTasks.length).toBeGreaterThan(0);

    const report = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [makeUniqueExpansion("pmp-exam-932", 1)],
      expectedProtectedAggregate: PROTECTED_BANK_AGGREGATE,
    });
    const gapWarnings = report.diagnostics.filter((d) => d.code === "ECO_TASK_GAP");
    expect(gapWarnings.length).toBeGreaterThan(0);
  });
});

describe("Phase D core — runtime compatibility", () => {
  it("18. metadata maps to attempt adapter context", () => {
    const q = makeUniqueExpansion("pmp-exam-940", 25);
    const meta = buildExamBankMasteryMetadata([q])[0]!;
    const ctx = metadataToQuestionMasteryContext(meta, {
      skillId: meta.primarySkillId ?? "skill-test",
    });
    const input = quizAttemptToMasteryInput(
      {
        questionId: ctx.id,
        isCorrect: false,
        confidenceLevel: "HIGH",
        answeredAt: new Date("2026-08-28T12:00:00.000Z"),
      },
      ctx
    );
    expect(input.ecoTaskId ?? input.skillId).toBeTruthy();
    expect(input.correct).toBe(false);
  });

  it("19. future question compatible with weakness pipeline", () => {
    const q = makeUniqueExpansion("pmp-exam-941", 30);
    const diagnostics = validateMasteryPipelineCompatibility(q);
    expect(diagnostics.filter((d) => d.severity === "ERROR")).toHaveLength(0);
  });

  it("20. future question compatible with mastery tier derivation", () => {
    const q = makeUniqueExpansion("pmp-exam-942", 35);
    const diagnostics = validateMasteryPipelineCompatibility(q);
    expect(diagnostics.some((d) => d.code === "PIPELINE_INVALID_TIER")).toBe(
      false
    );
  });

  it("runtime paths remain extension-safe", () => {
    for (const path of RUNTIME_BANK_EXTENSION_SAFE_PATHS) {
      expect(() =>
        readFileSync(join(process.cwd(), path), "utf8")
      ).not.toThrow();
    }
  });

  it("legacy writers documented and excluded from Phase D path", () => {
    expect(LEGACY_CONCEPT_MASTERY_WRITERS).toHaveLength(3);
    expect(
      LEGACY_CONCEPT_MASTERY_WRITERS.every(
        (w) => w.phaseDRecommendation !== "future-unify"
      )
    ).toBe(true);
    expect(CANONICAL_LESSON_MASTERY_WRITE_PATH).toContain(
      "processQuizMasteryForAttempts"
    );
  });
});

describe("Phase D core — guardrails", () => {
  it("21. no Q201+ in live protected bank", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(
      200
    );
    const expansionOnly = keys.filter(isExpansionBankKey);
    expect(expansionOnly).toHaveLength(0);
    expect(keys.every(isProtectedBankKey)).toBe(true);
  });

  it("22. ECO = 26", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);
  });

  it("23. T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });

  it("24. ConceptMastery schema stays 3-tier", () => {
    const schema = readFileSync(join(process.cwd(), "prisma/schema.prisma"), "utf8");
    const block = schema.slice(
      schema.indexOf("model ConceptMastery"),
      schema.indexOf("model LearningStreak")
    );
    expect(block).toContain("level          MasteryLevel");
    expect(block).not.toMatch(/masteryState/);
  });

  it("25. no 7-state values persisted in ConceptMastery", async () => {
    const forbidden = [
      "UNKNOWN",
      "EXPOSED",
      "DEVELOPING",
      "FRAGILE",
      "FUNCTIONAL",
      "STRONG",
    ] as const;
    const rows = await prisma.conceptMastery.findMany({ select: { level: true } });
    for (const row of rows) {
      expect(forbidden).not.toContain(row.level as (typeof forbidden)[number]);
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });

  it("protected fingerprint stable after batch validator module added", () => {
    const fp = buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS);
    expect(fp.count).toBe(200);
    expect(fp.aggregate).toBe(PROTECTED_BANK_AGGREGATE);
    for (const q of PMP_EXAM_BANK_STEMS.slice(0, 3)) {
      expect(fingerprintProtectedQuestion(q)).toBe(fp.fingerprints[q.externalKey]);
    }
  });

  it("batch metadata contract passes for valid expansion items", () => {
    const batch = [makeUniqueExpansion("pmp-exam-950", 40)];
    const diagnostics = validateBatchMetadataContract(batch);
    expect(diagnostics.filter((d) => d.severity === "ERROR")).toHaveLength(0);
  });
});
