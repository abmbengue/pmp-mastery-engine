import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { requireSession } from "@/modules/auth/session";
import { Link } from "@/modules/localization/navigation";
import { getLessonPedagogy } from "@/modules/mastery-engine/lesson-pedagogy";
import {
  buildStudyTaskView,
  enrichLessonPedagogyFlags,
  isEcoDomainId,
  isEcoTaskId,
} from "@/modules/mastery-engine/pmp-study";

export default async function PmpStudyTaskPage({
  params,
}: {
  params: Promise<{ locale: string; domainId: string; taskId: string }>;
}) {
  const { locale, domainId, taskId } = await params;
  setRequestLocale(locale);
  await requireSession(locale);

  if (!isEcoDomainId(domainId) || !isEcoTaskId(taskId)) notFound();

  const view = buildStudyTaskView(taskId);
  if (view.task.domainId !== domainId) notFound();

  const lessons = enrichLessonPedagogyFlags(view.lessons, (slug) =>
    Boolean(getLessonPedagogy(slug))
  );
  const t = await getTranslations("pmpStudy");
  const primary = lessons.find((l) => l.coverageType === "PRIMARY") ?? lessons[0];

  return (
    <section className="mx-auto max-w-2xl space-y-6" data-testid="pmp-study-task">
      <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
        <Link
          href="/pmp-study"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {t("title")}
        </Link>
        <span aria-hidden="true"> / </span>
        <Link
          href={`/pmp-study/${domainId}`}
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {locale === "fr" ? view.domain.titleFr : view.domain.titleEn}
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="font-medium text-gray-800">{taskId}</span>
      </nav>

      <div>
        <p className="text-sm font-medium text-blue-700">
          {locale === "fr" ? view.domain.titleFr : view.domain.titleEn}
        </p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          {locale === "fr" ? view.task.titleFr : view.task.titleEn}
        </h1>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {view.task.id} · {view.task.legacyCode}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700" data-testid="task-purpose">
          {locale === "fr" ? view.purposeFr : view.purposeEn}
        </p>
      </div>

      {primary ? (
        <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
          <p className="text-sm font-medium text-blue-900">{t("startHint")}</p>
          <Link
            href={primary.href}
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            data-testid="task-start-lesson"
          >
            {t("startLesson")} →
          </Link>
        </div>
      ) : (
        <p className="text-sm text-amber-800" data-testid="task-no-lessons">
          {t("noLessons")}
        </p>
      )}

      <section aria-labelledby="mapped-lessons-heading" className="space-y-3">
        <h2 id="mapped-lessons-heading" className="text-lg font-semibold text-gray-900">
          {t("lessonsHeading")}
        </h2>
        <ul className="space-y-3">
          {lessons.map((lesson) => (
            <li
              key={lesson.slug}
              className="rounded-lg border border-slate-200 bg-white p-4"
              data-testid={`task-lesson-${lesson.slug}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {lesson.coverageType}
                    {lesson.hasPedagogyPack ? ` · ${t("pedagogyBadge")}` : ""}
                  </p>
                  <h3 className="mt-1 font-semibold text-gray-900">
                    {locale === "fr" ? lesson.titleFr : lesson.titleEn}
                  </h3>
                </div>
                <Link
                  href={lesson.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  data-testid={`open-lesson-${lesson.slug}`}
                >
                  {t("openLesson")}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {view.distinctions.length > 0 ? (
        <section aria-labelledby="distinctions-heading" className="space-y-3">
          <h2 id="distinctions-heading" className="text-lg font-semibold text-gray-900">
            {t("distinctionsHeading")}
          </h2>
          <ul className="space-y-3">
            {view.distinctions.map((d) => (
              <li
                key={d.id}
                className="rounded-lg border border-amber-200 bg-amber-50/50 p-4"
                data-testid={`task-distinction-${d.id}`}
              >
                <p className="font-semibold text-amber-950">
                  {locale === "fr" ? d.leftFr : d.leftEn}
                  {d.middleFr
                    ? ` · ${locale === "fr" ? d.middleFr : d.middleEn}`
                    : ""}
                  {" · "}
                  {locale === "fr" ? d.rightFr : d.rightEn}
                </p>
                <p className="mt-2 text-sm text-gray-800">
                  {locale === "fr" ? d.ruleFr : d.ruleEn}
                </p>
                <p className="mt-1 text-xs text-amber-900/80">
                  {locale === "fr" ? d.examCueFr : d.examCueEn}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </section>
  );
}
