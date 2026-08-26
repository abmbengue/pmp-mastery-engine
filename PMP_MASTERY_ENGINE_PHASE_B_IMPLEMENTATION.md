# PMP Mastery Engine — Phase B Implementation

**Date:** 2026-08-26  
**Branch:** `cursor/pmp-mastery-engine-phase-b-e932`  
**Phase:** B — Master Knowledge Model + Concept Graph + Weakness Model  
**Status:** Foundation complete (no adaptive engine, no question generation)

---

## 1. Architecture existante utilisée

Phase B **adds a metadata layer** on top of the stable Practice / Exam Simulator. No exam selection logic, scoring, or UI redesign was changed.

| Existing asset | Role in Phase B |
|----------------|-----------------|
| `prisma/seed/pmp-exam-bank-data.ts` | Protected 200 stems (`PMP_EXAM_BANK_STEMS`) + tagged bank (`PMP_EXAM_BANK`) |
| `prisma/seed/pmp-exam-eco-tags.ts` | Legacy `PE-xx` / `PR-xx` / `BE-xx` resolver → feeds stable ID mapping |
| `src/modules/assessment-engine/eco-proxy-2026.ts` | Prior Phase B proxy (retained; bridged via `legacyToStableEcoId`) |
| `src/modules/assessment-engine/mastery-model.ts` | Prior helpers (retained; not removed) |
| `classifyError` / `ExamError` | Extended via `error-model-ext.ts` — not replaced |
| Spaced review (skill-level) | Retention schedule prepared in `retention.ts` (configurable, PLA proprietary) |
| Readiness V2, recommendations, AI Tutor | Untouched |

**Design principle:** small metadata layer + concept graph + mastery data model + mapping layer — not a global refactor.

---

## 2. Nouveaux modèles

### Runtime module: `src/modules/mastery-engine/`

| File | Model |
|------|-------|
| `types.ts` | Shared enums & interfaces (source, cognitive, mastery, confidence, metadata) |
| `eco-taxonomy.ts` | 26 ECO tasks with stable IDs |
| `pmbok8-domains.ts` | 7 PMBOK 8 Performance Domains + cross-cutting Quality |
| `concept-graph.ts` | Concept / sub-concept graph |
| `mastery-skills.ts` | Measurable skills linked to concepts |
| `misconceptions.ts` | Confusion pairs with explanations |
| `question-metadata.ts` | `QuestionMasteryMetadata` builder (no stem edits) |
| `mastery-states.ts` | UNKNOWN → MASTERED taxonomy |
| `confidence.ts` | VERY_LOW … VERY_HIGH calibration helpers |
| `retention.ts` | Day 0/1/3/7/14/30 schedule (configurable) |
| `error-model-ext.ts` | Extends legacy error categories |
| `weakness-model.ts` | Skill/concept/task weakness signals |
| `coverage-matrix.ts` | ECO × concept × skill coverage |
| `duplicate-detection.ts` | Heuristic duplicate architecture (no ML) |
| `knowledge-pack.ts` | Canonical JSON export |
| `index.ts` | Barrel exports |

### Database (Prisma)

**Migration:** `prisma/migrations/20260826214500_phase_b_mastery_metadata/`

- `QuestionMasteryMetadata` — external mapping keyed by `externalKey` (`pmp-exam-001` … `pmp-exam-200`)
- Optional `confidenceLevel` on `QuizAttempt` and `ExamAnswer` (schema-ready; UX not imposed)

**Seed:** `prisma/seed/pmp-question-mastery-metadata.ts` + upsert in `pmp-exam-bank.ts`

### Knowledge Pack (workspace exports)

| File | Purpose |
|------|---------|
| `knowledge/PMP_MASTER_KNOWLEDGE_PACK.json` | Machine-readable pack |
| `knowledge/PMP_MASTER_KNOWLEDGE_PACK.md` | Human summary |
| `knowledge/CURSOR_IMPORT_PMP_MASTER_KNOWLEDGE.md` | Import instructions for future agents |

---

## 3. Nouveaux IDs

### ECO stable task IDs

Format: `{DOMAIN}-T{nn}`

| Domain | IDs | Weight |
|--------|-----|-------:|
| PEOPLE | `PEOPLE-T01` … `PEOPLE-T08` | 33% |
| PROCESS | `PROCESS-T01` … `PROCESS-T10` | 41% |
| BUSINESS | `BUSINESS-T01` … `BUSINESS-T08` | 26% |

Legacy bridge: `PE-04` → `PEOPLE-T04`, `PR-06` → `PROCESS-T06`, `BE-05` → `BUSINESS-T05`, etc.

