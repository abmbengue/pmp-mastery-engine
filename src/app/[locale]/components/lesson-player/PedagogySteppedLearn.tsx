"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { Locale } from "@/shared/types/locale";
import type { LessonPedagogyPack } from "@/modules/mastery-engine/lesson-pedagogy";
import type { CriticalDistinctionCard } from "@/modules/mastery-engine/critical-distinctions";
import {
  buildSharedVisionLearnSteps,
  type SharedVisionLearnStep,
  type PedagogyMindsetPhase,
} from "@/modules/mastery-engine/pedagogy-shared-vision-steps";
import type { PedagogyLabels } from "./PedagogyLearnBlock";

export type SteppedPedagogyLabels = PedagogyLabels & {
  recognize: string;
  decide: string;
  reflectPrompt: string;
  miniCasePrompt: string;
  continue: string;
  mindsetAssess: string;
  mindsetAlign: string;
  mindsetDecide: string;
  mindsetAct: string;
  stepOf: string;
};

type PedagogySteppedLearnProps = {
  pack: LessonPedagogyPack;
  locale: Locale;
  takeaway?: string | null;
  criticalDistinctions?: CriticalDistinctionCard[];
  labels: SteppedPedagogyLabels;
};

function pick(locale: Locale, fr: string, en: string) {
  return locale === "fr" ? fr : en;
}

function mindsetLabel(phase: PedagogyMindsetPhase, labels: SteppedPedagogyLabels): string {
  switch (phase) {
    case "ASSESS":
      return labels.mindsetAssess;
    case "ALIGN":
      return labels.mindsetAlign;
    case "DECIDE":
      return labels.mindsetDecide;
    case "ACT":
      return labels.mindsetAct;
  }
}

