import { t } from "./types";
import type { Command } from "./types";
import { experience, engineeringHighlights } from "../data/experience";

export const experienceCommand: Command = {
  name: "experience",
  description: "Career timeline & engineering highlights.",
  run: () => {
    const out: ReturnType<typeof t>[] = [t("Work experience:"), t("")];
    for (const e of experience) {
      out.push(t(`${e.role} — ${e.company}`));
      out.push(t(`  ${e.period}`));
      for (const pt of e.points) out.push(t(`  - ${pt}`));
      out.push(t(""));
    }
    out.push(t("Engineering highlights (from shipped projects):"));
    for (const h of engineeringHighlights) out.push(t(`  - ${h}`));
    return out;
  },
};
