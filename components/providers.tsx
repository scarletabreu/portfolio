"use client";

import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { translations } from "@/lib/i18n";

type Lang = "en" | "es";
type TranslationType = typeof translations.en;

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationType;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function AppState({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es"); // El estado inicial
  const t = translations[lang] as TranslationType;

  return (
    <AppContext.Provider value={{ lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <AppState>{children}</AppState>
    </NextThemesProvider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
