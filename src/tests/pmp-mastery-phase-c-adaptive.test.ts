/**
 * Phase C6 — adaptive PMP Study task resolver.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import {
  loadAdaptiveTaskHints,
  resolveAdaptiveTaskContinueLesson,
  resolveTaskContinueLesson,
  type AdaptiveTaskHints,
  type TaskLessonProgressSnapshot,
} from "@/modules/mastery-engine/pmp-study-progress";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

function snap(
  partial: Partial<TaskLessonProgressSnapshot> & Pick<TaskLessonProgressSnapshot, "status">
): TaskLessonProgressSnapshot {
  return {
    updatedAtMs: null,
    currentPhase: null,
    hasProgressRecord: partial.status !== "NOT_STARTED",
    ...partial,
  };
}

describe("C6 — adaptive task resolver (pure)", () => {
  const t01 = buildStudyTaskView("PEOPLE-T01");
  const lessons = t01.lessons;

  it("1. IN_PROGRESS récent prioritaire sur adaptive weakness", () => {
    const [first, second] = lessons;
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "skill-weak-1", source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: [ "skill-weak-1"],
        [second!.slug]: [],
      },
    };
    const progress = {
      [second!.slug]: snap({
        status: "IN_PROGRESS",
        updatedAtMs: 9_000,
        hasProgressRecord: true,
        currentPhase: "TEST",
      }),
    };

    const resolution = resolveAdaptiveTaskContinueLesson(lessons, progress, hints);
    expect(resolution?.lessonSlug).toBe(second!.slug);
    expect(resolution?.reason).toBe("IN_PROGRESS_RECENT");
    expect(resolution?.action).toBe("CONTINUE");
  });

  it("2. weakness prioritaire sur legacy linear order", () => {
    const [first, second] = lessons;
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "skill-weak-2", source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: [],
        [second!.slug]: ["skill-weak-2"],
      },
    };
    const progress = {
      [first!.slug]: snap({
        status: "COMPLETED",
        hasProgressRecord: true,
      }),
    };

    const legacy = resolveTaskContinueLesson(lessons, progress);
    const adaptive = resolveAdaptiveTaskContinueLesson(lessons, progress, hints);

    expect(legacy?.reason).toBe("FIRST_INCOMPLETE_NO_PROGRESS");
    expect(adaptive?.lessonSlug).toBe(second!.slug);
    expect(adaptive?.reason).toBe("ADAPTIVE_WEAK_SKILL");
    expect(adaptive?.action).toBe("START");
  });

  it("3. review due exploitable via REVIEW_DUE hint", () => {
    const [first] = lessons;
    const hints: AdaptiveTaskHints = {
      skillHints: [
        { skillId: "skill-review", source: "REVIEW_DUE", priority: 10 },
        { skillId: "skill-weak-late", source: "WEAK_MASTERY", priority: 50 },
      ],
      lessonSkillIds: {
        [first!.slug]: ["skill-review"],
        [lessons[1]!.slug]: ["skill-weak-late"],
      },
    };

    const resolution = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(resolution?.lessonSlug).toBe(first!.slug);
    expect(resolution?.reason).toBe("ADAPTIVE_REVIEW_DUE");
  });

  it("4. fallback legacy when hints absent", () => {
    const legacy = resolveTaskContinueLesson(lessons, {});
    const adaptive = resolveAdaptiveTaskContinueLesson(lessons, {}, null);
    expect(adaptive).toEqual(legacy);
    expect(adaptive?.reason).toBe("FIRST_INCOMPLETE_NO_PROGRESS");
  });

  it("5. absence de données adaptatives → legacy", () => {
    const hints: AdaptiveTaskHints = { skillHints: [], lessonSkillIds: {} };
    const legacy = resolveTaskContinueLesson(lessons, {});
    const adaptive = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(adaptive).toEqual(legacy);
  });

  it("6. tie-break déterministe (priority puis skillId)", () => {
    const hints: AdaptiveTaskHints = {
      skillHints: [
        { skillId: "skill-b", source: "WEAKNESS", priority: 2 },
        { skillId: "skill-a", source: "WEAKNESS", priority: 1 },
      ],
      lessonSkillIds: {
        [lessons[0]!.slug]: ["skill-a"],
        [lessons[1]!.slug]: ["skill-b"],
      },
    };

    const a = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    const b = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(a).toEqual(b);
    expect(a?.lessonSlug).toBe(lessons[0]!.slug);
  });

  it("7. resolver pur — aucun import prisma / write", () => {
    const resolverSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/adaptive-task-resolver.ts"),
      "utf8"
    );
    expect(resolverSource).not.toMatch(/prisma/);
    expect(resolverSource).not.toMatch(/updateConceptMastery/);
    expect(resolverSource).not.toMatch(/buildWeaknessSignals/);
    expect(resolverSource).not.toMatch(/buildReviewQueue/);
  });

  it("8. MASTERED hint source maps to ADAPTIVE_WEAK_SKILL (not 7-state)", () => {
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "skill-weak-mastery", source: "WEAK_MASTERY", priority: 5 }],
      lessonSkillIds: { [lessons[0]!.slug]: ["skill-weak-mastery"] },
    };
    const resolution = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(resolution?.reason).toBe("ADAPTIVE_WEAK_SKILL");
    expect(JSON.stringify(resolution)).not.toMatch(/FRAGILE|FUNCTIONAL|STRONG|MASTERED/);
  });

  it("9. aucune invention de skill — unknown skill ignoré", () => {
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "unknown-skill", source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: Object.fromEntries(lessons.map((l) => [l.slug, []])),
    };
    const legacy = resolveTaskContinueLesson(lessons, {});
    const adaptive = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(adaptive).toEqual(legacy);
  });

  it("10. routing PMP Study valide avec mapping lesson ↔ skill", () => {
    const taskView = buildStudyTaskView("PEOPLE-T04");
    const [primary] = taskView.lessons;
    const skillId = "skill-mapped-t04";
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId, source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: {
        [primary!.slug]: [skillId],
      },
    };
    const resolution = resolveAdaptiveTaskContinueLesson(taskView.lessons, {}, hints);
    expect(resolution?.lessonSlug).toBe(primary!.slug);
    expect(taskView.lessons.some((l) => l.slug === resolution?.lessonSlug)).toBe(true);
  });

  it("11. fallback leçon legacy quand mapping skill absent", () => {
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "orphan-skill", source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: Object.fromEntries(lessons.map((l) => [l.slug, []])),
    };
    const legacy = resolveTaskContinueLesson(lessons, {});
    expect(resolveAdaptiveTaskContinueLesson(lessons, {}, hints)).toEqual(legacy);
  });

  it("12. déterminisme — triple appel identique", () => {
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "skill-det", source: "REVIEW_DUE", priority: 3 }],
      lessonSkillIds: { [lessons[0]!.slug]: ["skill-det"] },
    };
    const results = Array.from({ length: 3 }, () =>
      resolveAdaptiveTaskContinueLesson(lessons, {}, hints)
    );
    expect(results[0]).toEqual(results[1]);
    expect(results[1]).toEqual(results[2]);
  });

  it("13. ordre de priorité IN_PROGRESS > ADAPTIVE > LEGACY", () => {
    const [first, second] = lessons;
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "skill-adaptive", source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: ["skill-adaptive"],
        [second!.slug]: [],
      },
    };

    const inProgress = resolveAdaptiveTaskContinueLesson(
      lessons,
      {
        [second!.slug]: snap({
          status: "IN_PROGRESS",
          updatedAtMs: 5_000,
          hasProgressRecord: true,
          currentPhase: "LEARN",
        }),
      },
      hints
    );
    expect(inProgress?.reason).toBe("IN_PROGRESS_RECENT");

    const adaptiveOnly = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(adaptiveOnly?.reason).toBe("ADAPTIVE_WEAK_SKILL");

    const legacyOnly = resolveAdaptiveTaskContinueLesson(lessons, {}, null);
    expect(legacyOnly?.reason).toBe("FIRST_INCOMPLETE_NO_PROGRESS");
  });
});

describe("C6 — loadAdaptiveTaskHints (read-only runtime)", () => {
  let userId: string;
  let skillId: string;
  const isolatedEmail = `c6-adaptive-${Date.now()}@test.local`;

  beforeAll(async () => {
    const user = await prisma.user.create({
      data: {
        email: isolatedEmail,
        passwordHash: "test",
        name: "C6 Adaptive User",
      },
    });
    userId = user.id;

    const skill = await prisma.skill.findFirst({ where: { slug: "pf-income" } });
    if (!skill) throw new Error("Skill pf-income not found");
    skillId = skill.id;
  });

  afterAll(async () => {
    await prisma.quizAttempt.deleteMany({ where: { userId } });
    await prisma.conceptMastery.deleteMany({ where: { userId } });
    await prisma.user.deleteMany({ where: { email: isolatedEmail } });
  });

  it("14. loadAdaptiveTaskHints ne fait aucun write DB", async () => {
    const taskView = buildStudyTaskView("PEOPLE-T07");
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");
    const createSpy = vi.spyOn(prisma.quizAttempt, "create");
    const updateSpy = vi.spyOn(prisma.lessonProgress, "update");

    const hints = await loadAdaptiveTaskHints(
      userId,
      "PEOPLE-T07",
      taskView.lessons.map((l) => l.slug)
    );

    expect(hints.skillHints).toEqual([]);
    expect(Object.keys(hints.lessonSkillIds).length).toBeGreaterThan(0);
    expect(upsertSpy).not.toHaveBeenCalled();
    expect(createSpy).not.toHaveBeenCalled();
    expect(updateSpy).not.toHaveBeenCalled();

    upsertSpy.mockRestore();
    createSpy.mockRestore();
    updateSpy.mockRestore();
  });

  it("15. MASTERED ConceptMastery n'émet pas WEAK_MASTERY hint", async () => {
    await prisma.conceptMastery.upsert({
      where: { userId_skillId: { userId, skillId } },
      create: { userId, skillId, level: "MASTERED" },
      update: { level: "MASTERED" },
    });

    const taskView = buildStudyTaskView("PEOPLE-T01");
    const hints = await loadAdaptiveTaskHints(
      userId,
      "PEOPLE-T01",
      taskView.lessons.map((l) => l.slug)
    );

    const weakMasteryHints = hints.skillHints.filter((h) => h.source === "WEAK_MASTERY");
    expect(weakMasteryHints.some((h) => h.skillId === skillId)).toBe(false);
  });

  it("16. weakness signal émis après tentatives incorrectes (C2 primitive)", async () => {
    const lesson = await prisma.lesson.findFirst({
      where: { slug: "knowledge-transfer" },
      include: {
        learningItems: {
          include: { questions: { include: { answerOptions: true } } },
        },
      },
    });
    const question = lesson?.learningItems.find((i) => i.type === "QUIZ")?.questions[0];
    if (!question) throw new Error("Question not found");
    const wrongId = question.answerOptions.find((o) => !o.isCorrect)?.id;
    if (!wrongId) throw new Error("Wrong option not found");

    const first = await recordQuizAttempt(userId, question.id, [wrongId], undefined, "VERY_HIGH");
    const second = await recordQuizAttempt(userId, question.id, [wrongId], undefined, "VERY_HIGH");
    await processQuizMasteryForAttempts(userId, [second.attempt.id]);

    const taskView = buildStudyTaskView("PEOPLE-T07");
    const hints = await loadAdaptiveTaskHints(
      userId,
      "PEOPLE-T07",
      taskView.lessons.map((l) => l.slug)
    );

    if (question.skillId) {
      expect(hints.skillHints.some((h) => h.skillId === question.skillId)).toBe(true);
      const mappedSlugs = Object.entries(hints.lessonSkillIds)
        .filter(([, ids]) => ids.includes(question.skillId!))
        .map(([slug]) => slug);
      expect(mappedSlugs.length).toBeGreaterThan(0);
    }
    expect(first.attempt.id).toBeDefined();
  });
});

describe("C6 — non-régression C1–C5 (smoke)", () => {
  it("17. C5 snapshot primitive intacte", async () => {
    const { buildSkillMasterySnapshotViews } = await import(
      "@/modules/mastery-engine/mastery-snapshot"
    );
    const views = buildSkillMasterySnapshotViews(["skill-smoke"], {
      "skill-smoke": [
        {
          correct: true,
          difficulty: "MEDIUM",
          cognitiveLevel: "APPLICATION",
          answeredAt: new Date("2026-08-28T12:00:00Z"),
        },
      ],
    });
    expect(views[0]?.masteryState).toBe("EXPOSED");
  });

  it("18. C4 getNextReviewDate primitive intacte", async () => {
    const { getNextReviewDate } = await import(
      "@/modules/learning-engine/spaced-repetition"
    );
    const now = new Date("2026-08-28T12:00:00Z");
    const due = getNextReviewDate(
      {
        masteryLevel: "WEAK",
        lastReviewedAt: now,
        lastAttemptAt: now,
        recentErrorCount: 0,
      },
      now
    );
    expect(due.getTime()).toBeGreaterThan(now.getTime());
  });
});

describe("C6 — protected bank and schema guards", () => {
  it("19. Q001–Q200 fingerprint inchangé", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("20. ECO = 26 tasks", () => {
    expect(ECO_TASK_COUNT).toBe(26);
  });

  it("21. Q201+ absent", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(200);
  });

  it("22. T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });

  it("23. migrations inchangées (10)", () => {
    const migrations = readdirSync(join(process.cwd(), "prisma/migrations"), {
      withFileTypes: true,
    })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    expect(migrations).toHaveLength(10);
  });

  it("24. loadAdaptiveTaskHints consomme buildWeaknessSignals (pas de duplicate)", () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/pmp-study-progress.ts"),
      "utf8"
    );
    expect(source).toContain("buildWeaknessSignals");
    expect(source).toContain("buildReviewQueue");
    expect(source).not.toContain("function buildWeaknessSignals");
    expect(source).not.toContain("function buildReviewQueue");
  });
});
