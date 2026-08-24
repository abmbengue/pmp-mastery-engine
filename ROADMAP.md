# Roadmap

## Completed

### Phase 0 — Project Initialization
- [x] Next.js 15 + TypeScript + Tailwind CSS
- [x] ESLint
- [x] Vitest + Playwright setup
- [x] Modular folder structure
- [x] Git initialization
- [x] Initial documentation
- [x] next-intl (FR/EN)
- [x] Docker Compose for PostgreSQL

### Phase 1 — Data Layer
- [x] Prisma schema (full content + progress model)
- [x] PostgreSQL migrations
- [x] Repositories (academy, course, lesson, question, user)
- [x] Seed: Personal Finance (2 modules × 3 lessons)
- [x] Seed: PMP (2 modules × 3 lessons)
- [x] Seed: 6 planned academies (catalogue)
- [x] Demo user
- [x] Learning engine: progress service (basic)
- [x] Assessment engine: scoring service
- [x] AI Tutor: AiTutorPort + NoopAiTutor
- [x] Essential tests (unit, integration, E2E smoke)
- [x] Minimal UI for E2E path

### Phase 2 — Learning Engine
- [x] Lesson player with phase navigation (LEARN → PRACTICE → TEST → REVIEW → MASTER)
- [x] Complete learning flow: start lesson → complete → update progress
- [x] Quiz UI with supported question types
- [x] Flashcard interaction
- [x] Exercise completion
- [x] Video placeholder display
- [x] Progress persistence on lesson completion
- [x] Extended unit tests + Playwright journeys

### Phase 3 — Auth + Dashboard
- [x] Auth.js v5 credentials authentication
- [x] User registration / login / logout
- [x] Dashboard UI: global progress, active courses
- [x] Weak / mastered concepts display
- [x] Learning time and streak display
- [x] Settings page (locale preference)
- [x] Protected progression / quiz APIs
- [x] User data isolation tests

## Phase 4 — UI Polish + Content Expansion

- [ ] Responsive design refinement
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Expand seed content (more lessons per module)
- [ ] PMP category structure (People, Process, Business Env, Agile, Hybrid)
- [ ] Personal Finance full category tree

## Phase 5 — Advanced Features

- [ ] AI Tutor (real LLM integration)
- [ ] Adaptive quiz system
- [ ] Simulators (Personal Finance)
- [ ] Mock exams (PMP)
- [ ] Recommendation engine ("Review this concept", "Next lesson")
- [ ] CMS / admin panel for content management

## Phase 6 — Production

- [ ] CI/CD pipeline
- [ ] Production PostgreSQL (managed)
- [ ] Video hosting integration
- [ ] Payment / subscription
- [ ] OAuth providers
- [ ] Mobile-responsive PWA or native app

## Known Limitations (after Phase 3)

- No password reset / email verification
- No role-based access control
- Video items are placeholders only
- AI Tutor returns stub messages
- 6 academies have no content (PLANNED status)
- No admin/CMS for content management
- No CI/CD configured
