# PMP Mastery Engine — Phase A Audit

**Date:** 2026-08-26  
**Branch:** `cursor/pmp-mastery-engine-phase-a-e932`  
**Phase:** **A — AUDIT ONLY** (no code, seed, exam stem, or architecture changes)  
**Baseline:** 77 lessons · 134 lesson Q · 200 exam Q · Quick 10 / Domain 25 / Mock 60 / Full 180

---

## Executive Summary

PLA already has a **production-grade PMP practice stack**: bilingual lessons, protected 200-question exam bank, deterministic blueprints, retry, error taxonomy, readiness V2, recommendations, spaced review, and AI Tutor.

It is **not yet a Mastery Engine** in the sense of this mission:

| Capability | Status |
|------------|--------|
| Exam simulation | **Strong** |
| Adaptive initial selection | **Missing** (retry-only) |
| ECO task ontology | **Missing** |
| Concept → sub-concept graph | **Missing** (flat skills) |
| Item-level retention | **Missing** (skill-level only) |
| Distractor-aware errors | **Missing** |
| Confidence calibration | **Missing** |
| Path to 1,000 high-quality Q | **Designed, not built** |
| Uploaded PMBOK 8 / PMI course PDFs | **Not present in workspace** |

**Overall Phase A grade for Mastery Engine readiness: C+**  
(Practice simulator: **B+**; Mastery learning system: **C**)

### Critical source finding

> **No PMBOK Guide PDFs, French PMBOK edition, or PMI Instructor Course files were found in `/agent`.**  
> Mastery Engine work must **not invent PMI requirements** and **must not copy PMBOK text**.  
> Conceptual ECO/PMBOK 8 alignment requires either (a) user-supplied source packs, or (b) ECO-proxy metadata designed by PLA without reproducing protected content.

**IP rule (non-negotiable):** strengthen coverage with **original PLA vignettes**; keep disclaimers; never present PLA as official PMI / PMBOK reproduction.

---

## 1. Current Content Structure

| Layer | Count | Notes |
|-------|------:|-------|
| Modules | 7 | foundations, people, process, business-environment, agile, hybrid, situational-thinking |
| Lessons | 77 | Locked by tests |
| Lesson questions | 134 | `1 + questions[]` |
| Situations | 56/77 | Post Mission 2–4 |
| Multi-question lessons | 49/77 | |
| Exam bank | **200** | `pmp-exam-001`…`200`, stable `externalKey` |
| Thin lessons (1Q, no situation) | **18** | People soft / process periphery / agile ceremony / hybrid edges |

### Lesson skill model
- Umbrella: `pmp-people`, `pmp-process`, `pmp-hybrid`, …
- Granular: `leadership`, `risk-management`, `schedule`, …
- Mission 4 fixed: hybrid lessons → `pmp-hybrid`; `team-development` skill aligned

---

## 2. Question Architecture (Exam Bank)

### Fields today (`ExamBankQuestionSeed`)
`externalKey`, `domain`, `deliveryApproach`, `processArea`, `examDifficulty`, `scenarioType`, `learningObjective`, `skills[]`, bilingual scenario/prompt/explanation, options (+ wrong explanations)

### Missing for Mastery Engine
- ECO task ID / ECO mapping
- concept / sub-concept
- cognitive level beyond `learningObjective`
- common trap / prerequisite
- confidence metadata
- distractor taxonomy per option
- primary remediation lesson ID

### Distribution (200)
| Dimension | Balance |
|-----------|---------|
| Domain | PEOPLE 55 · PROCESS 105 · BUSINESS 40 |
| Delivery | AGILE/HYBRID/PREDICTIVE ~67 |
| Difficulty | EASY/MEDIUM/HARD ~67 |
| Types | Mostly SINGLE_CHOICE; few T/F & MULTI |

### HARD CONSTRAINT (confirmed)
Do **not** casually modify existing stems, options, correct answers, IDs, or scoring.  
Upsert is by `externalKey` — any seed edit overwrites content in place.  
**18 misread upgrades** already mutated some stems historically — future changes need defect reports first.

---

## 3. ECO Mapping

**None formal.**  
Proxy today: PLA `domain` + free-text `processArea` + `scenarioType` + `skills[]`.

`exam-blueprint.ts` is explicitly **PLA proprietary, not PMI official**.

