import type { Profile } from "@/content/types";
import { ContactLinks } from "./ContactLinks";
import styles from "./Contact.module.css";

interface ContactProps {
  profile: Profile;
  cvHref?: string;
}

export function Contact({ profile, cvHref }: ContactProps) {
  return (
    <section id="contact" className="container section band" aria-label="Contact">
      <p className={styles.lead}>
        Open to remote roles, full-time or contract. For a freelance project, a few lines on the
        scope and timeline are enough to start.
      </p>
      <ContactLinks profile={profile} cvHref={cvHref} className={styles.links} />
    </section>
  );
}
