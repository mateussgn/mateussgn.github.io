import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import { profile } from "@/content/profile";
import { isProduction, siteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Only the italic cut is used, for the "msgn" logo.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-newsreader",
  display: "swap",
});

const title = `${profile.name}, ${profile.jobTitle}`;
const description =
  "Senior software engineer building backend systems in Java and Spring Boot, and the React screens on top. Open to remote roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@mateussgn",
  },
  // Staging (GitHub Pages) must not compete with the real domain in search results.
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f3f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f1c" },
  ],
  colorScheme: "light dark",
};

/**
 * Applies a theme the visitor picked earlier before the page paints, so it
 * never flashes the wrong colors. Without a stored pick, the CSS follows the
 * device setting.
 */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The theme script may set data-theme before React hydrates.
    <html lang="en" className={`${geist.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
