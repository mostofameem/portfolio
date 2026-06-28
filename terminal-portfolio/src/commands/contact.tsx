import { t, raw } from "./types";
import type { Command } from "./types";
import { socials } from "../data/profile";
import { pad } from "./format";

export const contactCommand: Command = {
  name: "contact",
  aliases: ["social", "socials"],
  description: "How to reach me.",
  run: () => [
    t("Contact & socials:"),
    t(""),
    raw(
      <div className="pre">
        {socials.map((s) => (
          <div key={s.label}>
            <span className="term-dim">{pad(s.label, 10)}</span>
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.handle}
            </a>
          </div>
        ))}
      </div>,
    ),
    t(""),
    t("Or type 'resume' to download my CV."),
  ],
};
