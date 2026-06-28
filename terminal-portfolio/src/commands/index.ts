import type { Command } from "./types";
import { createHelpCommand } from "./help";
import { aboutCommand } from "./about";
import { skillsCommand } from "./skills";
import { projectsCommand } from "./projects";
import { openCommand } from "./open";
import { experienceCommand } from "./experience";
import { educationCommand, achievementsCommand } from "./education";
import { contactCommand } from "./contact";
import { neofetchCommand } from "./neofetch";
import {
  whoamiCommand,
  dateCommand,
  clearCommand,
  resumeCommand,
  themeCommand,
  echoCommand,
} from "./misc";
import { sudoCommand, coffeeCommand, hackCommand } from "./fun";
import { lsCommand, catCommand } from "./fs";
import { bannerCommand } from "./banner";

/**
 * The command registry. Order here roughly mirrors the `help` grouping feel,
 * but `help` sorts alphabetically anyway.
 */
export const commands: Command[] = [
  createHelpCommand(() => commands),
  bannerCommand,
  aboutCommand,
  whoamiCommand,
  skillsCommand,
  projectsCommand,
  openCommand,
  experienceCommand,
  educationCommand,
  achievementsCommand,
  contactCommand,
  resumeCommand,
  neofetchCommand,
  themeCommand,
  dateCommand,
  clearCommand,
  lsCommand,
  catCommand,
  echoCommand,
  // fun / easter eggs
  sudoCommand,
  coffeeCommand,
  hackCommand,
];

export const findCommand = (name: string): Command | undefined =>
  commands.find((c) => c.name === name || c.aliases?.includes(name));

/** All callable names (primary + aliases), sorted — used for TAB completion. */
export const commandNames: string[] = Array.from(
  new Set(commands.flatMap((c) => [c.name, ...(c.aliases ?? [])])),
).sort((a, b) => a.localeCompare(b));
