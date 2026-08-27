# PMP MASTERY ENGINE — PHASE B.3.1 LESSON CONTENT REPORT

**Branch:** `cursor/pmp-mastery-engine-phase-b3-lessons-e932`  
**Date:** 2026-08-27  
**Mode:** Lesson content quality + mobile readiness  
**STOP:** Phase C / D / question generation **NOT STARTED**

---

## CONTENT NOT VERIFIED AGAINST ORIGINAL INSTRUCTOR PDFs

Cursor **did not** have access to the 12 original instructor PDFs and **does not** claim to have read them in full.

Lesson enrichments in B.3.1 are grounded in:

1. ECO July 2026 task IDs (`ECO_VERIFIED`)
2. Authorized instructor **condensé / blueprints** already provided in prior prompts (`INSTRUCTOR_DERIVED`)
3. Knowledge Pack v1.1
4. Existing PLA lesson architecture (`PLA_INTERNAL`)
5. Pedagogical decision framing (`DERIVED_PEDAGOGICAL`)

`INSTRUCTOR_DERIVED` ≠ PMI official exam wording.

---

## A. Lessons audited

Priority set reviewed (body length, situation, quiz depth, ECO alignment):

| Slug | Pre-B3.1 | Action |
|------|----------|--------|
| project-lifecycle-basics | Lifecycle-general; weak closure focus | **Rewritten** toward PROCESS-T10 closure |
| shared-vision | Good B.3 base | **Reinforced** |
| knowledge-transfer | Good B.3 base | **Reinforced** (verify transfer) |
| communication | Strong B.3 | Kept (T04/T08 map reinforced via stakeholders) |
| cost | Good B.3 EVM | **Reinforced** mobile EVM chain |
| resource-management | **THIN** | **Full upgrade** |
| procurement-basics | Medium | **Reinforced** |
| stakeholders-basics | Medium | **Reinforced** T04/T05/T06 + mental map |
| compliance | Medium | **Reinforced** |
| definition-of-done | Medium | **Rewritten** as DoR vs DoD |
| lessons-learned | Medium | **Reinforced** CI + OPA/EEF |
| risk-vs-issue | Medium | **Reinforced** + impediment + adaptive change |
| organizational-change | Adequate | No change this run |

Catalog size unchanged: **79** lessons.

---

## B. Lessons modified (B.3.1 upgrades)

File: `prisma/seed/content/pmp-quality-upgrades-b31.ts` (11 slugs)

1. `project-lifecycle-basics`
2. `resource-management`
3. `shared-vision`
4. `knowledge-transfer`
5. `cost`
6. `stakeholders-basics`
7. `definition-of-done`
8. `lessons-learned`
9. `risk-vs-issue`
10. `procurement-basics`
11. `compliance`

---

## C. Reasons for modifications

| Lesson | Why |
|--------|-----|
| Closure | Body did not match L10 blueprint (readiness/transition) |
| Resources | Only thin 1Q lesson for PROCESS-T04 PRIMARY |
| Shared vision / KT / Cost | Strengthen decision + exam traps + PAH cues |
| Stakeholders | Explicit T04≠T08≠T07 mental map; T05/T06 alignment |
| DoD | Teach DoR vs DoD decision rules |
| Lessons learned | CI loop + OPA vs EEF |
| Risk vs issue | Add impediment + predictive vs adaptive change cue |
| Procurement / Compliance | Decision scenarios for vendor/compliance pressure |

---

## D. ECO tasks covered (this run)

| Task | Lesson vehicle |
|------|----------------|
| PEOPLE-T01 | shared-vision |
| PEOPLE-T04/T05/T06 | stakeholders-basics |
| PEOPLE-T07 | knowledge-transfer |
| PEOPLE-T08 | communication (prior) + distinction in stakeholders/KT |
| PROCESS-T04 | resource-management |
| PROCESS-T05 | procurement-basics |
| PROCESS-T06 | cost |
| PROCESS-T07 / T02 | definition-of-done (DoR/DoD) |
| PROCESS-T10 | project-lifecycle-basics |
| BUSINESS-T02 | compliance |
| BUSINESS-T04/T05 | risk-vs-issue |
| BUSINESS-T06 | lessons-learned |

ECO total still **26/26**. T07≠T08≠T04 preserved.

---

## E. Distinctions reused

From existing 23 cards (no duplicates created):

- Vision / Goal / Value
- Engagement ≠ Communication ≠ Knowledge transfer
- DoR / DoD
- OPA / EEF
- Risk / Issue / Impediment
- Predictive vs Adaptive change
- PV/EV/AC · CPI/SPI · EAC/ETC
- RACI
- Quality/compliance flow cues

---

## F. Provenance

| Tag | Use in B.3.1 |
|-----|----------------|
| ECO_VERIFIED | Task IDs in explanations |
| INSTRUCTOR_DERIVED | Closure/EVM/KT/DoR/OPA patterns from authorized blueprints |
| PLA_INTERNAL | Helios/HelioRoute scenarios, quiz stems |
| DERIVED_PEDAGOGICAL | Mobile card sequencing / decision framing |

---

## G. Mobile improvements

- Short decision prompts (“What NEXT?”)
- Formula / checklist / mental-map flashcards
- Situation + 2–3 choice questions per upgraded lesson
- Avoided wide tables; used numbered chains (EVM, compliance, closure)
- Explicit “phone note” style exercises for EVM chain

No global UI redesign.

---

## H. Remaining gaps

**P0**
- Wire pedagogy packs into live mobile lesson UI components
- T07 still has 0 protected exam questions (intentional)

**P1**
- `organizational-change` / Kotter depth could still deepen
- Several non-priority thin lessons remain (~15)

**P2**
- git push blocked (no origin URL in environment)

---

## I. Tests

| Check | Result |
|-------|--------|
| `npm run lint` | PASS |
| `npm test` | **335** PASS |
| `npm run build` | PASS |
| `npm run test:e2e` | **57/58** — flaky `PASSWORD RESET` (passes in isolation; unrelated to lesson content). Re-run alone: PASS |

Bank fingerprint verified unchanged after B.3.1.

---

## J. Protected 200 questions

**UNCHANGED**

Fingerprint: `d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2`

Questions generated: **0**

---

## STOP GATE

Phase C: **NOT STARTED**  
Phase D: **NOT STARTED**  
Q201+: **NONE**

**Next (after validation):** optional UI wiring of pedagogy packs, or Phase C only if explicitly authorized.
