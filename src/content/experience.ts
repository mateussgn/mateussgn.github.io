import type { Job } from "./types";

/** Newest first. */
export const experience: Job[] = [
  {
    company: "Savant Labs",
    role: "Full-stack",
    summary: "Full-stack, San Mateo (remote)",
    stints: [{ from: "2025-04" }],
  },
  {
    company: "Sensedia",
    role: "Backend",
    summary: "Backend, Campinas (remote)",
    stints: [{ from: "2024-10", to: "2025-11" }],
  },
  {
    company: "DefensePoint",
    role: "Backend",
    summary: "Backend, Lisbon (remote)",
    stints: [{ from: "2024-11", to: "2025-01" }],
  },
  {
    company: "Accenture",
    role: "Backend",
    summary: "Backend, Recife",
    stints: [{ from: "2024-07", to: "2024-10" }],
  },
  {
    company: "Liferay",
    role: "Intern, then engineer",
    summary: "Intern, then Software Engineer",
    stints: [
      { from: "2020-02", to: "2021-07", kind: "intern" },
      { from: "2021-07", to: "2024-01" },
    ],
  },
  {
    company: "Playbot Business",
    role: "Software engineer",
    summary: "Software Engineer, Recife",
    stints: [{ from: "2019-03", to: "2020-06" }],
  },
];
