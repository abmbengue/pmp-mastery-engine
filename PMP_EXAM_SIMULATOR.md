# PMP Exam Simulator (Phase 7)

Educational PMP-style exam practice for Professional Learning Academy.

**Practice scores and Practice Readiness only — not official PMI scoring.**

## Architecture

```
Question Bank
    ↓
Exam Builder (templates + random selection)
    ↓
Exam Session (persistent, resumable)
    ↓
Scoring Engine (pure functions)
    ↓
Review Engine
    ↓
Readiness Engine (practice readiness)
    ↓
Dashboard (PMP Practice section)
```

Business logic lives in `src/modules/assessment-engine/` and does **not** depend on React.

| Layer | Location |
|-------|----------|
| Types / templates | `exam-types.ts` |
| Pure scoring / readiness | `exam-scoring.ts` |
| Persistence / API orchestration | `exam-service.ts` |
| HTTP | `/api/exam`, `/api/exam/[sessionId]` |
| UI | `/[locale]/pmp-exam` |

## Question model

Reuses Prisma `Question` + `AnswerOption` + `Skill`.

Exam-bank extensions:

- `examBank`, `externalKey`
- `pmpDomain` (PEOPLE / PROCESS / BUSINESS_ENVIRONMENT)
- `deliveryApproach` (AGILE / HYBRID / PREDICTIVE)
- `processArea`, `scenarioFr` / `scenarioEn`
- `examDifficulty` (EASY / MEDIUM / HARD)
- `QuestionSkill` for additional skills (primary still on `skillId`)

Question types supported: `SINGLE_CHOICE`, `MULTIPLE_CHOICE`, `TRUE_FALSE`.  
Reserved for later: `NUMERIC`, `CALCULATION`, `DRAG_DROP`, `MATCHING`.

## Exam model

`Exam` templates store **questionCount** and **durationMinutes** (never hardcoded in React).

| Slug | Type | Questions | Duration |
|------|------|-----------|----------|
| quick-practice | QUICK_PRACTICE | 10 | 15 min |
| domain-people / process / business | DOMAIN_PRACTICE | 25 | 35 min |
| mock-exam | MOCK_EXAM | 60 | 80 min |
| full-pmp | FULL_PMP | 180 | 230 min (architecture ready) |

Session statuses: `NOT_STARTED` → `IN_PROGRESS` → `COMPLETED` | `ABANDONED`.

Related tables: `ExamSession`, `ExamSessionQuestion`, `ExamAnswer`, `ExamResult`.

## Scoring

Pure function: `calculateExamScore()`.

Returns: raw score, percentage, correct, incorrect, unanswered.

Presented as **Practice Score** / **Estimated Readiness** — never as an official PMP score.

Also: `calculateDomainPerformance()`, `calculateDeliveryPerformance()`, `calculateSkillPerformance()`.

Bands: STRONG (≥80), NEEDS_PRACTICE (≥60), WEAK (&lt;60) — aligned with existing mastery thresholds.

## Readiness

Pure function: `calculatePmpReadiness()`.

Levels: `NOT_READY` | `DEVELOPING` | `READY`.

Labeled **Practice Readiness** / **Learning Readiness** only.

Inputs: recent scores, domain performance, skill performance, unanswered rate, repeated mistakes.

**Limitation:** heuristic for learning guidance; not a PMI pass predictor.

## Mastery

On submit, answered exam items create `QuizAttempt` rows and update `ConceptMastery` via the existing mastery helpers (`computeMasteryLevelFromScore` / `updateConceptMastery`).

## Recommendations

Reuses `recommendNextLearning()` — no parallel recommendation system.

## AI Tutor

Reuses `AiTutorPort` / `AiTutorService` / noop|mock|openai.

Modes: HINT, EXPLAIN, TEACH, EXPLAIN_MISTAKE.

**During an in-progress exam:** correct answers and explanations are stripped from tutor context; non-HINT modes are forced to HINT so answers are never revealed before submission.

After submit, review UI can call **Explain this with AI Tutor** (`EXPLAIN_MISTAKE`).

## FR / EN

Locale changes presentation only. Question IDs, option IDs, domains, skills, and scores are stable across locales.

## Security

- Session user from `auth()` only — never trust client `userId` / `userEmail`.
- Correct answers and explanations are omitted from session payloads until `COMPLETED`.
- Exam sessions are scoped to the authenticated owner.

## Performance

Only the selected exam questions are loaded for a session (not the full bank in the browser). Results persist server-side.

## Copyright / IP safeguards

- Bank content is **original pedagogical scenarios**.
- Do **not** copy PMI exam items, PMBOK protected text, proprietary illustrations, or trademarked exam formulations.
- PMI / PMBOK may be cited as documentary references only.
- UI includes an IP notice on the exam hub.

## Future 180-question exam

`FULL_PMP` template is seeded (180 / 230 min). V1 bank is ≥100 questions; builder uses `min(requested, available)`. Expand the seed when ready — no architectural rewrite required.

## Limitations

- Not adaptive item selection.
- Not official scoring / blueprint weighting.
- No payment, CMS, OAuth, or production video in this phase.
- Mock/full exams may draw overlapping items until the bank grows further.
