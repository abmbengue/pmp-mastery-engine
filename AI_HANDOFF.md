# AI Handoff — Professional Learning Academy

This document is written so another AI or developer can resume work **without** this conversation’s history.

## 1. What it is

Bilingual (FR/EN) micro-learning web platform for professional skills: Personal Finance, Corporate Finance, PMP practice (educational, original content).

## 2. Stack

- Next.js 15 (App Router) + TypeScript + Tailwind  
- Prisma 7 + PostgreSQL  
- Auth.js v5 (Credentials)  
- next-intl  
- Vitest + Playwright  
- Zod payload validation  

## 3. Architecture layers

```
src/app/          UI + API routes (no business logic)
src/modules/      domain services
src/data/         Prisma client + repositories
src/shared/       types, Zod, utils
prisma/           schema, migrations, seeds
```

## 4. Key modules

| Module | Role |
|---|---|
| `auth` | session helpers, password hashing, **password reset** — **auth() is source of truth** |
| `security` | in-memory rate limit + safeApiLog (single-node pilot) |
| `learning-engine` | progress, next lesson, recommendations, review, shorts, paths |
| `assessment-engine` | exams, analytics, readiness, PDF |
| `simulation-engine` | pedagogical finance calculators |
| `ai-tutor` | port + providers (noop/mock/openai-compatible) |
| `media` | Placeholder / External media abstraction |
| `content` | validators + planned academies config |
| `dashboard` | dashboard aggregation |

## 5. Database highlights

Academy → Course → Module → Lesson → LearningItem  
ConceptMastery (`level`, `lastReviewedAt`, `nextReviewAt`)  
Exam* tables for PMP practice  
LessonProgress (+ metadata for Shorts completion)  
User (`emailVerifiedAt` nullable — **not enforced** in pilot)  
PasswordResetToken (hashed token, TTL, single-use)

## 6–9. Academies

- **Personal Finance** (~53 lessons): foundations, debt, investing, wealth — see `CONTENT_PERSONAL_FINANCE.md`  
- **Corporate Finance** (~30): statements, WC, valuation, DCF, M&A  
- **PMP** (~38 original lessons + 200-question bank): People/Process/Business/Agile/Hybrid/Situational  

Planned (catalogue only): Business Strategy, Financial Modeling, Energy, Leadership, Professional English.

## 10. AI Tutor

Port interface; never expose API keys to the client. Mock provider used in E2E (`AI_PROVIDER=mock`).

## 11. Simulators

Pure calculation engines + UI. Educational disclaimers required.

## 12–14. Exam / errors / spaced repetition

Deterministic exam builder, error categories, retry engine, readiness V2.  
Spaced intervals WEAK=1 / LEARNING=3 / MASTERED=7 → `nextReviewAt`.  
Single recommendation engine: `recommendNextLearning()`.

## 15. Shorts

VIDEO `isShort` + media provider. Discovery sections + Learn more / Review skill. Progress via `/api/shorts/complete`.

## 16. Readiness

`buildPmpReadinessReport` → page + print + PDF (`/api/exam/readiness-report/pdf`).  
Always: **NOT AN OFFICIAL PMI SCORE**.

## 17. Tests & commands

```
npm run lint
npm run test
npm run build
npm run test:e2e
npm run db:seed
```

## 18. Conventions

- FR + EN for UI and content  
- Business logic in `src/modules`, not React components  
- Zod for LearningItem payloads  
- Seed content in `prisma/seed/content/`

## 19. SAFE EXTENSION RULES

1. Reuse existing engines — never fork recommendations / scoring / review.  
2. No business logic in React beyond presentation.  
3. Never trust client `userId` / email — use `auth()`.  
4. Never expose secrets (AI keys, DB URLs) to the client.  
5. Preserve FR/EN and financial/PMP disclaimers.  
6. Never present practice readiness as official PMI scoring.  
7. Run lint/test/build/e2e before and after changes.  
8. Do not delete existing tests to “make green”.  
9. Prefer config + seed for content; avoid CMS unless product asks.  
10. Media: extend `MediaProvider`, don’t hardcode vendors.

## 20. Do not break

Auth isolation, exam analytics, spaced repetition, readiness disclaimer, Shorts completion metadata, Learning Paths config, bilingual messages.

## 21. P1 hardening (done) + possible next extensions

P1 delivered: PMP option uniqueness, password reset (dev email port), login rate limit, email-verification **deferred** (immediate register + `emailVerifiedAt` prep). See `AUTH_SECURITY.md` and `CHECKPOINT_P1_HARDENING.md`.

Next (only if asked):

- Real email provider behind `PasswordResetEmailPort` + optional verification  
- Optional real media hosting behind MediaProvider  
- SME polish of remaining PMP narratives  
- Activate one planned academy with validated catalog  
- Distributed rate limiting for multi-instance deploys  

Still defer: payment/OAuth/CMS/ML/official PMI/native mobile / Phase 13.

