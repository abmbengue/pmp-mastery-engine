# Spaced Repetition (Phase 9)

## Purpose

Deterministic, explainable micro-review scheduling. **Not machine learning.** Pedagogical only.

## Core modules

| Module | Role |
|---|---|
| `src/modules/learning-engine/spaced-repetition.ts` | Pure intervals + `buildReviewQueue()` |
| `src/modules/learning-engine/corrective-learning.ts` | Error type → skill / LO mapping |
| `src/modules/learning-engine/review-service.ts` | `getReviewQueue()` for authenticated user |
| `recommendNextLearning()` | Extended with `CORRECTIVE_LEARNING` and `DUE_FOR_REVIEW` |

## Intervals (configurable constants)

| Mastery | Interval |
|---|---|
| WEAK | Review soon (0 days) |
| LEARNING | Short interval (3 days) |
| MASTERED | Longer interval (14 days) |

Repeated exam errors (≥2) pull the due date forward by 2 days.

## Review queue priority

1. Weak mastery  
2. Repeated errors  
3. Recent failure  
4. Due today (spaced)  
5. Unfinished lessons (appended by `getReviewQueue`)  
6. New recommendation via existing `recommendNextLearning()` on dashboard / report  

## Error → Corrective Learning

```
Exam → Error Analysis → errorType → Weak Skill → Corrective Learning
```

`mapErrorToCorrectiveLearning()` maps `ExamErrorCategoryCode` to preferred skill slugs and a learning objective. Recommendations reuse **`recommendNextLearning()`** (reason `CORRECTIVE_LEARNING`) — no second recommendation engine.

## UI

- `/[locale]/review` — Review Now (5–10 min micro-learning)
- Dashboard section **Review Now / Due for Review**

## Security

Queue is built only from `auth()` session `userId`. Client-supplied `userId` / email are never trusted.

## What this is NOT

- Not ML / adaptive neural ranking  
- Not an official PMI study plan  
- Not a CMS-driven content pipeline  
