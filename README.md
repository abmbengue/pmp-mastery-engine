# Professional Learning Academy

Bilingual (FR/EN) professional learning platform built with a generic pedagogical engine supporting multiple academies.

## Status

**Phase 0 + Phase 1 complete.** Foundation, database schema, seed content, repositories, and essential tests are in place. UI is minimal (enough for E2E smoke test). Learning engine UI, dashboard, and full auth are **not yet implemented** (Phase 2+).

## Stack

- Next.js 15 (App Router) + TypeScript + React
- Tailwind CSS 4
- PostgreSQL + Prisma
- next-intl (FR/EN)
- Vitest (unit/integration) + Playwright (E2E)

## Prerequisites

- Node.js 22+
- PostgreSQL 16+ (or Docker)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start PostgreSQL (Docker)
docker compose up -d

# Or use a local PostgreSQL instance and update .env

# 3. Copy environment variables
cp .env.example .env

# 4. Run migrations and seed
npm run db:migrate
npm run db:seed

# 5. Start dev server
npm run dev
```

Open [http://localhost:3000/fr](http://localhost:3000/fr)

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit + integration tests |
| `npm run test:e2e` | Playwright E2E tests |
| `npm run db:migrate` | Apply Prisma migrations |
| `npm run db:seed` | Seed database |
| `npm run db:reset` | Reset DB + re-seed |

## Project Structure

```
src/
  app/              # Next.js UI routes
  modules/
    academies/      # Academy catalogue logic
    content/        # Content model helpers
    learning-engine/ # Progression, mastery
    assessment-engine/ # Quiz scoring
    localization/   # i18n routing
    auth/           # Auth types (stub)
    ai-tutor/       # AiTutorPort + NoopAiTutor
    dashboard/      # Dashboard stub
  shared/           # Shared types, utils
  data/             # Prisma client, repositories
  tests/            # Vitest + Playwright tests
prisma/
  schema.prisma     # Database schema
  seed/             # Seed data (PF + PMP)
docs/               # See ARCHITECTURE.md, etc.
```

## Active Academies (V1)

1. **Personal Finance** — 2 modules, 6 lessons
2. **PMP / Project Management** — 2 modules, 6 lessons (original content only)

6 additional academies are registered as `PLANNED` in the catalogue.

## Demo User

- Email: `demo@pla.local`
- Used for quiz submission in V1

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [PRODUCT_SPEC.md](./PRODUCT_SPEC.md)
- [CONTENT_MODEL.md](./CONTENT_MODEL.md)
- [TESTING.md](./TESTING.md)
- [ROADMAP.md](./ROADMAP.md)

## Connecting to GitHub

```bash
git remote add origin https://github.com/YOUR_ORG/professional-learning-academy.git
git push -u origin cursor/pla-phase0-phase1-e932
```

## License

Private — all rights reserved.
