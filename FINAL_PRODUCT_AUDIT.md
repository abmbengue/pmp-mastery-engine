# FINAL PRODUCT AUDIT — Professional Learning Academy

**Date:** 2026-08-24  
**Branch audited:** `cursor/pla-phase12-content-hardening-e932`  
**Mode:** READ-ONLY (no code changes, no migrations, no packages, no commits)  
**Product stage:** Educational MVP (not production-ready)

## Baseline re-verified this audit

| Command | Result |
|---|---|
| `npm run lint` | PASS |
| `npm run test` | **201/201 PASS** |
| `npm run build` | PASS |
| `npm run test:e2e` | **53/53 PASS** |

Catalog counts (code): PF **29** · CF **33** · PMP lessons **38** · PMP questions **200** · Shorts **15**

---

## Executive verdict

PLA is a **coherent, bilingual Educational MVP** with working pedagogical loops (learn → master → recommend → review → PMP exam → corrective learning → readiness/PDF). Architecture matches the modular design described in handoff docs.

It is **not** finished as a polished/production product primarily because:

1. PMP best-action stems remain pattern-repeated after Phase 12 rewrite (scenarios improved; answers still formulaic)  
2. Auth recovery (password reset / email verification) absent  
3. Shorts remain placeholder media  
4. Docs drift (`TESTING.md` stale; CF count in some docs still “~30”)

**Recommendation: B — Minor fixes required**  
(Not A: credibility/auth gaps remain. Not C: no architecture rewrite needed; engines and tests are healthy.)

---

## 1. Architecture

| | |
|---|---|
| **Assessment** | Sound modular monolith: `app/` → `modules/` → `data/` → Prisma |
| **Doc vs code** | Matches `ARCHITECTURE.md` / `AI_HANDOFF.md` for engines |
| **Evidence** | Modules present: learning, assessment, simulation, ai-tutor, media, content, security, auth, dashboard |
| **Issue** | Lesson Player & SimulatorWorkbench hold non-trivial client orchestration; simulators invoke pure engines **in the browser** via `useMemo` (not only through a server `simulation-service` round-trip) |
| **Severity** | P2 |
| **Impact** | Docs slightly overstate “UI → service → engine” purity for live calculation |
| **Recommendation** | Document client-side pure-engine usage as intentional; keep completion API server-side |

No second recommendation / scoring engine found. Single `recommendNextLearning()` path confirmed.

---

## 2. UX

| Journey | Status |
|---|---|
| Register → Login → Dashboard | Works (E2E) |
| Academy → Course → Lesson phases | Works |
| Recommendation / Review Now | Works |
| Simulators | Works |
| PMP exam → analytics → retry → readiness → PDF | Works |
| Shorts discovery → learn more / review | Works (placeholder media) |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Shorts feel incomplete without video | P2 | Trust / polish | Placeholder player + scripts | Keep scripts; add sample external URLs later |
| Dashboard density (PMP + review + continue) | P2 | Cognitive load for new users | Dashboard composition | Progressive disclosure (later) |
| No password recovery UX | P1 | Real users locked out | No routes/docs IMPLEMENT | Add reset before public launch |

No P0 broken journey observed in E2E.

---

## 3. Educational quality (system)

**Strengths**

- LEARN → PRACTICE → TEST → REVIEW → MASTER wired in Lesson Player  
- Structured bodies (Objectif / Objective … À retenir / Key takeaway) on **100%** of PF/CF/PMP lessons  
- Avg FR body length ≈ **1050–1150** chars (was ~300 pre–Phase 12)  
- Spaced repetition WEAK=1 / LEARNING=3 / MASTERED=7 verified in code + tests  
- Corrective learning maps error → preferred lessons + skills → same recommendation engine  

**Weaknesses**

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Still **1 quiz question per lesson** | P2 | Thin formative assessment | Catalog analysis: 29/29, 33/33, 38/38 | Add 2nd question selectively on hard skills |
| PMP answer options still template-family | P1 | Exam credibility | Top best-actions reused 14–16× each | SME rewrite of options (see §6 / queue) |

Micro-learning principle is intact — do **not** convert to long courses.

---

## 4. Personal Finance

