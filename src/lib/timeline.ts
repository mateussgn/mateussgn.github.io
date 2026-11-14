import type { Job } from "@/content/types";
import { currentMonthIndex, parseYearMonth } from "./dates";

export interface TimelineBar {
  /** Left edge, as a percentage of the track. */
  left: number;
  /** Width, as a percentage of the track. */
  width: number;
  kind: "regular" | "intern" | "current";
}

export interface TimelineRow {
  job: Job;
  bars: TimelineBar[];
}

export interface Timeline {
  rows: TimelineRow[];
  /** Year labels with their position on the track. */
  years: { year: number; left: number }[];
}

const round = (n: number) => Math.round(n * 100) / 100;

/**
 * Lays jobs out on a shared axis that runs from January of the first year
 * to December of the current year. Each month counts in full, so a stint
 * from Oct to Nov covers two months.
 */
export function buildTimeline(jobs: Job[], today: Date = new Date()): Timeline {
  const now = currentMonthIndex(today);
  const starts = jobs.flatMap((job) => job.stints.map((s) => parseYearMonth(s.from)));
  const firstYear = Math.floor(Math.min(...starts) / 12);
  const lastYear = Math.floor(now / 12);

  const axisStart = firstYear * 12;
  const axisMonths = (lastYear - firstYear + 1) * 12;
  const toPercent = (months: number) => round((months / axisMonths) * 100);

  const rows = jobs.map((job) => ({
    job,
    bars: job.stints.map((stint): TimelineBar => {
      const start = parseYearMonth(stint.from);
      const end = stint.to ? parseYearMonth(stint.to) : now;
      const kind = stint.kind === "intern" ? "intern" : stint.to ? "regular" : "current";
      return {
        left: toPercent(start - axisStart),
        width: toPercent(end - start + 1),
        kind,
      };
    }),
  }));

  const years: Timeline["years"] = [];
  for (let year = firstYear; year <= lastYear; year++) {
    years.push({ year, left: toPercent(year * 12 - axisStart) });
  }

  return { rows, years };
}
