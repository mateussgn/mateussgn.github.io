import type { Profile } from "@/content/types";
import styles from "./ContactLinks.module.css";

interface ContactLinksProps {
  profile: Profile;
  cvHref?: string;
  className?: string;
}

/** Email, LinkedIn, GitHub and the CV on one line. Used in the hero and at the end of the page. */
export function ContactLinks({ profile, cvHref, className }: ContactLinksProps) {
  return (
    <ul className={`${styles.links} ${className ?? ""}`} aria-label="Contact">
      <li>
        <a href={`mailto:${profile.email}`} className={styles.email}>
          {profile.email}
        </a>
      </li>
      <li>
        <a href={profile.links.linkedin} rel="me noopener" target="_blank">
          LinkedIn
        </a>
      </li>
      <li>
        <a href={profile.links.github} rel="me noopener" target="_blank">
          GitHub
        </a>
      </li>
      {cvHref && (
        <li>
          <a href={cvHref} download>
            Download CV <span className={styles.format}>(PDF)</span>
          </a>
        </li>
      )}
    </ul>
  );
}