| Topic area | Coverage in code |
|---|---|
| Foundations (income, expenses, budget, emergency, saving) | Present |
| Debt (interest, loans, credit, repayment, DTI) | Present |
| Investing (stocks, bonds, diversification, risk/return, RE) | Present |
| Wealth (compound, inflation, retirement, portfolio, habits) | Present |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Optional depth gaps (tax, insurance, ETF-first lesson) | P3 | Completeness | Catalog slugs | Future content pack only |
| Beginner suitability | OK | — | Structured + disclaimers | Keep educational disclaimers |

Validator: `validateLessonCatalog(PF_LESSONS).ok === true`

---

## 5. Corporate Finance

| Topic area | Coverage |
|---|---|
| Statements / EBITDA / EBIT / NI / CF | Present |
| WC / FCF | Present |
| EV / Equity / multiples / DCF / TV / WACC | Present |
| Capital structure / cost of debt / cost of equity | Present (Phase 12) |
| Accretion / dilution / M&A basics | Present |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Doc says “~30” CF lessons; code has **33** | P3 | Handoff confusion | `AI_HANDOFF.md`, `PRODUCT_SPEC.md` | Update docs only |
| NPV/IRR not first-class lessons | P3 | Curriculum gap | Slug scan | Optional later |
| Client-side DCF calc | P2 | Architecture purity | `SimulatorWorkbench` | Document / leave |

Validator: OK.

---

## 6. PMP (priority)

### What works

- 38 original lessons + situational cases  
- 200-question bank, FR/EN, metadata (domain, delivery, scenarioType, objective)  
- Quick / domain / mock flows + retry + error analysis + readiness + PDF  
- Disclaimers present in UI messages, scoring, report, PDF, E2E  
- **0** “educational context #N” template markers (Phase 12 fixed this)  
- Corrective `preferredLessonSlugs` point at real PMP lesson slugs  

### Distribution (code)

| Axis | Mix |
|---|---|
| Domains | PEOPLE 55 / PROCESS 105 / BUSINESS 40 |
| Delivery | AGILE 67 / HYBRID 67 / PREDICTIVE 66 |
| Difficulty | EASY 67 / MEDIUM 67 / HARD 66 |
| Types | SC 172 / TF 17 / MC 11 |

### Critical pedagogical finding

Scenarios are diversified (**84** unique scenario strings), but **correct options are heavily reused by scenario-type family** (many best-actions appear **15–16 times**). Wrong-option explanations exist for all 200 items, yet learners can learn the “house style answer” rather than situational judgment.

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Patterned best-action stems | **P1** | Credibility of PMP practice | Heuristic: ~185 REVIEW/REWRITE candidates | SME rewrite options/explanations; keep scenarios |
| Process-heavy domain mix | P2 | Balance vs modern PMP emphasis | 105 PROCESS | Optional rebalance later |
| Few MULTIPLE_CHOICE | P2 | Item variety | 11/200 | Add more MC carefully |

**Never** present as official PMI. Current disclaimers are adequate — treat regressions as P0.

See companion: `PMP_SME_REVIEW_QUEUE.md` (methodology + samples).

---

## 7. AI Tutor

| Check | Status |
|---|---|
| Port + noop/mock/openai providers | Present |
| `/api/ai-tutor` + `auth()` | Present |
| Rate limit | Present (30/min/user) |
| HINT omits correct answers in prompts | Present |
| Exam in progress forced to HINT | Present (`EXAM_IN_PROGRESS`) |
| Keys client-exposed | Not observed |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Hallucination risk with real provider | P2 | Pedagogy | Inherent LLM risk | Keep grounding + disclaimers |
| Prompt context labels partly English when locale=fr | P3 | Bilingual purity | `prompts.ts` field labels | Localize scaffold labels |

---

## 8. Simulators

Engines present: compound interest, budget, debt repayment, valuation multiples, DCF.

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Live math runs in React client via pure functions | P2 | Differs from “server service only” narrative | `SimulatorWorkbench` `useMemo` | Accept for MVP; keep engines pure/tested |
| Completion still server + auth | OK | Isolation | `/api/simulation/complete` | Keep |

---

## 9. Shorts

