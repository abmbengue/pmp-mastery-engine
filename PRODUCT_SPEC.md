# Product Specification

## Product Name

**Professional Learning Academy** (PLA)

## Vision

A bilingual web platform for progressive professional skill acquisition through micro-learning: short lessons, videos, quizzes, exercises, flashcards, pedagogical simulators, PMP practice exams, spaced review, and practice readiness reports.

## Target Users

Non-technical professionals seeking to acquire or refresh professional skills in short learning sessions.

## Languages

- French (FR) — default
- English (EN)
- User-selectable; UI and seeded content in both languages

## Academies

### Active

| Academy | Focus | Status |
|---|---|---|
| Personal Finance | Foundations, debt, investing, wealth building (~29 lessons) | Active (Phase 10 expanded) |
| Corporate Finance | Statements, WC, valuation, DCF, M&A (~30 lessons) | Active (Phase 10 expanded) |
| PMP / Project Management | People / Process / Business / Agile / Hybrid / Situational (~38 lessons) + exam practice | Active (original content) |

### Planned (catalogue)

Business & Strategy, Financial Modeling, Energy & Oil & Gas, Leadership & Management, Professional English

### Planned (catalogue)

Business & Strategy, Financial Modeling, Energy & Oil & Gas, Leadership & Management, Professional English

## Content Types

1. Text  
2. Video / Short (placeholder URL; metadata ready)  
3. Quiz — single / multiple / true-false  
4. Exercise  
5. Flashcard  
6. Simulation (pedagogical finance simulators)  
7. Assessment / mock exam (PMP practice bank)

## Micro-Learning Format

```
LEARN → PRACTICE → TEST → REVIEW → MASTER
```

Plus **Review Now** spaced micro-sessions (≈5–10 minutes).

## Progression

- Enrollment, lesson progress, course %  
- Quiz attempts / scores  
- Concept mastery (WEAK / LEARNING / MASTERED)  
- Spaced review queue  
- Corrective learning from exam errors (via `recommendNextLearning`)

## Dashboard

Continue Learning, Review Now / Due for Review, PMP Practice, Recommended for You, My Learning, Skills, Stats, Quick Access.

## AI Tutor

Port + providers (noop / mock / openai-compatible). Used for hints/explanations; not for scoring.

## PMP Practice

- Original FR/EN question bank  
- Exam builder, retry, error analysis, performance history, score trend  
- Readiness V2 + **PMP Readiness Report** (practice only)  
- Explicit disclaimer: **NOT AN OFFICIAL PMI SCORE**

## Personal Finance Categories

- Foundations: income, expenses, budgeting, emergency fund, saving  
- Debt: interest, loans, credit, repayment strategies  
- Investing: stocks, bonds, diversification, risk/return, real estate  
- Wealth building: compound interest, inflation, retirement, portfolio basics  

## Corporate Finance Concepts (educational)

Financial statements, revenue, EBITDA, EBIT, working capital, FCF, EV / equity value, debt, capital structure, WACC, DCF, trading/transaction multiples, accretion/dilution basics. Existing simulators reused.

## Out of Scope (through Phase 9)

Payment, CMS, OAuth, marketplace, native mobile, ML, official PMI scoring/integration, complex video cloud, commercial analytics.
