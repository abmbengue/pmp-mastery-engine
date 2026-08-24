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
│  ai-tutor | dashboard                       │
├─────────────────────────────────────────────┤
│  Data Layer (src/data/)                     │
│  Prisma client + repositories               │
├─────────────────────────────────────────────┤
│  Shared (src/shared/)                         │
│  Types, Zod schemas, utilities              │
├─────────────────────────────────────────────┤
│  PostgreSQL                                  │
└─────────────────────────────────────────────┘
```

## Content Hierarchy

```
Academy → Course → Module → Lesson → LearningItem
```

Each `LearningItem` has a `type` (TEXT, VIDEO, EXERCISE, QUIZ, FLASHCARD, etc.) and a JSON `payload` validated by Zod schemas in `src/shared/types/content-payloads.ts`.

## Internationalization Strategy

| Layer | Approach |
|---|---|
| UI (labels, navigation) | `next-intl` message files (`messages/fr.json`, `messages/en.json`) |
| Pedagogical content | Bilingual DB columns (`titleFr`/`titleEn`, etc.) |
| Resolution | `pickLocalized()` utility + repository localize helpers |

This hybrid approach was chosen for V1 because:
- Only 2 languages are needed
- Content is auditable directly in the database
- No code duplication for content models
- UI translations remain separate and maintainable

## Micro-Learning Phases

Lessons support configurable phase durations (NOT hardcoded):

```
LEARN → PRACTICE → TEST → REVIEW → MASTER
```

Stored as `learnMinutes`, `practiceMinutes`, etc. on the `Lesson` model.

## AI Tutor (Prepared, Not Connected)

```
AiTutorPort (interface)
  └── NoopAiTutor (V1 stub)
  └── [Future] OpenAI / Anthropic implementation
```

The port accepts context (lesson, concept, user level, locale) and action type. The learning engine does not depend on any specific AI provider.

## Auth (Implemented in Phase 3)

The platform now uses **Auth.js v5** with a **Credentials** provider and Prisma-backed user records. Passwords are hashed with `bcryptjs` and are never exposed to the client. Session resolution happens server-side through `auth()` helpers in `src/modules/auth/session.ts`.

Current scope:
- Register / login / logout
- JWT-backed persistent sessions
- Protected dashboard, settings, lesson progression APIs
- Per-user locale persistence (`User.locale`)
- Test-only seeded demo account (`demo@pla.local`) kept for regression support

## Video (Prepared, Placeholder Only)

Video `LearningItem` payloads include: url, durationSec, titleFr/En, language, thumbnailUrl, descriptionFr/En, isPlaceholder. No real video hosting in V1.

## PMP Content Policy

All PMP-related content is **original**. No PMBOK content is reproduced. The schema supports future `sourceReferences` if needed.

## Key Design Decisions

1. **PostgreSQL from V1** — no SQLite intermediate step
2. **Prisma ORM** — type-safe data access, migration support
3. **Repository pattern** — data access isolated from business logic
4. **Zod validation** — LearningItem payloads validated at app layer
5. **Modular monolith** — single Next.js app with clear module boundaries
6. **Extensible content types** — new types added via enum + Zod schema

## What Is NOT Implemented (after Phase 3)

- Social/OAuth authentication
- Password reset / email verification
- Admin/CMS authentication roles
- Adaptive quiz system
- Simulators
- Real AI Tutor
- Video hosting
- CMS / admin panel
- Payment / subscription
- Mobile app

See [ROADMAP.md](./ROADMAP.md) for planned phases.
