# Pedagogical Content Guidelines — Professional Learning Academy

These rules let another AI or author produce content **without changing the learning engines**.

## 1. Good lesson structure (micro-learning)

Every lesson body (FR + EN) should contain:

1. **Objective** — what the learner will be able to do  
2. **Explanation** — simple concept teaching  
3. **Example** — concrete illustration  
4. **Practical example** — apply in a realistic mini-situation  
5. **Common mistake** — frequent misconception  
6. **Key takeaway** — one memorable sentence  

Then: **Practice** (exercise) → **Quiz** → optional **AI Tutor**.

Keep total session in the **3–10 minute** range. Prefer several short lessons over one long article.

## 2. Good quiz structure

- One clear skill / learning objective  
- Prefer situational judgment over pure memorization when possible  
- At least one correct option  
- Wrong options should include `explanationWrongFr` / `explanationWrongEn`  
- FR and EN must teach the **same** concept  

## 3. Good PMP practice question

```
SCENARIO → PROBLEM → OPTIONS → BEST ACTION → EXPLANATION → WHY OTHERS ARE LESS APPROPRIATE
```

Rules:

- Original educational content only  
- Never claim official PMI / PMBOK exam items  
- Avoid repetitive templates (“educational context #N”)  
- Distractors must be plausible but clearly weaker  
- Tag `scenarioType`, `learningObjective`, domain, delivery approach  

Disclaimer always: **Practice only — NOT AN OFFICIAL PMI SCORE**.

## 4. Good Short (≤180 seconds)

Required metadata:

- title, learning objective, academy, related lesson, related skill  
- difficulty, durationSeconds (60–180)  
- concise script (hook → concept → example → takeaway)  
- key takeaway  

Still may be `provider: placeholder` until real hosting is added.

## 5. Micro-learning principles

- One idea per lesson  
- Immediate practice  
- Spaced review later (`nextReviewAt`)  
- Corrective learning from errors — not shame  

## 6. Learn → Practice → Test → Review → Master

Do not skip phases in content design. LEARN text must be enough to attempt PRACTICE/TEST without external sources.

## 7. Corrective learning

Map exam error categories → skills → **specific lessons** via existing `mapErrorToCorrectiveLearning` + `recommendNextLearning`.  
**Never** create a second recommendation engine.

## 8. Spaced repetition

Intervals: WEAK=1 / LEARNING=3 / MASTERED=7 days. Content authors should not hardcode alternate schedules in UI.

## 9. FR / EN rules

- Same pedagogy, natural wording (not machine-calqued meaning drift)  
- UI keys remain mirrored in `messages/fr.json` + `messages/en.json`  
- Never ship FR-only or EN-only lesson bodies  

## 10. Original PMP content rules

- Proprietary scenarios only  
- No reproduction of PMI copyrighted exam wording  
- Scores = practice readiness only  
- Visible disclaimer in UI, report, and PDF  

## Catalog location

`prisma/seed/content/` + validator `src/modules/content/content-validator.ts`.
