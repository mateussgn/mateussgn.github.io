import styles from "./Avatar.module.css";

interface AvatarProps {
  name: string;
  /** Path under public/. Without it, the msgn logo stands in for the photo. */
  photoSrc?: string;
  /** Sets the size (width, height and, for the fallback, font-size). */
  className?: string;
}

export function Avatar({ name, photoSrc, className = "" }: AvatarProps) {
  if (photoSrc) {
    // eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer
    return <img src={photoSrc} alt={`Photo of ${name}`} className={`${styles.avatar} ${className}`} />;
  }
  return (
    <div className={`${styles.avatar} ${styles.fallback} ${className}`} aria-hidden="true">
      msgn
    </div>
  );
}
