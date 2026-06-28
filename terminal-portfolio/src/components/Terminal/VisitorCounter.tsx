import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-visits";
/** Retro hit-counter floor — never display below the legendary number. */
const BASE = 1336;

/**
 * A retro web-counter. Increments per browser (localStorage) and is padded to
 * 8 digits, e.g. `Visitors: 00001337`.
 */
export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    try {
      const prev = Number(window.localStorage.getItem(STORAGE_KEY) ?? "0") || 0;
      const next = prev + 1;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      setCount(BASE + next);
    } catch {
      setCount(BASE + 1);
    }
  }, []);

  const display = count === null ? "00000000" : String(count).padStart(8, "0");

  return (
    <span className="visitor-counter" title="Visitor counter">
      <span className="term-dim">Visitors:</span> {display}
    </span>
  );
};
