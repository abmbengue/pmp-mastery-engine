# Content Model

## Entity Relationship

```
Academy (1) ──→ (N) Course (1) ──→ (N) Module (1) ──→ (N) Lesson (1) ──→ (N) LearningItem
                                                                                    │
Skill (1) ←── (N) Question ←── (N) AnswerOption              Question linked via LearningItem (QUIZ type)
  │
  └── ConceptMastery (per User)
```

## Models

### Academy

| Field | Type | Notes |
|---|---|---|
| slug | String (unique) | URL identifier |
| titleFr / titleEn | String | Bilingual title |
| descriptionFr / descriptionEn | Text | Bilingual description |
| status | PLANNED \| ACTIVE | Catalogue visibility |
| sortOrder | Int | Display order |

### Course → Module → Lesson

Same i18n pattern. Lesson additionally has:

| Field | Type | Notes |
|---|---|---|
| estimatedMinutes | Int? | Total lesson estimate |
| learnMinutes | Int? | LEARN phase target |
| practiceMinutes | Int? | PRACTICE phase target |
| testMinutes | Int? | TEST phase target |
| reviewMinutes | Int? | REVIEW phase target |
| masterMinutes | Int? | MASTER phase target |

### LearningItem

| Field | Type | Notes |
|---|---|---|
| type | Enum | TEXT, VIDEO, EXERCISE, QUIZ, FLASHCARD, SIMULATION, ASSESSMENT |
| sortOrder | Int | Order within lesson |
| payload | JSON | Type-specific content (Zod validated) |
| difficulty | Int | 1-5 scale |

#### Payload Schemas (Zod)

**TEXT**: `{ bodyFr, bodyEn }`

**VIDEO** (placeholder):
```json
{
  "url": null,
  "durationSec": null,
  "titleFr": "...",
  "titleEn": "...",
  "language": "both",
  "thumbnailUrl": null,
  "descriptionFr": "...",
  "descriptionEn": "...",
  "isPlaceholder": true
}
```

**EXERCISE**: `{ promptFr, promptEn, hintFr?, hintEn? }`

**QUIZ**: `{ instructionsFr?, instructionsEn? }` + linked Question records

**FLASHCARD**: `{ frontFr, frontEn, backFr, backEn }`

### Question

| Field | Type | Notes |
|---|---|---|
| type | Enum | SINGLE_CHOICE, MULTIPLE_CHOICE, TRUE_FALSE, NUMERIC, CALCULATION, SITUATIONAL |
| promptFr / promptEn | Text | Question text |
| explanationCorrectFr / explanationCorrectEn | Text | Correct answer explanation |
| difficulty | Int | 1-5 |
| category | String? | Optional grouping |
| skillId | FK → Skill | Associated concept |

### AnswerOption

| Field | Type | Notes |
|---|---|---|
| labelFr / labelEn | String | Answer text |
| isCorrect | Boolean | |
| explanationWrongFr / explanationWrongEn | Text? | Wrong answer explanation |

### User Progress

| Model | Purpose |
|---|---|
| Enrollment | User ↔ Course |
| LessonProgress | Status, timeSpentSec, startedAt, completedAt |
| QuizAttempt | Score, answers, attemptNo, isCorrect |
| ConceptMastery | weak / learning / mastered per skill |
| LearningStreak | currentStreak, longestStreak |

## Seed Content Summary

### Personal Finance (`personal-finance`)

**Course**: essentials

| Module | Lessons |
|---|---|
| foundations | understanding-income, tracking-expenses, building-a-budget |
| saving-investing | why-save, introduction-to-investing, risk-and-return |

### PMP (`pmp-project-management`)

**Course**: foundations

| Module | Lessons |
|---|---|
| pm-foundations | what-is-project-management, project-roles, project-lifecycle |
| methodologies | predictive-vs-adaptive, agile-principles, hybrid-project-management |

Each lesson contains: 1 TEXT + 1 VIDEO (placeholder) + 1 EXERCISE + 1 QUIZ (with 1 question) + 1 FLASHCARD.

## Adding New Content

1. Add Skill if new concept
2. Create Lesson via seed helper or admin (future CMS)
3. Add LearningItems with validated payloads
4. Link Questions to QUIZ LearningItems

See `prisma/seed/helpers.ts` for the `seedLessonWithContent()` helper.
