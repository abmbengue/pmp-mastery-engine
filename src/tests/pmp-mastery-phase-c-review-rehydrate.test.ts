/**
 * Phase C7 — REVIEW rehydrate from persisted QuizAttempt rows.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
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
import { mapPersistedQuizAttemptsToLessonQuizResults } from "@/modules/learning-engine/quiz-result-mapper";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import { resolveAdaptiveTaskContinueLesson } from "@/modules/mastery-engine/pmp-study-progress";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

/** Mirrors lesson page.tsx fallback when rehydrate is unavailable */
function resolvePagePhaseAfterRehydrate(input: {
  currentPhase: "REVIEW" | "MASTER" | "TEST" | "LEARN" | "PRACTICE";
  contract: ReturnType<typeof resolveReviewRehydrateContract>;
  rehydrated: Awaited<ReturnType<typeof loadLessonReviewRehydrateData>>;
}): "REVIEW" | "MASTER" | "TEST" | "LEARN" | "PRACTICE" {
  if (input.contract.canRehydrateReview && input.rehydrated) {
    return input.contract.effectivePhase ?? input.currentPhase;
  }
  if (input.currentPhase === "REVIEW" || input.currentPhase === "MASTER") {
    return "TEST";
  }
  return input.currentPhase;
}

describe("C7 — review rehydrate contract (pure)", () => {
  it("1. allows REVIEW when phase + score + full attempts exist", () => {
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

  it("2. rejects when phase is not REVIEW/MASTER", () => {
    const contract = resolveReviewRehydrateContract({
      currentPhase: "TEST",
      quizScore: 80,
      learningItemId: "quiz-item-1",
      expectedQuestionCount: 1,
      latestAttemptCount: 1,
    });
    expect(contract.canRehydrateReview).toBe(false);
    expect(contract.reason).toBe("LEGACY_NO_PHASE");
  });

  it("3. rejects REVIEW without quiz score", () => {
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: null,
      learningItemId: "quiz-item-1",
      expectedQuestionCount: 1,
      latestAttemptCount: 1,
    });
    expect(contract.canRehydrateReview).toBe(false);
    expect(contract.reason).toBe("LEGACY_NO_SCORE");
  });

  it("4. rejects REVIEW without quiz learning item", () => {
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 80,
      learningItemId: null,
      expectedQuestionCount: 1,
      latestAttemptCount: 1,
    });
    expect(contract.canRehydrateReview).toBe(false);
    expect(contract.reason).toBe("LEGACY_NO_QUIZ_ITEM");
  });

  it("5. rejects REVIEW without attempts", () => {
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

  it("6. rejects REVIEW with incomplete attempts", () => {
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

  it("11. determinism — same inputs → same contract", () => {
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

describe("C7 — review rehydrate runtime (DB)", () => {
  let userId: string;
  let lessonId: string;
  let quizItemId: string;
  let questionId: string;
  let correctOptionId: string;
  let wrongOptionId: string;
  let skillId: string | null;
  const createdAttemptIds: string[] = [];
  const isolatedEmail = `c7-rehydrate-${Date.now()}@test.local`;

  beforeAll(async () => {
    const user = await prisma.user.create({
      data: {
        email: isolatedEmail,
        passwordHash: "test",
        name: "C7 Rehydrate User",
      },
    });
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
    if (!question) throw new Error("Question not found");
    questionId = question.id;
    skillId = question.skillId;
    const correct = question.answerOptions.find((option) => option.isCorrect);
    const wrong = question.answerOptions.find((option) => !option.isCorrect);
    if (!correct || !wrong) throw new Error("Options not found");
    correctOptionId = correct.id;
    wrongOptionId = wrong.id;

    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
  });

  afterEach(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
      createdAttemptIds.length = 0;
    }
    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
    if (skillId) {
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
  });

  afterAll(async () => {
    await prisma.quizAttempt.deleteMany({ where: { userId } });
    await prisma.lessonProgress.deleteMany({ where: { userId } });
    await prisma.conceptMastery.deleteMany({ where: { userId } });
    await prisma.user.deleteMany({ where: { email: isolatedEmail } });
  });

  async function submitQuizAndPersistReview(correct: boolean, confidence: "HIGH" | "MEDIUM" = "HIGH") {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correct ? correctOptionId : wrongOptionId],
      quizItemId,
      confidence
    );
    createdAttemptIds.push(attempt.id);
    await processQuizMasteryForAttempts(userId, [attempt.id]);
    const score = correct ? 100 : 0;
    await saveLessonPhase(userId, lessonId, "REVIEW", 120, score, correct ? "MASTERED" : "WEAK");
    return { attempt, score };
  }

  it("7. QuizAttempt → quiz results mapping", async () => {
    await submitQuizAndPersistReview(true);

    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated).not.toBeNull();
    expect(rehydrated!.quizResults).toHaveLength(1);
    expect(rehydrated!.quizResults[0]!.questionId).toBe(questionId);
    expect(rehydrated!.quizResults[0]!.question.prompt.length).toBeGreaterThan(0);
    expect(rehydrated!.quizResults[0]!.correctOptionIds).toContain(correctOptionId);
  });

  it("8. correct / incorrect flags from persisted attempts", async () => {
    await submitQuizAndPersistReview(false);

    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated!.quizResults[0]!.isCorrect).toBe(false);
    expect(rehydrated!.quizResults[0]!.selectedOptionIds).toContain(wrongOptionId);
  });

  it("9. score rebuilt from QuizAttempt rows", async () => {
    const { score } = await submitQuizAndPersistReview(true);
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated!.quizScore).toBe(score);
    expect(rehydrated!.quizScore).toBe(100);
  });

  it("10. skillSnapshots rebuilt (display-only 7-state + retention)", async () => {
    await submitQuizAndPersistReview(true, "HIGH");

    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    if (skillId) {
      const snap = rehydrated!.skillSnapshots.find((s) => s.skillId === skillId);
      expect(snap).toBeDefined();
      expect(snap!.masteryState).toBeDefined();
      expect(snap!.retention).toBeDefined();
      expect(typeof snap!.retention.retentionScore).toBe("number");
    }
  });

  it("12. reload REVIEW after navigation reopen", async () => {
    await submitQuizAndPersistReview(true);

    const session = await getLessonSession(userId, lessonId);
    expect(session.currentPhase).toBe("REVIEW");

    const latestCount = await countLatestQuizAttemptsForLearningItem(
      userId,
      quizItemId,
      [questionId]
    );
    const contract = resolveReviewRehydrateContract({
      currentPhase: session.currentPhase,
      quizScore: session.quizScore,
      learningItemId: quizItemId,
      expectedQuestionCount: 1,
      latestAttemptCount: latestCount,
    });
    expect(contract.canRehydrateReview).toBe(true);

    const first = await loadLessonReviewRehydrateData(userId, quizItemId, "en", [questionId]);
    const second = await loadLessonReviewRehydrateData(userId, quizItemId, "en", [questionId]);
    expect(first).toEqual(second);
    expect(first!.quizResults[0]!.isCorrect).toBe(true);
  });

  it("13. REVIEW → MASTER transition intact after rehydrate", async () => {
    const { score } = await submitQuizAndPersistReview(true);
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated!.quizScore).toBe(score);
    await saveLessonPhase(userId, lessonId, "MASTER", 180, rehydrated!.quizScore, "MASTERED");
    const session = await getLessonSession(userId, lessonId);
    expect(session.currentPhase).toBe("MASTER");
  });

  it("14. absence de QuizAttempt → loader null", async () => {
    await saveLessonPhase(userId, lessonId, "REVIEW", 60, 80, "LEARNING");
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated).toBeNull();
  });

  it("15. données insuffisantes → contract bloque rehydrate", async () => {
    await saveLessonPhase(userId, lessonId, "REVIEW", 60, 80, "LEARNING");
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 80,
      learningItemId: quizItemId,
      expectedQuestionCount: 2,
      latestAttemptCount: 0,
    });
    expect(contract.canRehydrateReview).toBe(false);
    expect(contract.reason).toBe("LEGACY_NO_ATTEMPTS");
  });

  it("16. fallback TEST when rehydrate impossible", async () => {
    await saveLessonPhase(userId, lessonId, "REVIEW", 60, 80, "LEARNING");
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 80,
      learningItemId: quizItemId,
      expectedQuestionCount: 1,
      latestAttemptCount: 0,
    });
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    const phase = resolvePagePhaseAfterRehydrate({
      currentPhase: "REVIEW",
      contract,
      rehydrated,
    });
    expect(phase).toBe("TEST");
  });

  it("17. read-only — aucun write QuizAttempt / ConceptMastery / LessonProgress", async () => {
    await submitQuizAndPersistReview(true);

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

  it("18. shared mapper — persisted attempts use quiz-result-mapper", async () => {
    await submitQuizAndPersistReview(true);

    const attempts = await prisma.quizAttempt.findMany({
      where: { userId, learningItemId: quizItemId, questionId },
      include: {
        question: {
          include: { answerOptions: true },
        },
      },
    });
    const mapped = mapPersistedQuizAttemptsToLessonQuizResults(
      attempts.map((a) => ({
        questionId: a.questionId,
        isCorrect: a.isCorrect,
        score: a.score,
        answers: a.answers,
        question: a.question,
      })),
      "en"
    );
    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated!.quizResults[0]!.isCorrect).toBe(mapped[0]!.isCorrect);
    expect(rehydrated!.quizResults[0]!.selectedOptionIds).toEqual(
      mapped[0]!.selectedOptionIds
    );
  });

  it("critical — TEST submit → REVIEW persist → reopen → REVIEW rehydrated → MASTER", async () => {
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

    await saveLessonPhase(userId, lessonId, "MASTER", 200, rehydrated!.quizScore, "WEAK");
    expect((await getLessonSession(userId, lessonId)).currentPhase).toBe("MASTER");
  });
});

