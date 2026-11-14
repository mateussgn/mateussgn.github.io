import type { Profile } from "@/content/types";
import styles from "./Footer.module.css";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className={`container ${styles.footer}`}>
      <span>{profile.fullName}</span>
      <span>{profile.location}</span>
    </footer>
  );
}
