import { getTranslations, setRequestLocale } from "next-intl/server";
import { requireSession } from "@/modules/auth/session";
import { Link } from "@/modules/localization/navigation";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";

export default async function PmpStudyHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  await requireSession(locale);
  const t = await getTranslations("pmpStudy");

  return (
    <section className="mx-auto max-w-2xl space-y-6" data-testid="pmp-study-hub">
      <div>
        <p className="text-sm font-medium text-blue-700">{t("eyebrow")}</p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
          {t("subtitle", { count: ECO_TASK_COUNT })}
        </p>
      </div>

      <nav aria-label={t("domainsNav")} className="space-y-3">
        {ECO_DOMAINS.map((domain) => (
          <Link
            key={domain.id}
            href={`/pmp-study/${domain.id}`}
            className="block min-h-14 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid={`pmp-study-domain-${domain.id}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {locale === "fr" ? domain.titleFr : domain.titleEn}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {t("domainMeta", {
                    tasks: domain.taskCount,
                    weight: Math.round(domain.weight * 100),
                  })}
                </p>
              </div>
              <span className="text-blue-600" aria-hidden="true">
                →
              </span>
            </div>
          </Link>
        ))}
      </nav>

      <p className="text-xs text-gray-500">{t("flowHint")}</p>
    </section>
  );
}
