import { t } from "./types";
import type { Command, CommandContext } from "./types";
import { aboutCommand } from "./about";
import { skillsCommand } from "./skills";
import { projectsCommand } from "./projects";
import { contactCommand } from "./contact";
import { experienceCommand } from "./experience";
import { educationCommand } from "./education";
import { projects } from "../data/projects";

/** A throwaway context — these commands ignore it, but the type requires one. */
const NOOP_CTX: CommandContext = {
  theme: "green",
  setTheme: () => undefined,
  toggleTheme: () => undefined,
};

const FILE_TARGETS: Record<string, Command> = {
  "about.txt": aboutCommand,
  "skills.dat": skillsCommand,
  "experience.log": experienceCommand,
  "education.md": educationCommand,
  "contact.vcf": contactCommand,
};

const ROOT_LISTING = [
  "README.md        about.txt        skills.dat",
  "projects/        experience.log   education.md",
  "contact.vcf      resume.pdf",
  "",
  "Tip: 'cat about.txt' or 'open <project>' to read a file.",
];

export const lsCommand: Command = {
  name: "ls",
  description: "List portfolio files.",
  run: (args) => {
    const path = args.find((a) => !a.startsWith("-"))?.replace(/\/$/, "");
    if (path === "projects") {
      return [
        t("projects/"),
        t(""),
        ...projects.map((p) => t(`  ${p.slug}${p.highlight ? "   ★" : ""}`)),
      ];
    }
    return ROOT_LISTING.map((line) => t(line));
  },
};

export const catCommand: Command = {
  name: "cat",
  usage: "cat <file>",
  description: "Print a portfolio file.",
  run: (args) => {
    const file = (args[0] ?? "").replace(/\/$/, "");
    if (!file) return t("Usage: cat <file>   (try: cat about.txt)");
    if (file === "projects") return projectsCommand.run([], NOOP_CTX);
    if (file === "resume.pdf")
      return t("Use the 'resume' command to download the PDF.");
    if (file === "README.md") return aboutCommand.run([], NOOP_CTX);

    const target = FILE_TARGETS[file];
    if (target) return target.run([], NOOP_CTX);

    const known = [
      ...Object.keys(FILE_TARGETS),
      "projects/",
      "resume.pdf",
      "README.md",
    ];
    return [
      t(`cat: ${file}: No such file or directory`),
      t(`Files: ${known.join(", ")}`),
    ];
  },
};
