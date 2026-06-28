import { t } from "./types";
import type { Command } from "./types";
import { projects } from "../data/projects";

export const projectsCommand: Command = {
  name: "projects",
  aliases: ["project"],
  description: "List projects. Use 'open <name>' for details.",
  run: () => [
    t(`Projects (${projects.length}):`),
    t(""),
    ...projects.map((p, i) =>
      t(
        `  ${String(i + 1).padStart(2, "0")}.  ${p.name}${p.highlight ? "  ★" : ""}`,
      ),
    ),
    t(""),
    t("Type 'open <name>' to view a project, e.g.  open triptobd"),
    t(`Slugs: ${projects.map((p) => p.slug).join(", ")}`),
  ],
};
