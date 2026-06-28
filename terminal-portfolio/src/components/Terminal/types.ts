import type { Segment } from "../../commands/types";

/**
 * A line in the terminal's scrollback.
 * - `command` present  → an echoed prompt line followed by its output.
 * - `command` absent   → an info/banner block (output only).
 */
export interface LogEntry {
  id: number;
  command?: string;
  segments: Segment[];
}
