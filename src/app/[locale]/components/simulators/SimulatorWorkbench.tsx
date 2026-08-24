"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/shared/types/locale";
import type { SimulationType, SimulationScenarioId } from "@/modules/simulation-engine/types";
import { formatMoney, formatPercent } from "@/modules/simulation-engine/types";
import {
  runCompoundInterest,
  runBudget,
  runDebtRepayment,
  runDebtComparison,
  runValuationMultiples,
  runDcf,
  compoundInterestSensitivity,
  dcfSensitivity,
  getScenarioInputs,
  getSimulationCatalogEntry,
} from "@/modules/simulation-engine/simulation-service";
import type { CompoundInterestInput } from "@/modules/simulation-engine/engines/compound-interest";
import type { BudgetInput } from "@/modules/simulation-engine/engines/budget";
import type { DebtRepaymentInput } from "@/modules/simulation-engine/engines/debt-repayment";
import type { ValuationMultiplesInput } from "@/modules/simulation-engine/engines/valuation-multiples";
import type { DcfInput } from "@/modules/simulation-engine/engines/dcf";

export type SimulatorLabels = {
  educationalNotice: string;
  whatIsThis: string;
  howItWorks: string;
  whatToNotice: string;
  scenarios: string;
  base: string;
  upside: string;
  downside: string;
  custom: string;
  results: string;
  sensitivity: string;
  markCompleted: string;
  completed: string;
  explainResult: string;
  explaining: string;
  explainError: string;
  contributions: string;
  growth: string;
  finalValue: string;
  compareScenarios: string;
  scenarioA: string;
  scenarioB: string;
  interestSaved: string;
  timeSaved: string;
  months: string;
  invalidInput: string;
  steps: string;
};

type Pedagogy = {
  whatFr: string;
  whatEn: string;
  howFr: string;
  howEn: string;
  noticeFr: string;
  noticeEn: string;
};

const PEDAGOGY: Record<SimulationType, Pedagogy> = {
  COMPOUND_INTEREST: {
    whatFr: "Visualisez comment le capital croît avec le temps grâce à l'intérêt composé.",
    whatEn: "See how capital grows over time through compound interest.",
    howFr: "Chaque mois, les intérêts s'ajoutent au capital, puis les cotisations.",
    howEn: "Each month, interest is applied to the balance, then contributions are added.",
    noticeFr: "Que se passe-t-il si le taux d'intérêt augmente ?",
    noticeEn: "What happens when the interest rate increases?",
  },
  BUDGET: {
    whatFr: "Repartissez un revenu mensuel et observez l'épargne restante.",
    whatEn: "Allocate monthly income and observe remaining savings.",
    howFr: "Dépenses totales = somme des postes. Reste = revenu − dépenses.",
    howEn: "Total expenses = sum of categories. Remaining = income − expenses.",
    noticeFr: "Quel est l'effet d'augmenter l'épargne vers 20 % ?",
    noticeEn: "What is the effect of raising savings toward 20%?",
  },
  DEBT_REPAYMENT: {
    whatFr: "Estimez la durée et le coût d'un remboursement de dette.",
    whatEn: "Estimate payoff time and cost for debt repayment.",
    howFr: "Chaque mois : intérêts puis paiement. Comparez un paiement plus élevé.",
    howEn: "Each month: interest then payment. Compare a higher payment.",
    noticeFr: "Combien d'intérêts économisez-vous avec un paiement plus fort ?",
    noticeEn: "How much interest do you save with a higher payment?",
  },
  VALUATION_MULTIPLES: {
    whatFr: "Estimez EV et Equity Value via un multiple EV/EBITDA (outil pédagogique).",
    whatEn: "Estimate EV and Equity Value via an EV/EBITDA multiple (educational).",
    howFr: "EV = EBITDA × multiple. Equity Value = EV − dette nette.",
    howEn: "EV = EBITDA × multiple. Equity Value = EV − net debt.",
    noticeFr: "Comment le multiple change-t-il la valeur d'entreprise ?",
    noticeEn: "How does the multiple change enterprise value?",
  },
  DCF_BASICS: {
    whatFr: "Actualisez des flux futurs pour estimer une valeur d'entreprise simplifiée.",
    whatEn: "Discount future cash flows for a simplified enterprise value.",
    howFr: "Projetez les FCF, actualisez-les, puis ajoutez la valeur terminale actualisée.",
    howEn: "Project FCFs, discount them, then add discounted terminal value.",
    noticeFr: "Que se passe-t-il lorsque le WACC augmente ?",
    noticeEn: "What happens when WACC increases?",
  },
};

