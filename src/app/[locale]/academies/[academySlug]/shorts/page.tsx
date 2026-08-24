import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { findAcademyBySlug, localizeAcademy } from "@/data/repositories/academy-repository";
import {
  listShortFilterOptions,
  listShortsByAcademy,
} from "@/modules/learning-engine/short-learning-service";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

export default async function AcademyShortsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; academySlug: string }>;
  searchParams: Promise<{ topic?: string; skill?: string; difficulty?: string }>;
}) {
  const { locale, academySlug } = await params;
  const filters = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("shorts");
  const ta = await getTranslations("app");
  const loc = locale as Locale;

  const academy = await findAcademyBySlug(academySlug);
  if (!academy || academy.status !== "ACTIVE") notFound();

  const { title } = localizeAcademy(academy, loc);
  const allShorts = await listShortsByAcademy(academySlug, loc);
  const options = listShortFilterOptions(allShorts);
  const shorts = await listShortsByAcademy(academySlug, loc, {
    topic: filters.topic,
    skill: filters.skill,
    difficulty: filters.difficulty,
  });

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
      <p className="mt-1 text-sm font-medium text-blue-800" data-testid="shorts-3min-badge">
        {t("threeMinLearning")}
      </p>

      <form className="mt-6 flex flex-wrap gap-3" method="get" data-testid="shorts-filters">
        <label className="text-sm">
          <span className="mr-2 text-gray-600">{t("topic")}</span>
          <select
            name="topic"
            defaultValue={filters.topic ?? ""}
            className="min-h-11 rounded border px-2 py-1"
            aria-label={t("topic")}
          >
            <option value="">{t("all")}</option>
            {options.topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mr-2 text-gray-600">{t("relatedSkill")}</span>
          <select
            name="skill"
            defaultValue={filters.skill ?? ""}
            className="min-h-11 rounded border px-2 py-1"
            aria-label={t("relatedSkill")}
          >
            <option value="">{t("all")}</option>
            {options.skills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mr-2 text-gray-600">{t("difficulty")}</span>
          <select
            name="difficulty"
            defaultValue={filters.difficulty ?? ""}
            className="min-h-11 rounded border px-2 py-1"
            aria-label={t("difficulty")}
          >
            <option value="">{t("all")}</option>
            {options.difficulties.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="min-h-11 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t("filter")}
        </button>
      </form>

      {shorts.length === 0 ? (
        <p className="mt-8 text-sm text-gray-500" data-testid="shorts-empty">
          {t("empty")}
        </p>
      ) : (
        <ul className="mt-6 space-y-3" data-testid="shorts-list">
          {shorts.map((short) => (
            <li key={short.id}>
              <Link
                href={`/academies/${academySlug}/shorts/${short.id}`}
                className="block rounded-lg border bg-white p-4 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-testid={`short-card-${short.id}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold text-gray-900">{short.title}</h2>
                  <span className="rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-900">
                    {t("threeMinLearning")}
                  </span>
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
                      {t("duration")}: {short.durationSeconds}s
                    </span>
                  )}
                  {short.topic && (
                    <span>
                      {" · "}
                      {t("topic")}: {short.topic}
                    </span>
                  )}
                  {short.difficulty && (
                    <span>
                      {" · "}
                      {t("difficulty")}: {short.difficulty}
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
