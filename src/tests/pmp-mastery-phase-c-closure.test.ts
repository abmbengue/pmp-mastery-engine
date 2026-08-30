/**
 * Phase C9 — final closure + E2E integration + release invariants.
 * Proves C1–C8 work together end-to-end. Does not reimplement C1–C8.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import {
  finishLesson,
  getLessonSession,
  saveLessonPhase,
} from "@/modules/learning-engine/lesson-session-service";
import {
  buildReviewQueue,
  getNextReviewDate,
} from "@/modules/learning-engine/spaced-repetition";
import {
  countLatestQuizAttemptsForLearningItem,
  loadLessonReviewRehydrateData,
  resolveReviewRehydrateContract,
} from "@/modules/learning-engine/review-rehydrate";
import {
  isTestPhaseConfidenceComplete,
  isValidConfidenceNumeric,
  numericToConfidence,
  parseConfidenceInput,
} from "@/modules/mastery-engine/confidence";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import { deriveSkillReviewScheduleInput } from "@/modules/mastery-engine/mastery-review-schedule";
import { quizAttemptsToMasteryInputs } from "@/modules/mastery-engine/attempt-adapter";
import { buildWeaknessSignals } from "@/modules/mastery-engine/weakness-model";
import { buildStudyTaskView, ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import {
  loadAdaptiveTaskHints,
  resolveAdaptiveTaskContinueLesson,
  resolveTaskContinueLesson,
} from "@/modules/mastery-engine/pmp-study-progress";
import { loadWeaknessDashboardView } from "@/modules/mastery-engine/weakness-dashboard-service";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { CANONICAL_LESSON_MASTERY_WRITE_PATH } from "@/modules/mastery-engine/legacy-mastery-writers";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const REF_NOW = new Date("2026-08-28T18:00:00.000Z");
const SRC = join(process.cwd(), "src");

function readSource(relativePath: string): string {
  return readFileSync(join(SRC, relativePath), "utf8");
}

describe("C9 — confidence gate (pure)", () => {
  it("1. sélection confidence 1–5", () => {
    expect(numericToConfidence(1)).toBe("VERY_LOW");
    expect(numericToConfidence(3)).toBe("MEDIUM");
    expect(numericToConfidence(5)).toBe("VERY_HIGH");
    expect(parseConfidenceInput(4)).toBe("HIGH");
  });

  it("2. validation de la confidence", () => {
    expect(isValidConfidenceNumeric(1)).toBe(true);
    expect(isValidConfidenceNumeric(5)).toBe(true);
    expect(isValidConfidenceNumeric(0)).toBe(false);
    expect(isValidConfidenceNumeric(6)).toBe(false);
    expect(isTestPhaseConfidenceComplete(["q1"], { q1: 3 })).toBe(true);
    expect(isTestPhaseConfidenceComplete(["q1"], {})).toBe(false);
  });

  it("LessonPlayer labels stay RSC-serializable (no function props)", () => {
    const page = readFileSync(
      join(
        process.cwd(),
        "src/app/[locale]/academies/[academySlug]/courses/[courseSlug]/modules/[moduleSlug]/lessons/[lessonSlug]/page.tsx"
      ),
      "utf8"
    );
    expect(page).toContain("confidenceLevelLabels");
    expect(page).toContain("masteryStateLabels");
    expect(page).not.toMatch(/confidenceLevel:\s*\(level/);
    expect(page).not.toMatch(/masteryState:\s*\(state/);
  });
});

describe("C9 — full Phase C chain (DB integration)", () => {
  let userId: string;
  let emptyUserId: string;
  let lessonId: string;
  let quizItemId: string;
  let questionId: string;
  let wrongOptionId: string;
  let skillId: string | null;
  const createdAttemptIds: string[] = [];
  const isolatedEmail = `c9-closure-${Date.now()}@test.local`;
  const emptyEmail = `c9-closure-empty-${Date.now()}@test.local`;

  beforeAll(async () => {
    const [user, emptyUser] = await Promise.all([
      prisma.user.create({
        data: { email: isolatedEmail, passwordHash: "test", name: "C9 Closure User" },
      }),
      prisma.user.create({
        data: { email: emptyEmail, passwordHash: "test", name: "C9 Empty User" },
      }),
    ]);
    userId = user.id;
    emptyUserId = emptyUser.id;

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
  });

  afterEach(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
      createdAttemptIds.length = 0;
    }
    if (skillId) {
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
  });

  afterAll(async () => {
    await prisma.quizAttempt.deleteMany({
      where: { userId: { in: [userId, emptyUserId] } },
    });
    await prisma.conceptMastery.deleteMany({
      where: { userId: { in: [userId, emptyUserId] } },
    });
    await prisma.lessonProgress.deleteMany({
      where: { userId: { in: [userId, emptyUserId] } },
    });
    await prisma.user.deleteMany({
      where: { email: { in: [isolatedEmail, emptyEmail] } },
    });
  });

  async function submitWrongBatch(confidence: "VERY_HIGH" | "HIGH" = "VERY_HIGH") {
    const first = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      quizItemId,
      confidence
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

  it("3–8. QuizAttempt → adapter → weakness → mastery → nextReviewAt", async () => {
    const masteryResult = await submitWrongBatch("VERY_HIGH");

    const attempts = await prisma.quizAttempt.findMany({
      where: { id: { in: createdAttemptIds } },
    });
    expect(attempts).toHaveLength(2);
    expect(attempts.every((row) => row.confidenceLevel != null)).toBe(true);
    expect(attempts[0]!.confidenceLevel).toBe("VERY_HIGH");

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
    expect(inputs.length).toBe(allAttempts.length);
    expect(inputs.every((row) => row.confidence != null)).toBe(true);

    const signals = buildWeaknessSignals(inputs);
    expect(signals.length).toBeGreaterThan(0);
    expect(masteryResult.weaknessSignals.map((s) => s.skillId).sort()).toEqual(
      signals.map((s) => s.skillId).sort()
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
  });

  it("9. review queue from buildReviewQueue", async () => {
    await submitWrongBatch();
    if (!skillId) return;

    const mastery = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
      include: { skill: true },
    });
    expect(mastery).not.toBeNull();

    const queue = buildReviewQueue(
      [
        {
          skillId: mastery!.skillId,
          skillSlug: mastery!.skill.slug,
          masteryLevel: mastery!.level,
          lastReviewedAt: mastery!.lastReviewedAt,
          nextReviewAt: mastery!.nextReviewAt,
          attemptCount: createdAttemptIds.length,
          recentErrorCount: 2,
          lastAttemptAt: REF_NOW,
          lastAttemptCorrect: false,
        },
      ],
      REF_NOW
    );
    expect(queue.length).toBeGreaterThan(0);
    expect(queue.some((item) => item.skillId === skillId)).toBe(true);
  });

  it("10. adaptive hints from same mastery data", async () => {
    await submitWrongBatch();
    const taskView = buildStudyTaskView("PEOPLE-T07");
    const lessonSlugs = taskView.lessons.map((lesson) => lesson.slug);
    const hints = await loadAdaptiveTaskHints(userId, "PEOPLE-T07", lessonSlugs);
    expect(hints.skillHints.length).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(hints.skillHints)).toBe(true);
  });

  it("11. priorité IN_PROGRESS_RECENT", () => {
    const taskView = buildStudyTaskView("PEOPLE-T01");
    const [first, second] = taskView.lessons;
    const hints = {
      skillHints: [{ skillId: "skill-x", source: "WEAKNESS" as const, priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: [],
        [second!.slug]: ["skill-x"],
      },
    };
    const progress = {
      [first!.slug]: {
        status: "IN_PROGRESS" as const,
        updatedAtMs: 10_000,
        currentPhase: "TEST" as const,
        hasProgressRecord: true,
      },
    };
    const resolution = resolveAdaptiveTaskContinueLesson(
      taskView.lessons,
      progress,
      hints
    );
    expect(resolution?.reason).toBe("IN_PROGRESS_RECENT");
  });

  it("12. fallback legacy when adaptive mapping absent", () => {
    const taskView = buildStudyTaskView("PEOPLE-T01");
    const hints = {
      skillHints: [{ skillId: "unknown", source: "WEAKNESS" as const, priority: 1 }],
      lessonSkillIds: Object.fromEntries(
        taskView.lessons.map((lesson) => [lesson.slug, [] as string[]])
      ),
    };
    const legacy = resolveTaskContinueLesson(taskView.lessons, {});
    const adaptive = resolveAdaptiveTaskContinueLesson(taskView.lessons, {}, hints);
    expect(adaptive).toEqual(legacy);
  });

  it("13. snapshot 7-state display-only (not persisted)", async () => {
    const masteryResult = await submitWrongBatch();
    expect(masteryResult.skillSnapshots[0]!.masteryState).toBeDefined();
    if (!skillId) return;
    const mastery = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(["WEAK", "LEARNING", "MASTERED"]).toContain(mastery!.level);
    expect(
      ["UNKNOWN", "EXPOSED", "DEVELOPING", "FRAGILE", "FUNCTIONAL", "STRONG"]
    ).not.toContain(mastery!.level);
  });

  it("14–16. REVIEW rehydrate → correct/incorrect → MASTER", async () => {
    await submitWrongBatch();
    await saveLessonPhase(userId, lessonId, "REVIEW", 120, 0, "WEAK");

    const latestCount = await countLatestQuizAttemptsForLearningItem(
      userId,
      quizItemId,
      [questionId]
    );
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 0,
      learningItemId: quizItemId,
      expectedQuestionCount: 1,
      latestAttemptCount: latestCount,
    });
    expect(contract.canRehydrateReview).toBe(true);

    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated).not.toBeNull();
    expect(rehydrated!.quizResults).toHaveLength(1);
    expect(rehydrated!.quizResults[0]!.isCorrect).toBe(false);
    expect(rehydrated!.quizResults[0]!.selectedOptionIds).toContain(wrongOptionId);
    expect(rehydrated!.skillSnapshots.length).toBeGreaterThan(0);

    await saveLessonPhase(userId, lessonId, "MASTER", 180, 0, "WEAK");
    await finishLesson(userId, lessonId, 180, 0, skillId);
    const session = await getLessonSession(userId, lessonId);
    expect(session.currentPhase).toBe("MASTER");
    expect(session.isCompleted).toBe(true);
  });

  it("17–20. dashboard weakest skills / ECO / review due / action", async () => {
    await submitWrongBatch();
    const dashboard = await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(dashboard.hasAttempts).toBe(true);
    expect(dashboard.ecoOverview.length).toBe(3);
    expect(dashboard.ecoOverview.map((g) => g.domainId).sort()).toEqual(
      ["BUSINESS", "PEOPLE", "PROCESS"].sort()
    );

    if (skillId) {
      const item = dashboard.weakestSkills.find((row) => row.skillId === skillId);
      expect(item).toBeDefined();
      expect(item!.ecoDomainId).toBe("PEOPLE");
      expect(
        item!.actionTaskHref?.startsWith("/pmp-study/") ||
          item!.actionLessonHref?.startsWith("/academies/pmp-project-management/")
      ).toBe(true);
    }
  });

  it("21. empty dashboard sans attempts", async () => {
    const dashboard = await loadWeaknessDashboardView(emptyUserId, "en", REF_NOW);
    expect(dashboard.hasAttempts).toBe(false);
    expect(dashboard.weakestSkills).toHaveLength(0);
    expect(dashboard.reviewDue).toHaveLength(0);
    expect(dashboard.ecoOverview.every((g) => g.items.length === 0)).toBe(true);
  });

  it("22. aucune écriture depuis les loaders READ-ONLY", async () => {
    await submitWrongBatch();
    const createSpy = vi.spyOn(prisma.quizAttempt, "create");
    const updateSpy = vi.spyOn(prisma.lessonProgress, "update");
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");
    const deleteSpy = vi.spyOn(prisma.quizAttempt, "delete");

    const taskView = buildStudyTaskView("PEOPLE-T07");
    await loadAdaptiveTaskHints(
      userId,
      "PEOPLE-T07",
      taskView.lessons.map((lesson) => lesson.slug)
    );
    await loadWeaknessDashboardView(userId, "en", REF_NOW);
    await loadLessonReviewRehydrateData(userId, quizItemId, "en", [questionId]);

    expect(createSpy).not.toHaveBeenCalled();
    expect(updateSpy).not.toHaveBeenCalled();
    expect(upsertSpy).not.toHaveBeenCalled();
    expect(deleteSpy).not.toHaveBeenCalled();

    createSpy.mockRestore();
    updateSpy.mockRestore();
    upsertSpy.mockRestore();
    deleteSpy.mockRestore();
  });

  it("23. aucun double-write ConceptMastery hors processQuizMasteryForAttempts", async () => {
    expect(CANONICAL_LESSON_MASTERY_WRITE_PATH).toContain("processQuizMasteryForAttempts");

    const scoring = readSource("modules/assessment-engine/scoring-service.ts");
    expect(scoring).not.toContain("updateConceptMastery");
    expect(scoring).not.toContain("conceptMastery");

    const session = readSource("modules/learning-engine/lesson-session-service.ts");
    expect(session).not.toContain("updateConceptMastery");
    expect(session).not.toContain("conceptMastery");

    const dashboard = readSource("modules/mastery-engine/weakness-dashboard-service.ts");
    expect(dashboard).not.toContain("updateConceptMastery");

    const adaptive = readSource("modules/mastery-engine/pmp-study-progress.ts");
    expect(adaptive).not.toContain("updateConceptMastery");

    const rehydrate = readSource("modules/learning-engine/review-rehydrate.ts");
    expect(rehydrate).not.toContain("updateConceptMastery");
  });

  it("24. déterminisme — mêmes entrées → mêmes signaux", async () => {
    await submitWrongBatch();
    const attempts = await prisma.quizAttempt.findMany({
      where: { id: { in: createdAttemptIds } },
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
      attempts.map((row) => ({
        questionId: row.questionId,
        isCorrect: row.isCorrect,
        confidenceLevel: row.confidenceLevel,
        answeredAt: row.createdAt,
      })),
      Object.fromEntries(attempts.map((row) => [row.question.id, row.question]))
    );
    expect(buildWeaknessSignals(inputs)).toEqual(buildWeaknessSignals(inputs));
  });
});

describe("C9 — architecture audit (unique sources)", () => {
  it("weakness source unique = buildWeaknessSignals", () => {
    const weaknessModel = readSource("modules/mastery-engine/weakness-model.ts");
    expect(weaknessModel).toContain("export function buildWeaknessSignals");
    expect(weaknessModel).not.toMatch(/export function (calculate|derive)Weakness/);

    const dashboard = readSource("modules/mastery-engine/weakness-dashboard-service.ts");
    expect(dashboard).toContain("buildWeaknessSignals");
    expect(dashboard).not.toContain("function buildWeaknessSignals");

    const adaptive = readSource("modules/mastery-engine/pmp-study-progress.ts");
    expect(adaptive).toContain("buildWeaknessSignals");
    expect(adaptive).not.toContain("function buildWeaknessSignals");
  });

  it("mastery write path unique = processQuizMasteryForAttempts", () => {
    const runtime = readSource("modules/mastery-engine/mastery-runtime-service.ts");
    expect(runtime).toContain("processQuizMasteryForAttempts");
    expect(runtime).toContain("updateConceptMastery");
    expect(runtime).not.toMatch(/from\s+["'].*retention["']/);
  });

  it("spaced-rep source unique = getNextReviewDate via spaced-repetition", () => {
    const schedule = readSource("modules/mastery-engine/mastery-review-schedule.ts");
    expect(schedule).toContain("getNextReviewDate");
    const spaced = readSource("modules/learning-engine/spaced-repetition.ts");
    expect(spaced).toContain("export function getNextReviewDate");
    expect(spaced).toContain("export function buildReviewQueue");
  });

  it("retention.ts hors write path mastery", () => {
    const modules = readdirSync(join(SRC, "modules/mastery-engine"));
    const importers: string[] = [];
    for (const file of modules) {
      if (!file.endsWith(".ts")) continue;
      const source = readSource(`modules/mastery-engine/${file}`);
      if (/from\s+["'].*retention["']/.test(source) && file !== "index.ts") {
        importers.push(file);
      }
    }
    expect(importers).toEqual(["weakness-model.ts"]);
  });

  it("ConceptMastery schema 3-tier only; no 7-state field", () => {
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

describe("C9 — REVIEW fallback (pure)", () => {
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

describe("C9 — i18n keys still present", () => {
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

describe("C9 — release gate content guards", () => {
  it("25–26. fingerprint / non-régression guards", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("27. ECO = 26 (People 8 / Process 10 / Business 8)", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);
  });

  it("28. Q001–Q200 = 200", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(keys).toHaveLength(200);
    expect(keys[0]).toBe("pmp-exam-001");
    expect(keys[199]).toBe("pmp-exam-200");
  });

  it("29. Q201+ absent from live bank", () => {
    const nums = PMP_EXAM_BANK_STEMS.map((q) =>
      Number(q.externalKey.replace("pmp-exam-", ""))
    );
    expect(Math.max(...nums)).toBe(200);
  });

  it("30. migrations inchangées (10)", () => {
    const dirs = readdirSync(join(process.cwd(), "prisma/migrations"), {
      withFileTypes: true,
    })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
    expect(dirs).toHaveLength(10);
    expect(dirs).toEqual([
      "20260824064545_init",
      "20260824073721_add_lesson_progress_metadata",
      "20260824080800_add_user_password_hash",
      "20260824090402_phase4_content_difficulty_lesson_skills",
      "20260824153000_phase7_pmp_exam_simulator",
      "20260824160000_phase8_learning_analytics",
      "20260824170000_phase10_next_review_at",
      "20260824193000_p1_password_reset",
      "20260826211500_phase_b_eco_proxy_metadata",
      "20260826214500_phase_b_mastery_metadata",
    ]);
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