| Metric | Value |
|---|---|
| Count | 15 |
| Max duration | 165s (≤180) |
| Scripts present | 15/15 |
| Media | Placeholder (by design) |
| Discovery N+1 | Fixed (batch completion) |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| No real video | P2 | Product feel | MediaProvider placeholder | Optional external sample URLs |
| Completion via LessonProgress metadata | P3 | Opacity | `shortsCompleted` JSON | OK at current scale |

---

## 10. Spaced repetition

| Check | Status |
|---|---|
| WEAK 1 / LEARNING 3 / MASTERED 7 | Confirmed in `REVIEW_INTERVALS_DAYS` + tests |
| `nextReviewAt` | Schema + index + services |
| Dashboard / `/review` / recommendations | Wired |
| Competing engine | Not found |

No P0/P1 issues.

---

## 11. Authentication

| Feature | Status |
|---|---|
| Register / login / logout | Implemented |
| bcrypt cost 12 + password policy | Implemented |
| JWT session Auth.js | Implemented |
| Email verification | **NOT IMPLEMENTED** |
| Password reset | **NOT IMPLEMENTED** |
| OAuth | Out of scope (correct) |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| No account recovery | **P1** (public launch) | Support burden / lockouts | Security report + code | Implement before open registration |
| Credentials login not rate-limited | **P1** | Brute force | Only register/AI/exam limited | Rate-limit authorize/login path |
| Blocking for closed pilot? | P2 | Lower if invite-only | Ops choice | Pilot OK without reset if accounts provisioned |

---

## 12. Security

| Strength | Evidence |
|---|---|
| `auth()` / `requireSession` on private pages & APIs | Code + api-authorization tests |
| PDF uses session user only | Route + E2E |
| AI keys server-only | Config + tests |
| `safeApiLog` redaction | Module + tests |
| Zod on mutating APIs | Routes |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| In-memory rate limits | P2 | Multi-instance weakness | `rate-limit.ts` | OK for single-node MVP |
| `DISABLE_RATE_LIMIT=1` for E2E | P3 | Must never ship enabled in prod | Playwright config | Guard in deploy docs |
| No CSP/security headers hardening in-app | P2 | Browser hardening | Absence | Next config / hosting headers |
| Login brute-force gap | P1 | Auth | See §11 | Fix |

No bank data / no secrets in git observed beyond local `.env` (expected for env).

---

## 13. Accessibility

Improvements from Phase 12: labeled login/register, quiz focus targets, AI panel `aria-controls`, semantic lesson sections, Shorts progressbar.

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| No automated axe suite | P2 | False confidence | `TESTING.md` still lists as future | Add smoke axe on 2–3 pages |
| MasterPhase decorative emoji | P3 | Screen reader noise | `aria-hidden` already used | Keep |

No blocking a11y failure proven in this read-only pass.

---

## 14. Performance

| Strength | Evidence |
|---|---|
| Shorts completion batching | `getCompletedShortIdsForUser` |
| Indexes on exam/user/review fields | Prisma schema |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Seed wipe+create | P3 | Ops | Seed design | Fine for V1 |
| Client bundles include simulator engines | P3 | Bundle size | Client imports | Acceptable at current size |

No P0 performance defect evidenced.

---

## 15. FR / EN

| Layer | Status |
|---|---|
| UI messages | 380/380 keys, full parity |
| Lesson catalogs | Dual bodies + structured sections |
| Exam bank | Dual scenarios/prompts/options |
| E2E locale tests | Present |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Some titles identical FR/EN (e.g. “Enterprise Value”) | P3 | Cosmetic | Proper nouns | Accept |
| AI prompt scaffold English keys | P3 | Minor mix | `prompts.ts` | Localize later |
| PDF FR accents approximated | P2 | Print quality | Helvetica/WinAnsi | Optional font upgrade |

---

## 16. Tests

| Layer | Observed |
|---|---|
| Vitest | 201/201 |
| E2E | 53/53 |
| Coverage character | Strong on engines/auth/exam; weak on a11y/perf/content *judgment* |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| `TESTING.md` outdated (Phase 0–3 narrative) | P2 | Misleads next AI | File content | Refresh docs |
| High pass ≠ PMP item quality | P1 awareness | False security | Bank heuristics | SME process + qualitative gates |
| Do not delete tests | Policy | Regression | Handoff rules | Keep |

