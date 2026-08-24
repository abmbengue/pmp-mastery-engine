import { EXAM_TEMPLATES } from "@/modules/assessment-engine/exam-types";
import {
  calculateDeliveryPerformance,
  calculateDomainPerformance,
  calculateExamScore,
  calculatePmpReadiness,
  calculateSkillPerformance,
  evaluateSelectedOptions,
} from "@/modules/assessment-engine/exam-scoring";
import {
  avoidRecentQuestions,
  buildExamBlueprint,
  buildExamFromBlueprint,
  type BlueprintQuestionCandidate,
} from "@/modules/assessment-engine/exam-blueprint";
import {
  buildRetryExam,
  calculatePmpReadinessV2,
  calculateScoreTrend,
  classifyError,
  type ExamErrorCategoryCode,
  type RetryTypeCode,
} from "@/modules/assessment-engine/analytics-engine";
import type {
  ExamScoreResult,
  ExamTypeCode,
  PracticeReadinessLevel,
  PmpDomainCode,
  ScoredExamItem,
} from "@/modules/assessment-engine/exam-types";
import { updateConceptMastery } from "@/modules/learning-engine/progress-service";
import { recommendNextLearning } from "@/modules/learning-engine/recommendation-service";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";
import prisma from "@/data/prisma-client";
import type { Prisma } from "@/generated/prisma/client";
import { randomBytes } from "crypto";

async function loadBankCandidates(domainFilter?: PmpDomainCode | null) {
  const rows = await prisma.question.findMany({
    where: {
      examBank: true,
      ...(domainFilter ? { pmpDomain: domainFilter } : {}),
    },
    include: {
      skill: true,
      skillLinks: { include: { skill: true } },
    },
  });

  return rows.map((q): BlueprintQuestionCandidate => {
    const skillSlugs = new Set<string>();
    if (q.skill?.slug) skillSlugs.add(q.skill.slug);
    for (const link of q.skillLinks) skillSlugs.add(link.skill.slug);
    return {
      id: q.id,
      domain: (q.pmpDomain ?? "PROCESS") as BlueprintQuestionCandidate["domain"],
      deliveryApproach: (q.deliveryApproach ??
        "PREDICTIVE") as BlueprintQuestionCandidate["deliveryApproach"],
      difficulty: (q.examDifficulty ??
        "MEDIUM") as BlueprintQuestionCandidate["difficulty"],
      scenarioType: (q.scenarioType ??
        "BEST_ACTION") as BlueprintQuestionCandidate["scenarioType"],
      skillSlugs: [...skillSlugs],
      learningObjective: (q.learningObjective ??
        "DECIDE") as BlueprintQuestionCandidate["learningObjective"],
    };
  });
}

