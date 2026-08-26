/**
 * Question mastery metadata for protected 200 exam items.
 * Metadata only — does not alter stems/options/scoring.
 */

import { PMP_EXAM_BANK } from "./pmp-exam-bank-data";
import { buildExamBankMasteryMetadata } from "../../src/modules/mastery-engine/question-metadata";

export const PMP_QUESTION_MASTERY_METADATA = buildExamBankMasteryMetadata(PMP_EXAM_BANK);

export function getQuestionMasteryMetadata(externalKey: string) {
  return PMP_QUESTION_MASTERY_METADATA.find((m) => m.externalKey === externalKey);
}
