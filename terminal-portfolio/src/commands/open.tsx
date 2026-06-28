import { t, raw } from "./types";
import type { Command } from "./types";
import { projects } from "../data/projects";

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const findProject = (query: string) => {
  const n = norm(query);
  if (!n) return undefined;
  return (
    projects.find((p) => p.slug === n) ??
    projects.find((p) => n.length >= 2 && p.slug.startsWith(n)) ??
    projects.find((p) => n.length >= 2 && norm(p.name).includes(n))
  );
};

export const openCommand: Command = {
  name: "open",
  usage: "open <project>",
  description: "Open a project's full details.",
  run: (args) => {
    if (!args[0]) {
      return t("Usage: open <project>.   Try:  open triptobd");
    }
    const p = findProject(args[0]);
    if (!p) {
      return [
        t(`open: project '${args[0]}' not found.`),
        t(`Available: ${projects.map((x) => x.slug).join(", ")}`),
      ];
    }
    const bar = "─".repeat(Math.max(p.name.length + 4, 22));
    return [
      t(`${p.name}${p.highlight ? "   ★ personal project" : ""}`),
      t(bar),
      t(p.description),
      t(""),
      t(`Stack     ${p.tech.join(", ")}`),
      t(`Features  ${p.features.join(", ")}`),
      raw(
        <div className="pre">
          <span className="term-dim">Source    </span>
          <a href={p.url} target="_blank" rel="noreferrer">
            {p.url}
          </a>
        </div>,
      ),
    ];
  },
};
