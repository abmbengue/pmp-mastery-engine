# PMP MASTERY ENGINE — PHASE B.3 LESSON AUDIT

**Branch:** `cursor/pmp-mastery-engine-phase-b3-lessons-e932`  
**Date:** 2026-08-27  
**Mode:** AUDIT / DESIGN ONLY — no code changes, no question generation  
**Philosophy:** TASK-FIRST · LESSON-FIRST · MASTERY-FIRST · PMBOK = reference (not syllabus)

---

## 1. EXECUTIVE VERDICT

| Finding | Status |
|---------|--------|
| ECO July 2026 = 26 tasks / People 8 | ✅ Verified (primary PDF) |
| T07 / T08 official | ✅ Verified |
| Knowledge Pack v1.1 | ✅ Aligned with ECO 26 |
| **12 instructor lesson source files** | ❌ **NOT FOUND in workspace** |
| PLA pedagogical catalog available | ✅ **77 lessons** in 7 modules |
| Explicit Lesson ↔ ECO Task graph in code | ❌ Missing (P1) |
| T7 knowledge-transfer lesson coverage | ❌ Missing / inadequate |
| T8 vs T4 distinction in lessons | ⚠️ Partial (`communication` dual-maps; distinction not taught as mastery concept in lesson structure) |
| PMBOK used as syllabus | ❌ Correctly avoided so far |
| 200 exam stems | ✅ Untouched |
| Ready to implement lesson architecture? | **NO — waiting for 12 source files OR explicit approval to proceed using PLA 77 + Knowledge Pack Lesson 2/5/7 digests only** |

**Bottom line:** Phase B.3 cannot complete a SOURCE-GROUNDED redesign of lessons from the “12 fichiers fournis” because those files are absent. Audit proceeds on (1) ECO primary, (2) Knowledge Pack instructor digests (Lessons 2/5/7), (3) existing 77 PLA lessons + mastery-engine graph.

---

## 2. SOURCE INVENTORY

| Source | Found | Read | Authority | Use |
|--------|-------|------|-----------|-----|
| PMI ECO July 2026 (`ECO_2026_398a.pdf`) | YES | YES | **PRIMARY** (exam tasks) | Blueprint for 26 tasks, T7/T8, weights |
| **12 instructor lesson files (mission)** | **NO** | NO | Would be pedagogical primary for PLA lesson rewrite | **BLOCKER for full B.3 source-grounded lesson design** |
| Knowledge Pack Lesson 2/5/7 digests | YES | YES | SECONDARY (paraphrased course) | Partial substitute for instructor Lessons 2/5/7 only |
| Knowledge Pack v1.1 ECO/concepts | YES | YES | Compact layer | Architecture + confusion pairs |
| PMBOK 8 full text | NO | NO | Would be REFERENCE only | Concepts PD cross-check remains MEDIUM |
| PLA 77 lessons (`prisma/seed/content/pmp-*.ts`) | YES | YES (inventory) | **PLA_INTERNAL** pedagogy | Current teachable content |
| Mastery-engine concept/skill graphs | YES | YES | PLA + DERIVED | Mapping targets |
| Protected exam bank 200 | YES | Metadata only | Assessment evidence | Practice coverage; stems protected |

---

## 3. 12-LESSON INVENTORY

### 3.1 Mission “12 fichiers” — status

| # | Expected instructor file | Status |
|--:|--------------------------|--------|
| 1–12 | Instructor lesson sources (unspecified filenames) | **MISSING from uploads/workspace** |

Uploads currently contain only: `ECO_2026_398a.pdf`, Knowledge Pack `.md`/`.json`, Cursor import note.

### 3.2 Knowledge Pack named instructor lessons (partial substitute)

| Pack lesson | ECO links (pack) | Themes | Authority |
|-------------|------------------|--------|-----------|
| Lesson 2 | 1.1, 1.4, 1.5, 3.1 → T01/T04/T05/T01-gov | Vision, stakeholders, governance | `PMP_LESSON_2` digest — not full file |
| Lesson 5 | 2.5, 2.7, 2.8 → T05/T07/T08 Process | Procurement, quality, schedule | `PMP_LESSON_5` digest |
| Lesson 7 | 1.2, 1.3 → T02/T03 | Conflict, team leadership | `PMP_LESSON_7` digest |

