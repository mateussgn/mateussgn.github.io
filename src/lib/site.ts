/**
 * Everything that differs between staging (GitHub Pages) and production (Hostinger)
 * comes from build-time environment variables, never from code changes.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mateussgn.github.io").replace(/\/$/, "");

/** Only production is indexed by search engines; staging stays out of results. */
export const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

/** Path of the CV inside `public/`. The download links only show once the file exists. */
export const cvPath = "/cv/Mateus-Santana-CV.pdf";

/** Path of the profile photo inside `public/`. Until it exists, the hero shows the msgn logo. */
export const photoPath = "/photo/mateus-santana.jpg";
