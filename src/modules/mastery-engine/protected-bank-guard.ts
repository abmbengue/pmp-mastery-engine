/**
 * Phase D — protected bank immutability guard (Q001–Q200).
 * Detects accidental mutation when merging candidate batches.
 */

import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import {
  buildProtectedBankFingerprint,
  fingerprintProtectedQuestion,
} from "./integrity";
import type { BatchValidationDiagnostic } from "./bank-batch-contract";
import {
  PROTECTED_BANK_SIZE,
  isProtectedBankKey,
} from "./bank-batch-contract";

export type ProtectedBankMutationKind =
  | "PROTECTED_STEM_CHANGED"
  | "PROTECTED_OPTION_CHANGED"
  | "PROTECTED_CORRECT_ANSWER_CHANGED"
  | "PROTECTED_SCORING_CHANGED"
  | "PROTECTED_KEY_COLLISION"
  | "PROTECTED_QUESTION_REMOVED";

function correctOptionSignature(q: ExamBankQuestionSeed): string {
  return q.options
    .map((o, i) => `${i}:${o.isCorrect}:${o.labelEn}`)
    .join("|");
}

function scoringSignature(q: ExamBankQuestionSeed): string {
  return JSON.stringify({
    examDifficulty: q.examDifficulty,
    type: q.type,
    domain: q.domain,
    deliveryApproach: q.deliveryApproach,
  });
}

function stemSignature(q: ExamBankQuestionSeed): string {
  return JSON.stringify({
    promptEn: q.promptEn,
    promptFr: q.promptFr,
    scenarioEn: q.scenarioEn,
    scenarioFr: q.scenarioFr,
    explanationCorrectEn: q.explanationCorrectEn,
    explanationCorrectFr: q.explanationCorrectFr,
  });
}

function optionSignature(q: ExamBankQuestionSeed): string {
  return JSON.stringify(
    q.options.map((o) => ({
      labelEn: o.labelEn,
      labelFr: o.labelFr,
      isCorrect: o.isCorrect,
    }))
  );
}

/**
 * Compare a candidate question against the protected original when keys collide.
 */
export function detectProtectedQuestionMutation(
  protectedQuestion: ExamBankQuestionSeed,
  candidateQuestion: ExamBankQuestionSeed
): ProtectedBankMutationKind[] {
  const kinds: ProtectedBankMutationKind[] = [];

  if (protectedQuestion.externalKey !== candidateQuestion.externalKey) {
    kinds.push("PROTECTED_KEY_COLLISION");
    return kinds;
  }

  if (stemSignature(protectedQuestion) !== stemSignature(candidateQuestion)) {
    kinds.push("PROTECTED_STEM_CHANGED");
  }
  if (optionSignature(protectedQuestion) !== optionSignature(candidateQuestion)) {
    kinds.push("PROTECTED_OPTION_CHANGED");
  }
  if (
    correctOptionSignature(protectedQuestion) !==
    correctOptionSignature(candidateQuestion)
  ) {
    kinds.push("PROTECTED_CORRECT_ANSWER_CHANGED");
  }
  if (scoringSignature(protectedQuestion) !== scoringSignature(candidateQuestion)) {
    kinds.push("PROTECTED_SCORING_CHANGED");
  }

  return kinds;
}

/**
 * Ensures the reference protected bank contains every Q001–Q200 key (no gaps).
 */
export function detectIncompleteProtectedBank(
  protectedBank: ExamBankQuestionSeed[]
): BatchValidationDiagnostic[] {
  const diagnostics: BatchValidationDiagnostic[] = [];
  const keys = new Set(protectedBank.map((q) => q.externalKey));

  if (protectedBank.length !== PROTECTED_BANK_SIZE) {
    diagnostics.push({
      code: "PROTECTED_BANK_COUNT",
      severity: "ERROR",
      message: `Expected ${PROTECTED_BANK_SIZE} protected questions, found ${protectedBank.length}`,
    });
  }

  for (let i = 1; i <= PROTECTED_BANK_SIZE; i += 1) {
    const key = `pmp-exam-${String(i).padStart(3, "0")}`;
    if (!keys.has(key)) {
      diagnostics.push({
        code: "PROTECTED_QUESTION_MISSING",
        severity: "ERROR",
        message: `Protected question ${key} missing from reference bank`,
        entityId: key,
      });
    }
  }

  return diagnostics;
}

