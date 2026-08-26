# PMP Mastery Engine — Phase B (Mastery Model)

**Date:** 2026-08-26  
**Branch:** `cursor/pmp-mastery-engine-phase-b-e932`  
**Phase:** **B — Mastery Model (data layer)**  
**Source unlock:** User uploaded **ECO 2026 FR** (`ECO_2026_398a.pdf` — July 2026 update). PDF is **not** committed to the repo (PMI copyright).

---

## What shipped

| Deliverable | Status |
|-------------|--------|
| PLA ECO-proxy ontology (26 tasks, 33/41/26 weights) | ✅ |
| Concept / sub-concept graph (26 concepts) | ✅ |
| Cognitive / confidence / retention / weighted-accuracy helpers | ✅ |
| ECO tags on all **200** exam items | ✅ metadata only |
| Schema `Question.ecoTaskCode` + `conceptSlug` | ✅ |
| Stem / option / scoring changes on the 200 | ❌ none (protected) |
| Adaptive selection (Phase C) | ❌ not started |
| Question generation (Phase D) | ❌ not started |

---

## IP posture

- Structure (domain %, task counts, delivery ~40/60) **informed by** ECO July 2026.
- Task **labels / focus areas are PLA paraphrases** — not PMI ECO wording, not catalyseur lists.
- Practice Readiness remains **not** an official PMI score.
- PMI ECO PDF stays outside git; use as internal reference only.

---

## ECO 2026 → PLA proxy map (codes only)

| Domain | Weight | Tasks |
|--------|-------:|-------|
| People (`PE-01`…`PE-08`) | 33% | Shared vision → Communication planning |
| Process (`PR-01`…`PR-10`) | 41% | Integrated plan → Closure |
| Business (`BE-01`…`BE-08`) | 26% | Governance → External environment |

Delivery target (proxy): **40%** predictive · **60%** agile+hybrid.

---

## Bank tagging (primary `processArea` → task)

| processArea | Primary ECO-proxy | Count |
|-------------|-------------------|------:|
| Stakeholder engagement | PE-04 | 19 |
| Conflict management | PE-02 | 18 |
| Team leadership | PE-03 | 18 |
| Scope | PR-02 | 21 |
| Schedule | PR-08 | 21 |
| Quality | PR-07 | 21 |
| Risk | **BE-05** | 21 |
| Change control | **BE-03** | 21 |
| Benefits | PR-03 | 13 |
| Compliance | BE-02 | 13 |
| Organizational strategy | BE-07 | 14 |

**Note:** Risk & Change remain tagged `domain: PROCESS` in the protected bank; ECO-proxy primary tasks are BE. Domain remapping deferred (would affect blueprints/readiness) → Phase C/G decision.

Secondary tags (skills → PE-08, PR-05, PR-06, BE-01, …) enrich metadata without changing primary coverage counts.

---

## Coverage holes (primary task = 0) — Phase D backlog

`PE-01`, `PE-05`, `PE-06`, `PE-07`, `PE-08`,  
`PR-01`, `PR-04`, `PR-05`, `PR-06`, `PR-09`, `PR-10`,  
`BE-01`, `BE-04`, `BE-06`, `BE-08`

Highest pedagogical priority for next expansion batch: **PR-05 procurement**, **PR-06 cost/finance**, **PR-04 resources**, **PR-09 status/metrics**, **PE-01 vision**, **BE-04 issues vs risk**.

---

## Domain mix vs ECO 2026 targets

| | Bank now | ECO 2026 target |
|--|--------:|----------------:|
| PEOPLE | 27.5% (55) | 33% |
| PROCESS | 52.5% (105)* | 41% |
| BUSINESS | 20% (40) | 26% |

\*Includes 42 Risk+Change items that ECO treats as Business — another reason bank “PROCESS” looks heavy.

Exam **blueprint counts** (Quick/Mock/Full) intentionally **unchanged** in Phase B so selection tests stay green; align to 33/41/26 in Phase C/G.

---

## Files

| Path | Role |
|------|------|
| `src/modules/assessment-engine/eco-proxy-2026.ts` | Ontology + weights |
| `src/modules/assessment-engine/mastery-model.ts` | Concepts, coverage, retention, confidence |
| `prisma/seed/pmp-exam-eco-tags.ts` | Tag resolver + `applyEcoProxyTags` |
| `prisma/seed/pmp-exam-bank-types.ts` | Optional eco fields on seed type |
| `prisma/seed/pmp-exam-bank-data.ts` | `PMP_EXAM_BANK_STEMS` + tagged export |
| `prisma/seed/pmp-exam-bank.ts` | Persist eco fields on upsert |
| `prisma/schema.prisma` + migration | `ecoTaskCode`, `conceptSlug` |
| `src/tests/pmp-mastery-phase-b.test.ts` | Phase B tests |

---

## Explicitly NOT done

- No adaptive initial selection  
- No tutor mode expansion  
- No readiness V3  
- No new exam questions  
- No PMBOK text extraction (PMBOK PDFs still absent)  
- Blueprint weight retune  

---

## Next

**Phase C — Adaptive Engine** using `ecoTaskCode` + weakness/retention signals, while preserving blueprint integrity.

**STOP after Phase B** unless approved to continue.
