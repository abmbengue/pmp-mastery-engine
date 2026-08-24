import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { requireSession } from "@/modules/auth/session";
import { getExamSessionView } from "@/modules/assessment-engine/exam-service";
import { ExamSessionClient } from "@/app/[locale]/components/exam/ExamSessionClient";
import type { Locale } from "@/shared/types/locale";

export default async function ExamSessionPage({
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

  if (view.status === "COMPLETED") {
    redirect(`/${locale}/pmp-exam/${sessionId}/review`);
  }

  return (
    <ExamSessionClient
      locale={loc}
      sessionId={sessionId}
      initial={view}
      labels={{
        question: t("question"),
        timer: t("timer"),
        elapsed: t("elapsed"),
        scenario: t("scenario"),
        options: t("options"),
        previous: t("previous"),
        next: t("next"),
        flag: t("flag"),
        unflag: t("unflag"),
        finish: t("finish"),
        navigator: t("navigator"),
        answered: t("answered"),
        unanswered: t("unanswered"),
        flagged: t("flagged"),
        confirmTitle: t("confirmTitle"),
        confirmSubmit: t("confirmSubmit"),
        cancel: t("cancel"),
        submitting: t("submitting"),
        submitError: t("submitError"),
        loadError: t("loadError"),
        practiceNotice: t("practiceNotice"),
      }}
    />
  );
}
