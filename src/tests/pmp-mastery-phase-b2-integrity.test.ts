import { describe, expect, it } from "vitest";
import {
  assertProtectedBankIntact,
  auditGraphIntegrity,
  buildMasterabilityReport,
  buildProtectedBankFingerprint,
  computeArchitecturalReadinessScore,
  masterabilityForEcoTask,
} from "@/modules/mastery-engine/integrity";
import { buildSkillMasterySnapshot } from "@/modules/mastery-engine/weakness-model";
import { deriveMasteryState } from "@/modules/mastery-engine/mastery-states";
import {
  PMP_EXAM_BANK,
  PMP_EXAM_BANK_STEMS,
} from "../../prisma/seed/pmp-exam-bank-data";

/** Locked aggregate of protected stems — fail if any stem/options/scoring mutate. */
const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

describe("Phase B.2 — protected bank integrity", () => {
  it("keeps exactly 200 ordered externalKeys and identical stems vs tagged bank", () => {
    expect(PMP_EXAM_BANK_STEMS).toHaveLength(200);
    expect(PMP_EXAM_BANK).toHaveLength(200);
    const issues = assertProtectedBankIntact(
      PMP_EXAM_BANK_STEMS,
      PROTECTED_BANK_AGGREGATE
    );
    expect(issues).toEqual([]);
    for (let i = 0; i < 200; i += 1) {
      expect(PMP_EXAM_BANK[i].promptEn).toBe(PMP_EXAM_BANK_STEMS[i].promptEn);
      expect(PMP_EXAM_BANK[i].options).toEqual(PMP_EXAM_BANK_STEMS[i].options);
      expect(PMP_EXAM_BANK[i].explanationCorrectEn).toBe(
        PMP_EXAM_BANK_STEMS[i].explanationCorrectEn
      );
    }
  });

  it("fingerprints are stable and detect mutation", () => {
    const fp = buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS);
    expect(fp.count).toBe(200);
    expect(fp.aggregate).toBe(PROTECTED_BANK_AGGREGATE);
    const mutated = {
      ...PMP_EXAM_BANK_STEMS[0],
      promptEn: PMP_EXAM_BANK_STEMS[0].promptEn + " MUTATED",
    };
    const broken = buildProtectedBankFingerprint([
      mutated,
      ...PMP_EXAM_BANK_STEMS.slice(1),
    ]);
    expect(broken.aggregate).not.toBe(PROTECTED_BANK_AGGREGATE);
  });
});

describe("Phase B.2 — graph integrity & masterability", () => {
  it("reports no P0 graph integrity issues", () => {
    const issues = auditGraphIntegrity();
    expect(issues.filter((i) => i.severity === "P0")).toEqual([]);
  });

  it("computes masterability across ECO / concepts / skills", () => {
    const report = buildMasterabilityReport(PMP_EXAM_BANK);
    expect(report.ecoTasks.yes + report.ecoTasks.partial + report.ecoTasks.no).toBe(
      26
    );
    expect(report.skills.yes + report.skills.partial + report.skills.no).toBe(67);
    expect(masterabilityForEcoTask("PEOPLE-T07", PMP_EXAM_BANK)).toBe("NO");
    expect(masterabilityForEcoTask("BUSINESS-T05", PMP_EXAM_BANK)).toBe("YES");
  });

  it("exposes architectural readiness score as PLA-internal", () => {
    const { score } = computeArchitecturalReadinessScore({
      taxonomyIntegrity: 95,
      conceptIntegrity: 80,
      skillObservability: 55,
      diagnosticQuality: 60,
      evidenceSufficiency: 50,
      retentionSupport: 45,
      traceability: 75,
    });
    expect(score).toBeGreaterThanOrEqual(50);
    expect(score).toBeLessThanOrEqual(100);
  });
});

describe("Phase B.2 — mastery evidence hardening", () => {
  it("can reach MASTERED when evidence includes spacing, variety, judgment, calibration", () => {
    const base = new Date("2026-01-01T00:00:00Z");
    const attempts = Array.from({ length: 6 }, (_, i) => ({
      correct: true as const,
      difficulty: "HARD" as const,
      cognitiveLevel: "JUDGMENT" as const,
      confidence: "HIGH" as const,
      answeredAt: new Date(base.getTime() + i * 2 * 24 * 60 * 60 * 1000),
      questionExternalKey: `pmp-exam-00${i + 1}`,
    }));
    const snap = buildSkillMasterySnapshot({
      skillId: "skill-enable-knowledge-transfer",
      attempts,
    });
    expect(snap.masteryState).toBe("MASTERED");
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
});
