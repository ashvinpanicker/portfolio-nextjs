import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { TEMPLATES, indiaDestinations, indiaMore, worldDestinations, worldWishlist, travelStats, type Destination } from "@/content/life";

export const metadata: Metadata = {
  title: "Travel picks",
  description:
    "Food, stays, treks and hidden spots from my travel sheets: Goa, Kolkata, Meghalaya, Sikkim, Wayanad, Sri Lanka, Thailand, Vietnam and more.",
  alternates: { canonical: "/travel" },
};

function Card({ d }: { d: Destination }) {
  return (
    <article className="h-full rounded-2xl border border-line bg-ink-2 p-5">
      <header className="flex items-baseline justify-between gap-2">
        <h3 className="font-display text-3xl">{d.name}</h3>
        <span className="eyebrow">{d.region}</span>
      </header>
      <ul className="mt-4 space-y-2 text-sm">
        {d.picks.map((p) => (
          <li key={p.name}>
            <span className="font-medium text-sand">{p.name}</span>
            {p.note && <span className="text-sand/60"> · {p.note}</span>}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li key={i} className="rounded-full border border-line px-3 py-1 text-sm text-sand/70">{i}</li>
      ))}
    </ul>
  );
}

function Region({ title, list, moreLabel, more }: { title: string; list: Destination[]; moreLabel: string; more: string[] }) {
  return (
    <section className="border-t border-line py-16">
      <div className="container-x">
        <h2 className="mb-8 font-display text-5xl">{title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.05}>
              <Card d={d} />
            </Reveal>
          ))}
        </div>
        <p className="eyebrow mt-10 mb-3">{moreLabel}</p>
        <Chips items={more} />
      </div>
    </section>
  );
}

export default function TravelPage() {
  return (
    <>
      <PageHeader eyebrow="Travel" title={<>Travel picks worth <em className="text-kite">stealing.</em></>}>
        <p>
          From the sheets I keep for every trip: {travelStats.india} Indian destinations and {travelStats.countries} countries. Places only, plus
          my own one-liners.
        </p>
        {TEMPLATES.travel && (
          <a href={TEMPLATES.travel} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-kite px-5 py-2.5 font-medium text-ink">
            Copy my sheet template →
          </a>
        )}
      </PageHeader>
      <Region title="India" list={indiaDestinations} moreLabel="Also on the sheet" more={indiaMore} />
      <Region title="World" list={worldDestinations} moreLabel="Wishlist" more={worldWishlist} />
      <p className="container-x pb-24 text-sand/70">
        Going somewhere I&apos;ve been? <Link href="/#contact" className="link">Ask me</Link>.
      </p>
    </>
  );
}
