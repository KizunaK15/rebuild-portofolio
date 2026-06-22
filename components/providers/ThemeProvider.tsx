"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "prima-portfolio-theme";
const DEFAULT_THEME: Theme = "dark";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with default so SSR and first client render match (no flash)
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // After mount, read persisted preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const resolved: Theme =
      stored === "light" || stored === "dark" ? stored : DEFAULT_THEME;
    setThemeState(resolved);
    setMounted(true);
  }, []);

  // Sync data-theme attribute on <html> whenever theme changes
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  // Apply default attribute immediately on first render to avoid FOUC
  // This runs before paint on the client
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", DEFAULT_THEME);
  }, []);

  const setTheme = (next: Theme) => setThemeState(next);
  const toggleTheme = () =>
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/** Hook for consuming theme state in any client component. */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }
  return ctx;
}
