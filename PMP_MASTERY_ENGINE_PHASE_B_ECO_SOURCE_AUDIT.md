# PMP Mastery Engine — Phase B ECO Source Verification Audit

**Date:** 2026-08-26  
**Branch:** `cursor/pmp-mastery-engine-phase-b-e932`  
**Mode:** AUDIT ONLY — no code, taxonomy, seed, metadata, or question changes  
**Auditor role:** Senior PMP content architect + source-governance auditor

---

## 1. Executive conclusion

The **authentic PMI PMP Examination Content Outline (ECO) — July 2026** was located in the workspace at:

`/home/ubuntu/.cursor/projects/agent/uploads/ECO_2026_398a.pdf`

Direct extraction from this primary source confirms:

| Domain | Task count | Weight |
|--------|----------:|-------:|
| People (Humain) | **8** | 33% |
| Process (Processus) | **10** | 41% |
| Business Environment (Environnement commercial) | **8** | 26% |
| **Total** | **26** | 100% |

**Both disputed tasks are official ECO People tasks:**

- **T7 — Assurer le transfert des connaissances** (Ensure knowledge transfer) — Page 9
- **T8 — Planifier et gérer la communication** (Plan and manage communication) — Page 9

**Verdict:**

| Artifact | Status |
|----------|--------|
| Primary ECO July 2026 PDF | **VERIFIED** — 26 tasks / 8 People |
| Current Phase B taxonomy (`eco-taxonomy.ts`) | **CORRECT** |
| Authentic Knowledge Pack (`.source.*`) | **INCORRECT** — omits People T7 & T8; reports 24 total |
| Generated Knowledge Pack (`knowledge/PMP_MASTER_KNOWLEDGE_PACK.json`) | **INCORRECT** — inherits 26-task code layer but source pack is wrong |

**Recommendation: B** — ECO = **26 tasks / 8 People tasks**.  
The Knowledge Pack must be corrected in a **separate approved implementation step**. No taxonomy migration is required.

---

## 2. Primary source identified

| Field | Value |
|-------|-------|
| **File** | `/home/ubuntu/.cursor/projects/agent/uploads/ECO_2026_398a.pdf` |
| **Title** | Project Management Professional (PMP)® — Grandes lignes du contenu de l'examen – juillet 2026 |
| **Publisher** | Project Management Institute, Inc. |
| **Copyright** | © 2025 Project Management Institute, Inc. |
| **Language** | French |
| **Pages** | 25 |
| **Exam update** | Juillet 2026 |
| **Status** | **PRIMARY SOURCE — VERIFIED** |

**Not used as proof of ECO structure:**
- `knowledge/PMP_MASTER_KNOWLEDGE_PACK.source.*` (secondary — found incorrect)
- `knowledge/PMP_MASTER_KNOWLEDGE_PACK.json` (generated from code)
- `src/modules/mastery-engine/eco-taxonomy.ts` (verified against primary, not used as proof)
- General PMP training knowledge

**Note:** No separate English ECO PDF was found in the workspace. English task names below marked **DERIVED** are faithful paraphrases aligned with the French primary text and existing PLA taxonomy — not verbatim PMI English ECO wording.

---

## 3. Evidence for People tasks

**Domain:** DOMAINE I — HUMAIN — **33%** (Page 6, Page 8)

| Task | Exact ECO wording (FR) | English reference (DERIVED) | Source | Page | Verified |
|------|------------------------|-------------------------------|--------|------|----------|
| T1 | Développer une vision commune | Develop a common vision | ECO July 2026 | 8 | **YES** |
| T2 | Gérer les conflits | Manage conflicts | ECO July 2026 | 8 | **YES** |
| T3 | Diriger l'équipe de projet | Lead the project team | ECO July 2026 | 8 | **YES** |
| T4 | Impliquer les parties prenantes | Engage stakeholders | ECO July 2026 | 8 | **YES** |
| T5 | Aligner les attentes des parties prenantes | Align stakeholder expectations | ECO July 2026 | 8–9 | **YES** |
| T6 | Gérer les attentes des parties prenantes | Manage stakeholder expectations | ECO July 2026 | 9 | **YES** |
| T7 | Assurer le transfert des connaissances | Ensure knowledge transfer | ECO July 2026 | 9 | **YES** |
| T8 | Planifier et gérer la communication | Plan and manage communication | ECO July 2026 | 9 | **YES** |

