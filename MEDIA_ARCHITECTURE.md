# Media Architecture (Phase 11)

## Goal

Abstract video/media resolution so Shorts and Lesson Players do not hardcode hosting.

## Providers

```
MediaProvider
  ├── PlaceholderMediaProvider  (default — no file)
  └── ExternalMediaProvider     (public videoUrl)
```

Reserved provider ids (not integrated): `object-storage`, `cdn`.

## Module

`src/modules/media/media-provider.ts`

`resolveMediaAsset()` picks placeholder vs external based on URL / provider field.

## VIDEO payload fields

See `videoPayloadSchema` — includes `provider`, `videoUrl`, `thumbnailUrl`, `durationSeconds`, `isShort`, topic/skill/lesson/objective, language, `isPlaceholder`.

**No paid provider dependency** (no AWS/Mux/Vimeo SDK).

## Safe extension

Add a new provider class implementing `MediaProvider`, then branch in `resolveMediaAsset`. Do not change Lesson Player internals.
