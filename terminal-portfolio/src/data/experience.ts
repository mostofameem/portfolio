/**
 * Career timeline.
 *
 * NOTE: The original resume only listed a single role with bracketed
 * placeholders ([Company Name], [Dates]). Those are reproduced here as clearly
 * marked TODO markers so they're easy to spot and replace with real data.
 */

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  project: string;
  points: string[]
  Technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "[ EXABYTING ]",
    period: "[ 04/2025 -   ] – [ Present ]",
    project: "Gift Card (bKash)",
    points: [
      "Core backend developer for bKash Gift Card, a digital gift card platform.",
      "Designed and implemented microservices architecture for handling gift card issuance, redemption, and management.",
      "Integrated with payment gateways and ensured secure transactions.",
      "Optimized database queries and improved system performance by 30%.",
    ],
    Technologies: ["JAVA", "Spring Boot", "MySQL", "Redis", "Docker"],
  },
  {
    role: "Junior Software Engineer",
    company: "[ TechnoNext ]",
    period: "[ 01/2023 - 03/2025 ]",
    project: "Foodi",
    points: [
      "Developed and maintained backend services for Foodi, a food delivery platform.",
      "Implemented RESTful APIs for order management, user authentication, and payment processing.",
      "Collaborated with frontend developers to integrate APIs with the mobile application.",
      "Conducted code reviews and mentored junior developers.",
    ],
    Technologies: ["Go", "PostgreSQL", "MongoDB", "AWS", "Docker"],
  },
];

/**
 * Open-source / personal engineering — derived from shipped projects, so this
 * section is real rather than placeholder.
 */
export const engineeringHighlights: string[] = [
  "Designed microservices backends handling auth, catalog, inventory & payments (Foodi).",
  "Replaced Google Maps with a self-hosted mapping stack (TN-Map).",
  "Built trip-planning + place management with gRPC services (Trip To BD).",
];
