# Demo Mode / Product Preview

Professional Learning Academy includes a controlled **Demo Mode** so stakeholders can explore the full product without creating an account or entering a password.

## Objective

Answer: *“What does Professional Learning Academy look like for a real user?”*

Demo Mode provides immediate access to a pre-populated demo account with authentic sessions, dashboard data, courses, PMP practice, and readiness — using the same APIs and database tables as production.

## Activation

Set in environment (server-side only):

```env
DEMO_MODE=true
DEMO_USER_PASSWORD=Demo123!
```

| Variable | Required when demo enabled | Description |
|----------|---------------------------|-------------|
| `DEMO_MODE` | Yes | Must be exactly `true` to enable demo features |
| `DEMO_USER_PASSWORD` | Yes | Server-only password for `demo@pla.local` (never sent to browser) |

**Default:** `DEMO_MODE` is unset / `false` → demo is fully disabled.

## Deactivation

Remove or set:

```env
DEMO_MODE=false
```

When disabled:

- No “Try the demo” CTA on landing
- `/[locale]/demo` redirects to login
- `POST /api/demo/reset` returns 404
- No demo banner
- Normal login/register unchanged

## Demo account

- **Email:** `demo@pla.local`
- **Password:** stored in DB (seed) and mirrored by `DEMO_USER_PASSWORD` env — **never exposed to the client**
- Uses normal tables: `User`, `Enrollment`, `LessonProgress`, `QuizAttempt`, `ConceptMastery`, `LearningStreak`, `ExamSession`, etc.

## Entry flow

1. User opens landing (`/fr` or `/en`)
2. Clicks **“Essayer la démo”** / **“Try the demo”** (visible only when `DEMO_MODE=true`)
3. Full navigation to `GET /[locale]/demo` (Route Handler):
   - Verifies `DEMO_MODE=true`
   - Signs out any existing session
   - Calls Auth.js `signIn("credentials")` server-side with demo credentials
   - Redirects to `/[locale]/dashboard`

## Security

Demo Mode **never**:

- Accepts arbitrary email/userId/password from the client
- Stores fake sessions in `localStorage`
- Uses `?demo=true` or `?userId=` as authorization
- Bypasses `auth()` on private APIs
- Allows reset for non-demo users

Reset (`POST /api/demo/reset`) requires:

1. `DEMO_MODE=true`
2. Valid session via `auth()`
3. Session email = `demo@pla.local`

## Demo banner

When logged in as the demo user (and demo enabled):

- FR: **Mode démonstration**
- EN: **Demo mode**
- Links: **Créer un compte** / **Create account**, **Réinitialiser la démo** / **Reset demo**

## Reset

**Reset demo** clears all pedagogical data for `demo@pla.local` and re-applies the seed snapshot (progress, skills, streak, PMP practice exam).

Only available for the demo account in demo mode.

## Languages

- Landing CTA translated (FR/EN)
- After entry, locale is preserved (`/fr` → FR dashboard, `/en` → EN)
- Settings language switch continues to work

## Demo vs normal

| | Normal | Demo |
|---|--------|------|
| Entry | Login / Register | “Try the demo” CTA |
| Auth | User credentials | Server-side demo sign-in |
| Session | Auth.js JWT | Same Auth.js JWT |
| Data | User-owned | Shared demo account |
| Reset | N/A | Reset demo (demo only) |

## Local usage

```bash
# .env
DEMO_MODE=true
DEMO_USER_PASSWORD=Demo123!

npm run db:seed   # ensures demo@pla.local + rich demo data
npm run dev
```

Open:

- FR: http://localhost:3000/fr → **Essayer la démo**
- EN: http://localhost:3000/en → **Try the demo**

## Preview / staging

Enable explicitly on preview deployments:

```env
DEMO_MODE=true
DEMO_USER_PASSWORD=<matches seeded demo password>
```

## Production precautions

- **Do not** enable `DEMO_MODE` in production unless intentional
- **Do not** commit real `DEMO_USER_PASSWORD` to git
- Demo shares one account — not suitable for concurrent public demos at scale without periodic reset
- Rate limiting on credentials authorize still applies

## Files

| Path | Role |
|------|------|
| `src/modules/demo/demo-config.ts` | Feature flag + demo user helpers |
| `src/modules/demo/demo-user-data.ts` | Seed rich demo learning data |
| `src/modules/demo/demo-reset-service.ts` | Clear + re-seed demo data |
| `src/app/[locale]/demo/route.ts` | Server-side demo login |
| `src/app/api/demo/reset/route.ts` | Demo reset API |
| `src/app/[locale]/components/demo/DemoBanner.tsx` | Banner UI |
| `prisma/seed.ts` | Calls `seedDemoUserLearningData` |

See also: `CHECKPOINT_DEMO_MODE.md`
