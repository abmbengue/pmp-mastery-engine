# PMP Readiness Report (Phase 9)

## Purpose

A bilingual **practice readiness** synthesis for learners. Educational estimate only.

## Hard disclaimer (always visible)

> **Practice Readiness — NOT AN OFFICIAL PMI SCORE**

Never present results as:

- an official PMI score  
- a guaranteed pass/fail prediction  
- an official PMP result  

## Page

`/[locale]/pmp-exam/readiness-report`

Built by `buildPmpReadinessReport(userId, locale)` in  
`src/modules/assessment-engine/readiness-report-service.ts`.

## Report contents

- Practice Readiness level + pedagogical narrative  
- Average / best / recent score  
- Score trend + evolution  
- Questions answered  
- Domain performance (PEOPLE / PROCESS / BUSINESS)  
- Delivery approach (AGILE / HYBRID / PREDICTIVE)  
- Weak skills  
- Recurring errors  
- Retry average  
- Recommended next actions (`recommendNextLearning` + corrective path)  

## Export (V1)

Printable view via `window.print()` (`ReadinessReportActions`). No heavy PDF dependency.

Responsive for desktop and mobile; print styles hide action buttons.

## Deterministic vs pedagogical

| Aspect | Nature |
|---|---|
| Score aggregates, trends, error ranks | Deterministic from stored attempts |
| Readiness narrative copy | Pedagogical explanation templates |
| PMI official scoring | **Not implemented / not claimed** |

## Security

`userId` comes only from `auth()` / `requireSession`. No client-provided identity.

## Related docs

- [SPACED_REPETITION.md](./SPACED_REPETITION.md)  
- [PMP_LEARNING_ANALYTICS.md](./PMP_LEARNING_ANALYTICS.md)  
- [PMP_EXAM_SIMULATOR.md](./PMP_EXAM_SIMULATOR.md)  
