import { useCallback, useRef, useState } from "react";
import "./components/Terminal/terminal.css";
import { Terminal } from "./components/Terminal/Terminal";
import { BootSequence } from "./components/Terminal/BootSequence";
import { useTheme } from "./hooks/useTheme";
import { useCommandHistory } from "./hooks/useCommandHistory";
import { findCommand, commandNames } from "./commands";
import { CLEAR, t } from "./commands/types";
import type {
  CommandResult,
  CommandContext,
  Segment,
} from "./commands/types";
import type { LogEntry } from "./components/Terminal/types";
import { profile } from "./data/profile";
import { WELCOME_LINES } from "./commands/banner";

const PROMPT = `${profile.user}@${profile.host}:~$`;

/** Normalize a command result into a segment array (CLEAR/void handled by caller). */
const toSegments = (result: CommandResult): Segment[] => {
  if (result === undefined || result === null) return [];
  if (result === CLEAR) return [];
  if (Array.isArray(result)) return result;
  return [result];
};

export default function App() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const { push, move, reset } = useCommandHistory();
  const [booting, setBooting] = useState(true);
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const idRef = useRef(0);
  const nextId = () => ++idRef.current;

  const ctx: CommandContext = { theme, setTheme, toggleTheme };

  const addEntry = useCallback(
    (entry: Omit<LogEntry, "id">, replace = false) => {
      setEntries((prev) =>
        replace
          ? [{ id: nextId(), ...entry }]
          : [...prev, { id: nextId(), ...entry }],
      );
    },
    [],
  );

  const handleSubmit = useCallback(
    (raw: string) => {
      push(raw);
      const trimmed = raw.trim();

      // Blank enter → just echo an empty prompt line.
      if (trimmed === "") {
        addEntry({ command: "", segments: [] });
        return;
      }

      const [name, ...args] = trimmed.split(/\s+/);
      const command = findCommand(name.toLowerCase());

      if (!command) {
        addEntry(
          {
            command: raw,
            segments: [
              t(`command not found: ${name}`),
              t("Type 'help' for a list of available commands."),
            ],
          },
          true,
        );
        return;
      }

      const result = command.run(args, ctx);
      if (result === CLEAR) {
        setEntries([]);
        return;
      }
      addEntry({ command: raw, segments: toSegments(result) }, true);
    },
    [addEntry, ctx, push],
  );

  const handleEcho = useCallback(
    (segments: Segment[]) => addEntry({ segments }),
    [addEntry],
  );

  return (
    <>
      {/* CRT overlays — pointer-events:none, never block input */}
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      <div className="crt-flicker" aria-hidden="true" />

      {booting ? (
        <BootSequence onComplete={() => setBooting(false)} />
      ) : (
        <Terminal
          prompt={PROMPT}
          bannerLines={WELCOME_LINES}
          entries={entries}
          suggestions={commandNames}
          onSubmit={handleSubmit}
          onEcho={handleEcho}
          navigate={move}
          resetCursor={reset}
        />
      )}
    </>
  );
}
