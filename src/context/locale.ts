export type Locale = "de" | "tr" | "en";

export const LOCALE_STORAGE_KEY = "berlgruen-locale";

export function readLocale(): Locale {
  if (typeof window === "undefined") return "de";
  const fromQuery = new URLSearchParams(window.location.search).get("lang");
  if (fromQuery === "de" || fromQuery === "tr" || fromQuery === "en") return fromQuery;
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === "de" || saved === "tr" || saved === "en") return saved;
  return "de";
}
