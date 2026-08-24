import { getTranslations, setRequestLocale } from "next-intl/server";
import { requireSession } from "@/modules/auth/session";
import { findUserDashboardData } from "@/data/repositories/user-repository";
import { getCourseProgress } from "@/modules/learning-engine/progress-service";
import { localizeCourse } from "@/data/repositories/course-repository";
import { Link } from "@/modules/localization/navigation";
import { signOut } from "@/auth";
import type { Locale } from "@/shared/types/locale";

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireSession(locale);
  const t = await getTranslations("dashboard");
  const loc = locale as Locale;

  const data = await findUserDashboardData(session.user.id);

  const enrolledCourses = await Promise.all(
    data.enrollments.map(async (enrollment) => {
      const course = enrollment.course;
      const progress = await getCourseProgress(session.user.id, course.id);
      const firstModule = course.modules[0];
      const firstLesson = firstModule?.lessons[0];
      let nextLessonUrl: string | null = null;

      if (firstLesson) {
        nextLessonUrl = `/academies/${course.academy.slug}/courses/${course.slug}/modules/${firstModule.slug}/lessons/${firstLesson.slug}`;
      }

      return {
        enrollment,
        progress,
        courseLabel: localizeCourse(course, loc),
        nextLessonUrl,
      };
    })
  );

  const totalCompleted = enrolledCourses.reduce((sum, c) => sum + (c.progress?.completedLessons ?? 0), 0);
  const totalLessons = enrolledCourses.reduce((sum, c) => sum + (c.progress?.totalLessons ?? 0), 0);
  const globalProgress = totalLessons === 0 ? 0 : Math.round((totalCompleted / totalLessons) * 100);

  const weakAreas = data.masteries.filter((m) => m.level === "WEAK");
  const masteredAreas = data.masteries.filter((m) => m.level === "MASTERED");
  const totalLearningTimeSec = enrolledCourses.reduce((sum, c) => sum + (c.progress?.totalTimeSpentSec ?? 0), 0);

  async function logoutAction() {
    "use server";
    await signOut({ redirectTo: `/${locale}` });
  }

  return (
    <section data-testid="dashboard-page">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t("welcome")}, {session.user.name ?? session.user.email}</h1>
          <p className="mt-1 text-sm text-gray-600">{session.user.email}</p>
        </div>
        <div className="flex gap-3">
          <Link href="/settings" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50" data-testid="settings-link">
            {t("settings")}
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black" data-testid="logout-button">
              {t("logout")}
            </button>
          </form>
        </div>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-5"><p className="text-sm text-gray-500">{t("globalProgress")}</p><p className="mt-2 text-3xl font-bold text-blue-600" data-testid="global-progress">{globalProgress}%</p></div>
        <div className="rounded-xl border bg-white p-5"><p className="text-sm text-gray-500">{t("learningTime")}</p><p className="mt-2 text-3xl font-bold text-gray-900">{Math.round(totalLearningTimeSec / 60)} min</p></div>
        <div className="rounded-xl border bg-white p-5"><p className="text-sm text-gray-500">{t("streak")}</p><p className="mt-2 text-3xl font-bold text-gray-900">{data.streak?.currentStreak ?? 0}</p></div>
        <div className="rounded-xl border bg-white p-5"><p className="text-sm text-gray-500">{t("recentScores")}</p><p className="mt-2 text-3xl font-bold text-gray-900">{data.recentScores[0]?.score ?? 0}%</p></div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">{t("continueLearning")}</h2>
          <div className="space-y-4">
            {enrolledCourses.map(({ enrollment, progress, courseLabel, nextLessonUrl }) => (
              <div key={enrollment.id} className="rounded-xl border bg-white p-5" data-testid={`dashboard-course-${enrollment.course.slug}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">{enrollment.course.academy.titleEn}</p>
                    <h3 className="text-lg font-semibold text-gray-900">{courseLabel.title}</h3>
                  </div>
                  <span className="text-sm font-semibold text-blue-600">{progress?.percentage ?? 0}%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: `${progress?.percentage ?? 0}%` }} />
                </div>
                <p className="mt-2 text-sm text-gray-500">{progress?.completedLessons ?? 0} / {progress?.totalLessons ?? 0} {t("lessonsComplete")}</p>
                {nextLessonUrl && (
                  <Link href={nextLessonUrl} className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline" data-testid={`continue-course-${enrollment.course.slug}`}>
                    {t("openCourse")}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-xl border bg-white p-5">
            <h2 className="mb-3 text-lg font-semibold">{t("weakAreas")}</h2>
            <ul className="space-y-2 text-sm text-gray-700" data-testid="weak-areas-list">
              {weakAreas.length === 0 ? <li>{t("noneYet")}</li> : weakAreas.map((area) => <li key={area.id}>• {loc === "fr" ? area.skill.titleFr : area.skill.titleEn}</li>)}
            </ul>
          </section>

          <section className="rounded-xl border bg-white p-5">
            <h2 className="mb-3 text-lg font-semibold">{t("masteredAreas")}</h2>
            <ul className="space-y-2 text-sm text-gray-700" data-testid="mastered-areas-list">
              {masteredAreas.length === 0 ? <li>{t("noneYet")}</li> : masteredAreas.map((area) => <li key={area.id}>• {loc === "fr" ? area.skill.titleFr : area.skill.titleEn}</li>)}
            </ul>
          </section>
        </aside>
      </div>
    </section>
  );
}
