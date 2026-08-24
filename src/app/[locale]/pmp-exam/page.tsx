import { getTranslations, setRequestLocale } from "next-intl/server";
import { requireSession } from "@/modules/auth/session";
import {
  findResumableSession,
  listExams,
} from "@/modules/assessment-engine/exam-service";
import { ExamHubClient } from "@/app/[locale]/components/exam/ExamHubClient";
import type { Locale } from "@/shared/types/locale";

export default async function PmpExamHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireSession(locale);
  const t = await getTranslations("pmpExam");
  const loc = locale as Locale;

  const [exams, resumable] = await Promise.all([
    listExams(loc),
    findResumableSession(session.user.id),
  ]);

  return (
    <ExamHubClient
      locale={loc}
      exams={exams}
      inProgressSessionId={resumable?.id ?? null}
      labels={{
        title: t("title"),
        subtitle: t("subtitle"),
        ipNotice: t("ipNotice"),
        start: t("start"),
        starting: t("starting"),
        startError: t("startError"),
        resume: t("resume"),
        resumeHint: t("resumeHint"),
        questions: t("questions"),
        minutes: t("minutes"),
        untimed: t("untimed"),
        fullExamNote: t("fullExamNote"),
      }}
    />
  );
}
