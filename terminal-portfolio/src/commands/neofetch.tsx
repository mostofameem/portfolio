import { raw, t } from "./types";
import type { Command, CommandContext } from "./types";
import { profile } from "../data/profile";
import { THEMES, themeMeta } from "../theme";
import { skillCategories } from "../data/skills";

// A little CRT monitor — plain ASCII, no backticks/backslashes to worry about.
const ART = [
  "  .---------.",
  " |  _______  |",
  " | |  >_   | |",
  " | |_______| |",
  " |___________|",
  "   _|_   _|_",
  "  |___| |___|",
];

export const neofetchCommand: Command = {
  name: "neofetch",
  aliases: ["fetch", "sysinfo"],
  description: "System information (retro neofetch).",
  run: (_args, ctx: CommandContext) => {
    const info: string[] = [
      `${profile.user}@${profile.host}`,
      "-------------------------",
      `OS       PortfolioOS 1.0`,
      `Host     Phosphor CRT 13"`,
      `Kernel   6.25-portfolio`,
      `Uptime   since the BBS days`,
      `Shell    retro-sh 1.0`,
      `Terminal vt220-emulator`,
      `CPU      Neurons @ 100%`,
      `Memory   4096M / infinity`,
      `Skills   ${skillCategories.length} categories`,
      `Theme    ${themeMeta[ctx.theme].label}`,
    ];

    return [
      raw(
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <pre className="pre term-dim">{ART.join("\n")}</pre>
          <div className="pre">
            {info.map((line, i) => (
              <div key={i} className={i === 0 ? "term-strong" : ""}>
                {line}
              </div>
            ))}
            <div className="mt-1">
              {THEMES.map((th) => (
                <span
                  key={th}
                  style={{ color: themeMeta[th].phosphor }}
                  className="mr-1"
                  title={themeMeta[th].label}
                >
                  ●
                </span>
              ))}
            </div>
          </div>
        </div>,
      ),
      t(""),
    ];
  },
};
