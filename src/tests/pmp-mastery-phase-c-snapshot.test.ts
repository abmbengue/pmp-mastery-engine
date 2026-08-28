/**
 * Phase C — skill mastery snapshot views (iteration 4/10).
 */

import { beforeAll, describe, expect, it } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
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
import type { AttemptMasteryInput } from "@/modules/mastery-engine/weakness-model";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

describe("Phase C — snapshot pure helpers", () => {
  const answeredAt = new Date("2026-08-28T12:00:00Z");

  it("returns null for unknown/empty skill attempts", () => {
    expect(toSkillMasterySnapshotView("", [])).toBeNull();
    expect(toSkillMasterySnapshotView("skill-a", [])).toBeNull();
  });

  it("maps attempts to 7-state via buildSkillMasterySnapshot", () => {
    const attempts: AttemptMasteryInput[] = [
      {
        correct: true,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        answeredAt,
        skillId: "skill-db-1",
      },
    ];
    const view = toSkillMasterySnapshotView("skill-db-1", attempts);
    expect(view).not.toBeNull();
    expect(view!.masteryState).toBe("EXPOSED");
    expect(view!.attempts).toBe(1);
    expect(view!.historicalPerformance).toBe(100);
  });

  it("derives FRAGILE for weak recent streak (canonical deriveMasteryState)", () => {
    const attempts: AttemptMasteryInput[] = [
      {
        correct: false,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        answeredAt,
      },
      {
        correct: false,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        answeredAt: new Date("2026-08-28T12:01:00Z"),
      },
    ];
    const view = toSkillMasterySnapshotView("skill-db-fragile", attempts);
    expect(view!.masteryState).toBe("FRAGILE");
    expect(
      deriveMasteryState({
        attempts: 2,
        weightedCorrectRate: 0,
        distinctQuestionCount: 2,
        maxCognitiveAchieved: "APPLICATION",
        daysSinceFirstExposure: 0,
        recentIncorrectStreak: 2,
        confidenceCalibrated: false,
      })
    ).toBe("FRAGILE");
  });

  it("supports multiple skills in one batch", () => {
    const views = buildSkillMasterySnapshotViews(
      ["skill-a", "skill-b"],
      {
        "skill-a": [
          {
            correct: true,
            difficulty: "EASY",
            cognitiveLevel: "RECOGNITION",
            answeredAt,
          },
        ],
        "skill-b": [
          {
            correct: false,
            difficulty: "HARD",
            cognitiveLevel: "JUDGMENT",
            answeredAt,
          },
        ],
      }
    );
    expect(views).toHaveLength(2);
    expect(views.map((v) => v.skillId).sort()).toEqual(["skill-a", "skill-b"]);
    expect(views[0]!.masteryState).toBeDefined();
  });
});

describe("Phase C — snapshot runtime (DB)", () => {
  let userId: string;
  let questionId: string;
  let correctOptionId: string;
  let skillId: string | null;

  beforeAll(async () => {
    const user = await prisma.user.findUnique({
      where: { email: "demo@pla.local" },
    });
    if (!user) throw new Error("Demo user not found");
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
    const question = quizItem?.questions[0];
    if (!question) throw new Error("Question not found");
    questionId = question.id;
    skillId = question.skillId;
    correctOptionId = question.answerOptions.find((o) => o.isCorrect)!.id;
  });

  it("returns skillSnapshots from processQuizMasteryForAttempts", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      "HIGH"
    );
    const result = await processQuizMasteryForAttempts(userId, [attempt.id]);

    expect(Array.isArray(result.skillSnapshots)).toBe(true);
    if (skillId) {
      expect(result.skillSnapshots.some((s) => s.skillId === skillId)).toBe(true);
      const snap = result.skillSnapshots.find((s) => s.skillId === skillId);
      expect(snap?.masteryState).toBeDefined();
      expect(["UNKNOWN", "EXPOSED", "DEVELOPING", "FRAGILE", "FUNCTIONAL", "STRONG", "MASTERED"]).toContain(
        snap!.masteryState
      );
    }
  });

  it("keeps ConceptMastery strictly 3-tier in DB (no 7-state write)", async () => {
    const { attempt } = await recordQuizAttempt(userId, questionId, [correctOptionId]);
    await processQuizMasteryForAttempts(userId, [attempt.id]);

    if (skillId) {
      const row = await prisma.conceptMastery.findUnique({
        where: { userId_skillId: { userId, skillId } },
      });
      expect(row?.level).toMatch(/^(WEAK|LEARNING|MASTERED)$/);
      expect(row?.level).not.toMatch(/EXPOSED|FRAGILE|FUNCTIONAL|STRONG/);
    }
  });

  it("returns empty skillSnapshots for empty attempt batch", async () => {
    const result = await processQuizMasteryForAttempts(userId, []);
    expect(result.skillSnapshots).toEqual([]);
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
  });
});
