/**
 * Phase D Iter 3 — integration entry point for future exam bank batches.
 * Validates before any in-memory eligibility; never mutates live bank data.
 */

import { PMP_EXAM_BANK_STEMS } from "../../../prisma/seed/pmp-exam-bank-data";
import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import { combineExamBanks } from "./bank-batch-contract";
import {
  validateExamBankBatch,
} from "./bank-batch-validator";
import type { BatchValidationResult } from "./bank-batch-contract";
import { buildProtectedBankFingerprint } from "./integrity";
import { validateMasteryPipelineCompatibility } from "./runtime-bank-compatibility";

export const LIVE_PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

export type BatchIntegrationResult = {
  /** false when validation status is ERROR */
  eligible: boolean;
  validation: BatchValidationResult;
  /** In-memory combined bank when eligible; null when rejected */
  combinedBankInMemory: ExamBankQuestionSeed[] | null;
  rejectionReasons: string[];
  runtimeCompatibilityErrors: number;
};

export class BatchIntegrationRejectedError extends Error {
  readonly result: BatchIntegrationResult;

  constructor(result: BatchIntegrationResult) {
    const reasons = result.rejectionReasons.join("; ");
    super(`Exam bank batch rejected: ${reasons}`);
    this.name = "BatchIntegrationRejectedError";
    this.result = result;
  }
}

export type EvaluateBatchIntegrationInput = {
  candidateBatch: ExamBankQuestionSeed[];
  existingProtectedBank?: ExamBankQuestionSeed[];
  expectedProtectedAggregate?: string;
};

/**
 * Primary integration gate: candidate batch → validation → eligibility.
 */
export function evaluateExamBankBatchForIntegration(
  input: EvaluateBatchIntegrationInput
): BatchIntegrationResult {
  const existingProtectedBank =
    input.existingProtectedBank ?? PMP_EXAM_BANK_STEMS;
  const expectedProtectedAggregate =
    input.expectedProtectedAggregate ?? LIVE_PROTECTED_BANK_AGGREGATE;

  const validation = validateExamBankBatch({
    existingProtectedBank,
    candidateBatch: input.candidateBatch,
    expectedProtectedAggregate,
  });

  const rejectionReasons = validation.diagnostics
    .filter((d) => d.severity === "ERROR")
    .map((d) => `${d.code}: ${d.message}`);

  let runtimeCompatibilityErrors = 0;
  for (const q of input.candidateBatch) {
    const pipeErrors = validateMasteryPipelineCompatibility(q).filter(
      (d) => d.severity === "ERROR"
    );
    runtimeCompatibilityErrors += pipeErrors.length;
    for (const err of pipeErrors) {
      rejectionReasons.push(`${err.code}: ${err.message}`);
    }
  }

  const eligible =
    validation.status !== "ERROR" && runtimeCompatibilityErrors === 0;

  const combinedBankInMemory = eligible
    ? combineExamBanks(existingProtectedBank, input.candidateBatch)
    : null;

  return {
    eligible,
    validation,
    combinedBankInMemory,
    rejectionReasons,
    runtimeCompatibilityErrors,
  };
}

/**
 * Throws when batch is not eligible for integration (ERROR validation or runtime).
 */
export function assertBatchEligibleForIntegration(
  input: EvaluateBatchIntegrationInput
): BatchIntegrationResult {
  const result = evaluateExamBankBatchForIntegration(input);
  if (!result.eligible) {
    throw new BatchIntegrationRejectedError(result);
  }
  return result;
}

/**
 * Read-only check that live protected bank fingerprint matches reference.
 */
export function assertLiveProtectedBankUnchanged(
  bank: ExamBankQuestionSeed[] = PMP_EXAM_BANK_STEMS
): void {
  const fp = buildProtectedBankFingerprint(bank);
  if (fp.aggregate !== LIVE_PROTECTED_BANK_AGGREGATE) {
    throw new Error("Live protected bank fingerprint mismatch");
  }
  if (fp.count !== 200) {
    throw new Error(`Expected 200 protected questions, found ${fp.count}`);
  }
}
