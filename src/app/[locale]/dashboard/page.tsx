import { getTranslations, setRequestLocale } from "next-intl/server";
import { requireSession } from "@/modules/auth/session";
import { getDashboardV2 } from "@/modules/dashboard/dashboard-service";
import { recommendNextLearning } from "@/modules/learning-engine/recommendation-service";
import { getReviewQueue } from "@/modules/learning-engine/review-service";
import { getPmpPracticeDashboard } from "@/modules/assessment-engine/exam-service";
import { Link } from "@/modules/localization/navigation";
import { signOut } from "@/auth";
import type { Locale } from "@/shared/types/locale";
import { PracticeTargetForm } from "@/app/[locale]/components/exam/PracticeTargetForm";

function formatActivity(date: Date | null, locale: Locale): string {
  if (!date) return "—";
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireSession(locale);
  const t = await getTranslations("dashboard");
  const ta = await getTranslations("app");
  const loc = locale as Locale;

  const data = await getDashboardV2(session.user.id, loc);
  const recommendation = await recommendNextLearning(session.user.id, loc);
  const pmpPractice = await getPmpPracticeDashboard(session.user.id, loc);
  const reviewQueue = await getReviewQueue(session.user.id, loc);
  const dueForReview = reviewQueue.slice(0, 5);

  async function logoutAction() {
    "use server";
    await signOut({ redirectTo: `/${locale}` });
  }

  return (
    <section data-testid="dashboard-page" className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t("welcome")}, {session.user.name ?? session.user.email}
          </h1>
          <p className="mt-1 text-sm text-gray-600">{session.user.email}</p>
          <p className="mt-2 text-sm text-blue-700">{ta("learnInSmallSessions")}</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/settings"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="settings-link"
          >
            {t("settings")}
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-testid="logout-button"
            >
              {t("logout")}
            </button>
          </form>
        </div>
      </div>

      {/* A. CONTINUE LEARNING */}
      <section
        aria-labelledby="continue-learning-heading"
        className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6"
        data-testid="continue-learning-section"
      >
        <h2 id="continue-learning-heading" className="text-xl font-semibold text-gray-900">
          {t("continueLearning")}
        </h2>
        {data.continueLearning ? (
          <div className="mt-4" data-testid="continue-learning-card">
            <dl className="grid gap-2 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-gray-500">{t("academy")}</dt>
                <dd className="font-medium text-gray-900">{data.continueLearning.academyTitle}</dd>
              </div>
              <div>
                <dt className="text-gray-500">{t("course")}</dt>
                <dd className="font-medium text-gray-900">{data.continueLearning.courseTitle}</dd>
              </div>
              <div>
                <dt className="text-gray-500">{t("module")}</dt>
                <dd className="font-medium text-gray-900">{data.continueLearning.moduleTitle ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-gray-500">{t("nextLesson")}</dt>
                <dd className="font-medium text-gray-900">{data.continueLearning.nextLessonTitle ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-gray-500">{t("progress")}</dt>
                <dd className="font-medium text-blue-700">{data.continueLearning.percentage}%</dd>
              </div>
              <div>
                <dt className="text-gray-500">{t("lastActivity")}</dt>
                <dd className="font-medium text-gray-900">
                  {formatActivity(data.continueLearning.lastActivityAt, loc)}
                </dd>
              </div>
            </dl>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-blue-100">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${data.continueLearning.percentage}%` }}
                role="progressbar"
                aria-valuenow={data.continueLearning.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={t("progress")}
              />
            </div>
            {data.continueLearning.nextLessonPath && (
              <Link
                href={data.continueLearning.nextLessonPath}
                className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                data-testid="continue-learning-btn"
              >
                {t("continue")}
              </Link>
            )}
          </div>
        ) : (
          <p className="mt-3 text-sm text-gray-600" data-testid="continue-learning-empty">
            {t("noContinue")}
          </p>
        )}
      </section>

      {/* REVIEW NOW / DUE FOR REVIEW */}
      <section
        aria-labelledby="review-now-heading"
        className="rounded-xl border border-amber-200 bg-amber-50/40 p-6"
        data-testid="review-now-section"
      >
        <h2 id="review-now-heading" className="text-xl font-semibold text-gray-900">
          {t("reviewNow")}
        </h2>
        <p className="mt-1 text-sm text-gray-600">{t("reviewSubtitle")}</p>
        {dueForReview.length === 0 ? (
          <p className="mt-3 text-sm text-gray-600" data-testid="review-now-empty">
            {t("noReviewItems")}
          </p>
        ) : (
          <ul className="mt-4 space-y-3" data-testid="due-for-review-list">
            {dueForReview.map((item, idx) => (
              <li
                key={`${item.skillSlug}-${item.reasonCode}-${idx}`}
                className="rounded-lg border border-amber-100 bg-white p-3"
                data-testid={`due-review-item-${idx + 1}`}
              >
                <p className="font-medium text-gray-900">
                  {item.lessonTitle ?? item.skillTitle}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  <span className="font-medium">{t("reviewReason")} </span>
                  {item.reason}
                </p>
                {item.lessonPath && (
                  <Link
                    href={item.lessonPath}
                    className="mt-2 inline-flex text-sm font-medium text-amber-900 underline focus:outline-none focus:ring-2 focus:ring-amber-500"
                    data-testid={`due-review-open-${idx + 1}`}
                  >
                    {t("openCourse")}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/review"
            className="inline-flex min-h-11 items-center rounded-lg bg-amber-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            data-testid="open-review-queue"
          >
            {t("openReview")}
          </Link>
          <Link
            href="/pmp-exam/readiness-report"
            className="inline-flex min-h-11 items-center rounded-lg border border-amber-400 px-4 py-2.5 text-sm font-semibold text-amber-950 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            data-testid="open-readiness-report"
          >
            {t("openReadinessReport")}
          </Link>
        </div>
      </section>

      {/* PMP PRACTICE */}
      <section
        aria-labelledby="pmp-practice-heading"
        className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-6"
        data-testid="pmp-practice-section"
      >
        <h2 id="pmp-practice-heading" className="text-xl font-semibold text-gray-900">
          {t("pmpPractice")}
        </h2>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="text-gray-500">{t("lastExam")}</dt>
            <dd className="font-medium" data-testid="pmp-last-exam">
              {pmpPractice.lastExam
                ? `${pmpPractice.lastExam.title} (${pmpPractice.lastExam.percentage}%)`
                : t("noExamYet")}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">{t("bestScore")}</dt>
            <dd className="font-medium" data-testid="pmp-best-score">
              {pmpPractice.bestScore == null ? "—" : `${pmpPractice.bestScore}%`}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">{t("averageExamScore")}</dt>
            <dd className="font-medium" data-testid="pmp-average-score">
              {pmpPractice.averageScore == null ? "—" : `${pmpPractice.averageScore}%`}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">{t("questionsAnswered")}</dt>
            <dd className="font-medium" data-testid="pmp-questions-answered">
              {pmpPractice.questionsAnswered}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">{t("weakestDomain")}</dt>
            <dd className="font-medium" data-testid="pmp-weakest-domain">
              {pmpPractice.weakestDomain ?? "—"}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">{t("practiceReadiness")}</dt>
            <dd className="font-medium" data-testid="pmp-practice-readiness">
              {pmpPractice.practiceReadiness}
            </dd>
          </div>
        </dl>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/pmp-exam"
            className="inline-flex rounded-lg bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            data-testid="pmp-start-practice"
          >
            {t("startPractice")}
          </Link>
          {pmpPractice.inProgressSession && (
            <Link
              href={`/pmp-exam/${pmpPractice.inProgressSession.sessionId}`}
              className="inline-flex rounded-lg border border-indigo-400 px-4 py-2.5 text-sm font-semibold text-indigo-800 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              data-testid="pmp-resume-exam"
            >
              {t("resumeExam")}
            </Link>
          )}
        </div>

        <div className="mt-6 border-t border-indigo-100 pt-4" data-testid="pmp-performance-history">
          <h3 className="text-sm font-semibold text-gray-900">{t("performanceHistory")}</h3>
          <p className="mt-1 text-sm" data-testid="pmp-score-trend">
            {t("scoreTrend")}: {pmpPractice.scoreTrend}
          </p>
          <p className="mt-1 text-sm" data-testid="pmp-score-evolution">
            {t("evolution")}:{" "}
            {pmpPractice.evolution.length
              ? pmpPractice.evolution.map((s) => `${s}%`).join(" → ")
              : "—"}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            {pmpPractice.performanceHistory.length === 0 ? (
              <li>{t("noExamYet")}</li>
            ) : (
              pmpPractice.performanceHistory.map((a) => (
                <li key={a.sessionId} data-testid={`pmp-history-${a.sessionId}`}>
                  {a.examTitle} — {a.score}% — {a.readiness}
                </li>
              ))
            )}
          </ul>
          <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-gray-500">{t("currentAverage")}</dt>
              <dd className="font-medium" data-testid="pmp-current-average">
                {pmpPractice.averageScore == null ? "—" : `${pmpPractice.averageScore}%`}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">{t("targetScore")}</dt>
              <dd className="font-medium" data-testid="pmp-target-score">
                {pmpPractice.targetScorePercent}%
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">{t("targetGap")}</dt>
              <dd className="font-medium" data-testid="pmp-target-gap">
                {pmpPractice.targetGap}%
              </dd>
            </div>
          </dl>
          <PracticeTargetForm
            initialTarget={pmpPractice.targetScorePercent}
            labels={{ targetScore: t("targetScore"), saveTarget: t("saveTarget") }}
          />
        </div>
      </section>

      {/* Recommended for you */}
      <section
        aria-labelledby="recommended-heading"
        className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6"
        data-testid="recommended-section"
      >
        <h2 id="recommended-heading" className="text-xl font-semibold text-gray-900">
          {t("recommendedForYou")}
        </h2>
        {recommendation ? (
          <div className="mt-4" data-testid="recommended-card">
            <h3 className="text-lg font-semibold text-gray-900" data-testid="recommended-title">
              {recommendation.title}
            </h3>
            {recommendation.estimatedMinutes != null && (
              <p className="mt-1 text-sm text-gray-600" data-testid="recommended-duration">
                {recommendation.estimatedMinutes} {ta("minutes")}
              </p>
            )}
            <p className="mt-2 text-sm text-gray-700" data-testid="recommended-reason">
              <span className="font-medium">{t("recommendedWhy")} </span>
              {recommendation.reason}
            </p>
            <Link
              href={recommendation.path}
              className="mt-4 inline-flex rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              data-testid="recommended-open"
            >
              {t("openCourse")}
            </Link>
          </div>
        ) : (
          <p className="mt-3 text-sm text-gray-600" data-testid="recommended-empty">
            {t("noRecommendation")}
          </p>
        )}
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {/* B. MY LEARNING */}
          <section aria-labelledby="my-learning-heading" data-testid="my-learning-section">
            <h2 id="my-learning-heading" className="mb-4 text-xl font-semibold">
              {t("myLearning")}
            </h2>
            <div className="space-y-4">
              {data.myLearning.map((course) => (
                <article
                  key={course.enrollmentId}
                  className="rounded-xl border bg-white p-5"
                  data-testid={`dashboard-course-${course.courseSlug}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-500">{course.academyTitle}</p>
                      <h3 className="text-lg font-semibold text-gray-900">{course.courseTitle}</h3>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">{course.percentage}%</span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${course.percentage}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {course.completedLessons} / {course.totalLessons} {t("lessonsComplete")}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    {t("nextLesson")}: {course.nextLessonTitle ?? t("courseComplete")}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {t("lastActivity")}: {formatActivity(course.lastActivityAt, loc)}
                  </p>
                  {course.nextLessonPath ? (
                    <Link
                      href={course.nextLessonPath}
                      className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                      data-testid={`continue-course-${course.courseSlug}`}
                    >
                      {t("openCourse")}
                    </Link>
                  ) : (
                    <Link
                      href={`/academies/${course.academySlug}/courses/${course.courseSlug}`}
                      className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                      data-testid={`open-course-${course.courseSlug}`}
                    >
                      {t("openCourse")}
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* E. QUICK ACCESS */}
          <section aria-labelledby="quick-access-heading" data-testid="quick-access-section">
            <h2 id="quick-access-heading" className="mb-4 text-xl font-semibold">
              {t("quickAccess")}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-3">
              {data.quickAccess.map((item) => (
                <li key={item.academySlug}>
                  {item.coursePath && !item.comingSoon ? (
                    <Link
                      href={item.coursePath}
                      className="block rounded-xl border bg-white p-4 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      data-testid={`quick-access-${item.academySlug}`}
                    >
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-1 text-xs text-green-700">{ta("active")}</p>
                    </Link>
                  ) : (
                    <div
                      className="rounded-xl border border-dashed bg-gray-50 p-4"
                      data-testid={`quick-access-${item.academySlug}`}
                    >
                      <p className="font-semibold text-gray-700">{item.title}</p>
                      <p className="mt-1 text-xs text-gray-500">{ta("comingSoon")}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          {/* D. LEARNING STATS */}
          <section
            aria-labelledby="learning-stats-heading"
            className="rounded-xl border bg-white p-5"
            data-testid="learning-stats-section"
          >
            <h2 id="learning-stats-heading" className="mb-3 text-lg font-semibold">
              {t("learningStats")}
            </h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <dt className="text-gray-500">{t("lessonsCompleted")}</dt>
                <dd className="font-semibold" data-testid="stat-lessons-completed">
                  {data.stats.lessonsCompleted}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gray-500">{t("quizzesCompleted")}</dt>
                <dd className="font-semibold" data-testid="stat-quizzes-completed">
                  {data.stats.quizzesCompleted}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gray-500">{t("averageScore")}</dt>
                <dd className="font-semibold" data-testid="stat-average-score">
                  {data.stats.averageScore}%
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gray-500">{t("learningTime")}</dt>
                <dd className="font-semibold" data-testid="stat-learning-time">
                  {data.stats.learningTimeMinutes} {ta("minutes")}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gray-500">{t("currentStreak")}</dt>
                <dd className="font-semibold" data-testid="stat-streak">
                  {data.stats.currentStreak} {t("days")}
                </dd>
              </div>
            </dl>
            <p className="sr-only" data-testid="global-progress">
              {data.stats.globalProgressPercent}%
            </p>
          </section>

          {/* C. SKILLS */}
          <section
            aria-labelledby="skills-heading"
            className="rounded-xl border bg-white p-5"
            data-testid="skills-section"
          >
            <h2 id="skills-heading" className="mb-3 text-lg font-semibold">
              {t("skills")}
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-medium text-red-700">{t("skillsWeak")}</h3>
                <ul className="mt-1 space-y-1 text-gray-700" data-testid="weak-areas-list">
                  {data.skills.weak.length === 0 ? (
                    <li>{t("noneYet")}</li>
                  ) : (
                    data.skills.weak.map((s) => <li key={s.id}>• {s.title}</li>)
                  )}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-amber-700">{t("skillsLearning")}</h3>
                <ul className="mt-1 space-y-1 text-gray-700" data-testid="learning-areas-list">
                  {data.skills.learning.length === 0 ? (
                    <li>{t("noneYet")}</li>
                  ) : (
                    data.skills.learning.map((s) => <li key={s.id}>• {s.title}</li>)
                  )}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-green-700">{t("skillsMastered")}</h3>
                <ul className="mt-1 space-y-1 text-gray-700" data-testid="mastered-areas-list">
                  {data.skills.mastered.length === 0 ? (
                    <li>{t("noneYet")}</li>
                  ) : (
                    data.skills.mastered.map((s) => <li key={s.id}>• {s.title}</li>)
                  )}
                </ul>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}
