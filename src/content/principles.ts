import type { Principle } from "./types";

/**
 * "How I work": each point is backed by something I actually did.
 * Not shown in the current layout; kept so the section can come back.
 */
export const principles: Principle[] = [
  {
    title: "Tests are part of the design",
    body: "A suite nobody trusts is worse than none. At Savant Labs I took the E2E pass rate from 10% to 90%; at Accenture, unit and integration coverage went from 36% to 86%.",
  },
  {
    title: "APIs are contracts",
    body: "I agree on the shape of an API before writing it, whether it is REST, GraphQL or a message on a queue, so the teams on both sides can work in parallel.",
  },
  {
    title: "Architecture gets written down",
    body: "On remote teams, decisions that live only in a call get lost. At Sensedia we documented services with C4 diagrams so anyone could follow a change without a meeting.",
  },
  {
    title: "AI speeds me up, it doesn't decide for me",
    body: "I use Claude Code and GitHub Copilot to prototype and to work through complex features faster. Every line still goes through the same review as hand-written code.",
  },
  {
    title: "What I learn, I pass on",
    body: "At Liferay I mentored interns and newcomers, and presented the low-code platform's validation feature at Dev24, Liferay's developer community event.",
  },
];
