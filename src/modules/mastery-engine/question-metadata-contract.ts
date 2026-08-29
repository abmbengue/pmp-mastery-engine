/**
 * Phase D — metadata contract for future exam bank questions.
 * Ensures ECO/task/skill linkage compatible with existing mastery pipeline.
 */

import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import { ECO_TASKS } from "./eco-taxonomy";
import { getConcept } from "./concept-graph";
import { getMasterySkill } from "./mastery-skills";
import {
  buildQuestionMasteryMetadata,
  buildExamBankMasteryMetadata,
} from "./question-metadata";
import type { BatchValidationDiagnostic } from "./bank-batch-contract";
import type { QuestionMasteryMetadata } from "./types";

export function validateQuestionMetadataContract(
  q: ExamBankQuestionSeed,
  metadata?: QuestionMasteryMetadata
): BatchValidationDiagnostic[] {
  const diagnostics: BatchValidationDiagnostic[] = [];
  const meta = metadata ?? buildQuestionMasteryMetadata(q);

  if (meta.externalKey !== q.externalKey) {
    diagnostics.push({
      code: "METADATA_KEY_MISMATCH",
      severity: "ERROR",
      message: `Metadata externalKey ${meta.externalKey} does not match question ${q.externalKey}`,
      entityId: q.externalKey,
    });
  }

  const ecoTask = ECO_TASKS.find((t) => t.id === meta.ecoTaskId);
  if (!ecoTask) {
    diagnostics.push({
      code: "UNKNOWN_ECO_TASK",
      severity: "ERROR",
      message: `Unknown ECO task: ${meta.ecoTaskId}`,
      entityId: q.externalKey,
    });
  }

  if (!getConcept(meta.primaryConceptId)) {
    diagnostics.push({
      code: "INVALID_CONCEPT",
      severity: "ERROR",
      message: `Unknown primary concept: ${meta.primaryConceptId}`,
      entityId: q.externalKey,
    });
  }

  if (meta.primarySkillId && !getMasterySkill(meta.primarySkillId)) {
    diagnostics.push({
      code: "INVALID_SKILL",
      severity: "ERROR",
      message: `Unknown primary skill: ${meta.primarySkillId}`,
      entityId: q.externalKey,
    });
  }

  for (const sid of meta.secondarySkillIds) {
    if (!getMasterySkill(sid)) {
      diagnostics.push({
        code: "INVALID_SECONDARY_SKILL",
        severity: "WARNING",
        message: `Unknown secondary skill: ${sid}`,
        entityId: q.externalKey,
      });
    }
  }

  if (!meta.cognitiveLevel) {
    diagnostics.push({
      code: "MISSING_COGNITIVE_LEVEL",
      severity: "ERROR",
      message: "Metadata missing cognitiveLevel",
      entityId: q.externalKey,
    });
  }

  if (!meta.difficulty) {
    diagnostics.push({
      code: "MISSING_DIFFICULTY",
      severity: "WARNING",
      message: "Metadata missing difficulty",
      entityId: q.externalKey,
    });
  }

  return diagnostics;
}

export function validateBatchMetadataContract(
  batch: ExamBankQuestionSeed[]
): BatchValidationDiagnostic[] {
  const diagnostics: BatchValidationDiagnostic[] = [];
  const metadata = buildExamBankMasteryMetadata(batch);
  const metaByKey = new Map(metadata.map((m) => [m.externalKey, m]));

  for (const q of batch) {
    const meta = metaByKey.get(q.externalKey);
    if (!meta) {
      diagnostics.push({
        code: "METADATA_MISSING",
        severity: "ERROR",
        message: `No metadata generated for ${q.externalKey}`,
        entityId: q.externalKey,
      });
      continue;
    }
    diagnostics.push(...validateQuestionMetadataContract(q, meta));
  }

  return diagnostics;
}
