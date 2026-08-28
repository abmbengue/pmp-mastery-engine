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
import {
  PMP_ACADEMY_SLUG,
  PMP_COURSE_SLUG,
} from "@/modules/mastery-engine/pmp-lesson-catalog";
import { resolvePmpStudyTaskBackLink } from "@/modules/mastery-engine/pmp-study";

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

  const [t, tp, ts, tPmpStudy] = await Promise.all([
    getTranslations("app"),
    getTranslations("player"),
    getTranslations("simulators"),
    getTranslations("pmpStudy"),
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

  const ecoTaskBackLink =
    academySlug === PMP_ACADEMY_SLUG && courseSlug === PMP_COURSE_SLUG
      ? resolvePmpStudyTaskBackLink(lessonSlug)
      : null;

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

      {ecoTaskBackLink ? (
        <div className="mb-4">
          <Link
            href={ecoTaskBackLink.href}
            className="inline-flex min-h-11 items-center rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            data-testid="back-to-eco-task-link"
          >
            ← {tPmpStudy("backToEcoTask")}
          </Link>
        </div>
      ) : null}

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
              shortBadge: tp("learn.shortBadge"),
              pedagogy: {
                what: tp("learn.pedagogy.what"),
                whatStepped: tp("learn.pedagogy.whatStepped"),
                why: tp("learn.pedagogy.why"),
                whyStepped: tp("learn.pedagogy.whyStepped"),
                when: tp("learn.pedagogy.when"),
                how: tp("learn.pedagogy.how"),
                howToDecide: tp("learn.pedagogy.howToDecide"),
                recognize: tp("learn.pedagogy.recognize"),
                decide: tp("learn.pedagogy.decide"),
                scenario: tp("learn.pedagogy.scenario"),
                distinctions: tp("learn.pedagogy.distinctions"),
                takeaway: tp("learn.pedagogy.takeaway"),
                showRationale: tp("learn.pedagogy.showRationale"),
                hideRationale: tp("learn.pedagogy.hideRationale"),
                continueReading: tp("learn.pedagogy.continueReading"),
                continue: tp("learn.pedagogy.continue"),
                reflectPrompt: tp("learn.pedagogy.reflectPrompt"),
                miniCasePrompt: tp("learn.pedagogy.miniCasePrompt"),
                mindsetAssess: tp("learn.pedagogy.mindsetAssess"),
                mindsetAlign: tp("learn.pedagogy.mindsetAlign"),
                mindsetDecide: tp("learn.pedagogy.mindsetDecide"),
                mindsetAct: tp("learn.pedagogy.mindsetAct"),
                stepOf: tp("learn.pedagogy.stepOf"),
              },
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
            aiTutor: {
              title: tp("aiTutor.title"),
              needHelp: tp("aiTutor.needHelp"),
              explainConcept: tp("aiTutor.explainConcept"),
              giveHint: tp("aiTutor.giveHint"),
              explainMistake: tp("aiTutor.explainMistake"),
              teachConcept: tp("aiTutor.teachConcept"),
              ask: tp("aiTutor.ask"),
              placeholder: tp("aiTutor.placeholder"),
              unavailable: tp("aiTutor.unavailable"),
              loading: tp("aiTutor.loading"),
              response: tp("aiTutor.response"),
            },
            simulators: {
              educationalNotice: ts("educationalNotice"),
              whatIsThis: ts("whatIsThis"),
              howItWorks: ts("howItWorks"),
              whatToNotice: ts("whatToNotice"),
              scenarios: ts("scenarios"),
              base: ts("base"),
              upside: ts("upside"),
              downside: ts("downside"),
              custom: ts("custom"),
              results: ts("results"),
              sensitivity: ts("sensitivity"),
              markCompleted: ts("markCompleted"),
              completed: ts("completed"),
              explainResult: ts("explainResult"),
              explaining: ts("explaining"),
              explainError: ts("explainError"),
              contributions: ts("contributions"),
              growth: ts("growth"),
              finalValue: ts("finalValue"),
              compareScenarios: ts("compareScenarios"),
              scenarioA: ts("scenarioA"),
              scenarioB: ts("scenarioB"),
              interestSaved: ts("interestSaved"),
              timeSaved: ts("timeSaved"),
              months: ts("months"),
              invalidInput: ts("invalidInput"),
              steps: ts("steps"),
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
