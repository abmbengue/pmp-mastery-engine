import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { copy } from "../content/copy";
import { LESSONS, getLessonById, getQuestionsForLesson } from "../content/pmpContent";
import { saveAttempt } from "../progress/progressStore";

export function QuestionPage() {
  const params = useParams<{ lessonId: string; questionId: string }>();
  const navigate = useNavigate();
  const t = copy.fr;

  const lesson = getLessonById(params.lessonId ?? "") ?? LESSONS[0]!;
  const lessonQuestions = getQuestionsForLesson(lesson.id);
  const question = lessonQuestions.find((item) => item.id === params.questionId) ?? lessonQuestions[0]!;

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selectedOptionId === question.correctOptionId;

  const nextQuestion = useMemo(() => {
    const idx = lessonQuestions.findIndex((item) => item.id === question.id);
    return lessonQuestions[idx + 1];
  }, [lessonQuestions, question.id]);

  const submit = () => {
    if (!selectedOptionId || submitted) return;
    setSubmitted(true);
    saveAttempt({
      lessonId: lesson.id,
      questionId: question.id,
      correct: isCorrect,
    });
  };

  return (
    <main className="container">
      <section className="card">
        <Link className="text-link" to={`/learn/${lesson.id}`}>
          ← {lesson.title}
        </Link>
        <h1>{question.prompt}</h1>
        <p className="muted">Concept testé : {question.concept}</p>

        <div className="options" role="radiogroup" aria-label="Choix de réponse">
          {question.options.map((option) => (
            <button
              key={option.id}
              className={`option ${selectedOptionId === option.id ? "selected" : ""}`}
              onClick={() => setSelectedOptionId(option.id)}
              disabled={submitted}
            >
              {option.text}
            </button>
          ))}
        </div>

        <button className="primary" onClick={submit} disabled={!selectedOptionId}>
          {t.validate}
        </button>

        {!selectedOptionId && <p className="muted">{t.chooseAnswer}</p>}

        {submitted && (
          <div className={`feedback ${isCorrect ? "ok" : "ko"}`}>
            <h2>{isCorrect ? t.correct : t.incorrect}</h2>
            <p>
              <strong>Bonne réponse :</strong>{" "}
              {question.options.find((option) => option.id === question.correctOptionId)?.text}
            </p>
            <p>{question.explanation}</p>

            {nextQuestion ? (
              <button
                className="secondary"
                onClick={() => navigate(`/learn/${lesson.id}/question/${nextQuestion.id}`)}
              >
                {t.nextQuestion}
              </button>
            ) : (
              <button className="secondary" onClick={() => navigate("/")}>Terminer</button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