**Missing from pack digests:** explicit deep coverage for T06/T07/T08 People (T07 knowledge; T08 communication as full ECO task), Process finance/status/closure, Business CI, etc.

### 3.3 Existing PLA catalog (what we can audit today)

| Module | Lessons | Notes |
|--------|--------:|-------|
| foundations | 3 | Roles, lifecycle, PM basics |
| people | 14 | Leadership, conflict, communication, stakeholders… |
| process | 16 | Scope, schedule, cost, quality, procurement, integration… |
| business-environment | 10 | Governance, compliance, strategy, benefits… |
| agile | 12 | Mindset, backlog, DoD, flow… |
| hybrid | 10 | Tailoring, hybrid governance/risk… |
| situational-thinking | 12 | Strong scenario pedagogy |
| **Total** | **77** | |
| With `situation` block | **56** | |
| Thin (≤1Q and no situation) | **19** | Close to Phase A “18 thin” |

**Classification of PLA lessons:** predominantly `PLA_INTERNAL` / `DERIVED_PEDAGOGICAL`. Not PMI official. Not a substitute for the missing 12 instructor files.

---

## 4. ECO 26-TASK COVERAGE MATRIX

Heuristic Lesson↔ECO mapping is **DERIVED_PEDAGOGICAL** (slug/theme based). Not SOURCE-GROUNDED against instructor PDFs.

| ECO Task | Title (EN paraphrase) | PLA lessons (heuristic) | Primary exam Q | Masterability | Coverage |
|----------|----------------------|-------------------------|---------------:|---------------|----------|
| PEOPLE-T01 | Develop a common vision | **0** dedicated | 0 | NO | **RED** |
| PEOPLE-T02 | Manage conflicts | conflict-management-basics, collaboration, EI, situational… | 17 | YES | GREEN |
| PEOPLE-T03 | Lead the project team | leadership, team-*, servant, coaching, motivation… | 17 | YES | GREEN |
| PEOPLE-T04 | Engage stakeholders | stakeholders-basics, communication, negotiation, product-ownership | 20 | YES | GREEN |
| PEOPLE-T05 | Align expectations | stakeholders-basics, coaching (secondary) | 0 | PARTIAL | AMBER |
| PEOPLE-T06 | Manage expectations | stakeholders-basics (secondary) | 0 | PARTIAL | AMBER |
| PEOPLE-T07 | Ensure knowledge transfer | **0** (`lessons-learned` unmapped) | 0 | NO | **RED** |
| PEOPLE-T08 | Plan & manage communication | communication, distributed-teams, feedback | 1 | PARTIAL | AMBER |
| PROCESS-T01 | Integrated plan & delivery | planning, initiation, integration, hybrid*, agile-mindset… | 2 | PARTIAL | AMBER |
| PROCESS-T02 | Scope | scope, requirements, backlog, scope-creep case | 19 | YES | GREEN |
| PROCESS-T03 | Value-based delivery | business-value, benefits, agile prioritization… | 14 | YES | GREEN |
| PROCESS-T04 | Resources | resource-management (**thin**), estimation | 1 | PARTIAL | AMBER |
| PROCESS-T05 | Procurement | procurement-basics | 1 | PARTIAL | AMBER |
| PROCESS-T06 | Finance | cost (1Q) — **no EVM lesson** | 0 | NO | **RED** |
| PROCESS-T07 | Quality | quality, definition-of-done | 20 | YES | GREEN |
| PROCESS-T08 | Schedule | schedule, estimation, sprint, velocity | 20 | YES | GREEN |
| PROCESS-T09 | Evaluate status | velocity-and-flow only (weak) | 0 | NO | **RED** |
| PROCESS-T10 | Closure | project-lifecycle-basics only (weak) | 0 | NO | **RED** |
| BUSINESS-T01 | Governance | governance, governance-hybrid, project-roles | 0 | PARTIAL | AMBER |
| BUSINESS-T02 | Compliance | compliance | 12 | YES | GREEN |
| BUSINESS-T03 | Change control | scope-creep case; `change-management-basics` **unmapped** | 21 | YES | GREEN* |
| BUSINESS-T04 | Impediments & issues | issue-management + situational suite | 0 | PARTIAL | AMBER |
| BUSINESS-T05 | Risk | risk-management-hybrid; `risk-vs-issue` **unmapped** | 21 | YES | GREEN* |
| BUSINESS-T06 | Continuous improvement | feedback only (weak); `retrospective`/`lessons-learned` unmapped | 0 | NO | **RED** |
| BUSINESS-T07 | Org change | org-strategy, project-selection; `organizational-change` unmapped | 13 | YES | AMBER |
| BUSINESS-T08 | External environment | portfolio-context, project-selection | 1 | PARTIAL | AMBER |

