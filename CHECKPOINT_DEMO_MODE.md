# CHECKPOINT — Demo Mode / Product Preview

**Branch:** `cursor/pla-demo-mode-e932`  
**Date:** 2026-08-24

---

## A. Fonctionnalités

| Feature | Status |
|---------|--------|
| `DEMO_MODE` feature flag (default off) | ✅ |
| Landing CTA FR/EN (“Essayer la démo” / “Try the demo”) | ✅ |
| Server-side demo login via Auth.js credentials | ✅ |
| Demo banner + create account link | ✅ |
| Reset demo (demo user only) | ✅ |
| Rich demo dashboard data (PF, PMP, CF, streak, skills, PMP exam) | ✅ |
| FR + EN support | ✅ |
| Normal auth/login/register unchanged | ✅ |

---

## B. Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/[locale]/demo` | GET | Demo login page (calls `enterDemo` action) |
| `/api/demo/reset` | POST | Reset demo pedagogical data |
| `/[locale]` | GET | Landing with conditional demo CTA |

---

## C. Auth / session

- Reuses Auth.js Credentials provider + JWT sessions
- Demo password read from `DEMO_USER_PASSWORD` env (server only)
- `GET /[locale]/demo` calls `signOut({ redirect: false })` then `signIn("credentials", …)`
- Session callback now propagates `email` and `name` from JWT token
- Layout `dynamic = "force-dynamic"` for fresh session in nav/banner

---

## D. Sécurité

| Check | Status |
|-------|--------|
| `DEMO_MODE=false` → demo disabled | ✅ tested |
| No client password / URL params | ✅ |
| Reset requires demo session + `DEMO_MODE` | ✅ tested |
| Real user cannot reset via API | ✅ tested |
| Private APIs still use `auth()` | ✅ unchanged |

---

## E. Demo data

Seeded via `seedDemoUserLearningData()` using production services:

- PF: 3 completed lessons + 1 in progress
- PMP: 1 completed + 1 in progress
- CF: 1 completed lesson
- Concept mastery: weak / learning / mastered mix
- Learning streak: 5 current / 7 longest
- PMP quick-practice exam completed

---

## F. Reset

- `POST /api/demo/reset` → clears exam, quiz, progress, mastery; re-seeds snapshot
- UI: **Réinitialiser la démo** / **Reset demo** in banner
- Guarded: demo mode + demo session only

---

## G. FR / EN

| Element | FR | EN |
|---------|----|----|
| CTA | Essayer la démo | Try the demo |
| Hint | Découvrir la plateforme… | Explore the platform… |
| Banner | Mode démonstration | Demo mode |
| Reset | Réinitialiser la démo | Reset demo |

---

## H. Desktop / mobile

- CTA uses existing button styles, wraps on small screens
- Banner flex-wrap for mobile
- E2E covers desktop flows; layout responsive via existing Tailwind patterns

---

## I. Tests unitaires / intégration

**File:** `src/tests/demo-mode.test.ts` (11 tests)

1. `DEMO_MODE=false` → disabled ✅  
2. `DEMO_MODE` unset → disabled ✅  
3. `DEMO_MODE=true` + password → available ✅  
4. Demo user email/session detection ✅  
5. Dashboard demo data ✅  
6. FR dashboard ✅  
7. EN dashboard ✅  
8. Reset restores snapshot ✅  
9. Reset 404 when demo off ✅  
10. Reset 403 for real user ✅  
11. Reset 200 for demo user ✅  

**Vitest total:** 258/258 PASS

---

## J. E2E

**File:** `src/tests/e2e/user-journey.spec.ts` — `Demo mode` describe (serial)

1. Landing → Try demo → Dashboard with progress ✅  
2. DEMO EN → Dashboard in English ✅  
3. Landing → Demo → PF → Lesson → Quiz → Dashboard ✅  
4. Try demo → PMP practice → result → readiness ✅  

**E2E total:** 58/58 PASS

---

## K. Lint

```
npm run lint → PASS
```

---

## L. Build

```
npm run build → PASS
```

New routes: `/[locale]/demo`, `/api/demo/reset`

---

## M. Risques

| Risk | Mitigation |
|------|------------|
| Demo enabled in production by mistake | Default off; documented in `.env.example` |
| Shared demo account concurrency | Reset button; documented limitation |
| Password in env | Server-only; not in frontend/bundle |
| Parallel demo E2E flakiness | Serial demo describe + page reload after login |
| Session stale in layout after redirect | `force-dynamic` + reload in E2E |

---

## N. Instructions — lancer le Demo Mode

```bash
# 1. Configure environment
echo 'DEMO_MODE=true' >> .env
echo 'DEMO_USER_PASSWORD=Demo123!' >> .env

# 2. Seed database (includes demo user + rich data)
npm run db:seed

# 3. Start app
npm run dev
```

**URLs:**

- FR landing: http://localhost:3000/fr  
- EN landing: http://localhost:3000/en  
- Direct demo entry: http://localhost:3000/fr/demo  

**Entrer dans la démo:** Click **Essayer la démo** / **Try the demo**

**Revenir au mode normal:** Logout → Login or Register with your own account

**Réinitialiser:** Click **Réinitialiser la démo** in the demo banner

---

## STOP

Phase Demo Mode complete. No further phases started.
