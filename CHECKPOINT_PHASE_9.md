# CHECKPOINT PHASE 9

**Branch:** `cursor/pla-phase9-review-readiness-e932`  
**Status:** COMPLETE — STOP (do not start Phase 10)  
**Date:** 2026-08-24

## Definition of Done

| Item | Status |
|---|---|
| Error → Corrective Learning | Done |
| Spaced Repetition déterministe | Done |
| Review Queue | Done |
| Review Now UI | Done |
| PMP Readiness Report | Done |
| FR / EN | Done |
| Dashboard Review | Done |
| Personal Finance enrichi | Done |
| Corporate Finance enrichi | Done |
| Short Video metadata | Done |
| Accessibility conservée | Done |
| Security (`auth()` only) | Done |
| Tests unitaires | Done (170/170) |
| E2E | Done (46/46) |
| Build | Done |
| Documentation | Done |

## Exact test results

| Command | Result |
|---|---|
| `npm run lint` | PASS |
| `npm run test` | **170/170 PASS** (baseline 159 + 11 Phase 9) |
| `npm run build` | PASS |
| `npm run test:e2e` | **46/46 PASS** (baseline 41 + 5 Phase 9; PHASE7 TEST6 flaky fixed) |

## Files created

- `SPACED_REPETITION.md`
- `PMP_READINESS_REPORT.md`
- `src/modules/learning-engine/spaced-repetition.ts`
- `src/modules/learning-engine/corrective-learning.ts`
- `src/modules/learning-engine/review-service.ts`
- `src/modules/assessment-engine/readiness-report-service.ts`
- `src/app/[locale]/review/page.tsx`
- `src/app/[locale]/pmp-exam/readiness-report/page.tsx`
- `src/app/[locale]/components/exam/ReadinessReportActions.tsx`
- `src/tests/spaced-repetition.test.ts`
- `src/tests/readiness-report.test.ts`

## Files modified (high signal)

- `recommendation-service.ts` — `CORRECTIVE_LEARNING`, `DUE_FOR_REVIEW`
- `dashboard/page.tsx` — Review Now / Due for Review
- `layout.tsx` — nav Review + Readiness
- `ExamHubClient.tsx` / `pmp-exam/page.tsx` — readiness link
- `messages/en.json`, `messages/fr.json`
- `content-payloads.ts`, `prisma/seed/helpers.ts` — short metadata
- `prisma/seed/personal-finance.ts`, `prisma/seed/corporate-finance.ts`
- `ARCHITECTURE.md`, `PRODUCT_SPEC.md`, `ROADMAP.md`, `CONTENT_MODEL.md`
- `src/tests/e2e/user-journey.spec.ts` — Phase 9 + AI explain fix

## Architecture

- **No second recommendation engine** — corrective path extends `recommendNextLearning()`.
- Pure SR: `buildReviewQueue` / `computeNextReviewAt` + configurable day intervals.
- Service: `getReviewQueue(userId)` from session only.
- Report: `buildPmpReadinessReport(userId)` with hard PMI disclaimer + `window.print()` export.

## Database / migrations

- **No new Prisma migration** in Phase 9.
- Content enrichment via seed (PF debt module + CF valuation/cash lessons).
- Reuses `ConceptMastery`, `ExamError`, existing exam analytics tables.

## Problems encountered

1. E2E PHASE7 TEST6 flaked on `explain-ai-1` when first wrong answer wasn’t sortOrder 0 → fixed with `locator('[data-testid^="explain-ai-"]').first()`.
2. `git push -u origin …` failed: **no `origin` remote** in this environment.
3. Unit test initially assumed skill-hint always becomes index 0 when already in preferred list → assertion corrected.

## Remaining risks

- Seed uses `module.create` (existing pattern) — full re-seed still requires reset for clean CF/PF modules.
- Print export is V1 only (`window.print()`), no PDF library.
- Corrective recommendation activates when top error category count ≥ 2 — may change reco for heavy exam users (intentional).

## Phase 10 recommendations (DO NOT IMPLEMENT NOW)

- Optional richer export (PDF) without heavy deps if needed
- Persist `nextReviewAt` on mastery rows for cheaper queue queries
- Deeper PF/CF lesson volume + short media hosting later
- Still defer: payment, CMS, OAuth, ML, official PMI scoring

## Secret check

No secrets introduced in Phase 9 commits (scan of diff: no new API keys / tokens). Existing `.env` AUTH_SECRET untouched by feature code.
