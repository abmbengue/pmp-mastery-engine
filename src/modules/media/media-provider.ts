/**
 * Media storage abstraction (Phase 11).
 * Allows swapping placeholder vs external URLs without changing players.
 * No paid provider integration — abstraction only.
 */

export type MediaKind = "VIDEO" | "THUMBNAIL" | "AUDIO";

export type MediaRef = {
  kind: MediaKind;
  /** Logical provider id: placeholder | external | future-cdn */
  provider: "placeholder" | "external" | "object-storage" | "cdn";
  /** Public playback / display URL when available */
  url: string | null;
  thumbnailUrl?: string | null;
  durationSeconds?: number | null;
  isPlaceholder: boolean;
  mimeType?: string | null;
};

export interface MediaProvider {
  readonly id: MediaRef["provider"];
  resolve(input: {
    videoUrl?: string | null;
    thumbnailUrl?: string | null;
    durationSeconds?: number | null;
    isPlaceholder?: boolean;
    provider?: MediaRef["provider"] | null;
  }): MediaRef;
}

export class PlaceholderMediaProvider implements MediaProvider {
  readonly id = "placeholder" as const;
  resolve(input: {
    videoUrl?: string | null;
    thumbnailUrl?: string | null;
    durationSeconds?: number | null;
    isPlaceholder?: boolean;
    provider?: MediaRef["provider"] | null;
  }): MediaRef {
    return {
      kind: "VIDEO",
      provider: "placeholder",
      url: null,
      thumbnailUrl: input.thumbnailUrl ?? null,
      durationSeconds: input.durationSeconds ?? null,
      isPlaceholder: true,
      mimeType: null,
    };
  }
}

export class ExternalMediaProvider implements MediaProvider {
  readonly id = "external" as const;
  resolve(input: {
    videoUrl?: string | null;
    thumbnailUrl?: string | null;
    durationSeconds?: number | null;
    isPlaceholder?: boolean;
    provider?: MediaRef["provider"] | null;
  }): MediaRef {
    const url = input.videoUrl ?? null;
    const hasUrl = typeof url === "string" && url.length > 0;
    return {
      kind: "VIDEO",
      provider: "external",
      url: hasUrl ? url : null,
      thumbnailUrl: input.thumbnailUrl ?? null,
      durationSeconds: input.durationSeconds ?? null,
      isPlaceholder: !hasUrl || input.isPlaceholder === true,
      mimeType: hasUrl ? "video/mp4" : null,
    };
  }
}

const placeholderProvider = new PlaceholderMediaProvider();
const externalProvider = new ExternalMediaProvider();

/**
 * Resolve media for a VIDEO payload.
 * External URL wins when present; otherwise placeholder.
 */
export function resolveMediaAsset(input: {
  videoUrl?: string | null;
  thumbnailUrl?: string | null;
  durationSeconds?: number | null;
  isPlaceholder?: boolean;
  provider?: MediaRef["provider"] | null;
}): MediaRef {
  if (input.provider === "placeholder") {
    return placeholderProvider.resolve(input);
  }
  if (input.provider === "external" || (input.videoUrl && input.videoUrl.length > 0)) {
    return externalProvider.resolve(input);
  }
  return placeholderProvider.resolve(input);
}

export function getMediaProvider(
  id: MediaRef["provider"]
): MediaProvider {
  if (id === "external" || id === "object-storage" || id === "cdn") {
    return externalProvider;
  }
  return placeholderProvider;
}