async function recentQuestionIdsForUser(userId: string, limitSessions = 3) {
  const sessions = await prisma.examSession.findMany({
    where: { userId, status: "COMPLETED" },
    orderBy: { completedAt: "desc" },
    take: limitSessions,
    include: { questions: { select: { questionId: true } } },
  });
  return sessions.flatMap((s) => s.questions.map((q) => q.questionId));
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

export async function createExamSession(
  userId: string,
  examSlug: string,
  options?: { seed?: string }
) {
  await ensureExamTemplates();
  const exam = await prisma.exam.findUnique({ where: { slug: examSlug } });
  if (!exam || !exam.isActive) {
    throw new Error("Exam not found");
  }

  const blueprint = buildExamBlueprint(exam.type as ExamTypeCode, {
    domainFilter: exam.domainFilter ?? undefined,
    totalOverride: exam.questionCount,
  });

  const candidates = await loadBankCandidates(exam.domainFilter);
  if (candidates.length === 0) {
    throw new Error("Question bank is empty");
  }

  if (candidates.length < blueprint.totalQuestions) {
    throw new Error(
      `INSUFFICIENT_QUESTION_BANK: need ${blueprint.totalQuestions}, available ${candidates.length}`
    );
  }

  const recentIds = await recentQuestionIdsForUser(userId);
  const avoid = avoidRecentQuestions(
    candidates.map((c) => c.id),
    recentIds,
    blueprint.totalQuestions
  );
  const exclude = new Set(
    avoid.fellBack ? [] : candidates.map((c) => c.id).filter((id) => !avoid.available.includes(id))
  );

  const seed = options?.seed ?? randomBytes(8).toString("hex");
  let slots;
  try {
    slots = buildExamFromBlueprint(blueprint, candidates, seed, exclude);
  } catch (err) {
    // If exclusion made selection impossible, retry without exclusion
    if (!avoid.fellBack) {
      slots = buildExamFromBlueprint(blueprint, candidates, seed, new Set());
    } else {
      throw err;
    }
  }

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
      blueprintSeed: seed,
      questions: {
        create: slots.map((s, i) => ({
          questionId: s.questionId,
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
          error: true,
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
          readinessExplanationFr: session.result.readinessExplanationFr,
          readinessExplanationEn: session.result.readinessExplanationEn,
          scoreTrend: session.result.scoreTrend,
          domainBreakdown: session.result.domainBreakdown,
          skillBreakdown: session.result.skillBreakdown,
          deliveryBreakdown: session.result.deliveryBreakdown,
          errorBreakdown: session.result.errorBreakdown,
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
        scenarioType: q.scenarioType,
        learningObjective: q.learningObjective,
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
              errorCategory: sq.error?.learnerOverride ?? sq.error?.category ?? null,
              errorId: sq.error?.id ?? null,
            }
          : {}),
      };
    }),
    retryType: session.retryType,
    parentSessionId: session.parentSessionId,
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
    take: 8,
    select: { percentage: true },
  });
  const recentPercentages = [
    ...previousResults.map((r) => r.percentage).reverse(),
    score.percentage,
  ];
  const scoreTrend = calculateScoreTrend(recentPercentages);
  const averageScore = Math.round(
    recentPercentages.reduce((a, b) => a + b, 0) / recentPercentages.length
  );

  // Repeated mistakes: same question wrong in prior completed sessions
  let repeatedMistakeCount = 0;
  const wrongIds = items
    .filter((i) => !i.isCorrect && !i.unanswered)
    .map((i) => i.questionId);
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

  const retryResults = await prisma.examResult.findMany({
    where: { session: { userId, retryType: { not: null } } },
    orderBy: { createdAt: "desc" },
    take: 5,
    select: { percentage: true },
  });

  const target = await getOrCreatePracticeTarget(userId);

  const readinessV2 = calculatePmpReadinessV2({
    recentPercentages,
    averageScore,
    scoreTrend,
    domainPerformances: domainBreakdown,
    skillPerformances: skillBreakdown,
    unansweredRate: score.total === 0 ? 0 : score.unanswered / score.total,
    repeatedMistakeCount,
    retryPercentages: retryResults.map((r) => r.percentage),
    targetScorePercent: target.targetScorePercent,
  });

  // Keep V1 shape for compatibility callers
  const readiness = {
    ...calculatePmpReadiness({
      recentPercentages,
      domainPerformances: domainBreakdown,
      skillPerformances: skillBreakdown,
      unansweredRate: score.total === 0 ? 0 : score.unanswered / score.total,
      repeatedMistakeCount,
    }),
    level: readinessV2.level,
    labelEn: readinessV2.labelEn,
    labelFr: readinessV2.labelFr,
    score: readinessV2.score,
    explanationEn: readinessV2.explanationEn,
    explanationFr: readinessV2.explanationFr,
    currentAverage: readinessV2.currentAverage,
    targetScorePercent: readinessV2.targetScorePercent,
    gap: readinessV2.gap,
  };

  await updateMasteryFromExam(userId, items);

  // Build error records from session questions metadata
  const sessionQuestions = await prisma.examSessionQuestion.findMany({
    where: { sessionId },
    include: {
      answer: true,
      question: {
        include: {
          skill: true,
          skillLinks: { include: { skill: true } },
        },
      },
    },
  });

  const errorRows: Array<{
    sessionQuestionId: string;
    questionId: string;
    skillSlug: string | null;
    domain: PmpDomainCode | null;
    category: ExamErrorCategoryCode;
  }> = [];
  const errorBreakdown: Record<string, number> = {};

  for (const sq of sessionQuestions) {
    const item = items.find((i) => i.questionId === sq.questionId);
    if (!item || item.isCorrect) continue;

    const skillSlugs = item.skillSlugs;
    const category = classifyError({
      scenarioType: sq.question.scenarioType,
      domain: sq.question.pmpDomain,
      deliveryApproach: sq.question.deliveryApproach,
      skillSlugs,
      learningObjective: sq.question.learningObjective,
      unanswered: item.unanswered,
    });
    errorBreakdown[category] = (errorBreakdown[category] ?? 0) + 1;
    errorRows.push({
      sessionQuestionId: sq.id,
      questionId: sq.questionId,
      skillSlug: skillSlugs[0] ?? sq.question.skill?.slug ?? null,
      domain: sq.question.pmpDomain,
      category,
    });
  }

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

    for (const row of errorRows) {
      await tx.examError.create({
        data: {
          userId,
          sessionId,
          sessionQuestionId: row.sessionQuestionId,
          questionId: row.questionId,
          skillSlug: row.skillSlug,
          domain: row.domain,
          category: row.category,
        },
      });
    }

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
        errorBreakdown: errorBreakdown as unknown as Prisma.InputJsonValue,
        readinessLevel: readinessV2.level,
        readinessExplanationFr: readinessV2.explanationFr,
        readinessExplanationEn: readinessV2.explanationEn,
        scoreTrend,
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
    errorBreakdown,
    errors: errorRows,
    readiness,
    readinessV2,
    scoreTrend,
    recommendation,
  };
}

