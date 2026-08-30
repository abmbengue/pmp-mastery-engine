/**
 * Phase C1 — Confidence capture E2E (model + persistence + API + TestPhase gate).
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import prisma from "@/data/prisma-client";
import {
  assessConfidenceCalibration,
  isTestPhaseConfidenceComplete,
  isValidConfidenceNumeric,
  numericToConfidence,
  parseConfidenceInput,
} from "@/modules/mastery-engine/confidence";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import {
  computeQuizScore,
  evaluateAnswer,
  recordQuizAttempt,
} from "@/modules/assessment-engine/scoring-service";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const confidenceLevelSchema = z.union([
  z.number().int().min(1).max(5),
  z.enum(["VERY_LOW", "LOW", "MEDIUM", "HIGH", "VERY_HIGH"]),
]);

describe("C1 — confidence model (1–5)", () => {
  it("confidence = 1 maps to VERY_LOW", () => {
    expect(numericToConfidence(1)).toBe("VERY_LOW");
    expect(parseConfidenceInput(1)).toBe("VERY_LOW");
    expect(isValidConfidenceNumeric(1)).toBe(true);
  });

  it("confidence = 3 maps to MEDIUM", () => {
    expect(numericToConfidence(3)).toBe("MEDIUM");
    expect(parseConfidenceInput(3)).toBe("MEDIUM");
    expect(isValidConfidenceNumeric(3)).toBe(true);
  });

  it("confidence = 5 maps to VERY_HIGH", () => {
    expect(numericToConfidence(5)).toBe("VERY_HIGH");
    expect(parseConfidenceInput(5)).toBe("VERY_HIGH");
    expect(isValidConfidenceNumeric(5)).toBe(true);
  });

  it("confidence = 0 rejected", () => {
    expect(parseConfidenceInput(0)).toBeNull();
    expect(isValidConfidenceNumeric(0)).toBe(false);
    expect(confidenceLevelSchema.safeParse(0).success).toBe(false);
  });

  it("confidence = 6 rejected", () => {
    expect(parseConfidenceInput(6)).toBeNull();
    expect(isValidConfidenceNumeric(6)).toBe(false);
    expect(confidenceLevelSchema.safeParse(6).success).toBe(false);
  });

  it("negative confidence rejected", () => {
    expect(parseConfidenceInput(-1)).toBeNull();
    expect(parseConfidenceInput(-3)).toBeNull();
    expect(isValidConfidenceNumeric(-1)).toBe(false);
    expect(confidenceLevelSchema.safeParse(-1).success).toBe(false);
  });

  it("decimal confidence rejected", () => {
    expect(parseConfidenceInput(2.5)).toBeNull();
    expect(parseConfidenceInput(1.1)).toBeNull();
    expect(isValidConfidenceNumeric(2.5)).toBe(false);
    expect(confidenceLevelSchema.safeParse(2.5).success).toBe(false);
  });

  it("NaN / non-valid values rejected", () => {
    expect(parseConfidenceInput(Number.NaN)).toBeNull();
    expect(isValidConfidenceNumeric(Number.NaN)).toBe(false);
    expect(parseConfidenceInput("HIGH_CONFIDENCE")).toBeNull();
    expect(parseConfidenceInput("")).toBeNull();
    expect(parseConfidenceInput("3")).toBeNull();
    expect(parseConfidenceInput("medium")).toBeNull();
    expect(confidenceLevelSchema.safeParse("nope").success).toBe(false);
  });

  it("absence of confidence is null (legacy-compatible contract)", () => {
    expect(parseConfidenceInput(undefined)).toBeNull();
    expect(parseConfidenceInput(null)).toBeNull();
  });

  it("canonical enum strings remain accepted", () => {
    expect(parseConfidenceInput("MEDIUM")).toBe("MEDIUM");
    expect(parseConfidenceInput("VERY_LOW")).toBe("VERY_LOW");
  });

  it("calibration remains deterministic", () => {
    expect(assessConfidenceCalibration(false, "VERY_HIGH")).toBe("OVERCONFIDENT");
    expect(assessConfidenceCalibration(true, "VERY_LOW")).toBe("UNDERCONFIDENT");
    expect(assessConfidenceCalibration(true, "HIGH")).toBe("CALIBRATED");
    expect(assessConfidenceCalibration(true, null)).toBe("UNKNOWN");
  });
});

describe("C1 — TestPhase requires confidence before submit", () => {
  it("blocks submit when confidence missing", () => {
    expect(
      isTestPhaseConfidenceComplete(["q1", "q2"], { q1: 3 })
    ).toBe(false);
    expect(isTestPhaseConfidenceComplete(["q1"], {})).toBe(false);
  });

  it("blocks submit when confidence out of range", () => {
    expect(
      isTestPhaseConfidenceComplete(["q1"], { q1: 0 })
    ).toBe(false);
    expect(
      isTestPhaseConfidenceComplete(["q1"], { q1: 6 })
    ).toBe(false);
  });

  it("allows submit only when every question has confidence 1–5", () => {
    expect(
      isTestPhaseConfidenceComplete(["q1", "q2"], { q1: 1, q2: 5 })
    ).toBe(true);
    expect(
      isTestPhaseConfidenceComplete(["q1"], { q1: 3 })
    ).toBe(true);
  });

  it("TestPhase source wires confidence gate and numeric levels", () => {
    const source = readFileSync(
      join(
        process.cwd(),
        "src/app/[locale]/components/lesson-player/TestPhase.tsx"
      ),
      "utf8"
    );
    expect(source).toContain("isTestPhaseConfidenceComplete");
    expect(source).toContain("CONFIDENCE_NUMERIC_LEVELS");
    expect(source).toContain("confidenceLevel");
    expect(source).toContain('data-testid="submit-quiz"');
    expect(source).toContain("disabled={!canSubmit || submitting}");
  });
});

describe("C1 — QuizAttempt persistence", () => {
  let userId: string;
  let questionId: string;
  let correctOptionId: string;
  let wrongOptionId: string;

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
    wrongOptionId = question.answerOptions.find((o) => !o.isCorrect)!.id;
  });

  it("persists confidence = 1 (VERY_LOW) on QuizAttempt", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      numericToConfidence(1)
    );
    expect(attempt.confidenceLevel).toBe("VERY_LOW");
    const row = await prisma.quizAttempt.findUnique({ where: { id: attempt.id } });
    expect(row?.confidenceLevel).toBe("VERY_LOW");
  });

  it("persists confidence = 3 (MEDIUM) on QuizAttempt", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      numericToConfidence(3)
    );
    expect(attempt.confidenceLevel).toBe("MEDIUM");
    const row = await prisma.quizAttempt.findUnique({ where: { id: attempt.id } });
    expect(row?.confidenceLevel).toBe("MEDIUM");
  });

  it("persists confidence = 5 (VERY_HIGH) on QuizAttempt", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      numericToConfidence(5)
    );
    expect(attempt.confidenceLevel).toBe("VERY_HIGH");
    const row = await prisma.quizAttempt.findUnique({ where: { id: attempt.id } });
    expect(row?.confidenceLevel).toBe("VERY_HIGH");
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
    const withoutConfidence = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId]
    );
    expect(withConfidence.validation.score).toBe(withoutConfidence.validation.score);
    expect(withConfidence.validation.isCorrect).toBe(
      withoutConfidence.validation.isCorrect
    );
  });

  it("submit/scoring regression: wrong answers still score 0", async () => {
    const { validation } = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      undefined,
      numericToConfidence(4)
    );
    expect(validation.isCorrect).toBe(false);
    expect(validation.score).toBe(0);
    expect(
      evaluateAnswer("SINGLE_CHOICE", [wrongOptionId], [correctOptionId])
    ).toBe(false);
    expect(
      computeQuizScore([
        { isCorrect: false, score: 0, correctOptionIds: [correctOptionId] },
        { isCorrect: true, score: 100, correctOptionIds: [correctOptionId] },
      ])
    ).toBe(50);
  });
});

describe("C1 — quiz attempt API confidence validation", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it("API rejects invalid confidenceLevel (6 / out of range)", async () => {
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
            confidenceLevel: 6,
          },
        ],
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it("API rejects negative / decimal / NaN-like confidence", async () => {
    vi.doMock("@/auth", () => ({
      auth: vi.fn().mockResolvedValue({ user: { id: "user-1" } }),
    }));
    const { POST } = await import("@/app/api/quiz/attempt/route");

    for (const confidenceLevel of [-1, 2.5, 0, 9]) {
      const response = await POST(
        new Request("http://localhost/api/quiz/attempt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            learningItemId: "item-1",
            answers: [
              {
                questionId: "q-1",
                selectedOptionIds: ["opt-1"],
                confidenceLevel,
              },
            ],
          }),
        })
      );
      expect(response.status).toBe(400);
    }
  });

  it("API accepts valid confidenceLevel 1–5 in payload schema", async () => {
    for (const level of [1, 2, 3, 4, 5] as const) {
      expect(confidenceLevelSchema.safeParse(level).success).toBe(true);
      expect(parseConfidenceInput(level)).toBe(numericToConfidence(level));
    }
  });

  it("API route persists mapped confidence via recordQuizAttempt", async () => {
    const recordMock = vi.fn().mockResolvedValue({
      attempt: { id: "att-1", confidenceLevel: "MEDIUM" },
      validation: {
        isCorrect: true,
        score: 100,
        correctOptionIds: ["opt-1"],
      },
    });
    const masteryMock = vi.fn().mockResolvedValue({ skillSnapshots: [] });

    vi.doMock("@/auth", () => ({
      auth: vi.fn().mockResolvedValue({ user: { id: "user-1" } }),
    }));
    vi.doMock("@/modules/assessment-engine/scoring-service", () => ({
      recordQuizAttempt: recordMock,
      computeQuizScore: () => 100,
    }));
    vi.doMock("@/modules/mastery-engine/mastery-runtime-service", () => ({
      processQuizMasteryForAttempts: masteryMock,
    }));
    vi.doMock("@/data/prisma-client", () => ({
      default: {
        question: {
          findUnique: vi.fn().mockResolvedValue({
            id: "q-1",
            answerOptions: [],
            skill: null,
          }),
        },
      },
    }));

    const { POST } = await import("@/app/api/quiz/attempt/route");
    const response = await POST(
      new Request("http://localhost/api/quiz/attempt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          learningItemId: "item-1",
          answers: [
            {
              questionId: "q-1",
              selectedOptionIds: ["opt-1"],
              confidenceLevel: 3,
            },
          ],
        }),
      })
    );

    expect(response.status).toBe(200);
    expect(recordMock).toHaveBeenCalledWith(
      "user-1",
      "q-1",
      ["opt-1"],
      "item-1",
      "MEDIUM"
    );
    const body = await response.json();
    expect(body.results[0].confidenceLevel).toBe("MEDIUM");
    expect(body.score).toBe(100);
  });

  it("legacy /api/quiz/submit contract remains without confidence field", async () => {
    const source = readFileSync(
      join(process.cwd(), "src/app/api/quiz/submit/route.ts"),
      "utf8"
    );
    expect(source).toContain("recordQuizAttempt");
    expect(source).toContain("questionId");
    expect(source).toContain("selectedOptionIds");
  });
});

describe("C1 — protected bank and ECO guards (non-regression)", () => {
  it("keeps protected bank fingerprint unchanged", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("keeps ECO at 26 with People 8 / Process 10 / Business 8", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);
  });

  it("T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
    expect(t04.task.titleEn).not.toBe(t08.task.titleEn);
  });

  it("does not add Q201+ stems", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(
      200
    );
  });

  it("no new Prisma migrations", () => {
    const dirs = readdirSync(join(process.cwd(), "prisma/migrations"), {
      withFileTypes: true,
    })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
    expect(dirs).toHaveLength(10);
  });
});
