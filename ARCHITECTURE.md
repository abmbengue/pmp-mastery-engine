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
| Spaced repetition (Phase 9) | `spaced-repetition.ts` + `review-service.ts` |
| Corrective learning (Phase 9) | `corrective-learning.ts` (extends recommendations) |
| Shorts | `short-learning-service.ts` + VIDEO payload |

## Assessment / PMP practice

| Concern | Module |
|---|---|
| Exam builder / sessions | `exam-service.ts`, blueprint |
| Analytics / readiness V2 | `analytics-engine.ts` |
| Readiness report (Phase 9) | `readiness-report-service.ts` |
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

## Shorts (Phase 10)

VIDEO `isShort` metadata + filtered list UX — see [SHORTS.md](./SHORTS.md).

## PMP Readiness Report (Phase 9)

Synthesizes practice metrics with an explicit **NOT AN OFFICIAL PMI SCORE** disclaimer.  
Printable export via `window.print()`.  
See [PMP_READINESS_REPORT.md](./PMP_READINESS_REPORT.md).

## Auth & security

Auth.js v5 Credentials + Prisma. Session via `auth()` / `requireSession`.  
**Never** trust client-supplied `userId` or email as identity.  
No bank data; no unnecessary sensitive fields.

## VIDEO / Shorts metadata

VIDEO payloads support: academy, topic, skill, difficulty, lesson (`relatedLessonSlug`), language, duration (≤180s for shorts), learning objective. Placeholder playback only — no YouTube/Vimeo hosting in this phase.

## Key Design Decisions

1. PostgreSQL + Prisma from V1  
2. Repository pattern  
3. Zod-validated LearningItem payloads  
4. Modular monolith  
5. Single recommendation engine (`recommendNextLearning`) — extend, never fork  
6. Deterministic pedagogy (no ML scoring)

## Explicitly out of scope (through Phase 9)

- Payment / subscription  
- CMS / admin  
- OAuth  
- Native mobile app  
- Real ML  
- Official PMI scoring / PMI integration  
- Complex cloud video infrastructure  
- Commercial analytics  

See [ROADMAP.md](./ROADMAP.md).
