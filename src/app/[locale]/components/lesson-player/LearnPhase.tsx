"use client";

import type { TextPayload, VideoPayload } from "@/shared/types/content-payloads";
import type { Locale } from "@/shared/types/locale";

interface TextBlockProps {
  payload: TextPayload;
  locale: Locale;
}

export function TextBlock({ payload, locale }: TextBlockProps) {
  const body = locale === "fr" ? payload.bodyFr : payload.bodyEn;
  return (
    <div className="prose prose-sm max-w-none text-gray-800 sm:prose-base" data-testid="text-block">
      <p className="whitespace-pre-wrap leading-relaxed">{body}</p>
    </div>
  );
}

interface VideoBlockProps {
  payload: VideoPayload;
  locale: Locale;
  labels: { comingSoon: string; placeholder: string; shortBadge: string };
}

export function VideoBlock({ payload, locale, labels }: VideoBlockProps) {
  const title = locale === "fr" ? payload.titleFr : payload.titleEn;
  const duration = payload.durationSeconds ?? payload.durationSec;

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center"
      data-testid="video-block"
    >
      <div className="mb-3 text-4xl" aria-hidden="true">▶</div>
      <p className="text-base font-semibold text-gray-700">{title}</p>
      {payload.isShort && (
        <span className="mt-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">
          {labels.shortBadge}
        </span>
      )}
      {duration != null && (
        <p className="mt-2 text-xs text-gray-500" data-testid="video-duration">
          {Math.ceil(duration / 60)} min
        </p>
      )}
      <p className="mt-2 text-sm font-medium text-amber-700">{labels.comingSoon}</p>
      <p className="mt-1 text-xs text-gray-500">{labels.placeholder}</p>
    </div>
  );
}
