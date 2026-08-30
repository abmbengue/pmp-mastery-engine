/**
 * Phase D — read-only batch validation API (no DB writes, no live bank mutation).
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { evaluateExamBankBatchForIntegration } from "@/modules/mastery-engine/bank-batch-integration";
import type { ExamBankQuestionSeed } from "../../../../../prisma/seed/pmp-exam-bank-types";

const optionSchema = z.object({
  labelFr: z.string(),
  labelEn: z.string(),
  isCorrect: z.boolean(),
  explanationWrongFr: z.string().optional(),
  explanationWrongEn: z.string().optional(),
});

const questionSchema = z.object({
  externalKey: z.string(),
  domain: z.enum(["PEOPLE", "PROCESS", "BUSINESS_ENVIRONMENT"]),
  deliveryApproach: z.enum(["PREDICTIVE", "AGILE", "HYBRID"]),
  processArea: z.string(),
  examDifficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  scenarioType: z.string(),
  learningObjective: z.string(),
  skills: z.array(z.string()),
  type: z.enum(["SINGLE_CHOICE", "MULTIPLE_CHOICE", "TRUE_FALSE"]),
  scenarioFr: z.string(),
  scenarioEn: z.string(),
  promptFr: z.string(),
  promptEn: z.string(),
  explanationCorrectFr: z.string(),
  explanationCorrectEn: z.string(),
  options: z.array(optionSchema).min(2),
  ecoTaskCode: z.string().optional(),
  ecoTaskCodesSecondary: z.array(z.string()).optional(),
  conceptSlug: z.string().optional(),
});

const bodySchema = z.object({
  candidateBatch: z.array(questionSchema).max(50),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const result = evaluateExamBankBatchForIntegration({
    candidateBatch: parsed.data.candidateBatch as ExamBankQuestionSeed[],
  });

  return NextResponse.json({
    eligible: result.eligible,
    status: result.validation.status,
    protectedBankIntact: result.validation.protectedBankIntact,
    candidateCount: result.validation.candidateCount,
    combinedCount: result.validation.combinedCount,
    diagnostics: result.validation.diagnostics,
    rejectionReasons: result.rejectionReasons,
    runtimeCompatibilityErrors: result.runtimeCompatibilityErrors,
  });
}
