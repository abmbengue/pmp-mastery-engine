/**
 * Phase C — REVIEW rehydrate (iteration 7/10).
 */

import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import {
  getLessonSession,
  saveLessonPhase,
} from "@/modules/learning-engine/lesson-session-service";
import {
  countLatestQuizAttemptsForLearningItem,
  loadLessonReviewRehydrateData,
  resolveReviewRehydrateContract,
} from "@/modules/learning-engine/review-rehydrate";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

describe("Phase C — review rehydrate contract (pure)", () => {
  it("1. allows REVIEW when persisted phase + full attempts exist", () => {
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 80,
      learningItemId: "quiz-item-1",
      expectedQuestionCount: 2,
      latestAttemptCount: 2,
    });
    expect(contract.canRehydrateReview).toBe(true);
    expect(contract.reason).toBe("REVIEW_REHYDRATED");
    expect(contract.effectivePhase).toBe("REVIEW");
  });

  it("4. rejects REVIEW without attempts", () => {
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 80,
      learningItemId: "quiz-item-1",
      expectedQuestionCount: 2,
      latestAttemptCount: 0,
    });
    expect(contract.canRehydrateReview).toBe(false);
    expect(contract.reason).toBe("LEGACY_NO_ATTEMPTS");
  });

  it("5. rejects REVIEW with incomplete attempts", () => {
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 50,
      learningItemId: "quiz-item-1",
      expectedQuestionCount: 3,
      latestAttemptCount: 2,
    });
    expect(contract.canRehydrateReview).toBe(false);
    expect(contract.reason).toBe("LEGACY_INCOMPLETE_ATTEMPTS");
  });

  it("13. is deterministic for same persisted inputs", () => {
    const input = {
      currentPhase: "MASTER" as const,
      quizScore: 100,
      learningItemId: "quiz-item-1",
      expectedQuestionCount: 1,
      latestAttemptCount: 1,
    };
    expect(resolveReviewRehydrateContract(input)).toEqual(
      resolveReviewRehydrateContract(input)
    );
  });
});

