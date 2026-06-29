/**
 * Career timeline — synced with the resume (mostofa_meem/main.md).
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
    company: "Exabyting",
    period: "04/2025 – Present",
    project: "bKash Voucher",
    points: [
      "Designed and developed a bKash voucher to create, manage, and purchase gift cards across multiple merchants and outlets.",
      "Implemented secure and seamless bKash payment gateway integration to ensure smooth and reliable purchase flows.",
      "Utilized RabbitMQ for asynchronous service-to-service communication and real-time notifications.",
      "Integrated Redis caching to reduce database load and improve API response time.",
      "Implemented CI/CD pipelines to enable automated testing and smooth, reliable deployments.",
    ],
    Technologies: ["Java 21", "Spring Boot", "REST APIs", "MySQL", "Redis", "RabbitMQ", "CI/CD"],
  },
  {
    role: "Junior Software Engineer",
    company: "TechnoNext Software Ltd",
    period: "03/2024 – 04/2025",
    project: "Foodi | TN-MAP",
    points: [
      "Designed and implemented a data synchronization service to maintain consistency across multiple databases within the OpenStreetMap ecosystem.",
      "Integrated RabbitMQ for event-driven communication, enabling real-time notifications and reliable data propagation across services.",
      "Developed high-performance REST APIs in Go to facilitate seamless service-to-service communication.",
      "Worked with large-scale mapping and routing technologies, including tile engines, OSRM (Open Source Routing Machine), and OpenStreetMap.",
      "Implemented gRPC-based services to support rider-sharing functionality, improving inter-service communication efficiency.",
      "Monitored and debugged production systems using Elastic APM and Grafana to ensure system reliability and performance.",
    ],
    Technologies: [
      "Go",
      "Microservices",
      "Docker",
      "REST",
      "gRPC",
      "RabbitMQ",
      "Unit Testing",
      "ElasticSearch (APM)",
      "Grafana",
    ],
  },
];

/**
 * Open-source / personal engineering — derived from shipped projects, so this
 * section is real rather than placeholder.
 */
export const engineeringHighlights: string[] = [
  "Designed RBAC-based event management with Google OAuth 2.0 + JWT, deployed via Docker Compose & CI/CD to AWS EC2.",
  "Replaced Google Maps with a self-hosted OSM + OSRM mapping and routing stack (TN-Map).",
  "Built trip-planning + place management backed by gRPC services (Trip To BD).",
];
