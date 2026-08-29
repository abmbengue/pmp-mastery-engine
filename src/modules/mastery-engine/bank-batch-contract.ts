/**
 * Phase D — extensible exam bank batch contract (pure types + shape validators).
 * Batch-oriented: existingProtectedBank + candidateBatch (no hardcoded Q201+).
 */

import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";

/** Protected historical bank size — Q001–Q200 immutable reference. */
export const PROTECTED_BANK_SIZE = 200;

/** Keys pmp-exam-001 … pmp-exam-200 */
export const PROTECTED_BANK_KEY_PATTERN = /^pmp-exam-(0\d{2}|1\d{2}|200)$/;

/** Future expansion keys — pmp-exam-NNN+ (batch-oriented, not hardcoded). */
export const EXPANSION_BANK_KEY_PATTERN = /^pmp-exam-\d{3,}$/;

export type BatchValidationStatus = "PASS" | "WARNING" | "ERROR";

export type BatchValidationSeverity = "ERROR" | "WARNING";

export type BatchValidationDiagnostic = {
  code: string;
  severity: BatchValidationSeverity;
  message: string;
  entityId?: string;
};

export type BatchValidationResult = {
  status: BatchValidationStatus;
  diagnostics: BatchValidationDiagnostic[];
  protectedBankIntact: boolean;
  candidateCount: number;
  combinedCount: number;
  duplicateCount: number;
  coverageGapCount: number;
};

export function isProtectedBankKey(externalKey: string): boolean {
  return PROTECTED_BANK_KEY_PATTERN.test(externalKey);
}

export function isExpansionBankKey(externalKey: string): boolean {
  return EXPANSION_BANK_KEY_PATTERN.test(externalKey) && !isProtectedBankKey(externalKey);
}

export function protectedBankKeyNumber(externalKey: string): number | null {
  const match = externalKey.match(/^pmp-exam-(\d+)$/);
  if (!match) return null;
  return Number(match[1]);
}

export function combineExamBanks(
  existingProtectedBank: ExamBankQuestionSeed[],
  candidateBatch: ExamBankQuestionSeed[]
): ExamBankQuestionSeed[] {
  const byKey = new Map<string, ExamBankQuestionSeed>();
  for (const q of existingProtectedBank) {
    byKey.set(q.externalKey, q);
  }
  for (const q of candidateBatch) {
    if (!byKey.has(q.externalKey)) {
      byKey.set(q.externalKey, q);
    }
  }
  return [...byKey.values()].sort((a, b) => {
    const na = protectedBankKeyNumber(a.externalKey) ?? 0;
    const nb = protectedBankKeyNumber(b.externalKey) ?? 0;
    return na - nb;
  });
}

export function deriveBatchValidationStatus(
  diagnostics: BatchValidationDiagnostic[]
): BatchValidationStatus {
  if (diagnostics.some((d) => d.severity === "ERROR")) return "ERROR";
  if (diagnostics.some((d) => d.severity === "WARNING")) return "WARNING";
  return "PASS";
}

export function validateBatchQuestionShape(
  batch: ExamBankQuestionSeed[]
): BatchValidationDiagnostic[] {
  const diagnostics: BatchValidationDiagnostic[] = [];
  const seenKeys = new Set<string>();

  if (batch.length === 0) {
    diagnostics.push({
      code: "BATCH_EMPTY",
      severity: "WARNING",
      message: "Candidate batch is empty",
    });
    return diagnostics;
  }

  for (const q of batch) {
    if (!EXPANSION_BANK_KEY_PATTERN.test(q.externalKey)) {
      diagnostics.push({
        code: "INVALID_EXTERNAL_KEY",
        severity: "ERROR",
        message: `Invalid externalKey format: ${q.externalKey}`,
        entityId: q.externalKey,
      });
    }

    if (seenKeys.has(q.externalKey)) {
      diagnostics.push({
        code: "DUPLICATE_EXTERNAL_KEY",
        severity: "ERROR",
        message: `Duplicate externalKey in batch: ${q.externalKey}`,
        entityId: q.externalKey,
      });
    }
    seenKeys.add(q.externalKey);

    if (!q.promptEn?.trim() || !q.scenarioEn?.trim()) {
      diagnostics.push({
        code: "MISSING_STEM",
        severity: "ERROR",
        message: "Question missing EN prompt or scenario",
        entityId: q.externalKey,
      });
    }

    if (!Array.isArray(q.options) || q.options.length < 2) {
      diagnostics.push({
        code: "INVALID_OPTIONS",
        severity: "ERROR",
        message: "Question must have at least 2 options",
        entityId: q.externalKey,
      });
      continue;
    }

    const correctCount = q.options.filter((o) => o.isCorrect).length;
    if (q.type === "SINGLE_CHOICE" && correctCount !== 1) {
      diagnostics.push({
        code: "INVALID_CORRECT_ANSWER",
        severity: "ERROR",
        message: `SINGLE_CHOICE must have exactly one correct option (found ${correctCount})`,
        entityId: q.externalKey,
      });
    }
  }

  return diagnostics;
}
