import { t, CLEAR } from "./types";
import type { Command, CommandContext } from "./types";
import { profile, resumeUrl } from "../data/profile";
import { THEMES } from "../theme";

export const whoamiCommand: Command = {
  name: "whoami",
  description: "Print the current user.",
  run: () => [t(profile.user), t(`${profile.name} — ${profile.role}`)],
};

export const dateCommand: Command = {
  name: "date",
  description: "Print the current date & time.",
  run: () => t(new Date().toString()),
};

export const clearCommand: Command = {
  name: "clear",
  aliases: ["cls"],
  description: "Clear the screen.",
  run: () => CLEAR,
};

export const resumeCommand: Command = {
  name: "resume",
  aliases: ["cv"],
  description: "Download my resume (PDF).",
  run: () => {
    try {
      const a = document.createElement("a");
      a.href = resumeUrl;
      a.download = "mostofa_meem.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return t("Downloading mostofa_meem.pdf ...");
    } catch {
      return t(`resume: open it manually at ${resumeUrl}`);
    }
  },
};

export const themeCommand: Command = {
  name: "theme",
  usage: "theme [green|amber]",
  description: "Show or switch the phosphor theme (green / amber).",
  run: (args, ctx: CommandContext) => {
    const arg = args[0]?.toLowerCase();
    if (!arg || arg === "toggle") {
      ctx.toggleTheme();
      return t(`Theme: ${ctx.theme}`);
    }
    if ((THEMES as readonly string[]).includes(arg)) {
      ctx.setTheme(arg as CommandContext["theme"]);
      return t(`Theme set to ${arg}.`);
    }
    return [
      t(`theme: unknown theme '${arg}'.`),
      t(`Available: ${THEMES.join(", ")}`),
    ];
  },
};

export const echoCommand: Command = {
  name: "echo",
  description: "Echo back your arguments.",
  hidden: true,
  run: (args) => t(args.join(" ") || ""),
};