### T7 enablers (catalyseurs) — Page 9

- Identifier les connaissances essentielles au projet
- Acquérir des connaissances
- Favoriser un environnement propice au transfert des connaissances

### T8 enablers (catalyseurs) — Page 9

- Établir une stratégie de communication
- Promouvoir la transparence et la collaboration
- Établir une boucle de retour d'information
- Comprendre les exigences en matière de rapports
- Créer des rapports conformes aux attentes des commanditaires et des parties prenantes
- Soutenir les processus de rapports et de gouvernance

**Important contextual note (Page 7):** The ECO document uses *Assurer le transfert des connaissances* as a **structural example** illustrating domain/task/catalyst format. This is **not** evidence that T7 is non-official — Page 9 lists it as **Tâche 7** with full enablers in the authoritative People task list.

---

## 4. T07 verification

| Field | Finding |
|-------|---------|
| **Status** | **OFFICIAL** |
| **ECO domain** | People (Humain) |
| **ECO task number** | 7 |
| **Exact FR wording** | Assurer le transfert des connaissances |
| **English (DERIVED)** | Ensure knowledge transfer |
| **Page** | 9 |
| **Code mapping** | `PEOPLE-T07` / legacy `PE-07` |
| **sourceType in code** | `PMI_ECO_2026` |
| **sourceConfidence in code** | `HIGH` |
| **Code declaration correct?** | **YES** — supported by primary ECO |

**Knowledge Pack status:** **NOT LISTED** — artifact error (People stops at 6 tasks).

---

## 5. T08 verification

| Field | Finding |
|-------|---------|
| **Status** | **OFFICIAL** |
| **ECO domain** | People (Humain) |
| **ECO task number** | 8 |
| **Exact FR wording** | Planifier et gérer la communication |
| **English (DERIVED)** | Plan and manage communication |
| **Page** | 9 |
| **Code mapping** | `PEOPLE-T08` / legacy `PE-08` |
| **sourceType in code** | `PMI_ECO_2026` |
| **sourceConfidence in code** | `HIGH` |
| **Code declaration correct?** | **YES** — supported by primary ECO |

**Knowledge Pack status:** **NOT LISTED** — artifact error.

**Conceptual note (not a taxonomy conflict):** T4 (Engage stakeholders) includes communication tailoring as an enabler; T8 is a **separate official task** for communication planning/management. Both are valid ECO tasks. The distinction communication ≠ engagement remains a **concept-level** mastery concern, not grounds to demote T8.

---

## 6. Complete ECO task count

Verified directly from primary ECO PDF (Pages 8–13):

| Domain | Count | Verified |
|--------|------:|----------|
| People | **8** | YES (Pages 8–9) |
| Process | **10** | YES (Pages 10–11) |
| Business Environment | **8** | YES (Pages 12–13) |
| **Total** | **26** | YES |

**Exam format (Page 6):** 180 questions / 240 minutes; ~40% predictive / ~60% adaptive-agile-hybrid.

### Process tasks (verified)

| # | FR wording (primary) | Page |
|---|---------------------|------|
| 1 | Développer un plan de management du projet intégré et planifier la livraison | 10 |
| 2 | Développer et gérer le périmètre du projet | 10 |
| 3 | Garantir une livraison axée sur la valeur | 10 |
| 4 | Planifier et gérer les ressources | 10 |
| 5 | Planifier et gérer les approvisionnements | 10 |
| 6 | Planifier et gérer les finances | 11 |
| 7 | Planifier et optimiser la qualité des produits/livrables | 11 |
| 8 | Planifier et gérer l'échéancier | 11 |
| 9 | Évaluer l'état du projet | 11 |
| 10 | Gérer la clôture du projet | 11 |

### Business Environment tasks (verified)

| # | FR wording (primary) | Page |
|---|---------------------|------|
| 1 | Définir et établir la gouvernance du projet | 12 |
| 2 | Planifier et gérer la conformité du projet | 12 |
| 3 | Gérer et maîtriser les changements | 12 |
| 4 | Éliminer les obstacles et gérer les points à traiter | 12 |
| 5 | Planifier et gérer les risques | 12 |
| 6 | Amélioration continue | 13 |
| 7 | Soutenir le changement organisationnel | 13 |
| 8 | Évaluer les changements dans l'environnement commercial externe | 13 |

