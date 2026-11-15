import type { Principle } from "@/content/types";
import styles from "./HowIWork.module.css";

interface HowIWorkProps {
  principles: Principle[];
}

export function HowIWork({ principles }: HowIWorkProps) {
  return (
    <section id="how-i-work" className="container section band" aria-labelledby="how-title">
      <h2 id="how-title" className="section-title">
        How I work
      </h2>
      <p className="section-note">A few things I hold to, whatever the team or the stack.</p>
      <ul className={styles.list}>
        {principles.map((principle) => (
          <li key={principle.title} className={styles.item}>
            <h3 className={styles.title}>{principle.title}</h3>
            <p className={styles.body}>{principle.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
