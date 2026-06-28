import type { ReactNode } from "react";
import type { Theme } from "../theme";

/**
 * Output model.
 *
 * Commands return a list of *segments*. A `type` segment is streamed out
 * character-by-character (the terminal typing effect); a `raw` segment is
 * rendered immediately (used for links / structured JSX). Special sentinel
 * `CLEAR` empties the screen.
 */
export interface TypeSegment {
  readonly __kind: "type";
  readonly text: string;
}
export interface RawSegment {
  readonly __kind: "raw";
  readonly node: ReactNode;
}
export type Segment = TypeSegment | RawSegment;

/** Build a typed-text segment. */
export const t = (text: string): Segment => ({ __kind: "type", text });
/** Build an immediately-rendered segment (links, structured output). */
export const raw = (node: ReactNode): Segment => ({ __kind: "raw", node });

/** Returned by `clear` to wipe the terminal. */
export const CLEAR = Symbol("clear");

export type CommandResult = Segment[] | Segment | typeof CLEAR | void;

export interface CommandContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export interface Command {
  /** Primary name (lowercase). */
  name: string;
  /** Alternate spellings, also used for autocomplete. */
  aliases?: string[];
  /** One-line description shown by `help`. */
  description: string;
  /** Usage hint, e.g. `open <project>`. */
  usage?: string;
  /** Hide from the default `help` listing (still works). */
  hidden?: boolean;
  run: (args: string[], ctx: CommandContext) => CommandResult;
}
