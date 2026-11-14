import type { Freelance } from "@/content/types";
import styles from "./FreelanceSection.module.css";

interface FreelanceSectionProps {
  freelance: Freelance;
}

export function FreelanceSection({ freelance }: FreelanceSectionProps) {
  return (
    <section id="freelance" className={`container ${styles.section}`} aria-labelledby="freelance-title">
      <div className={styles.intro}>
        <h2 id="freelance-title" className="section-title">
          Freelance
        </h2>
        <p className={styles.lead}>{freelance.intro}</p>
        <a href="#contact" className={styles.link}>
          Talk about a project
        </a>
      </div>
      <ul className={styles.offers}>
        {freelance.offers.map((offer) => (
          <li key={offer}>{offer}</li>
        ))}
      </ul>
    </section>
  );
}
