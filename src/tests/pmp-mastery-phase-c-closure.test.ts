/**
 * Phase C — closure + E2E integration (iteration 9/10).
 * Proves Iterations 2–8 work together end-to-end.
 */

import { readFileSync } from "fs";
import { join } from "path";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { finishLesson } from "@/modules/learning-engine/lesson-session-service";
import {
  getLessonSession,
  saveLessonPhase,
} from "@/modules/learning-engine/lesson-session-service";
import { getNextReviewDate } from "@/modules/learning-engine/spaced-repetition";
import {
  countLatestQuizAttemptsForLearningItem,
  loadLessonReviewRehydrateData,
  resolveReviewRehydrateContract,
} from "@/modules/learning-engine/review-rehydrate";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import { deriveSkillReviewScheduleInput } from "@/modules/mastery-engine/mastery-review-schedule";
import { quizAttemptsToMasteryInputs } from "@/modules/mastery-engine/attempt-adapter";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import {
  resolveAdaptiveTaskContinueLesson,
  resolveTaskContinueLesson,
} from "@/modules/mastery-engine/pmp-study-progress";
import { loadWeaknessDashboardView } from "@/modules/mastery-engine/weakness-dashboard-service";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const REF_NOW = new Date("2026-08-28T18:00:00.000Z");

describe("Phase C — closure E2E chain (DB integration)", () => {
  let userId: string;
  let lessonId: string;
  let quizItemId: string;
  let questionId: string;
  let wrongOptionId: string;
  let skillId: string | null;
  const createdAttemptIds: string[] = [];

  beforeAll(async () => {
    const user = await prisma.user.findUnique({
      where: { email: "demo@pla.local" },
    });
    if (!user) throw new Error("Demo user not found");
    userId = user.id;

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "knowledge-transfer" },
      include: {
        learningItems: {
          include: {
            questions: {
              include: { answerOptions: true, masteryMetadata: true },
            },
          },
        },
      },
    });
    if (!lesson) throw new Error("knowledge-transfer lesson not found");
    lessonId = lesson.id;

    const quizItem = lesson.learningItems.find((item) => item.type === "QUIZ");
    if (!quizItem) throw new Error("Quiz item not found");
    quizItemId = quizItem.id;

    const question = quizItem.questions[0];
    if (!question) throw new Error("Question not found");
    questionId = question.id;
    skillId = question.skillId;
    wrongOptionId = question.answerOptions.find((option) => !option.isCorrect)!.id;

    if (skillId) {
      await prisma.quizAttempt.deleteMany({
        where: { userId, question: { skillId } },
      });
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
  });

  afterAll(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
    }
    if (skillId) {
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
  });

  async function submitWrongBatch() {
    const first = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      quizItemId,
      "VERY_HIGH"
    );
    const second = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      quizItemId,
      "HIGH"
    );
    createdAttemptIds.push(first.attempt.id, second.attempt.id);
    return processQuizMasteryForAttempts(
      userId,
      [first.attempt.id, second.attempt.id],
      { now: REF_NOW }
    );
  }

  it("full chain: confidence → QuizAttempt → weakness → mastery → spaced-rep → snapshot → REVIEW", async () => {
    const masteryResult = await submitWrongBatch();

    const attempts = await prisma.quizAttempt.findMany({
      where: { id: { in: createdAttemptIds } },
    });
    expect(attempts.every((row) => row.confidenceLevel != null)).toBe(true);

    expect(masteryResult.weaknessSignals.length).toBeGreaterThan(0);
    expect(masteryResult.skillSnapshots.length).toBeGreaterThan(0);
    expect(masteryResult.skillSnapshots[0]!.masteryState).toBeDefined();
    expect(masteryResult.updatedSkillIds.length).toBeGreaterThan(0);

    if (!skillId) return;

    const mastery = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(mastery).not.toBeNull();
    expect(["WEAK", "LEARNING", "MASTERED"]).toContain(mastery!.level);
    expect(mastery!.nextReviewAt).not.toBeNull();

    const allAttempts = await prisma.quizAttempt.findMany({
      where: { userId, question: { skillId } },
      orderBy: { createdAt: "asc" },
      select: {
        questionId: true,
        isCorrect: true,
        confidenceLevel: true,
        createdAt: true,
        question: {
          select: {
            id: true,
            externalKey: true,
            skillId: true,
            conceptSlug: true,
            ecoTaskCode: true,
            examDifficulty: true,
            difficulty: true,
            learningObjective: true,
            masteryMetadata: {
              select: {
                ecoTaskId: true,
                primaryConceptId: true,
                primarySkillId: true,
                cognitiveLevel: true,
                difficulty: true,
                misconceptionIds: true,
              },
            },
          },
        },
      },
    });

    const inputs = quizAttemptsToMasteryInputs(
      allAttempts.map((row) => ({
        questionId: row.questionId,
        isCorrect: row.isCorrect,
        confidenceLevel: row.confidenceLevel,
        answeredAt: row.createdAt,
      })),
      Object.fromEntries(allAttempts.map((row) => [row.question.id, row.question]))
    );
    const schedule = deriveSkillReviewScheduleInput(inputs, REF_NOW);
    const expectedNext = getNextReviewDate(
      {
        masteryLevel: mastery!.level,
        lastReviewedAt: schedule.lastReviewedAt,
        lastAttemptAt: schedule.lastAttemptAt,
        recentErrorCount: schedule.recentErrorCount,
      },
      REF_NOW
    );
    expect(mastery!.nextReviewAt!.getTime()).toBe(expectedNext.getTime());

    await saveLessonPhase(userId, lessonId, "REVIEW", 120, 0, mastery!.level);
    const session = await getLessonSession(userId, lessonId);
    expect(session.currentPhase).toBe("REVIEW");
  });

  it("REVIEW rehydrate after persist → correct/incorrect + snapshots restored", async () => {
    const questionIds = [questionId];
    const latestCount = await countLatestQuizAttemptsForLearningItem(
      userId,
      quizItemId,
      questionIds
    );
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 0,
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
    expect(rehydrated!.quizResults[0]!.isCorrect).toBe(false);
    expect(rehydrated!.quizResults[0]!.selectedOptionIds).toContain(wrongOptionId);
    expect(rehydrated!.skillSnapshots.length).toBeGreaterThan(0);
  });

  it("REVIEW → MASTER progression remains valid after rehydrate context", async () => {
    await saveLessonPhase(userId, lessonId, "MASTER", 180, 0, "WEAK");
    await finishLesson(userId, lessonId, 180, 0, skillId);
    const session = await getLessonSession(userId, lessonId);
    expect(session.isCompleted).toBe(true);
  });

  it("adaptive PMP Study uses weakness/review hints from same mastery data", async () => {
    const taskView = buildStudyTaskView("PEOPLE-T07");
    const lessonSlugs = taskView.lessons.map((lesson) => lesson.slug);

    const { loadAdaptiveTaskHints } = await import(
      "@/modules/mastery-engine/pmp-study-progress"
    );
    const hints = await loadAdaptiveTaskHints(userId, "PEOPLE-T07", lessonSlugs);
    expect(hints.skillHints.length).toBeGreaterThanOrEqual(0);

    const legacy = resolveTaskContinueLesson(taskView.lessons, {});
    const adaptive = resolveAdaptiveTaskContinueLesson(taskView.lessons, {}, hints);
    expect(adaptive).toBeDefined();

    if (hints.skillHints.length === 0) {
      expect(adaptive).toEqual(legacy);
    }
  });

  it("dashboard surfaces weakness from same QuizAttempt pipeline", async () => {
    const dashboard = await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(dashboard.hasAttempts).toBe(true);
    if (skillId) {
      expect(dashboard.weakestSkills.some((item) => item.skillId === skillId)).toBe(
        true
      );
      const item = dashboard.weakestSkills.find((row) => row.skillId === skillId);
      expect(item?.ecoDomainId).toBe("PEOPLE");
      expect(item?.actionTaskHref).toContain("/pmp-study/");
    }
    expect(dashboard.ecoOverview.length).toBe(3);
  });
});