### Implication for Phase B
Introduce an **ECO-proxy layer** (PLA-owned task codes mapped to People/Process/Business) **without** copying PMI ECO text into learner-facing content. Tag new questions at authoring time; optionally backfill metadata on the 200 **without changing stems**.

---

## 4. Assessment Engine

### Modes preserved
| Mode | Q | Timer |
|------|--:|------:|
| Quick 10 | 10 | 15m |
| Domain 25 ×3 | 25 | 35m |
| Mock 60 | 60 | 80m |
| Full 180 | 180 | 230m |

### Selection today
1. Blueprint quotas (domain mix)
2. Exclude last 3 sessions’ question IDs
3. Seeded shuffle + soft caps (skill / scenarioType)
4. Fail loud if bank insufficient

**Strength:** deterministic, testable, no silent shortfall.  
**Gap:** **not adaptive** on initial assembly — ignores weakness, retention, confidence.

### Full 180 headroom risk
180 from 200 leaves ~20 unused after exclusions/caps — **tight** for repeated full sims. Bank expansion (Phase D) is required for mastery-scale practice, not vanity.

---

## 5. Analytics / Error / Retry / Readiness

### Error taxonomy (9 categories)
`KNOWLEDGE_GAP`, `MISREAD_SCENARIO`, `WRONG_PRIORITY`, `WRONG_ACTION`, `AGILE_MINDSET`, `STAKEHOLDER_ERROR`, `RISK_ERROR`, `PROCESS_ERROR`, `OTHER`

**Limitation:** classified from **question metadata**, not chosen distractor → coarse; AGILE/stakeholder tags can preempt sequencing errors.

### Retry (5 types)
WRONG_QUESTIONS · WEAK_SKILLS · WEAK_DOMAIN · ERROR_TYPE · MIXED — **best existing adaptive surface**.

### Readiness V2
Weighted recent/domain/average + retry + trend + unanswered + repeated mistakes + weak/mastered skills.  
READY gates: composite ≥72, weakSkills ≤2, etc.  
**Disclaimer:** Practice Readiness ≠ official PMI score.

### Gaps vs mission model
| Need | Gap |
|------|-----|
| Knowledge / Understanding / Application / Judgment / Transfer / Retention | Partially via `learningObjective` + scenarioType; not first-class |
| Confidence vs performance | Not captured |
| Spaced review schedule Day 0→30 | Skill intervals 1/3/7d only |
| Mastery ≠ raw % | Partially (difficulty not weighted in mastery) |

---

## 6. Adaptive Capabilities

| Area | Exists? |
|------|---------|
| Weakness-targeted **retry** | Yes |
| Weakness-targeted **initial** Quick/Mock/Full | **No** |
| ECO-task weakness | **No** |
| Concept confusion graphs | **No** |
| Time-since-exposure item selection | Skill-level only |
| Duplicate / near-duplicate detection | Tests for uniqueness; no semantic duplicate engine |
| Coverage report automation | Partial (tests + docs); no live “holes” dashboard |

---

## 7. Tutor

| Mode | Status |
|------|--------|
| EXPLAIN / HINT / TEACH / EXPLAIN_MISTAKE | **Yes** |
| SOCRATIC / COACH / RAPID FIRE / WEAKNESS / BRUTAL / TEACH-BACK | **No** |
| Exam review EXPLAIN_MISTAKE + errorType | **Yes** |
| PMBOK reproduction blocked in prompts | **Yes** |

---

## 8. Lessons ↔ Exam Connection

- No FK exam question → lesson  
- Bridge: skills + `corrective-learning.ts` maps + recommendations  
- Fail feedback: explanationCorrect + wrong option why + corrective hint  
- **Missing:** “related lesson + follow-up question” as a first-class post-error UX contract

---

## 9. Content Gaps (toward judgment mastery & 1,000 Q)

### High-priority holes
1. **Cost / EVM** — lesson exists; **0 exam `cost` skill tags**; no numeric-lite items  
2. **Procurement** — ~1% of bank  
3. **Integration / resources** — thin lesson + thin exam  
4. **Engagement vs communication** discrimination  
5. **Conflict vs issue** (interpersonal vs log)  
6. **QA vs QC** situational traps  
7. Thin 18 lessons (assessment depth)

