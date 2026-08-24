import { getTranslations, setRequestLocale } from "next-intl/server";
import { listLearningPathsForUser } from "@/modules/learning-engine/learning-path-service";
import { getCurrentSession } from "@/modules/auth/session";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

export default async function LearningPathsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("learningPaths");
  const session = await getCurrentSession();
  const paths = await listLearningPathsForUser(
    session?.user?.id ?? null,
    locale as Locale
  );

  return (
    <section className="space-y-6" data-testid="learning-paths-page">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">{t("subtitle")}</p>
      </header>

      <ul className="space-y-4">
        {paths.map((path) => (
          <li
            key={path.slug}
            className="rounded-xl border bg-white p-5"
            data-testid={`learning-path-${path.slug}`}
          >
            <h2 className="text-lg font-semibold text-gray-900">{path.title}</h2>
            <p className="mt-1 text-sm text-gray-600">{path.description}</p>
            <p className="mt-2 text-sm text-blue-800">
              {path.completedLessons}/{path.totalLessons} · {path.percentage}%
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${path.percentage}%` }}
                role="progressbar"
                aria-valuenow={path.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {path.nextLessonPath ? (
                <Link
                  href={path.nextLessonPath}
                  className="inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-testid={`path-continue-${path.slug}`}
                >
                  {t("continue")}
                </Link>
              ) : null}
              <Link
                href={path.coursePath}
                className="inline-flex min-h-11 items-center rounded-lg border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {t("openCourse")}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
