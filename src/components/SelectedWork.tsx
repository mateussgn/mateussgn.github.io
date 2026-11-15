import type { WorkCase } from "@/content/types";
import { formatRange } from "@/lib/dates";
import styles from "./SelectedWork.module.css";

interface SelectedWorkProps {
  cases: WorkCase[];
}

export function SelectedWork({ cases }: SelectedWorkProps) {
  return (
    <section id="work" className="container section" aria-labelledby="work-title">
      <h2 id="work-title" className={styles.title}>
        Key projects
      </h2>
      <p className={styles.note}>
        Client work is under NDA, so these describe the problem and my part in it, not the code.
      </p>

      {cases.map((item) => (
        <article key={`${item.company}-${item.from}`} className={styles.case}>
          <div className={styles.heading}>
            <p className={styles.meta}>
              {item.company}, {formatRange(item.from, item.to)}
            </p>
            <h3 className={styles.caseTitle}>{item.title}</h3>
          </div>
          <div className={styles.body}>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.stack}>
              <span className="visually-hidden">Stack: </span>
              {item.stack.join(", ")}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
