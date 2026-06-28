/**
 * Competitive programming results & platform stats.
 */

export interface Achievement {
  rank: string;
  event: string;
  team: string;
  note: string;
}

export const achievements: Achievement[] = [
  {
    rank: "200th",
    event: "ICPC Asia Dhaka Regional 2024",
    team: 'Team: "Dead_Poets_Society"',
    note: "International Collegiate Programming Contest — Regional level",
  },
  {
    rank: "9th",
    event: "BREAKING CODE (IUPC) 2022",
    team: 'Team: "Akash_theke_pora_team"',
    note: "9th place in a university-level programming contest",
  },
  {
    rank: "80th",
    event: "NCPC JU 2023",
    team: 'Team: "Checkmate"',
    note: "National Collegiate Programming Contest",
  },
  {
    rank: "2998th",
    event: "Meta Hacker Cup 2023",
    team: 'Individual: "Mostofa Meem"',
    note: "Qualified to Round 2 in the global competition",
  },
];

export const codingStats: { value: string; label: string }[] = [
  { value: "2500+", label: "Problems Solved" },
  { value: "250+", label: "Contests Participated" },
  { value: "1399", label: "Max Codeforces Rating" },
  { value: "382", label: "Max LeetCode Streak (days)" },
];
