"use client";

import type { LessonPhase } from "@/modules/learning-engine/lesson-phases";
import { LESSON_PHASES } from "@/modules/learning-engine/lesson-phases";

interface PhaseProgressBarProps {
  currentPhase: LessonPhase;
  phaseLabels: Record<LessonPhase, string>;
}

export function PhaseProgressBar({ currentPhase, phaseLabels }: PhaseProgressBarProps) {
  const currentIdx = LESSON_PHASES.indexOf(currentPhase);

  return (
    <nav aria-label="Learning phases" className="mb-6">
      <ol className="flex items-center gap-1 overflow-x-auto pb-1 sm:gap-2">
        {LESSON_PHASES.map((phase, idx) => {
          const isDone = idx < currentIdx;
          const isCurrent = idx === currentIdx;
          return (
            <li key={phase} className="flex items-center gap-1 sm:gap-2">
              <div className="flex flex-col items-center">
                <div
                  aria-current={isCurrent ? "step" : undefined}
                  className={[
                    "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors sm:h-8 sm:w-8",
                    isDone
                      ? "bg-green-500 text-white"
                      : isCurrent
                        ? "bg-blue-600 text-white ring-2 ring-blue-300"
                        : "bg-gray-200 text-gray-500",
                  ].join(" ")}
                >
                  {isDone ? "✓" : idx + 1}
                </div>
                <span
                  className={[
                    "mt-1 hidden text-xs sm:block",
                    isCurrent ? "font-semibold text-blue-700" : "text-gray-500",
                  ].join(" ")}
                >
                  {phaseLabels[phase]}
                </span>
              </div>
              {idx < LESSON_PHASES.length - 1 && (
                <div
                  className={[
                    "h-0.5 w-6 transition-colors sm:w-10",
                    isDone ? "bg-green-400" : "bg-gray-200",
                  ].join(" ")}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
      {/* Mobile: current phase label */}
      <p className="mt-2 text-sm font-medium text-blue-700 sm:hidden">
        {phaseLabels[currentPhase]}
      </p>
    </nav>
  );
}
