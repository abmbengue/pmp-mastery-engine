import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { findAcademyBySlug, localizeAcademy } from "@/data/repositories/academy-repository";
import {
  getShortDiscovery,
  listShortFilterOptions,
  listShortsByAcademy,
  type ShortLearningCard,
} from "@/modules/learning-engine/short-learning-service";
import { requireSession } from "@/modules/auth/session";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

function ShortList({
  title,
  items,
  academySlug,
  empty,
  testId,
  threeMin,
}: {
  title: string;
  items: ShortLearningCard[];
  academySlug: string;
  empty: string;
  testId: string;
  threeMin: string;
}) {
  return (
    <section className="mt-8" aria-labelledby={`${testId}-heading`} data-testid={testId}>
      <h2 id={`${testId}-heading`} className="text-lg font-semibold text-gray-900">
        {title}
      </h2>
      {items.length === 0 ? (
        <p className="mt-2 text-sm text-gray-500">{empty}</p>
      ) : (
        <ul className="mt-3 space-y-3">
          {items.map((short) => (
            <li key={short.id}>
              <Link
                href={`/academies/${academySlug}/shorts/${short.id}`}
                className="block rounded-lg border bg-white p-4 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-testid={`short-card-${short.id}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{short.title}</h3>
                  <span className="rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-900">
                    {threeMin}
                  </span>
                  {short.completed && (
                    <span className="rounded bg-green-50 px-2 py-0.5 text-xs text-green-800">
                      ✓
                    </span>
                  )}
                  {short.reviewSuggested && (
                    <span className="rounded bg-amber-50 px-2 py-0.5 text-xs text-amber-900">
                      Review
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">{short.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default async function AcademyShortsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; academySlug: string }>;
  searchParams: Promise<{
    topic?: string;
    skill?: string;
    difficulty?: string;
    language?: string;
  }>;
}) {
  const { locale, academySlug } = await params;
  const filters = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("shorts");
  const ta = await getTranslations("app");
  const loc = locale as Locale;

  const academy = await findAcademyBySlug(academySlug);
  if (!academy || academy.status !== "ACTIVE") notFound();

  const session = await requireSession(locale);
  const { title } = localizeAcademy(academy, loc);
  const unfiltered = await listShortsByAcademy(academySlug, loc);
  const options = listShortFilterOptions(unfiltered);
  const discovery = await getShortDiscovery(academySlug, session.user.id, loc, {
    topic: filters.topic,
    skill: filters.skill,
    difficulty: filters.difficulty,
    language: filters.language,
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
        <label className="text-sm">
          <span className="mr-2 text-gray-600">{t("language")}</span>
          <select
            name="language"
            defaultValue={filters.language ?? ""}
            className="min-h-11 rounded border px-2 py-1"
            aria-label={t("language")}
          >
            <option value="">{t("all")}</option>
            {options.languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
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

      {discovery.all.length === 0 ? (
        <p className="mt-8 text-sm text-gray-500" data-testid="shorts-empty">
          {t("empty")}
        </p>
      ) : (
        <>
          <ShortList
            title={t("featured")}
            items={discovery.featured}
            academySlug={academySlug}
            empty={t("sectionEmpty")}
            testId="shorts-featured"
            threeMin={t("threeMinLearning")}
          />
          <ShortList
            title={t("recommended")}
            items={discovery.recommended}
            academySlug={academySlug}
            empty={t("sectionEmpty")}
            testId="shorts-recommended"
            threeMin={t("threeMinLearning")}
          />
          <ShortList
            title={t("continueWatching")}
            items={discovery.continueWatching}
            academySlug={academySlug}
            empty={t("sectionEmpty")}
            testId="shorts-continue"
            threeMin={t("threeMinLearning")}
          />
          <ShortList
            title={t("forReview")}
            items={discovery.forReview}
            academySlug={academySlug}
            empty={t("sectionEmpty")}
            testId="shorts-for-review"
            threeMin={t("threeMinLearning")}
          />
          <ShortList
            title={t("completedSection")}
            items={discovery.completed}
            academySlug={academySlug}
            empty={t("sectionEmpty")}
            testId="shorts-completed"
            threeMin={t("threeMinLearning")}
          />
          <div className="mt-8" data-testid="shorts-list">
            <h2 className="text-lg font-semibold">{t("allShorts")}</h2>
            <ul className="mt-3 space-y-3">
              {discovery.all.map((short) => (
                <li key={`all-${short.id}`}>
                  <Link
                    href={`/academies/${academySlug}/shorts/${short.id}`}
                    className="block rounded-lg border bg-white p-4 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <p className="font-semibold">{short.title}</p>
                    <p className="text-sm text-gray-600">{short.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
