# CONTENT_PERSONAL_FINANCE.md

Personal Finance content expansion — pedagogical enrichment only (no engine changes).

## Summary

| Metric | Before | After |
|---|---|---|
| Lessons | **29** | **53** |
| Quiz questions (catalog) | ~29 | **99** |
| Modules | 4 | 4 (same structure) |
| Shorts (PF) | 4 | 4 |
| Simulators linked | 3 | 3 (Debt reattached to repayment lesson) |

## Modules enriched

| Module | Lessons | Focus |
|---|---|---|
| `foundations` | 13 | Money, income, net vs gross, expenses, budget, cash flow, emergency fund, saving rate/habits, opportunity cost, inflation |
| `debt` | 14 | Debt types, interest, amortization, credit, minimum payments, DTI, snowball/avalanche, refinancing, cost of borrowing |
| `saving-investing` | 14 | Saving vs investing, risk/return, stocks/bonds/ETFs, diversification, volatility, horizon, liquidity, DCA, fees |
| `wealth-building` | 12 | Net worth, compounding, real vs nominal, retirement, FI, portfolio, risk management, behavioral finance |

## New concepts (examples)

- understanding-money, net-vs-gross-income, fixed-vs-variable-expenses, cash-flow-basics, saving-rate, opportunity-cost  
- what-is-debt, loan-amortization, minimum-payments, debt-snowball, debt-avalanche, refinancing-basics, cost-of-borrowing  
- funds-and-etfs, volatility-basics, investment-horizon, liquidity-basics, dollar-cost-averaging, investment-fees  
- net-worth, real-vs-nominal-return, financial-independence, risk-management-pf, behavioral-finance-basics  

Existing slugs preserved where required by tests (`understanding-income`, `compound-interest`, `building-a-budget`, etc.).

## Pedagogical structure (per lesson)

LEARN: Objectif → Explication → Exemple → Exemple pratique → Erreur fréquente → À retenir → **Décision**  
(+ Prolongement simulateur when relevant)  
PRACTICE: exercise prompt (situational / calculation)  
TEST: 1–4 situational questions with plausible distractors + wrong explanations  
REVIEW / MASTER: covered by player phases + decision takeaway  

FR and EN are natural pedagogical adaptations (not calques).

## Simulators associated

| Simulator | Lesson |
|---|---|
| BUDGET | `building-a-budget` |
| COMPOUND_INTEREST | `compound-interest` |
| DEBT_REPAYMENT | `debt-repayment-strategies` (was incorrectly on `tracking-expenses`) |

## Skills associated

`pf-foundations`, `pf-income`, `pf-budgeting`, `pf-debt`, `pf-interest`, `pf-investing`, `pf-compounding`, `pf-wealth-building`

## Content FR/EN

Every lesson ships `title*`, `description*`, `textBody*`, flashcards, exercises, and quiz prompts/options in both languages. Bodies include the international disclaimer that tax/banking rules vary by country.

## Tests

- `src/tests/pf-content-expansion.test.ts` — catalog size, required concepts, pedagogy, multi-quiz, validator, simulator links  
- Updated thresholds in Phase 10 / 12 content tests  
- Phase 4 next-lesson expectation updated for new first lesson `understanding-money`

## Results

| Command | Result |
|---|---|
| `npm run lint` | **PASS** |
| `npm run test` | **223/223 PASS** |
| `npm run build` | **PASS** |
| `npm run test:e2e` | **54/54 PASS** |

## Limits

- Still educational MVP content — not personalized advice; not country-specific tax/product guidance  
- One QUIZ LearningItem per lesson (multiple `Question` rows allowed)  
- Shorts remain placeholder media  
- SME polish of examples can continue without engine work  

No technical phase started beyond content + minimal seed helper support for multi-question quizzes.
