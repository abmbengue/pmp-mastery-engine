import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { requireSession } from "@/modules/auth/session";
import {
  getSimulationCatalogEntry,
  SIMULATION_CATALOG,
} from "@/modules/simulation-engine/simulation-service";
import { simulationTypeSchema } from "@/modules/simulation-engine/types";
import { SimulatorWorkbench } from "@/app/[locale]/components/simulators/SimulatorWorkbench";
import { Link } from "@/modules/localization/navigation";
import type { Locale } from "@/shared/types/locale";

export default async function SimulatorPage({
  params,
}: {
  params: Promise<{ locale: string; academySlug: string; simulationType: string }>;
}) {
  const { locale, academySlug, simulationType: rawType } = await params;
  setRequestLocale(locale);
  await requireSession(locale);

  const parsed = simulationTypeSchema.safeParse(rawType);
  if (!parsed.success) notFound();

  const entry = getSimulationCatalogEntry(parsed.data);
  if (!entry || entry.academySlug !== academySlug) notFound();

  const t = await getTranslations("simulators");
  const ta = await getTranslations("app");
  const loc = locale as Locale;

  const title =
    loc === "fr"
      ? {
          COMPOUND_INTEREST: "Intérêt composé",
          BUDGET: "Budget",
          DEBT_REPAYMENT: "Remboursement de dette",
          VALUATION_MULTIPLES: "Multiples de valorisation",
          DCF_BASICS: "DCF — bases",
        }[parsed.data]
      : {
          COMPOUND_INTEREST: "Compound Interest",
          BUDGET: "Budget",
          DEBT_REPAYMENT: "Debt Repayment",
          VALUATION_MULTIPLES: "Valuation Multiples",
          DCF_BASICS: "DCF Basics",
        }[parsed.data];

  const related = SIMULATION_CATALOG.filter((s) => s.academySlug === academySlug);

  return (
    <section data-testid="simulator-page">
      <nav className="mb-4 flex flex-wrap gap-2 text-sm text-gray-500">
        <Link href="/academies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
          {ta("academies")}
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href={`/academies/${academySlug}/simulators`}
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t("title")}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-gray-800">{title}</span>
      </nav>

      <h1 className="mb-2 text-2xl font-bold" data-testid="simulator-title">
        {title}
      </h1>
      <p className="mb-6 text-sm text-gray-600">
        <Link
          href={`/academies/${entry.academySlug}/courses/${entry.courseSlug}/modules/${entry.moduleSlug}/lessons/${entry.lessonSlug}`}
          className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t("relatedLesson")}
        </Link>
      </p>

      <SimulatorWorkbench
        type={parsed.data}
        locale={loc}
        labels={{
          educationalNotice: t("educationalNotice"),
          whatIsThis: t("whatIsThis"),
          howItWorks: t("howItWorks"),
          whatToNotice: t("whatToNotice"),
          scenarios: t("scenarios"),
          base: t("base"),
          upside: t("upside"),
          downside: t("downside"),
          custom: t("custom"),
          results: t("results"),
          sensitivity: t("sensitivity"),
          markCompleted: t("markCompleted"),
          completed: t("completed"),
          explainResult: t("explainResult"),
          explaining: t("explaining"),
          explainError: t("explainError"),
          contributions: t("contributions"),
          growth: t("growth"),
          finalValue: t("finalValue"),
          compareScenarios: t("compareScenarios"),
          scenarioA: t("scenarioA"),
          scenarioB: t("scenarioB"),
          interestSaved: t("interestSaved"),
          timeSaved: t("timeSaved"),
          months: t("months"),
          invalidInput: t("invalidInput"),
          steps: t("steps"),
        }}
      />

      <ul className="mt-8 flex flex-wrap gap-3 text-sm">
        {related.map((s) => (
          <li key={s.type}>
            <Link
              href={`/academies/${academySlug}/simulators/${s.type}`}
              className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {s.type}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
