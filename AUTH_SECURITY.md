# AUTH_SECURITY.md — Professional Learning Academy (P1)

Pilot / pre-production authentication notes. This is **not** a claim of multi-instance production hardening.

## Authentication architecture

- **Auth.js v5** Credentials provider (`src/auth.ts`)
- Session strategy: **JWT**
- Identity source for APIs: **`auth()`** — never trust client-supplied `userId`
- Registration: `POST /api/auth/register` → bcrypt hash → immediate enrollment
- Login UI: rate-limit gate `POST /api/auth/login` then `signIn("credentials")`
- Logout: Auth.js sign-out

Modules: `src/modules/auth/` (`password`, `password-reset`, `password-reset-email`, `session`)

## Password hashing

- **bcryptjs** via `hashPassword` / `verifyPassword`
- Registration and password reset store **only** `User.passwordHash`
- Passwords and hashes are never returned in API responses

## Password reset

Flow:

```
Login → Forgot password → Enter email → hashed token + TTL
  → Reset page (?token=) → new bcrypt hash → Login
```

- Raw token: cryptographically random (`randomBytes` → base64url)
- Stored value: **SHA-256 hash only** (`PasswordResetToken.tokenHash`)
- TTL: `PASSWORD_RESET_TTL_MS` (default 1 hour)
- Single-use (`usedAt`); prior unused tokens invalidated on new request
- API responses for forgot-password are **generic** (anti email-enumeration)
- UI: `/[locale]/forgot-password`, `/[locale]/reset-password`

### Email abstraction

```ts
PasswordResetEmailPort.sendResetEmail(...)
```

- Pilot implementation: `DevPasswordResetEmail` (in-memory / console sink)
- **No real SMTP/API provider** is wired (avoids secrets/infra for pilot)
- Future: implement the port with Resend/SendGrid/SES and set via `setPasswordResetEmailPort`

Dev/E2E helper (never enable in real production):

- `PASSWORD_RESET_DEV_EXPOSE=1` → `GET /api/auth/forgot-password/dev-last`

## Rate limiting

In-memory fixed-window limiter: `src/modules/security/rate-limit.ts`

| Surface | Key | Typical limit |
|---|---|---|
| Login IP | `login-ip:*` | 30 / 15 min |
| Login email | `login-email:*` | 10 / 15 min |
| Authorize | `login-authorize:*` | 10 / 15 min |
| Register | `register:*` | 10 / 15 min |
| Password reset | `pwd-reset-*` | 5–20 / 15 min |
| AI tutor / exam | per user | see Phase 12 |

- Disable for Playwright: `DISABLE_RATE_LIMIT=1`
- **Limitation:** not distributed — unsuitable alone for multi-instance production. Use Redis/gateway rate limits later.

## Email verification status (decision)

**Chosen model for pilot: immediate registration (invite-not-required).**

- Accounts are usable immediately after register
- `User.emailVerifiedAt` exists (nullable) for a **future** verification flow
- Email is **not** verified today — documented explicitly for pilots
- Full verification deferred until a real email provider is integrated

Rationale: simplest path consistent with Educational MVP; avoids blocking learners without SMTP.

## Production limitations

- In-memory rate limiter (single node)
- Dev email sink (no deliverability)
- No email verification enforcement
- Credentials-only (no OAuth)
- `PASSWORD_RESET_DEV_EXPOSE` must stay off outside E2E/dev

## Future email provider integration

1. Implement `PasswordResetEmailPort` with production provider
2. Wire secrets via env (never client)
3. Optionally send verification mail and set `emailVerifiedAt`
4. Replace in-memory rate limits with shared store / edge gateway
5. Keep anti-enumeration response shapes
