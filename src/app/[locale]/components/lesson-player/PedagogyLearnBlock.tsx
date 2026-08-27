"use client";

import { useState, type ReactNode } from "react";
import type { Locale } from "@/shared/types/locale";
import type { LessonPedagogyPack, PedagogyScreen } from "@/modules/mastery-engine/lesson-pedagogy";
import type { CriticalDistinctionCard } from "@/modules/mastery-engine/critical-distinctions";

type PedagogyLabels = {
  what: string;
  why: string;
  when: string;
  how: string;
  howToDecide: string;
  scenario: string;
  distinctions: string;
  takeaway: string;
  showRationale: string;
  hideRationale: string;
  continueReading: string;
};

type PedagogyLearnBlockProps = {
  pack: LessonPedagogyPack;
  locale: Locale;
  takeaway?: string | null;
  criticalDistinctions?: CriticalDistinctionCard[];
  labels: PedagogyLabels;
};

function pick(locale: Locale, fr: string, en: string) {
  return locale === "fr" ? fr : en;
}

function Card({
  title,
  children,
  testId,
}: {
  title: string;
  children: ReactNode;
  testId?: string;
}) {
  return (
    <section
      className="rounded-lg border border-slate-200 bg-white p-4 sm:p-5"
      data-testid={testId}
    >
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        {title}
      </h3>
      <div className="space-y-2 text-sm leading-relaxed text-gray-800 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function MiniCase({
  screen,
  locale,
  labels,
}: {
  screen: PedagogyScreen;
  locale: Locale;
  labels: PedagogyLabels;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showWhy, setShowWhy] = useState(false);
  const why = pick(locale, screen.whyFr ?? "", screen.whyEn ?? "");

  return (
    <div className="space-y-3" data-testid="pedagogy-mini-case">
      <p className="font-medium text-gray-900">
        {pick(locale, screen.titleFr, screen.titleEn)}
      </p>
      <p className="whitespace-pre-wrap text-gray-800">
        {pick(locale, screen.bodyFr, screen.bodyEn)}
      </p>
      {screen.choices && screen.choices.length > 0 ? (
        <ul className="space-y-2">
          {screen.choices.map((choice) => {
            const isSelected = selected === choice.id;
            const reveal = selected != null;
            const isCorrect = choice.correct === true;
            return (
              <li key={choice.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(choice.id);
                    setShowWhy(true);
                  }}
                  className={`min-h-11 w-full rounded-lg border px-3 py-2.5 text-left text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    !reveal
                      ? "border-gray-300 bg-white hover:bg-gray-50"
                      : isCorrect
                        ? "border-green-400 bg-green-50 text-green-900"
                        : isSelected
                          ? "border-red-300 bg-red-50 text-red-900"
                          : "border-gray-200 bg-gray-50 text-gray-500"
                  }`}
                  data-testid={`mini-case-choice-${choice.id}`}
                >
                  {pick(locale, choice.labelFr, choice.labelEn)}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
      {why && showWhy ? (
        <div className="rounded-md bg-slate-50 p-3 text-sm text-slate-800">
          <button
            type="button"
            className="mb-1 text-xs font-semibold text-blue-700 underline"
            onClick={() => setShowWhy((v) => !v)}
          >
            {labels.hideRationale}
          </button>
          <p>{why}</p>
        </div>
      ) : why && selected ? (
        <button
          type="button"
          className="text-xs font-semibold text-blue-700 underline"
          onClick={() => setShowWhy(true)}
        >
          {labels.showRationale}
        </button>
      ) : null}
    </div>
  );
}

/**
 * Renders an existing pedagogy pack in LEARN (mobile-first cards).
 * Does not invent content — only surfaces pack fields + optional takeaway/distinctions.
 */
export function PedagogyLearnBlock({
  pack,
  locale,
  takeaway,
  criticalDistinctions = [],
  labels,
}: PedagogyLearnBlockProps) {
  const miniCases = pack.screens.filter((s) => s.intent === "MINI_CASE");
  const whenHowScreens = pack.screens.filter(
    (s) => s.intent === "CONCEPT" || s.intent === "RECOGNIZE" || s.intent === "VISUAL"
  );
  const visualLines =
    locale === "fr" ? pack.visualModel.linesFr : pack.visualModel.linesEn;

  return (
    <div className="space-y-4" data-testid="pedagogy-learn-block">
      <Card title={labels.what} testId="pedagogy-what">
        <p>{pick(locale, pack.objectiveFr, pack.objectiveEn)}</p>
      </Card>

      <Card title={labels.why} testId="pedagogy-why">
        <p>{pick(locale, pack.whyItMattersFr, pack.whyItMattersEn)}</p>
      </Card>

      {(whenHowScreens.length > 0 || visualLines.length > 0) && (
        <Card title={`${labels.when} / ${labels.how}`} testId="pedagogy-when-how">
          {whenHowScreens.map((screen, idx) => (
            <div key={`${screen.intent}-${idx}`} className="mb-3 last:mb-0">
              <p className="font-medium text-gray-900">
                {pick(locale, screen.titleFr, screen.titleEn)}
              </p>
              <p className="mt-1 whitespace-pre-wrap">
                {pick(locale, screen.bodyFr, screen.bodyEn)}
              </p>
            </div>
          ))}
          {visualLines.length > 0 ? (
            <div
              className="mt-2 rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700"
              data-testid="pedagogy-visual"
            >
              {visualLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ) : null}
        </Card>
      )}

      {pack.decisionRules.length > 0 && (
        <Card title={labels.howToDecide} testId="pedagogy-how-to-decide">
          <ul className="list-disc space-y-2 pl-5">
            {pack.decisionRules.map((rule, idx) => (
              <li key={idx}>{pick(locale, rule.fr, rule.en)}</li>
            ))}
          </ul>
        </Card>
      )}

      {miniCases.length > 0 && (
        <Card title={labels.scenario} testId="pedagogy-scenario">
          {miniCases.map((screen, idx) => (
            <MiniCase
              key={idx}
              screen={screen}
              locale={locale}
              labels={labels}
            />
          ))}
        </Card>
      )}

      {(criticalDistinctions.length > 0 || pack.distinctions.length > 0) && (
        <Card title={labels.distinctions} testId="pedagogy-distinctions">
          {criticalDistinctions.map((d) => (
            <div
              key={d.id}
              className="mb-3 rounded-md border border-amber-200 bg-amber-50/60 p-3 last:mb-0"
              data-testid={`distinction-${d.id}`}
            >
              <p className="font-semibold text-amber-950">
                {pick(locale, d.leftFr, d.leftEn)}
                {d.middleFr ? ` · ${pick(locale, d.middleFr, d.middleEn ?? "")}` : ""}
                {" · "}
                {pick(locale, d.rightFr, d.rightEn)}
              </p>
              <p className="mt-1">{pick(locale, d.ruleFr, d.ruleEn)}</p>
              <p className="mt-1 text-xs text-amber-900/80">
                {pick(locale, d.examCueFr, d.examCueEn)}
              </p>
            </div>
          ))}
          {pack.distinctions.map((d, idx) => (
            <div
              key={`pack-${idx}`}
              className="mb-3 rounded-md border border-slate-200 bg-slate-50 p-3 last:mb-0"
            >
              <p className="font-semibold text-gray-900">
                {d.a} · {d.b}
              </p>
              <p className="mt-1">{pick(locale, d.ruleFr, d.ruleEn)}</p>
            </div>
          ))}
        </Card>
      )}

      {takeaway ? (
        <Card title={labels.takeaway} testId="pedagogy-takeaway">
          <p>{takeaway}</p>
        </Card>
      ) : pack.masteryHooks.noteFr || pack.masteryHooks.noteEn ? (
        <Card title={labels.takeaway} testId="pedagogy-takeaway">
          <p>{pick(locale, pack.masteryHooks.noteFr, pack.masteryHooks.noteEn)}</p>
        </Card>
      ) : null}
    </div>
  );
}

export type { PedagogyLabels };