---

## 7. Knowledge Pack comparison

Compared artifacts:

- `knowledge/PMP_MASTER_KNOWLEDGE_PACK.source.md`
- `knowledge/PMP_MASTER_KNOWLEDGE_PACK.source.json`
- `knowledge/PMP_MASTER_KNOWLEDGE_PACK.json` (code-generated)
- `knowledge/CURSOR_IMPORT_PMP_MASTER_KNOWLEDGE.source.md`

| Element | Primary ECO | Knowledge Pack (.source) | Code (`eco-taxonomy.ts`) | Classification |
|---------|------------:|-------------------------:|-------------------------:|----------------|
| People task count | **8** | **6** | **8** | Pack: **INCORRECT**; Code: **VERIFIED** |
| Process task count | **10** | **10** | **10** | Pack: **VERIFIED**; Code: **VERIFIED** |
| Business task count | **8** | **8** | **8** | Pack: **VERIFIED**; Code: **VERIFIED** |
| Total task count | **26** | **24** | **26** | Pack: **INCORRECT**; Code: **VERIFIED** |
| T07 (Knowledge transfer) | **Present** | **Absent** | **Present** (`PEOPLE-T07`) | Pack: **INCORRECT** |
| T08 (Communication) | **Present** | **Absent** | **Present** (`PEOPLE-T08`) | Pack: **INCORRECT** |
| Domain weights 33/41/26 | **YES** | YES | YES | **VERIFIED** |
| 40/60 delivery split | **YES** | YES | YES | **VERIFIED** |
| 7 PMBOK 8 PDs | N/A (PMBOK) | YES | YES | **SOURCE-SUPPORTED** (PMBOK layer) |

**Root cause of pack error:** The authentic Knowledge Pack `.source.*` files list only 6 People tasks (T1–T6). Tasks 7 and 8 were omitted — likely conflated with T4 engagement enablers or the Page 7 structural example. This is a **Knowledge Pack authoring defect**, not an ECO ambiguity.

**Generated pack (`knowledge/PMP_MASTER_KNOWLEDGE_PACK.json`):** Built from code module — reflects **26 tasks** but was not validated against primary ECO at generation time. It should be regenerated after pack correction.

---

## 8. Current code comparison

| Element | Primary ECO | Code | Match |
|---------|------------|------|-------|
| People tasks | 8 | 8 (`PEOPLE-T01`…`T08`) | ✅ |
| Process tasks | 10 | 10 (`PROCESS-T01`…`T10`) | ✅ |
| Business tasks | 8 | 8 (`BUSINESS-T01`…`T08`) | ✅ |
| Total | 26 | 26 | ✅ |
| T07 official | YES | `PEOPLE-T07` / `PE-07` | ✅ |
| T08 official | YES | `PEOPLE-T08` / `PE-08` | ✅ |
| T07 sourceType | PMI_ECO_2026 | PMI_ECO_2026 | ✅ (justified) |
| T08 sourceType | PMI_ECO_2026 | PMI_ECO_2026 | ✅ (justified) |
| T07 sourceConfidence | HIGH | HIGH | ✅ (justified) |
| T08 sourceConfidence | HIGH | HIGH | ✅ (justified) |

**Legacy bridge (`eco-proxy-2026.ts`):** Also defines `PE-07` and `PE-08` — consistent with primary ECO.

**No taxonomy deletion or ID change is warranted.**

---

## 9. 200-question metadata impact (read-only)

Analysis via read-only import of `PMP_QUESTION_MASTERY_METADATA` + `PMP_EXAM_BANK` (no modifications).

| Reference type | PE-07 / PEOPLE-T07 | PE-08 / PEOPLE-T08 |
|----------------|-------------------:|-------------------:|
| **Primary** | **0** | **1** (`pmp-exam-110`) |
| **Secondary** | **0** | **21** |
| **Invalid references** | 0 | 0 |
| **Unresolved references** | 0 | 0 |

### PE-08 primary

- `pmp-exam-110` — `processArea: Communications management` → primary `PE-08` / `PEOPLE-T08`

