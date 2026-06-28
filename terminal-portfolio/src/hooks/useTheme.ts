import { useCallback, useEffect, useState } from "react";
import type { Theme } from "../theme";

const STORAGE_KEY = "portfolio-theme";

const readStored = (): Theme => {
  if (typeof window === "undefined") return "green";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "amber" || saved === "green" ? saved : "green";
};

/**
 * Manages the phosphor theme. Persists to localStorage and reflects the choice
 * onto <html data-theme="..."> which the CSS variables key off of.
 */
export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(readStored);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = "dark";
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore (private mode etc.) */
    }
  }, [theme]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);

  const toggleTheme = useCallback(
    () => setThemeState((prev) => (prev === "green" ? "amber" : "green")),
    [],
  );

  return { theme, setTheme, toggleTheme };
};
