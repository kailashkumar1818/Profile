import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently under the sticky header.
 * The last section is force-selected at the bottom of the page so short
 * final sections can still receive their active state.
 */
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    let frame = 0;

    const updateActiveSection = () => {
      const headerOffset = 128;
      const scrollMarker = window.scrollY + headerOffset;

      let current = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollMarker) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (atBottom) current = sectionIds[sectionIds.length - 1];

      setActiveId((previous) => (previous === current ? previous : current));
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateActiveSection();
        frame = 0;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}