---

## 17. Database

| Check | Status |
|---|---|
| Hierarchy Academy→…→LearningItem | Present |
| ConceptMastery + nextReviewAt index | Present |
| Exam graph + ExamError | Present |
| Migrations through Phase 10 | 7 migration dirs; Phase 11–12 JSON-only |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Dual difficulty fields on Question | P3 | Naming confusion | Schema comments | Prefer examDifficulty |
| Shorts in LessonProgress.metadata | P3 | Query opacity | Code | OK for MVP |

---

## 18. Documentation

| Doc | Accuracy vs code |
|---|---|
| `AI_HANDOFF.md` | Mostly accurate; CF “~30” stale (actual 33) |
| `CHECKPOINT_PHASE_12.md` | Matches baseline re-run |
| Phase 11 product audit | Historically correct; Phase 12 superseded shallow bodies / template markers |
| `PHASE_12_*` reports | Align with code |
| `TESTING.md` | **Stale** |
| `PRODUCT_SPEC.md` | Duplicate “Planned” block; CF ~30 stale |
| `ARCHITECTURE.md` | Good; simulator client calc nuance missing |

| Problem | Severity | Impact | Evidence | Recommendation |
|---|---|---|---|---|
| Stale/duplicated docs | P2 | Handoff errors | Listed above | Doc-only cleanup |

---

## Priority backlog (proposed — DO NOT IMPLEMENT IN THIS STEP)

### P0 — blocks usage
*None observed in current test-verified journeys.*  
(Treat removal of PMI disclaimers as future P0 if it ever happens.)

### P1 — important before real users / credibility
1. SME rewrite of PMP **best-action options** (reduce stem reuse) — see `PMP_SME_REVIEW_QUEUE.md`  
2. Password reset flow  
3. Rate-limit credentials login (brute force)  
4. Email verification plan (or invite-only ops model documented)

### P2 — improvements
5. Refresh `TESTING.md` / `PRODUCT_SPEC` / CF counts in handoff  
6. Optional second quiz item on advanced lessons  
7. Sample external Short URLs via MediaProvider  
8. PDF French typography  
9. Light a11y axe smoke  
10. Dashboard progressive disclosure  

### P3 — future
11. Tax/insurance/ETF PF lessons; NPV/IRR CF lessons  
12. Domain rebalance PMP bank  
13. Distributed rate limiting / CSP  
14. Activate one planned academy (content pack only)

### Explicitly out of scope (still)
Payment, CMS, OAuth, ML, mobile, marketplace, social, new academies as full product lines.

---

## Decision

### **B — Minor fixes required**

**Why not A:** PMP option patterning + auth recovery gaps prevent calling the product “finalized,” even though it is a solid Educational MVP.

**Why not C:** Architecture, engines, bilingualism, and regression suite are healthy; Phase 12 already addressed shallow lessons and template scenario markers. Remaining work is targeted content/auth polish, not rebuild.

### Suggested next execution order (when authorized)
1. Doc cleanup (fast, safe)  
2. Login rate limit + password reset design  
3. PMP SME option rewrite batch (keep 200 count)  
4. Optional Short sample media  
5. Re-run full lint/test/build/e2e  

---

## Files examined (primary)

Docs: `AI_HANDOFF.md`, `CHECKPOINT_PHASE_12.md`, `CHECKPOINT_PHASE_11_PRODUCT_AUDIT.md`, `PHASE_12_*`, `ARCHITECTURE.md`, `PRODUCT_SPEC.md`, `CONTENT_MODEL.md`, `TESTING.md`, `ROADMAP.md`, related specialty docs  

Code: `prisma/schema.prisma`, seed catalogs + exam bank, `src/modules/*` engines, API routes (auth/ai/exam/lesson/shorts/simulation/pdf), Lesson Player / Shorts / Simulator / AI panel, `messages/*.json`, `src/tests/**`

## Absolute stop

No code modified. No migrations. No packages. No commits.  
Await authorization before any fix implementation.
