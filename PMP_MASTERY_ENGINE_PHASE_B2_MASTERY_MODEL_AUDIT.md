# PMP Mastery Engine — Phase B.2 Mastery Model Audit & Hardening

**Date:** 2026-08-27  
**Branch:** `cursor/pmp-mastery-engine-phase-b-e932`  
**Mode:** Audit + controlled hardening only  
**Prior:** B foundation, B.1 Knowledge Pack (26 ECO / 8 People), ECO source audit

---

## Executive Summary

Phase B built a **real knowledge/mastery data layer** (ECO → PD → concept → skill → question metadata → evidence helpers). It is **not yet a complete Mastery Engine**: evidence aggregation is not wired into runtime practice/exam flows, confidence is schema-only, retention Day 0–30 is not live, and **6 ECO tasks / 30 skills / 21 concepts** cannot currently prove mastery from the protected 200 bank.

| Verdict dimension | Result |
|-------------------|--------|
| Taxonomy integrity (26 ECO, T07/T08) | **Strong** |
| Knowledge Pack alignment | **Strong** (v1.1) |
| Question content protection | **Strong** |
| Meaningful assessment coverage | **Partial** |
| Mastery ≠ score in runtime | **Partial** (model yes, product no) |
| Ready for Phase C adaptive selection? | **B — READY AFTER SPECIFIC P1 FIXES** |

**Architectural Readiness (PLA-internal, not PMI): 64/100**

---

## Architecture Map

```
ECO taxonomy (eco-taxonomy.ts) ──26──┐
PMBOK PDs (pmbok8-domains.ts) ──7+Q──┤
Concept graph (concept-graph.ts) ─58─┤
Skills (mastery-skills.ts) ──────64──┼─► question-metadata.ts ─► QuestionMasteryMetadata
Misconceptions (misconceptions.ts)26─┤         │
Coverage / duplicates / integrity ───┘         │
                                               ▼
                         Attempt helpers (weakness / confidence / retention / mastery-states)
                                               │
                    ┌──────────────────────────┴──────────────────────────┐
                    ▼                                                     ▼
         LIVE product path                                      Phase B prep (not wired)
   exam-service → classifyError (9)                   confidenceLevel schema?
   readiness V2 (exam signals)                        retention 0/1/3/7/14/30
   spaced-repetition skill 1/3/7                      SkillMasterySnapshot
   corrective → recommendation                        error-model-ext
   ConceptMastery WEAK/LEARNING/MASTERED              masterability / integrity
```

**Dual layers retained:** `assessment-engine/eco-proxy-2026.ts` + `mastery-engine/eco-taxonomy.ts` (bridged by legacy codes).

---

## Master Chain Audit

| FROM | TO | EXISTS | QUALITY | GAP | RECOMMENDATION |
|------|-----|--------|---------|-----|----------------|
| ECO Domain | ECO Task | YES | Strong | — | Keep |
| ECO Task | PMBOK PD | YES | Medium | Heuristic legacy map | Document; refine before C |
| PMBOK PD | Concept | YES | Medium | Uneven depth | P2 content |
| Concept | Sub-concept | YES | Medium | Cross-listed confusion pairs | OK; prefer relatedIds later |
| Sub-concept | Skill | PARTIAL | Weak | Many confusion concepts borrow skills | P1 observability |
| Skill | Question | PARTIAL | Weak | 30 skills with 0 Q evidence | Phase D coverage |
| Question | Attempt | YES | Strong (exam) | Confidence not written | P1 wire confidence |
| Attempt | Error | YES | Medium | 9 categories metadata-driven | Keep; extend distractors later |
| Error | Misconception | PARTIAL | Weak | Ext layer needs caller IDs | Wire error-model-ext |
| Misconception | Weakness | PARTIAL | Weak | Helpers exist, unused live | Phase C |
| Weakness | Review | PARTIAL | Medium | Skill 1/3/7 live | Align schedules |
| Review | Retention | PARTIAL | Weak | Prep ≠ live | Unify before C |
| Retention | Mastery | PARTIAL | Weak | Snapshot path fixed in B.2; not productized | Phase C |

