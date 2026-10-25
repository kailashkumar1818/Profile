import { useEffect, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

/**
 * Types and deletes a rotating list of words.
 * Reduced-motion users (and assistive tech) get a stable static value.
 */
export default function TypedText({
  words = [],
  className = "",
  typeSpeed = 78,
  deleteSpeed = 38,
  holdTime = 1550,
}) {
  const reducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex] ?? "";

  useEffect(() => {
    if (reducedMotion || words.length <= 1) {
      setText(words[0] ?? "");
      return undefined;
    }

    const atWordEnd = !isDeleting && text === currentWord;
    const atEmpty = isDeleting && text.length === 0;

    let delay = isDeleting ? deleteSpeed : typeSpeed;
    if (atWordEnd) delay = holdTime;
    if (atEmpty) delay = 320;

    const timer = window.setTimeout(() => {
      if (atWordEnd) {
        setIsDeleting(true);
        return;
      }

      if (atEmpty) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      const nextLength = text.length + (isDeleting ? -1 : 1);
      setText(currentWord.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    currentWord,
    deleteSpeed,
    holdTime,
    isDeleting,
    reducedMotion,
    text,
    typeSpeed,
    words,
  ]);

  const visibleText = reducedMotion ? (words[0] ?? "") : text;

  return (
    <span className={className}>
      <span className="sr-only">{words[0] ?? ""}</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        <span>{visibleText}</span>
        <span className="typed-caret ml-1 inline-block h-[0.95em] w-[2px] translate-y-[0.08em] rounded-full bg-accent" />
      </span>
    </span>
  );
}
