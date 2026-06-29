/**
 * Leadership, mentoring & extracurriculars — synced with the resume
 * (mostofa_meem/main.md).
 */

export interface LeadershipEntry {
  period: string;
  role: string;
  org: string;
  detail: string;
  highlights?: string[];
}

export const leadership: LeadershipEntry[] = [
  {
    period: "2022 – 2024",
    role: "Trainer",
    org: "Programming Club, MBSTU",
    detail:
      "Trained junior members in competitive programming, mentoring them in " +
      "problem-solving techniques, algorithmic thinking, and contest preparation.",
  },
  {
    period: "2021 – 2024",
    role: "Team Captain",
    org: "CSE Football Team, MBSTU",
    detail: "Led the department football team to multiple tournament titles.",
    highlights: [
      "2× Champion & 1× Runner-Up — Intra-Department Football Tournament",
      "1× Champion — Inter-Department (VC Cup) Football Tournament",
    ],
  },
];
