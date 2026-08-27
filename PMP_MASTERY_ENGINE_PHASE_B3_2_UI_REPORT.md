# PMP Mastery Engine — Phase B.3.2 UI Report

**Branch:** `cursor/pmp-mastery-engine-phase-b32-ui`  
**Base:** `cursor/pmp-mastery-engine-phase-b3-lessons-e932`  
**Date:** 2026-08-27  
**Scope:** Wire existing B.3 / B.3.1 pedagogy into mobile learning UI. No new exam questions. No Phase C.

---

## Implementation summary

B.3.2 makes existing mastery-engine pedagogy **usable in the app**:

1. **PMP Study hub** — Domain → ECO Task → mapped lessons → existing academy lesson player.
2. **LearnPhase enrichment** — when `getLessonPedagogy(lesson.slug)` exists, LEARN renders WHAT / WHY / WHEN·HOW / HOW TO DECIDE / scenario / distinctions / takeaway from the pack.
3. Lessons **without** a pedagogy pack keep the existing `TextBlock` LEARN experience.
4. Practice → Test → Review → Master and progress APIs are **unchanged**.

### Routing note (plan adjustment)

Proposed siblings `/pmp-study/[domainId]` and `/pmp-study/[taskId]` **conflict** in the App Router (two dynamic segments at the same level).

**Implemented (same navigation, nested):**

| Route | Purpose |
|-------|---------|
| `/[locale]/pmp-study` | Domain picker |
| `/[locale]/pmp-study/[domainId]` | ECO tasks for domain |
| `/[locale]/pmp-study/[domainId]/[taskId]` | Task detail + lessons + distinctions |

Start / Open links deep-link to the **existing** academy lesson URL — no parallel player.

---

## Routes added

- `src/app/[locale]/pmp-study/page.tsx`
- `src/app/[locale]/pmp-study/[domainId]/page.tsx`
- `src/app/[locale]/pmp-study/[domainId]/[taskId]/page.tsx`

Entry points:

- Header nav → **PMP Study**
- Dashboard → PMP Practice section → **Study by ECO task**

---

## Components modified / added

| File | Change |
|------|--------|
| `PedagogyLearnBlock.tsx` | **New** — mobile cards for pedagogy pack |
| `LearnPhase.tsx` | Re-export PedagogyLearnBlock |
| `LessonPlayer.tsx` | LEARN uses pack when present; else TextBlock |
| Lesson page | Passes pedagogy i18n labels |
| `layout.tsx` | Nav link `/pmp-study` |
| `dashboard/page.tsx` | Study entry CTA |
| `messages/en.json` / `fr.json` | `pmpStudy` + pedagogy labels |

---

## Data sources used (canonical — no second content DB)

| Source | Use |
|--------|-----|
| `eco-taxonomy.ts` | Domains / 26 tasks |
| `lesson-eco-map.ts` | Task → lessons |
| `critical-distinctions.ts` | Task / lesson distinctions |
| `lesson-pedagogy.ts` | `getLessonPedagogy` packs |
| `pmp-lesson-catalog.ts` | Thin slug→module/title index (mirrored from seed, 79 lessons) for href resolution without importing excluded seed into app |

Protected exam bank: **not touched**.

---

## User flow

```
Dashboard / Nav
  → /pmp-study
  → /pmp-study/PEOPLE
  → /pmp-study/PEOPLE/PEOPLE-T01
  → Start / Open → /academies/pmp-project-management/courses/pmp-foundations/modules/.../lessons/{slug}
  → LEARN (pedagogy pack if any)
  → PRACTICE → TEST → REVIEW → MASTER
  → POST /api/lesson/progress · POST /api/lesson/complete
```

---

## Mobile UX decisions

- Single column, `max-w-2xl`
- Short cards (WHAT / WHY / …) instead of long prose when pack exists
- Existing `PhaseProgressBar` retained
- Clear Continue / next-phase button (unchanged player chrome)
- Mini-case choices use `min-h-11` touch targets
- No global redesign; Tailwind patterns match existing player

---

## Tests

| Check | Result |
|-------|--------|
| Unit `pmp-mastery-phase-b32-ui.test.ts` | Study wiring + bank lock |
| `npm run lint` | (see CI run) |
| `npm test` | (see CI run) |
| `npm run build` | (see CI run) |
| Protected bank fingerprint | `d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2` |
| Q201+ | 0 created |
| ECO | 26 tasks; T04 ≠ T07 ≠ T08 |

---

## Protected bank verification

- Stems `pmp-exam-001` … `pmp-exam-200` unchanged
- Aggregate fingerprint locked in B.3.2 unit test
- No question generation in this phase

---

## Known limitations

1. Pedagogy packs exist for **P0 pack lessons only** (7 packs). Other lessons use classic TextBlock LEARN.
2. Task “purpose” is derived from ECO title + focus keywords (no separate purpose field in taxonomy).
3. Task page Start always opens the primary (or first) mapped lesson — no Phase C adaptive “Continue” based on weakness.
4. Thin catalog index can drift if seed lesson titles/modules change without regenerating `pmp-lesson-catalog.ts`.
5. Nested route shape differs slightly from the original flat `[taskId]` proposal (App Router constraint).

---

## Deferred Phase C items

- Confidence scoring
- Adaptive mastery / weakness algorithms
- Attempt → mastery engine
- Spaced repetition recommendations
- Q201+ generation

**STOP before Phase C / D / exam generation.**

---

## Acceptance checklist

- [x] PMP study entry point exists
- [x] Domain → Task navigation works
- [x] Task → mapped lessons works
- [x] Task → relevant distinctions works
- [x] Lesson → existing player works
- [x] Pedagogy packs render in LEARN
- [x] Lessons without packs still work
- [x] Instructional scenario renders where available
- [x] Practice/Test/Review/Master intact
- [x] Mobile UX clean (single column, cards, progress)
- [x] No protected question changed
- [x] No Q201+ created
- [x] ECO remains 26 tasks
- [ ] lint / tests / build — verified in implementation run
- [x] B.3.2 report created
