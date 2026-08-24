import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { requireSession } from "@/modules/auth/session";
import { findAcademyBySlug, localizeAcademy } from "@/data/repositories/academy-repository";
import { SIMULATION_CATALOG } from "@/modules/simulation-engine/simulation-service";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

const TITLES = {
  fr: {
    COMPOUND_INTEREST: "Intérêt composé",
    BUDGET: "Budget",
    DEBT_REPAYMENT: "Remboursement de dette",
    VALUATION_MULTIPLES: "Multiples de valorisation",
    DCF_BASICS: "DCF — bases",
  },
  en: {
    COMPOUND_INTEREST: "Compound Interest",
    BUDGET: "Budget",
    DEBT_REPAYMENT: "Debt Repayment",
    VALUATION_MULTIPLES: "Valuation Multiples",
    DCF_BASICS: "DCF Basics",
  },
} as const;

export default async function AcademySimulatorsPage({
  params,
}: {
  params: Promise<{ locale: string; academySlug: string }>;
}) {
  const { locale, academySlug } = await params;
  setRequestLocale(locale);
  await requireSession(locale);
  const t = await getTranslations("simulators");
  const ta = await getTranslations("app");
  const loc = locale as Locale;

  const academy = await findAcademyBySlug(academySlug);
  if (!academy || academy.status !== "ACTIVE") notFound();

  const sims = SIMULATION_CATALOG.filter((s) => s.academySlug === academySlug);
  if (sims.length === 0) notFound();

  const { title } = localizeAcademy(academy, loc);

  return (
    <section data-testid="simulators-index-page">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/academies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
          {ta("academies")}
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{title}</span>
      </nav>
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p className="mt-2 text-sm text-gray-600">{t("subtitle")}</p>
      <ul className="mt-6 space-y-3">
        {sims.map((sim) => (
          <li key={sim.type}>
            <Link
              href={`/academies/${academySlug}/simulators/${sim.type}`}
              className="block rounded-lg border bg-white p-4 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-testid={`simulator-link-${sim.type}`}
            >
              <p className="font-semibold text-gray-900">
                {TITLES[loc][sim.type]}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {sim.estimatedMinutes} {ta("minutes")} · {sim.difficulty}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
