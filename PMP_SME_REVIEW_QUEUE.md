# PMP SME Review Queue

**Generated:** 2026-08-24 (read-only audit)  
**Bank:** `prisma/seed/pmp-exam-bank-data.ts` (200 items)  
**Disclaimer:** Original educational practice content — **NOT official PMI items / scoring**.

## Purpose

Help a human SME prioritize which practice questions need option/explanation polish.  
Phase 12 removed template *scenario* markers; **correct-option stems remain pattern-family** by `scenarioType`.

## Heuristic (automated — not a substitute for SME judgment)

Flag **REVIEW** / **REWRITE** when:

1. Correct option English label prefix is reused **≥ 8** times across the bank  
2. Correct option matches a generic family phrase (`Clarify facts…`, `Assess impact on objectives…`, etc.)  
3. TRUE/FALSE with a relatively short scenario  

Categories:

| Tag | Meaning |
|---|---|
| STRONG | Unique situational options; keep |
| REVIEW | Plausible but formulaic; improve distractors/wording |
| REWRITE | Heavy stem reuse / generic best-action; rewrite options + explanation |
| REMOVE | Only if pedagogically wrong or unsafe — **none recommended mass-remove** |

## Aggregate result (this audit)

| Metric | Value |
|---|---|
| Total questions | 200 |
| Template “educational context #N” | **0** |
| Unique scenarios | 84 |
| Questions with wrong-option explanations | 200 |
| Heuristic REVIEW | ~42 |
| Heuristic REWRITE | ~143 |
| Heuristic STRONG (no flag) | ~15 |
| REMOVE | **0 recommended** |

**Interpretation:** Do **not** delete the bank. Scenarios are usable; **rewrite correct/incorrect options** so answers are situation-specific.

## Most-reused correct-option families (examples)

These prefixes appear ~14–16 times each (truncate shown):

1. Assess impact on objectives, risks, and stakeholders, then propose options…  
2. Make the scope/schedule/cost/quality trade-off explicit…  
3. Strengthen the change-management rule and impact communication…  
4. Analyze failure data to identify the systemic cause…  
5. Re-engage the sponsor with the business impact…  
6. Route the request through the agreed change-control process…  
7. Document the risk, assess impact/probability, and define a response…  
8. Facilitate a discussion based on objective criteria…

## Sample queue (first items by ID)

| ID | Domain | Skill | Diff | Issue | Rec |
|---|---|---|---|---|---|
| pmp-exam-001 | PEOPLE | conflict-management | EASY | best-action reused 16×; generic next-action | REWRITE |
| pmp-exam-002 | PEOPLE | communication | MEDIUM | best-action reused 16× | REWRITE |
| pmp-exam-003 | PEOPLE | stakeholder-engagement | HARD | best-action reused 16× | REWRITE |
| pmp-exam-004 | PEOPLE | team-development | EASY | best-action reused 16× | REWRITE |
| pmp-exam-005 | PEOPLE | schedule | MEDIUM | best-action reused 16× | REWRITE |
| pmp-exam-006 | PEOPLE | risk-management | HARD | best-action reused 15× | REWRITE |
| pmp-exam-007 | PEOPLE | change-management | EASY | best-action reused 16× | REWRITE |
| pmp-exam-008 | PEOPLE | governance | MEDIUM | best-action reused 15× | REWRITE |
| pmp-exam-009 | PEOPLE | business-value | HARD | best-action reused 14× | REVIEW |
| pmp-exam-010 | PEOPLE | agile-mindset | EASY | best-action reused 14× | REVIEW |
| pmp-exam-012 | PEOPLE | pmp-process | HARD | reused 15×; generic first-action | REWRITE |
| pmp-exam-013 | PEOPLE | pmp-people | EASY | reused 16×; generic next-action | REWRITE |

Full list can be regenerated with the same heuristics against `PMP_EXAM_BANK` without deleting items.

## SME rewrite checklist (per question)

1. Keep domain / delivery / scenarioType / skills metadata when still accurate  
2. Keep FR/EN pedagogical equivalence  
3. Make **best action** specific to *this* scenario’s actors/constraints  
4. Make distractors attractive but clearly weaker (with `explanationWrong*`)  
5. Prefer judgment over memorizing PLA house phrases  
6. Preserve practice-only / not official PMI language in explanations  

## Recommended batching

1. First 40 PROCESS HARD items with reused stems  
2. PEOPLE conflict/stakeholder family  
3. AGILE/HYBRID ritual integrity family  
4. Spot-check 20 “unflagged” items as STRONG controls  

**Do not** mass-delete. **Do not** import PMI copyrighted exam content.
