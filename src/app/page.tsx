import { existsSync } from "node:fs";
import path from "node:path";
import { ClosingSections } from "@/components/ClosingSections";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { KeyProjects } from "@/components/KeyProjects";
import { TechStack } from "@/components/TechStack";
import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { stack } from "@/content/stack";
import { work } from "@/content/work";
import { cvPath, photoPath, siteUrl } from "@/lib/site";

// Runs at build time: optional files only show up once they're in public/.
const publicFile = (file: string) => (existsSync(path.join(process.cwd(), "public", file)) ? file : undefined);
const cvHref = publicFile(cvPath);
const photoSrc = publicFile(photoPath);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: profile.jobTitle,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  ...(photoSrc && { image: `${siteUrl}${photoSrc}` }),
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
      <Header name={profile.name} githubUrl={profile.links.github} />
      <main id="main">
        <Hero profile={profile} photoSrc={photoSrc} cvHref={cvHref} />
        <TechStack items={stack} />
        <KeyProjects cases={work} />
        <ClosingSections about={about} jobs={experience} profile={profile} cvHref={cvHref} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
