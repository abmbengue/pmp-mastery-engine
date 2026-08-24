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

## Next — Phase 2 (Learning Engine)

- [ ] Lesson player with phase navigation (LEARN → PRACTICE → TEST → REVIEW → MASTER)
- [ ] Complete learning flow: start lesson → complete → update progress
- [ ] Quiz UI with all question types rendered properly
- [ ] Flashcard interaction
- [ ] Exercise submission (basic)
- [ ] Video placeholder display
- [ ] Progress persistence on lesson completion
- [ ] Unit tests for full learning flow

## Phase 3 — Auth + Dashboard

- [ ] Auth.js integration (email/password or magic link)
- [ ] User registration / login
- [ ] Dashboard UI: global progress, active courses, next lesson
- [ ] Weak / mastered concepts display
- [ ] Learning time and streak display
- [ ] Settings page (locale preference)

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

## Known Limitations (Phase 0+1)

- No real authentication — demo user only
- No dashboard UI
- No lesson player phases UI
- Video items are placeholders only
- AI Tutor returns stub messages
- 6 academies have no content (PLANNED status)
- No admin/CMS for content management
- No CI/CD configured
