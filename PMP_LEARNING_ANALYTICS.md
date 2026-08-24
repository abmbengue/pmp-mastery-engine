# PMP Learning Analytics (Phase 8)

Deterministic learning analytics and intelligent retry for the PMP Exam Simulator.

**Practice scores / Practice Readiness only — never official PMI scoring or readiness.**

## PLA PMP Learning Blueprint

Proprietary pedagogical model used to construct exams.

- Domains: PEOPLE, PROCESS, BUSINESS_ENVIRONMENT
- Delivery: AGILE, HYBRID, PREDICTIVE
- Difficulties: EASY, MEDIUM, HARD
- Scenario types: FIRST_ACTION, NEXT_ACTION, BEST_ACTION, PREVENTION, ROOT_CAUSE, STAKEHOLDER, RISK, CHANGE, CONFLICT, AGILE, HYBRID, GOVERNANCE
- Learning objectives: IDENTIFY, APPLY, ANALYZE, DECIDE

This is **not** the official PMI exam blueprint.

Functions:

- `buildExamBlueprint(examType)`
- `buildExamFromBlueprint(blueprint, candidates, seed, excludeIds?)`

## Question metadata

Exam-bank questions include:

- domain, deliveryApproach, difficulty, scenarioType, learningObjective
- primary + linked skills
- bilingual scenario / prompt / explanations

Bank size (Phase 8): **200** original bilingual items (≥180 required).

## Exam builder & randomization

- Seeded PRNG (`createSeededRng`) — same blueprint + seed + pool ⇒ same exam
- Soft caps: max per skill / scenario type
- Domain / difficulty / delivery quotas
- **No silent shortfall**: throws `INSUFFICIENT_QUESTION_BANK` if the bank cannot fill the requested count (including FULL_PMP 180)

## Repetition prevention

`avoidRecentQuestions(allIds, recentIds, needed)`

- Prefer excluding questions from the last ~3 completed sessions
- If remaining pool &lt; needed, **fall back** to the full bank (documented; never invent items)

## Error analysis

`classifyError()` — deterministic taxonomy from metadata:

KNOWLEDGE_GAP, MISREAD_SCENARIO, WRONG_PRIORITY, WRONG_ACTION, AGILE_MINDSET, STAKEHOLDER_ERROR, RISK_ERROR, PROCESS_ERROR, OTHER

Persisted as `ExamError` (optional learner override). **LLM is never the scoring source of truth.**

## Retry engine

`buildRetryExam()` + `createRetrySession()`

Types: RETRY_WRONG_QUESTIONS, RETRY_WEAK_SKILLS, RETRY_WEAK_DOMAIN, RETRY_ERROR_TYPE, RETRY_MIXED

Difficulty can step EASY → MEDIUM → HARD only when results show improvement (deterministic).

Retries are linked via `ExamSession.parentSessionId` + `retryType`.

## Performance history & score trend

Dashboard: last 5 attempts, evolution chain, trend.

`calculateScoreTrend()` → IMPROVING | STABLE | DECLINING | INSUFFICIENT_DATA (≥3 attempts).

## Readiness V2

`calculatePmpReadinessV2()` uses recent scores, average, trend, domains, skills, unanswered rate, repeated mistakes, retry performance, and practice target.

Always labeled **Practice Readiness** with an explanation + limitations.

## Practice target

User-selectable: 70 / 75 / 80 / 85 (`PracticeTarget`). Shows current average vs target gap.

## Recommendations

Extended `recommendNextLearning()` priority:

1. weak skill  
2. repeated error skill  
3. weak domain  
4. learning skill  
5. unfinished lesson  
6. next incomplete  

No parallel recommendation system.

## AI Tutor

Existing port/service unchanged. Context can include `errorType`, `weakSkill`, `previousAttemptsSummary`. Analytics remain deterministic; tutor explains them.

## Privacy

Stores only learning data (answers, errors, scores, targets). No banking / sensitive personal financial data.

## Limitations

- Deterministic heuristics, not ML
- Blueprint is pedagogical, not PMI official
- Retry pool quality depends on bank coverage per skill/domain
- Trend needs ≥3 attempts

## Key files

| Area | Path |
|------|------|
| Blueprint | `src/modules/assessment-engine/exam-blueprint.ts` |
| Analytics / retry / readiness V2 | `src/modules/assessment-engine/analytics-engine.ts` |
| Services | `src/modules/assessment-engine/exam-service.ts` |
| API | `/api/exam`, `/api/exam/[sessionId]`, `/api/exam/analytics` |
| Docs (exam) | `PMP_EXAM_SIMULATOR.md` |
