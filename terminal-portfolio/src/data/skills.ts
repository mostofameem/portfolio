/**
 * Skill categories. Add/remove items freely.
 */

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: ["Go", "Java", "Python", "SQL", "C/C++"],
  },
  {
    name: "Frameworks",
    items: ["Spring Boot", "FastAPI", "Gin"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    name: "Message Brokers",
    items: ["RabbitMQ"],
  },
  {
    name: "DevOps & Tools",
    items: ["Git", "GitHub", "GitLab", "AWS", "Docker", "CI/CD"],
  },
  {
    name: "Monitoring",
    items: ["Grafana", "ElasticSearch (APM)", "Swagger", "Postman"],
  },
  {
    name: "AI Tools",
    items: ["Cursor", "Claude Code", "Z.ai (GLM)"],
  },
  {
    name: "Architecture & Practices",
    items: [
      "OpenStreetMap",
      "Microservices",
      "Unit Testing",
      "Domain-Driven Design",
      "Clean Architecture",
    ],
  },
];
