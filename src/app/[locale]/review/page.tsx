import { getTranslations, setRequestLocale } from "next-intl/server";
import { requireSession } from "@/modules/auth/session";
import { getReviewCalendar } from "@/modules/learning-engine/review-service";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";
import type { ReviewQueueItem } from "@/modules/learning-engine/review-service";

function ReviewSection({
  id,
  title,
  items,
  empty,
  openLabel,
  testId,
}: {
  id: string;
  title: string;
  items: ReviewQueueItem[];
  empty: string;
  openLabel: string;
  testId: string;
}) {
  return (
    <section aria-labelledby={id} data-testid={testId} className="space-y-3">
      <h2 id={id} className="text-lg font-semibold text-gray-900">
        {title}
      </h2>
      {items.length === 0 ? (
        <p className="text-sm text-gray-600">{empty}</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li
              key={`${testId}-${item.skillSlug}-${idx}`}
              className="rounded-lg border bg-white p-4"
              data-testid={`${testId}-item-${idx + 1}`}
            >
              <p className="font-medium text-gray-900">
                {item.lessonTitle ?? item.skillTitle}
              </p>
              <p className="mt-1 text-sm text-gray-700">{item.reason}</p>
              {item.lessonPath && (
                <Link
                  href={item.lessonPath}
                  className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {openLabel}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default async function ReviewNowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireSession(locale);
  const t = await getTranslations("review");
  const loc = locale as Locale;
  const calendar = await getReviewCalendar(session.user.id, loc);
  const startHref =
    calendar.primaryAction?.lessonPath ??
    calendar.all.find((i) => i.lessonPath)?.lessonPath ??
    "/dashboard";

  return (
    <section className="space-y-8" data-testid="review-now-page">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">{t("subtitle")}</p>
        <p className="mt-1 text-xs text-gray-500">{t("durationHint")}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={startHref}
            className="inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="start-review"
          >
            {t("startReview")}
          </Link>
          <Link
            href={startHref}
            className="inline-flex min-h-11 items-center rounded-lg border border-blue-400 px-5 py-2.5 text-sm font-semibold text-blue-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="review-now-cta"
          >
            {t("reviewNowCta")}
          </Link>
        </div>
      </header>

      {calendar.all.length === 0 ? (
        <p className="rounded-xl border bg-white p-5 text-sm text-gray-600" data-testid="review-empty">
          {t("empty")}
        </p>
      ) : (
        <div className="space-y-8">
          <ReviewSection
            id="due-today-heading"
            title={t("dueToday")}
            items={calendar.dueToday}
            empty={t("sectionEmpty")}
            openLabel={t("openLesson")}
            testId="review-due-today"
          />
          <ReviewSection
            id="due-soon-heading"
            title={t("dueSoon")}
            items={calendar.dueSoon}
            empty={t("sectionEmpty")}
            openLabel={t("openLesson")}
            testId="review-due-soon"
          />
          <ReviewSection
            id="weak-heading"
            title={t("weakConcepts")}
            items={calendar.weakConcepts}
            empty={t("sectionEmpty")}
            openLabel={t("openLesson")}
            testId="review-weak"
          />
          <ReviewSection
            id="errors-heading"
            title={t("repeatedErrors")}
            items={calendar.repeatedErrors}
            empty={t("sectionEmpty")}
            openLabel={t("openLesson")}
            testId="review-errors"
          />
          <ReviewSection
            id="recent-heading"
            title={t("recentlyLearned")}
            items={calendar.recentlyLearned}
            empty={t("sectionEmpty")}
            openLabel={t("openLesson")}
            testId="review-recent"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <Link
          href="/dashboard"
          className="rounded-lg border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="review-back-dashboard"
        >
          {t("backDashboard")}
        </Link>
        <Link
          href="/pmp-exam/readiness-report"
          className="rounded-lg border border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-testid="review-open-readiness"
        >
          {t("openReadiness")}
        </Link>
      </div>
    </section>
  );
}
