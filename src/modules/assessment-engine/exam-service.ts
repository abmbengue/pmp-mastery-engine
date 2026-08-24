import { EXAM_TEMPLATES } from "@/modules/assessment-engine/exam-types";
import {
  calculateDeliveryPerformance,
  calculateDomainPerformance,
  calculateExamScore,
  calculatePmpReadiness,
  calculateSkillPerformance,
  evaluateSelectedOptions,
} from "@/modules/assessment-engine/exam-scoring";
import type {
  ExamScoreResult,
  PracticeReadinessLevel,
  ScoredExamItem,
} from "@/modules/assessment-engine/exam-types";
import { updateConceptMastery } from "@/modules/learning-engine/progress-service";
import { recommendNextLearning } from "@/modules/learning-engine/recommendation-service";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";
import prisma from "@/data/prisma-client";
import type { Prisma } from "@/generated/prisma/client";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export async function ensureExamTemplates() {
  for (const t of EXAM_TEMPLATES) {
    await prisma.exam.upsert({
      where: { slug: t.slug },
      create: {
        slug: t.slug,
        type: t.type,
        titleFr: t.titleFr,
        titleEn: t.titleEn,
        descriptionFr: t.descriptionFr,
        descriptionEn: t.descriptionEn,
        questionCount: t.questionCount,
        durationMinutes: t.durationMinutes,
        domainFilter: t.domainFilter ?? null,
        isActive: true,
      },
      update: {
        type: t.type,
        titleFr: t.titleFr,
        titleEn: t.titleEn,
        descriptionFr: t.descriptionFr,
        descriptionEn: t.descriptionEn,
        questionCount: t.questionCount,
        durationMinutes: t.durationMinutes,
        domainFilter: t.domainFilter ?? null,
        isActive: true,
      },
    });
  }
}

export async function listExams(locale: Locale) {
  await ensureExamTemplates();
  const exams = await prisma.exam.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "asc" },
  });
  return exams.map((e) => ({
    id: e.id,
    slug: e.slug,
    type: e.type,
    title: pickLocalized(e.titleFr, e.titleEn, locale),
    description: pickLocalized(e.descriptionFr, e.descriptionEn, locale),
    questionCount: e.questionCount,
    durationMinutes: e.durationMinutes,
    domainFilter: e.domainFilter,
  }));
}

export async function createExamSession(userId: string, examSlug: string) {
  await ensureExamTemplates();
  const exam = await prisma.exam.findUnique({ where: { slug: examSlug } });
  if (!exam || !exam.isActive) {
    throw new Error("Exam not found");
  }

  const where = {
    examBank: true,
    ...(exam.domainFilter ? { pmpDomain: exam.domainFilter } : {}),
  };

  const bank = await prisma.question.findMany({
    where,
    select: { id: true },
  });

  if (bank.length === 0) {
    throw new Error("Question bank is empty");
  }

  const count = Math.min(exam.questionCount, bank.length);
  const picked = shuffle(bank).slice(0, count);

  const remainingSeconds =
    exam.durationMinutes > 0 ? exam.durationMinutes * 60 : null;

  const session = await prisma.examSession.create({
    data: {
      userId,
      examId: exam.id,
      status: "IN_PROGRESS",
      currentIndex: 0,
      elapsedSeconds: 0,
      remainingSeconds,
      startedAt: new Date(),
      questions: {
        create: picked.map((q, i) => ({
          questionId: q.id,
          sortOrder: i,
          flagged: false,
        })),
      },
    },
    include: {
      exam: true,
      questions: { orderBy: { sortOrder: "asc" } },
    },
  });

  return session;
}

