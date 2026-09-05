import { Link } from "react-router-dom";
import { LESSONS } from "../content/pmpContent";

export function LearnPage() {
  return (
    <main className="container">
      <section className="card">
        <h1>Parcours PMP</h1>
        <p className="muted">Sélectionnez une leçon pour démarrer immédiatement.</p>
      </section>
      <section className="lesson-list">
        {LESSONS.slice(0, 12).map((lesson, index) => (
          <article key={lesson.id} className="card lesson-card">
            <p className="eyebrow">Leçon {index + 1}</p>
            <h2>{lesson.title}</h2>
            <p className="muted">{lesson.objective}</p>
            <Link className="secondary" to={`/learn/${lesson.id}`}>
              Ouvrir la leçon
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
