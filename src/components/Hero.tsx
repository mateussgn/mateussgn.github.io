import type { Profile } from "@/content/types";
import styles from "./Hero.module.css";

interface HeroProps {
  profile: Profile;
  cvHref?: string;
}

export function Hero({ profile, cvHref }: HeroProps) {
  return (
    <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.main}>
        <h1 id="hero-title" className={styles.title}>
          {profile.headline}
        </h1>
        <p className={styles.intro}>{profile.intro}</p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.primary}>
            Get in touch
          </a>
          {cvHref && (
            <a href={cvHref} className={styles.secondary} download>
              Download CV
            </a>
          )}
        </div>
      </div>
      <dl className={styles.facts}>
        {profile.facts.map((fact) => (
          <div key={fact.label} className={styles.fact}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
