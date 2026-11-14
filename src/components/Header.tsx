import styles from "./Header.module.css";

interface HeaderProps {
  name: string;
  cvHref?: string;
}

export function Header({ name, cvHref }: HeaderProps) {
  return (
    <header className={`container ${styles.header}`}>
      <a href="#main" className={styles.brand}>
        {name}
      </a>
      <nav aria-label="Main" className={styles.nav}>
        <a href="#work">Work</a>
        <a href="#career">Career</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        {cvHref && (
          <a href={cvHref} className={styles.cv} download>
            Download CV
          </a>
        )}
      </nav>
    </header>
  );
}
