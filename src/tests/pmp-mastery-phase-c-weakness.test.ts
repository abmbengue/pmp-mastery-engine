/**
 * Phase C — weakness wiring after lesson quiz (iteration 3/10).
 */

import { beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import * as progressService from "@/modules/learning-engine/progress-service";
import {
  quizAttemptToMasteryInput,
  quizAttemptsToMasteryInputs,
} from "@/modules/mastery-engine/attempt-adapter";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import {
  buildWeaknessSignals,
  computeWeightedPerformance,
} from "@/modules/mastery-engine/weakness-model";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

describe("Phase C — attempt adapter", () => {
  const answeredAt = new Date("2026-08-28T12:00:00Z");

  const baseQuestion = {
    id: "q-1",
    externalKey: "pmp-exam-001",
    skillId: "skill-db-1",
    conceptSlug: "knowledge-transfer",
    ecoTaskCode: "PE-07",
    examDifficulty: "MEDIUM" as const,
    difficulty: 2,
    learningObjective: "APPLY" as const,
    masteryMetadata: {
      ecoTaskId: "PEOPLE-T07",
      primaryConceptId: "knowledge-transfer",
      primarySkillId: "skill-enable-knowledge-transfer",
      cognitiveLevel: "APPLICATION",
      difficulty: "MEDIUM",
      misconceptionIds: ["mc-risk-issue"],
    },
  };

  it("maps correct/incorrect attempts with metadata", () => {
    const correct = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: true,
        confidenceLevel: "HIGH",
        answeredAt,
      },
      baseQuestion
    );
    expect(correct.correct).toBe(true);
    expect(correct.skillId).toBe("skill-db-1");
    expect(correct.conceptId).toBe("knowledge-transfer");
    expect(correct.ecoTaskId).toBe("PEOPLE-T07");
    expect(correct.confidence).toBe("HIGH");
    expect(correct.cognitiveLevel).toBe("APPLICATION");

    const incorrect = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: false,
        confidenceLevel: "VERY_HIGH",
        answeredAt,
      },
      baseQuestion
    );
    expect(incorrect.correct).toBe(false);
    expect(incorrect.confidence).toBe("VERY_HIGH");
  });

  it("accepts null confidence", () => {
    const input = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: true,
        confidenceLevel: null,
        answeredAt,
      },
      baseQuestion
    );
    expect(input.confidence).toBeNull();
  });

  it("preserves one observation per question for same skill aggregation", () => {
    const inputs = quizAttemptsToMasteryInputs(
      [
        {
          questionId: "q-1",
          isCorrect: false,
          confidenceLevel: "MEDIUM",
          answeredAt,
        },
        {
          questionId: "q-2",
          isCorrect: false,
          confidenceLevel: "LOW",
          answeredAt: new Date("2026-08-28T12:01:00Z"),
        },
      ],
      {
        "q-1": { ...baseQuestion, id: "q-1" },
        "q-2": { ...baseQuestion, id: "q-2", skillId: "skill-db-1" },
      }
    );
    expect(inputs).toHaveLength(2);
    expect(inputs.every((i) => i.skillId === "skill-db-1")).toBe(true);
    expect(computeWeightedPerformance(inputs)).toBeLessThan(70);
  });
});

describe("Phase C — weakness-model integration (canonical)", () => {
  it("produces a WEAK skill signal below 70% weighted performance", () => {
    const signals = buildWeaknessSignals([
      {
        correct: false,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        skillId: "skill-db-weak",
        answeredAt: new Date(),
        confidence: "VERY_HIGH",
      },
      {
        correct: false,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        skillId: "skill-db-weak",
        answeredAt: new Date(),
        confidence: "HIGH",
      },
    ]);
    expect(signals.some((s) => s.skillId === "skill-db-weak")).toBe(true);
    expect(signals[0]?.priority).toBe(1);
  });

  it("does not emit skill weakness when performance is strong", () => {
    const signals = buildWeaknessSignals([
      {
        correct: true,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        skillId: "skill-db-strong",
        answeredAt: new Date(),
        confidence: "HIGH",
      },
    ]);
    expect(signals.some((s) => s.skillId === "skill-db-strong")).toBe(false);
  });
});

describe("Phase C — mastery runtime (DB)", () => {
  let userId: string;
  let questionId: string;
  let correctOptionId: string;
  let wrongOptionId: string;
  let skillId: string | null;

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
    skillId = question.skillId;
    const correct = question.answerOptions.find((o) => o.isCorrect);
    const wrong = question.answerOptions.find((o) => !o.isCorrect);
    if (!correct || !wrong) throw new Error("Options not found");
    correctOptionId = correct.id;
    wrongOptionId = wrong.id;
  });

  it("calls buildWeaknessSignals via runtime and returns weakness signals", async () => {
    const spy = vi.spyOn(
      await import("@/modules/mastery-engine/weakness-model"),
      "buildWeaknessSignals"
    );

    const { attempt } = await recordQuizAttempt(userId, questionId, [wrongOptionId], undefined, "VERY_HIGH");
    const result = await processQuizMasteryForAttempts(userId, [attempt.id]);

    expect(spy).toHaveBeenCalled();
    expect(Array.isArray(result.weaknessSignals)).toBe(true);
    spy.mockRestore();
  });

  it("upserts ConceptMastery once per skill for a batch observation", async () => {
    const upsertSpy = vi.spyOn(progressService, "updateConceptMastery");

    const first = await recordQuizAttempt(userId, questionId, [correctOptionId], undefined, "MEDIUM");
    const second = await recordQuizAttempt(userId, questionId, [correctOptionId], undefined, "HIGH");

    await processQuizMasteryForAttempts(userId, [first.attempt.id, second.attempt.id]);

    if (skillId) {
      const callsForSkill = upsertSpy.mock.calls.filter((c) => c[1] === skillId);
      expect(callsForSkill).toHaveLength(1);
    }

    upsertSpy.mockRestore();
  });

  it("persists ConceptMastery from runtime without recordQuizAttempt writing mastery", async () => {
    const { attempt, validation } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      "HIGH"
    );
    expect(validation.score).toBe(100);

    await processQuizMasteryForAttempts(userId, [attempt.id]);

    if (skillId) {
      const mastery = await prisma.conceptMastery.findUnique({
        where: { userId_skillId: { userId, skillId } },
      });
      expect(mastery?.level).toBeDefined();
    }
  });

  it("keeps historical scoring unchanged (0/100 per question)", async () => {
    const wrong = await recordQuizAttempt(userId, questionId, [wrongOptionId]);
    expect(wrong.validation.score).toBe(0);
    expect(wrong.validation.isCorrect).toBe(false);

    const right = await recordQuizAttempt(userId, questionId, [correctOptionId]);
    expect(right.validation.score).toBe(100);
    expect(right.validation.isCorrect).toBe(true);
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
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(200);
  });

  it("preserves T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
    expect(t04.task.titleEn).toMatch(/stakeholder/i);
    expect(t07.task.titleEn).toMatch(/knowledge transfer/i);
    expect(t08.task.titleEn).toMatch(/communication/i);
  });
});
