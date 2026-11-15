import type { WorkCase } from "./types";

/** Newest first. Client work is under NDA: describe the problem and my part, never internals. */
export const work: WorkCase[] = [
  {
    company: "Savant Labs",
    from: "2025-04",
    title: "An E2E suite that went from 10% to 90% passing",
    description:
      "Paid down the test-code debt that kept end-to-end runs failing, so a red build points to a real problem again. Also built the permissions that let trial accounts preview paid features, using Claude Code to prototype and work through the harder parts.",
    stack: ["Java", "Spring", "React", "E2E tests", "GraphQL", "Claude Code"],
  },
  {
    company: "Sensedia",
    from: "2024-10",
    to: "2025-11",
    title: "A financial platform that crossed R$120M in revenue",
    description:
      "Designed the microservices behind new financial-management features in a product launched with payment and government-service partners. Services talk over REST, RabbitMQ and AWS SQS; the architecture is documented in C4.",
    stack: ["Java", "Spring Boot", "RabbitMQ", "AWS SQS", "TestContainers"],
  },
  {
    company: "Liferay",
    from: "2021-07",
    to: "2024-01",
    title: "Liferay Objects, a low-code platform launched in six months",
    description:
      "Built backend features and API endpoints for the flagship low-code framework, folded legacy features into it, and took on the React and TypeScript screens.",
    stack: ["Java", "REST APIs", "MySQL", "React", "TypeScript"],
  },
];
