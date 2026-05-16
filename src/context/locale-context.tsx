import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LocaleContext } from "./locale-context-internal";
import { LOCALE_STORAGE_KEY, readLocale, type Locale } from "./locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale);

  const setLocale = (value: Locale) => {
    setLocaleState(value);
    localStorage.setItem(LOCALE_STORAGE_KEY, value);
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
