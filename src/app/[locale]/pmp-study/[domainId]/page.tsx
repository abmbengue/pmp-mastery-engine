import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { requireSession } from "@/modules/auth/session";
import { Link } from "@/modules/localization/navigation";
import {
  getEcoDomainMeta,
  isEcoDomainId,
  listTasksForDomain,
} from "@/modules/mastery-engine/pmp-study";
import { entriesForEcoTask } from "@/modules/mastery-engine/lesson-eco-map";

export default async function PmpStudyDomainPage({
  params,
}: {
  params: Promise<{ locale: string; domainId: string }>;
}) {
  const { locale, domainId } = await params;
  setRequestLocale(locale);
  await requireSession(locale);

  if (!isEcoDomainId(domainId)) notFound();

  const t = await getTranslations("pmpStudy");
  const domain = getEcoDomainMeta(domainId);
  const tasks = listTasksForDomain(domainId);

  return (
    <section className="mx-auto max-w-2xl space-y-6" data-testid="pmp-study-domain">
      <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
        <Link
          href="/pmp-study"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {t("title")}
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="font-medium text-gray-800">
          {locale === "fr" ? domain.titleFr : domain.titleEn}
        </span>
      </nav>

      <div>
        <p className="text-sm font-medium text-blue-700">
          {locale === "fr" ? domain.titleFr : domain.titleEn}
        </p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900">
          {t("domainTasksTitle")}
        </h1>
        <p className="mt-2 text-sm text-gray-600">{t("domainTasksSubtitle")}</p>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => {
          const lessonCount = entriesForEcoTask(task.id).length;
          return (
            <li key={task.id}>
              <Link
                href={`/pmp-study/${domainId}/${task.id}`}
                className="block min-h-14 rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-testid={`pmp-study-task-${task.id}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {task.id}
                    </p>
                    <h2 className="mt-1 text-base font-semibold text-gray-900">
                      {locale === "fr" ? task.titleFr : task.titleEn}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {t("mappedLessons", { count: lessonCount })}
                    </p>
                  </div>
                  <span className="text-blue-600" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