describe("C7 — compatibilité C1–C6 (smoke)", () => {
  it("19. C1 confidence préservée dans QuizAttempt source", async () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/learning-engine/review-rehydrate.ts"),
      "utf8"
    );
    expect(source).toContain("confidenceLevel");
  });

  it("20. C2/C3/C5 primitives consommées par le loader", () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/learning-engine/review-rehydrate.ts"),
      "utf8"
    );
    expect(source).toContain("quizAttemptsToMasteryInputs");
    expect(source).toContain("buildSkillMasterySnapshotViews");
    expect(source).not.toContain("updateConceptMastery");
    expect(source).not.toContain("buildWeaknessSignals");
  });

  it("21. C6 adaptive resolver reste indépendant du rehydrate", () => {
    const rehydrateSource = readFileSync(
      join(process.cwd(), "src/modules/learning-engine/review-rehydrate.ts"),
      "utf8"
    );
    expect(rehydrateSource).not.toContain("resolveAdaptiveTaskContinueLesson");
    const taskView = buildStudyTaskView("PEOPLE-T01");
    expect(
      resolveAdaptiveTaskContinueLesson(taskView.lessons, {}, null)?.reason
    ).toBe("FIRST_INCOMPLETE_NO_PROGRESS");
  });
});

describe("C7 — protected bank and schema guards", () => {
  it("22. Q001–Q200 fingerprint inchangé", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("23. ECO = 26", () => {
    expect(ECO_TASK_COUNT).toBe(26);
  });

  it("24. Q201+ absent", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(200);
  });

  it("25. T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });

  it("26. migrations inchangées (10)", () => {
    const migrations = readdirSync(join(process.cwd(), "prisma/migrations"), {
      withFileTypes: true,
    })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    expect(migrations).toHaveLength(10);
  });

  it("27. ConceptMastery 3-tier uniquement", async () => {
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
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });
});
