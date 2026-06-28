import { useCallback, useRef, useState } from "react";

/**
 * Arrow-key command history.
 *
 * `push` records a command; `move("up"|"down")` navigates, preserving the
 * in-progress draft so pressing Down past the newest entry restores it.
 */
export const useCommandHistory = () => {
  const [history, setHistory] = useState<string[]>([]);
  /** -1 means "the current draft line". */
  const cursor = useRef(-1);
  const draft = useRef("");

  const push = useCallback((command: string) => {
    const trimmed = command.trim();
    if (!trimmed) return;
    setHistory((prev) => {
      if (prev[prev.length - 1] === trimmed) return prev; // skip consecutive dupes
      return [...prev, trimmed];
    });
    cursor.current = -1;
  }, []);

  const move = useCallback(
    (dir: "up" | "down", current: string): string | null => {
      if (history.length === 0) return null;
      if (dir === "up") {
        if (cursor.current === -1) {
          draft.current = current;
          cursor.current = history.length - 1;
        } else if (cursor.current > 0) {
          cursor.current -= 1;
        } else {
          return history[cursor.current];
        }
        return history[cursor.current];
      }
      // down
      if (cursor.current === -1) return null;
      if (cursor.current < history.length - 1) {
        cursor.current += 1;
        return history[cursor.current];
      }
      cursor.current = -1;
      return draft.current;
    },
    [history],
  );

  const reset = useCallback(() => {
    cursor.current = -1;
  }, []);

  return { history, push, move, reset };
};
