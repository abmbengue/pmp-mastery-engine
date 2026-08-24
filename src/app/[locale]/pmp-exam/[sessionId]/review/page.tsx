import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { requireSession } from "@/modules/auth/session";
import { getExamSessionView } from "@/modules/assessment-engine/exam-service";
import { recommendNextLearning } from "@/modules/learning-engine/recommendation-service";
import { ExamReviewClient } from "@/app/[locale]/components/exam/ExamReviewClient";
import type { Locale } from "@/shared/types/locale";
import {
  calculatePmpReadiness,
} from "@/modules/assessment-engine/exam-scoring";
import type {
  DeliveryPerformanceRow,
  DomainPerformanceRow,
  SkillPerformanceRow,
} from "@/modules/assessment-engine/exam-types";

export default async function ExamReviewPage({
  params,
}: {
  params: Promise<{ locale: string; sessionId: string }>;
}) {
  const { locale, sessionId } = await params;
  setRequestLocale(locale);
  const session = await requireSession(locale);
  const t = await getTranslations("pmpExam");
  const loc = locale as Locale;

  const view = await getExamSessionView(session.user.id, sessionId, loc);
  if (!view) notFound();
  if (view.status !== "COMPLETED" || !view.result) {
    redirect(`/${locale}/pmp-exam/${sessionId}`);
  }

  const domains = (view.result.domainBreakdown as DomainPerformanceRow[]) ?? [];
  const skills = (view.result.skillBreakdown as SkillPerformanceRow[]) ?? [];
  const delivery =
    (view.result.deliveryBreakdown as DeliveryPerformanceRow[] | null) ?? [];

  const readiness = calculatePmpReadiness({
    recentPercentages: [view.result.percentage],
    domainPerformances: domains,
    skillPerformances: skills,
    unansweredRate:
      view.result.correctCount +
        view.result.incorrectCount +
        view.result.unansweredCount ===
      0
        ? 0
        : view.result.unansweredCount /
          (view.result.correctCount +
            view.result.incorrectCount +
            view.result.unansweredCount),
    repeatedMistakeCount: 0,
  });

  const recommendation = await recommendNextLearning(session.user.id, loc);

  return (
    <ExamReviewClient
      locale={loc}
      sessionId={sessionId}
      practiceScore={{
        percentage: view.result.percentage,
        correct: view.result.correctCount,
        incorrect: view.result.incorrectCount,
        unanswered: view.result.unansweredCount,
        total:
          view.result.correctCount +
          view.result.incorrectCount +
          view.result.unansweredCount,
      }}
      readiness={{
        level: view.result.readinessLevel,
        label: loc === "fr" ? readiness.labelFr : readiness.labelEn,
        limitations: loc === "fr" ? readiness.limitationsFr : readiness.limitationsEn,
      }}
      domains={domains}
      skills={skills}
      delivery={delivery}
      questions={view.questions}
      recommendation={
        recommendation
          ? {
              title: recommendation.title,
              reason: recommendation.reason,
              path: recommendation.path,
            }
          : null
      }
      labels={{
        reviewTitle: t("reviewTitle"),
        practiceNotice: t("practiceNotice"),
        practiceScore: t("practiceScore"),
        correct: t("correct"),
        incorrect: t("incorrect"),
        unanswered: t("unanswered"),
        domainPerformance: t("domainPerformance"),
        deliveryPerformance: t("deliveryPerformance"),
        skillPerformance: t("skillPerformance"),
        weakSkills: t("weakSkills"),
        learningSkills: t("learningSkills"),
        masteredSkills: t("masteredSkills"),
        none: t("none"),
        recommendedLesson: t("recommendedLesson"),
        openLesson: t("openLesson"),
        reviewWrong: t("reviewWrong"),
        yourAnswer: t("yourAnswer"),
        correctAnswer: t("correctAnswer"),
        explanation: t("explanation"),
        explainAi: t("explainAi"),
        aiLoading: t("aiLoading"),
        aiError: t("aiError"),
        retry: t("retry"),
        dashboard: t("dashboard"),
      }}
    />
  );
}
