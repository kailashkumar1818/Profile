import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

/** Persistent light/dark switch. Dark is the default theme. */
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-button"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {isDark ? (
        <Sun size={17} aria-hidden="true" focusable="false" />
      ) : (
        <Moon size={17} aria-hidden="true" focusable="false" />
      )}
    </button>
  );
}
