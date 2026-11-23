import type { Tech } from "@/content/types";
import styles from "./TechStack.module.css";

interface TechStackProps {
  items: Tech[];
}

export function TechStack({ items }: TechStackProps) {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="stack-title">
      <h2 id="stack-title" className="section-title">
        Tech stack
      </h2>
      {/* tabIndex lets keyboard users scroll the strip on phones, where it scrolls sideways. */}
      <ul className={styles.list} tabIndex={0} aria-label="Technologies">
        {items.map((tech) => (
          <li key={tech.name} className={styles.chip}>
            <span
              className={styles.badge}
              style={{ background: tech.badgeBackground, color: tech.badgeColor }}
              aria-hidden="true"
            >
              {tech.badge}
            </span>
            {tech.shortName ? (
              <>
                <span className={styles.longName}>{tech.name}</span>
                <span className={styles.shortName}>{tech.shortName}</span>
              </>
            ) : (
              tech.name
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
