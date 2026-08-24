import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { findLessonBySlug, localizeLesson } from "@/data/repositories";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";
import { notFound } from "next/navigation";

export default async function LessonPage({
  params,
}: {
  params: Promise<{
    locale: string;
    academySlug: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}) {
  const { locale, academySlug, courseSlug, moduleSlug, lessonSlug } =
    await params;
  setRequestLocale(locale);
  const t = await getTranslations("app");
  const lesson = await findLessonBySlug(
    academySlug,
    courseSlug,
    moduleSlug,
    lessonSlug
  );
  if (!lesson) notFound();

  const loc = locale as Locale;
  const { title, description } = localizeLesson(lesson, loc);
  const quizItem = lesson.learningItems.find((item) => item.type === "QUIZ");
  const firstQuestion = quizItem?.questions[0];

  return (
    <section data-testid="lesson-page">
      <h1 className="mb-2 text-2xl font-bold" data-testid="lesson-title">
        {title}
      </h1>
      <p className="mb-6 text-gray-600">{description}</p>

      <div className="mb-6 space-y-2">
        {lesson.learningItems.map((item) => (
          <div key={item.id} className="rounded border bg-white p-3 text-sm">
            <span className="font-medium">{item.type}</span>
          </div>
        ))}
      </div>

      {firstQuestion && (
        <Link
          href={`/academies/${academySlug}/courses/${courseSlug}/modules/${moduleSlug}/lessons/${lessonSlug}/quiz/${firstQuestion.id}`}
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          data-testid="start-quiz"
        >
          {t("quiz")}
        </Link>
      )}
    </section>
  );
}