---

## ECO Coverage Audit

| Task | Concepts | Skills | Primary Q | Masterability | Status |
|------|--------:|-------:|----------:|---------------|--------|
| PEOPLE-T01 | 1 | 1 | 0 | NO | RED |
| PEOPLE-T02 | 4 | 5 | 17 | YES | GREEN |
| PEOPLE-T03 | 4 | 4 | 17 | YES | GREEN |
| PEOPLE-T04 | 7 | 6 | 20 | YES | GREEN |
| PEOPLE-T05 | 3 | 2 | 0 | PARTIAL | AMBER |
| PEOPLE-T06 | 2 | 1 | 0 | PARTIAL | AMBER |
| PEOPLE-T07 | 1 | 1 | 0 | NO | RED |
| PEOPLE-T08 | 2 | 3 | 1 | PARTIAL | AMBER |
| PROCESS-T01 | 4 | 3 | 2 | PARTIAL | AMBER |
| PROCESS-T02 | 3 | 3 | 19 | YES | GREEN |
| PROCESS-T03 | 3 | 2 | 14 | YES | GREEN |
| PROCESS-T04 | 2 | 2 | 1 | PARTIAL | AMBER |
| PROCESS-T05 | 1 | 2 | 1 | PARTIAL | AMBER |
| PROCESS-T06 | 3 | 3 | 0 | NO | RED |
| PROCESS-T07 | 4 | 3 | 20 | YES | GREEN |
| PROCESS-T08 | 3 | 3 | 20 | YES | GREEN |
| PROCESS-T09 | 2 | 2 | 0 | NO | RED |
| PROCESS-T10 | 1 | 2 | 0 | NO | RED |
| BUSINESS-T01 | 2 | 2 | 0 | PARTIAL | AMBER |
| BUSINESS-T02 | 1 | 2 | 12 | YES | GREEN |
| BUSINESS-T03 | 3 | 2 | 21 | YES | GREEN |
| BUSINESS-T04 | 6 | 5 | 0 | PARTIAL | AMBER |
| BUSINESS-T05 | 3 | 4 | 21 | YES | GREEN |
| BUSINESS-T06 | 1 | 2 | 0 | NO | RED |
| BUSINESS-T07 | 1 | 2 | 13 | YES | GREEN |
| BUSINESS-T08 | 1 | 2 | 1 | PARTIAL | AMBER |

**Masterability:** YES 11 · PARTIAL 9 · NO 6

---

## PMBOK 8 Performance Domain Audit

7 PDs + `KN-QUALITY` cross-cutting. Quality is **not** an 8th PD.

| PD | Concepts | Notes |
|----|--------:|-------|
| PD-GOVERNANCE | Present | Thin primary Q (BE-01 gap) |
| PD-SCOPE | Strong | Scope + change links |
| PD-SCHEDULE | Strong | Bank heavy |
| PD-FINANCE | Present | PROCESS-T06 primary = 0 (RED) |
| PD-STAKEHOLDERS | Strong | T04/T08 distinction preserved |
| PD-RESOURCES | Medium | Leadership + resources |
| PD-RISK | Strong | Bank heavy; domain PARTIAL vs ECO Business |

Source confidence for PD paraphrases remains **MEDIUM** until full PMBOK import.

---

## Concept Graph Audit

| Metric | Value |
|--------|------:|
| Concepts | 58 |
| Sub-concepts (parentConceptId) | 33 |
| Empty ecoTaskIds / skills arrays on records | 0 |
| Concepts owning 0 skills in `MASTERY_SKILLS` | 19 |
| Graph integrity P0 | 0 |

**Findings:** 19 confusion/distinction concepts borrow skills from parents — assessable only via related skills (**PARTIAL** masterability). No invented concepts in B.2.

**Hardening:** Added `collaboration-vs-compromise` to `conflict-management.subConceptIds` (parent omit fix).

