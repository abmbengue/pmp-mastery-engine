/**
 * Phase C8 — dashboard weakness / ECO surfacing (read-only).
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { buildReviewQueue } from "@/modules/learning-engine/spaced-repetition";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import {
  buildStudyTaskView,
  ECO_DOMAINS,
  buildPmpLessonHref,
  buildPmpStudyTaskHref,
} from "@/modules/mastery-engine/pmp-study";
import { buildWeaknessSignals } from "@/modules/mastery-engine/weakness-model";
import type { AttemptMasteryInput } from "@/modules/mastery-engine/weakness-model";
import { loadWeaknessDashboardView } from "@/modules/mastery-engine/weakness-dashboard-service";
import {
  buildSkillWeaknessDashboardItems,
  buildWeaknessDashboardView,
  groupWeaknessByEcoDomain,
} from "@/modules/mastery-engine/weakness-dashboard-view";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const REF_NOW = new Date("2026-08-28T16:00:00.000Z");

function attempt(
  skillId: string,
  ecoTaskId: "PEOPLE-T07" | "PROCESS-T06" | "BUSINESS-T05" | "PEOPLE-T01",
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

function skillMetaEntry(
  skillId: string,
  slug: string,
  masteryLevel: "WEAK" | "LEARNING" | "MASTERED" | null = "WEAK"
) {
  return [
    skillId,
    {
      skillId,
      skillSlug: slug,
      titleFr: `FR ${skillId}`,
      titleEn: `EN ${skillId}`,
      masteryLevel,
    },
  ] as const;
}

describe("C8 — weakness dashboard (pure)", () => {
  const skillMeta = new Map([
    skillMetaEntry("skill-a", "skill-a-slug", "WEAK"),
    skillMetaEntry("skill-b", "skill-b-slug", "LEARNING"),
    skillMetaEntry("skill-mastered", "skill-mastered-slug", "MASTERED"),
  ]);

  it("4. weakest skills ranked by priority ASC then skillId ASC", () => {
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
    expect(items[0]!.priority).toBeLessThanOrEqual(items[1]!.priority);
  });

  it("5. caps weakest skills at 8", () => {
    const skillIds = Array.from({ length: 10 }, (_, i) => `skill-cap-${i}`);
    const meta = new Map(
      skillIds.map((id, i) => skillMetaEntry(id, `${id}-slug`, i % 2 === 0 ? "WEAK" : "LEARNING"))
    );
    const attemptsBySkillId: Record<string, AttemptMasteryInput[]> = {};
    const attempts: AttemptMasteryInput[] = [];
    for (const id of skillIds) {
      const row = attempt(id, "PEOPLE-T01", false);
      attempts.push(row);
      attemptsBySkillId[id] = [row];
    }
    const signals = buildWeaknessSignals(attempts);
    const view = buildWeaknessDashboardView({
      hasAttempts: true,
      signals,
      skillMeta: meta,
      attemptsBySkillId,
      reviewQueue: [],
      actionLinksBySkillId: new Map(),
      domainMeta: ECO_DOMAINS,
      now: REF_NOW,
    });
    expect(view.weakestSkills).toHaveLength(8);
    const sorted = [...view.weakestSkills].sort((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return a.skillId.localeCompare(b.skillId);
    });
    expect(view.weakestSkills.map((item) => item.skillId)).toEqual(
      sorted.map((item) => item.skillId)
    );
  });

  it("6. priority follows canonical weaknessSignal.priority", () => {
    const attempts = [
      attempt("skill-a", "PEOPLE-T07", false, 0),
      attempt("skill-a", "PEOPLE-T07", false, 1),
      attempt("skill-b", "PROCESS-T06", true, 2),
    ];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: {
        "skill-a": attempts.filter((a) => a.skillId === "skill-a"),
        "skill-b": attempts.filter((a) => a.skillId === "skill-b"),
      },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    const signalBySkill = new Map(signals.map((s) => [s.skillId, s.priority]));
    for (const item of items) {
      expect(item.priority).toBe(signalBySkill.get(item.skillId));
    }
  });

  it("7. tie-breaks equal priority with skillId ASC", () => {
    const attempts = [
      attempt("skill-z", "PEOPLE-T07", false),
      attempt("skill-a", "PEOPLE-T07", false),
    ];
    const signals = buildWeaknessSignals(attempts);
    const meta = new Map([...skillMeta, skillMetaEntry("skill-z", "skill-z-slug", "WEAK")]);
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

  it("8. excludes MASTERED skills from weakness list", () => {
    const attempts = [attempt("skill-mastered", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: { "skill-mastered": attempts },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    expect(items.some((item) => item.skillId === "skill-mastered")).toBe(false);
  });

  it("9. ECO People domain grouping", () => {
    const attempts = [attempt("skill-a", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: { "skill-a": attempts },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    const grouped = groupWeaknessByEcoDomain(items, ECO_DOMAINS);
    expect(grouped.find((g) => g.domainId === "PEOPLE")!.items).toHaveLength(1);
    expect(grouped.find((g) => g.domainId === "PEOPLE")!.items[0]!.ecoDomainId).toBe("PEOPLE");
  });

  it("10. ECO Process domain grouping", () => {
    const attempts = [attempt("skill-b", "PROCESS-T06", false)];
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta,
      attemptsBySkillId: { "skill-b": attempts },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    const grouped = groupWeaknessByEcoDomain(items, ECO_DOMAINS);
    expect(grouped.find((g) => g.domainId === "PROCESS")!.items).toHaveLength(1);
    expect(grouped.find((g) => g.domainId === "PROCESS")!.items[0]!.ecoDomainId).toBe("PROCESS");
  });

  it("11. ECO Business domain grouping", () => {
    const attempts = [attempt("skill-biz", "BUSINESS-T05", false)];
    const meta = new Map([skillMetaEntry("skill-biz", "skill-biz-slug", "WEAK")]);
    const signals = buildWeaknessSignals(attempts);
    const items = buildSkillWeaknessDashboardItems({
      signals,
      skillMeta: meta,
      attemptsBySkillId: { "skill-biz": attempts },
      reviewDueSkillIds: new Set(),
      actionLinksBySkillId: new Map(),
    });
    const grouped = groupWeaknessByEcoDomain(items, ECO_DOMAINS);
    expect(grouped.find((g) => g.domainId === "BUSINESS")!.items).toHaveLength(1);
    expect(grouped.find((g) => g.domainId === "BUSINESS")!.items[0]!.ecoDomainId).toBe("BUSINESS");
  });

  it("12. review due surfaces from buildReviewQueue", () => {
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

  it("13. reviewDue items originate from canonical buildReviewQueue output", () => {
    const dueAt = new Date(REF_NOW);
    dueAt.setDate(dueAt.getDate() - 2);
    const queue = buildReviewQueue(
      [
        {
          skillId: "skill-b",
          skillSlug: "skill-b-slug",
          masteryLevel: "WEAK",
          lastReviewedAt: dueAt,
          nextReviewAt: dueAt,
          attemptCount: 3,
          recentErrorCount: 2,
          lastAttemptAt: dueAt,
          lastAttemptCorrect: false,
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
    expect(view.reviewDue.length).toBeGreaterThan(0);
    for (const row of view.reviewDue) {
      expect(queue.some((q) => q.skillId === row.skillId)).toBe(true);
      expect(row.reasonCode).toBe(
        queue.find((q) => q.skillId === row.skillId)!.reasonCode
      );
    }
  });

  it("14. exposes PMP Study action when task mapping exists", () => {
    const attempts = [attempt("skill-a", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const taskHref = buildPmpStudyTaskHref("PEOPLE-T07");
    const links = new Map([
      [
        "skill-a",
        {
          ecoTaskId: "PEOPLE-T07" as const,
          actionTaskHref: taskHref,
          actionLessonHref: buildPmpLessonHref("knowledge-transfer"),
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
    expect(items[0]!.actionTaskHref).toBe(taskHref);
    expect(items[0]!.actionTaskHref).toContain("/pmp-study/PEOPLE/PEOPLE-T07");
  });

  it("15. lesson fallback when no task mapping", () => {
    const attempts = [attempt("skill-a", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const lessonHref = buildPmpLessonHref("knowledge-transfer");
    const links = new Map([
      [
        "skill-a",
        {
          ecoTaskId: null,
          actionTaskHref: null,
          actionLessonHref: lessonHref,
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
    expect(items[0]!.actionTaskHref).toBeNull();
    expect(items[0]!.actionLessonHref).toBe(lessonHref);
    expect(items[0]!.actionLessonHref).toContain("/academies/pmp-project-management/");
  });

  it("16. action hrefs use known routes only (no invented URLs)", () => {
    const attempts = [attempt("skill-a", "PEOPLE-T07", false)];
    const signals = buildWeaknessSignals(attempts);
    const links = new Map([
      [
        "skill-a",
        {
          ecoTaskId: "PEOPLE-T07" as const,
          actionTaskHref: buildPmpStudyTaskHref("PEOPLE-T07"),
          actionLessonHref: buildPmpLessonHref("knowledge-transfer"),
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
    const hrefs = [items[0]!.actionTaskHref, items[0]!.actionLessonHref].filter(Boolean);
    for (const href of hrefs) {
      expect(
        href!.startsWith("/pmp-study/") ||
          href!.startsWith("/academies/pmp-project-management/")
      ).toBe(true);
    }
  });

  it("19. determinism — same inputs → same view", () => {
    const attempts = [
      attempt("skill-a", "PEOPLE-T07", false),
      attempt("skill-b", "PROCESS-T06", false),
    ];
    const signals = buildWeaknessSignals(attempts);
    const input = {
      hasAttempts: true as const,
      signals,
      skillMeta,
      attemptsBySkillId: {
        "skill-a": [attempt("skill-a", "PEOPLE-T07", false)],
        "skill-b": [attempt("skill-b", "PROCESS-T06", false)],
      },
      reviewQueue: [] as ReturnType<typeof buildReviewQueue>,
      actionLinksBySkillId: new Map(),
      domainMeta: ECO_DOMAINS,
      now: REF_NOW,
    };
    expect(buildWeaknessDashboardView(input)).toEqual(buildWeaknessDashboardView(input));
  });
});

describe("C8 — weakness dashboard runtime (DB)", () => {
  let userId: string;
  let emptyUserId: string;
  let questionId: string;
  let quizItemId: string;
  let wrongOptionId: string;
  let skillId: string | null;
  const createdAttemptIds: string[] = [];
  const isolatedEmail = `c8-dashboard-${Date.now()}@test.local`;
  const emptyEmail = `c8-dashboard-empty-${Date.now()}@test.local`;

  beforeAll(async () => {
    const [user, emptyUser] = await Promise.all([
      prisma.user.create({
        data: { email: isolatedEmail, passwordHash: "test", name: "C8 Dashboard User" },
      }),
      prisma.user.create({
        data: { email: emptyEmail, passwordHash: "test", name: "C8 Empty User" },
      }),
    ]);
    userId = user.id;
    emptyUserId = emptyUser.id;

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
  });

  afterEach(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
      createdAttemptIds.length = 0;
    }
    if (skillId) {
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
  });

  afterAll(async () => {
    await prisma.quizAttempt.deleteMany({ where: { userId: { in: [userId, emptyUserId] } } });
    await prisma.conceptMastery.deleteMany({
      where: { userId: { in: [userId, emptyUserId] } },
    });
    await prisma.user.deleteMany({ where: { email: { in: [isolatedEmail, emptyEmail] } } });
  });

  it("1. user without QuizAttempt has empty dashboard", async () => {
    const view = await loadWeaknessDashboardView(emptyUserId, "en");
    expect(view.weakestSkills).toHaveLength(0);
    expect(view.reviewDue).toHaveLength(0);
    expect(view.ecoOverview.every((g) => g.items.length === 0)).toBe(true);
  });

  it("2. hasAttempts=false when no quiz activity", async () => {
    const view = await loadWeaknessDashboardView(emptyUserId, "en");
    expect(view.hasAttempts).toBe(false);
  });

  it("3. no artificial weaknesses without attempts", async () => {
    const view = await loadWeaknessDashboardView(emptyUserId, "en");
    expect(view.weakestSkills).toHaveLength(0);
    expect(view.reviewDue).toHaveLength(0);
  });

  it("4. weak skill appears after quiz attempts", async () => {
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
    await processQuizMasteryForAttempts(userId, [first.attempt.id, second.attempt.id], {
      now: REF_NOW,
    });

    const view = await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(view.hasAttempts).toBe(true);
    if (skillId) {
      expect(view.weakestSkills.some((item) => item.skillId === skillId)).toBe(true);
    }
  });

  it("17. loadWeaknessDashboardView is READ-ONLY", async () => {
    const createSpy = vi.spyOn(prisma.quizAttempt, "create");
    const updateSpy = vi.spyOn(prisma.lessonProgress, "update");
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");
    const deleteSpy = vi.spyOn(prisma.quizAttempt, "delete");

    await loadWeaknessDashboardView(userId, "en", REF_NOW);

    expect(createSpy).not.toHaveBeenCalled();
    expect(updateSpy).not.toHaveBeenCalled();
    expect(upsertSpy).not.toHaveBeenCalled();
    expect(deleteSpy).not.toHaveBeenCalled();

    createSpy.mockRestore();
    updateSpy.mockRestore();
    upsertSpy.mockRestore();
    deleteSpy.mockRestore();
  });

  it("18. no business-data writes during dashboard load", async () => {
    const writeMethods = ["create", "update", "upsert", "delete"] as const;
    const spies = writeMethods.map((method) =>
      vi.spyOn(prisma.conceptMastery, method as "create")
    );

    await loadWeaknessDashboardView(userId, "en", REF_NOW);

    for (const spy of spies) {
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    }
  });

  it("critical — quiz → weakness → dashboard → ECO → PMP Study action", async () => {
    const first = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      quizItemId,
      "HIGH"
    );
    createdAttemptIds.push(first.attempt.id);
    await processQuizMasteryForAttempts(userId, [first.attempt.id], { now: REF_NOW });

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
      const hasKnownHref =
        item!.actionTaskHref?.startsWith("/pmp-study/") ||
        item!.actionLessonHref?.startsWith("/academies/pmp-project-management/");
      expect(hasKnownHref).toBe(true);
    }
  });
});

describe("C8 — compatibilité C1–C7 (smoke)", () => {
  it("20. C2 — dashboard consomme buildWeaknessSignals (pas de duplicate)", () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/weakness-dashboard-service.ts"),
      "utf8"
    );
    expect(source).toContain("buildWeaknessSignals");
    expect(source).toContain("quizAttemptsToMasteryInputs");
    expect(source).not.toContain("function buildWeaknessSignals");
  });

  it("21. C4 — dashboard consomme buildReviewQueue (pas de duplicate)", () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/weakness-dashboard-service.ts"),
      "utf8"
    );
    expect(source).toContain("buildReviewQueue");
    expect(source).not.toContain("function buildReviewQueue");
    expect(source).not.toContain("nextReviewAt =");
  });

  it("22. C6 — adaptive hints et dashboard partagent les primitives", () => {
    const dashboardSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/weakness-dashboard-service.ts"),
      "utf8"
    );
    const adaptiveSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/pmp-study-progress.ts"),
      "utf8"
    );
    expect(dashboardSource).toContain("buildWeaknessSignals");
    expect(adaptiveSource).toContain("buildWeaknessSignals");
    expect(dashboardSource).toContain("buildReviewQueue");
    expect(adaptiveSource).toContain("buildReviewQueue");
  });

  it("23. C1 — confidence transite via quizAttemptsToMasteryInputs", () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/weakness-dashboard-service.ts"),
      "utf8"
    );
    expect(source).toContain("confidenceLevel");
    expect(source).toContain("quizAttemptsToMasteryInputs");
  });

  it("24. C5 — dashboard ne persiste pas de snapshot 7-state", () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/weakness-dashboard-service.ts"),
      "utf8"
    );
    expect(source).not.toContain("buildSkillMasterySnapshot");
    expect(source).not.toContain("updateConceptMastery");
    expect(source).not.toContain("prisma.conceptMastery.create");
  });

  it("25. C7 — dashboard indépendant du review rehydrate write path", () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/weakness-dashboard-service.ts"),
      "utf8"
    );
    expect(source).not.toContain("loadLessonReviewRehydrateData");
    expect(source).not.toContain("saveLessonPhase");
  });
});

describe("C8 — protected bank and schema guards", () => {
  it("26. Q001–Q200 fingerprint inchangé", () => {
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
    expect(ECO_DOMAINS.reduce((sum, domain) => sum + domain.taskCount, 0)).toBe(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);
  });

  it("28. Q001–Q200 = 200 questions", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(keys).toHaveLength(200);
    expect(Math.min(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(1);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(200);
  });

  it("29. Q201+ absent from live bank", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(200);
    expect(keys.some((k) => Number(k.replace("pmp-exam-", "")) > 200)).toBe(false);
  });

  it("30. migrations inchangées (10)", () => {
    const migrations = readdirSync(join(process.cwd(), "prisma/migrations"), {
      withFileTypes: true,
    })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    expect(migrations).toHaveLength(10);
  });

  it("T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });

  it("ConceptMastery reste 3-tier uniquement", async () => {
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