\*Exam Q strong; lesson mapping incomplete due to unmapped slugs.

**Unmapped PLA lessons (19)** that should likely join the matrix after approval:  
`risk-vs-issue`, `change-management-basics`, `project-controls-metrics`, `lessons-learned`, `benefits-realization`, `organizational-context`, `organizational-change`, `iteration-planning`, `retrospective`, `impediments-management`, `stakeholder-management-hybrid`, `delivery-strategy`, plus several situational cases.

---

## 5. CONCEPT → LESSON → ECO MATRIX

| Concept (examples) | ECO | PLA lesson evidence | Gap |
|--------------------|-----|---------------------|-----|
| `shared-vision` | T01 | **None dedicated** | P0 pedagogical hole |
| `knowledge-transfer` | T07 | None; `lessons-learned` exists but unmapped | P0 |
| `communication-planning` | T08 | `communication` | Partial — also dual-tagged T04 |
| `communication-vs-engagement` | T04+T08 | Not a dedicated lesson block | P1 teach distinction |
| `stakeholder-engagement` | T04–T06 | `stakeholders-basics` | Thin depth for T05/T06 |
| `conflict-management` | T02 | `conflict-management-basics` + situational | Stronger |
| `team-leadership` | T03 | Several people lessons | Stronger |
| `project-finance` / EVM | T06 | `cost` only | P0 depth |
| `procurement` | T05 | `procurement-basics` | Thin |
| `integrated-planning` | T01 Process | planning/hybrid/initiation | Medium |
| `project-status` | T09 | Weak | P1 |
| `project-closure` | T10 | Weak | P1 |
| `governance` | BE-T01 | `governance` | Medium (0 primary exam Q) |
| `continuous-improvement` | BE-T06 | Weak | P1 |
| `risk-vs-issue` | BE-T04/T05 | Lesson exists, **unmapped** | Fix mapping |
| `quality-management` | PR-T07 | `quality` | OK |

Full 58-concept table deferred until instructor 12 files arrive; inventing lesson links would violate SOURCE-GROUNDED.

---

## 6. SKILL → CONCEPT → LESSON MATRIX

| Skill examples | Concept | Lesson bridge today | Assessable? |
|----------------|---------|---------------------|-------------|
| `skill-enable-knowledge-transfer` | knowledge-transfer | **No lesson** | NO |
| `skill-communication-strategy` | communication-planning | `communication` | PARTIAL |
| `skill-distinguish-communication-engagement` | communication-vs-engagement | Implicit only | NO as taught skill |
| `skill-select-conflict-response` | conflict-management | conflict + situational | YES |
| `skill-empower-team` | team-leadership | leadership suite | PARTIAL |
| Finance/EVM skills | project-finance | `cost` thin | NO |
| Status/forecast skills | project-status | Weak | NO |

~30 mastery skills still have **0 exam evidence** (B.2). Lesson graph does not yet compensate for T07/T06/T09/T10/T01.

---

## 7. GAP ANALYSIS

