import { t } from "./types";
import type { Command } from "./types";
import { profile } from "../data/profile";

/**
 * Tiny block-letter renderer so the banner is built programmatically and is
 * guaranteed to stay aligned (no hand-aligned ASCII art that can drift).
 */
const GLYPHS: Record<string, string[]> = {
  A: [" ███ ", "█   █", "█████", "█   █", "█   █"],
  B: ["████ ", "█   █", "████ ", "█   █", "████ "],
  C: [" ████", "█    ", "█    ", "█    ", " ████"],
  D: ["████ ", "█   █", "█   █", "█   █", "████ "],
  E: ["█████", "█    ", "████ ", "█    ", "█████"],
  F: ["█████", "█    ", "████ ", "█    ", "█    "],
  G: [" ████", "█    ", "█  ██", "█   █", " ████"],
  H: ["█   █", "█   █", "█████", "█   █", "█   █"],
  I: ["█████", "  █  ", "  █  ", "  █  ", "█████"],
  J: ["  ███", "   █ ", "   █ ", "█  █ ", " ██  "],
  K: ["█   █", "█  █ ", "███  ", "█  █ ", "█   █"],
  L: ["█    ", "█    ", "█    ", "█    ", "█████"],
  M: ["█   █", "██ ██", "█ █ █", "█   █", "█   █"],
  N: ["█   █", "██  █", "█ █ █", "█  ██", "█   █"],
  O: [" ████", "█   █", "█   █", "█   █", " ████"],
  P: ["████ ", "█   █", "████ ", "█    ", "█    "],
  Q: [" ████", "█   █", "█   █", "█  ██", " ████"],
  R: ["████ ", "█   █", "████ ", "█  █ ", "█   █"],
  S: [" █████", "█     ", " █████", "     █", " █████"],
  T: ["█████", "  █  ", "  █  ", "  █  ", "  █  "],
  U: ["█   █", "█   █", "█   █", "█   █", " ████"],
  V: ["█   █", "█   █", "█   █", " █ █ ", "  █  "],
  W: ["█   █", "█   █", "█ █ █", "██ ██", "█   █"],
  X: ["█   █", " █ █ ", "  █  ", " █ █ ", "█   █"],
  Y: ["█   █", " █ █ ", "  █  ", "  █  ", "  █  "],
  Z: ["█████", "   █ ", "  █  ", " █   ", "█████"],
};

/** Render a word as 5-row block ASCII art. */
export const figlet = (word: string): string => {
  const rows = ["", "", "", "", ""];
  for (const ch of word.toUpperCase()) {
    const glyph = GLYPHS[ch] ?? ["     ", "     ", "     ", "     ", "     "];
    glyph.forEach((line, i) => {
      rows[i] += line + " ";
    });
  }
  return rows.join("\n");
};

export const BANNER_TEXT = figlet("MOSTOFA MEEM");

/** Welcome banner as plain lines — typed out by the Terminal on first load. */
export const WELCOME_LINES: string[] = [
  BANNER_TEXT,
  "",
  `${profile.name} — ${profile.tagline}`,
  profile.location,
  "",
  "Type 'help' to list available commands.",
  "Type 'help <command>' for usage. Try: whoami, projects, neofetch",
];

/** Full welcome banner used by the `banner` command. */
export const welcomeBanner = () => WELCOME_LINES.map((line) => t(line));

/** The `banner` command re-prints the welcome banner. */
export const bannerCommand: Command = {
  name: "banner",
  description: "Re-print the welcome banner.",
  run: () => welcomeBanner(),
};
