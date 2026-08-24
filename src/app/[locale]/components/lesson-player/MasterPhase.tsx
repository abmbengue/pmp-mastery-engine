"use client";

import type { MasteryLevel } from "@/shared/utils/mastery";

interface MasterPhaseProps {
  score: number;
  masteryLevel: MasteryLevel;
  courseProgress: { completedLessons: number; totalLessons: number; percentage: number } | null;
  hasNextLesson: boolean;
  onNextLesson: () => void;
  onBackToCourse: () => void;
  onRetry: () => void;
  labels: {
    title: string;
    levelWeak: string;
    levelLearning: string;
    levelMastered: string;
    weakMessage: string;
    learningMessage: string;
    masteredMessage: string;
    retry: string;
    nextLesson: string;
    backToCourse: string;
    courseProgress: string;
    lessonsCompleted: string;
  };
}

const MASTERY_CONFIG: Record<
  MasteryLevel,
  { emoji: string; colorClass: string; labelKey: keyof MasterPhaseProps["labels"]; msgKey: keyof MasterPhaseProps["labels"] }
> = {
  MASTERED: { emoji: "🏆", colorClass: "text-green-600", labelKey: "levelMastered", msgKey: "masteredMessage" },
  LEARNING: { emoji: "📈", colorClass: "text-amber-600", labelKey: "levelLearning", msgKey: "learningMessage" },
  WEAK: { emoji: "🔄", colorClass: "text-red-600", labelKey: "levelWeak", msgKey: "weakMessage" },
};

export function MasterPhase({
  score,
  masteryLevel,
  courseProgress,
  hasNextLesson,
  onNextLesson,
  onBackToCourse,
  onRetry,
  labels,
}: MasterPhaseProps) {
  const config = MASTERY_CONFIG[masteryLevel];

  return (
    <div className="space-y-6" data-testid="master-phase">
      {/* Mastery badge */}
      <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
        <div className="mb-2 text-5xl" aria-hidden="true">{config.emoji}</div>
        <p className={`text-2xl font-bold ${config.colorClass}`} data-testid="mastery-level">
          {labels[config.labelKey]}
        </p>
        <p className="mt-1 text-3xl font-bold text-gray-800" data-testid="master-score">
          {score}%
        </p>
        <p className="mt-3 text-sm text-gray-600">{labels[config.msgKey]}</p>
      </div>

      {/* Course progress */}
      {courseProgress && (
        <div className="rounded-lg border bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-600">{labels.courseProgress}</p>
          <div className="flex items-center gap-3">
            <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-500 transition-all"
                style={{ width: `${courseProgress.percentage}%` }}
                aria-label={`${courseProgress.percentage}%`}
              />
            </div>
            <span className="shrink-0 text-sm font-semibold text-gray-700" data-testid="course-progress-pct">
              {courseProgress.percentage}%
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            {courseProgress.completedLessons} {labels.lessonsCompleted} {courseProgress.totalLessons}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        {masteryLevel === "WEAK" && (
          <button
            type="button"
            onClick={onRetry}
            className="flex-1 rounded-lg border border-blue-600 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            data-testid="retry-btn"
          >
            {labels.retry}
          </button>
        )}
        {hasNextLesson && (
          <button
            type="button"
            onClick={onNextLesson}
            className="flex-1 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            data-testid="next-lesson-btn"
          >
            {labels.nextLesson} →
          </button>
        )}
        <button
          type="button"
          onClick={onBackToCourse}
          className="flex-1 rounded-lg border border-gray-300 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
          data-testid="back-to-course-btn"
        >
          {labels.backToCourse}
        </button>
      </div>
    </div>
  );
}