export async function getOrCreatePracticeTarget(userId: string) {
  return prisma.practiceTarget.upsert({
    where: { userId },
    create: { userId, targetScorePercent: 75 },
    update: {},
  });
}

export async function setPracticeTarget(
  userId: string,
  targetScorePercent: number
) {
  if (![70, 75, 80, 85].includes(targetScorePercent)) {
    throw new Error("Invalid target — use 70, 75, 80, or 85");
  }
  return prisma.practiceTarget.upsert({
    where: { userId },
    create: { userId, targetScorePercent },
    update: { targetScorePercent },
  });
}

export async function getPmpPerformanceHistory(userId: string, locale: Locale) {
  const completed = await prisma.examSession.findMany({
    where: { userId, status: "COMPLETED", result: { isNot: null } },
    include: { exam: true, result: true },
    orderBy: { completedAt: "desc" },
    take: 5,
  });

  const attempts = completed.map((s) => ({
    sessionId: s.id,
    date: s.completedAt,
    examType: s.exam.type,
    examTitle: pickLocalized(s.exam.titleFr, s.exam.titleEn, locale),
    score: s.result!.percentage,
    readiness: s.result!.readinessLevel,
    scoreTrend: s.result!.scoreTrend,
    domainBreakdown: s.result!.domainBreakdown,
    retryType: s.retryType,
  }));

  const chronological = [...attempts].reverse().map((a) => a.score);
  const trend = calculateScoreTrend(chronological);
  const scores = attempts.map((a) => a.score);
  const evolution = [...scores].reverse();

  return {
    attempts,
    scoreTrend: trend,
    evolution,
    previousScore: evolution.length >= 2 ? evolution[evolution.length - 2] : null,
    currentScore: evolution.length ? evolution[evolution.length - 1] : null,
  };
}

