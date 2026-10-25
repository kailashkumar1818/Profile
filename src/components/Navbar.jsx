import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { data, getSocialLinks } from "../data";
import useActiveSection from "../hooks/useActiveSection";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";

/** Sticky, glassy navigation with scroll-spy and a mobile drawer. */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const sectionIds = useMemo(() => data.nav.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const hasSocialLinks = getSocialLinks().length > 0;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu with Escape and return focus to the trigger.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Never leave the mobile menu open when the layout becomes desktop.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };

    mediaQuery.addEventListener?.("change", handleChange);
    return () => mediaQuery.removeEventListener?.("change", handleChange);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? "border-line/80 bg-canvas/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2.5 rounded-full"
          aria-label="Kailash Kumar — back to top"
        >
          <div className="relative">
            <img
              src={data.photo || "/kailash.jpeg"}
              alt={data.name}
              className="h-9 w-9 rounded-xl object-cover ring-2 ring-accent/40 shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:ring-accent"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-accent"
            />
          </div>
          <span className="font-display text-[0.98rem] font-semibold tracking-[-0.025em] text-ink">
            Kailash<span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {data.nav.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-full px-3 py-2 text-[0.82rem] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-ink"
                    : "text-muted hover:bg-elevated/70 hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-px h-[1.5px] origin-left rounded-full bg-accent transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? (
              <X size={19} aria-hidden="true" focusable="false" />
            ) : (
              <Menu size={19} aria-hidden="true" focusable="false" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full animate-fade-up border-y border-line bg-canvas/95 shadow-lift backdrop-blur-xl [animation-duration:240ms] lg:hidden"
        >
          <div className="container-page py-4">
            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-line/70">
                {data.nav.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={closeMenu}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex items-center justify-between rounded-xl px-2 py-3.5 text-[0.95rem] font-medium transition-colors ${
                          isActive
                            ? "text-accent"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="font-mono text-[0.62rem] tracking-[0.16em] text-faint">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {hasSocialLinks ? (
              <div className="mt-4 flex items-center border-t border-line pt-4">
                <SocialLinks />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