/** Public question payload — never includes isCorrect / explanations */
export async function getExamSessionView(
  userId: string,
  sessionId: string,
  locale: Locale
) {
  const session = await prisma.examSession.findFirst({
    where: { id: sessionId, userId },
    include: {
      exam: true,
      questions: {
        orderBy: { sortOrder: "asc" },
        include: {
          answer: true,
          question: {
            include: {
              answerOptions: { orderBy: { sortOrder: "asc" } },
            },
          },
        },
      },
      result: true,
    },
  });

  if (!session) return null;

  const revealAnswers =
    session.status === "COMPLETED" || session.status === "ABANDONED";

  return {
    id: session.id,
    status: session.status,
    currentIndex: session.currentIndex,
    elapsedSeconds: session.elapsedSeconds,
    remainingSeconds: session.remainingSeconds,
    startedAt: session.startedAt,
    completedAt: session.completedAt,
    exam: {
      id: session.exam.id,
      slug: session.exam.slug,
      type: session.exam.type,
      title: pickLocalized(session.exam.titleFr, session.exam.titleEn, locale),
      questionCount: session.questions.length,
      durationMinutes: session.exam.durationMinutes,
      domainFilter: session.exam.domainFilter,
    },
    summary: {
      answered: session.questions.filter((q) => q.answer).length,
      unanswered: session.questions.filter((q) => !q.answer).length,
      flagged: session.questions.filter((q) => q.flagged).length,
      total: session.questions.length,
    },
    result: session.result
      ? {
          rawScore: session.result.rawScore,
          percentage: session.result.percentage,
          correctCount: session.result.correctCount,
          incorrectCount: session.result.incorrectCount,
          unansweredCount: session.result.unansweredCount,
          readinessLevel: session.result.readinessLevel as PracticeReadinessLevel,
          domainBreakdown: session.result.domainBreakdown,
          skillBreakdown: session.result.skillBreakdown,
          deliveryBreakdown: session.result.deliveryBreakdown,
        }
      : null,
    questions: session.questions.map((sq) => {
      const q = sq.question;
      const selected = (sq.answer?.selectedOptionIds as string[] | undefined) ?? [];
      return {
        sessionQuestionId: sq.id,
        questionId: q.id,
        sortOrder: sq.sortOrder,
        flagged: sq.flagged,
        answered: Boolean(sq.answer),
        selectedOptionIds: selected,
        type: q.type,
        scenario: pickLocalized(q.scenarioFr ?? "", q.scenarioEn ?? "", locale) || null,
        prompt: pickLocalized(q.promptFr, q.promptEn, locale),
        difficulty: q.examDifficulty,
        domain: q.pmpDomain,
        deliveryApproach: q.deliveryApproach,
        options: q.answerOptions.map((o) => ({
          id: o.id,
          label: pickLocalized(o.labelFr, o.labelEn, locale),
          ...(revealAnswers
            ? {
                isCorrect: o.isCorrect,
                explanationWrong: pickLocalized(
                  o.explanationWrongFr ?? "",
                  o.explanationWrongEn ?? "",
                  locale
                ),
              }
            : {}),
        })),
        ...(revealAnswers
          ? {
              explanation: pickLocalized(
                q.explanationCorrectFr,
                q.explanationCorrectEn,
                locale
              ),
              correctOptionIds: q.answerOptions
                .filter((o) => o.isCorrect)
                .map((o) => o.id),
            }
          : {}),
      };
    }),
  };
}

export async function answerExamQuestion(
  userId: string,
  sessionId: string,
  sessionQuestionId: string,
  selectedOptionIds: string[],
  currentIndex?: number,
  elapsedSeconds?: number,
  remainingSeconds?: number | null
) {
  const session = await prisma.examSession.findFirst({
    where: { id: sessionId, userId, status: "IN_PROGRESS" },
    include: { questions: true },
  });
  if (!session) throw new Error("Session not found or not in progress");

  const sq = session.questions.find((q) => q.id === sessionQuestionId);
  if (!sq) throw new Error("Question not in session");

  await prisma.examAnswer.upsert({
    where: { sessionQuestionId },
    create: {
      sessionQuestionId,
      selectedOptionIds,
    },
    update: {
      selectedOptionIds,
      answeredAt: new Date(),
    },
  });

  await prisma.examSession.update({
    where: { id: sessionId },
    data: {
      ...(typeof currentIndex === "number" ? { currentIndex } : {}),
      ...(typeof elapsedSeconds === "number" ? { elapsedSeconds } : {}),
      ...(remainingSeconds !== undefined ? { remainingSeconds } : {}),
    },
  });

  return { ok: true };
}

export async function flagExamQuestion(
  userId: string,
  sessionId: string,
  sessionQuestionId: string,
  flagged: boolean
) {
  const session = await prisma.examSession.findFirst({
    where: { id: sessionId, userId, status: "IN_PROGRESS" },
  });
  if (!session) throw new Error("Session not found or not in progress");

  const updated = await prisma.examSessionQuestion.updateMany({
    where: { id: sessionQuestionId, sessionId },
    data: { flagged },
  });
  if (updated.count === 0) throw new Error("Question not in session");
  return { ok: true };
}

export async function updateExamNavigation(
  userId: string,
  sessionId: string,
  data: {
    currentIndex?: number;
    elapsedSeconds?: number;
    remainingSeconds?: number | null;
  }
) {
  const session = await prisma.examSession.findFirst({
    where: { id: sessionId, userId, status: { in: ["IN_PROGRESS", "NOT_STARTED"] } },
  });
  if (!session) throw new Error("Session not found");

  return prisma.examSession.update({
    where: { id: sessionId },
    data: {
      ...(typeof data.currentIndex === "number" ? { currentIndex: data.currentIndex } : {}),
      ...(typeof data.elapsedSeconds === "number"
        ? { elapsedSeconds: data.elapsedSeconds }
        : {}),
      ...(data.remainingSeconds !== undefined
        ? { remainingSeconds: data.remainingSeconds }
        : {}),
      status: "IN_PROGRESS",
      startedAt: session.startedAt ?? new Date(),
    },
  });
}