### PE-08 secondary (21 items — sample)

`pmp-exam-002`, `012`, `015`, `020`, `033`, `038`, `051`, `056`, `069`, `087`, `092`, `105`, `123`, `128`, `141`, `146`, `159`, `164`, `177`, `195` — secondary tag via `communication` skill enrichment in `pmp-exam-eco-tags.ts`.

### PE-07

- **Zero** primary or secondary references in current 200-question metadata.
- **Coverage gap:** No exam item currently maps to official ECO People T7 — a **content coverage** issue for Phase D, not a taxonomy error.

**Protected questions:** All 200 stems/options/answers/scoring/externalKeys **UNCHANGED** (read-only verification).

---

## 10. Concept / skill / misconception impact (blast radius)

Read-only dependency audit if T07/T08 were ever removed (they should **not** be):

### Linked to PEOPLE-T07

| Type | ID | Notes |
|------|-----|-------|
| Concept | `knowledge-transfer` | Primary ecoTaskIds: `PEOPLE-T07` |
| Skill | `skill-enable-knowledge-transfer` | conceptId: `knowledge-transfer` |
| Related | `team-leadership` | relatedConceptIds includes `knowledge-transfer` |
| Related | `project-closure` | relatedConceptIds includes `knowledge-transfer` |

### Linked to PEOPLE-T08

| Type | ID | Notes |
|------|-----|-------|
| Concept | `communication-planning` | Primary ecoTaskIds: `PEOPLE-T08` |
| Sub-concept | `communication-vs-engagement` | ecoTaskIds: `PEOPLE-T04`, `PEOPLE-T08` |
| Skills | `skill-communication-strategy`, `skill-tailor-communication` | conceptId: `communication-planning` |
| Misconception | `mc-communication-engagement` | ecoTaskIds: `PEOPLE-T04`, `PEOPLE-T08` |
| Coverage note | `coverage-matrix.ts` | Documents T04 vs T08 distinction |

### pmbok8-domains.ts legacy map

- `PE-07` → `PD-RESOURCES`
- `PE-08` → `PD-STAKEHOLDERS`

**Blast radius if incorrectly removed:** 2 concepts, 3 skills, 1 misconception pair, 1 primary + 21 secondary question metadata links, legacy proxy entries, coverage documentation.

**If Recommendation B accepted:** No migration needed — taxonomy is already aligned with primary ECO.

---

## 11. Risk / Change PARTIAL audit (80 items)

Read-only analysis of `mappingStatus: PARTIAL` (80/200).

| Reason category | Count | Issue type |
|-----------------|------:|------------|
| `eco_business_primary_vs_bank_process_domain` | **41** | **Metadata/legacy conflict** — ECO primary is Business (`BE-05` Risk, `BE-03` Change) but bank `domain: PROCESS` |
| `processArea_heuristic_partial` | **25** | **Metadata heuristic** — `inferMappingConfidence()` flags `processArea.includes("management")` (e.g. Conflict management, Change management in PEOPLE domain) |
| `domain_or_heuristic_mismatch` | **14** | **Mixed** — various domain/heuristic mismatches |

### By bank domain (PARTIAL items)

| Bank domain | PARTIAL count |
|-------------|--------------:|
| PEOPLE | 18 |
| PROCESS | 48 |
| BUSINESS_ENVIRONMENT | 14 |

### By ECO task (PARTIAL primary ecoTaskId)

| ECO task | PARTIAL count | Typical cause |
|----------|--------------:|---------------|
| `BUSINESS-T05` (Risk) | 21 | Bank PROCESS domain vs ECO Business |
| `BUSINESS-T03` (Change) | 21 | Bank PROCESS domain vs ECO Business |
| `PEOPLE-T02` (Conflict) | 17 | Heuristic: `processArea.includes("management")` |
| `PROCESS-T03` (Value) | 14 | Domain/heuristic mismatch |
| Others (T01,T02,T04,T05,T07,T08) | 1 each | Individual mismatches |

**Not fixed in this audit.** These are **metadata classification** issues separate from the T07/T08 contradiction. The 41 Risk/Change items reflect a known legacy bank design choice (domain field vs ECO task primary).

---

## 12. Source-confidence matrix

