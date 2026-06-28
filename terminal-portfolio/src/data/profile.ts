/**
 * Personal profile — the single source of truth for identity & contact info.
 * Edit this file to personalize the portfolio.
 */

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export const profile = {
  name: "Mostofa Meem",
  user: "mostofa", // terminal username / prompt label
  host: "portfolio", // terminal hostname
  role: "Backend Developer",
  tagline: "Backend Developer | AI-Accelerated Development",
  location: "Bangladesh",
  email: "mostofameem@gmail.com",
  bio: [
    "I'm a backend developer who ships fast by putting AI to work across my",
    "entire workflow. I help teams and founders build their projects in record",
    "time — designing, coding, and validating with tools like Cursor, Claude",
    "Code, and Z.ai (GLM) — while keeping an engineer's eye on scalable APIs",
    "and microservices, so what I ship is fast to build and built to last.",
    "When I'm not coding, I'm exploring new models and tooling.",
  ].join(" "),
  shortBio:
    "Backend developer who ships projects faster with AI (Cursor, Claude Code, Z.ai GLM).",
} as const;

export const socials: SocialLink[] = [
  {
    label: "Email",
    handle: "mostofameem@gmail.com",
    url: "mailto:mostofameem@gmail.com",
  },
  {
    label: "GitHub",
    handle: "github.com/mostofameem",
    url: "https://github.com/mostofameem",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/mostofameem",
    url: "https://linkedin.com/in/mostofameem",
  },
  {
    label: "Facebook",
    handle: "facebook.com/mostofameem",
    url: "https://facebook.com/mostofameem",
  },
  {
    label: "Codeforces",
    handle: "Mostofa_Meem",
    url: "https://codeforces.com/profile/Mostofa_Meem",
  },
  {
    label: "LeetCode",
    handle: "Mostofameem",
    url: "https://leetcode.com/Mostofameem",
  },
];

/** Resume PDF shipped in /public for the `resume` command. */
export const resumeUrl = "./mostofa_meem.pdf";