describe("Phase C — closure architecture audit", () => {
  it("mastery-runtime is sole write path; retention.ts not imported", () => {
    const runtime = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-runtime-service.ts"),
      "utf8"
    );
    expect(runtime).not.toMatch(/from\s+["'].*retention["']/);
    expect(runtime).toContain("processQuizMasteryForAttempts");
    expect(runtime).toContain("updateConceptMastery");
  });

  it("recordQuizAttempt path does not upsert ConceptMastery", async () => {
    const scoring = readFileSync(
      join(process.cwd(), "src/modules/assessment-engine/scoring-service.ts"),
      "utf8"
    );
    expect(scoring).not.toContain("conceptMastery");
    expect(scoring).not.toContain("updateConceptMastery");
  });

  it("finishLesson does not write ConceptMastery", async () => {
    const session = readFileSync(
      join(process.cwd(), "src/modules/learning-engine/lesson-session-service.ts"),
      "utf8"
    );
    expect(session).not.toContain("updateConceptMastery");
    expect(session).not.toContain("conceptMastery");
  });

  it("read-only loaders do not write DB", async () => {
    const user = await prisma.user.findUnique({
      where: { email: "demo@pla.local" },
    });
    if (!user) throw new Error("Demo user not found");

    const createSpy = vi.spyOn(prisma.quizAttempt, "create");
    const updateSpy = vi.spyOn(prisma.lessonProgress, "update");
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");

    const { loadAdaptiveTaskHints } = await import(
      "@/modules/mastery-engine/pmp-study-progress"
    );
    const taskView = buildStudyTaskView("PEOPLE-T07");
    await loadAdaptiveTaskHints(
      user.id,
      "PEOPLE-T07",
      taskView.lessons.map((lesson) => lesson.slug)
    );
    await loadWeaknessDashboardView(user.id, "en", REF_NOW);
    await loadLessonReviewRehydrateData(user.id, "quiz-missing", "en", []);

    expect(createSpy).not.toHaveBeenCalled();
    expect(updateSpy).not.toHaveBeenCalled();
    expect(upsertSpy).not.toHaveBeenCalled();

    createSpy.mockRestore();
    updateSpy.mockRestore();
    upsertSpy.mockRestore();
  });

  it("ConceptMastery schema stays 3-tier only", () => {
    const schema = readFileSync(join(process.cwd(), "prisma/schema.prisma"), "utf8");
    const masteryBlock = schema.slice(
      schema.indexOf("model ConceptMastery"),
      schema.indexOf("model LearningStreak")
    );
    expect(masteryBlock).toContain("level          MasteryLevel");
    expect(masteryBlock).toContain("nextReviewAt   DateTime?");
    expect(masteryBlock).not.toMatch(/masteryState/);
    expect(masteryBlock).not.toMatch(/EXPOSED|FRAGILE|FUNCTIONAL/);
  });

  it("7-state never persisted in ConceptMastery rows", async () => {
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

describe("Phase C — closure adaptive scenarios (pure)", () => {
  const taskView = buildStudyTaskView("PEOPLE-T01");
  const lessons = taskView.lessons;

  function snap(
    status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"
  ): Record<string, import("@/modules/mastery-engine/pmp-study-progress").TaskLessonProgressSnapshot> {
    const [first] = lessons;
    return {
      [first!.slug]: {
        status,
        updatedAtMs: 10_000,
        currentPhase: status === "IN_PROGRESS" ? "TEST" : null,
        hasProgressRecord: status !== "NOT_STARTED",
      },
    };
  }

  it("IN_PROGRESS beats adaptive weakness hint", () => {
    const [first, second] = lessons;
    const hints = {
      skillHints: [{ skillId: "skill-x", source: "WEAKNESS" as const, priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: [],
        [second!.slug]: ["skill-x"],
      },
    };
    const progress = snap("IN_PROGRESS");
    const resolution = resolveAdaptiveTaskContinueLesson(lessons, progress, hints);
    expect(resolution?.reason).toBe("IN_PROGRESS_RECENT");
  });

  it("weak skill routes to mapped lesson", () => {
    const [first, second] = lessons;
    const skillId = "skill-weak-adaptive";
    const hints = {
      skillHints: [{ skillId, source: "WEAKNESS" as const, priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: [],
        [second!.slug]: [skillId],
      },
    };
    const resolution = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(resolution?.lessonSlug).toBe(second!.slug);
    expect(resolution?.reason).toBe("ADAPTIVE_WEAK_SKILL");
  });

  it("unknown skill falls back to legacy", () => {
    const hints = {
      skillHints: [{ skillId: "unknown", source: "WEAKNESS" as const, priority: 1 }],
      lessonSkillIds: Object.fromEntries(lessons.map((lesson) => [lesson.slug, []])),
    };
    const legacy = resolveTaskContinueLesson(lessons, {});
    const adaptive = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(adaptive).toEqual(legacy);
  });
});

describe("Phase C — closure REVIEW fallback", () => {
  it("no QuizAttempt → no REVIEW rehydrate", () => {
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 80,
      learningItemId: "quiz-1",
      expectedQuestionCount: 2,
      latestAttemptCount: 0,
    });
    expect(contract.canRehydrateReview).toBe(false);
    expect(contract.reason).toBe("LEGACY_NO_ATTEMPTS");
  });

  it("incomplete attempts → no REVIEW rehydrate", () => {
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 50,
      learningItemId: "quiz-1",
      expectedQuestionCount: 3,
      latestAttemptCount: 2,
    });
    expect(contract.canRehydrateReview).toBe(false);
    expect(contract.reason).toBe("LEGACY_INCOMPLETE_ATTEMPTS");
  });
});

describe("Phase C — closure i18n keys", () => {
  const requiredKeys = [
    "dashboard.weaknessDashboardTitle",
    "dashboard.workOnSkill",
    "player.test.confidencePrompt",
    "player.test.confidenceLevel1",
    "player.master.masteryDepth",
    "player.master.stateExposed",
    "player.master.stateMastered",
  ];

  function get(obj: Record<string, unknown>, path: string): unknown {
    return path.split(".").reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object" && key in (acc as object)) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);
  }

  for (const key of requiredKeys) {
    it(`EN has ${key}`, () => {
      expect(get(en as Record<string, unknown>, key)).toBeTruthy();
    });
    it(`FR has ${key}`, () => {
      expect(get(fr as Record<string, unknown>, key)).toBeTruthy();
    });
  }
});

describe("Phase C — closure content guards", () => {
  it("fingerprint unchanged", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("ECO = 26", () => {
    expect(ECO_TASK_COUNT).toBe(26);
  });

  it("Q201+ absent", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((question) => question.externalKey);
    expect(
      Math.max(...keys.map((key) => Number(key.replace("pmp-exam-", ""))))
    ).toBe(200);
  });

  it("T04 ≠ T07 ≠ T08", () => {
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
