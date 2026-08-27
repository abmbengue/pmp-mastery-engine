# CURSOR — IMPORT PMP MASTER KNOWLEDGE PACK

**Version:** 1.1 (Phase B.1 — source governance correction)  
**Primary ECO source:** PMI PMP Examination Content Outline — July 2026 (`ECO_2026_398a.pdf`)

## Source of truth order

1. Read `knowledge/PMP_MASTER_KNOWLEDGE_PACK.source.md` and `.source.json` (corrected pack)
2. Runtime module: `src/modules/mastery-engine/` (ECO taxonomy already 26-task)
3. Generated exports: `knowledge/PMP_MASTER_KNOWLEDGE_PACK.json` / `.md` (from `buildKnowledgePack()`)
4. Exam metadata: `prisma/seed/pmp-question-mastery-metadata.ts`
5. Audit: `PMP_MASTERY_ENGINE_PHASE_B_ECO_SOURCE_AUDIT.md`

## GOVERNANCE — DO NOT REGRESS TO 24 TASKS

The previous Knowledge Pack (**v1.0**) was **incomplete**:
- it listed **24** ECO tasks
- it omitted **People T7** (Ensure knowledge transfer / Assurer le transfert des connaissances)
- it omitted **People T8** (Plan and manage communication / Planifier et gérer la communication)

The **primary source** PMI ECO July 2026 confirms:
- People = **8**
- Process = **10**
- Business Environment = **8**
- Total = **26**

The **code taxonomy** (`PEOPLE-T01`…`PEOPLE-T08`, etc.) was already correct and must remain.

The Knowledge Pack **v1.1** is aligned with this primary source.

**Never** “correct” the taxonomy down to 24 tasks to match an outdated pack.

## Rules

- Current July 2026 PMI ECO controls current exam-domain/task claims.
- PMBOK 8 controls PMBOK 8 conceptual claims.
- Lesson 2/5/7 provide course-specific reinforcement.
- Never invent unsupported PMI requirements.
- Never copy source text.
- English task titles in PLA are **DERIVED** paraphrases unless an English ECO PDF is in the workspace.
- `DERIVED_PEDAGOGICAL` is not official PMI.
- Existing 200 exam questions are strictly protected.
- Do not generate new questions yet.
- T4 (engagement) ≠ T8 (communication) — related but distinct ECO tasks.
- T7 (knowledge transfer) is an official ECO People task — do not demote it.

## Phase B / B.1

1. ECO-domain/task → PMBOK performance-domain → concept → sub-concept → skill mappings.
2. Prerequisite and commonly-confused relationships.
3. Weakness/error/retention metadata structures.
4. Do not alter the 200 exam questions.
5. Do not start large-scale question generation.
6. Report what is source-grounded vs what remains to verify.

STOP at the Phase B / B.1 checkpoint.
