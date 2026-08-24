import { setRequestLocale, getTranslations } from "next-intl/server";
import { getCoursePageV2 } from "@/modules/learning-engine/course-page-service";
import { getCurrentSession } from "@/modules/auth/session";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";
import { notFound } from "next/navigation";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string; academySlug: string; courseSlug: string }>;
}) {
  const { locale, academySlug, courseSlug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("app");
  const session = await getCurrentSession();
  const loc = locale as Locale;

  const data = await getCoursePageV2(session?.user?.id ?? null, academySlug, courseSlug, loc);
  if (!data) notFound();

  const statusLabel = (status: string) => {
    if (status === "COMPLETED") return t("statusCompleted");
    if (status === "IN_PROGRESS") return t("statusInProgress");
    return t("statusNotStarted");
  };

  const difficultyLabel = (d: string) => {
    if (d === "ADVANCED") return t("difficultyAdvanced");
    if (d === "INTERMEDIATE") return t("difficultyIntermediate");
    return t("difficultyBeginner");
  };

  return (
    <section data-testid="course-page">
      <nav className="mb-4 flex gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/academies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
          {t("academies")}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="font-medium text-gray-800">{data.title}</span>
      </nav>

      <p className="mb-2 text-sm font-medium text-blue-700">{t("learnInSmallSessions")}</p>
      <h1 className="mb-2 text-2xl font-bold" data-testid="course-title">
        {data.title}
      </h1>
      <p className="mb-2 text-gray-600">{data.description}</p>
      <p className="mb-6 text-sm text-gray-500" data-testid="course-total-duration">
        {t("totalDuration")}: {data.totalDurationMinutes} {t("minutes")}
      </p>

      <div className="mb-6 rounded-lg border bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{t("continueLearning")}</span>
              <span className="font-semibold text-blue-600" data-testid="course-progress-display">
                {data.progress.percentage}%
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: `${data.progress.percentage}%` }}
                role="progressbar"
                aria-valuenow={data.progress.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {data.progress.completedLessons} / {data.progress.totalLessons} {t("lessons")}
            </p>
          </div>
          {data.nextLesson && (
            <Link
              href={data.nextLesson.path}
              className="inline-flex shrink-0 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              data-testid="continue-course-btn"
            >
              {t("continueCourse")}
            </Link>
          )}
        </div>
        {data.nextLesson && (
          <p className="mt-3 text-sm text-gray-700" data-testid="course-next-lesson">
            {t("nextUp")}: <span className="font-medium">{data.nextLesson.title}</span>
            {data.nextLesson.estimatedMinutes != null && (
              <span className="text-gray-500">
                {" "}
                · {data.nextLesson.estimatedMinutes} {t("minutes")}
              </span>
            )}
          </p>
        )}
      </div>

      <h2 className="mb-4 text-lg font-semibold">{t("modules")}</h2>
      <ul className="space-y-4">
        {data.modules.map((mod) => (
          <li key={mod.id} className="rounded-lg border bg-white p-4" data-testid={`module-${mod.slug}`}>
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="font-medium text-gray-900">{mod.title}</h3>
              {mod.category && (
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                  {mod.category}
                </span>
              )}
            </div>
            <p className="mb-3 text-sm text-gray-500">{mod.description}</p>
            <ul className="space-y-2">
              {mod.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    href={lesson.path}
                    className={`flex flex-wrap items-center gap-2 rounded-lg border p-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      lesson.isNext
                        ? "border-blue-400 bg-blue-50"
                        : "border-gray-100 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                    data-testid={`lesson-link-${lesson.slug}`}
                    aria-current={lesson.isNext ? "step" : undefined}
                  >
                    <span className="font-medium text-gray-900">{lesson.title}</span>
                    {lesson.estimatedMinutes != null && (
                      <span className="text-xs text-gray-500">
                        {lesson.estimatedMinutes} {t("minutes")}
                      </span>
                    )}
                    <span
                      className={`ml-auto text-xs font-medium ${
                        lesson.status === "COMPLETED"
                          ? "text-green-700"
                          : lesson.status === "IN_PROGRESS"
                            ? "text-amber-700"
                            : "text-gray-500"
                      }`}
                      data-testid={`lesson-status-${lesson.slug}`}
                    >
                      {statusLabel(lesson.status)}
                    </span>
                    <span className="text-xs text-gray-400">{difficultyLabel(lesson.difficulty)}</span>
                    {lesson.isNext && (
                      <span className="rounded bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                        {t("nextUp")}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
