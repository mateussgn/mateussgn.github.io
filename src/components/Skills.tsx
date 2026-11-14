import type { SkillGroup } from "@/content/types";
import styles from "./Skills.module.css";

interface SkillsProps {
  groups: SkillGroup[];
}

export function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className={`container ${styles.section}`} aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <p className="section-note">Tools I have used in production, not just tried.</p>
      <dl className={styles.groups}>
        {groups.map((group) => (
          <div key={group.name} className={styles.group}>
            <dt className={styles.name}>{group.name}</dt>
            <dd className={styles.items}>{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
