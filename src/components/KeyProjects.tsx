import type { WorkCase } from "@/content/types";
import { formatRange } from "@/lib/dates";
import { CarouselDots } from "./CarouselDots";
import { ProjectIllustration } from "./ProjectIllustration";
import styles from "./KeyProjects.module.css";

interface KeyProjectsProps {
  cases: WorkCase[];
}

const TRACK_ID = "projects-track";

/** Three cards side by side on wide screens; a swipeable carousel with dots on phones. */
export function KeyProjects({ cases }: KeyProjectsProps) {
  return (
    <section id="projects" className={`container ${styles.section}`} aria-labelledby="projects-title">
      <div className={styles.heading}>
        <h2 id="projects-title" className="section-title">
          Key projects
        </h2>
        <p className={styles.note}>
          Client work is under NDA, so these describe the problem and my part in it, not the code.
        </p>
      </div>

      <div id={TRACK_ID} className={styles.track}>
        {cases.map((item) => (
          <article key={`${item.company}-${item.from}`} className={styles.card}>
            <ProjectIllustration kind={item.illustration} />
            <div className={styles.body}>
              <p className={styles.meta}>
                {item.company}, {formatRange(item.from, item.to)}
              </p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.stack}>
                <span className="visually-hidden">Stack: </span>
                {item.stack.join(", ")}
              </p>
            </div>
          </article>
        ))}
      </div>

      <CarouselDots trackId={TRACK_ID} count={cases.length} className={styles.dots} />
    </section>
  );
}
