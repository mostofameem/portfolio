/**
 * Project catalog. `open <name>` resolves against the `slug` field.
 */

export interface Project {
  slug: string; // used by `open <slug>`
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  url: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    slug: "foodi",
    name: "Foodi",
    tagline: "Microservices food-delivery backend",
    description:
      "A food delivery platform letting users order from their favourite restaurants. " +
      "Microservices-based backend handling user authentication, product catalog, " +
      "inventory management and payment processing.",
    tech: ["Go", "Redis", "PostgreSQL", "Docker", "RabbitMQ"],
    features: [
      "Authentication middleware",
      "Database optimization",
      "Payment integration",
    ],
    url: "https://github.com/mostofameem",
  },
  {
    slug: "tn-map",
    name: "TN-Map",
    tagline: "Self-hosted map for places in Bangladesh",
    description:
      "A map application to view and search places of interest in Bangladesh. " +
      "Drops the Google Maps dependency in favour of a self-hosted mapping stack.",
    tech: ["Go", "PostgreSQL", "Docker", "RabbitMQ", "AWS", "OpenStreetMap"],
    features: ["Distance calculation", "Route planning", "Place search", "Map rendering"],
    url: "https://github.com/mostofameem",
  },
  {
    slug: "event-management",
    name: "Event Management System",
    tagline: "Full-stack events platform with role-based access control",
    description:
      "A full-stack web platform for creating and managing events with " +
      "role-based access control — covering the event lifecycle, participant " +
      "tracking with guest counts, and auto-recreation of recurring events.",
    tech: ["Go", "PostgreSQL", "Redis", "React", "TypeScript", "Docker", "JWT", "OAuth2", "AWS (EC2)", "CI/CD"],
    features: [
      "Role-based access control (RBAC)",
      "Event lifecycle management",
      "Participant tracking with guest counts",
      "Hot Events recurring-event scheduler",
      "Google OAuth 2.0 + JWT authentication",
      "Docker Compose + CI/CD to AWS EC2",
    ],
    url: "https://github.com/mostofameem/identity-rbac",
  },
  {
    slug: "worker-scheduler",
    name: "Worker Scheduler",
    tagline: "Schedule and manage workers for tasks",
    description:
      "A worker scheduler that assigns workers to specific tasks and lets " +
      "operators create, edit and remove workers and their assignments.",
    tech: ["Python", "PostgreSQL", "Render"],
    features: ["Manage workers", "Schedule workers", "Worker management"],
    url: "https://github.com/mostofameem",
  },
  {
    slug: "triptobd",
    name: "Trip To BD",
    tagline: "Personal project — plan trips across Bangladesh",
    description:
      "A personal project that lets users plan trips to Bangladesh: build, edit " +
      "and delete trip plans, attach places to them, and browse place details.",
    tech: ["Go", "PostgreSQL", "MongoDB", "Redis", "Docker", "RabbitMQ", "gRPC"],
    features: ["Trip management", "Place management", "User management"],
    url: "https://github.com/mostofameem",
    highlight: true,
  },
];