### P0
1. **12 instructor lesson files missing** — cannot SOURCE-GROUND lesson redesign.  
2. **PEOPLE-T07** — official ECO task; no dedicated PLA lesson; 0 exam Q.  
3. **PEOPLE-T01** — no dedicated vision lesson; 0 exam Q.  
4. **PROCESS-T06 finance/EVM** — thin `cost` only; 0 primary exam Q.

### P1
1. No code model `Lesson ↔ ECO Task ↔ Concept ↔ Skill` (only exam metadata + skillSlug).  
2. **T4 vs T8** not explicitly taught as mastery distinction in lesson structure.  
3. PEOPLE-T08 thin (1 primary Q); lesson dual-maps engagement.  
4. PROCESS-T09 / T10 / BUSINESS-T06 pedagogically weak.  
5. 19 PLA lessons unmapped to ECO heuristics (`lessons-learned`, `change-management-basics`, `risk-vs-issue`, etc.).  
6. ~19 thin lessons need depth **after** source files / approval — not rewrite now.

### P2
1. Soften PARTIAL exam metadata heuristics (from B.2).  
2. Align Knowledge Pack Lesson 2/5/7 digests with PLA lesson IDs.  
3. Recommended lesson template (OBJECTIVE…MASTERY SIGNALS) as optional quality bar.  
4. Wire confidence + mastery evidence (B.2 P1) before adaptive.

### P3
1. Item-level retention.  
2. Question generation 201+.  
3. Full PMBOK-backed enrichment when PDF available (still as reference).  
4. Advanced tutor / teach-back.

---

## 8. T7 / T8 COVERAGE

### PEOPLE-T07 — Ensure knowledge transfer
| Layer | Status |
|-------|--------|
| ECO official | YES (page 9) |
| Concept `knowledge-transfer` | YES in graph |
| Skill `skill-enable-knowledge-transfer` | YES |
| PLA lesson | **NO dedicated**; `lessons-learned` unmapped / CI-adjacent |
| Exam primary Q | **0** |
| Verdict | **Structurally incomplete for mastery** |

### PEOPLE-T08 — Plan and manage communication
| Layer | Status |
|-------|--------|
| ECO official | YES (page 9) |
| Concept `communication-planning` | YES |
| Skills strategy/tailor | YES |
| PLA lesson `communication` | YES (also tagged T04) |
| Exam primary Q | **1** (+21 secondary) |
| Verdict | **Present but thin; risk of collapse into engagement** |

---

## 9. T4 vs T8 DISTINCTION

| | T4 Engage stakeholders | T8 Plan & manage communication |
|--|------------------------|--------------------------------|
| ECO role | ENGAGEMENT | COMMUNICATION |
| Focus | Identify/analyze, engagement plan, trust, influence, align needs | Strategy, transparency, feedback loops, reporting, governance reporting |
| PLA today | `stakeholders-basics` + dual `communication` | Same `communication` lesson |
| Mastery concept | `stakeholder-engagement` | `communication-planning` |
| Confusion pair | `mc-communication-engagement` | (same) |

**Gap:** Distinction exists in misconception graph but is **not** a first-class taught lesson objective. B.3 implementation (after approval) should add explicit HOW TO THINK / COMMON TRAPS blocks — without merging T8 into T4.

---

## 10. PMBOK 8 ROLE

| Allowed | Forbidden |
|---------|-----------|
| Clarify concepts needed for an ECO task | Reproduce PMBOK as syllabus |
| Cross-link 7 Performance Domains | Create a lesson per PMBOK section |
| Support Quality as transversal (`KN-QUALITY` + Process T7) | Call Quality an 8th PD |
| Fill explanation gaps marked DERIVED when needed | Invent PMI requirements |

**Current posture:** Correct — task/lesson-first; PMBOK full text still absent → PD confidence MEDIUM.

---

## 11. RECOMMENDED ARCHITECTURE

```
ECO_TASK (26 stable IDs)
  └── LessonEcoLink[]          // NEW metadata — many-to-many
        └── PLA Lesson (77)
              └── skillSlug → MasterySkill (plaSkillSlug)
                    └── Concept / Sub-concept
                          └── QuestionMasteryMetadata (200 protected)
```

