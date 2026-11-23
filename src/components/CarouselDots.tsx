"use client";

import { useEffect, useState } from "react";
import styles from "./CarouselDots.module.css";

interface CarouselDotsProps {
  /** id of the scrolling element whose children are the slides. */
  trackId: string;
  count: number;
  className?: string;
}

/**
 * Dots under a swipeable carousel: they follow the card in view, and tapping
 * one scrolls to that card. Swiping itself is plain CSS scroll snapping.
 */
export function CarouselDots({ trackId, count, className = "" }: CarouselDotsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = document.getElementById(trackId);
    if (!track) return;
    const slides = Array.from(track.children);

    const observer = new IntersectionObserver(
      (entries) => {
        // The most visible slide wins.
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(slides.indexOf(best.target));
      },
      { root: track, threshold: [0.6, 0.9] },
    );
    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [trackId]);

  function goTo(index: number) {
    const track = document.getElementById(trackId);
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }

  return (
    <div className={`${styles.dots} ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          className={styles.dot}
          aria-label={`Show project ${index + 1} of ${count}`}
          aria-current={index === active ? "true" : undefined}
          onClick={() => goTo(index)}
        >
          <span className={index === active ? `${styles.mark} ${styles.active}` : styles.mark} />
        </button>
      ))}
    </div>
  );
}
