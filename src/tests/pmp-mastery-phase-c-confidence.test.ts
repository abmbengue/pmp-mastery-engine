/**
 * Phase C — confidence capture in lesson TEST (iteration 2/10).
 */

import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import {
  assessConfidenceCalibration,
  numericToConfidence,
  parseConfidenceInput,
} from "@/modules/mastery-engine/confidence";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

describe("Phase C — confidence model", () => {
  it("maps numeric confidence 1–5 to canonical levels", () => {
    expect(numericToConfidence(1)).toBe("VERY_LOW");
    expect(numericToConfidence(2)).toBe("LOW");
    expect(numericToConfidence(3)).toBe("MEDIUM");
    expect(numericToConfidence(4)).toBe("HIGH");
    expect(numericToConfidence(5)).toBe("VERY_HIGH");
  });

  it("parses valid confidence input (numeric and canonical)", () => {
    expect(parseConfidenceInput(1)).toBe("VERY_LOW");
    expect(parseConfidenceInput(5)).toBe("VERY_HIGH");
    expect(parseConfidenceInput("MEDIUM")).toBe("MEDIUM");
    expect(parseConfidenceInput(undefined)).toBeNull();
    expect(parseConfidenceInput(null)).toBeNull();
  });

  it("rejects invalid confidence input", () => {
    expect(parseConfidenceInput(0)).toBeNull();
    expect(parseConfidenceInput(6)).toBeNull();
    expect(parseConfidenceInput(2.5)).toBeNull();
    expect(parseConfidenceInput("HIGH_CONFIDENCE")).toBeNull();
    expect(parseConfidenceInput("")).toBeNull();
  });

  it("assesses calibration with canonical confidence levels", () => {
    expect(assessConfidenceCalibration(false, "VERY_HIGH")).toBe("OVERCONFIDENT");
    expect(assessConfidenceCalibration(true, "VERY_LOW")).toBe("UNDERCONFIDENT");
    expect(assessConfidenceCalibration(true, "HIGH")).toBe("CALIBRATED");
    expect(assessConfidenceCalibration(true, null)).toBe("UNKNOWN");
  });
});

describe("Phase C — confidence persistence", () => {
  let userId: string;
  let questionId: string;
  let correctOptionId: string;

  beforeAll(async () => {
    const user = await prisma.user.findUnique({
      where: { email: "demo@pla.local" },
    });
    if (!user) throw new Error("Demo user not found — run db:seed first");
    userId = user.id;

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "understanding-income" },
      include: {
        learningItems: {
          include: { questions: { include: { answerOptions: true } } },
        },
      },
    });
    if (!lesson) throw new Error("Lesson not found");
    const quizItem = lesson.learningItems.find((i) => i.type === "QUIZ");
    if (!quizItem) throw new Error("Quiz item not found");
    const question = quizItem.questions[0];
    questionId = question.id;
    correctOptionId = question.answerOptions.find((o) => o.isCorrect)!.id;
  });

  it("persists confidenceLevel on QuizAttempt when provided", async () => {
    const { attempt, validation } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      "HIGH"
    );

    expect(validation.score).toBe(100);
    expect(attempt.confidenceLevel).toBe("HIGH");

    const row = await prisma.quizAttempt.findUnique({ where: { id: attempt.id } });
    expect(row?.confidenceLevel).toBe("HIGH");
  });

  it("stores null confidenceLevel when omitted (backward compatible)", async () => {
    const { attempt, validation } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId]
    );

    expect(validation.score).toBe(100);
    expect(attempt.confidenceLevel).toBeNull();
  });

  it("does not change scoring when confidence is provided", async () => {
    const withConfidence = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      numericToConfidence(3)
    );
    const withoutConfidence = await recordQuizAttempt(userId, questionId, [correctOptionId]);

    expect(withConfidence.validation.score).toBe(withoutConfidence.validation.score);
    expect(withConfidence.validation.isCorrect).toBe(withoutConfidence.validation.isCorrect);
  });
});

describe("Phase C — quiz attempt API confidence validation", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("rejects invalid confidenceLevel in payload", async () => {
    vi.doMock("@/auth", () => ({
      auth: vi.fn().mockResolvedValue({ user: { id: "user-1" } }),
    }));

    const { POST } = await import("@/app/api/quiz/attempt/route");
    const request = new Request("http://localhost/api/quiz/attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        learningItemId: "item-1",
        answers: [
          {
            questionId: "q-1",
            selectedOptionIds: ["opt-1"],
            confidenceLevel: 9,
          },
        ],
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it("accepts confidenceLevel 1–5 in payload schema", async () => {
    const { z } = await import("zod");
    const confidenceLevelSchema = z.union([
      z.number().int().min(1).max(5),
      z.enum(["VERY_LOW", "LOW", "MEDIUM", "HIGH", "VERY_HIGH"]),
    ]);

    for (const level of [1, 2, 3, 4, 5] as const) {
      expect(confidenceLevelSchema.safeParse(level).success).toBe(true);
      expect(parseConfidenceInput(level)).toBe(numericToConfidence(level));
    }
  });
});

describe("Phase C — protected bank and ECO guards", () => {
  it("keeps protected bank fingerprint unchanged", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("keeps ECO at 26 tasks", () => {
    expect(ECO_TASK_COUNT).toBe(26);
  });

  it("does not add Q201+ stems", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(keys.every((k) => /^pmp-exam-\d{3}$/.test(k))).toBe(true);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(200);
  });
});
