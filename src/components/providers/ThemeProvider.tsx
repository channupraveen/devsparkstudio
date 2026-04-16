import { createContext, useContext, useEffect, ReactNode } from "react";

/**
 * Theme is locked to "dark" only. Light mode has been removed from the UI
 * per product decision, but this provider remains so existing consumers
 * (e.g. SpaceBackground, Hero3DScene) that read `theme` keep working.
 */
type Theme = "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
    // Clean up any previously saved light preference
    try {
      localStorage.setItem("devspark-theme", "dark");
    } catch {
      /* ignore */
    }
  }, []);

  const value: ThemeContextValue = {
    theme: "dark",
    toggleTheme: () => {
      /* no-op: theme is locked */
    },
    setTheme: () => {
      /* no-op: theme is locked */
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
