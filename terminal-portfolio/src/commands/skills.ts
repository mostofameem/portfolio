import { t } from "./types";
import type { Command } from "./types";
import { skillCategories } from "../data/skills";
import { pad } from "./format";

export const skillsCommand: Command = {
  name: "skills",
  description: "List skills grouped by category.",
  run: () => {
    const width = Math.max(...skillCategories.map((c) => c.name.length));
    return [
      t("Skill categories:"),
      t(""),
      ...skillCategories.map((cat) =>
        t(`${pad(cat.name + ":", width + 1)} ${cat.items.join(", ")}`),
      ),
    ];
  },
};