export async function createRetrySession(
  userId: string,
  parentSessionId: string,
  retryType: RetryTypeCode,
  options?: { seed?: string }
) {
  const parent = await prisma.examSession.findFirst({
    where: { id: parentSessionId, userId, status: "COMPLETED" },
    include: {
      exam: true,
      result: true,
      questions: {
        include: {
          answer: true,
          question: {
            include: { skill: true, skillLinks: { include: { skill: true } } },
          },
          error: true,
        },
      },
    },
  });
  if (!parent) throw new Error("Parent session not found");

  const scored = await buildScoredItems(parentSessionId);
  const wrongQuestionIds = scored
    .filter((i) => !i.isCorrect)
    .map((i) => i.questionId);
  const skillBreakdown = calculateSkillPerformance(scored);
  const domainBreakdown = calculateDomainPerformance(scored);
  const weakSkills = skillBreakdown
    .filter((s) => s.band === "WEAK")
    .map((s) => s.skillSlug);
  const weakDomain = domainBreakdown
    .filter((d) => d.total > 0)
    .sort((a, b) => a.percentage - b.percentage)[0]?.domain;

  const errorCategories = [
    ...new Set(
      parent.questions
        .map((q) => q.error?.category)
        .filter((c): c is ExamErrorCategoryCode => Boolean(c))
    ),
  ];

  // Easy fail streak from recent completed sessions
  const recent = await prisma.examSession.findMany({
    where: { userId, status: "COMPLETED" },
    orderBy: { completedAt: "desc" },
    take: 5,
    include: {
      questions: { include: { question: true, answer: true } },
      result: true,
    },
  });
  let easyFailStreak = 0;
  for (const s of recent) {
    const easyWrong = s.questions.filter((q) => {
      if (q.question.examDifficulty !== "EASY") return false;
      const selected = (q.answer?.selectedOptionIds as string[] | undefined) ?? [];
      return selected.length > 0;
    });
    // Approximate: if overall score < 60, count as easy struggle
    if ((s.result?.percentage ?? 100) < 60) easyFailStreak += 1;
    else break;
    void easyWrong;
  }

  const lastRetry = recent.find((s) => s.retryType);
  const plan = buildRetryExam({
    type: retryType,
    wrongQuestionIds,
    weakSkillSlugs: weakSkills,
    weakDomain,
    errorCategories,
    easyFailStreak,
    lastRetryPercentage: lastRetry?.result?.percentage ?? null,
  });

  const allCandidates = await loadBankCandidates(
    plan.domain ?? parent.exam.domainFilter
  );

  let filtered = allCandidates;
  if (plan.skillSlugs.length) {
    filtered = filtered.filter((c) =>
      c.skillSlugs.some((s) => plan.skillSlugs.includes(s))
    );
  }
  if (plan.domain) {
    filtered = filtered.filter((c) => c.domain === plan.domain);
  }
  if (plan.errorCategories.length) {
    filtered = filtered.filter((c) =>
      plan.errorCategories.includes(
        classifyError({
          scenarioType: c.scenarioType,
          domain: c.domain,
          deliveryApproach: c.deliveryApproach,
          skillSlugs: c.skillSlugs,
          learningObjective: c.learningObjective,
        })
      )
    );
  }
  if (plan.includeQuestionIds.length) {
    const includeSet = new Set(plan.includeQuestionIds);
    const forced = allCandidates.filter((c) => includeSet.has(c.id));
    const rest = filtered.filter((c) => !includeSet.has(c.id));
    filtered = [...forced, ...rest];
  }

  // Prefer difficulties
  const preferred = filtered.filter((c) =>
    plan.preferDifficulties.includes(c.difficulty)
  );
  const pool = preferred.length >= plan.questionCount ? preferred : filtered;

  const recentIds = await recentQuestionIdsForUser(userId);
  const avoid = avoidRecentQuestions(
    pool.map((c) => c.id),
    recentIds,
    plan.questionCount
  );
  const availablePool = pool.filter((c) => avoid.available.includes(c.id));

  if (availablePool.length < plan.questionCount && pool.length < plan.questionCount) {
    throw new Error(
      `INSUFFICIENT_QUESTION_BANK: need ${plan.questionCount} for retry, available ${pool.length}`
    );
  }

  const seed = options?.seed ?? randomBytes(8).toString("hex");
  const retryBlueprint = buildExamBlueprint("QUICK_PRACTICE", {
    totalOverride: Math.min(plan.questionCount, availablePool.length || pool.length),
    domainFilter: plan.domain,
  });
  // For retries we may need fewer than blueprint domain mix — use builder with override total
  const slots = buildExamFromBlueprint(
    { ...retryBlueprint, totalQuestions: retryBlueprint.totalQuestions },
    availablePool.length >= retryBlueprint.totalQuestions ? availablePool : pool,
    seed,
    new Set()
  );

  // Reuse quick-practice exam template for timer/config of retries
  await ensureExamTemplates();
  const retryExam = await prisma.exam.findUnique({
    where: { slug: "quick-practice" },
  });
  if (!retryExam) throw new Error("Retry exam template missing");

  const durationMinutes = Math.max(
    10,
    Math.round((slots.length / 10) * retryExam.durationMinutes)
  );

  const session = await prisma.examSession.create({
    data: {
      userId,
      examId: retryExam.id,
      status: "IN_PROGRESS",
      currentIndex: 0,
      elapsedSeconds: 0,
      remainingSeconds: durationMinutes * 60,
      startedAt: new Date(),
      blueprintSeed: seed,
      retryType,
      parentSessionId: parentSessionId,
      questions: {
        create: slots.map((s, i) => ({
          questionId: s.questionId,
          sortOrder: i,
          flagged: false,
        })),
      },
    },
    include: { exam: true, questions: { orderBy: { sortOrder: "asc" } } },
  });

  return { session, plan };
}

export async function overrideExamErrorCategory(
  userId: string,
  sessionQuestionId: string,
  category: ExamErrorCategoryCode
) {
  const row = await prisma.examError.findFirst({
    where: { sessionQuestionId, userId },
  });
  if (!row) throw new Error("Error record not found");
  return prisma.examError.update({
    where: { id: row.id },
    data: { learnerOverride: category, category },
  });
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
  const history = await getPmpPerformanceHistory(userId, locale);
  const target = await getOrCreatePracticeTarget(userId);
  const currentAverage = averageScore ?? 0;

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
    readinessExplanation:
      locale === "fr"
        ? last?.result?.readinessExplanationFr
        : last?.result?.readinessExplanationEn,
    scoreTrend: history.scoreTrend,
    evolution: history.evolution,
    performanceHistory: history.attempts,
    targetScorePercent: target.targetScorePercent,
    targetGap: target.targetScorePercent - currentAverage,
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
