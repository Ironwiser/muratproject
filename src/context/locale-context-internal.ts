import { createContext } from "react";
import type { Locale } from "./locale";

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (value: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);
