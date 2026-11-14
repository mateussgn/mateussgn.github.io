import type { Job } from "@/content/types";
import { formatRange } from "@/lib/dates";
import { buildTimeline } from "@/lib/timeline";
import styles from "./Career.module.css";

interface CareerProps {
  jobs: Job[];
}

/** The overall span of a job, from its first stint to its last. */
function jobRange(job: Job): string {
  const first = job.stints[0];
  const last = job.stints[job.stints.length - 1];
  return formatRange(first.from, last.to);
}

export function Career({ jobs }: CareerProps) {
  const { rows, years } = buildTimeline(jobs);
  const firstYear = years[0]?.year;

  return (
    <section id="career" className={`container ${styles.career}`} aria-labelledby="career-title">
      <h2 id="career-title" className={styles.title}>
        Shipping software since {firstYear}
      </h2>
      <p className={styles.note}>
        Some bars overlap where I worked two engagements at once. At Liferay, the outlined part is
        my internship.
      </p>

      <div className={styles.scroller}>
        <ol className={styles.chart}>
          {rows.map(({ job, bars }) => (
            <li key={job.company} className={styles.row}>
              <div className={styles.label}>
                <p className={styles.company}>{job.company}</p>
                <p className={styles.meta}>{job.summary}</p>
                <p className={styles.meta}>{jobRange(job)}</p>
              </div>
              <div className={styles.track} aria-hidden="true">
                {bars.map((bar, index) => (
                  <span
                    key={index}
                    className={`${styles.bar} ${styles[bar.kind]}`}
                    style={{ left: `${bar.left}%`, width: `${bar.width}%` }}
                  />
                ))}
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.axis} aria-hidden="true">
          <div className={styles.axisSpacer} />
          <div className={styles.axisTrack}>
            {years.map(({ year, left }) => (
              <span key={year} style={{ left: `${left}%` }}>
                {year}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
