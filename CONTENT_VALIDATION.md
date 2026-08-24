# Content Validation (Phase 11)

## Purpose

Let future AI / developers validate lesson catalogs before seeding.

## API

`validateLessonCatalog(lessons)` in `src/modules/content/content-validator.ts`

Detects:

- missing FR/EN titles or bodies  
- missing skill / learning objective  
- invalid duration  
- quiz without correct option  
- incomplete flashcard / exercise  
- Short missing duration or > 180s  
- duplicate lesson slugs  

## Catalog location

Existing packs (do not duplicate into a parallel tree):

```
prisma/seed/content/
  pf-lessons.ts
  cf-lessons.ts
  pmp-lessons.ts
  compact.ts
```

## Planned academies

Config only: `src/modules/content/planned-academies.ts`  
Activation checklist: `ACADEMY_ACTIVATION_STEPS`