---

## Sub-Concept Audit

~33 sub-concepts. Cross-listing of confusion pairs under multiple parents is intentional pedagogy; integrity check uses **inverse** rule (parent must list declared children).

Gaps: many sub-concepts lack exclusive owned skills and exclusive question evidence.

---

## Skill Graph Audit

| Class | Approx | Meaning |
|-------|--------|---------|
| A observable | ~34 | Linked to ≥1 Q |
| B partial | ~10 | Thin evidence |
| C abstract / borrow-only | ~19 concepts share | Distinction nodes |
| D duplicate | Low | No mass duplicates found |
| E unlinked to assessment | **30** | 0 question evidence |

Cognitive levels: APPLICATION 29, JUDGMENT 17, ANALYSIS 12, UNDERSTANDING 4, RECOGNITION 2, **TRANSFER 0**.

**Masterability skills:** YES 24 · PARTIAL 10 · NO 30

---

## Misconception Audit

26 pairs — required set present (communication↔engagement, conflict↔issue, risk↔issue, etc.). All have `affectedSkillIds` and `ecoTaskIds`.

**Gap:** Diagnosability requires wiring `error-model-ext` + attempt confidence + distractor rationale. Graph alone ≠ diagnosis.

---

## 200 Question Metadata Audit

| Status | Count | Interpretation |
|--------|------:|----------------|
| VERIFIED | 120 | Heuristic high confidence |
| PARTIAL | 80 | Domain / processArea heuristic |
| UNVERIFIED | 0 | — |
| Technically mapped | **200/200** | |
| Meaningfully strong | ~120 | |
| Pedagogically thin primary tasks | 10 ECO RED | |

Classification used: VERIFIED / PARTIAL / (WEAK not stored — treat thin primary as coverage weakness). No INVALID found.

**Stems:** UNCHANGED (fingerprint locked).

---

## 80 PARTIAL Audit

| Bucket | Count | Nature | Action |
|--------|------:|--------|--------|
| ECO Business primary vs bank PROCESS domain (Risk/Change) | 41 | Legacy vs ECO duality | **Architecture:** keep both; do not rewrite stems |
| `processArea.includes("management")` heuristic | 25 | Over-flagging | Soften heuristic before C |
| Other mismatches | 14 | Mixed | Case-by-case |

**Types introduced:** `LegacyBankDomain` vs `EcoMasteryDomain` in `types.ts` — document duality without mutating questions.

**B.2:** No bulk remapping of 80 PARTIAL (deferred).

---

## Mastery State Audit

States: `UNKNOWN → EXPOSED → DEVELOPING → FRAGILE → FUNCTIONAL → STRONG → MASTERED`

MASTERED requires: rate ≥85, cognitive ≥ JUDGMENT, ≥5 distinct questions, ≥7 days exposure, confidence calibrated — **not** “3 correct.”

**B.2 fix:** `buildSkillMasterySnapshot` now computes `daysSinceFirstExposure` and distinct keys (`questionExternalKey`) — MASTERED reachable in theory.

**Gap:** Live product still uses `ConceptMastery` WEAK/LEARNING/MASTERED (3-level) for lessons — dual taxonomy.

---

## Confidence Audit

| Capability | Status |
|------------|--------|
| Types + helpers | YES |
| Prisma optional fields | YES |
| API write on quiz/exam | **NO** |
| Calibration in mastery derivation | Model YES / Product NO |

Four pedagogical cells (correct/incorrect × high/low confidence) are representable but **not captured**.

---

## Error Model Audit

**9 live categories:** KNOWLEDGE_GAP, MISREAD_SCENARIO, WRONG_PRIORITY, WRONG_ACTION, AGILE_MINDSET, STAKEHOLDER_ERROR, RISK_ERROR, PROCESS_ERROR, OTHER.

**Extended kinds (prep):** conceptual-gap, misconception, application-error, etc.

ERROR ≠ MISCONCEPTION is modeled in extension layer but not fully productized.

---

## Retention Audit