function StepCard({
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
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
        {title}
      </h3>
      <div className="space-y-3 text-sm leading-relaxed text-gray-800 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function MiniCaseStep({
  step,
  locale,
  labels,
  onComplete,
}: {
  step: Extract<SharedVisionLearnStep, { kind: "mini_case" }>;
  locale: Locale;
  labels: SteppedPedagogyLabels;
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"reflect" | "choose" | "feedback">("reflect");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const rationale = pick(locale, step.rationaleFr, step.rationaleEn);

  return (
    <div className="space-y-4" data-testid="pedagogy-mini-case-step">
      <p className="font-medium text-gray-900">
        {pick(locale, step.scenarioFr, step.scenarioEn)}
      </p>

      {phase === "reflect" ? (
        <p className="rounded-md bg-slate-50 p-3 text-sm text-slate-700">
          {pick(locale, step.reflectFr, step.reflectEn)}
        </p>
      ) : null}

      {phase !== "reflect" ? (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            {pick(locale, step.promptFr, step.promptEn)}
          </p>
          <ul className="space-y-2">
            {step.choices.map((choice) => {
              const isSelected = selectedId === choice.id;
              const reveal = phase === "feedback";
              const isCorrect = choice.correct === true;
              return (
                <li key={choice.id}>
                  <button
                    type="button"
                    disabled={phase === "feedback"}
                    onClick={() => {
                      setSelectedId(choice.id);
                      setPhase("feedback");
                      onComplete();
                    }}
                    className={`min-h-11 w-full rounded-lg border px-3 py-2.5 text-left text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-default ${
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
        </div>
      ) : null}

      {phase === "feedback" && rationale ? (
        <div
          className="rounded-md bg-slate-50 p-3 text-sm text-slate-800"
          data-testid="mini-case-rationale"
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {labels.showRationale}
          </p>
          <p>{rationale}</p>
        </div>
      ) : null}

      {phase === "reflect" ? (
        <button
          type="button"
          className="min-h-11 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setPhase("choose")}
          data-testid="mini-case-show-options"
        >
          {labels.continue}
        </button>
      ) : null}
    </div>
  );
}

function renderStepContent(
  step: SharedVisionLearnStep,
  locale: Locale,
  labels: SteppedPedagogyLabels,
  onMiniCaseComplete: () => void
): { title: string; testId: string; body: ReactNode; canContinue: boolean } {
  switch (step.kind) {
    case "what":
      return {
        title: labels.what,
        testId: "pedagogy-step-what",
        body: <p>{pick(locale, step.bodyFr, step.bodyEn)}</p>,
        canContinue: true,
      };
    case "why":
      return {
        title: labels.why,
        testId: "pedagogy-step-why",
        body: <p>{pick(locale, step.bodyFr, step.bodyEn)}</p>,
        canContinue: true,
      };
    case "recognize":
      return {
        title: labels.recognize,
        testId: "pedagogy-step-recognize",
        body: (
          <ul className="list-disc space-y-2 pl-5">
            {step.cues.map((cue, idx) => (
              <li key={idx}>{pick(locale, cue.fr, cue.en)}</li>
            ))}
          </ul>
        ),
        canContinue: true,
      };
    case "decide":
      return {
        title: labels.decide,
        testId: "pedagogy-step-decide",
        body: (
          <>
            <div className="space-y-3" data-testid="pedagogy-mindset">
              {step.mindset.map((frame) => (
                <div key={frame.phase} data-testid={`mindset-${frame.phase.toLowerCase()}`}>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {mindsetLabel(frame.phase, labels)}
                  </p>
                  <p className="mt-1">{pick(locale, frame.bodyFr, frame.bodyEn)}</p>
                </div>
              ))}
            </div>
            {step.visualLinesFr.length > 0 ? (
              <div
                className="rounded-md bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700"
                data-testid="pedagogy-visual"
              >
                {(locale === "fr" ? step.visualLinesFr : step.visualLinesEn).map(
                  (line, i) => (
                    <div key={i}>{line}</div>
                  )
                )}
              </div>
            ) : null}
          </>
        ),
        canContinue: true,
      };
    case "distinctions":
      return {
        title: labels.distinctions,
        testId: "pedagogy-step-distinctions",
        body: (
          <>
            {step.distinctions.map((d) => (
              <div
                key={d.id}
                className="mb-3 rounded-md border border-amber-200 bg-amber-50/60 p-3 last:mb-0"
                data-testid={`distinction-${d.id}`}
              >
                <p className="font-semibold text-amber-950">
                  {pick(locale, d.leftFr, d.leftEn)}
                  {d.middleFr
                    ? ` · ${pick(locale, d.middleFr, d.middleEn ?? "")}`
                    : ""}
                  {" · "}
                  {pick(locale, d.rightFr, d.rightEn)}
                </p>
                <p className="mt-1">{pick(locale, d.ruleFr, d.ruleEn)}</p>
                <p className="mt-1 text-xs text-amber-900/80">
                  {pick(locale, d.examCueFr, d.examCueEn)}
                </p>
              </div>
            ))}
          </>
        ),
        canContinue: true,
      };
    case "mini_case":
      return {
        title: labels.scenario,
        testId: "pedagogy-step-mini-case",
        body: (
          <MiniCaseStep
            step={step}
            locale={locale}
            labels={labels}
            onComplete={onMiniCaseComplete}
          />
        ),
        canContinue: false,
      };
    case "takeaway":
      return {
        title: labels.takeaway,
        testId: "pedagogy-step-takeaway",
        body: <p>{pick(locale, step.bodyFr, step.bodyEn)}</p>,
        canContinue: true,
      };
  }
}

/**
 * One-card-at-a-time LEARN for shared-vision (Phase B.3.2 P1).
 */
export function PedagogySteppedLearn({
  pack,
  locale,
  takeaway,
  criticalDistinctions = [],
  labels,
}: PedagogySteppedLearnProps) {
  const steps = useMemo(
    () => buildSharedVisionLearnSteps(pack, criticalDistinctions, takeaway),
    [pack, criticalDistinctions, takeaway]
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [miniCaseComplete, setMiniCaseComplete] = useState(false);
  const current = steps[stepIndex];
  const rendered = renderStepContent(current, locale, labels, () =>
    setMiniCaseComplete(true)
  );
  const isLast = stepIndex >= steps.length - 1;
  const showContinue =
    !isLast &&
    (rendered.canContinue ||
      (current.kind === "mini_case" && miniCaseComplete));

  return (
    <div className="space-y-4" data-testid="pedagogy-stepped-learn">
      <p className="text-xs text-gray-500" data-testid="pedagogy-step-progress">
        {labels.stepOf
          .replace("{current}", String(stepIndex + 1))
          .replace("{total}", String(steps.length))}
      </p>

      <StepCard title={rendered.title} testId={rendered.testId}>
        {rendered.body}
      </StepCard>

      {showContinue ? (
        <button
          type="button"
          className="min-h-11 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => {
            setMiniCaseComplete(false);
            setStepIndex((i) => Math.min(i + 1, steps.length - 1));
          }}
          data-testid={
            current.kind === "mini_case"
              ? "pedagogy-step-continue-after-mini-case"
              : "pedagogy-step-continue"
          }
        >
          {labels.continue}
        </button>
      ) : null}
    </div>
  );
}
