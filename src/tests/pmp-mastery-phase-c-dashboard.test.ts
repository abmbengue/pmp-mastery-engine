/**
 * Phase C — dashboard weakness / ECO surfacing (iteration 8/10).
 */

import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import { buildReviewQueue } from "@/modules/learning-engine/spaced-repetition";
import {
  buildSkillWeaknessDashboardItems,
  buildWeaknessDashboardView,
  groupWeaknessByEcoDomain,
} from "@/modules/mastery-engine/weakness-dashboard-view";
import { loadWeaknessDashboardView } from "@/modules/mastery-engine/weakness-dashboard-service";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { buildWeaknessSignals } from "@/modules/mastery-engine/weakness-model";
import type { AttemptMasteryInput } from "@/modules/mastery-engine/weakness-model";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const REF_NOW = new Date("2026-08-28T16:00:00.000Z");

function attempt(
  skillId: string,
  ecoTaskId: "PEOPLE-T07" | "PROCESS-T06" | "BUSINESS-T05",
  correct: boolean,
  offsetMs = 0
): AttemptMasteryInput {
  return {
    correct,
    difficulty: "MEDIUM",
    cognitiveLevel: "APPLICATION",
    skillId,
    ecoTaskId,
    answeredAt: new Date(REF_NOW.getTime() + offsetMs),
  };
}

