/**
 * Guard Suite — comprehensive canonical integrity checks.
 *
 * Adapted from the base-branch guard test to the canonical Phase C+D
 * implementation. The base branch referenced a `guard-suite` module that was
 * never implemented; this suite instead composes the canonical guards
 * (integrity fingerprint, bank-batch-contract key ranges, eco-taxonomy
 * distribution, 3-tier mastery) into one aggregate check. No second guard
 * architecture is introduced.
 */
import { describe, it, expect } from "vitest";
import { buildProtectedBankFingerprint } from "../integrity";
import {
  PROTECTED_BANK_AGGREGATE,
  PROTECTED_BANK_SIZE,
  isExpansionBankKey,
} from "../bank-batch-contract";
import { ECO_TASK_COUNT, listEcoTasksByDomain } from "../eco-taxonomy";
import { PMP_EXAM_BANK_STEMS } from "../../../../prisma/seed/pmp-exam-bank-data";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";

interface ComprehensiveGuardReport {
  passed: boolean;
  examBankFingerprintOk: boolean;
  examBankCountOk: boolean;
  q201PlusAbsent: boolean;
  ecoDistributionOk: boolean;
  masteryThreeTierOnly: boolean;
  allIssues: string[];
}

function runComprehensiveGuards(): ComprehensiveGuardReport {
  const allIssues: string[] = [];

  const fingerprint = buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS);
  const examBankFingerprintOk =
    fingerprint.aggregate === PROTECTED_BANK_AGGREGATE;
  if (!examBankFingerprintOk) allIssues.push("exam bank fingerprint mismatch");

  const examBankCountOk = fingerprint.count === PROTECTED_BANK_SIZE;
  if (!examBankCountOk) allIssues.push("exam bank count != 200");

  const q201PlusAbsent = !PMP_EXAM_BANK_STEMS.some((q) =>
    isExpansionBankKey(q.externalKey)
  );
  if (!q201PlusAbsent) allIssues.push("Q201+ present in live bank");

  const ecoDistributionOk =
    ECO_TASK_COUNT === 26 &&
    listEcoTasksByDomain("PEOPLE").length === 8 &&
    listEcoTasksByDomain("PROCESS").length === 10 &&
    listEcoTasksByDomain("BUSINESS").length === 8;
  if (!ecoDistributionOk) allIssues.push("ECO distribution mismatch");

  const allowed = new Set(["WEAK", "LEARNING", "MASTERED"]);
  const masteryThreeTierOnly = Array.from({ length: 101 }, (_, s) =>
    computeMasteryLevelFromScore(s)
  ).every((level) => allowed.has(level));
  if (!masteryThreeTierOnly) allIssues.push("mastery level outside 3-tier");

  return {
    passed: allIssues.length === 0,
    examBankFingerprintOk,
    examBankCountOk,
    q201PlusAbsent,
    ecoDistributionOk,
    masteryThreeTierOnly,
    allIssues,
  };
}

describe("Guard Suite — Comprehensive Integration", () => {
  it("should run all canonical guards and return a report", () => {
    const report = runComprehensiveGuards();
    expect(report).toHaveProperty("passed");
    expect(report).toHaveProperty("examBankFingerprintOk");
    expect(report).toHaveProperty("ecoDistributionOk");
    expect(report).toHaveProperty("q201PlusAbsent");
    expect(report).toHaveProperty("masteryThreeTierOnly");
    expect(Array.isArray(report.allIssues)).toBe(true);
  });

  it("should pass every canonical guard on the release freeze", () => {
    const report = runComprehensiveGuards();
    expect(report.examBankFingerprintOk).toBe(true);
    expect(report.examBankCountOk).toBe(true);
    expect(report.q201PlusAbsent).toBe(true);
    expect(report.ecoDistributionOk).toBe(true);
    expect(report.masteryThreeTierOnly).toBe(true);
  });

  it("should set passed = true when no issues", () => {
    const report = runComprehensiveGuards();
    expect(report.allIssues).toEqual([]);
    expect(report.passed).toBe(true);
  });
});
