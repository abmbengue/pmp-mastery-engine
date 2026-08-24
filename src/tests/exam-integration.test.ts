import { beforeAll, describe, expect, it } from "vitest";
import prisma from "@/data/prisma-client";
import {
  answerExamQuestion,
  createExamSession,
  ensureExamTemplates,
  flagExamQuestion,
  getExamSessionView,
  submitExamSession,
} from "@/modules/assessment-engine/exam-service";
import { recommendNextLearning } from "@/modules/learning-engine/recommendation-service";

describe("PMP exam integration", () => {
  let userId: string;

  beforeAll(async () => {
    await ensureExamTemplates();
    const user = await prisma.user.findUnique({
      where: { email: "demo@pla.local" },
    });
    if (!user) throw new Error("Demo user missing — run db:seed");
    userId = user.id;

    const bank = await prisma.question.count({ where: { examBank: true } });
    expect(bank).toBeGreaterThanOrEqual(180);
  });

  it("createExam / startExam / answer / flag / submit / result / mastery / recommendations", async () => {
    const session = await createExamSession(userId, "quick-practice");
    expect(session.status).toBe("IN_PROGRESS");
    expect(session.questions.length).toBe(10);
    expect(session.exam.durationMinutes).toBe(15);

    const viewBefore = await getExamSessionView(userId, session.id, "en");
    expect(viewBefore).not.toBeNull();
    // Correct answers must not be exposed before submit
    expect(viewBefore!.questions[0]).not.toHaveProperty("correctOptionIds");
    expect(viewBefore!.questions[0].options[0]).not.toHaveProperty("isCorrect");

    const first = viewBefore!.questions[0];
    await answerExamQuestion(
      userId,
      session.id,
      first.sessionQuestionId,
      [first.options[0].id],
      0
    );
    await flagExamQuestion(userId, session.id, first.sessionQuestionId, true);

    // Answer remaining with first option (may be wrong — fine for integration)
    for (const q of viewBefore!.questions.slice(1)) {
      await answerExamQuestion(
        userId,
        session.id,
        q.sessionQuestionId,
        [q.options[0].id],
        q.sortOrder
      );
    }

    const outcome = await submitExamSession(userId, session.id, "en");
    expect(outcome.score.total).toBe(10);
    expect(outcome.result.percentage).toBeGreaterThanOrEqual(0);
    expect(["NOT_READY", "DEVELOPING", "READY"]).toContain(
      outcome.readiness.level
    );
    expect(outcome.readiness.labelEn).toContain("Practice Readiness");
    expect(outcome.readiness.limitationsEn.toLowerCase()).toContain("not an official");

    const viewAfter = await getExamSessionView(userId, session.id, "en");
    expect(viewAfter?.status).toBe("COMPLETED");
    expect(viewAfter?.questions[0]).toHaveProperty("correctOptionIds");
    expect(viewAfter?.questions[0].options[0]).toHaveProperty("isCorrect");

    const attempts = await prisma.quizAttempt.count({
      where: { userId, question: { examBank: true } },
    });
    expect(attempts).toBeGreaterThanOrEqual(10);

    const reco = await recommendNextLearning(userId, "en");
    // May be null only if nothing enrolled — demo user is enrolled
    expect(reco === null || typeof reco.path === "string").toBe(true);
  });

  it("resumeExam keeps answers and flags", async () => {
    const session = await createExamSession(userId, "domain-process");
    const view = await getExamSessionView(userId, session.id, "fr");
    expect(view!.exam.questionCount).toBeLessThanOrEqual(25);
    expect(view!.questions.length).toBeGreaterThan(0);

    const q = view!.questions[0];
    await answerExamQuestion(userId, session.id, q.sessionQuestionId, [
      q.options[0].id,
    ]);
    await flagExamQuestion(userId, session.id, q.sessionQuestionId, true);

    const resumed = await getExamSessionView(userId, session.id, "fr");
    expect(resumed?.status).toBe("IN_PROGRESS");
    expect(resumed?.questions[0].answered).toBe(true);
    expect(resumed?.questions[0].flagged).toBe(true);
    expect(resumed?.questions[0].selectedOptionIds).toEqual([q.options[0].id]);
  });

  it("FR/EN presentation does not change IDs or scoring keys", async () => {
    const session = await createExamSession(userId, "quick-practice");
    const en = await getExamSessionView(userId, session.id, "en");
    const fr = await getExamSessionView(userId, session.id, "fr");
    expect(en!.questions.map((q) => q.questionId)).toEqual(
      fr!.questions.map((q) => q.questionId)
    );
    expect(en!.questions.map((q) => q.options.map((o) => o.id))).toEqual(
      fr!.questions.map((q) => q.options.map((o) => o.id))
    );
    expect(en!.questions[0].domain).toBe(fr!.questions[0].domain);
  });

  it("exam → error analysis → retry → recommendation", async () => {
    const { createRetrySession, getPmpPerformanceHistory, setPracticeTarget } =
      await import("@/modules/assessment-engine/exam-service");

    await setPracticeTarget(userId, 80);
    const session = await createExamSession(userId, "quick-practice", {
      seed: "phase8-int-1",
    });
    const view = await getExamSessionView(userId, session.id, "en");
    for (const q of view!.questions) {
      await answerExamQuestion(userId, session.id, q.sessionQuestionId, [
        q.options[0].id,
      ]);
    }
    const outcome = await submitExamSession(userId, session.id, "en");
    expect(outcome.errorBreakdown).toBeDefined();
    expect(outcome.scoreTrend).toBeTruthy();
    expect(outcome.readinessV2.explanationEn.length).toBeGreaterThan(10);

    const { session: retry } = await createRetrySession(
      userId,
      session.id,
      "RETRY_WEAK_SKILLS",
      { seed: "phase8-retry" }
    );
    expect(retry.retryType).toBe("RETRY_WEAK_SKILLS");
    expect(retry.parentSessionId).toBe(session.id);
    expect(retry.questions.length).toBeGreaterThan(0);

    const history = await getPmpPerformanceHistory(userId, "en");
    expect(history.attempts.length).toBeGreaterThan(0);
  });
});
