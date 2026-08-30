/**
 * Question Bank Guard — Q001–Q200 protection / Q201+ absence.
 *
 * Adapted from the base-branch guard test to the canonical Phase C+D
 * implementation. The base branch referenced a `question-bank-guard` module
 * that was never implemented; its intended invariants (exactly Q001–Q200 in the
 * live/reference bank, no Q201+) are enforced by the canonical
 * `bank-batch-contract` key helpers over the reference protected bank. No second
 * guard architecture is introduced.
 */
import { describe, it, expect } from "vitest";
import {
  isProtectedBankKey,
  isExpansionBankKey,
  PROTECTED_BANK_SIZE,
} from "../bank-batch-contract";
import { PMP_EXAM_BANK_STEMS } from "../../../../prisma/seed/pmp-exam-bank-data";

describe("Question Bank Guard — Q001–Q200 / Q201+ absence", () => {
  it("should contain exactly 200 reference questions", () => {
    expect(PMP_EXAM_BANK_STEMS).toHaveLength(PROTECTED_BANK_SIZE);
    expect(PMP_EXAM_BANK_STEMS).toHaveLength(200);
  });

  it("should have every key inside the protected Q001–Q200 range", () => {
    const nonProtected = PMP_EXAM_BANK_STEMS.filter(
      (q) => !isProtectedBankKey(q.externalKey)
    );
    expect(nonProtected).toHaveLength(0);
  });

  it("should contain no Q201+ expansion keys in the live bank", () => {
    const expansion = PMP_EXAM_BANK_STEMS.filter((q) =>
      isExpansionBankKey(q.externalKey)
    );
    expect(expansion).toHaveLength(0);
  });

  it("should expose contiguous keys pmp-exam-001 … pmp-exam-200", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    for (let i = 1; i <= 200; i += 1) {
      expect(keys).toContain(`pmp-exam-${String(i).padStart(3, "0")}`);
    }
  });
});
