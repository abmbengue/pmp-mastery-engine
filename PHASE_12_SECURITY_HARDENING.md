# PHASE 12 — Security & Hardening Report

## Authentication

| Item | Status |
|---|---|
| Registration + login (Credentials) | **IMPLEMENTED** |
| Password hashing (bcrypt cost 12) | **IMPLEMENTED** |
| Password policy (length + complexity) | **IMPLEMENTED** |
| Session via Auth.js JWT | **IMPLEMENTED** |
| Email verification | **NOT IMPLEMENTED** (document for later) |
| Password reset / recovery | **NOT IMPLEMENTED** (document for later) |
| OAuth | Out of scope (do not add) |
| 2FA | **NOT IMPLEMENTED** |

## Authorization

- Private pages use `requireSession`  
- APIs use `auth()`; never trust client `userId`  
- PDF readiness scoped to session user  

## API security

| Control | Status |
|---|---|
| Zod validation on mutating routes | **IMPLEMENTED** / strengthened |
| JSON parse error handling | **IMPLEMENTED** (register, lesson progress, exam, AI) |
| Rate limit — register (IP) | **IMPLEMENTED** (10 / 15 min; `DISABLE_RATE_LIMIT=1` for Playwright) |
| Rate limit — AI tutor (user) | **IMPLEMENTED** (30 / min) |
| Rate limit — exam start (user) | **IMPLEMENTED** (20 / min) |
| Distributed rate limit | **NOT IMPLEMENTED** (single-instance Map) |

## Password security

- bcryptjs cost 12  
- No plaintext passwords logged  
- `safeApiLog` redacts password/secret/hash/api_key fields  

## AI security

- Keys server-only (`AI_API_KEY`)  
- HINT strips correct answers  
- Exam-in-progress forces HINT  
- Rate limited  

## Session security

- JWT strategy via Auth.js  
- `AUTH_SECRET` required  

## User isolation

- Progress / exams / shorts / PDF tied to session  
- E2E isolation tests retained  

## Logging

- `safeApiLog` for rate-limit and AI errors without secrets  

## Remaining production risks

1. No email verification / password reset  
2. In-memory rate limits reset on deploy / multi-instance  
3. No WAF / advanced bot protection  
4. Security headers / CSP not fully configured in app layer  
5. Brute-force on Credentials provider not rate-limited at Auth.js edge (register/AI/exam covered)

## Reasonable Educational MVP stance

Hardening is intentional and light: enough for controlled pilots, not enterprise SOC2 claim.
