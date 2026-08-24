import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { findAcademyBySlug, localizeAcademy } from "@/data/repositories/academy-repository";
import { listShortsByAcademy } from "@/modules/learning-engine/short-learning-service";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

export default async function AcademyShortsPage({
  params,
}: {
  params: Promise<{ locale: string; academySlug: string }>;
}) {
  const { locale, academySlug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("shorts");
  const ta = await getTranslations("app");
  const loc = locale as Locale;

  const academy = await findAcademyBySlug(academySlug);
  if (!academy || academy.status !== "ACTIVE") notFound();

  const { title } = localizeAcademy(academy, loc);
  const shorts = await listShortsByAcademy(academySlug, loc);

  return (
    <section data-testid="shorts-page">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/academies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
          {ta("academies")}
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{title}</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900">{t("title")}</h1>
      <p className="mt-2 text-sm text-gray-600">{t("subtitle")}</p>

      {shorts.length === 0 ? (
        <p className="mt-8 text-sm text-gray-500" data-testid="shorts-empty">
          {t("empty")}
        </p>
      ) : (
        <ul className="mt-6 space-y-3">
          {shorts.map((short) => (
            <li key={short.id}>
              <Link
                href={`/academies/${academySlug}/shorts/${short.id}`}
                className="block rounded-lg border bg-white p-4 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-testid={`short-card-${short.id}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold text-gray-900">{short.title}</h2>
                  {short.isPlaceholder && (
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                      {t("comingSoonBadge")}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">{short.description}</p>
                <p className="mt-2 text-xs text-gray-500">
                  {short.durationSeconds != null && (
                    <span>
                      {t("duration")}: {Math.ceil(short.durationSeconds / 60)} {ta("minutes")}
                    </span>
                  )}
                  {short.topic && (
                    <span>
                      {" · "}
                      {t("topic")}: {short.topic}
                    </span>
                  )}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
