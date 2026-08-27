# PMP MASTERY ENGINE — B.3 LESSON SOURCE AUDIT
# Source-grounded re-audit (12 instructor course files)

**Branch:** `cursor/pmp-mastery-engine-phase-b3-lessons-e932`  
**Date:** 2026-08-27  
**Mode:** AUDIT ONLY — no implementation  
**Product constraint:** Exam in ~2 months · courses end in ~1 month · **mobile-first**

---

## 1. SOURCES READ

| # | Source | Status | Classification | Notes |
|--:|--------|--------|----------------|-------|
| 1 | `ECO_2026_398a.pdf` | **READ** | `PMI_ECO_2026` / HIGH | Primary exam outline — 26 tasks confirmed |
| 2 | Knowledge Pack v1.1 `.source.md` / `.json` | **READ** | Compact pedagogical layer | Includes Lesson 2/5/7 **digests only** |
| 3 | Knowledge Pack generated JSON/MD | **READ** | Derived from code | Architecture export |
| 4 | PLA 77 lessons (`prisma/seed/content/pmp-*.ts`) | **READ** (inventory) | `PLA_INTERNAL` | Existing app lessons — not instructor course pack |
| 5 | Mastery-engine graphs | **READ** | PLA + DERIVED | Concepts/skills/misconceptions |
| 6 | **12 instructor course files** | **NOT FOUND** | — | **BLOCKER** |
| 7 | PMBOK 8 full text | **NOT FOUND** | Would be REFERENCE only | Do not invent |

### Uploads folder actual contents

```
ECO_2026_398a.pdf
PMP_MASTER_KNOWLEDGE_PACK_3e5d.md
PMP_MASTER_KNOWLEDGE_PACK_7a61.json
CURSOR_IMPORT_PMP_MASTER_KNOWLEDGE_4b36.md
```

**No additional PDF/MD/DOCX instructor course files appeared since prior B.3 audit.**

### What was NOT done (by rule)

- Did **not** invent contents of the 12 missing files  
- Did **not** treat the 77 PLA lessons as if they were the 12 instructor courses  
- Did **not** start coding or Phase C/D  

---

## 2. ECO COVERAGE

ECO July 2026 remains **VERIFIED**:

| Domain | Tasks | Weight |
|--------|------:|-------:|
| People | **8** | 33% |
| Process | **10** | 41% |
| Business Environment | **8** | 26% |
| **Total** | **26** | 100% |

T07 knowledge transfer and T08 communication = **OFFICIAL**. Do not regress to 24/6.

### Course-file coverage of ECO tasks

| Status | Meaning | Count |
|--------|---------|------:|
| Covered by instructor course files | Direct section found in the 12 files | **0 — files missing** |
| Partially covered (KP Lesson 2/5/7 digests only) | Digest mentions themes | Partial for T01/T02/T03/T04/T05 + Process T05/T07/T08 + BE governance |
| Not covered by instructor files | Cannot verify | **All 26 until files arrive** |
| Covered by PLA 77 (heuristic) | App lessons exist | See prior B.3 matrix — DERIVED_PEDAGOGICAL |

### Known exam-impact gaps (from ECO + PLA inventory — pending course confirmation)

| ECO Task | Exam impact (2 months) | PLA lesson status | Instructor course status |
|----------|------------------------|-------------------|--------------------------|
| PEOPLE-T01 Vision | High | No dedicated lesson | **UNVERIFIED** (KP L2 digest only) |
| PEOPLE-T07 Knowledge transfer | High | Missing / unmapped `lessons-learned` | **UNVERIFIED** |
| PEOPLE-T08 Communication | High | Thin; dual with T04 | **UNVERIFIED** |
| PEOPLE-T04 Engagement | High | Present | KP L2 digest |
| PROCESS-T06 Finance/EVM | Very high | Thin `cost` | **UNVERIFIED** |
| PROCESS-T05 Procurement | High | Thin | KP L5 digest |
| PROCESS-T09 Status | High | Weak | **UNVERIFIED** |
| PROCESS-T10 Closure | Medium-high | Weak | **UNVERIFIED** |
| BUSINESS-T06 CI | Medium | Weak | **UNVERIFIED** |
| T4 vs T8 distinction | High | Not taught explicitly | **UNVERIFIED** |

