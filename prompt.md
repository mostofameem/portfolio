# Retro Terminal Portfolio Website

## Objective

Create a personal portfolio website that looks and feels like an old-school hacker terminal from the 1980s/1990s.

---

## Design Requirements

### Overall Theme

- Retro terminal / DOS / UNIX aesthetic
- Black background (`#000000`)
- Green monochrome text (`#00FF00`)
- Optional amber terminal mode toggle (`#FFB000`)
- CRT monitor feeling
- Minimalistic and nostalgic
- No modern glassmorphism, gradients, shadows, or flashy animations

### Visual Effects

- Blinking cursor
- Terminal typing animation
- Subtle screen flicker
- CRT scanline overlay
- Slight text glow
- Boot sequence when page loads

### Typography

Use a monospace font:

Preferred:
- JetBrains Mono
- IBM Plex Mono

Fallback:
- Courier New

---

## Layout

The website should behave like a terminal session.

Example:

```bash
$ whoami

Mostofa Meem

$ cat about.txt

Software Engineer
Backend Developer
AI Enthusiast

$ ls projects/

TripToBD
Agentic AI Playground
Portfolio Website

$ skills

Java
Spring Boot
PostgreSQL
Docker
Kubernetes
AWS
Python
LLM Applications

$ contact

Email: mostofameem@gmail.com
GitHub: github.com/mostofameem
LinkedIn: linkedin.com/in/mostofameem

$
```

---

## Sections

Implement portfolio sections as terminal commands.

### Home

```bash
$ help
```

Displays available commands.

---

### About

```bash
$ about
```

Shows personal introduction.

---

### Skills

```bash
$ skills
```

Display skill categories:

- Backend
- Cloud
- DevOps
- AI
- Databases

---

### Projects

```bash
$ projects
```

Displays project list.

Each project can be opened using:

```bash
$ open TripToBD
```

Show:

- Description
- Technologies
- GitHub link
- Screenshots (optional)

---

### Experience

```bash
$ experience
```

Displays career timeline.

---

### Contact

```bash
$ contact
```

Displays:

- Email
- GitHub
- LinkedIn

---

## Interactive Commands

Support commands such as:

```bash
help
about
skills
projects
experience
contact
clear
date
whoami
neofetch
```

---

## Fun Commands

### Hire Me

```bash
sudo hire-me
```

Output:

```text
Permission granted.

Excellent decision.
```

---

### Coffee

```bash
coffee
```

Output:

```text
Brewing motivation...
█████████████ 100%
```

---

### Easter Egg

```bash
hack-the-planet
```

Output:

```text
Access Denied.
Nice try.
```

---

## Technical Requirements

### Stack

- React
- TypeScript
- Tailwind CSS

### Features

- Fully responsive
- Keyboard-first navigation
- Command history using arrow keys
- TAB auto-complete
- Smooth typing effects
- Dark mode only
- Static website (no backend)

---

## Content Requirements

Use placeholder content and clearly indicate where personal information should be added.

Examples:

- Name
- Bio
- Experience
- Projects
- Skills
- Social Links

---

## Code Quality

- Component-based architecture
- Clean folder structure
- Reusable terminal components
- Easy customization
- Production-ready code
- Well documented

Suggested structure:

```text
src/
├── components/
│   ├── Terminal
│   ├── TerminalInput
│   ├── TerminalOutput
│   ├── BootSequence
│   └── Cursor
│
├── commands/
│   ├── about.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── contact.ts
│   └── help.ts
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── hooks/
├── pages/
├── utils/
└── App.tsx
```

---

## Bonus Features

### Boot Sequence

Display a fake terminal startup process:

```text
Initializing Portfolio OS...
Loading User Profile...
Loading Projects...
Loading Skills...
System Ready.
```

---

### Theme Switching

Allow switching between:

- Green terminal
- Amber terminal

---

### Resume Download

```bash
resume
```

Downloads a PDF resume.

---

### Terminal Sound Effects

Optional keyboard and startup sounds.

---

### Visitor Counter

Display a retro-style visitor counter.

Example:

```text
Visitors: 00001337
```

---

## Inspiration

The final result should feel like:

- Linux terminal
- Old UNIX workstation
- Retro hacker movie interface
- Vintage BBS system
- Minimalist developer portfolio

Users should feel like they are interacting with a real terminal rather than browsing a traditional website.

---

## Deliverables

Generate:

- Complete React application
- TypeScript implementation
- Tailwind styling
- Responsive design
- Terminal command system
- Boot sequence
- Theme switching
- Sample portfolio content
- Documentation
- Production-ready structure

Follow modern React best practices while preserving the retro terminal experience.
