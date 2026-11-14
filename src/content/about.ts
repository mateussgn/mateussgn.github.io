import type { About, Freelance } from "./types";

export const about: About = {
  paragraphs: [
    "I started in 2019 at Playbot Business, building a chatbot platform and, as the team was small, also running the project and talking to the client.",
    "In 2020 I joined Liferay as an intern and stayed four years, becoming a software engineer on Liferay Objects, the company's low-code platform. Since then I have worked on payments, authentication and analytics products for teams in Brazil, Portugal and the US.",
    "I like backend work most: the part where a system has to keep working when traffic, data and teams grow.",
  ],
  details: [
    { label: "Education", value: "B.Sc. in Computer Engineering, UNIFG (Jan 2026)" },
    { label: "Certification", value: "Microsoft Certified: Azure Fundamentals (AZ-900)" },
    { label: "Languages", value: "Portuguese (native), English (full professional)" },
  ],
};

export const freelance: Freelance = {
  intro: "Alongside full-time work, I take on a small number of freelance projects in Java and Spring.",
  offers: [
    "Backend services and APIs, from design to deploy",
    "Integrations with third-party APIs and message queues",
    "Modernizing legacy Java backends",
    "Bringing an unreliable test suite back under control",
  ],
};
