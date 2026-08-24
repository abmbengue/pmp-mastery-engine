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
  labels: { comingSoon: string; placeholder: string };
}

export function VideoBlock({ payload, locale, labels }: VideoBlockProps) {
  const title = locale === "fr" ? payload.titleFr : payload.titleEn;

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center"
      data-testid="video-block"
    >
      <div className="mb-3 text-4xl" aria-hidden="true">▶</div>
      <p className="text-base font-semibold text-gray-700">{title}</p>
      <p className="mt-2 text-sm font-medium text-amber-600">{labels.comingSoon}</p>
      <p className="mt-1 text-xs text-gray-500">{labels.placeholder}</p>
    </div>
  );
}