### PMBOK 8 Performance Domains

| ID | Name |
|----|------|
| `PD-GOVERNANCE` | Governance |
| `PD-SCOPE` | Scope |
| `PD-SCHEDULE` | Schedule |
| `PD-FINANCE` | Finance |
| `PD-STAKEHOLDERS` | Stakeholders |
| `PD-RESOURCES` | Resources |
| `PD-RISK` | Risk |

**Cross-cutting (not a 7th PD heading):** `KN-QUALITY` — linked to `PROCESS-T07` and quality concepts.

### Concept IDs

Slug-style, e.g. `stakeholder-engagement`, `communication-vs-engagement`, `risk-vs-issue`.

### Skill IDs

Prefix `skill-`, e.g. `skill-distinguish-communication-engagement`, `skill-select-conflict-response`.

### Misconception IDs

Prefix `mc-`, e.g. `mc-communication-engagement`, `mc-conflict-issue`.

---

## 4. ECO taxonomy

Source hierarchy for exam domains/tasks: **PMI PMP ECO July 2026** (FR PDF in uploads; structure HIGH confidence).

26 tasks implemented with bilingual titles, legacy codes, PLA exam domain mapping, and focus keywords.

Delivery split (PLA proxy, configurable): **40% predictive / 60% agile+hybrid**.

---

## 5. PMBOK taxonomy

7 Performance Domains from mission spec + ECO crosswalk helpers.

**Quality** is **not** modeled as an 8th PD. It appears as:

- Cross-cutting knowledge node `KN-QUALITY`
- Concepts: `quality-management`, `quality-cost-of-quality`, etc.
- ECO link: `PROCESS-T07` (Plan and optimize quality)

Source confidence for PD paraphrases: **MEDIUM** until full PMBOK 8 pack is imported.

---

## 6. Concept graph

**58 concepts** (25 parent concepts + **33 sub-concepts** with `parentConceptId`).

Each `ConceptRecord` includes:

- `id`, bilingual names/descriptions
- `sourceType`, `sourceConfidence`, `status`
- `ecoDomains[]`, `ecoTaskIds[]`
- `pmbokPerformanceDomains[]`
- `parentConceptId`, `subConceptIds[]`
- `prerequisiteConceptIds[]`, `relatedConceptIds[]`, `commonlyConfusedWith[]`
- `skillIds[]`, `difficulty`

Every ECO task has ≥1 linked concept (test-enforced).

---

## 7. Skill graph

**64 measurable skills** with:

- `id`, `conceptId`, bilingual name/description
- `prerequisiteSkillIds[]`
- `difficulty`, `cognitiveLevel`
- Optional `plaSkillSlug` bridge to existing PLA skills

Cognitive levels supported: RECOGNITION, UNDERSTANDING, APPLICATION, ANALYSIS, JUDGMENT, TRANSFER.

---

## 8. Misconception graph

**26 explicit confusion pairs** including all mission-required minimums:

| Pair | ID |
|------|-----|
| communication ↔ engagement | `mc-communication-engagement` |
| expectation ↔ requirement | `mc-expectation-requirement` |
| conflict ↔ issue | `mc-conflict-issue` |
| risk ↔ issue | `mc-risk-issue` |
| impediment ↔ issue | `mc-impediment-issue` |
| governance ↔ project-management | `mc-governance-pm` |
| leadership ↔ authority | `mc-leadership-authority` |
| coaching ↔ directing | `mc-coaching-directing` |
| empowerment ↔ delegation | `mc-empowerment-delegation` |
| quality-management ↔ inspection | `mc-quality-inspection` |
| prevention ↔ appraisal cost | `mc-prevention-appraisal` |
| failure ↔ prevention/appraisal | `mc-failure-prevention` |
| scope ↔ change-control | `mc-scope-change` |
| requested ↔ approved change | `mc-requested-approved` |
| predictive ↔ adaptive | `mc-predictive-adaptive` |
| adaptive ↔ hybrid | `mc-adaptive-hybrid` |
| effort ↔ duration | `mc-effort-duration` |
| activity ↔ milestone | `mc-activity-milestone` |
| resource-availability ↔ utilization | `mc-resource-availability-utilization` |
| output ↔ outcome | `mc-output-outcome` |
| output ↔ value | `mc-output-value` |
| status ↔ forecast | `mc-status-forecast` |
| reserve ↔ budget | `mc-reserve-budget` |
| risk-response ↔ issue-response | `mc-risk-response-issue-response` |
| collaboration ↔ compromise | `mc-collaboration-compromise` |
| root-cause ↔ symptom | `mc-root-cause-symptom` |

