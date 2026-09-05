import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { copy } from "../content/copy";
import { LESSONS, getQuestionsForLesson } from "../content/pmpContent";
import { hasProgress, loadProgress } from "../progress/progressStore";

export function HomePage() {
  const navigate = useNavigate();
  const t = copy.fr;

  const actionLabel = hasProgress() ? t.continueLearning : t.start;

  const actionHref = useMemo(() => {
    if (!hasProgress()) return `/learn/${LESSONS[0]!.id}`;

    const progress = loadProgress();
    const lessonId = progress.lastLessonId ?? LESSONS[0]!.id;
    const lessonQuestions = getQuestionsForLesson(lessonId);
    const nextQuestion =
      lessonQuestions.find((question) => question.id !== progress.lastQuestionId) ?? lessonQuestions[0];

    return `/learn/${lessonId}/question/${nextQuestion.id}`;
  }, []);

  return (
    <main className="container">
      <section className="card hero-card">
        <p className="eyebrow">PMP</p>
        <h1>{t.title}</h1>
        <p className="muted">{t.tagline}</p>
        <button className="primary" onClick={() => navigate(actionHref)}>
          {actionLabel}
        </button>
      </section>
    </main>
  );
}
