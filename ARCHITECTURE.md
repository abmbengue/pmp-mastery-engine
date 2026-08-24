# Architecture

## Overview

Professional Learning Academy (PLA) is a modular, bilingual learning platform designed around a **generic pedagogical engine**. One codebase serves multiple academies; adding a new academy requires configuration and content, not a new application.

## Layer Separation

```
┌─────────────────────────────────────────────┐
│  UI Layer (src/app/)                        │
│  Presentation only — no business logic      │
├─────────────────────────────────────────────┤
│  Modules (src/modules/)                     │
│  academies | content | learning-engine      │
│  assessment-engine | localization | auth    │
│  ai-tutor | dashboard | simulation-engine   │
│  media                                      │
├─────────────────────────────────────────────┤
│  Data Layer (src/data/)                     │
│  Prisma client + repositories               │
├─────────────────────────────────────────────┤
│  Shared (src/shared/)                       │
│  Types, Zod schemas, utilities              │
├─────────────────────────────────────────────┤
│  PostgreSQL                                  │
└─────────────────────────────────────────────┘
```

## Content Hierarchy

```
Academy → Course → Module → Lesson → LearningItem
```

Each `LearningItem` has a `type` (TEXT, VIDEO, EXERCISE, QUIZ, FLASHCARD, SIMULATION, etc.) and a JSON `payload` validated by Zod schemas in `src/shared/types/content-payloads.ts`.

## Learning engine (reuse — do not duplicate)

| Concern | Module |
|---|---|
| Lesson phases LEARN→…→MASTER | `lesson-phases.ts`, Lesson Player UI |
| Progress / mastery | `progress-service.ts`, `ConceptMastery` |
| Next lesson | `next-lesson-service.ts` |
| Recommendations (single engine) | `recommendation-service.ts` → `recommendNextLearning()` |
| Spaced repetition | `spaced-repetition.ts` + `review-service.ts` |
| Corrective learning | `corrective-learning.ts` (extends recommendations) |
| Shorts | `short-learning-service.ts` + VIDEO payload |
| Media | `media/media-provider.ts` |

## Assessment / PMP practice

| Concern | Module |
|---|---|
| Exam builder / sessions | `exam-service.ts`, blueprint |
| Analytics / readiness V2 | `analytics-engine.ts` |
| Readiness report + PDF | `readiness-report-service.ts`, `readiness-report-pdf.ts` |
| Error analysis / retry | existing exam analytics + retry flows |

## Internationalization Strategy

| Layer | Approach |
|---|---|
| UI (labels, navigation) | `next-intl` (`messages/fr.json`, `messages/en.json`) |
| Pedagogical content | Bilingual DB columns (`titleFr`/`titleEn`, etc.) |
| Resolution | `pickLocalized()` + repository helpers |

## Micro-Learning Phases

```
LEARN → PRACTICE → TEST → REVIEW → MASTER
```

Durations are configurable per lesson (`learnMinutes`, etc.).

## Spaced repetition & Review Now (Phase 9–10)

Deterministic intervals by mastery (WEAK=1 / LEARNING=3 / MASTERED=7 days).  
`ConceptMastery.nextReviewAt` persisted on mastery updates.  
`getReviewCalendar(userId)` feeds Dashboard and `/review`.  
See [SPACED_REPETITION.md](./SPACED_REPETITION.md).

## Learning Paths (Phase 10)

Config-only groupings of existing courses — see [LEARNING_PATHS.md](./LEARNING_PATHS.md).

## Shorts (Phase 10–11)

VIDEO `isShort` metadata + filtered discovery + media abstraction.  
See [SHORTS.md](./SHORTS.md) and [MEDIA_ARCHITECTURE.md](./MEDIA_ARCHITECTURE.md).

## PMP Readiness Report (Phase 9–11)

Synthesizes practice metrics with an explicit **NOT AN OFFICIAL PMI SCORE** disclaimer.  
Print + PDF export (`/api/exam/readiness-report/pdf`).  
See [PMP_READINESS_REPORT.md](./PMP_READINESS_REPORT.md).

## Content packs & validation (Phase 11)

Catalogs: `prisma/seed/content/`. Validator: `src/modules/content/`.  
Handoff: [AI_HANDOFF.md](./AI_HANDOFF.md).

## Auth & security

Auth.js v5 Credentials + Prisma. Session via `auth()` / `requireSession`.  
**Never** trust client-supplied `userId` or email as identity.  
PDF and Shorts completion are session-scoped. No bank data.

## Key design decisions

1. PostgreSQL + Prisma  
2. Repository pattern  
3. Zod-validated LearningItem payloads  
4. Modular monolith  
5. Single recommendation engine — extend, never fork  
6. Deterministic pedagogy (no ML scoring)  
7. MediaProvider abstraction without vendor lock-in  

## Architecture audit notes (Phase 11)

- No mass refactor performed.  
- Known residual: seed uses wipe+create (fine for V1).  
- Shorts discovery N+1 completion checks are acceptable for current scale.  
- Prefer keeping business logic out of React client components.

## Explicitly out of scope (through Phase 11)

- Payment / subscription / CMS / OAuth / marketplace  
- Native mobile / ML / official PMI scoring  
- Paid video infrastructure lock-in  
- Commercial analytics / ads / social

See [ROADMAP.md](./ROADMAP.md) and [AI_HANDOFF.md](./AI_HANDOFF.md).
