# Spaced Repetition

## Purpose

Deterministic, explainable micro-review scheduling. **Not machine learning.**

## Config (`REVIEW_INTERVALS_DAYS`)

| Mastery | Days |
|---|---|
| WEAK | 1 |
| LEARNING | 3 |
| MASTERED | 7 |
| Due-soon window | 3 |
| Repeated-error pull-forward | 2 |

## Persistence

`ConceptMastery.nextReviewAt` is set whenever mastery is updated via `updateConceptMastery()` using `getNextReviewDate()` / `computeNextReviewAt()`.

## APIs

- `getNextReviewDate()` / `computeNextReviewAt()` — pure  
- `buildReviewQueue()` — pure priority queue  
- `getReviewQueue()` / `getReviewCalendar()` — authenticated user services  

## Review calendar sections

Due today · Due soon · Weak concepts · Repeated errors · Recently learned  

UI: `/[locale]/review` with **Start Review** / **Review Now**.

## Corrective learning

Still extends `recommendNextLearning()` — no second recommendation engine.

## Security

Always scoped to `auth()` session user id.
