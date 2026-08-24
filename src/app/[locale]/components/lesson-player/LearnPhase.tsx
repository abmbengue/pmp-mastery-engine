"use client";

import type { TextPayload, VideoPayload } from "@/shared/types/content-payloads";
import type { Locale } from "@/shared/types/locale";

interface TextBlockProps {
  payload: TextPayload;
  locale: Locale;
}

const SECTION_HEADINGS = new Set([
  "Objectif",
  "Objective",
  "Explication",
  "Explanation",
  "Exemple",
  "Example",
  "Exemple pratique",
  "Practical example",
  "Erreur fréquente",
  "Common mistake",
  "À retenir",
  "Key takeaway",
]);

function parseSections(body: string): Array<{ heading: string | null; text: string }> {
  const parts = body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return parts.map((part) => {
    const nl = part.indexOf("\n");
    if (nl > 0) {
      const maybe = part.slice(0, nl).trim();
      if (SECTION_HEADINGS.has(maybe)) {
        return { heading: maybe, text: part.slice(nl + 1).trim() };
      }
    }
    if (SECTION_HEADINGS.has(part)) {
      return { heading: part, text: "" };
    }
    return { heading: null, text: part };
  });
}

export function TextBlock({ payload, locale }: TextBlockProps) {
  const body = locale === "fr" ? payload.bodyFr : payload.bodyEn;
  const sections = parseSections(body);

  return (
    <article
      className="prose prose-sm max-w-none text-gray-800 sm:prose-base"
      data-testid="text-block"
    >
      {sections.map((section, idx) => (
        <section key={idx} className="mb-4">
          {section.heading ? (
            <h3 className="mb-1 text-base font-semibold text-slate-900">
              {section.heading}
            </h3>
          ) : null}
          {section.text ? (
            <p className="whitespace-pre-wrap leading-relaxed text-gray-800">
              {section.text}
            </p>
          ) : null}
        </section>
      ))}
    </article>
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
  const takeaway =
    locale === "fr" ? payload.keyTakeawayFr : payload.keyTakeawayEn;

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center"
      data-testid="video-block"
      role="region"
      aria-label={title}
    >
      <div className="mb-3 text-4xl" aria-hidden="true">
        ▶
      </div>
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
      {takeaway ? (
        <p className="mt-3 max-w-prose text-sm text-gray-700">{takeaway}</p>
      ) : null}
      <p className="mt-2 text-sm font-medium text-amber-700">{labels.comingSoon}</p>
      <p className="mt-1 text-xs text-gray-500">{labels.placeholder}</p>
    </div>
  );
}