export async function abandonExamSession(userId: string, sessionId: string) {
  const session = await prisma.examSession.findFirst({
    where: { id: sessionId, userId, status: "IN_PROGRESS" },
  });
  if (!session) throw new Error("Session not found");
  return prisma.examSession.update({
    where: { id: sessionId },
    data: { status: "ABANDONED", completedAt: new Date() },
  });
}

async function buildScoredItems(sessionId: string): Promise<ScoredExamItem[]> {
  const questions = await prisma.examSessionQuestion.findMany({
    where: { sessionId },
    orderBy: { sortOrder: "asc" },
    include: {
      answer: true,
      question: {
        include: {
          answerOptions: true,
          skill: true,
          skillLinks: { include: { skill: true } },
        },
      },
    },
  });

  return questions.map((sq) => {
    const selected = (sq.answer?.selectedOptionIds as string[] | undefined) ?? [];
    const correctOptionIds = sq.question.answerOptions
      .filter((o) => o.isCorrect)
      .map((o) => o.id);
    const unanswered = selected.length === 0;
    const isCorrect =
      !unanswered &&
      evaluateSelectedOptions(selected, correctOptionIds, sq.question.type);

    const skillSlugs = new Set<string>();
    if (sq.question.skill?.slug) skillSlugs.add(sq.question.skill.slug);
    for (const link of sq.question.skillLinks) {
      skillSlugs.add(link.skill.slug);
    }

    return {
      questionId: sq.questionId,
      selectedOptionIds: selected,
      correctOptionIds,
      isCorrect,
      unanswered,
      domain: sq.question.pmpDomain,
      deliveryApproach: sq.question.deliveryApproach,
      skillSlugs: [...skillSlugs],
    };
  });
}

async function updateMasteryFromExam(
  userId: string,
  items: ScoredExamItem[]
) {
  const bySkill = new Map<string, { correct: number; total: number }>();
  for (const item of items) {
    if (item.unanswered) continue;
    for (const slug of item.skillSlugs) {
      const row = bySkill.get(slug) ?? { correct: 0, total: 0 };
      row.total += 1;
      if (item.isCorrect) row.correct += 1;
      bySkill.set(slug, row);
    }
  }

  // Record one quiz attempt per answered exam question (learning continuity)
  for (const item of items) {
    if (item.unanswered) continue;
    const prev = await prisma.quizAttempt.count({
      where: { userId, questionId: item.questionId },
    });
    await prisma.quizAttempt.create({
      data: {
        userId,
        questionId: item.questionId,
        score: item.isCorrect ? 100 : 0,
        answers: item.selectedOptionIds,
        attemptNo: prev + 1,
        isCorrect: item.isCorrect,
      },
    });
  }

  for (const [slug, stats] of bySkill) {
    const skill = await prisma.skill.findUnique({ where: { slug } });
    if (!skill) continue;
    const pct = Math.round((stats.correct / stats.total) * 100);

    // Blend with existing quiz attempts for this skill
    const attempts = await prisma.quizAttempt.findMany({
      where: { userId, question: { skillId: skill.id } },
    });
    let avg = pct;
    if (attempts.length > 0) {
      const attemptAvg =
        attempts.reduce((s, a) => s + a.score, 0) / attempts.length;
      avg = Math.round((attemptAvg + pct) / 2);
    }
    await updateConceptMastery(
      userId,
      skill.id,
      computeMasteryLevelFromScore(avg)
    );
  }
}

