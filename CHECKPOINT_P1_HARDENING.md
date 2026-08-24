# CHECKPOINT_P1_HARDENING.md

**Branch:** `cursor/pla-p1-hardening-e932`  
**Date:** 2026-08-24  
**Scope:** P1 hardening only — no Phase 13, no major product features.

---

## A. Corrections réalisées

1. **PMP option quality** — Rewrote options/explanations to be scenario- and case-bound; eliminated mechanical stem reuse (max option label reuse across bank: **1**). Preserved question IDs, scenarios, domains, skills, difficulties, scoring, blueprint, exam engine.
2. **Password reset** — Full hashed one-time token flow with Dev email port (no real SMTP).
3. **Login rate limiting** — IP + email fixed-window limits via existing in-memory limiter; E2E uses `DISABLE_RATE_LIMIT=1`.
4. **Email verification decision** — **Immediate registration for pilot**; `emailVerifiedAt` nullable column prepared; verification **not** enforced. Documented in `AUTH_SECURITY.md`.

---

## B. Fichiers créés

- `AUTH_SECURITY.md`
- `CHECKPOINT_P1_HARDENING.md` (this file)
- `prisma/migrations/20260824193000_p1_password_reset/migration.sql`
- `scripts/p1-rewrite-pmp-options.ts`
- `src/modules/auth/password-reset.ts`
- `src/modules/auth/password-reset-email.ts`
- `src/app/api/auth/forgot-password/route.ts`
- `src/app/api/auth/forgot-password/dev-last/route.ts` (E2E/dev only)
- `src/app/api/auth/reset-password/route.ts`
- `src/app/api/auth/login/route.ts`
- `src/app/[locale]/forgot-password/page.tsx`
- `src/app/[locale]/reset-password/page.tsx`
- `src/app/[locale]/components/auth/ForgotPasswordForm.tsx`
- `src/app/[locale]/components/auth/ResetPasswordForm.tsx`
- `src/tests/p1-password-reset.test.ts`
- `src/tests/p1-login-rate-limit.test.ts`
- `src/tests/p1-pmp-option-quality.test.ts`

---

## C. Fichiers modifiés

- `prisma/schema.prisma` — `emailVerifiedAt`, `PasswordResetToken`
- `prisma/seed/pmp-exam-bank-data.ts` — option rewrite
- `src/auth.ts` — authorize rate limit
- `src/data/repositories/user-repository.ts` — lowercase email; verification note
- `src/app/[locale]/components/auth/LoginForm.tsx` — login gate + forgot link
- `src/app/[locale]/login/page.tsx` — labels
- `messages/en.json`, `messages/fr.json` — auth copy
- `playwright.config.ts` — `PASSWORD_RESET_DEV_EXPOSE=1` for E2E
- `src/tests/e2e/user-journey.spec.ts` — password reset journey
- `AI_HANDOFF.md`, `FINAL_PRODUCT_AUDIT.md` — P1 status

---

## D. Migrations

| Migration | Purpose |
|---|---|
| `20260824193000_p1_password_reset` | `User.emailVerifiedAt`, table `PasswordResetToken` (hashed token, TTL, `usedAt`) |

Applied with `prisma migrate deploy`. Exam bank reseeded after option rewrite.

---

## E. Sécurité

| Area | Status |
|---|---|
| Registration / login / logout | Intact; login gated + Auth.js credentials |
| Password hashing | bcryptjs only; never returned to client |
| Reset tokens | SHA-256 stored; raw token only in email URL |
| Sessions | JWT via Auth.js; APIs use `auth()` |
| Rate limiting | In-memory; documented as non-distributed |
| Privacy | `safeApiLog` redacts password/hash/secret keys |
| Dev expose endpoint | Requires `PASSWORD_RESET_DEV_EXPOSE=1`; 404 otherwise |

---

## F. Password reset

- Request: Zod email + locale; generic success (anti-enumeration)
- Token: `randomBytes(32)` base64url → SHA-256 hash in DB
- TTL: `PASSWORD_RESET_TTL_MS` (default 1h)
- Single-use + invalidate prior unused tokens
- Email: `PasswordResetEmailPort` / `DevPasswordResetEmail`
- UI: forgot → reset → login

---

## G. Rate limiting

- Centralized `checkRateLimit` in `src/modules/security/rate-limit.ts`
- Login: ~30/15min per IP, ~10/15min per email (+ authorize bucket)
- Controllable via `DISABLE_RATE_LIMIT=1` for E2E
- Explicitly **not** sufficient alone for multi-instance production

---

## H. PMP content quality

- 200 questions; IDs/scenarios/metadata preserved
- Correct answer present on every item
- No exact duplicate options within a question
- Max label reuse across bank: **1** (was 14–16× on correct stems; wrong stems up to ~49×)
- FR ≠ EN for scenarios/prompts/options
- Wrong-option explanations retained on single-choice distractors
- Still original educational content — **not** PMI/PMBOK copyrighted items

---

## I. Tests

Added:

- Password reset lifecycle (known/unknown email, hash storage, expiry, single-use, password replace)
- Login rate limit (threshold, window expiry, disable flag)
- PMP option quality (duplicates, reuse caps, FR/EN, correct presence)
- E2E: Forgot → Reset → Login with new password

---

## J. Résultats exacts

| Command | Result |
|---|---|
| `npm run lint` | **PASS** (0 errors) |
| `npm run test` | **216/216 PASS** |
| `npm run build` | **PASS** |
| `npm run test:e2e` | **54/54 PASS** |

Catalog counts unchanged: PF **29** · CF **33** · PMP lessons **38** · PMP Q **200** · Shorts **15**

---

## K. Risques restants

- PMP options are still template-assisted (case-bound); SME review still valuable for narrative polish
- In-memory rate limiter resets on process restart / is per-instance
- No real email delivery — pilots must use Dev sink or wire a provider
- Email not verified — account takeover if email inbox not controlled (acceptable for closed pilot)

---

## L. Limites production

- Single-node rate limits
- Dev email port
- No OAuth / email verification enforcement
- `PASSWORD_RESET_DEV_EXPOSE` must never be enabled in real production
- Not a claim of official PMI exam scoring or content

---

## M. Recommandations futures

1. Implement production `PasswordResetEmailPort` (Resend/SES/etc.)
2. Optional email verification using `emailVerifiedAt`
3. Shared/distributed rate limiting for multi-instance
4. SME pass on PMP narratives beyond option uniqueness
5. Keep Phase 13 / payment / CMS / OAuth / ML deferred until asked

---

## N. État final du produit

Educational MVP with **P1 pilot hardening** applied:

- Credible PMP option uniqueness for practice bank
- Recoverable accounts via password reset
- Basic login abuse throttling
- Explicit invite-not-required / unverified-email pilot model

Ready for closed pilot use with documented limitations in `AUTH_SECURITY.md`.

---

PHASE P1 HARDENING TERMINÉE.  
AUCUNE PHASE SUIVANTE N'A ÉTÉ DÉMARRÉE.
