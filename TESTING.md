# Testing Strategy

## Tools

| Level | Tool | Location |
|---|---|---|
| Unit | Vitest | `src/tests/*.test.ts` |
| Integration | Vitest + PostgreSQL | `src/tests/integration.test.ts` |
| E2E | Playwright | `src/tests/e2e/*.spec.ts` |

## Running Tests

```bash
# Unit + integration (requires seeded DB)
npm run test

# E2E (starts dev server automatically)
npm run test:e2e:install  # first time only
npm run test:e2e
```

## Test Coverage (Phase 0+1)

### Unit Tests

| File | Covers |
|---|---|
| `locale.test.ts` | FR/EN content resolution |
| `content-payloads.test.ts` | Zod payload validation |
| `scoring.test.ts` | Answer validation, quiz score calculation |
| `mastery.test.ts` | Mastery level from score |
| `ai-tutor.test.ts` | NoopAiTutor stub responses |

### Integration Tests

| File | Covers |
|---|---|
| `integration.test.ts` | Academy/course/lesson retrieval, i18n, seed structure (2×6), lesson progress, quiz attempt |

### E2E Tests

| File | Covers |
|---|---|
| `e2e/user-journey.spec.ts` | Landing → Academies → Course → Lesson → Quiz → Result |

## Prerequisites for Integration Tests

Integration tests require a running PostgreSQL instance with seeded data:

```bash
npm run db:migrate
npm run db:seed
```

## Future Test Additions (Phase 2+)

- Learning engine: full course completion flow
- Assessment: multiple choice scoring edge cases
- Dashboard: data aggregation
- Auth: session management
- i18n: UI message completeness (all keys in fr + en)
- Regression: fixed seed fixtures for score calculation
- Accessibility: axe-core checks
- Performance: lesson load time

## Non-Regression Policy

When modifying scoring or progression logic:
1. Run full test suite
2. Verify integration test scores unchanged
3. Add new test case for any bug fix
