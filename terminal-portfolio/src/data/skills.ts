/**
 * Skill categories. Add/remove items freely.
 */

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    items: [
      "Go (Golang)",
      "Python",
      "Java",
      "Spring Boot",
      "Node.js / Express",
      "Django",
      "Flask",
      "REST APIs",
      "gRPC",
      "RabbitMQ",
    ],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    name: "Cloud",
    items: ["AWS", "Render", "OpenStreetMap APIs"],
  },
  {
    name: "DevOps",
    items: ["Docker", "Kubernetes (basic)", "Git", "CI/CD", "GitLab"],
  },
  {
    name: "AI Tooling",
    items: ["Cursor", "Claude Code", "Z.ai (GLM)", "LLM Applications"],
  },
  {
    name: "AI / Algorithms",
    items: [
      "LLM Applications",
      "Data Structures & Algorithms",
      "Competitive Programming",
    ],
  },
];