| Element | Classification | Evidence |
|---------|---------------|----------|
| ECO People = 8 tasks | **VERIFIED** | ECO PDF pages 8–9 |
| ECO Process = 10 tasks | **VERIFIED** | ECO PDF pages 10–11 |
| ECO Business = 8 tasks | **VERIFIED** | ECO PDF pages 12–13 |
| ECO Total = 26 | **VERIFIED** | Sum of above |
| T07 official | **VERIFIED** | ECO PDF page 9, Tâche 7 |
| T08 official | **VERIFIED** | ECO PDF page 9, Tâche 8 |
| Domain weights 33/41/26 | **VERIFIED** | ECO PDF page 6 |
| 40/60 predictive vs agile/hybrid | **VERIFIED** | ECO PDF page 6 |
| Code taxonomy 26/8/10/8 | **VERIFIED** | Matches primary ECO |
| Knowledge Pack People = 6 | **INCORRECT** | Contradicts primary ECO |
| Knowledge Pack missing T7/T8 | **INCORRECT** | Contradicts primary ECO |
| English task names in code | **DERIVED** | Paraphrase from FR primary; no EN ECO PDF in workspace |
| PMBOK 8 PD names (7) | **SOURCE-SUPPORTED** | Knowledge Pack + mission spec; full PMBOK not in workspace |
| Quality as cross-cutting | **SOURCE-SUPPORTED** | ECO Process T7 + pack guidance |
| 80 PARTIAL metadata | **PLA INTERNAL** | Heuristic mapping rules + legacy bank domain design |
| Communication ≠ engagement (concept) | **SOURCE-SUPPORTED** | ECO T4/T8 enablers + PMBOK stakeholder guidance in pack |

---

## 13. Recommended decision

### **B — ECO = 26 tasks / 8 People tasks**

**Justification:**

1. Primary ECO July 2026 PDF explicitly lists **8 People tasks** including T7 (knowledge transfer) and T8 (communication planning/management) on Page 9.
2. Current Phase B taxonomy (`PEOPLE-T01`…`T08`) is **source-grounded** and correctly declares `PMI_ECO_2026` / `HIGH` for these tasks.
3. The Knowledge Pack `.source.*` is **wrong** — it omits 2 official tasks. Per source hierarchy, the pack must be corrected, **not** the ECO taxonomy reduced to 24 tasks.
4. Removing T07/T08 would **increase** inaccuracy and break concept/skill/metadata links without benefit.

**Option A (24/6) — REJECTED:** Contradicts primary ECO.  
**Option C (insufficient evidence) — REJECTED:** Primary ECO PDF provides direct evidence.

---

## 14. Required next implementation steps (DO NOT IMPLEMENT YET)

1. **Correct Knowledge Pack** (`.source.md`, `.source.json`) — add People T7 & T8 with enablers; update total to 26; cite ECO page references.
2. **Regenerate** `knowledge/PMP_MASTER_KNOWLEDGE_PACK.json` and `.md` from corrected sources + code module.
3. **Update** `CURSOR_IMPORT_PMP_MASTER_KNOWLEDGE.source.md` to warn that pack v1.0 People section was incomplete.
4. **Document** in Phase B checkpoint that T7/T8 contradiction is **resolved — taxonomy correct, pack incorrect**.
5. **Optional Phase D:** Add exam questions covering ECO People T7 (currently 0 coverage) — metadata gap only, no stem edits to existing 200.
6. **Separate track:** Address 80 PARTIAL metadata (Risk/Change domain mismatch) — not part of T07/T08 decision.
7. **Await explicit approval** before any implementation.

---

## Tests (read-only baseline during audit)

| Suite | Result |
|-------|--------|
| `npm run lint` | ✅ PASS |
| `npm run test` | ✅ **307/307** PASS |
| `npm run build` | ✅ PASS |
| `npm run test:e2e -- --workers=1` | ✅ **58/58** PASS |

No tests were modified during this audit.

---

## Files modified

**NONE** (audit only)

## Files created

- `PMP_MASTERY_ENGINE_PHASE_B_ECO_SOURCE_AUDIT.md` (this report)

---

**STOP — Awaiting explicit approval before Knowledge Pack correction or any taxonomy/metadata changes.**