describe("Phase C — weakness dashboard (pure)", () => {
  const skillMeta = new Map([
    [
      "skill-a",
      {
        skillId: "skill-a",
        skillSlug: "skill-a-slug",
        titleFr: "Compétence A",
        titleEn: "Skill A",
        masteryLevel: "WEAK" as const,
      },
    ],
    [
      "skill-b",
      {
        skillId: "skill-b",
        skillSlug: "skill-b-slug",
        titleFr: "Compétence B",
        titleEn: "Skill B",
        masteryLevel: "LEARNING" as const,
      },
    ],
    [
      "skill-mastered",
      {
        skillId: "skill-mastered",
        skillSlug: "skill-mastered-slug",
        titleFr: "Compétence M",
        titleEn: "Skill Mastered",
        masteryLevel: "MASTERED" as const,
      },
    ],
  ]);

  it("3. ranks multiple skills deterministically by priority then skillId", () => {
    const attempts = [
      attempt("skill-b", "PROCESS-T06", false),
      attempt("skill-a", "PEOPLE-T07", false),
    ];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: {
        "skill-a": [attempt("skill-a", "PEOPLE-T07", false)],
        "skill-b": [attempt("skill-b", "PROCESS-T06", false)],
      },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    expect(items.length).toBe(2);
    expect(items.map((item) => item.skillId)).toEqual(["skill-a", "skill-b"]);
  });

  it("4. tie-breaks equal priority with skillId ASC", () => {
    const attempts = [
      attempt("skill-z", "PEOPLE-T07", false),
      attempt("skill-a", "PEOPLE-T07", false),
    ];
    const signals = buildWeaknessSignals(attempts);
    const meta = new Map([
      ...skillMeta,
      [
        "skill-z",
        {
          skillId: "skill-z",
          skillSlug: "skill-z-slug",
          titleFr: "Z",
          titleEn: "Z",
          masteryLevel: "WEAK" as const,
        },
      ],
    ]);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta: meta,
      attemptsBySkillId: {
        "skill-a": [attempt("skill-a", "PEOPLE-T07", false)],
        "skill-z": [attempt("skill-z", "PEOPLE-T07", false)],
      },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    expect(items[0]!.skillId).toBe("skill-a");
    expect(items[1]!.skillId).toBe("skill-z");
  });

  it("5. maps skills to ECO domains", () => {
    const attempts = [
      attempt("skill-a", "PEOPLE-T07", false),
      attempt("skill-b", "PROCESS-T06", false),
    ];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: {
        "skill-a": [attempt("skill-a", "PEOPLE-T07", false)],
        "skill-b": [attempt("skill-b", "PROCESS-T06", false)],
      },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    const grouped = groupWeaknessByEcoDomain(items, ECO_DOMAINS);
    expect(grouped.find((g) => g.domainId === "PEOPLE")!.items).toHaveLength(1);
    expect(grouped.find((g) => g.domainId === "PROCESS")!.items).toHaveLength(1);
    expect(grouped.find((g) => g.domainId === "BUSINESS")!.items).toHaveLength(0);
  });

  it("6. keeps ECO totals at 26", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_DOMAINS.reduce((sum, domain) => sum + domain.taskCount, 0)).toBe(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);
  });

  it("7. identifies review due via buildReviewQueue", () => {
    const dueAt = new Date(REF_NOW);
    dueAt.setDate(dueAt.getDate() - 1);
    const queue = buildReviewQueue(
      [
        {
          skillId: "skill-a",
          skillSlug: "skill-a-slug",
          masteryLevel: "LEARNING",
          lastReviewedAt: dueAt,
          nextReviewAt: dueAt,
          attemptCount: 2,
          recentErrorCount: 0,
          lastAttemptAt: dueAt,
          lastAttemptCorrect: true,
        },
      ],
      REF_NOW
    );
    const view = buildWeaknessDashboardView({
      hasAttempts: true,
      signals: [],
      skillMeta,
      attemptsBySkillId: {},
      reviewQueue: queue,
      actionLinksBySkillId: new Map(),
      domainMeta: ECO_DOMAINS,
      now: REF_NOW,
    });
    expect(view.reviewDue.some((item) => item.skillId === "skill-a")).toBe(true);
  });

  it("8. does not mark future review as due", () => {
    const future = new Date(REF_NOW);
    future.setDate(future.getDate() + 14);
    const queue = buildReviewQueue(
      [
        {
          skillId: "skill-b",
          skillSlug: "skill-b-slug",
          masteryLevel: "MASTERED",
          lastReviewedAt: REF_NOW,
          nextReviewAt: future,
          attemptCount: 5,
          recentErrorCount: 0,
          lastAttemptAt: REF_NOW,
          lastAttemptCorrect: true,
        },
      ],
      REF_NOW
    );
    const view = buildWeaknessDashboardView({
      hasAttempts: true,
      signals: [],
      skillMeta,
      attemptsBySkillId: {},
      reviewQueue: queue,
      actionLinksBySkillId: new Map(),
      domainMeta: ECO_DOMAINS,
      now: REF_NOW,
    });
    expect(view.reviewDue.some((item) => item.skillId === "skill-b")).toBe(false);
  });

  it("9. excludes MASTERED skills from weakness list", () => {
    const attempts = [attempt("skill-mastered", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: {
        "skill-mastered": attempts,
      },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    expect(items.some((item) => item.skillId === "skill-mastered")).toBe(false);
  });

  it("13. exposes action links when mapping provided", () => {
    const attempts = [attempt("skill-a", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const links = new Map([
      [
        "skill-a",
        {
          ecoTaskId: "PEOPLE-T07" as const,
          actionTaskHref: "/pmp-study/PEOPLE/PEOPLE-T07",
          actionLessonHref: "/academies/pmp-project-management/courses/pmp-certification/modules/people/lessons/knowledge-transfer",
        },
      ],
    ]);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: { "skill-a": attempts },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: links,
    });
    expect(items[0]!.actionTaskHref).toContain("/pmp-study/PEOPLE/PEOPLE-T07");
    expect(items[0]!.actionLessonHref).toContain("knowledge-transfer");
  });

  it("14. stays robust without action mapping", () => {
    const attempts = [attempt("skill-a", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: { "skill-a": attempts },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    expect(items[0]!.actionTaskHref).toBeNull();
    expect(items[0]!.actionLessonHref).toBeNull();
  });

  it("15. supports EN and FR titles from metadata", () => {
    const attempts = [attempt("skill-a", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: { "skill-a": attempts },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    expect(items[0]!.skillTitleEn).toBe("Skill A");
    expect(items[0]!.skillTitleFr).toBe("Compétence A");
  });
});

describe("Phase C — weakness dashboard (DB)", () => {
  let userId: string;
  let questionId: string;
  let quizItemId: string;
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
          include: { questions: { include: { answerOptions: true, masteryMetadata: true } } },
        },
      },
    });
    if (!lesson) throw new Error("Lesson not found");
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
  });

  afterAll(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
    }
    if (skillId) {
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
  });

  it("1. user without attempts has no artificial weaknesses", async () => {
    const emptyUser = await prisma.user.create({
      data: {
        email: `weakness-dash-empty-${Date.now()}@test.local`,
        passwordHash: "test",
        name: "Empty User",
      },
    });
    const view = await loadWeaknessDashboardView(emptyUser.id, "en");
    expect(view.hasAttempts).toBe(false);
    expect(view.weakestSkills).toHaveLength(0);
    expect(view.reviewDue).toHaveLength(0);
    await prisma.user.delete({ where: { id: emptyUser.id } });
  });

  it("2. weak skill appears in dashboard after quiz", async () => {
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
    await processQuizMasteryForAttempts(
      userId,
      [first.attempt.id, second.attempt.id],
      { now: REF_NOW }
    );

    const view = await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(view.hasAttempts).toBe(true);
    if (skillId) {
      expect(view.weakestSkills.some((item) => item.skillId === skillId)).toBe(true);
    }
  });

  it("10. ConceptMastery stays 3-tier", async () => {
    const rows = await prisma.conceptMastery.findMany({
      where: { userId },
      select: { level: true },
    });
    for (const row of rows) {
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });

  it("11. no 7-state values persisted", async () => {
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

  it("12. dashboard load is READ-ONLY", async () => {
    const createSpy = vi.spyOn(prisma.quizAttempt, "create");
    const updateSpy = vi.spyOn(prisma.lessonProgress, "update");
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");

    await loadWeaknessDashboardView(userId, "en", REF_NOW);

    expect(createSpy).not.toHaveBeenCalled();
    expect(updateSpy).not.toHaveBeenCalled();
    expect(upsertSpy).not.toHaveBeenCalled();

    createSpy.mockRestore();
    updateSpy.mockRestore();
    upsertSpy.mockRestore();
  });

  it("critical integration — quiz → weakness → dashboard → ECO → action", async () => {
    const view = await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(view.hasAttempts).toBe(true);

    if (skillId) {
      const item = view.weakestSkills.find((row) => row.skillId === skillId);
      expect(item).toBeDefined();
      expect(item!.ecoDomainId).toBeTruthy();
      if (item!.ecoTaskId) {
        expect(buildStudyTaskView(item!.ecoTaskId!).task.id).toBe(item!.ecoTaskId);
        expect(item!.actionTaskHref).toContain("/pmp-study/");
      }
    }
  });
});

describe("Phase C — dashboard content guards", () => {
  it("keeps protected bank fingerprint unchanged", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("preserves T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });
});
