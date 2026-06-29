import { t } from "./types";
import type { Command } from "./types";
import { leadership } from "../data/leadership";

export const leadershipCommand: Command = {
  name: "leadership",
  aliases: ["extracurricular", "sports"],
  description: "Leadership, mentoring & extracurriculars.",
  run: () => {
    const out: ReturnType<typeof t>[] = [
      t("Leadership & extracurriculars:"),
      t(""),
    ];
    for (const e of leadership) {
      out.push(t(`${e.role} — ${e.org}`));
      out.push(t(`  ${e.period}`));
      out.push(t(`  ${e.detail}`));
      if (e.highlights) {
        for (const h of e.highlights) out.push(t(`  - ${h}`));
      }
      out.push(t(""));
    }
    return out;
  },
};
