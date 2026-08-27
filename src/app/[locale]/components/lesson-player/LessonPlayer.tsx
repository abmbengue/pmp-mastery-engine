"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/shared/types/locale";
import type { LessonPhase } from "@/modules/learning-engine/lesson-phases";
import { LESSON_PHASES, getNextPhase, getPrevPhase } from "@/modules/learning-engine/lesson-phases";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";
import { PhaseProgressBar } from "./PhaseProgressBar";
import { TextBlock, VideoBlock, PedagogyLearnBlock } from "./LearnPhase";
import type { PedagogyLabels } from "./LearnPhase";
import { ExerciseBlock, FlashcardBlock } from "./PracticePhase";
import { TestPhase } from "./TestPhase";
import type { QuizQuestion, QuizResult } from "./TestPhase";
import { ReviewPhase } from "./ReviewPhase";
import { MasterPhase } from "./MasterPhase";
import { AiTutorPanel } from "@/app/[locale]/components/ai-tutor/AiTutorPanel";
import type { AiTutorPanelLabels } from "@/app/[locale]/components/ai-tutor/AiTutorPanel";
import type { TextPayload, VideoPayload, ExercisePayload, FlashcardPayload, SimulationPayload } from "@/shared/types/content-payloads";
import { SimulatorWorkbench } from "@/app/[locale]/components/simulators/SimulatorWorkbench";
import type { SimulatorLabels } from "@/app/[locale]/components/simulators/SimulatorWorkbench";
import { getLessonPedagogy } from "@/modules/mastery-engine/lesson-pedagogy";
import { distinctionsForEcoTask } from "@/modules/mastery-engine/critical-distinctions";

function extractTakeawayFromTextBody(body: string | null | undefined): string | null {
  if (!body) return null;
  const markers = ["À retenir", "Key takeaway"];
  for (const marker of markers) {
    const idx = body.indexOf(marker);
    if (idx < 0) continue;
    const after = body.slice(idx + marker.length).replace(/^\n+/, "");
    const nextBreak = after.search(/\n\n+/);
    const chunk = (nextBreak >= 0 ? after.slice(0, nextBreak) : after).trim();
    if (chunk) return chunk;
  }
  return null;
}

export interface LessonItem {
  id: string;
  type: "TEXT" | "VIDEO" | "EXERCISE" | "QUIZ" | "FLASHCARD" | "SIMULATION";
  payload: unknown;
  questions: QuizQuestion[];
}

export interface LessonPlayerProps {
  locale: Locale;
  academySlug: string;
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  title: string;
  description: string;
  estimatedMinutes: number | null;
  items: LessonItem[];
  initialPhase: LessonPhase;
  initialQuizScore: number | null;
  nextLesson: { slug: string; moduleSlug: string } | null;
  labels: {
    player: {
      phase: string;
      of: string;
      estimatedTime: string;
      minutes: string;
      next: string;
      previous: string;
      startLesson: string;
      finishLesson: string;
      phases: Record<LessonPhase, string>;
      learn: {
        videoComingSoon: string;
        videoPlaceholder: string;
        shortBadge: string;
        pedagogy?: PedagogyLabels;
      };
      practice: { exerciseTitle: string; markDone: string; done: string; flashcardReveal: string; flashcardHide: string; front: string; back: string };
      test: { instruction: string; selectOne: string; selectMultiple: string; trueOrFalse: string; submit: string; correct: string; incorrect: string };
      review: { title: string; yourScore: string; mastered: string; toReview: string; explanation: string; askAiTutor: string; aiTutorSoon: string };
      master: { title: string; levelWeak: string; levelLearning: string; levelMastered: string; weakMessage: string; learningMessage: string; masteredMessage: string; retry: string; nextLesson: string; backToCourse: string; courseProgress: string; lessonsCompleted: string };
      aiTutor: AiTutorPanelLabels;
      simulators: SimulatorLabels;
    };
    app: { correct: string; incorrect: string; backToCourse: string };
  };
}

