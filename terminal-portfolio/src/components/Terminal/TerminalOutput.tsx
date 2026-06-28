import type { Segment } from "../../commands/types";

/** Renders a command's output segments (plain text + structured JSX). */
export const TerminalOutput = ({ segments }: { segments: Segment[] }) => (
  <div className="terminal-output">
    {segments.map((seg, i) =>
      seg.__kind === "type" ? (
        <div key={i} className="pre term-text">
          {seg.text}
        </div>
      ) : (
        <div key={i} className="raw-segment">
          {seg.node}
        </div>
      ),
    )}
  </div>
);
