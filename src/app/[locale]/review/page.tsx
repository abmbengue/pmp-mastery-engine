import { getTranslations, setRequestLocale } from "next-intl/server";
import { requireSession } from "@/modules/auth/session";
import { getReviewQueue } from "@/modules/learning-engine/review-service";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

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
  const queue = await getReviewQueue(session.user.id, loc);

  return (
    <section className="space-y-6" data-testid="review-now-page">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">{t("subtitle")}</p>
        <p className="mt-1 text-xs text-gray-500">{t("durationHint")}</p>
      </header>

      {queue.length === 0 ? (
        <p className="rounded-xl border bg-white p-5 text-sm text-gray-600" data-testid="review-empty">
          {t("empty")}
        </p>
      ) : (
        <ul className="space-y-4">
          {queue.map((item, idx) => (
            <li
              key={`${item.skillSlug}-${item.reasonCode}-${idx}`}
              className="rounded-xl border bg-white p-5"
              data-testid={`review-item-${idx + 1}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.lessonTitle ?? item.skillTitle}
                  </h2>
                  <p className="mt-1 text-sm text-gray-700">{item.reason}</p>
                  <p className="mt-2 text-xs text-gray-500">{item.shortExplanation}</p>
                  <p className="mt-1 text-xs text-indigo-800">
                    {t("skill")}: {item.skillTitle} · {item.masteryLevel}
                  </p>
                </div>
                {item.estimatedMinutes != null && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    ~{item.estimatedMinutes} {t("minutes")}
                  </span>
                )}
              </div>
              {item.lessonPath ? (
                <Link
                  href={item.lessonPath}
                  className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  data-testid={`review-open-${idx + 1}`}
                >
                  {t("openLesson")}
                </Link>
              ) : (
                <p className="mt-3 text-sm text-gray-500">{t("noLesson")}</p>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-3">
        <Link
          href="/dashboard"
          className="rounded-lg border px-4 py-2 text-sm font-medium"
          data-testid="review-back-dashboard"
        >
          {t("backDashboard")}
        </Link>
        <Link
          href="/pmp-exam/readiness-report"
          className="rounded-lg border border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-900"
          data-testid="review-open-readiness"
        >
          {t("openReadiness")}
        </Link>
      </div>
    </section>
  );
}
