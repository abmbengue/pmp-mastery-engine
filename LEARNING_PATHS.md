# Learning Paths (Phase 10)

## Purpose

Simple pedagogical groupings of existing courses/modules/lessons/skills.

**Not** a second progression engine. Progress = existing LessonProgress / enrollments.

## Defined paths

| Slug | Academy | Course |
|---|---|---|
| `financial-foundations` | personal-finance | essentials |
| `corporate-finance-fundamentals` | corporate-finance | cf-essentials |
| `pmp-core-preparation` | pmp-project-management | pmp-foundations |

Config: `src/modules/learning-engine/learning-paths.ts`  
Service: `learning-path-service.ts`  
UI: `/[locale]/learning-paths` + Dashboard section

## Security

Path progress is resolved with the authenticated `userId` from `auth()` when present.