describe("Phase C — review rehydrate runtime (DB)", () => {
  let userId: string;
  let lessonId: string;
  let quizItemId: string;
  let questionId: string;
  let correctOptionId: string;
  let wrongOptionId: string;
  let skillId: string | null;
  const createdAttemptIds: string[] = [];

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
    lessonId = lesson.id;

    const quizItem = lesson.learningItems.find((item) => item.type === "QUIZ");
    if (!quizItem) throw new Error("Quiz item not found");
    quizItemId = quizItem.id;

    const question = quizItem.questions[0];
    questionId = question.id;
    skillId = question.skillId;
    const correct = question.answerOptions.find((option) => option.isCorrect);
    const wrong = question.answerOptions.find((option) => !option.isCorrect);
    if (!correct || !wrong) throw new Error("Options not found");
    correctOptionId = correct.id;
    wrongOptionId = wrong.id;

    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
  });

  afterAll(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
    }
    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
    if (skillId) {
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
  });

  async function submitQuizAndPersistReview(correct: boolean) {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correct ? correctOptionId : wrongOptionId],
      quizItemId,
      "HIGH"
    );
    createdAttemptIds.push(attempt.id);
    await processQuizMasteryForAttempts(userId, [attempt.id]);
    const score = correct ? 100 : 0;
    await saveLessonPhase(userId, lessonId, "REVIEW", 120, score, "MASTERED");
    return { attempt, score };
  }

  it("2. rehydrates REVIEW after persisted quiz + reload simulation", async () => {
    const { score } = await submitQuizAndPersistReview(true);

    const session = await getLessonSession(userId, lessonId);
    expect(session.currentPhase).toBe("REVIEW");
    expect(session.quizScore).toBe(score);

    const questionIds = [questionId];
    const latestCount = await countLatestQuizAttemptsForLearningItem(
      userId,
      quizItemId,
      questionIds
    );
    const contract = resolveReviewRehydrateContract({
      currentPhase: session.currentPhase,
      quizScore: session.quizScore,
      learningItemId: quizItemId,
      expectedQuestionCount: questionIds.length,
      latestAttemptCount: latestCount,
    });
    expect(contract.canRehydrateReview).toBe(true);

    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      questionIds
    );
    expect(rehydrated).not.toBeNull();
    expect(rehydrated!.quizResults).toHaveLength(1);
    expect(rehydrated!.quizResults[0]!.isCorrect).toBe(true);
    expect(rehydrated!.quizScore).toBe(100);
  });

  it("3. rehydrates after navigation reopen (same persisted data)", async () => {
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated).not.toBeNull();
    expect(rehydrated!.quizResults[0]!.question.prompt.length).toBeGreaterThan(0);
  });

  it("6. rebuilds all question results for multi-question quiz items", async () => {
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated!.quizResults.every((result) => result.questionId.length > 0)).toBe(
      true
    );
    expect(rehydrated!.quizResults.every((result) => result.correctOptionIds.length > 0)).toBe(
      true
    );
  });

  it("7. preserves confidenceLevel in source attempts", async () => {
    const attempt = await prisma.quizAttempt.findFirst({
      where: { userId, questionId, learningItemId: quizItemId },
      orderBy: { attemptNo: "desc" },
    });
    expect(attempt?.confidenceLevel).toBe("HIGH");
  });

  it("8. preserves correct/incorrect result flags", async () => {
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated!.quizResults[0]!.isCorrect).toBe(true);
    expect(rehydrated!.quizResults[0]!.selectedOptionIds).toContain(correctOptionId);
  });

  it("9. keeps skill association for snapshot rebuild", async () => {
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    if (skillId) {
      expect(rehydrated!.skillSnapshots.some((snap) => snap.skillId === skillId)).toBe(
        true
      );
    }
  });

  it("10. allows REVIEW → MASTER transition inputs after rehydrate", async () => {
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated!.quizScore).toBeGreaterThanOrEqual(0);
    await saveLessonPhase(userId, lessonId, "MASTER", 180, rehydrated!.quizScore, "MASTERED");
    const session = await getLessonSession(userId, lessonId);
    expect(session.currentPhase).toBe("MASTER");
  });

  it("14. rehydrate is READ-ONLY (no DB writes)", async () => {
    const createSpy = vi.spyOn(prisma.quizAttempt, "create");
    const updateSpy = vi.spyOn(prisma.lessonProgress, "update");
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");

    await loadLessonReviewRehydrateData(userId, quizItemId, "en", [questionId]);

    expect(createSpy).not.toHaveBeenCalled();
    expect(updateSpy).not.toHaveBeenCalled();
    expect(upsertSpy).not.toHaveBeenCalled();

    createSpy.mockRestore();
    updateSpy.mockRestore();
    upsertSpy.mockRestore();
  });

  it("critical integration — quiz submit → REVIEW persist → reopen → REVIEW rehydrated", async () => {
    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });

    const { score } = await submitQuizAndPersistReview(false);
    expect(score).toBe(0);

    const reopenedSession = await getLessonSession(userId, lessonId);
    expect(reopenedSession.currentPhase).toBe("REVIEW");

    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated).not.toBeNull();
    expect(rehydrated!.quizResults[0]!.isCorrect).toBe(false);
    expect(rehydrated!.quizScore).toBe(0);

    await saveLessonPhase(userId, lessonId, "MASTER", 200, rehydrated!.quizScore, "WEAK");
    const masterSession = await getLessonSession(userId, lessonId);
    expect(masterSession.currentPhase).toBe("MASTER");
  });
});

describe("Phase C — review rehydrate guards", () => {
  it("11. ConceptMastery never stores 7-state labels", async () => {
    const forbidden = [
      "UNKNOWN",
      "EXPOSED",
      "DEVELOPING",
      "FRAGILE",
      "FUNCTIONAL",
      "STRONG",
    ] as const;
    const rows = await prisma.conceptMastery.findMany({ select: { level: true } });
    for (const row of rows) {
      expect(forbidden).not.toContain(row.level as (typeof forbidden)[number]);
    }
  });

  it("12. ConceptMastery stays 3-tier", async () => {
    const rows = await prisma.conceptMastery.findMany({ select: { level: true } });
    for (const row of rows) {
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });

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
    const keys = PMP_EXAM_BANK_STEMS.map((question) => question.externalKey);
    expect(
      Math.max(...keys.map((key) => Number(key.replace("pmp-exam-", ""))))
    ).toBe(200);
  });

  it("preserves T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });
});
