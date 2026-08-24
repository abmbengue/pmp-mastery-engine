import { setRequestLocale, getTranslations } from "next-intl/server";
import { findCourseBySlug, localizeCourse } from "@/data/repositories/course-repository";
import { localizeLesson, localizeModule } from "@/data/repositories/lesson-repository";
import { getCourseProgress } from "@/modules/learning-engine/progress-service";
import { findUserByEmail } from "@/data/repositories/user-repository";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";
import { notFound } from "next/navigation";

const DEMO_EMAIL = "demo@pla.local";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string; academySlug: string; courseSlug: string }>;
}) {
  const { locale, academySlug, courseSlug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("app");
  const course = await findCourseBySlug(academySlug, courseSlug);
  if (!course) notFound();

  const loc = locale as Locale;
  const { title, description } = localizeCourse(course, loc);

  // Load course progress for demo user
  const user = await findUserByEmail(DEMO_EMAIL);
  const progress = user ? await getCourseProgress(user.id, course.id) : null;

  return (
    <section data-testid="course-page">
      <nav className="mb-4 flex gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/academies" className="hover:underline">
          {t("academies")}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="font-medium text-gray-800">{title}</span>
      </nav>

      <h1 className="mb-2 text-2xl font-bold" data-testid="course-title">
        {title}
      </h1>
      <p className="mb-4 text-gray-600">{description}</p>

      {/* Progress bar */}
      {progress && (
        <div className="mb-6 rounded-lg border bg-white p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{t("continueLearning")}</span>
            <span className="font-semibold text-blue-600" data-testid="course-progress-display">
              {progress.percentage}%
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-500 transition-all"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            {progress.completedLessons} / {progress.totalLessons} {t("lessons")}
          </p>
        </div>
      )}

      <h2 className="mb-4 text-lg font-semibold">{t("modules")}</h2>
      <ul className="space-y-4">
        {course.modules.map((mod) => {
          const modLoc = localizeModule(mod, loc);
          return (
            <li key={mod.id} className="rounded-lg border bg-white p-4">
              <h3 className="mb-3 font-medium text-gray-900">{modLoc.title}</h3>
              <ul className="space-y-2">
                {mod.lessons.map((lesson) => {
                  const lessonLoc = localizeLesson(lesson, loc);
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/academies/${academySlug}/courses/${courseSlug}/modules/${mod.slug}/lessons/${lesson.slug}`}
                        className="flex items-center gap-2 rounded-lg border border-gray-100 p-3 text-sm hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                        data-testid={`lesson-link-${lesson.slug}`}
                      >
                        <span className="text-blue-600" aria-hidden="true">▶</span>
                        <span className="font-medium">{lessonLoc.title}</span>
                        {lesson.estimatedMinutes && (
                          <span className="ml-auto text-xs text-gray-400">
                            {lesson.estimatedMinutes} min
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
