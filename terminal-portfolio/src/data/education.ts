/**
 * Education timeline.
 */

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export const education: EducationEntry[] = [
  {
    degree: "M.Engg in Computer Science & Engineering",
    institution: "Mawlana Bhashani Science and Technology University",
    period: "2025 – Present",
    detail: "Advanced Algorithms · AI · System Architecture",
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Mawlana Bhashani Science and Technology University",
    period: "2019 – 2024",
    detail: "CGPA: 3.49 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Rangpur Government College",
    period: "2015 – 2017",
    detail: "GPA: 4.42 / 5.00",
  },
];
