import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { findQuestionById, localizeQuestion, localizeAnswerOption } from "@/data/repositories";
import type { Locale } from "@/shared/types/locale";
import { notFound } from "next/navigation";
import { QuizPageClient } from "./quiz-client";

export default async function QuizPage({
  params,
}: {
  params: Promise<{
    locale: string;
    academySlug: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
    questionId: string;
  }>;
}) {
  const {
    locale,
    academySlug,
    courseSlug,
    moduleSlug,
    lessonSlug,
    questionId,
  } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("app");
  const question = await findQuestionById(questionId);
  if (!question) notFound();

  const loc = locale as Locale;
  const { prompt } = localizeQuestion(question, loc);
  const options = question.answerOptions.map((opt) => ({
    id: opt.id,
    label: localizeAnswerOption(opt, loc).label,
  }));

  return (
    <QuizPageClient
      locale={loc}
      academySlug={academySlug}
      courseSlug={courseSlug}
      moduleSlug={moduleSlug}
      lessonSlug={lessonSlug}
      questionId={questionId}
      prompt={prompt}
      options={options}
      labels={{ quiz: t("quiz"), submit: t("submit") }}
    />
  );
}
