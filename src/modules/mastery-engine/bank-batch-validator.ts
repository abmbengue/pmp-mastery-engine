/**
 * Phase D — deterministic batch validation pipeline.
 * existingProtectedBank + candidateBatch → structured PASS/WARNING/ERROR report.
 */

import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import {
  combineExamBanks,
  deriveBatchValidationStatus,
  validateBatchQuestionShape,
  type BatchValidationDiagnostic,
  type BatchValidationResult,
} from "./bank-batch-contract";
import {
  detectIncompleteProtectedBank,
  detectProtectedBankDeletions,
  validateProtectedBankImmutability,
} from "./protected-bank-guard";
import { validateBatchMetadataContract } from "./question-metadata-contract";
import {
  detectDuplicatesBetweenBanks,
  detectDuplicatesInBatch,
  type DuplicateCandidate,
  type DuplicateKind,
} from "./duplicate-detection";
import { buildExamBankMasteryMetadata } from "./question-metadata";
import { buildCoverageComparison } from "./coverage-matrix";
import { assertProtectedBankIntact } from "./integrity";

const BLOCKING_DUPLICATE_KINDS: DuplicateKind[] = [
  "exact",
  "near",
  "same-scenario-actors",
];

function isBlockingDuplicate(dupe: DuplicateCandidate): boolean {
  if (BLOCKING_DUPLICATE_KINDS.includes(dupe.kind)) return true;
  return dupe.score >= 0.72;
}

function pushDuplicateDiagnostic(
  diagnostics: BatchValidationDiagnostic[],
  code: "INTRA_BATCH_DUPLICATE" | "CROSS_BANK_DUPLICATE",
  dupe: DuplicateCandidate,
  duplicateAsWarning: boolean
): void {
  if (!isBlockingDuplicate(dupe)) {
    diagnostics.push({
      code: `${code}_LOW_CONFIDENCE`,
      severity: "WARNING",
      message: `${dupe.kind}: ${dupe.externalKeyA} ↔ ${dupe.externalKeyB} (${dupe.reason})`,
      entityId: dupe.externalKeyB,
    });
    return;
  }
  diagnostics.push({
    code,
    severity: duplicateAsWarning ? "WARNING" : "ERROR",
    message: `${dupe.kind}: ${dupe.externalKeyA} ↔ ${dupe.externalKeyB} (${dupe.reason})`,
    entityId: dupe.externalKeyB,
  });
}

export type ValidateExamBankBatchInput = {
  existingProtectedBank: ExamBankQuestionSeed[];
  candidateBatch: ExamBankQuestionSeed[];
  expectedProtectedAggregate?: string;
  /** Treat near/exact duplicates as ERROR (default) or WARNING */
  duplicateAsWarning?: boolean;
};

export function validateExamBankBatch(
  input: ValidateExamBankBatchInput
): BatchValidationResult {
  const diagnostics: BatchValidationDiagnostic[] = [];
  const { existingProtectedBank, candidateBatch, expectedProtectedAggregate } =
    input;
  const duplicateAsWarning = input.duplicateAsWarning ?? false;

  diagnostics.push(...detectIncompleteProtectedBank(existingProtectedBank));

  diagnostics.push(
    ...validateBatchQuestionShape(candidateBatch).map((d) => d)
  );

  diagnostics.push(
    ...validateProtectedBankImmutability(
      existingProtectedBank,
      candidateBatch,
      expectedProtectedAggregate
    )
  );

  if (expectedProtectedAggregate) {
    diagnostics.push(
      ...assertProtectedBankIntact(
        existingProtectedBank,
        expectedProtectedAggregate
      ).map((issue) => ({
        code: issue.code,
        severity: "ERROR" as const,
        message: issue.message,
        entityId: issue.entityId,
      }))
    );
  }

  if (candidateBatch.length > 0) {
    diagnostics.push(...validateBatchMetadataContract(candidateBatch));

    const candidateMetadata = buildExamBankMasteryMetadata(candidateBatch);
    const existingMetadata = buildExamBankMasteryMetadata(existingProtectedBank);

    const intraDupes = detectDuplicatesInBatch(candidateBatch, candidateMetadata);
    for (const dupe of intraDupes) {
      pushDuplicateDiagnostic(diagnostics, "INTRA_BATCH_DUPLICATE", dupe, duplicateAsWarning);
    }

    const crossDupes = detectDuplicatesBetweenBanks(
      existingProtectedBank,
      candidateBatch,
      existingMetadata,
      candidateMetadata
    );
    for (const dupe of crossDupes) {
      pushDuplicateDiagnostic(diagnostics, "CROSS_BANK_DUPLICATE", dupe, duplicateAsWarning);
    }

    const coverage = buildCoverageComparison(
      existingProtectedBank,
      candidateBatch
    );
    if (coverage.remainingGapEcoTaskIds.length > 0 && candidateBatch.length > 0) {
      for (const taskId of coverage.remainingGapEcoTaskIds.slice(0, 5)) {
        const delta = coverage.deltaByEcoTask[taskId] ?? 0;
        if (delta === 0) {
          diagnostics.push({
            code: "ECO_TASK_GAP",
            severity: "WARNING",
            message: `ECO task ${taskId} still has zero questions after batch`,
            entityId: taskId,
          });
        }
      }
    }
  }

  const combinedBank = combineExamBanks(existingProtectedBank, candidateBatch);
  diagnostics.push(
    ...detectProtectedBankDeletions(existingProtectedBank, combinedBank)
  );

  const protectedBankIntact = !diagnostics.some(
    (d) =>
      d.severity === "ERROR" &&
      (d.code.startsWith("PROTECTED_") || d.code === "BANK_HASH_MISMATCH")
  );

  const duplicateCount = diagnostics.filter(
    (d) => d.code === "INTRA_BATCH_DUPLICATE" || d.code === "CROSS_BANK_DUPLICATE"
  ).length;

  const coverageGapCount = diagnostics.filter(
    (d) => d.code === "ECO_TASK_GAP"
  ).length;

  const orderedDiagnostics = [...diagnostics].sort((a, b) => {
    const byCode = a.code.localeCompare(b.code);
    if (byCode !== 0) return byCode;
    const byEntity = (a.entityId ?? "").localeCompare(b.entityId ?? "");
    if (byEntity !== 0) return byEntity;
    return a.message.localeCompare(b.message);
  });

  return {
    status: deriveBatchValidationStatus(orderedDiagnostics),
    diagnostics: orderedDiagnostics,
    protectedBankIntact,
    candidateCount: candidateBatch.length,
    combinedCount: combinedBank.length,
    duplicateCount,
    coverageGapCount,
  };
}
