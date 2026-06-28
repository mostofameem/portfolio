import { t } from "./types";
import type { Command } from "./types";
import { pad } from "./format";

/**
 * `help` is built as a factory because it needs the full command list, which
 * lives in the registry alongside it (avoids a circular import at eval time).
 */
export const createHelpCommand = (getCommands: () => Command[]): Command => ({
  name: "help",
  description: "List commands, or get help on one (help <command>).",
  usage: "help [command]",
  run: (args) => {
    const all = getCommands();
    const target = args[0]?.toLowerCase();

    if (target) {
      const cmd = all.find(
        (c) => c.name === target || c.aliases?.includes(target),
      );
      if (!cmd) return t(`help: no such command '${target}'`);
      return [
        t(`${cmd.name}${cmd.aliases?.length ? `  (aliases: ${cmd.aliases.join(", ")})` : ""}`),
        t(`  ${cmd.description}`),
        ...(cmd.usage ? [t(`  Usage: ${cmd.usage}`)] : []),
      ];
    }

    const visible = all
      .filter((c) => !c.hidden)
      .sort((a, b) => a.name.localeCompare(b.name));
    const width = Math.max(...visible.map((c) => c.name.length));

    return [
      t("Available commands:"),
      t(""),
      ...visible.map((c) => t(`  ${pad(c.name, width)}   ${c.description}`)),
      t(""),
      t("Tip:  TAB autocompletes · ↑/↓ browses history · type 'sudo hire-me' ;)"),
    ];
  },
});
