import type { About } from "@/content/types";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  about: About;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="container section band" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        About
      </h2>
      <div className={styles.layout}>
        <div className={styles.text}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className={styles.details}>
          {about.details.map((detail) => (
            <div key={detail.label} className={styles.detail}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
