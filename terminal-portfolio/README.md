# mostofa@portfolio: ~$

A retro terminal portfolio for **Mostofa Meem** — a 1980s/90s hacker-terminal
experience built with **React + TypeScript + Tailwind CSS**. Visitors don't
*browse* a page, they *operate* a terminal.

![stack](https://img.shields.io/badge/React-18-61dafb) ![stack](https://img.shields.io/badge/TypeScript-5-3178c6) ![stack](https://img.shields.io/badge/Tailwind-4-38bdf8)

---

## Quick start

```bash
cd terminal-portfolio
npm install        # already installed in this repo
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally
npm run typecheck  # tsc, no emit
```

> The CV is bundled: `public/mostofa_meem.pdf` (downloaded by the `resume`
> command).

---

## What it does

- **Boot sequence** — a fake `PortfolioOS` startup types out on load (click or
  press any key to skip).
- **Welcome banner** — block-letter ASCII art typed in, then the prompt appears.
- **Live terminal** — type commands; output streams into the scrollback.
- **CRT effects** — phosphor green text, scanlines, vignette, subtle flicker,
  text glow, and a real blinking **block cursor** (reverse video).
- **Two themes** — phosphor **green** (`#00FF00`) and phosphor **amber**
  (`#FFB000`). `theme` to toggle, `theme amber` to set. Choice persists.
- **Keyboard-first** — `↑`/`↓` command history, `TAB` autocomplete,
  `Ctrl+L` to clear, `Enter` to run.
- **Retro visitor counter** — `Visitors: 00001337` (per-browser, never below the
  legendary floor).
- **Responsive** + dark-mode only + fully static (no backend).

---

## Commands

| Command | Description |
| --- | --- |
| `help [command]` | List commands, or get help on one |
| `about` | Short introduction |
| `whoami` | Current user |
| `skills` | Skills grouped by category |
| `projects` | List projects (then `open <name>`) |
| `open <project>` | Full project details (e.g. `open triptobd`) |
| `experience` | Career timeline + engineering highlights |
| `education` | Education timeline |
| `achievements` | Competitive-programming results |
| `contact` | Email, GitHub, LinkedIn, etc. |
| `resume` | Download the CV (PDF) |
| `neofetch` | Retro system info |
| `theme [green\|amber]` | Show / switch phosphor theme |
| `ls`, `cat <file>` | Browse the portfolio like a filesystem |
| `date`, `banner`, `echo` | Utilities |
| `clear` (or `Ctrl+L`) | Wipe the screen |

**Fun / easter eggs:** `sudo hire-me`, `coffee`, `hack-the-planet`.

---

## Customizing your own content

All content lives in **`src/data/`** — edit these and the whole site updates:

| File | What to change |
| --- | --- |
| `data/profile.ts` | Name, role, bio, email, social links, resume path |
| `data/projects.ts` | Projects (`slug` is what `open` matches) |
| `data/skills.ts` | Skill categories |
| `data/experience.ts` | Work timeline (placeholders are marked `[ … ]`) |
| `data/education.ts` | Education timeline |
| `data/achievements.ts` | CP results & stats |

Want a new command? Add a file in `src/commands/` exporting a `Command`, register
it in `src/commands/index.ts`, and it auto-appears in `help` and TAB-complete.

```ts
// src/commands/hello.ts
import { t } from "./types";
import type { Command } from "./types";

export const helloCommand: Command = {
  name: "hello",
  description: "Say hello.",
  run: () => t("Hello, world!"),
};
```

```ts
// src/commands/index.ts
import { helloCommand } from "./hello";
export const commands: Command[] = [ /* … */ helloCommand ];
```

---

## Project structure

```
terminal-portfolio/
├── index.html
├── public/
│   └── mostofa_meem.pdf          # downloaded by `resume`
└── src/
    ├── main.tsx · App.tsx        # entry + state machine (boot → terminal)
    ├── theme.ts                  # green / amber phosphor definitions
    ├── index.css                 # CRT effects, theme tokens, base styles
    ├── components/Terminal/
    │   ├── Terminal.tsx          # the shell (scrollback + input + footer)
    │   ├── TerminalInput.tsx     # prompt, block cursor, history, TAB-complete
    │   ├── TerminalOutput.tsx    # renders command output segments
    │   ├── BootSequence.tsx      # fake OS startup (skippable)
    │   ├── TypewriterBlock.tsx   # the typing effect
    │   ├── VisitorCounter.tsx    # retro hit counter
    │   ├── Cursor.tsx
    │   └── terminal.css          # shell / input / boot styling
    ├── commands/                 # one file per command + the registry
    │   ├── index.ts              # registry + autocomplete names
    │   ├── types.ts              # Segment / Command / helpers (t, raw, CLEAR)
    │   └── …                     # help, about, skills, projects, open, …
    ├── data/                     # all editable content
    └── hooks/
        ├── useTheme.ts           # theme state + persistence + <html data-theme>
        ├── useCommandHistory.ts  # arrow-key history
        └── useTypewriter.ts      # character-by-character typing
```

### How it fits together

- A **command** returns `Segment[]` — either `t("text")` (plain) or
  `raw(<JSX/>)` (links / structured output). `TerminalOutput` renders them.
- Returning the `CLEAR` sentinel wipes the screen.
- `App.tsx` owns the log, history and theme, and feeds them to `Terminal`.

---

## Tech & notes

- **React 18**, **TypeScript** (strict), **Vite 6**, **Tailwind CSS v4** (via
  `@tailwindcss/vite`, CSS-first config).
- Fonts: **JetBrains Mono** / **IBM Plex Mono** with a **Courier New** fallback.
- Honors `prefers-reduced-motion` (flicker/cursor animations disabled).

© Mostofa Meem.
