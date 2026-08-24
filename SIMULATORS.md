# Simulators

## Architecture

```
UI (SimulatorWorkbench)
    ↓ local calc (instant)
Simulation Service
    ↓
Pure engines (compound / budget / debt / multiples / DCF)
```

Progress save (optional):

```
UI → POST /api/simulation/complete → LessonProgress.metadata + ConceptMastery
```

AI explain (optional):

```
UI → POST /api/ai-tutor (simulationType + summary) → AiTutorService
```

Calculations never run in React business logic files — only pure functions under `src/modules/simulation-engine/`.

## Engines

| Type | Academy | Lesson |
|---|---|---|
| `COMPOUND_INTEREST` | Personal Finance | compound-interest |
| `BUDGET` | Personal Finance | building-a-budget |
| `DEBT_REPAYMENT` | Personal Finance | tracking-expenses |
| `VALUATION_MULTIPLES` | Corporate Finance | multiples-and-dcf-basics |
| `DCF_BASICS` | Corporate Finance | multiples-and-dcf-basics |

## Formulas

### Compound Interest
Monthly compounding: each month `balance = balance * (1 + r/12) + contribution`.

### Budget
`remaining = income − Σ expenses`; `savingsRate = max(0, remaining) / income`.

### Debt Repayment
Amortizing loop with monthly interest; compare two payment levels for interest/time saved.

### Valuation Multiples
`EV = EBITDA × multiple`; `Equity Value = EV − net debt`.

### DCF Basics
Project FCF with growth, discount at WACC, Gordon terminal value with `WACC > g_terminal`.

## Scenarios

Every simulator exposes **BASE / UPSIDE / DOWNSIDE** presets plus **CUSTOM** when the learner edits inputs.

## Sensitivity

- Compound Interest: rates 4% / 6% / 8%
- DCF: WACC 8% / 10% / 12%

## Learning integration

- `LearningItem` type `SIMULATION` with Zod payload (`simulationType`, titles, pedagogy fields)
- Catalog in `simulation-service.ts`
- Shown in Lesson PRACTICE when present
- Standalone routes: `/academies/{academy}/simulators/{TYPE}`

## AI Tutor integration

`Explain this result` sends `simulationType`, `simulationScenario`, and a short `simulationSummary` to `/api/ai-tutor`. Works with noop/mock; never sends bank credentials.

## Security

- Educational disclaimers on every simulator
- No bank account / card / identity fields
- Completion stores only aggregate numeric snapshots
- Client inputs re-validated with Zod in pure engines and API

## Testing

- Unit: each engine + scenarios + sensitivity (`simulation-engines.test.ts`)
- E2E: PF compound/budget/debt, CF multiples/DCF, FR/EN

## Future simulators

Add a pure engine, register in `SIMULATION_CATALOG`, seed a `SIMULATION` LearningItem, extend `SimulatorWorkbench` inputs/results.