| Layer | Schedule | Live? |
|-------|----------|-------|
| Skill spaced review | 1 / 3 / 7 days | **YES** |
| Mastery-engine retention | 0/1/3/7/14/30 | Prep only |

**Recommendation:** Keep **skill-level** retention as primary; add concept-level next; **item-level** only for high-value or chronically failed items — do not overbuild item tables now.

---

## Coverage Matrix Audit

`coverage-matrix.ts`: ECO × concept × skill × question counts; GREEN≥3 / YELLOW 1–2 / RED 0.

Useful for gaps; does not measure scenario depth or cognitive variety.

---

## Duplicate Detection Audit

Heuristic Jaccard + metadata patterns. Types include exact/near/same-scenario/same-reasoning/same-misconception. Adequate for Phase B hooks; not ML. Two questions same skill ≠ duplicate — preserved.

---

## Lesson Alignment Audit

77 lessons; **18 thin** (1Q, no `situation`) — documented Phase A, not rewritten.

Themes: people soft skills, process periphery (initiation/estimation/resources/integration), business periphery, agile ceremony, hybrid edges.

Bridge: lesson `skillSlug` → PLA Skill → optional `plaSkillSlug` on mastery skills → concept → ECO. Lessons do **not** store ECO IDs.

---

## Masterability Test

| Layer | YES | PARTIAL | NO |
|-------|----:|--------:|---:|
| ECO tasks | 11 | 9 | 6 |
| Concepts | 13 | 24 | 21 |
| Skills | 24 | 10 | 30 |

| Mastery capability | YES | PARTIAL | NO |
|--------------------|----:|--------:|---:|
| Task mastery | | ✓ | |
| Concept mastery | | ✓ | |
| Skill mastery | | ✓ | |
| Error diagnosis | | ✓ | |
| Misconception diagnosis | | ✓ | |
| Confidence interpretation | | | ✓ (capture) |
| Retention | | ✓ | |
| Evidence aggregation | | ✓ | |

---

## Architectural Readiness Score

**64/100** (PLA-internal)

| Dimension | Score |
|-----------|------:|
| taxonomyIntegrity | 95 |
| conceptIntegrity | 78 |
| skillObservability | 52 |
| diagnosticQuality | 58 |
| evidenceSufficiency | 48 |
| retentionSupport | 42 |
| traceability | 72 |

---

## P0 / P1 / P2 / P3 Findings

### P0 — correctness / source integrity
- None open after B.1 (ECO 26 verified; T07/T08 official).
- Protected bank fingerprint now permanent.

### P1 — mastery architecture blockers (before Phase C)
1. Confidence not captured on attempts (schema only).
2. Mastery evidence helpers not wired into exam/quiz completion path.
3. 6 ECO tasks with masterability NO (esp. T07, T06 finance, T09, T10, T01, BE-06) — adaptive selection must not pretend coverage.
4. Soften / replace PARTIAL heuristic that over-flags `*management` processAreas.
5. Dual mastery taxonomies (3-level ConceptMastery vs 7-state MasteryState) need bridging strategy.

### P2 — important improvements
- 19 concepts with borrowed-only skills
- TRANSFER cognitive level unused
- Cross-listed subConceptIds → migrate to relatedConceptIds
- error-model-ext not called from exam-service
- Lesson ECO linkage explicit metadata

### P3 — future
- Item-level retention
- Distractor-aware errors
- Semantic ML duplicates
- Socratic tutor
- Question generation 201+

---

## Fix Now (implemented in B.2)

| Fix | Why |
|-----|-----|
| `integrity.ts` + masterability + fingerprint | Permanent protection & auditability |
| Locked bank aggregate hash test | Detect stem mutations |
| `buildSkillMasterySnapshot` evidence (days + distinct Q + max cognitive) | MASTERED reachable when evidence exists |
| `LegacyBankDomain` / `EcoMasteryDomain` types | Document duality |
| Parent `subConceptIds` include `collaboration-vs-compromise` | Graph integrity |
| B.2 tests | Regression gate |