---

## 3. LESSON COVERAGE

### PLA 77 (existing app — not a substitute for the 12 files)

| Metric | Value |
|--------|------:|
| Lessons | 77 |
| Modules | 7 |
| With situation | ~56 |
| Thin (≤1Q, no situation) | ~19 |
| Explicit Lesson↔ECO map in code | **Missing** |

### Classification framework (ready; not applied to invented instructor content)

| Class | Meaning |
|-------|---------|
| A | Source-grounded / solide |
| B | Source-grounded but à enrichir |
| C | PLA pedagogical / acceptable |
| D | Thin |
| E | Mal mappée |
| F | Redondante |
| G | Missing lesson |

**Cannot assign A/B from instructor courses until the 12 files are readable.**

---

## 4. CRITICAL GAPS

### P0 — blocks source-grounded B.3
1. **12 instructor course files absent** from workspace  
2. Cannot build COURSE FILE → SECTION → ECO TASK matrix without reading them  

### P0 — exam impact (provisional until course files confirm/deny)
3. PEOPLE-T07 pedagogically orphan in PLA  
4. PEOPLE-T01 vision hole in PLA  
5. PROCESS-T06 finance/EVM thin in PLA  

### P1 — after sources arrive / if B path approved
6. Lesson↔ECO map missing in architecture  
7. T4 ≠ T8 not taught as mastery distinction  
8. T08 / T09 / T10 / BE-T06 weak  
9. Mobile-first lesson interaction requirements not yet encoded in lesson blueprint  
10. 80 PARTIAL exam metadata + confidence wiring (from B.2) before Phase C  

### P2 / P3
- Thin lesson depth batch  
- PMBOK reference enrichment when PDF available  
- Q201+ generation (Phase D)  
- Adaptive engine (Phase C)  

---

## 5. TOP 10 PRIORITIES FOR THE NEXT 30 DAYS

Ordered by **EXAM IMPACT × LEARNING VALUE × TIME TO MASTER** (provisional; re-rank after reading the 12 files):

| Rank | Priority | Why (2-month exam) | Depends on 12 files? |
|-----:|----------|--------------------|----------------------|
| 1 | Ingest & map the 12 instructor files → ECO | Unlocks source-grounded lessons | **YES** |
| 2 | PEOPLE-T07 knowledge transfer lesson path | Official ECO; currently 0 Q / no lesson | Confirm in courses |
| 3 | PEOPLE-T08 vs T04 distinction + communication depth | High confusion risk on exam | Confirm in courses |
| 4 | PROCESS-T06 cost/finance/EVM teachable core | High Process weight; currently thin | Confirm in courses |
| 5 | PEOPLE-T01 shared vision | Official ECO; currently missing | KP L2 suggests presence |
| 6 | PROCESS-T05 procurement depth | KP L5; PLA thin | Confirm |
| 7 | PROCESS-T09 status metrics + T10 closure | Weak mastery path | Confirm |
| 8 | Conflict / risk / issue / change distinctions | High situational exam value | Partially in PLA + KP L7 |
| 9 | Mobile lesson + practice daily loop UX | User studies mostly on phone | Architecture |
| 10 | Weakness → review → short mock loop | Month-2 consolidation | After lessons mapped |

**Month 1 (courses finishing):** TASK-FIRST lessons + mini-checks + practice on taught tasks.  
**Month 2:** weakness remediation + spaced review + mocks — not new encyclopedia content.

---

## 6. MOBILE LEARNING REQUIREMENTS

Must support phone-first sessions (architecture implications for lessons/mastery — **not a UI rewrite now**):