Each record: `confusionType`, bilingual explanation, `affectedSkillIds[]`, `relevantEcoTaskIds[]`.

---

## 9. Mastery model

### Mastery states

`UNKNOWN` → `EXPOSED` → `DEVELOPING` → `FRAGILE` → `FUNCTIONAL` → `STRONG` → `MASTERED`

**MASTERED** requires evidence beyond 3 easy correct answers (variety, cognitive level, time, calibration) — see `mastery-states.ts`.

### Prepared aggregates (Phase C)

Types and helpers for future:

- `skillMastery`, `conceptMastery`, `taskMastery`, `domainMastery`
- `SkillMasteryRecord` shape with attempts, weighted performance, retention, cognitive breakdown

### Confidence

`VERY_LOW` … `VERY_HIGH` on attempts; calibration helpers detect HIGH+wrong (misconception) vs LOW+correct (fragile).

### Retention

Configurable intervals: Day 0, 1, 3, 7, 14, 30 — **PLA proprietary**, not PMI.

Fields: `lastSeen`, `lastCorrect`, `lastIncorrect`, `reviewCount`, `retentionScore`, `nextReviewAt`.

---

## 10. Error model

Legacy `classifyError` / `ExamError` **unchanged**.

`error-model-ext.ts` adds extended kinds:

- `conceptual-gap`, `misconception`, `application-error`, `careless-error`
- `communication-error`, `strategy-error`, `knowledge-recall`
- `scope-confusion`, `risk-confusion`, `stakeholder-confusion`

Links: ERROR TYPE + CONCEPT + SKILL + MISCONCEPTION.

---

## 11. Retention model

`retention.ts` provides:

- Default schedule constant (overridable)
- `buildRetentionRecord()` from attempt history
- `nextReviewDate()` given interval index

Existing spaced review at skill level remains; concept/skill retention fields prepared for Phase C+.

---

## 12. Question mapping (200 protected items)

**Layer:** `QuestionMasteryMetadata` — stems/options/scoring **untouched**.

Each of **200/200** items mapped with:

| Field | Notes |
|-------|-------|
| `ecoDomain`, `ecoTaskId` | Stable ID |
| `ecoTaskIdsSecondary` | From legacy secondary tags |
| `pmbokPerformanceDomain` | Primary PD |
| `crossCutting` | e.g. `KN-QUALITY` when applicable |
| `primaryConceptId`, `secondaryConceptIds` | Supports multi-concept |
| `primarySkillId`, `secondarySkillIds` | Measurable skills |
| `cognitiveLevel`, `difficulty`, `approach` | From bank + inference |
| `misconceptionIds` | Scenario + concept linked |
| `mappingStatus` | VERIFIED / PARTIAL / UNVERIFIED |
| `mappingConfidence` | HIGH / MEDIUM / LOW / UNVERIFIED |
| `sourceType` | Typically `DERIVED_PEDAGOGICAL` |

### Mapping audit results

| Status | Count |
|--------|------:|
| VERIFIED | 120 |
| PARTIAL | 80 |
| UNVERIFIED | 0 |

**PARTIAL** primarily where bank `domain: PROCESS` conflicts with ECO Business primary for Risk/Change items (41 items) — metadata corrected without stem edits.

Integrity test: `PMP_EXAM_BANK[i].options === PMP_EXAM_BANK_STEMS[i].options` for all 200.

---

## 13. Coverage analysis

Matrix: **ECO task × concept × skill × existing questions**

Thresholds:

| Status | Question count |
|--------|---------------:|
| GREEN | ≥ 3 |
| YELLOW | 1–2 |
| RED | 0 |

### ECO tasks with RED (0 primary questions)

`PEOPLE-T01`, `PEOPLE-T05`, `PEOPLE-T06`, `PEOPLE-T07`,  
`PROCESS-T06`, `PROCESS-T09`, `PROCESS-T10`,  
`BUSINESS-T01`, `BUSINESS-T04`, `BUSINESS-T06`

### Graph gaps

- **42 concepts** with 0 tagged questions
- **30 skills** with 0 tagged questions

### Priority gaps (mission list)

1. Cost / EVM (`PROCESS-T06`)
2. Procurement (`PROCESS-T05` — YELLOW, thin)
3. Integration (`PROCESS-T01`)
4. Resources (`PROCESS-T04`)
5. Engagement vs communication
6. Conflict vs issue
7. Retention (architecture only — no UX yet)
8. Distractor-aware errors (prepared in error model)
9. Confidence (schema only)
10. Socratic tutor / teach-back (Phase C+)
11. Semantic duplicates (architecture in `duplicate-detection.ts`)

