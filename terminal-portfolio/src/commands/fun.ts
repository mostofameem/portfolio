import { t } from "./types";
import type { Command } from "./types";

export const sudoCommand: Command = {
  name: "sudo",
  usage: "sudo hire-me",
  description: "Escalate privileges (try 'sudo hire-me').",
  run: (args) => {
    const sub = args[0]?.toLowerCase();
    if (sub === "hire-me" || sub === "hireme") {
      return [
        t("[sudo] password for mostofa: ********"),
        t("Permission granted."),
        t(""),
        t("Excellent decision."),
        t(""),
        t("Reach me: mostofameem@gmail.com  ·  type 'contact' for more"),
      ];
    }
    if (!args.length) {
      return [
        t("usage: sudo <command>"),
        t(""),
        t("Most people use:   sudo hire-me"),
      ];
    }
    return [
      t("[sudo] password for mostofa: ********"),
      t(
        `Sorry, user mostofa is not in the sudoers file for '${args.join(" ")}'.`,
      ),
      t("This incident will be reported.  (just kidding)"),
    ];
  },
};

export const coffeeCommand: Command = {
  name: "coffee",
  aliases: ["tea"],
  description: "Brew a fresh cup of motivation.",
  run: () => [
    t("Brewing motivation..."),
    t("█████████████ 100%"),
    t(""),
    t("Result: one slightly over-caffeinated backend engineer."),
  ],
};

export const hackCommand: Command = {
  name: "hack-the-planet",
  aliases: ["hack", "htp"],
  description: "???",
  hidden: true,
  run: () => [
    t("Establishing uplink .......... ok"),
    t("Bypassing firewall ........... ok"),
    t("Decrypting mainframe ......... "),
    t(""),
    t("Access Denied."),
    t("Nice try."),
  ],
};
