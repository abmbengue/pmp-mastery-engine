import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  getShortById,
  listShortsByAcademy,
} from "@/modules/learning-engine/short-learning-service";
import { isShortCompletedForUser } from "@/modules/learning-engine/short-progress-service";
import { requireSession } from "@/modules/auth/session";
import { MarkShortCompletedButton } from "@/app/[locale]/components/shorts/MarkShortCompletedButton";
import { ShortMediaPlayer } from "@/app/[locale]/components/shorts/ShortMediaPlayer";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";
import prisma from "@/data/prisma-client";

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
  const prevShort = idx > 0 ? allShorts[idx - 1] : null;

  let reviewSkill = false;
  if (short.relatedSkillSlug) {
    const mastery = await prisma.conceptMastery.findFirst({
      where: {
        userId: session.user.id,
        skill: { slug: short.relatedSkillSlug },
        OR: [{ level: "WEAK" }, { nextReviewAt: { lte: new Date() } }],
      },
    });
    reviewSkill = !!mastery;
  }

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

      <p className="text-sm font-medium text-blue-800" data-testid="short-3min-badge">
        {t("threeMinLearning")}
      </p>
      <h1 className="mt-1 text-2xl font-bold text-gray-900">{short.title}</h1>
      <p className="mt-2 text-sm text-gray-600">{short.description}</p>

      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <dt className="text-gray-500">{t("academy")}</dt>
          <dd className="font-medium">{short.academySlug}</dd>
        </div>
        {short.durationSeconds != null && (
          <div>
            <dt className="text-gray-500">{t("duration")}</dt>
            <dd className="font-medium">{short.durationSeconds}s</dd>
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
        {short.learningObjective && (
          <div>
            <dt className="text-gray-500">{t("learningObjective")}</dt>
            <dd className="font-medium">{short.learningObjective}</dd>
          </div>
        )}
        <div>
          <dt className="text-gray-500">{t("provider")}</dt>
          <dd className="font-medium">{short.provider}</dd>
        </div>
      </dl>

      <ShortMediaPlayer
        videoUrl={short.videoUrl}
        isPlaceholder={short.isPlaceholder}
        title={short.title}
        labels={{
          placeholder: t("placeholder"),
          comingSoon: t("comingSoonBadge"),
          play: t("play"),
          pause: t("pause"),
          progress: t("progress"),
          hook: t("pedagogyHook"),
          concept: t("pedagogyConcept"),
          example: t("pedagogyExample"),
          takeaway: t("pedagogyTakeaway"),
        }}
      />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start">
        {prevShort && (
          <Link
            href={`/academies/${academySlug}/shorts/${prevShort.id}`}
            className="min-h-11 rounded-lg border px-4 py-2.5 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="previous-short-link"
          >
            {t("previousShort")}
          </Link>
        )}
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
            className="min-h-11 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="next-short-link"
          >
            {t("nextShort")}
          </Link>
        )}
        {short.lessonPath && (
          <Link
            href={short.lessonPath}
            className="min-h-11 rounded-lg border border-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="short-learn-more"
          >
            {t("learnMore")}
          </Link>
        )}
        {short.lessonPath && (
          <Link
            href={short.lessonPath}
            className="min-h-11 rounded-lg border px-4 py-2.5 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="short-continue-lesson"
          >
            {t("continueLesson")}
          </Link>
        )}
        {reviewSkill && (
          <Link
            href="/review"
            className="min-h-11 rounded-lg border border-amber-500 px-4 py-2.5 text-center text-sm font-semibold text-amber-950 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            data-testid="short-review-skill"
          >
            {t("reviewThisSkill")}
          </Link>
        )}
      </div>

      <p className="mt-4 text-xs text-gray-500">
        {ta("continueLearning")} → LEARN → PRACTICE → TEST → REVIEW → MASTER
      </p>
    </section>
  );
}
