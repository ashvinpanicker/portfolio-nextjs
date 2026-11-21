import { site } from "@/content/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        image: `${site.url}${site.portrait}`,
        jobTitle: "Full-stack web & app developer",
        address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "VIT University" },
        knowsAbout: ["React", "Next.js", "React Native", "TypeScript", "SEO", "Web performance", "AI integrations", "Fintech"],
        sameAs: site.socials.map((s) => s.url),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: "Ashvin Panicker — web & app development",
        url: site.url,
        provider: { "@id": `${site.url}/#person` },
        areaServed: "Worldwide",
        serviceType: ["Web development", "App development", "SEO", "Website maintenance"],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