### Over-represented relative to typical ECO weights
- BUSINESS_ENVIRONMENT at 20% of bank (useful pedagogically; ECO exam weight often lower)

---

## 10. Test Coverage

| Area | Coverage |
|------|----------|
| Exam bank 200 + FR/EN + IP | Strong |
| Blueprint / scoring / readiness / retry | Strong |
| Content quality / hybrid skills | Strong |
| E2E exam journeys | Strong (58 E2E suite includes PMP) |
| Adaptive initial selection | N/A (missing) |
| ECO mapping | N/A |
| Semantic duplicates | Weak / absent |
| FULL_PMP 180 stress with headroom | Thin |

Baseline expected: Vitest **281**, E2E **58**, build PASS (confirm in checkpoint).

---

## 11. Technical Debt

| Item | Severity |
|------|----------|
| No ECO-proxy ontology | **P0** for Mastery Engine |
| Flat skills / no sub-concepts | **P0** |
| Metadata-only error class | **P1** |
| Initial exams non-adaptive | **P1** |
| FULL_PMP headroom (200→180) | **P1** |
| Mastery dilution (exam blended with all quiz attempts) | **P2** |
| Orphan `hybrid-delivery` in EXAM_SKILLS list | **P3** |
| No uploaded PMBOK sources in workspace | **P0 process** (blocks “PMBOK 8 grounded” claims) |

---

## 12. Recommended Phased Plan (do not start yet)

Aligned to mission sequence; refined by audit:

### PHASE B — Mastery Model (data layer)
- ECO-proxy tasks (PLA-owned IDs)  
- Concept / sub-concept  
- Attempt + weakness + confidence (optional)  
- Item-level or concept-level retention hooks  
- **No stem rewrites of the 200**

### PHASE C — Adaptive Engine
- Initial Quick/Domain selection using weakness + recency + difficulty  
- Preserve blueprint integrity  
- Tests for selection + no immediate duplicates  

### PHASE D — Question Bank Expansion (incremental)
| Batch | Focus |
|-------|--------|
| 201–400 | Cost/EVM, procurement, integration, resources, QA/QC traps |
| 401–600 | People depth + engagement vs communication + conflict vs issue |
| 601–800 | Business + agile edge cases; rebalance domain weights |
| 801–1000 | Hybrid multi-stream, HARD judgment, cross-ECO, numeric-lite |

**Quality > quantity.** Never generate 800 in one blind pass.  
**Original PLA only** — no PMBOK copy.

### PHASE E — QA
Coverage report, duplicate detection, ambiguity checks, FR/EN parity  

### PHASE F — Tutor
Socratic / teach-back / weakness / rapid-fire modes  

### PHASE G — Readiness
Multi-signal readiness (ECO-proxy weak tasks, retention, confidence)  

### PHASE H — Full regression  

---

## 13. Definition of Done Mapping (honest)

| Criterion | Today |
|-----------|-------|
| Existing functionality stable | **Yes** |
| 200 validated Q protected | **Yes** (policy) |
| ECO coverage demonstrably strong | **No** (no ECO layer) |
| PMBOK 8 alignment demonstrable | **Blocked** without source pack / proxy design |
| Judgment-heavy questions | **Partial** (good situational density) |
| Weakness identification | **Partial** (skill/domain/error) |
| Adaptive to weaknesses | **Retry only** |
| Spaced review | **Skill-level 1/3/7d** |
| Random + domain practice | **Yes** |
| Readiness > one score | **Partial (V2)** |
| Path to 1,000 Q | **Planned** |
| Mastery ≠ memorization | **Content yes / system incomplete** |

---

## 14. Phase A Deliverables / Non-actions

### Created
- This audit  
- Checkpoint  

### Explicitly NOT done (by design)
- No Prisma / API / engine / UI changes  
- No exam stem edits  
- No question generation  
- No tutor rewrite  
- No Phase B start  

### Blocker for “PMBOK 8 grounded” work
Provide upload access to:
1. PMBOK Guide 8 (EN)  
2. PMBOK Guide 8 (FR) if required  
3. PMI PMP Instructor materials (if licensed for this use)  
4. Or authorize **ECO-proxy-only** alignment without source PDFs  

Until then: build Mastery Engine on **PLA original + ECO-proxy**, not claimed PMBOK extracts.

---

**STOP — Phase A complete. Await approval before Phase B.**
