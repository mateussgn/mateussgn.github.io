/** A calendar month written as "YYYY-MM", e.g. "2024-10". Validated by `parseYearMonth`. */
export type YearMonth = string;

export interface Fact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  fullName: string;
  jobTitle: string;
  headline: string;
  intro: string;
  email: string;
  location: string;
  facts: Fact[];
  links: {
    linkedin: string;
    github: string;
    x: string;
  };
}

/** One continuous stretch at a company, drawn as one bar on the timeline. */
export interface Stint {
  from: YearMonth;
  /** Omit for the current role. */
  to?: YearMonth;
  /** "intern" is drawn as an outlined bar. */
  kind?: "regular" | "intern";
}

export interface Job {
  company: string;
  /** Short role and place line, e.g. "Backend, Lisbon (remote)". */
  summary: string;
  stints: Stint[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Principle {
  title: string;
  body: string;
}

export interface About {
  paragraphs: string[];
  details: Fact[];
}

export interface Freelance {
  intro: string;
  offers: string[];
}

export interface WorkCase {
  company: string;
  from: YearMonth;
  to?: YearMonth;
  title: string;
  description: string;
  stack: string[];
}
