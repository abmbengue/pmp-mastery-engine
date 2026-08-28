# PMP Mastery Engine — Phase B.3.2 Mobile Closure

**Branch:** `cursor/pmp-mastery-engine-phase-b32-ui`  
**Closure baseline:** `001c172` + iteration 17 E2E hardening  
**Scope:** Mobile PMP Study journeys — stepped LEARN for 7 P0 packs. No Phase C/D. No exam bank changes.

---

## Stepped LEARN — 7 P0 packs

| Lesson slug | ECO task (study entry) | Back-link target | Steps | MINI CASE |
|-------------|------------------------|------------------|-------|-----------|
| `shared-vision` | PEOPLE-T01 PRIMARY | PEOPLE-T01 | 7 | yes (rationale) |
| `knowledge-transfer` | PEOPLE-T07 PRIMARY | PEOPLE-T07 | 7 | yes (rationale) |
| `communication` | PEOPLE-T08 PRIMARY | PEOPLE-T08 | 7 | yes (no rationale in pack) |
| `cost` | PROCESS-T06 PRIMARY | PROCESS-T06 | 7 | yes (no rationale in pack) |
| `project-lifecycle-basics` | PROCESS-T10 PRIMARY | PROCESS-T10 | 6 | yes (no Distinctions step) |
| `lessons-learned` | BUSINESS-T06 PRIMARY | BUSINESS-T06 | 6 | no |
| `risk-vs-issue` | BUSINESS-T05 SECONDARY | **BUSINESS-T05** | 6 | no |

All packs: stepped pedagogy → B.3.1 body → PRACTICE → TEST → REVIEW → MASTER.

---

## Back-link: `risk-vs-issue` → BUSINESS-T05 (expected)

`resolvePmpStudyTaskBackLink("risk-vs-issue")` returns **BUSINESS-T05** by design:

- The lesson has **no PRIMARY** ECO mapping in `lesson-eco-map.ts`.
- Mappings: `BUSINESS-T05` SECONDARY (strength 4), `BUSINESS-T04` SECONDARY (strength 3).
- Resolver sorts PRIMARY first, then strength; highest SECONDARY wins → **BUSINESS-T05**.
- PRIMARY lesson on BUSINESS-T05 is `risk-management-hybrid` / `risk-vs-issue-situational`; `risk-vs-issue` is a supporting conceptual lesson on that task.

**Do not change this mapping without a proven navigation bug.**

---

## Start / Continue (task page)

| Condition | Action | Target |
|-----------|--------|--------|
| Any lesson IN_PROGRESS | Continue | Most recently updated |
| First incomplete + progress record | Continue | That lesson |
| First incomplete, no record | Start | That lesson |
| All COMPLETED | Start | PRIMARY lesson |
| Empty lesson list | — | No CTA |

Uses existing `LessonProgress` — no new progression API.

---

## Phase resume

Invalid `metadata.currentPhase` values are sanitized via `parseLessonPhase()` (fallback `LEARN`). Task Continue hint omits phase when unparsable.

---

## Mobile E2E coverage (390×844)

| Journey | Spec | Validates |
|---------|------|-----------|
| Shared Vision full | `pmp-study-shared-vision-mobile.spec.ts` | Stepped + mini-case + MASTER |
| Lesson ↔ ECO round-trip | same | `back-to-eco-task-link` + reopen |
| risk-vs-issue no mini-case | `pmp-study-risk-vs-issue-mobile.spec.ts` | 6 steps, distinctions, MASTER |

All E2E use native Playwright `.click()` (no `evaluate()` workaround).

---

## Integrity locks

| Check | Expected |
|-------|----------|
| ECO tasks | 26 |
| Q001–Q200 fingerprint | `d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2` |
| Q201+ | absent |
| Phase C/D | not started |

---

## Out of scope (B.3.2)

- Adaptive / confidence / weakness engine (Phase C)
- New exam questions or Q201+
- DB migrations for mastery
- Stepped LEARN for non-P0 lessons (72 remain scroll-cards)