export async function submitExamSession(
  userId: string,
  sessionId: string,
  locale: Locale,
  elapsedSeconds?: number
) {
  const session = await prisma.examSession.findFirst({
    where: { id: sessionId, userId, status: "IN_PROGRESS" },
    include: { exam: true },
  });
  if (!session) throw new Error("Session not found or not in progress");

  const items = await buildScoredItems(sessionId);
  const score: ExamScoreResult = calculateExamScore(items);
  const domainBreakdown = calculateDomainPerformance(items);
  const skillBreakdown = calculateSkillPerformance(items);
  const deliveryBreakdown = calculateDeliveryPerformance(items);

  const previousResults = await prisma.examResult.findMany({
    where: { session: { userId } },
    orderBy: { createdAt: "desc" },
    take: 5,
    select: { percentage: true },
  });
  const recentPercentages = [
    ...previousResults.map((r) => r.percentage).reverse(),
    score.percentage,
  ];

  // Repeated mistakes: same question wrong in prior completed sessions
  let repeatedMistakeCount = 0;
  const wrongIds = items.filter((i) => !i.isCorrect && !i.unanswered).map((i) => i.questionId);
  if (wrongIds.length > 0) {
    const priorWrong = await prisma.quizAttempt.findMany({
      where: {
        userId,
        questionId: { in: wrongIds },
        isCorrect: false,
      },
      select: { questionId: true },
    });
    const priorSet = new Set(priorWrong.map((p) => p.questionId));
    repeatedMistakeCount = wrongIds.filter((id) => priorSet.has(id)).length;
  }

  const readiness = calculatePmpReadiness({
    recentPercentages,
    domainPerformances: domainBreakdown,
    skillPerformances: skillBreakdown,
    unansweredRate: score.total === 0 ? 0 : score.unanswered / score.total,
    repeatedMistakeCount,
  });

  await updateMasteryFromExam(userId, items);

  const result = await prisma.$transaction(async (tx) => {
    await tx.examSession.update({
      where: { id: sessionId },
      data: {
        status: "COMPLETED",
        completedAt: new Date(),
        elapsedSeconds: elapsedSeconds ?? session.elapsedSeconds,
        remainingSeconds: 0,
      },
    });

    return tx.examResult.create({
      data: {
        sessionId,
        rawScore: score.rawScore,
        percentage: score.percentage,
        correctCount: score.correct,
        incorrectCount: score.incorrect,
        unansweredCount: score.unanswered,
        domainBreakdown: domainBreakdown as unknown as Prisma.InputJsonValue,
        skillBreakdown: skillBreakdown as unknown as Prisma.InputJsonValue,
        deliveryBreakdown: deliveryBreakdown as unknown as Prisma.InputJsonValue,
        readinessLevel: readiness.level,
      },
    });
  });

  const recommendation = await recommendNextLearning(userId, locale);

  return {
    result,
    score,
    domainBreakdown,
    skillBreakdown,
    deliveryBreakdown,
    readiness,
    recommendation,
  };
}

export async function findResumableSession(userId: string, examSlug?: string) {
  return prisma.examSession.findFirst({
    where: {
      userId,
      status: "IN_PROGRESS",
      ...(examSlug ? { exam: { slug: examSlug } } : {}),
    },
    include: { exam: true },
    orderBy: { updatedAt: "desc" },
  });
}

export async function getPmpPracticeDashboard(userId: string, locale: Locale) {
  await ensureExamTemplates();

  const completed = await prisma.examSession.findMany({
    where: { userId, status: "COMPLETED", result: { isNot: null } },
    include: {
      exam: true,
      result: true,
    },
    orderBy: { completedAt: "desc" },
  });

  const percentages = completed
    .map((s) => s.result?.percentage)
    .filter((n): n is number => typeof n === "number");

  const last = completed[0] ?? null;
  const bestScore = percentages.length ? Math.max(...percentages) : null;
  const averageScore = percentages.length
    ? Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length)
    : null;

  const answeredAgg = await prisma.examAnswer.count({
    where: { sessionQuestion: { session: { userId } } },
  });

  let weakestDomain: string | null = null;
  if (last?.result?.domainBreakdown) {
    const domains = last.result.domainBreakdown as Array<{
      domain: string;
      percentage: number;
      total: number;
    }>;
    const withData = domains.filter((d) => d.total > 0);
    withData.sort((a, b) => a.percentage - b.percentage);
    weakestDomain = withData[0]?.domain ?? null;
  }

  const readinessLevel =
    (last?.result?.readinessLevel as PracticeReadinessLevel | undefined) ??
    "NOT_READY";

  const inProgress = await findResumableSession(userId);

  return {
    lastExam: last
      ? {
          sessionId: last.id,
          examSlug: last.exam.slug,
          title: pickLocalized(last.exam.titleFr, last.exam.titleEn, locale),
          percentage: last.result?.percentage ?? 0,
          completedAt: last.completedAt,
        }
      : null,
    bestScore,
    averageScore,
    questionsAnswered: answeredAgg,
    weakestDomain,
    practiceReadiness: readinessLevel,
    inProgressSession: inProgress
      ? {
          sessionId: inProgress.id,
          examSlug: inProgress.exam.slug,
          title: pickLocalized(
            inProgress.exam.titleFr,
            inProgress.exam.titleEn,
            locale
          ),
        }
      : null,
  };
}

export async function assertExamSessionOwned(
  userId: string,
  sessionId: string
) {
  const session = await prisma.examSession.findFirst({
    where: { id: sessionId, userId },
  });
  if (!session) throw new Error("Session not found");
  return session;
}
