/**
 * Exam Bank Guard — fingerprint & integrity.
 *
 * Adapted from the base-branch guard test to the canonical Phase C+D
 * implementation. The base branch referenced an `exam-bank-guard` module that
 * was never implemented; its intended invariants (deterministic fingerprint,
 * expected aggregate d18c866…, exactly 200 protected questions) are enforced by
 * the canonical `integrity` + `bank-batch-contract` API over the reference
 * protected bank. No second guard architecture is introduced.
 */
import { describe, it, expect } from "vitest";
import {
  buildProtectedBankFingerprint,
  assertProtectedBankIntact,
} from "../integrity";
import {
  PROTECTED_BANK_AGGREGATE,
  PROTECTED_BANK_SIZE,
} from "../bank-batch-contract";
import { PMP_EXAM_BANK_STEMS } from "../../../../prisma/seed/pmp-exam-bank-data";

describe("Exam Bank Guard — Fingerprint & Integrity", () => {
  it("should calculate fingerprint deterministically", () => {
    const fp1 = buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate;
    const fp2 = buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate;
    expect(fp1).toBe(fp2);
  });

  it("should return non-empty fingerprint", () => {
    const fp = buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate;
    expect(fp.length).toBeGreaterThan(0);
  });

  it("should report exactly 200 protected questions", () => {
    const report = buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS);
    expect(report.count).toBe(PROTECTED_BANK_SIZE);
    expect(report.count).toBe(200);
  });

  it("should match the expected canonical fingerprint", () => {
    const fp = buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate;
    expect(fp).toBe(PROTECTED_BANK_AGGREGATE);
    expect(fp).toBe(
      "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2"
    );
  });

  it("should pass integrity assertion with no issues", () => {
    const issues = assertProtectedBankIntact(
      PMP_EXAM_BANK_STEMS,
      PROTECTED_BANK_AGGREGATE
    );
    expect(issues).toEqual([]);
  });

  it("should detect a mutated protected question (fingerprint mismatch)", () => {
    const mutated = PMP_EXAM_BANK_STEMS.map((q, i) =>
      i === 0 ? { ...q, promptEn: `${q.promptEn} (tampered)` } : q
    );
    const issues = assertProtectedBankIntact(mutated, PROTECTED_BANK_AGGREGATE);
    expect(issues.length).toBeGreaterThan(0);
    expect(issues.some((issue) => issue.code === "BANK_HASH_MISMATCH")).toBe(
      true
    );
  });
});
