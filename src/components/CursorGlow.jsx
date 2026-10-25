import { useEffect, useRef } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

/**
 * A warm golden orb that smoothly follows the cursor.
 * Hidden on touch-only devices and when the user prefers reduced motion.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const glow = glowRef.current;
    if (!glow) return;

    let rafId = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    // Lerp so the glow glides smoothly rather than snapping
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      glow.style.transform = `translate(${currentX - 220}px, ${currentY - 220}px)`;
      rafId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="animate-glow-breathe pointer-events-none fixed left-0 top-0 z-[0] h-[440px] w-[440px] rounded-full bg-accent/[0.13] blur-[90px] will-change-transform"
    />
  );
}
