import { useEffect, useRef, useState } from "react";
import { TypewriterBlock } from "./TypewriterBlock";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalInput } from "./TerminalInput";
import { VisitorCounter } from "./VisitorCounter";
import type { LogEntry } from "./types";
import type { Segment } from "../../commands/types";

interface Props {
  prompt: string;
  bannerLines?: string[];
  entries: LogEntry[];
  suggestions: string[];
  inputDisabled?: boolean;
  onSubmit: (command: string) => void;
  onEcho: (segments: Segment[]) => void;
  navigate: (dir: "up" | "down", current: string) => string | null;
  resetCursor: () => void;
}

export const Terminal = ({
  prompt,
  bannerLines,
  entries,
  suggestions,
  inputDisabled,
  onSubmit,
  onEcho,
  navigate,
  resetCursor,
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const stickToBottom = useRef(true);
  const [bannerDone, setBannerDone] = useState(!bannerLines?.length);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    stickToBottom.current =
      el.scrollHeight - el.scrollTop - el.clientHeight < 80;
  };

  // Stick to the bottom when new output arrives (unless the user scrolled up).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !stickToBottom.current) return;
    el.scrollTop = el.scrollHeight;
  }, [entries, bannerDone]);

  return (
    <div className="terminal">
      <div
        className="terminal-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
        tabIndex={0}
      >
        {bannerLines && (
          <TypewriterBlock
            lines={bannerLines}
            onDone={() => setBannerDone(true)}
          />
        )}

        {entries.map((entry) => (
          <div className="entry" key={entry.id}>
            {entry.command !== undefined && (
              <div className="entry-line">
                <span className="prompt">{prompt}&nbsp;</span>
                <span className="pre term-strong">{entry.command}</span>
              </div>
            )}
            <TerminalOutput segments={entry.segments} />
          </div>
        ))}

        <div className="active-line">
          {bannerDone && !inputDisabled && (
            <TerminalInput
              prompt={prompt}
              suggestions={suggestions}
              onSubmit={onSubmit}
              onEcho={onEcho}
              navigate={navigate}
              resetCursor={resetCursor}
            />
          )}
        </div>
      </div>

      <footer className="terminal-footer">
        <VisitorCounter />
        <span className="term-dim footer-hint">
          TAB complete · ↑/↓ history · type "theme" to switch · "clear" to reset
        </span>
      </footer>
    </div>
  );
};
