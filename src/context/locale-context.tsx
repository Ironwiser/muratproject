import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "de" | "tr" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (value: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);
const STORAGE_KEY = "berlgruen-locale";

function readLocale(): Locale {
  if (typeof window === "undefined") return "de";
  const fromQuery = new URLSearchParams(window.location.search).get("lang");
  if (fromQuery === "de" || fromQuery === "tr" || fromQuery === "en") return fromQuery;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "de" || saved === "tr" || saved === "en") return saved;
  return "de";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale);

  const setLocale = (value: Locale) => {
    setLocaleState(value);
    localStorage.setItem(STORAGE_KEY, value);
    const url = new URL(window.location.href);
    if (value === "de") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", value);
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const contextValue = useMemo(() => ({ locale, setLocale }), [locale]);
  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
