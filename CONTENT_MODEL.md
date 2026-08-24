# Content Model

## Entity Relationship

```
Academy (1) ──→ (N) Course (1) ──→ (N) Module (1) ──→ (N) Lesson (1) ──→ (N) LearningItem
                                         │                  │                    │
                                    category?          difficulty          Question linked via QUIZ
                                                         │
Skill (1) ←── (N) LessonSkill (N) ──→ Lesson
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

Same i18n pattern.

**Module** additionally has:

| Field | Type | Notes |
|---|---|---|
| category | String? | Structure tag (FOUNDATIONS, DEBT, PEOPLE, AGILE, …) |

**Lesson** additionally has:

| Field | Type | Notes |
|---|---|---|
| estimatedMinutes | Int? | Total lesson estimate (micro-learning) |
| difficulty | BEGINNER \| INTERMEDIATE \| ADVANCED | Content difficulty |
| learnMinutes … masterMinutes | Int? | Per-phase estimates |
| skills | LessonSkill[] | Many concepts per lesson |

### LearningItem

| Field | Type | Notes |
|---|---|---|
| type | Enum | TEXT, VIDEO, EXERCISE, QUIZ, FLASHCARD, SIMULATION, ASSESSMENT |
| sortOrder | Int | Order within lesson |
| payload | JSON | Type-specific content (Zod validated) |
| difficulty | Int | 1-5 scale (item-level) |

#### Payload Schemas (Zod)

**TEXT**: `{ bodyFr, bodyEn }`

**VIDEO / Short Learning** (placeholder hosting):

```json
{
  "videoUrl": null,
  "durationSeconds": 150,
  "titleFr": "...",
  "titleEn": "...",
  "language": "both",
  "thumbnailUrl": null,
  "descriptionFr": "...",
  "descriptionEn": "...",
  "isPlaceholder": true,
  "isShort": true,
  "topic": "income",
  "difficulty": "BEGINNER",
  "academySlug": "personal-finance",
  "relatedSkillSlug": "pf-income"
}
```

Short Learning = VIDEO with `isShort: true` and duration ≤ ~180 seconds. No YouTube/Vimeo integration yet.

**EXERCISE**: `{ promptFr, promptEn, hintFr?, hintEn? }`

**QUIZ**: `{ instructionsFr?, instructionsEn? }` + linked Question records

**FLASHCARD**: `{ frontFr, frontEn, backFr, backEn }`

**SIMULATION** / **ASSESSMENT**: placeholder schemas for future phases (no runtime UI yet)

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

### Personal Finance (`personal-finance`) — ACTIVE

**Course**: essentials

| Module (category) | Lessons |
|---|---|
| foundations (FOUNDATIONS) | understanding-income, tracking-expenses, building-a-budget |
| saving-investing (INVESTING) | why-save, introduction-to-investing, risk-and-return |
| wealth-building (WEALTH_BUILDING) | compound-interest |

### Corporate Finance (`corporate-finance`) — ACTIVE

**Course**: cf-essentials

| Module (category) | Lessons |
|---|---|
| foundations (FOUNDATIONS) | financial-statements-overview, revenue-ebitda-ebit, cash-flow-basics |
| valuation (VALUATION) | enterprise-vs-equity-value, multiples-and-dcf-basics |

### PMP (`pmp-project-management`) — ACTIVE

**Course**: foundations

| Module (category) | Lessons |
|---|---|
| pm-foundations (PROCESS) | what-is-project-management, project-roles, project-lifecycle |
| methodologies (AGILE) | predictive-vs-adaptive, agile-principles, hybrid-project-management |

Skills cover People, Process, Business Environment, Agile, Hybrid, Situational Thinking.

Each lesson contains: 1 TEXT + 1 VIDEO (placeholder, optionally Short) + 1 EXERCISE + 1 QUIZ + 1 FLASHCARD.

## Adding New Content

1. Add Skill if new concept
2. Create Lesson via seed helper (`difficulty`, `category` on module)
3. Link multiple skills via `LessonSkill`
4. Add LearningItems with validated payloads
5. Link Questions to QUIZ LearningItems

See `prisma/seed/helpers.ts` for `seedLessonWithContent()`.