function NumberField({
  id,
  label,
  value,
  onChange,
  step = 1,
  min = 0,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
  min?: number;
}) {
  return (
    <label className="block text-sm" htmlFor={id}>
      <span className="font-medium text-gray-700">{label}</span>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={Number.isFinite(value) ? value : 0}
        step={step}
        min={min}
        onChange={(e) => onChange(Number(e.target.value))}
        data-testid={`sim-input-${id}`}
      />
    </label>
  );
}

type Props = {
  type: SimulationType;
  locale: Locale;
  labels: SimulatorLabels;
  embedded?: boolean;
};

export function SimulatorWorkbench({ type, locale, labels, embedded }: Props) {
  const catalog = getSimulationCatalogEntry(type);
  const [scenarioId, setScenarioId] = useState<SimulationScenarioId>("BASE");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [explain, setExplain] = useState<string | null>(null);
  const [explaining, setExplaining] = useState(false);

  const [compound, setCompound] = useState<CompoundInterestInput>(
    () => getScenarioInputs("COMPOUND_INTEREST", "BASE") as CompoundInterestInput
  );
  const [budget, setBudget] = useState<BudgetInput>(
    () => getScenarioInputs("BUDGET", "BASE") as BudgetInput
  );
  const [debt, setDebt] = useState<DebtRepaymentInput>(
    () => getScenarioInputs("DEBT_REPAYMENT", "BASE") as DebtRepaymentInput
  );
  const [debtHigher, setDebtHigher] = useState(400);
  const [multiples, setMultiples] = useState<ValuationMultiplesInput>(
    () => getScenarioInputs("VALUATION_MULTIPLES", "BASE") as ValuationMultiplesInput
  );
  const [dcf, setDcf] = useState<DcfInput>(
    () => getScenarioInputs("DCF_BASICS", "BASE") as DcfInput
  );

  function applyScenario(id: Exclude<SimulationScenarioId, "CUSTOM">) {
    setScenarioId(id);
    setError(null);
    const inputs = getScenarioInputs(type, id);
    switch (type) {
      case "COMPOUND_INTEREST":
        setCompound(inputs as CompoundInterestInput);
        break;
      case "BUDGET":
        setBudget(inputs as BudgetInput);
        break;
      case "DEBT_REPAYMENT":
        setDebt(inputs as DebtRepaymentInput);
        if (id === "UPSIDE") setDebtHigher(400);
        break;
      case "VALUATION_MULTIPLES":
        setMultiples(inputs as ValuationMultiplesInput);
        break;
      case "DCF_BASICS":
        setDcf(inputs as DcfInput);
        break;
    }
  }

  const computed = useMemo(() => {
    try {
      switch (type) {
        case "COMPOUND_INTEREST":
          return { ok: true as const, result: runCompoundInterest(compound) };
        case "BUDGET":
          return { ok: true as const, result: runBudget(budget) };
        case "DEBT_REPAYMENT":
          return {
            ok: true as const,
            result: runDebtRepayment(debt),
            compare: runDebtComparison(debt, debtHigher),
          };
        case "VALUATION_MULTIPLES":
          return { ok: true as const, result: runValuationMultiples(multiples) };
        case "DCF_BASICS":
          return { ok: true as const, result: runDcf(dcf) };
      }
    } catch {
      return { ok: false as const };
    }
  }, [type, compound, budget, debt, debtHigher, multiples, dcf]);

  const sensitivity =
    type === "COMPOUND_INTEREST" && computed.ok
      ? compoundInterestSensitivity(compound, [4, 6, 8])
      : type === "DCF_BASICS" && computed.ok
        ? dcfSensitivity(dcf, [8, 10, 12])
        : null;

  const pedagogy = PEDAGOGY[type];

  async function markComplete() {
    if (!computed.ok) return;
    setError(null);
    const snapshot: Record<string, number | string | boolean | null> = {};
    const outputs = computed.result.outputs as Record<string, unknown>;
    for (const [k, v] of Object.entries(outputs)) {
      if (typeof v === "number" || typeof v === "string" || typeof v === "boolean" || v === null) {
        snapshot[k] = v;
      }
    }
    try {
      const res = await fetch("/api/simulation/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          simulationType: type,
          scenarioId,
          resultSnapshot: snapshot,
        }),
      });
      if (!res.ok) {
        setError(labels.invalidInput);
        return;
      }
      setCompleted(true);
    } catch {
      setError(labels.invalidInput);
    }
  }

  async function explainResult() {
    if (!computed.ok || !catalog) return;
    setExplaining(true);
    setExplain(null);
    const summary =
      locale === "fr"
        ? computed.result.meta.interpretationFr ?? JSON.stringify(computed.result.outputs)
        : computed.result.meta.interpretationEn ?? JSON.stringify(computed.result.outputs);
    try {
      const res = await fetch("/api/ai-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "EXPLAIN",
          locale,
          academySlug: catalog.academySlug,
          courseSlug: catalog.courseSlug,
          moduleSlug: catalog.moduleSlug,
          lessonSlug: catalog.lessonSlug,
          simulationType: type,
          simulationScenario: scenarioId,
          simulationSummary: summary.slice(0, 800),
          userMessage:
            locale === "fr"
              ? "Explique ce résultat de simulateur de façon pédagogique."
              : "Explain this simulator result in a pedagogical way.",
        }),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok || !data.message) {
        setExplain(labels.explainError);
        return;
      }
      setExplain(data.message);
    } catch {
      setExplain(labels.explainError);
    } finally {
      setExplaining(false);
    }
  }

  return (
    <div
      className={`space-y-6 ${embedded ? "" : "rounded-xl border bg-white p-4 sm:p-6"}`}
      data-testid={`simulator-${type}`}
    >
      <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-900" role="note">
        {labels.educationalNotice}
      </p>

      <div className="grid gap-3 text-sm sm:grid-cols-3">
        <div>
          <h3 className="font-semibold text-gray-900">{labels.whatIsThis}</h3>
          <p className="mt-1 text-gray-600">{locale === "fr" ? pedagogy.whatFr : pedagogy.whatEn}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{labels.howItWorks}</h3>
          <p className="mt-1 text-gray-600">{locale === "fr" ? pedagogy.howFr : pedagogy.howEn}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{labels.whatToNotice}</h3>
          <p className="mt-1 text-gray-600">
            {locale === "fr" ? pedagogy.noticeFr : pedagogy.noticeEn}
          </p>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold">{labels.scenarios}</p>
        <div className="flex flex-wrap gap-2">
          {(["BASE", "UPSIDE", "DOWNSIDE"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => applyScenario(id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                scenarioId === id ? "bg-blue-600 text-white" : "border bg-white text-gray-700"
              }`}
              data-testid={`scenario-${id}`}
            >
              {id === "BASE" ? labels.base : id === "UPSIDE" ? labels.upside : labels.downside}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3" data-testid="simulator-inputs">
          {type === "COMPOUND_INTEREST" && (
            <>
              <NumberField id="initialAmount" label={locale === "fr" ? "Montant initial (€)" : "Initial amount (€)"} value={compound.initialAmount} onChange={(n) => { setScenarioId("CUSTOM"); setCompound({ ...compound, initialAmount: n }); }} />
              <NumberField id="monthlyContribution" label={locale === "fr" ? "Cotisation mensuelle (€)" : "Monthly contribution (€)"} value={compound.monthlyContribution} onChange={(n) => { setScenarioId("CUSTOM"); setCompound({ ...compound, monthlyContribution: n }); }} />
              <NumberField id="annualRatePercent" label={locale === "fr" ? "Taux annuel (%)" : "Annual rate (%)"} value={compound.annualRatePercent} step={0.1} onChange={(n) => { setScenarioId("CUSTOM"); setCompound({ ...compound, annualRatePercent: n }); }} />
              <NumberField id="years" label={locale === "fr" ? "Durée (années)" : "Duration (years)"} value={compound.years} onChange={(n) => { setScenarioId("CUSTOM"); setCompound({ ...compound, years: n }); }} />
            </>
          )}
          {type === "BUDGET" && (
            <>
              <NumberField id="monthlyIncome" label={locale === "fr" ? "Revenu mensuel (€)" : "Monthly income (€)"} value={budget.monthlyIncome} onChange={(n) => { setScenarioId("CUSTOM"); setBudget({ ...budget, monthlyIncome: n }); }} />
              <NumberField id="housing" label={locale === "fr" ? "Logement" : "Housing"} value={budget.housing} onChange={(n) => { setScenarioId("CUSTOM"); setBudget({ ...budget, housing: n }); }} />
              <NumberField id="food" label={locale === "fr" ? "Alimentation" : "Food"} value={budget.food} onChange={(n) => { setScenarioId("CUSTOM"); setBudget({ ...budget, food: n }); }} />
              <NumberField id="transport" label={locale === "fr" ? "Transport" : "Transport"} value={budget.transport} onChange={(n) => { setScenarioId("CUSTOM"); setBudget({ ...budget, transport: n }); }} />
              <NumberField id="utilities" label={locale === "fr" ? "Charges" : "Utilities"} value={budget.utilities} onChange={(n) => { setScenarioId("CUSTOM"); setBudget({ ...budget, utilities: n }); }} />
              <NumberField id="debt" label={locale === "fr" ? "Dettes" : "Debt"} value={budget.debt} onChange={(n) => { setScenarioId("CUSTOM"); setBudget({ ...budget, debt: n }); }} />
              <NumberField id="otherExpenses" label={locale === "fr" ? "Autres" : "Other"} value={budget.otherExpenses} onChange={(n) => { setScenarioId("CUSTOM"); setBudget({ ...budget, otherExpenses: n }); }} />
              <NumberField id="savingsTarget" label={locale === "fr" ? "Objectif d'épargne" : "Savings target"} value={budget.savingsTarget} onChange={(n) => { setScenarioId("CUSTOM"); setBudget({ ...budget, savingsTarget: n }); }} />
            </>
          )}
          {type === "DEBT_REPAYMENT" && (
            <>
              <NumberField id="debtAmount" label={locale === "fr" ? "Montant de la dette (€)" : "Debt amount (€)"} value={debt.debtAmount} onChange={(n) => { setScenarioId("CUSTOM"); setDebt({ ...debt, debtAmount: n }); }} />
              <NumberField id="annualRatePercent" label={locale === "fr" ? "Taux annuel (%)" : "Annual rate (%)"} value={debt.annualRatePercent} step={0.1} onChange={(n) => { setScenarioId("CUSTOM"); setDebt({ ...debt, annualRatePercent: n }); }} />
              <NumberField id="monthlyPayment" label={locale === "fr" ? "Paiement A (€)" : "Payment A (€)"} value={debt.monthlyPayment} onChange={(n) => { setScenarioId("CUSTOM"); setDebt({ ...debt, monthlyPayment: n }); }} />
              <NumberField id="higherPayment" label={locale === "fr" ? "Paiement B (€)" : "Payment B (€)"} value={debtHigher} onChange={(n) => { setScenarioId("CUSTOM"); setDebtHigher(n); }} />
            </>
          )}
          {type === "VALUATION_MULTIPLES" && (
            <>
              <NumberField id="revenue" label="Revenue" value={multiples.revenue} onChange={(n) => { setScenarioId("CUSTOM"); setMultiples({ ...multiples, revenue: n }); }} />
              <NumberField id="ebitda" label="EBITDA" value={multiples.ebitda} onChange={(n) => { setScenarioId("CUSTOM"); setMultiples({ ...multiples, ebitda: n }); }} />
              <NumberField id="ebit" label="EBIT" value={multiples.ebit} onChange={(n) => { setScenarioId("CUSTOM"); setMultiples({ ...multiples, ebit: n }); }} />
              <NumberField id="netDebt" label={locale === "fr" ? "Dette nette" : "Net debt"} value={multiples.netDebt} min={-1e12} onChange={(n) => { setScenarioId("CUSTOM"); setMultiples({ ...multiples, netDebt: n }); }} />
              <NumberField id="evEbitdaMultiple" label="EV/EBITDA" value={multiples.evEbitdaMultiple} step={0.1} onChange={(n) => { setScenarioId("CUSTOM"); setMultiples({ ...multiples, evEbitdaMultiple: n }); }} />
            </>
          )}
          {type === "DCF_BASICS" && (
            <>
              <NumberField id="year1Fcf" label="Year 1 FCF" value={dcf.year1Fcf} onChange={(n) => { setScenarioId("CUSTOM"); setDcf({ ...dcf, year1Fcf: n }); }} />
              <NumberField id="growthRatePercent" label={locale === "fr" ? "Croissance (%)" : "Growth (%)"} value={dcf.growthRatePercent} step={0.1} min={-50} onChange={(n) => { setScenarioId("CUSTOM"); setDcf({ ...dcf, growthRatePercent: n }); }} />
              <NumberField id="waccPercent" label="WACC (%)" value={dcf.waccPercent} step={0.1} onChange={(n) => { setScenarioId("CUSTOM"); setDcf({ ...dcf, waccPercent: n }); }} />
              <NumberField id="terminalGrowthPercent" label={locale === "fr" ? "Croissance terminale (%)" : "Terminal growth (%)"} value={dcf.terminalGrowthPercent} step={0.1} min={-5} onChange={(n) => { setScenarioId("CUSTOM"); setDcf({ ...dcf, terminalGrowthPercent: n }); }} />
              <NumberField id="forecastYears" label={locale === "fr" ? "Horizon (années)" : "Forecast years"} value={dcf.forecastYears} onChange={(n) => { setScenarioId("CUSTOM"); setDcf({ ...dcf, forecastYears: n }); }} />
            </>
          )}
        </div>

        <div className="space-y-4 rounded-lg border bg-slate-50 p-4" data-testid="simulator-results">
          <h3 className="font-semibold text-gray-900">{labels.results}</h3>
          {!computed.ok && (
            <p className="text-sm text-red-700" role="alert" data-testid="simulator-error">
              {labels.invalidInput}
            </p>
          )}
          {computed.ok && type === "COMPOUND_INTEREST" && (() => {
            const out = computed.result.outputs as import("@/modules/simulation-engine/engines/compound-interest").CompoundInterestOutput;
            return (
            <div className="space-y-2 text-sm" data-testid="compound-breakdown">
              <p>{labels.contributions}: <strong>{formatMoney(out.totalContributions, locale)}</strong></p>
              <p>+ {labels.growth}: <strong>{formatMoney(out.growth, locale)}</strong></p>
              <p>= {labels.finalValue}: <strong data-testid="final-value">{formatMoney(out.finalValue, locale)}</strong></p>
              <p>{formatPercent(out.growthPercentage, locale)}</p>
            </div>
            );
          })()}
          {computed.ok && type === "BUDGET" && (() => {
            const out = computed.result.outputs as import("@/modules/simulation-engine/engines/budget").BudgetOutput;
            return (
            <div className="space-y-2 text-sm">
              <p data-testid="budget-remaining">{formatMoney(out.remainingCash, locale)}</p>
              <p data-testid="budget-savings-rate">{formatPercent(out.savingsRate, locale)}</p>
              <p className="text-gray-700">
                {locale === "fr" ? computed.result.meta.interpretationFr : computed.result.meta.interpretationEn}
              </p>
            </div>
            );
          })()}
          {computed.ok && type === "DEBT_REPAYMENT" && "compare" in computed && computed.compare && (
            <div className="space-y-2 text-sm" data-testid="debt-comparison">
              <p className="font-medium">{labels.compareScenarios}</p>
              <p>{labels.scenarioA}: {computed.compare.scenarioA.outputs.monthsToRepay} {labels.months} · {formatMoney(computed.compare.scenarioA.outputs.totalInterest, locale)}</p>
              <p>{labels.scenarioB}: {computed.compare.scenarioB.outputs.monthsToRepay} {labels.months} · {formatMoney(computed.compare.scenarioB.outputs.totalInterest, locale)}</p>
              <p data-testid="interest-saved">{labels.interestSaved}: {formatMoney(computed.compare.interestSaved, locale)}</p>
              <p data-testid="time-saved">{labels.timeSaved}: {computed.compare.monthsSaved} {labels.months}</p>
            </div>
          )}
          {computed.ok && type === "VALUATION_MULTIPLES" && (() => {
            const out = computed.result.outputs as import("@/modules/simulation-engine/engines/valuation-multiples").ValuationMultiplesOutput;
            return (
            <div className="space-y-2 text-sm">
              <p data-testid="enterprise-value">EV: {formatMoney(out.enterpriseValue, locale)}</p>
              <p data-testid="equity-value">Equity: {formatMoney(out.equityValue, locale)}</p>
              <p className="font-medium">{labels.steps}</p>
              {computed.result.meta.steps?.map((s) => (
                <p key={s.labelEn}>{locale === "fr" ? s.labelFr : s.labelEn}: {formatMoney(s.value, locale)}</p>
              ))}
            </div>
            );
          })()}
          {computed.ok && type === "DCF_BASICS" && (() => {
            const out = computed.result.outputs as import("@/modules/simulation-engine/engines/dcf").DcfOutput;
            return (
            <div className="space-y-2 text-sm">
              <p data-testid="dcf-ev">EV: {formatMoney(out.enterpriseValue, locale)}</p>
              <p>PV FCF: {formatMoney(out.pvOfFcf, locale)}</p>
              <p>TV: {formatMoney(out.terminalValue, locale)}</p>
              <p>PV TV: {formatMoney(out.pvOfTerminalValue, locale)}</p>
            </div>
            );
          })()}

          {sensitivity && (
            <div className="mt-4" data-testid="sensitivity-table">
              <p className="mb-2 text-sm font-semibold">{labels.sensitivity}</p>
              <ul className="space-y-1 text-sm">
                {sensitivity.map((row) => (
                  <li key={"annualRatePercent" in row ? row.annualRatePercent : row.waccPercent}>
                    {"annualRatePercent" in row
                      ? `${row.annualRatePercent}% → ${formatMoney(row.finalValue, locale)}`
                      : `WACC ${row.waccPercent}% → ${formatMoney(row.enterpriseValue, locale)}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={markComplete}
          disabled={completed || !computed.ok}
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
          data-testid="mark-simulation-completed"
        >
          {completed ? labels.completed : labels.markCompleted}
        </button>
        <button
          type="button"
          onClick={explainResult}
          disabled={explaining || !computed.ok}
          className="rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="explain-simulation-result"
        >
          {explaining ? labels.explaining : labels.explainResult}
        </button>
      </div>
      {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
      {explain && (
        <div className="rounded-lg border bg-blue-50 p-3 text-sm text-gray-800" data-testid="simulation-ai-response">
          {explain}
        </div>
      )}
    </div>
  );
}