## Fix Before Phase C

1. Wire optional confidence on exam/quiz attempt APIs (minimal UX).
2. On session complete: call weakness/mastery snapshot with metadata + externalKey.
3. Adaptive selection must respect RED/NO masterability (no false coverage).
4. Soften PARTIAL mapping heuristic.
5. Document ConceptMastery ↔ MasteryState bridge.

## Deferred

- Remap 80 PARTIAL bulk
- Generate T07/finance/closure questions
- Rewrite 18 thin lessons
- Item-level retention tables
- Full tutor / readiness G

## Risks

| Risk | Mitigation |
|------|------------|
| Treating 200 mapped as mastery-ready | Masterability report |
| Adaptive over thin tasks | Gate on coverage status |
| Dual ECO proxy drift | Keep bridge tests |
| Confidence never collected | P1 before C |

---

## Test Results

| Suite | Result |
|-------|--------|
| `npm run lint` | ✅ PASS |
| `npm run test` | ✅ **318/318** PASS |
| `npm run build` | ✅ PASS |
| `npm run test:e2e -- --workers=1` | ✅ **58/58** PASS |

Protected bank aggregate: `d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2`

---

## Files Modified

- `src/modules/mastery-engine/integrity.ts` (new)
- `src/modules/mastery-engine/weakness-model.ts`
- `src/modules/mastery-engine/types.ts`
- `src/modules/mastery-engine/index.ts`
- `src/modules/mastery-engine/concept-graph.ts` (1 subConceptIds fix)
- `src/tests/pmp-mastery-phase-b2-integrity.test.ts` (new)
- `PMP_MASTERY_ENGINE_PHASE_B2_MASTERY_MODEL_AUDIT.md` (this file)
- `CHECKPOINT_PMP_MASTERY_ENGINE_PHASE_B.md` (B.2 note)

## Files Unchanged

- Protected exam bank stems/options/answers/scoring/IDs
- Question mastery metadata rows (no bulk remap)
- Exam simulator / scoring / UI
- Lessons / lesson questions
- Adaptive selection (not started)

---

## Recommendation

**Verdict B — READY AFTER SPECIFIC P1 FIXES.**

Phase C (adaptive) may begin **only after** confidence capture + attempt→mastery wiring + coverage-aware selection gates. Do **not** generate 201–1000 until Phase D with explicit approval.

---

## Summary Tables

| Layer | Total | Strong | Partial | Weak | Missing |
|-------|------:|-------:|--------:|------:|--------:|
| ECO Tasks | 26 | 11 | 9 | 0 | 6 |
| PMBOK PD | 7 | 4 | 3 | 0 | 0 |
| Concepts | 58 | 13 | 24 | 0 | 21 |
| Sub-concepts | 33 | ~8 | ~15 | ~10 | 0 |
| Skills | 64 | 24 | 10 | 0 | 30 |
| Misconceptions | 26 | 10 | 16 | 0 | 0 |
| Questions | 200 | 120 | 80 | 0 | 0 |

| Mastery capability | YES | PARTIAL | NO |
|--------------------|----:|--------:|---:|
| Task mastery | 0 | 1 | 0 |
| Concept mastery | 0 | 1 | 0 |
| Skill mastery | 0 | 1 | 0 |
| Error diagnosis | 0 | 1 | 0 |
| Misconception diagnosis | 0 | 1 | 0 |
| Confidence interpretation | 0 | 0 | 1 |
| Retention | 0 | 1 | 0 |
| Evidence aggregation | 0 | 1 | 0 |

*(Capability table: one mark per row indicating overall system status.)*

---

## Final Decision Gate

**B — READY AFTER SPECIFIC P1 FIXES**

Blockers before Phase C:
1. Confidence capture on attempts  
2. Wire mastery evidence on attempt completion  
3. Coverage-aware selection (no adaptive over NO/RED tasks as if covered)  
4. Soften PARTIAL heuristic  

**STOP — do not start Phase C or question generation without approval.**
