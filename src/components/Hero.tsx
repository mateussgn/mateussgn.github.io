import type { Profile } from "@/content/types";
import { Avatar } from "./Avatar";
import { DownloadIcon, MailIcon } from "./icons";
import styles from "./Hero.module.css";

interface HeroProps {
  profile: Profile;
  photoSrc?: string;
  cvHref?: string;
}

export function Hero({ profile, photoSrc, cvHref }: HeroProps) {
  return (
    <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.main}>
        <h1 id="hero-title" className={styles.title}>
          I&apos;m {profile.name}.<br />
          <span className={styles.headline}>{profile.headline}</span>
        </h1>
        <p className={styles.intro}>{profile.intro}</p>
        <ul className={styles.contacts} aria-label="Contact">
          <li className={styles.emailItem}>
            <a href={`mailto:${profile.email}`} className={styles.primary}>
              <MailIcon />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} className={styles.secondary} rel="me noopener" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.links.github} className={styles.secondary} rel="me noopener" target="_blank">
              GitHub
            </a>
          </li>
          {cvHref && (
            <li>
              <a href={cvHref} className={styles.secondary} download>
                <DownloadIcon />
                <span className={styles.cvLong}>Download CV</span>
                <span className={styles.cvShort}>CV (PDF)</span>
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.aside}>
        <Avatar name={profile.name} photoSrc={photoSrc} className={styles.avatar} />
        <ul className={styles.tags}>
          {profile.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
