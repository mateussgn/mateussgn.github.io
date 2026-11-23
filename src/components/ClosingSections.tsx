import type { About, Job, Profile } from "@/content/types";
import { formatRange } from "@/lib/dates";
import { MailIcon } from "./icons";
import styles from "./ClosingSections.module.css";

interface ClosingSectionsProps {
  about: About;
  jobs: Job[];
  profile: Profile;
  cvHref?: string;
}

/** About, Experience and Contact: three cards side by side, stacked on phones. */
export function ClosingSections({ about, jobs, profile, cvHref }: ClosingSectionsProps) {
  return (
    <div className={`container ${styles.grid}`}>
      <section id="about" className={styles.card} aria-labelledby="about-title">
        <h2 id="about-title" className="section-title">
          About
        </h2>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        <dl className={styles.details}>
          {about.details.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="experience" className={styles.card} aria-labelledby="experience-title">
        <h2 id="experience-title" className="section-title">
          Experience
        </h2>
        <ol className={styles.timeline}>
          {jobs.map((job, index) => {
            const first = job.stints[0];
            const last = job.stints[job.stints.length - 1];
            return (
              <li key={job.company} className={index === 0 ? styles.current : undefined}>
                <p className={styles.company}>{job.company}</p>
                <p className={styles.role}>
                  {job.role}, {formatRange(first.from, last.to)}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section id="contact" className={`${styles.card} ${styles.contact}`} aria-labelledby="contact-title">
        <h2 id="contact-title" className={styles.contactTitle}>
          Let&apos;s build something reliable.
        </h2>
        <p className={styles.contactLead}>
          Open to remote roles, full-time or contract, and to freelance projects in Java and Spring.
        </p>
        <a href={`mailto:${profile.email}`} className={styles.emailButton}>
          <MailIcon />
          {profile.email}
        </a>
        <ul className={styles.links}>
          <li>
            <a href={profile.links.linkedin} rel="me noopener" target="_blank">
              LinkedIn
              <span aria-hidden="true">in/mateussgn</span>
            </a>
          </li>
          <li>
            <a href={profile.links.github} rel="me noopener" target="_blank">
              GitHub
              <span aria-hidden="true">mateussgn</span>
            </a>
          </li>
          {cvHref && (
            <li>
              <a href={cvHref} download>
                Download CV
                <span aria-hidden="true">PDF</span>
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
