import { useEffect, useRef, useState } from "react";
import type { Segment } from "../../commands/types";
import { t } from "../../commands/types";

interface Props {
  prompt: string;
  suggestions: string[];
  disabled?: boolean;
  onSubmit: (command: string) => void;
  onEcho: (segments: Segment[]) => void;
  /** Returns the history entry to show, or null to keep current. */
  navigate: (dir: "up" | "down", current: string) => string | null;
  resetCursor: () => void;
}

const commonPrefix = (words: string[]): string => {
  if (words.length === 0) return "";
  let prefix = words[0];
  for (const w of words) {
    while (!w.toLowerCase().startsWith(prefix.toLowerCase())) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
};

/**
 * The live prompt line. A transparent native <input> (for IME/keyboard) is
 * overlaid on a styled "ghost" so we can render a true retro block cursor in
 * reverse video and keep full text editing / caret behaviour.
 */
export const TerminalInput = ({
  prompt,
  suggestions,
  disabled = false,
  onSubmit,
  onEcho,
  navigate,
  resetCursor,
}: Props) => {
  const [value, setValue] = useState("");
  const [caret, setCaret] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const syncCaret = () => {
    const el = inputRef.current;
    if (!el) return;
    setCaret(el.selectionStart ?? el.value.length);
  };

  const focus = () => inputRef.current?.focus();

  useEffect(() => {
    focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    resetCursor();
    syncCaret();
  };

  const complete = () => {
    // Only autocomplete the command token (first word).
    if (value.includes(" ")) return;
    const lower = value.toLowerCase();
    const matches = suggestions.filter(
      (s) => s.toLowerCase().startsWith(lower) && s.toLowerCase() !== lower,
    );
    if (matches.length === 0) return;
    if (matches.length === 1) {
      const completed = matches[0] + " ";
      setValue(completed);
      setCaret(completed.length);
      return;
    }
    const prefix = commonPrefix(matches);
    if (prefix.length > value.length) {
      setValue(prefix);
      setCaret(prefix.length);
    } else {
      onEcho([t(matches.join("   "))]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(value);
      setValue("");
      setCaret(0);
      resetCursor();
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      complete();
      return;
    }
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const dir = e.key === "ArrowUp" ? "up" : "down";
      const next = navigate(dir, value);
      if (next !== null) {
        setValue(next);
        setCaret(next.length);
      }
      return;
    }
    if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      onSubmit("clear");
      setValue("");
      setCaret(0);
      resetCursor();
    }
  };

  const before = value.slice(0, caret);
  const at = value[caret] ?? " ";
  const after = value.slice(caret + 1);

  return (
    <div
      className="input-row"
      onMouseDown={(e) => {
        // Focus the field, but don't fight text selection clicks.
        if (window.getSelection()?.toString()) return;
        e.preventDefault();
        focus();
      }}
    >
      <span className="prompt">{prompt}&nbsp;</span>
      <span className="input-field">
        <span className="ghost pre" aria-hidden="true">
          {before}
          <span className="block-cursor">{at}</span>
          {after}
        </span>
        <input
          ref={inputRef}
          className="real-input"
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onKeyUp={syncCaret}
          onClick={syncCaret}
          onSelect={syncCaret}
          onBlur={syncCaret}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          aria-label="terminal command input"
        />
      </span>
    </div>
  );
};
