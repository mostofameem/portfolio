import { t } from "./types";
import type { Command } from "./types";
import { education } from "../data/education";
import { achievements, codingStats } from "../data/achievements";

export const educationCommand: Command = {
  name: "education",
  description: "Education timeline.",
  run: () => {
    const out: ReturnType<typeof t>[] = [t("Education:"), t("")];
    for (const e of education) {
      out.push(t(`${e.degree}`));
      out.push(t(`  ${e.institution}`));
      out.push(t(`  ${e.period}${e.detail ? "  —  " + e.detail : ""}`));
      out.push(t(""));
    }
    return out;
  },
};

export const achievementsCommand: Command = {
  name: "achievements",
  aliases: ["awards", "cp"],
  description: "Competitive programming results.",
  run: () => [
    t("Competitive programming:"),
    t(""),
    ...achievements.map(
      (a) => t(`  ${a.rank.padStart(7)}   ${a.event}  —  ${a.note}`),
    ),
    t(""),
    t("Stats:"),
    ...codingStats.map((s) => t(`  ${s.value.padStart(7)}   ${s.label}`)),
  ],
};
