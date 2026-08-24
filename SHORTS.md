# Shorts (Phase 10)

## Purpose

~3-minute micro-learning VIDEO placeholders (60–180 seconds), bilingual.

## Metadata (VIDEO payload)

- title / description FR+EN  
- topic, academy, skill (`relatedSkillSlug`)  
- difficulty, learningObjective  
- durationSeconds (≤180 when `isShort`)  
- relatedLessonSlug  

Pedagogical placeholder structure on the watch page:

HOOK → CONCEPT → EXAMPLE → KEY TAKEAWAY

No YouTube/Vimeo hosting in this phase.

## UX

- List + filters (topic / skill / difficulty)  
- “3 min learning” badge  
- Watch, mark completed (`/api/shorts/complete` + LessonProgress.metadata)  
- Previous / next short  

## Demo shorts (seed)

PF: compound interest, emergency fund, inflation, diversification  
CF: EBITDA, enterprise value, WACC, FCF  
PMP: stakeholder, risk vs issue, agile mindset, change, conflict, hybrid  

Progress reuses existing short-progress services — no parallel tracker.
