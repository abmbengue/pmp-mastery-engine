# Shorts

## Purpose

~3-minute micro-learning VIDEO items (60–180s), bilingual, placeholder or external URL via media abstraction.

## Media

Resolved by `resolveMediaAsset()` — see [MEDIA_ARCHITECTURE.md](./MEDIA_ARCHITECTURE.md).

## Player

- Placeholder pedagogy (HOOK → CONCEPT → EXAMPLE → TAKEAWAY) or HTML5 `<video>` when URL present  
- Progress indicator, play/pause, previous/next  
- Mark completed (`/api/shorts/complete`)  
- **Learn more** / **Continue lesson** → `relatedLessonSlug` path  
- **Review this skill** when mastery WEAK or `nextReviewAt` due  

## Discovery

Filters: topic, skill, difficulty, language.  
Sections: Featured, Recommended, Continue watching, For review, Completed, All.

Recommended / For review reuse ConceptMastery + completion — **not** a second recommendation engine.

## Docs

[CONTENT_VALIDATION.md](./CONTENT_VALIDATION.md) · [AI_HANDOFF.md](./AI_HANDOFF.md)
