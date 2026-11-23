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
  /** Short tags shown under the photo in the hero. */
  tags: string[];
  links: {
    linkedin: string;
    github: string;
    x: string;
  };
}

/** One continuous stretch at a company. */
export interface Stint {
  from: YearMonth;
  /** Omit for the current role. */
  to?: YearMonth;
  kind?: "regular" | "intern";
}

export interface Job {
  company: string;
  /** Role in a word or two, e.g. "Backend" or "Intern, then engineer". */
  role: string;
  /** Role and place, e.g. "Backend, Lisbon (remote)". */
  summary: string;
  stints: Stint[];
}

/** A chip in the tech stack row. The badge is a two-letter monogram, not a brand logo. */
export interface Tech {
  name: string;
  /** Shorter name for phones, when the full one is long. */
  shortName?: string;
  badge: string;
  badgeBackground: string;
  badgeColor: string;
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

/** Which drawing heads a project card. Client work is under NDA, so these stand in for screenshots. */
export type Illustration = "pass-rate" | "services" | "low-code";

export interface WorkCase {
  company: string;
  from: YearMonth;
  to?: YearMonth;
  title: string;
  description: string;
  stack: string[];
  illustration: Illustration;
}
