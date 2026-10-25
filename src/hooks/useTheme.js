import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "kailash-theme";

/** Light is the intentional default; a saved choice always wins. */
function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage can be unavailable in private or restricted contexts.
  }

  return "light";
}

/** Applies and persists the colour theme across the document. */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === "dark";
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    themeMeta?.setAttribute("content", isDark ? "#08090f" : "#f6f7fb");

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Persisting is a nice-to-have; theming still works without it.
    }
  }, [theme]);

  // Keep multiple open tabs in sync.
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === STORAGE_KEY && (event.newValue === "dark" || event.newValue === "light")) {
        setTheme(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, isDark: theme === "dark", toggleTheme, setTheme };
}
