import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { findAllAcademies, localizeAcademy } from "@/data/repositories/academy-repository";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

export default async function AcademiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("app");
  const ts = await getTranslations("simulators");
  const academies = await findAllAcademies();
  const loc = locale as Locale;

  return (
    <section data-testid="academies-page">
      <h1 className="mb-2 text-2xl font-bold">{t("academies")}</h1>
      <p className="mb-6 text-sm text-blue-700">{t("learnInSmallSessions")}</p>
      <ul className="space-y-4">
        {academies.map((academy) => {
          const { title, description } = localizeAcademy(academy, loc);
          const isActive = academy.status === "ACTIVE";
          return (
            <li
              key={academy.id}
              className="rounded-lg border bg-white p-4"
              data-testid={`academy-${academy.slug}`}
            >
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
              <span className="mt-2 inline-block text-xs text-gray-500">
                {isActive ? t("active") : t("planned")}
              </span>
              {isActive && academy.courses[0] && (
                <div className="mt-3 flex flex-wrap gap-4">
                  <Link
                    href={`/academies/${academy.slug}/courses/${academy.courses[0].slug}`}
                    className="text-sm font-medium text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                    data-testid={`academy-link-${academy.slug}`}
                  >
                    {title} →
                  </Link>
                  <Link
                    href={`/academies/${academy.slug}/shorts`}
                    className="text-sm text-gray-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                    data-testid={`academy-shorts-${academy.slug}`}
                  >
                    {t("viewShorts")}
                  </Link>
                  {(academy.slug === "personal-finance" || academy.slug === "corporate-finance") && (
                    <Link
                      href={`/academies/${academy.slug}/simulators`}
                      className="text-sm text-gray-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                      data-testid={`academy-simulators-${academy.slug}`}
                    >
                      {ts("viewSimulators")}
                    </Link>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
