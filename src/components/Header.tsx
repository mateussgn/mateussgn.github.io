import styles from "./Header.module.css";

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/" className={styles.brand}>
        <span className={styles.logo} aria-hidden="true">
          msgn
        </span>
        <span className={styles.name}>{name}</span>
      </a>
      <nav aria-label="Main" className={styles.nav}>
        <a href="#work">Projects</a>
        <a href="#career">Career</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
