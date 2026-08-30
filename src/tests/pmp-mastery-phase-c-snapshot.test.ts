/**
 * Phase C5 — skill mastery snapshot views (display-only 7-state).
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { loadLessonReviewRehydrateData } from "@/modules/learning-engine/review-rehydrate";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import {
  buildSkillMasterySnapshotViews,
  toSkillMasterySnapshotView,
} from "@/modules/mastery-engine/mastery-snapshot";
import { deriveMasteryState } from "@/modules/mastery-engine/mastery-states";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import { buildSkillMasterySnapshot } from "@/modules/mastery-engine/weakness-model";
import type { AttemptMasteryInput } from "@/modules/mastery-engine/weakness-model";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const T0 = new Date("2026-08-01T12:00:00Z");
const DAY_MS = 24 * 60 * 60 * 1000;

function attemptAt(
  offsetDays: number,
  correct: boolean,
  overrides: Partial<AttemptMasteryInput> = {}
): AttemptMasteryInput {
  return {
    correct,
    difficulty: "MEDIUM",
    cognitiveLevel: "APPLICATION",
    answeredAt: new Date(T0.getTime() + offsetDays * DAY_MS),
    ...overrides,
  };
}

describe("C5 — snapshot pure helpers", () => {
  it("1. returns null for empty / unknown skill (no snapshot without attempts)", () => {
    expect(toSkillMasterySnapshotView("", [])).toBeNull();
    expect(toSkillMasterySnapshotView("skill-a", [])).toBeNull();
  });

  it("2. UNKNOWN via deriveMasteryState (0 attempts — not exposed as a view)", () => {
    expect(deriveMasteryState({
      attempts: 0,
      weightedCorrectRate: 0,
      distinctQuestionCount: 0,
      maxCognitiveAchieved: "RECOGNITION",
      daysSinceFirstExposure: 0,
      recentIncorrectStreak: 0,
      confidenceCalibrated: false,
    })).toBe("UNKNOWN");
  });

  it("3. EXPOSED — single attempt", () => {
    const attempts = [attemptAt(0, true, { skillId: "skill-exposed" })];
    const view = toSkillMasterySnapshotView("skill-exposed", attempts);
    expect(view!.masteryState).toBe("EXPOSED");
    expect(view!.attempts).toBe(1);
    expect(view!.correct).toBe(1);
    expect(view!.incorrect).toBe(0);
  });

  it("4. DEVELOPING — low weighted performance", () => {
    const attempts = [
      attemptAt(0, false),
      attemptAt(1, false),
      attemptAt(2, true),
      attemptAt(3, true),
      attemptAt(4, false),
    ];
    const view = toSkillMasterySnapshotView("skill-dev", attempts);
    expect(view!.masteryState).toBe("DEVELOPING");
    expect(view!.historicalPerformance).toBeLessThan(45);
  });

  it("5. FRAGILE — recent incorrect streak", () => {
    const attempts = [attemptAt(0, false), attemptAt(1, false)];
    const view = toSkillMasterySnapshotView("skill-fragile", attempts);
    expect(view!.masteryState).toBe("FRAGILE");
    expect(view!.incorrect).toBe(2);
  });

  it("6. FUNCTIONAL — moderate performance", () => {
    const attempts = [
      attemptAt(0, true),
      attemptAt(1, false),
      attemptAt(2, true),
      attemptAt(3, true),
      attemptAt(4, false),
    ];
    const view = toSkillMasterySnapshotView("skill-func", attempts);
    expect(view!.masteryState).toBe("FUNCTIONAL");
    expect(view!.historicalPerformance).toBeGreaterThanOrEqual(60);
    expect(view!.historicalPerformance).toBeLessThan(75);
  });

  it("7. STRONG — high performance without MASTERED evidence", () => {
    const attempts = [
      attemptAt(0, true),
      attemptAt(1, true),
      attemptAt(2, true),
      attemptAt(3, true),
      attemptAt(4, false),
    ];
    const view = toSkillMasterySnapshotView("skill-strong", attempts);
    expect(view!.masteryState).toBe("STRONG");
    expect(view!.historicalPerformance).toBeGreaterThanOrEqual(75);
  });

  it("8. MASTERED — full evidence via canonical deriveMasteryState path", () => {
    const attempts = Array.from({ length: 6 }, (_, i) =>
      attemptAt(i * 2, true, {
        cognitiveLevel: "JUDGMENT",
        confidence: "HIGH",
        questionExternalKey: `q-${i}`,
        skillId: "skill-mastered",
      })
    );
    const view = toSkillMasterySnapshotView("skill-mastered", attempts);
    expect(view!.masteryState).toBe("MASTERED");
    expect(view!.historicalPerformance).toBeGreaterThanOrEqual(85);
  });

  it("9. multiple skills in one batch", () => {
    const views = buildSkillMasterySnapshotViews(["skill-a", "skill-b"], {
      "skill-a": [attemptAt(0, true)],
      "skill-b": [attemptAt(0, false)],
    });
    expect(views).toHaveLength(2);
    expect(views.map((v) => v.skillId).sort()).toEqual(["skill-a", "skill-b"]);
  });

  it("10. correct / incorrect counts", () => {
    const attempts = [
      attemptAt(0, true),
      attemptAt(1, false),
      attemptAt(2, true),
      attemptAt(3, false),
    ];
    const view = toSkillMasterySnapshotView("skill-counts", attempts);
    expect(view!.correct).toBe(2);
    expect(view!.incorrect).toBe(2);
    expect(view!.attempts).toBe(4);
  });

  it("11. recent vs historical performance", () => {
    const attempts = [
      attemptAt(0, true, { difficulty: "HARD" }),
      attemptAt(1, false),
      attemptAt(2, false),
      attemptAt(3, false),
      attemptAt(4, false),
      attemptAt(5, false),
    ];
    const view = toSkillMasterySnapshotView("skill-perf", attempts);
    expect(view!.recentPerformance).toBeLessThan(view!.historicalPerformance);
    expect(view!.recentPerformance).toBe(0);
  });

  it("12. confidence — present on last attempt", () => {
    const attempts = [
      attemptAt(0, true, { confidence: "LOW" }),
      attemptAt(1, true, { confidence: "HIGH" }),
    ];
    const view = toSkillMasterySnapshotView("skill-conf", attempts);
    expect(view!.confidence).toBe("HIGH");
  });

  it("13. confidence — absent when not provided", () => {
    const view = toSkillMasterySnapshotView("skill-noconf", [attemptAt(0, true)]);
    expect(view!.confidence).toBeNull();
  });

  it("14. retention — display-only projection included in view", () => {
    const attempts = [attemptAt(0, true), attemptAt(1, false)];
    const view = toSkillMasterySnapshotView("skill-ret", attempts);
    expect(view!.retention).toBeDefined();
    expect(view!.retention.reviewCount).toBe(2);
    expect(typeof view!.retention.retentionScore).toBe("number");
    expect(view!.retention.nextReviewAt).toBeInstanceOf(Date);
    expect(view!.retention.lastSeen).toEqual(attempts[1]!.answeredAt);
  });

  it("15. determinism — same inputs produce identical snapshots", () => {
    const attempts = [attemptAt(0, true), attemptAt(1, false, { confidence: "MEDIUM" })];
    const a = toSkillMasterySnapshotView("skill-det", attempts);
    const b = toSkillMasterySnapshotView("skill-det", attempts);
    expect(a).toEqual(b);
    expect(buildSkillMasterySnapshot({ skillId: "skill-det", attempts })).toEqual(
      buildSkillMasterySnapshot({ skillId: "skill-det", attempts })
    );
  });

  it("16. buildSkillMasterySnapshot uses deriveMasteryState (no parallel logic)", () => {
    const attempts = [attemptAt(0, false), attemptAt(1, false)];
    const snap = buildSkillMasterySnapshot({ skillId: "skill-canonical", attempts });
    const expected = deriveMasteryState({
      attempts: 2,
      weightedCorrectRate: snap.historicalPerformance,
      distinctQuestionCount: 2,
      maxCognitiveAchieved: "APPLICATION",
      daysSinceFirstExposure: 1,
      recentIncorrectStreak: 2,
      confidenceCalibrated: false,
    });
    expect(snap.masteryState).toBe(expected);
  });

  it("17. snapshot helpers do not import prisma (no DB writes)", () => {
    const snapshotSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-snapshot.ts"),
      "utf8"
    );
    const viewSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-snapshot-view.ts"),
      "utf8"
    );
    expect(snapshotSource).not.toMatch(/prisma/);
    expect(viewSource).not.toMatch(/prisma/);
  });

  it("18. retention.ts not in ConceptMastery write path", () => {
    const runtimeSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-runtime-service.ts"),
      "utf8"
    );
    const progressSource = readFileSync(
      join(process.cwd(), "src/modules/learning-engine/progress-service.ts"),
      "utf8"
    );
    expect(runtimeSource).not.toMatch(/from\s+["'].*retention["']/);
    expect(progressSource).not.toMatch(/from\s+["'].*retention["']/);
  });
});

describe("C5 — snapshot runtime integration", () => {
  let userId: string;
  let questionId: string;
  let correctOptionId: string;
  let skillId: string | null;
  let learningItemId: string;
  const createdAttemptIds: string[] = [];
  const isolatedEmail = `c5-snapshot-${Date.now()}@test.local`;

  beforeAll(async () => {
    const user = await prisma.user.create({
      data: {
        email: isolatedEmail,
        passwordHash: "test",
        name: "C5 Snapshot User",
      },
    });
    userId = user.id;

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "understanding-income" },
      include: {
        module: { include: { course: true } },
        learningItems: {
          include: { questions: { include: { answerOptions: true } } },
        },
      },
    });
    if (!lesson) throw new Error("Lesson not found");

    await prisma.enrollment.create({
      data: { userId, courseId: lesson.module.courseId },
    });

    const quizItem = lesson.learningItems.find((i) => i.type === "QUIZ");
    if (!quizItem) throw new Error("Quiz item not found");
    learningItemId = quizItem.id;
    const question = quizItem.questions[0];
    if (!question) throw new Error("Question not found");
    questionId = question.id;
    skillId = question.skillId;
    correctOptionId = question.answerOptions.find((o) => o.isCorrect)!.id;
  });

  afterEach(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
      createdAttemptIds.length = 0;
    }
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
      await prisma.quizAttempt.deleteMany({
        where: { userId, question: { skillId } },
      });
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
    await prisma.enrollment.deleteMany({ where: { userId } });
    await prisma.user.deleteMany({ where: { email: isolatedEmail } });
  });

  it("19. processQuizMasteryForAttempts returns skillSnapshots with retention", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      learningItemId,
      "HIGH"
    );
    createdAttemptIds.push(attempt.id);
    const result = await processQuizMasteryForAttempts(userId, [attempt.id]);

    expect(Array.isArray(result.skillSnapshots)).toBe(true);
    if (skillId) {
      const snap = result.skillSnapshots.find((s) => s.skillId === skillId);
      expect(snap).toBeDefined();
      expect(snap!.masteryState).toBeDefined();
      expect(snap!.retention).toBeDefined();
      expect(snap!.retention.reviewCount).toBeGreaterThan(0);
      expect([
        "UNKNOWN",
        "EXPOSED",
        "DEVELOPING",
        "FRAGILE",
        "FUNCTIONAL",
        "STRONG",
        "MASTERED",
      ]).toContain(snap!.masteryState);
    }
  });

  it("20. ConceptMastery stays 3-tier — no 7-state persisted", async () => {
    const { attempt } = await recordQuizAttempt(userId, questionId, [correctOptionId]);
    createdAttemptIds.push(attempt.id);
    await processQuizMasteryForAttempts(userId, [attempt.id]);

    if (skillId) {
      const row = await prisma.conceptMastery.findUnique({
        where: { userId_skillId: { userId, skillId } },
      });
      expect(row?.level).toMatch(/^(WEAK|LEARNING|MASTERED)$/);
      expect(row?.level).not.toMatch(/EXPOSED|FRAGILE|FUNCTIONAL|STRONG/);
    }
  });

  it("21. empty attempt batch yields empty skillSnapshots", async () => {
    const result = await processQuizMasteryForAttempts(userId, []);
    expect(result.skillSnapshots).toEqual([]);
  });

  it("22. REVIEW rehydrate exposes skillSnapshots (read-only)", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      learningItemId,
      "MEDIUM"
    );
    createdAttemptIds.push(attempt.id);
    await processQuizMasteryForAttempts(userId, [attempt.id]);

    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      learningItemId,
      "en",
      [questionId]
    );
    expect(rehydrated).not.toBeNull();
    expect(rehydrated!.skillSnapshots.length).toBeGreaterThan(0);
    if (skillId) {
      const snap = rehydrated!.skillSnapshots.find((s) => s.skillId === skillId);
      expect(snap?.masteryState).toBeDefined();
      expect(snap?.retention).toBeDefined();
    }
    expect(attempt.id).toBeDefined();
  });
});

describe("C5 — protected bank and schema guards", () => {
  it("23. Q001–Q200 unchanged (fingerprint)", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("24. ECO = 26 tasks", () => {
    expect(ECO_TASK_COUNT).toBe(26);
  });

  it("25. Q201+ absent from live bank", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(200);
  });

  it("26. T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });

  it("27. no new migrations", () => {
    const migrations = readdirSync(join(process.cwd(), "prisma/migrations"), {
      withFileTypes: true,
    })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    expect(migrations).toHaveLength(10);
  });

  it("28. ConceptMastery schema — 3-tier only", () => {
    const schema = readFileSync(join(process.cwd(), "prisma/schema.prisma"), "utf8");
    const enumBlock = schema.slice(
      schema.indexOf("enum MasteryLevel"),
      schema.indexOf("enum MasteryLevel") + 120
    );
    expect(enumBlock).toContain("WEAK");
    expect(enumBlock).toContain("LEARNING");
    expect(enumBlock).toContain("MASTERED");
    expect(enumBlock).not.toMatch(/EXPOSED|FRAGILE|FUNCTIONAL|STRONG|UNKNOWN/);
  });
});
