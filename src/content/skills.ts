import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    name: "Backend",
    items: ["Java 17–21", "Spring Boot", "REST", "GraphQL", "SOAP", "Microservices", "RabbitMQ", "AWS SQS", "Keycloak", "OAuth2"],
  },
  {
    name: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Cloud and DevOps",
    items: ["AWS", "Azure Functions", "Azure Cosmos DB", "Azure Pipelines", "Docker", "Linux", "Jenkins", "GitHub", "GitLab"],
  },
  {
    name: "Data",
    items: ["SQL", "MySQL", "Relational and NoSQL databases"],
  },
  {
    name: "Quality",
    items: ["JUnit", "Mockito", "JaCoCo", "TestContainers", "Cucumber", "End-to-end tests"],
  },
  {
    name: "AI tools",
    items: ["Claude Code", "GitHub Copilot", "AI-assisted prototyping and code review"],
  },
  {
    name: "Practices",
    items: ["Clean Code", "Design patterns", "C4 model", "Code review", "Scrum", "Kanban", "SAFe"],
  },
];
