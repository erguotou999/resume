"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  dictionaries,
  type Dictionary,
  type Locale,
  type LocalizedText,
  resolve,
} from "./dictionary";

interface LocaleContextValue {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Resolve a `LocalizedText` (or plain string) in the active locale. */
  t: (value: LocalizedText | string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "zh") return stored;
  return window.navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function LocaleProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Hydrate from storage / browser preference once mounted.
  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  // Keep <html lang> in sync so assistive tech and search engines follow.
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode) — the in-memory value still works.
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === "en" ? "zh" : "en";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore.
      }
      return next;
    });
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale,
      toggleLocale,
      t: (value) => resolve(value, locale),
    }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useI18n(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useI18n must be used inside a <LocaleProvider>.");
  }
  return context;
}