Prefer extending mastery-engine with:

- `lesson-eco-map.ts` (stable lesson slug → ECO task IDs + sourceType/confidence)
- Optional `lessonMasteryBlueprint` (objectives, traps, mastery signals) as data, not forced UI

Do **not** replace exam simulator or rewrite 77 lessons wholesale in one pass.

---

## 12. FILES TO MODIFY (when approved)

| File / area | Purpose |
|-------------|---------|
| `src/modules/mastery-engine/lesson-eco-map.ts` (new) | Lesson ↔ ECO links |
| `coverage-matrix.ts` | Include lesson dimension |
| `knowledge/*.source.*` | Sync instructor digests when 12 files land |
| Selected `prisma/seed/content/pmp-*.ts` | Only approved lesson enrichments |
| Tests | Mapping + T7/T8 + T4≠T8 assertions |
| Docs / checkpoint | B.3 implementation record |

---

## 13. FILES TO PROTECT

- `pmp-exam-001`…`200` stems/options/answers/scoring/externalKeys  
- Exam simulator selection/scoring  
- ECO taxonomy 26-task (do not regress to 24)  
- T07/T08 IDs and concepts  
- Existing E2E / readiness paths unless necessary  

---

## 14. TEST PLAN (post-approval)

1. Unit: every ECO task has ≥1 lesson link OR explicit `gap:true`.  
2. Unit: T07 and T08 linked; T4≠T8 in map.  
3. Protected bank fingerprint still locked (B.2).  
4. Regression: `lint` · `test` ≥318 · `build` · `e2e` ≥58.  

No tests run as part of this audit-only gate (no code changes).

---

## 15. PHASE B.3 IMPLEMENTATION PLAN

**Step 0 (required):** Obtain the 12 instructor lesson files **or** written approval to proceed with PLA 77 + Knowledge Pack digests only.

**Step 1:** Build `lesson-eco-map` for all 77 slugs (fix 19 unmapped).  
**Step 2:** Mark gaps T01/T07/T06/T09/T10/T06-CI with `coverageStatus`.  
**Step 3:** Design (not mass-write) lesson blueprints for RED tasks.  
**Step 4:** Enrich only highest-priority lessons (T07, T01, finance, T4 vs T8).  
**Step 5:** Extend coverage matrix Lesson×ECO×Concept×Skill.  
**Step 6:** Tests + docs; stop before Phase C/D.

---

## 16. RISKS

| Risk | Mitigation |
|------|------------|
| Designing lessons without the 12 sources | STOP / request upload |
| Collapsing T8 into T4 | Explicit distinction + tests |
| PMBOK-syllabus creep | TASK-FIRST gate in review |
| Rewriting thin lessons too early | Depth after map + sources |
| Treating heuristic maps as PMI | Label DERIVED_PEDAGOGICAL |

---

## 17. DECISION GATE

| Option | Meaning |
|--------|---------|
| **A** | Upload the 12 instructor lesson files, then re-run source-grounded lesson audit |
| **B** | Approve proceeding with **PLA 77 + Knowledge Pack Lesson 2/5/7 digests only** (mark instructor depth UNVERIFIED) |
| **C** | Pause B.3 |

**Auditor recommendation:** **A** preferred. **B** acceptable if user confirms the 12 files are the PLA modules already in-repo (clarify naming) or are unavailable.

---

### Definition of Done — audit checklist

- [x] Searched for 12 lesson files  
- [x] Sources hierarchized  
- [x] 26 ECO tasks verified  
- [x] PLA 77 linked heuristically to ECO  
- [x] Concepts/skills gaps identified  
- [x] T7/T8 coverage assessed  
- [x] T4 vs T8 distinction assessed  
- [x] PMBOK role constrained  
- [x] No PMI claim without source  
- [x] No stem edits / no Q 201+  
- [x] Implementation plan proposed  
- [ ] Full SOURCE-GROUNDED lesson inventory from 12 files — **blocked**

---

**STOP — AUDIT ONLY. WAITING FOR EXPLICIT APPROVAL.**
