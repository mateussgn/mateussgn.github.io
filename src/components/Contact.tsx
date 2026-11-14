import type { Profile } from "@/content/types";
import styles from "./Contact.module.css";

interface ContactProps {
  profile: Profile;
}

export function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className={`container ${styles.contact}`} aria-labelledby="contact-title">
      <h2 id="contact-title" className={styles.title}>
        Hiring a backend or full-stack engineer?
      </h2>
      <p className={styles.lead}>
        Full-time or contract, remote. For a freelance project, a few lines on the scope and timeline
        are enough to start.
      </p>
      <p className={styles.email}>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <p className={styles.links}>
        <a href={profile.links.linkedin} rel="me noopener" target="_blank">
          LinkedIn
        </a>
        <a href={profile.links.github} rel="me noopener" target="_blank">
          GitHub
        </a>
      </p>
    </section>
  );
}
