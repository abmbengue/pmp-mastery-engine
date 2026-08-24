import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  getShortById,
  listShortsByAcademy,
} from "@/modules/learning-engine/short-learning-service";
import { isShortCompletedForUser } from "@/modules/learning-engine/short-progress-service";
import { requireSession } from "@/modules/auth/session";
import { MarkShortCompletedButton } from "@/app/[locale]/components/shorts/MarkShortCompletedButton";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

export default async function ShortWatchPage({
  params,
}: {
  params: Promise<{ locale: string; academySlug: string; shortId: string }>;
}) {
  const { locale, academySlug, shortId } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("shorts");
  const ta = await getTranslations("app");
  const loc = locale as Locale;

  const session = await requireSession(locale);
  const short = await getShortById(shortId, loc);
  if (!short || short.academySlug !== academySlug) notFound();

  const completed = await isShortCompletedForUser(session.user.id, shortId);
  const allShorts = await listShortsByAcademy(academySlug, loc);
  const idx = allShorts.findIndex((s) => s.id === shortId);
  const nextShort = idx >= 0 && idx < allShorts.length - 1 ? allShorts[idx + 1] : null;

  return (
    <section data-testid="short-watch-page">
      <nav className="mb-4 text-sm text-gray-500">
        <Link
          href={`/academies/${academySlug}/shorts`}
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t("title")}
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{short.title}</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900">{short.title}</h1>
      <p className="mt-2 text-sm text-gray-600">{short.description}</p>

      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {short.durationSeconds != null && (
          <div>
            <dt className="text-gray-500">{t("duration")}</dt>
            <dd className="font-medium">
              {Math.ceil(short.durationSeconds / 60)} {ta("minutes")}
            </dd>
          </div>
        )}
        {short.topic && (
          <div>
            <dt className="text-gray-500">{t("topic")}</dt>
            <dd className="font-medium">{short.topic}</dd>
          </div>
        )}
        {short.difficulty && (
          <div>
            <dt className="text-gray-500">{t("difficulty")}</dt>
            <dd className="font-medium">{short.difficulty}</dd>
          </div>
        )}
        {short.relatedSkillSlug && (
          <div>
            <dt className="text-gray-500">{t("relatedSkill")}</dt>
            <dd className="font-medium">{short.relatedSkillSlug}</dd>
          </div>
        )}
      </dl>

      <div
        className="mt-6 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-10 text-center"
        data-testid="short-video-placeholder"
      >
        <p className="text-4xl" aria-hidden="true">
          ▶
        </p>
        <p className="mt-3 text-sm font-medium text-amber-700">{t("comingSoonBadge")}</p>
        <p className="mt-1 text-xs text-gray-500">{t("placeholder")}</p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
        <MarkShortCompletedButton
          shortId={short.id}
          academySlug={academySlug}
          initiallyCompleted={completed}
          labels={{
            markCompleted: t("markCompleted"),
            completed: t("completed"),
            error: t("completeError"),
          }}
        />
        {nextShort && (
          <Link
            href={`/academies/${academySlug}/shorts/${nextShort.id}`}
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="next-short-link"
          >
            {t("nextShort")}
          </Link>
        )}
        {short.lessonPath && (
          <Link
            href={short.lessonPath}
            className="rounded-lg border border-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {ta("continueLearning")}
          </Link>
        )}
      </div>
    </section>
  );
}
