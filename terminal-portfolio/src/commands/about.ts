import { t } from "./types";
import type { Command } from "./types";
import { profile } from "../data/profile";

export const aboutCommand: Command = {
  name: "about",
  description: "A short introduction.",
  run: () => [
    t(`Name:     ${profile.name}`),
    t(`Role:     ${profile.role}`),
    t(`Location: ${profile.location}`),
    t(""),
    t(profile.bio),
  ],
};
