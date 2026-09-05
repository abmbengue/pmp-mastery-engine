import { Link, useNavigate, useParams } from "react-router-dom";
import { copy } from "../content/copy";
import { LESSONS, getLessonById, getQuestionsForLesson } from "../content/pmpContent";
import { markLessonStarted } from "../progress/progressStore";

export function LessonPage() {
  const params = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const t = copy.fr;

  const lesson = getLessonById(params.lessonId ?? "") ?? LESSONS[0]!;
  const questions = getQuestionsForLesson(lesson.id);
  const firstQuestion = questions[0]!;

  return (
    <main className="container">
      <section className="card">
        <Link className="text-link" to="/">
          ← {t.backToHome}
        </Link>
        <h1>{lesson.title}</h1>
        <p>
          <strong>Objectif :</strong> {lesson.objective}
        </p>
        <p className="muted">{lesson.explanation}</p>
        <p className="chip">Concept : {lesson.concept}</p>
        <button
          className="primary"
          onClick={() => {
            markLessonStarted(lesson.id, firstQuestion.id);
            navigate(`/learn/${lesson.id}/question/${firstQuestion.id}`);
          }}
        >
          {t.understood}
        </button>
      </section>
    </main>
  );
}
