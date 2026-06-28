import { useEffect, useRef, useState } from "react";

interface Options {
  /** Milliseconds between steps. */
  speed?: number;
  /** Characters revealed per step. */
  charsPerTick?: number;
  /** Disable the effect (reveal everything immediately). */
  enabled?: boolean;
  /** Called once when the full text has been revealed. */
  onDone?: () => void;
}

/**
 * Reveals `text` progressively for the terminal typing effect.
 * Returns the currently-visible substring.
 */
export const useTypewriter = (
  text: string,
  { speed = 16, charsPerTick = 2, enabled = true, onDone }: Options = {},
) => {
  const [shown, setShown] = useState(enabled ? "" : text);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!enabled) {
      setShown(text);
      onDoneRef.current?.();
      return;
    }
    setShown("");
    let pos = 0;
    const id = window.setInterval(() => {
      pos = Math.min(text.length, pos + charsPerTick);
      setShown(text.slice(0, pos));
      if (pos >= text.length) {
        window.clearInterval(id);
        onDoneRef.current?.();
      }
    }, speed);
    return () => window.clearInterval(id);
  }, [text, enabled, speed, charsPerTick]);

  return shown;
};
