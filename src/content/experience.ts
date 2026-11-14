import type { Job } from "./types";

/** Newest first. The timeline is drawn from these dates. */
export const experience: Job[] = [
  {
    company: "Savant Labs",
    summary: "Full-stack, San Mateo (remote)",
    stints: [{ from: "2025-04" }],
  },
  {
    company: "DefensePoint",
    summary: "Backend, Lisbon (remote)",
    stints: [{ from: "2024-11", to: "2025-01" }],
  },
  {
    company: "Sensedia",
    summary: "Backend, Campinas (remote)",
    stints: [{ from: "2024-10", to: "2025-11" }],
  },
  {
    company: "Accenture",
    summary: "Backend, Recife",
    stints: [{ from: "2024-07", to: "2024-10" }],
  },
  {
    company: "Liferay",
    summary: "Intern, then Software Engineer",
    stints: [
      { from: "2020-02", to: "2021-07", kind: "intern" },
      { from: "2021-07", to: "2024-01" },
    ],
  },
  {
    company: "Playbot Business",
    summary: "Software Engineer, Recife",
    stints: [{ from: "2019-03", to: "2020-06" }],
  },
];
