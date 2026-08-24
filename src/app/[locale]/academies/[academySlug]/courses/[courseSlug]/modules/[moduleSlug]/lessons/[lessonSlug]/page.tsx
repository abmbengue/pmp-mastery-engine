import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { findLessonBySlug, localizeLesson, localizeModule } from "@/data/repositories/lesson-repository";
import { findNextLesson } from "@/data/repositories/navigation-repository";
import { getLessonSession } from "@/modules/learning-engine/lesson-session-service";
import { requireSession } from "@/modules/auth/session";
import type { Locale } from "@/shared/types/locale";
import type { LessonPhase } from "@/modules/learning-engine/lesson-phases";
import type { LessonItem } from "@/app/[locale]/components/lesson-player/LessonPlayer";
import { LessonPlayer } from "@/app/[locale]/components/lesson-player/LessonPlayer";
import type { QuizQuestion } from "@/app/[locale]/components/lesson-player/TestPhase";
import { Link } from "@/modules/localization/navigation";

export default async function LessonPage({
  params,
}: {
  params: Promise<{
    locale: string;
    academySlug: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}) {
  const { locale, academySlug, courseSlug, moduleSlug, lessonSlug } = await params;
  setRequestLocale(locale);

  const [t, tp] = await Promise.all([
    getTranslations("app"),
    getTranslations("player"),
  ]);

  const lesson = await findLessonBySlug(academySlug, courseSlug, moduleSlug, lessonSlug);
  if (!lesson) notFound();

  const loc = locale as Locale;
  const { title, description } = localizeLesson(lesson, loc);

  const session = await requireSession(locale);
  let initialPhase: LessonPhase = "LEARN";
  let initialQuizScore: number | null = null;

  const lessonSession = await getLessonSession(session.user.id, lesson.id);
  if (!lessonSession.isCompleted) {
    initialPhase = lessonSession.currentPhase;
    initialQuizScore = lessonSession.quizScore;
  }

  // Next lesson navigation
  const nextLesson = await findNextLesson(academySlug, courseSlug, moduleSlug, lessonSlug);

  // Build LessonItem list with localized question prompts
  const items: LessonItem[] = lesson.learningItems.map((item) => {
    const questions: QuizQuestion[] = item.questions.map((q) => ({
      id: q.id,
      type: q.type as QuizQuestion["type"],
      prompt: loc === "fr" ? q.promptFr : q.promptEn,
      explanationCorrect: loc === "fr" ? q.explanationCorrectFr : q.explanationCorrectEn,
      options: q.answerOptions.map((o) => ({
        id: o.id,
        label: loc === "fr" ? o.labelFr : o.labelEn,
        isCorrect: o.isCorrect,
        explanationWrong:
          loc === "fr"
            ? (o.explanationWrongFr ?? undefined)
            : (o.explanationWrongEn ?? undefined),
      })),
    }));
    return {
      id: item.id,
      type: item.type as LessonItem["type"],
      payload: item.payload,
      questions,
    };
  });

  const phaseLabels: Record<LessonPhase, string> = {
    LEARN: tp("phases.LEARN"),
    PRACTICE: tp("phases.PRACTICE"),
    TEST: tp("phases.TEST"),
    REVIEW: tp("phases.REVIEW"),
    MASTER: tp("phases.MASTER"),
  };

  return (
    <div data-testid="lesson-page">
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/academies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
          {t("academies")}
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href={`/academies/${academySlug}/courses/${courseSlug}`}
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          data-testid="back-to-course-link"
        >
          {localizeModule(lesson.module, loc).title}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="font-medium text-gray-800">{title}</span>
      </nav>

      <LessonPlayer
        locale={loc}
        academySlug={academySlug}
        courseSlug={courseSlug}
        moduleSlug={moduleSlug}
        lessonSlug={lessonSlug}
        title={title}
        description={description}
        estimatedMinutes={lesson.estimatedMinutes}
        items={items}
        initialPhase={initialPhase}
        initialQuizScore={initialQuizScore}
        nextLesson={nextLesson}
        labels={{
          player: {
            phase: tp("phase"),
            of: tp("of"),
            estimatedTime: tp("estimatedTime"),
            minutes: tp("minutes"),
            next: tp("next"),
            previous: tp("previous"),
            startLesson: tp("startLesson"),
            finishLesson: tp("finishLesson"),
            phases: phaseLabels,
            learn: {
              videoComingSoon: tp("learn.videoComingSoon"),
              videoPlaceholder: tp("learn.videoPlaceholder"),
            },
            practice: {
              exerciseTitle: tp("practice.exerciseTitle"),
              markDone: tp("practice.markDone"),
              done: tp("practice.done"),
              flashcardReveal: tp("practice.flashcardReveal"),
              flashcardHide: tp("practice.flashcardHide"),
              front: tp("practice.front"),
              back: tp("practice.back"),
            },
            test: {
              instruction: tp("test.instruction"),
              selectOne: tp("test.selectOne"),
              selectMultiple: tp("test.selectMultiple"),
              trueOrFalse: tp("test.trueOrFalse"),
              submit: tp("test.submit"),
              correct: tp("test.correct"),
              incorrect: tp("test.incorrect"),
            },
            review: {
              title: tp("review.title"),
              yourScore: tp("review.yourScore"),
              mastered: tp("review.mastered"),
              toReview: tp("review.toReview"),
              explanation: tp("review.explanation"),
              askAiTutor: tp("review.askAiTutor"),
              aiTutorSoon: tp("review.aiTutorSoon"),
            },
            master: {
              title: tp("master.title"),
              levelWeak: tp("master.levelWeak"),
              levelLearning: tp("master.levelLearning"),
              levelMastered: tp("master.levelMastered"),
              weakMessage: tp("master.weakMessage"),
              learningMessage: tp("master.learningMessage"),
              masteredMessage: tp("master.masteredMessage"),
              retry: tp("master.retry"),
              nextLesson: tp("master.nextLesson"),
              backToCourse: tp("master.backToCourse"),
              courseProgress: tp("master.courseProgress"),
              lessonsCompleted: tp("master.lessonsCompleted"),
            },
          },
          app: {
            correct: t("correct"),
            incorrect: t("incorrect"),
            backToCourse: t("backToCourse"),
          },
        }}
      />
    </div>
  );
}