export function LessonPlayer({
  locale,
  academySlug,
  courseSlug,
  moduleSlug,
  lessonSlug,
  title,
  description,
  estimatedMinutes,
  items,
  initialPhase,
  initialQuizScore,
  nextLesson,
  labels,
}: LessonPlayerProps) {
  const router = useRouter();
  const [currentPhase, setCurrentPhase] = useState<LessonPhase>(initialPhase);
  const [quizScore, setQuizScore] = useState<number | null>(initialQuizScore);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [courseProgress, setCourseProgress] = useState<{ completedLessons: number; totalLessons: number; percentage: number } | null>(null);
  const startedAtRef = useRef<number>(Date.now());
  const timeSpentSecRef = useRef<number>(0);

  const courseBase = `/${locale}/academies/${academySlug}/courses/${courseSlug}`;
  const nextLessonUrl = nextLesson
    ? `${courseBase}/modules/${nextLesson.moduleSlug}/lessons/${nextLesson.slug}`
    : null;

  // Save progress to server
  const saveProgress = useCallback(
    async (phase: LessonPhase, score?: number, masteryLevel?: string) => {
      const elapsed = Math.round((Date.now() - startedAtRef.current) / 1000);
      timeSpentSecRef.current += elapsed;
      startedAtRef.current = Date.now();
      try {
        await fetch("/api/lesson/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            academySlug,
            courseSlug,
            moduleSlug,
            lessonSlug,
            phase,
            timeSpentSec: timeSpentSecRef.current,
            quizScore: score,
            masteryLevel,
          }),
        });
      } catch {
        // Non-blocking — progress save failure should not stop learning
      }
    },
    [academySlug, courseSlug, moduleSlug, lessonSlug]
  );

  // Finish lesson on server
  const finishLessonOnServer = useCallback(
    async (score: number) => {
      try {
        const res = await fetch("/api/lesson/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            academySlug,
            courseSlug,
            moduleSlug,
            lessonSlug,
            timeSpentSec: timeSpentSecRef.current,
            quizScore: score,
          }),
        });
        const data = await res.json();
        if (data.courseProgress) setCourseProgress(data.courseProgress);
      } catch {
        // Non-blocking
      }
    },
    [academySlug, courseSlug, moduleSlug, lessonSlug]
  );

  // Submit quiz answers
  const handleQuizSubmit = useCallback(
    async (answers: { questionId: string; selectedOptionIds: string[] }[]) => {
      const quizItem = items.find((i) => i.type === "QUIZ");
      if (!quizItem) return;

      const res = await fetch("/api/quiz/attempt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ learningItemId: quizItem.id, answers }),
      });
      const data = await res.json();
      const score: number = data.score;
      const level = computeMasteryLevelFromScore(score);

      // Map server results to QuizResult shape
      const results: QuizResult[] = (data.results as Array<{
        questionId: string;
        isCorrect: boolean;
        score: number;
        correctOptionIds: string[];
        selectedOptionIds: string[];
        question: {
          id: string;
          type: string;
          promptFr: string;
          promptEn: string;
          explanationCorrectFr: string;
          explanationCorrectEn: string;
          answerOptions: Array<{ id: string; labelFr: string; labelEn: string; isCorrect: boolean; explanationWrongFr?: string | null; explanationWrongEn?: string | null }>;
        };
      }>).map((r) => ({
        questionId: r.questionId,
        isCorrect: r.isCorrect,
        score: r.score,
        selectedOptionIds: r.selectedOptionIds,
        correctOptionIds: r.correctOptionIds,
        question: {
          id: r.question.id,
          type: r.question.type as QuizQuestion["type"],
          prompt: locale === "fr" ? r.question.promptFr : r.question.promptEn,
          explanationCorrect: locale === "fr" ? r.question.explanationCorrectFr : r.question.explanationCorrectEn,
          options: r.question.answerOptions.map((o) => ({
            id: o.id,
            label: locale === "fr" ? o.labelFr : o.labelEn,
            isCorrect: o.isCorrect,
            explanationWrong: locale === "fr" ? (o.explanationWrongFr ?? undefined) : (o.explanationWrongEn ?? undefined),
          })),
        },
      }));

      setQuizScore(score);
      setQuizResults(results);
      await saveProgress("REVIEW", score, level);
      setCurrentPhase("REVIEW");
    },
    [items, locale, saveProgress]
  );

  async function handleNextPhase() {
    const next = getNextPhase(currentPhase);
    if (!next) return;

    if (currentPhase === "REVIEW") {
      // Moving to MASTER: finish lesson on server
      const score = quizScore ?? 0;
      const level = computeMasteryLevelFromScore(score);
      await finishLessonOnServer(score);
      await saveProgress("MASTER", score, level);
    } else {
      await saveProgress(next);
    }
    setCurrentPhase(next);
  }

  function handlePrevPhase() {
    const prev = getPrevPhase(currentPhase);
    if (prev) setCurrentPhase(prev);
  }

  function handleRetry() {
    setQuizScore(null);
    setQuizResults([]);
    setCurrentPhase("TEST");
  }

  function handleNextLesson() {
    if (nextLessonUrl) router.push(nextLessonUrl);
  }

  function handleBackToCourse() {
    router.push(courseBase);
  }

  const phaseIdx = LESSON_PHASES.indexOf(currentPhase);
  const prevPhase = getPrevPhase(currentPhase);
  const nextPhase = getNextPhase(currentPhase);
  const pl = labels.player;
  const masteryLevel = computeMasteryLevelFromScore(quizScore ?? 0);

  // Items for each phase
  const textItem = items.find((i) => i.type === "TEXT");
  const videoItem = items.find((i) => i.type === "VIDEO");
  const exerciseItem = items.find((i) => i.type === "EXERCISE");
  const flashcardItem = items.find((i) => i.type === "FLASHCARD");
  const simulationItem = items.find((i) => i.type === "SIMULATION");
  const quizItem = items.find((i) => i.type === "QUIZ");

  const pedagogyPack = getLessonPedagogy(lessonSlug);
  const pedagogyDistinctions = pedagogyPack
    ? Array.from(
        new Map(
          pedagogyPack.ecoTaskIds
            .flatMap((taskId) => distinctionsForEcoTask(taskId))
            .map((d) => [d.id, d] as const)
        ).values()
      )
    : [];
  const textPayload = textItem?.payload as TextPayload | undefined;
  const pedagogyTakeaway = extractTakeawayFromTextBody(
    textPayload ? (locale === "fr" ? textPayload.bodyFr : textPayload.bodyEn) : null
  );
  const defaultPedagogyLabels: PedagogyLabels = {
    what: locale === "fr" ? "Quoi" : "What",
    why: locale === "fr" ? "Pourquoi" : "Why",
    when: locale === "fr" ? "Quand" : "When",
    how: locale === "fr" ? "Comment" : "How",
    howToDecide: locale === "fr" ? "Comment décider" : "How to decide",
    scenario: locale === "fr" ? "Scénario" : "Scenario",
    distinctions: locale === "fr" ? "Distinctions critiques" : "Critical distinctions",
    takeaway: locale === "fr" ? "À retenir" : "Key takeaway",
    showRationale: locale === "fr" ? "Voir le raisonnement" : "Show rationale",
    hideRationale: locale === "fr" ? "Masquer le raisonnement" : "Hide rationale",
    continueReading: locale === "fr" ? "Continuer" : "Continue",
  };

  return (
    <div className="mx-auto max-w-2xl" data-testid="lesson-player">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl" data-testid="lesson-title">
          {title}
        </h1>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        {estimatedMinutes && (
          <p className="mt-1 text-xs text-gray-400">
            {pl.estimatedTime} : {estimatedMinutes} {pl.minutes}
          </p>
        )}
        <p className="mt-1 text-xs text-gray-400">
          {pl.phase} {phaseIdx + 1} {pl.of} {LESSON_PHASES.length} — {pl.phases[currentPhase]}
        </p>
      </div>

      {/* Phase progress */}
      <PhaseProgressBar currentPhase={currentPhase} phaseLabels={pl.phases} />

      {/* Phase content */}
      <div className="min-h-48">
        {currentPhase === "LEARN" && (
          <div className="space-y-5" data-testid="phase-learn">
            {pedagogyPack ? (
              <PedagogyLearnBlock
                pack={pedagogyPack}
                locale={locale}
                takeaway={pedagogyTakeaway}
                criticalDistinctions={pedagogyDistinctions}
                labels={pl.learn.pedagogy ?? defaultPedagogyLabels}
              />
            ) : (
              textItem && (
                <TextBlock payload={textItem.payload as TextPayload} locale={locale} />
              )
            )}
            {videoItem && (
              <VideoBlock
                payload={videoItem.payload as VideoPayload}
                locale={locale}
                labels={{
                  comingSoon: pl.learn.videoComingSoon,
                  placeholder: pl.learn.videoPlaceholder,
                  shortBadge: pl.learn.shortBadge,
                }}
              />
            )}
            <AiTutorPanel
              context={{
                locale,
                academySlug,
                courseSlug,
                moduleSlug,
                lessonSlug,
              }}
              labels={pl.aiTutor}
            />
          </div>
        )}

        {currentPhase === "PRACTICE" && (
          <div className="space-y-5" data-testid="phase-practice">
            {exerciseItem && (
              <ExerciseBlock
                payload={exerciseItem.payload as ExercisePayload}
                locale={locale}
                labels={{ title: pl.practice.exerciseTitle, markDone: pl.practice.markDone, done: pl.practice.done }}
              />
            )}
            {flashcardItem && (
              <FlashcardBlock
                payload={flashcardItem.payload as FlashcardPayload}
                locale={locale}
                labels={{ reveal: pl.practice.flashcardReveal, hide: pl.practice.flashcardHide, front: pl.practice.front, back: pl.practice.back }}
              />
            )}
            {simulationItem && (
              <div data-testid="lesson-simulation">
                <SimulatorWorkbench
                  type={(simulationItem.payload as SimulationPayload).simulationType}
                  locale={locale}
                  labels={pl.simulators}
                  embedded
                />
              </div>
            )}
          </div>
        )}

        {currentPhase === "TEST" && quizItem && (
          <TestPhase
            questions={quizItem.questions}
            locale={locale}
            onSubmit={handleQuizSubmit}
            labels={{
              instruction: pl.test.instruction,
              selectOne: pl.test.selectOne,
              selectMultiple: pl.test.selectMultiple,
              trueOrFalse: pl.test.trueOrFalse,
              submit: pl.test.submit,
            }}
          />
        )}

        {currentPhase === "REVIEW" && (
          <ReviewPhase
            score={quizScore ?? 0}
            results={quizResults}
            locale={locale}
            academySlug={academySlug}
            courseSlug={courseSlug}
            moduleSlug={moduleSlug}
            lessonSlug={lessonSlug}
            labels={{
              title: pl.review.title,
              yourScore: pl.review.yourScore,
              mastered: pl.review.mastered,
              toReview: pl.review.toReview,
              explanation: pl.review.explanation,
              askAiTutor: pl.review.askAiTutor,
              aiTutorSoon: pl.review.aiTutorSoon,
              correct: pl.test.correct,
              incorrect: pl.test.incorrect,
            }}
            aiTutorLabels={pl.aiTutor}
          />
        )}

        {currentPhase === "MASTER" && (
          <MasterPhase
            score={quizScore ?? 0}
            masteryLevel={masteryLevel}
            courseProgress={courseProgress}
            hasNextLesson={!!nextLesson}
            onNextLesson={handleNextLesson}
            onBackToCourse={handleBackToCourse}
            onRetry={handleRetry}
            labels={pl.master}
          />
        )}
      </div>

      {/* Navigation buttons (not shown on TEST or MASTER phase) */}
      {currentPhase !== "TEST" && currentPhase !== "MASTER" && (
        <div className="mt-8 flex justify-between gap-3 border-t pt-6">
          {prevPhase ? (
            <button
              type="button"
              onClick={handlePrevPhase}
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
              data-testid="prev-phase-btn"
            >
              ← {pl.previous}
            </button>
          ) : (
            <div />
          )}
          {nextPhase && currentPhase !== "REVIEW" && (
            <button
              type="button"
              onClick={handleNextPhase}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              data-testid="next-phase-btn"
            >
              {pl.next} →
            </button>
          )}
          {currentPhase === "REVIEW" && (
            <button
              type="button"
              onClick={handleNextPhase}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              data-testid="next-phase-btn"
            >
              {pl.next} →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