| Need | Implication |
|------|-------------|
| Short sessions (5–15 min) | Lessons in cards / phases; one objective per screen |
| Tactile answers | Large buttons; option cards; swipe-friendly |
| Immediate feedback | Mini-check after concept; show why wrong |
| Visible progress | ECO-task mastery chips; domain bars |
| Weakness visibility | Weak-skill cards; “Review now” queue |
| Fast launch | One-tap quiz / domain drill / mock |
| Offline-ish readability | Dense text broken into sections; no huge walls |
| Graphs | Simple domain radar / heatmap — not desktop dashboards |
| Retention | Due reviews as pushable cards (1/3/7 live; 0–30 prep) |

---

## 7. RECOMMENDED LESSON ARCHITECTURE

```
ECO TASK (26)
  → Enablers (ECO)
  → Instructor course section(s)   [MISSING INPUT]
  → PLA Lesson(s)
       OBJECTIVE
       WHY (ECO link)
       CORE CONCEPTS / SUB-CONCEPTS
       HOW TO THINK (FIRST/NEXT/BEST)
       SCENARIO
       TRAPS / MISCONCEPTIONS
       MINI-CHECK
       PRACTICE LINK
       MASTERY SIGNALS
  → Skills → Questions (200 protected + future)
```

Rules:
- Not mandatory 26 lessons = 26 tasks  
- One lesson may cover multiple tasks if justified  
- No orphan high-impact tasks  
- PMBOK clarifies; does not dictate chapter list  

---

## 8. FILES TO MODIFY

**After GO + sources available:**

| Target | Purpose |
|--------|---------|
| `src/modules/mastery-engine/lesson-eco-map.ts` (new) | Lesson ↔ ECO + source confidence |
| `coverage-matrix.ts` | Add lesson dimension |
| Selected `prisma/seed/content/pmp-*.ts` | Enrich only approved gaps |
| Knowledge pack sources | Sync when instructor sections extracted |
| Tests | Map completeness, T07/T08, T4≠T8, bank fingerprint |
| Docs / checkpoint | B.3 implementation record |

---

## 9. FILES NOT TO MODIFY

- Exam stems/options/answers/scoring/IDs `pmp-exam-001`…`200`  
- Exam simulator core / scoring  
- ECO taxonomy (keep 26 / T07 / T08)  
- Mass rewrite of all 77 lessons  
- Phase C adaptive / Phase D generation  

---

## 10. TEST PLAN

Baseline to preserve: lint · tests ≥318 · build · E2E ≥58  

Future (implementation):
1. Every ECO task → lesson link OR explicit `gap:true`  
2. T07 & T08 linked; T4≠T8 asserted  
3. Protected bank fingerprint unchanged  
4. No accidental stem diffs  

**This audit:** no test run required (no code changes).

---

## 11. SOURCE CONFIDENCE

| Claim | Confidence |
|-------|------------|
| ECO 26 / People 8 / T07 / T08 | **HIGH** (`PMI_ECO_2026`) |
| Domain weights / 40–60 delivery | **HIGH** |
| Instructor course section → ECO maps | **UNVERIFIED** (files missing) |
| KP Lesson 2/5/7 themes | **MEDIUM** (digest, not full course file) |
| PLA 77 ↔ ECO heuristic | **DERIVED_PEDAGOGICAL** |
| PMBOK PD details | **MEDIUM/UNVERIFIED** (no full PMBOK) |
| Mobile UX needs | **PLA_INTERNAL** product requirement |

---

## 12. GO / NO-GO FOR IMPLEMENTATION

# **NO-GO**

**Reason:** Mission requires reading the **12 instructor course files** before implementation. They are **not present** in the workspace. Implementing lesson architecture from invented or assumed instructor content would violate SOURCE-GROUNDED > INVENTED.

### Required to flip to GO

1. Upload the 12 instructor course files to this agent **or**  
2. Explicitly confirm exact in-repo paths if they already exist under other names **or**  
3. Explicit written approval of path **B**: proceed using PLA 77 + Knowledge Pack Lesson 2/5/7 digests only (instructor depth remains UNVERIFIED)

### After GO
Re-run sections A–H with actual COURSE FILE → SECTION → ECO matrices, then wait for a second explicit approval before coding.

---

**STOP AFTER AUDIT.**  
DO NOT start Phase C / D / question generation / stem edits / PMBOK syllabus build.
