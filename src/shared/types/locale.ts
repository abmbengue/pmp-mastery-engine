export type Locale = "fr" | "en";

export type LocalizedField<T extends string> = `${T}Fr` | `${T}En`;

export interface LocalizedContent {
  fr: string;
  en: string;
}

export function pickLocalized(
  fr: string,
  en: string,
  locale: Locale
): string {
  return locale === "fr" ? fr : en;
}

export function pickLocalizedOptional(
  fr: string | null | undefined,
  en: string | null | undefined,
  locale: Locale
): string | undefined {
  const value = locale === "fr" ? fr : en;
  return value ?? undefined;
}
