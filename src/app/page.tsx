import { existsSync } from "node:fs";
import path from "node:path";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { work } from "@/content/work";
import { cvPath, siteUrl } from "@/lib/site";

// Runs at build time: the CV links appear only once the PDF is in public/.
const hasCv = existsSync(path.join(process.cwd(), "public", cvPath));
const cvHref = hasCv ? cvPath : undefined;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: profile.jobTitle,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.links.linkedin, profile.links.github, profile.links.x],
  knowsAbout: ["Java", "Spring Boot", "React", "TypeScript", "Microservices", "AWS"],
  knowsLanguage: ["en", "pt-BR"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header name={profile.name} cvHref={cvHref} />
      <main id="main">
        <Hero profile={profile} cvHref={cvHref} />
        <Career jobs={experience} />
        <SelectedWork cases={work} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
