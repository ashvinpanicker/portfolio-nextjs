import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import WorkCard from "@/components/work-card";
import Reveal from "@/components/reveal";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Client sites, products and side projects by Ashvin Panicker: fintech, hospitality, e-commerce, B2B portals and AI experiments.",
  alternates: { canonical: "/work" },
};

const groups = ["Venture", "Client", "Side project"] as const;
const labels = { Venture: "Ventures", Client: "Client work", "Side project": "Side projects" };

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow="Work" title={<>Products, client sites and <em className="text-kite">experiments.</em></>}>
        Eight years of shipping, from a Bitcoin debit card in Europe to hotel booking sites in the Himalayas.
      </PageHeader>
      <div className="container-x space-y-20 pb-28">
        {groups.map((g) => (
          <section key={g} aria-labelledby={`g-${g}`}>
            <h2 id={`g-${g}`} className="eyebrow mb-6">{labels[g]}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {work.filter((w) => w.kind === g).map((w, i) => (
                <Reveal key={w.slug} delay={(i % 3) * 0.06}>
                  <WorkCard item={w} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
