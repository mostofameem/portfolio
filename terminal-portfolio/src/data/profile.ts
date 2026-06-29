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
  role: "Backend Software Engineer",
  tagline: "Backend Software Engineer | AI-Accelerated Development",
  location: "Dhaka, Bangladesh",
  email: "mostofameem@gmail.com",
  bio: [
    "I'm a Backend Software Engineer with 2.5+ years of experience building",
    "production-grade, high-performance systems in Go, Java, and Python. My",
    "focus goes beyond implementing APIs — I enjoy solving complex engineering",
    "challenges around concurrency, distributed systems, performance",
    "optimization, and reliability. I leverage modern AI-powered development",
    "tools like Cursor, Claude Code, and Z.ai (GLM) to help teams and founders",
    "turn ideas into production-ready software faster, combining AI-assisted",
    "development with strong engineering principles to ship scalable APIs,",
    "microservices, and backend systems that are built to perform and evolve.",
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
  {
    label: "Uva",
    handle: "Mostofa.Meem",
    url: "https://uhunt.onlinejudge.org/id/1036760",
  },
];

/** Resume PDF shipped in /public for the `resume` command. */
export const resumeUrl = "./mostofa_meem.pdf";
