import type { About, Freelance } from "./types";

export const about: About = {
  paragraphs: [
    "I started in 2019 building a chatbot platform, joined Liferay as an intern in 2020 and stayed four years. Since then I have worked on payments, authentication and analytics products for teams in Brazil, Portugal and the US.",
    "I like backend work most: the part where a system has to keep working when traffic, data and teams grow.",
  ],
  details: [
    { label: "Education", value: "B.Sc. in Computer Engineering, UNIFG (2026)" },
    { label: "Certification", value: "Azure Fundamentals (AZ-900)" },
  ],
};

/** Not shown in the current layout; kept so the section can come back. */
export const freelance: Freelance = {
  intro: "Alongside full-time work, I take on a small number of freelance projects in Java and Spring.",
  offers: [
    "Backend services and APIs, from design to deploy",
    "Integrations with third-party APIs and message queues",
    "Modernizing legacy Java backends",
    "Bringing an unreliable test suite back under control",
  ],
};
