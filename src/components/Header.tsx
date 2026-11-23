import { GitHubIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

interface HeaderProps {
  name: string;
  githubUrl: string;
}

export function Header({ name, githubUrl }: HeaderProps) {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/" className={styles.logo} aria-label={`${name}, home`}>
        msgn
      </a>
      <nav aria-label="Main" className={styles.nav}>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#experience" className={styles.wideOnly}>
          Experience
        </a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={styles.actions}>
        <a href={githubUrl} className={`${styles.github} ${styles.wideOnly}`} rel="me noopener" target="_blank">
          <GitHubIcon />
          GitHub
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