/**
 * Ensures candidate batch does not mutate or remove protected Q001–Q200 content.
 */
export function validateProtectedBankImmutability(
  protectedBank: ExamBankQuestionSeed[],
  candidateBatch: ExamBankQuestionSeed[],
  expectedAggregate?: string
): BatchValidationDiagnostic[] {
  const diagnostics: BatchValidationDiagnostic[] = [];
  const protectedByKey = new Map(
    protectedBank.map((q) => [q.externalKey, q] as const)
  );

  for (const candidate of candidateBatch) {
    if (!isProtectedBankKey(candidate.externalKey)) continue;

    const original = protectedByKey.get(candidate.externalKey);
    if (!original) {
      diagnostics.push({
        code: "PROTECTED_KEY_UNKNOWN",
        severity: "ERROR",
        message: `Protected key ${candidate.externalKey} not in reference bank`,
        entityId: candidate.externalKey,
      });
      continue;
    }

    const fpOriginal = fingerprintProtectedQuestion(original);
    const fpCandidate = fingerprintProtectedQuestion(candidate);
    if (fpOriginal !== fpCandidate) {
      const kinds = detectProtectedQuestionMutation(original, candidate);
      for (const kind of kinds) {
        diagnostics.push({
          code: kind,
          severity: "ERROR",
          message: `Protected question ${candidate.externalKey} would be mutated (${kind})`,
          entityId: candidate.externalKey,
        });
      }
      if (kinds.length === 0) {
        diagnostics.push({
          code: "PROTECTED_FINGERPRINT_MISMATCH",
          severity: "ERROR",
          message: `Protected question ${candidate.externalKey} fingerprint changed`,
          entityId: candidate.externalKey,
        });
      }
    } else {
      diagnostics.push({
        code: "PROTECTED_KEY_IN_CANDIDATE_BATCH",
        severity: "WARNING",
        message: `Protected key ${candidate.externalKey} present in candidate batch (redundant)`,
        entityId: candidate.externalKey,
      });
    }
  }

  if (expectedAggregate) {
    const fp = buildProtectedBankFingerprint(protectedBank);
    if (fp.aggregate !== expectedAggregate) {
      diagnostics.push({
        code: "PROTECTED_BANK_FINGERPRINT_MISMATCH",
        severity: "ERROR",
        message: "Protected bank aggregate fingerprint does not match expected reference",
      });
    }
  }

  const candidateKeys = new Set(candidateBatch.map((q) => q.externalKey));
  for (const protectedQ of protectedBank) {
    if (candidateKeys.has(`__removed__${protectedQ.externalKey}`)) {
      diagnostics.push({
        code: "PROTECTED_QUESTION_REMOVED",
        severity: "ERROR",
        message: `Protected question ${protectedQ.externalKey} would be removed`,
        entityId: protectedQ.externalKey,
      });
    }
  }

  return diagnostics;
}

/**
 * Detect protected questions missing from a proposed combined bank.
 */
export function detectProtectedBankDeletions(
  protectedBank: ExamBankQuestionSeed[],
  combinedBank: ExamBankQuestionSeed[]
): BatchValidationDiagnostic[] {
  const combinedKeys = new Set(combinedBank.map((q) => q.externalKey));
  const diagnostics: BatchValidationDiagnostic[] = [];

  for (const q of protectedBank) {
    if (!combinedKeys.has(q.externalKey)) {
      diagnostics.push({
        code: "PROTECTED_QUESTION_REMOVED",
        severity: "ERROR",
        message: `Protected question ${q.externalKey} missing from combined bank`,
        entityId: q.externalKey,
      });
    }
  }

  return diagnostics;
}
