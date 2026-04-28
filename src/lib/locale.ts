export type Locale = "en" | "ru";

export const LOCALES: readonly Locale[] = ["en", "ru"] as const;

export const DEFAULT_LOCALE: Locale = "en";

export function pdfHrefFor(locale: Locale): string {
  return locale === "ru"
    ? "/Nikolaev_Igor_CV_RU.pdf"
    : "/Nikolaev_Igor_CV_EN.pdf";
}

export function altLocaleHref(locale: Locale): string {
  return locale === "ru" ? "/" : "/ru/";
}
