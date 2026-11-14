import type { YearMonth } from "@/content/types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Months since year 0, so two dates can be subtracted. Throws on a malformed date. */
export function parseYearMonth(value: YearMonth): number {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) {
    throw new Error(`Expected a date like "2024-10", got "${value}"`);
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  if (month < 1 || month > 12) {
    throw new Error(`Month out of range in "${value}"`);
  }
  return year * 12 + (month - 1);
}

/** The month the site was built, used for "now". */
export function currentMonthIndex(today: Date = new Date()): number {
  return today.getFullYear() * 12 + today.getMonth();
}

/** "2024-10" → "Oct 2024" */
export function formatMonth(value: YearMonth): string {
  const index = parseYearMonth(value);
  return `${MONTHS[index % 12]} ${Math.floor(index / 12)}`;
}

/** "Oct 2024 – Nov 2025", or "Apr 2025 – now" when there is no end. */
export function formatRange(from: YearMonth, to?: YearMonth): string {
  return `${formatMonth(from)} – ${to ? formatMonth(to) : "now"}`;
}
