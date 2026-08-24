# Product Specification

## Product Name

**Professional Learning Academy** (provisional)

## Vision

A bilingual web platform for progressive professional skill acquisition through micro-learning: short lessons, videos, quizzes, exercises, flashcards, and personalized progression.

## Target Users

Non-technical professionals seeking to acquire or refresh professional skills in short learning sessions.

## Languages

- French (FR) — default
- English (EN)
- User-selectable; both UI and seeded content available in both languages

## Academies

### Active (V1)

| Academy | Modules | Lessons | Status |
|---|---|---|---|
| Personal Finance | 2 | 6 | Active |
| PMP / Project Management | 2 | 6 | Active |

### Planned (catalogue only)

Corporate Finance, Business & Strategy, Financial Modeling, Energy & Oil & Gas, Leadership & Management, Professional English

## Content Types Supported

1. Text
2. Video (placeholder V1)
3. Quiz — single choice, multiple choice, true/false
4. Exercise
5. Flashcard
6. Simulation (schema ready, not implemented)
7. Assessment / mock exam (schema ready, not implemented)

## Micro-Learning Format

Each lesson follows:

```
LEARN → PRACTICE → TEST → REVIEW → MASTER
```

Durations are configurable per lesson (metadata, not hardcoded).

## Progression (V1 backend)

- Course enrollment
- Lesson started / completed
- Course progress percentage
- Quiz scores and attempts
- Time spent tracking
- Concept mastery (weak / learning / mastered)

## Dashboard (planned Phase 3)

Will display: global progress, active courses, next lesson, recent scores, weak/mastered concepts, learning time, goals.

## AI Tutor (planned)

Actions: explain concept, explain like beginner, give example, test me, why wrong, explain in FR/EN. Port interface created; no LLM connected.

## PMP Specifics

- Content organized around: People, Process, Business Environment, Agile, Hybrid
- All content is original — no PMBOK reproduction
- Source references can be added later

## Personal Finance Categories

- Foundations: income, expenses, budgeting, saving
- Debt: interest, loans, credit, debt management
- Investing: stocks, bonds, real estate, diversification
- Wealth Building: compound interest, inflation, retirement

## Out of Scope (V1)

Adaptive quizzes, simulators, full mock exams, payments, CMS, mobile app, real AI, video hosting.