**No new questions generated in Phase B.**

---

## 14. Gaps & thin lessons

18 thin lessons identified in Phase A audit remain **documented, not rewritten**.

Coverage model represents lesson-linked concepts via shared `plaSkillSlug` / concept IDs. Full thin-lesson matrix deferred to **Phase D** (content expansion).

Representative thin areas: integration, resources, cost/finance, procurement depth, governance primary coverage.

---

## 15. Décisions architecturales

1. **Dual ECO layers retained:** legacy `eco-proxy-2026.ts` + new `eco-taxonomy.ts` with stable IDs and `legacyToStableEcoId()` bridge — avoids breaking existing seeds/tests.
2. **Metadata table separate from Question:** allows mapping corrections without touching protected stems.
3. **Mapping honesty:** domain mismatches → `PARTIAL`, never silent VERIFIED.
4. **Quality as cross-cutting:** aligns with PMBOK 8 structure guidance in mission spec.
5. **Confidence on schema, not UX:** avoids Phase B UI churn.
6. **Duplicate detection = heuristics:** Jaccard token overlap + metadata pattern matching — sufficient for Phase B architecture hook.
7. **Knowledge Pack generated from code:** ensures workspace has importable pack even when source PDFs are not in git.

---

## 16. Risques

| Risk | Mitigation |
|------|------------|
| PMBOK 8 full text not in repo | PD/concept paraphrases marked MEDIUM/UNVERIFIED; re-import when sources arrive |
| Bank domain vs ECO domain mismatch | PARTIAL mappings; Phase C/G blueprint alignment decision deferred |
| Over-mapping confidence | Tests require >0 PARTIAL; no false 100% VERIFIED |
| Legacy + stable ID drift | Single bridge function; tests on all 26 tasks |
| Future adaptive engine coupling | Pure data layer; no selection logic added |

---

## 17. Tests

### Baseline (pre-change reference)

| Suite | Baseline |
|-------|----------|
| lint | PASS |
| vitest | 281/281 |
| build | PASS |
| E2E | 58/58 |

### After Phase B (2026-08-26)

| Suite | Result |
|-------|--------|
| `npm run lint` | ✅ PASS (0 errors) |
| `npm run test` | ✅ **307/307** PASS |
| `npm run build` | ✅ PASS |
| `npm run test:e2e -- --workers=1` | ✅ **58/58** PASS |

New test files:

- `src/tests/pmp-mastery-engine-phase-b.test.ts` — ECO, PMBOK, concepts, 200 metadata, mastery/error, knowledge pack
- `src/tests/pmp-mastery-knowledge-pack-gen.test.ts` — writes `knowledge/` exports
- `src/tests/pmp-mastery-phase-b.test.ts` — prior Phase B tests (retained)

---

## 18. Fichiers modifiés

| Path | Change |
|------|--------|
| `prisma/schema.prisma` | `QuestionMasteryMetadata`, `confidenceLevel` columns |
| `prisma/seed/pmp-exam-bank.ts` | Upsert mastery metadata after exam questions |
| `src/modules/mastery-engine/concept-graph.ts` | Type fix for build |

---

## 19. Fichiers créés (non modifiés — protected bank)

| Path |
|------|
| `src/modules/mastery-engine/*` (16 files) |
| `prisma/migrations/20260826214500_phase_b_mastery_metadata/migration.sql` |
| `prisma/seed/pmp-question-mastery-metadata.ts` |
| `knowledge/PMP_MASTER_KNOWLEDGE_PACK.json` |
| `knowledge/PMP_MASTER_KNOWLEDGE_PACK.md` |
| `knowledge/CURSOR_IMPORT_PMP_MASTER_KNOWLEDGE.md` |
| `src/tests/pmp-mastery-engine-phase-b.test.ts` |
| `src/tests/pmp-mastery-knowledge-pack-gen.test.ts` |
| `PMP_MASTERY_ENGINE_PHASE_B_IMPLEMENTATION.md` |
| `CHECKPOINT_PMP_MASTERY_ENGINE_PHASE_B.md` (updated) |

### Fichiers non modifiés (protected)

- `prisma/seed/pmp-exam-bank-data.ts` — **stems, options, answers, scoring, externalKeys unchanged**
- Exam simulator selection / scoring logic
- 77 lessons, 134 lesson questions
- UI components

---

## STOP — Phase B checkpoint

Phase C (adaptive selection) and Phase D (question generation) **not started**.

**Next recommended step:** Phase C — wire mastery metadata into attempt recording, confidence UX, and adaptive question selection using coverage gaps as generation priorities.
