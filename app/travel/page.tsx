import Link from "next/link";
import {
  TEMPLATES,
  indiaDestinations,
  indiaMore,
  worldDestinations,
  worldWishlist,
  travelStats,
  type Destination,
} from "@/lib/life";

export const metadata = {
  title: "Travel picks | Ashvin Panicker",
  description:
    "Food, stays, treks and hidden spots from my travel sheets across India and abroad. Goa, Kolkata, Meghalaya, Sikkim, Sri Lanka, Thailand and more.",
  alternates: { canonical: "https://ashvinpanicker.com/travel" },
};

function DestinationCard({ d }: { d: Destination }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">{d.name}</h3>
        <span className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">{d.region}</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {d.picks.map((p) => (
          <li key={p.name} className="leading-snug">
            <span className="font-medium">{p.name}</span>
            {p.note && <span className="text-gray-600 dark:text-white/60"> · {p.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span
          key={i}
          className="rounded-full border border-black/10 px-3 py-1 text-sm text-gray-700 dark:border-white/15 dark:text-white/70"
        >
          {i}
        </span>
      ))}
    </div>
  );
}

export default function TravelPage() {
  return (
    <main className="mx-auto w-full max-w-[60rem] px-4 pb-28">
      <Link href="/#life" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white">
        ← Back
      </Link>
      <header className="mt-6 mb-14">
        <h1 className="font-display text-5xl sm:text-6xl">Travel picks</h1>
        <p className="mt-4 max-w-[38rem] text-lg text-gray-600 dark:text-white/70">
          Every trip gets a sheet: name, type, area, a one-line note, and whether I&apos;ve actually been.
          Here are the bits worth stealing from {travelStats.india} Indian destinations and{" "}
          {travelStats.countries} countries.
        </p>
        {TEMPLATES.travel && (
          <a
            href={TEMPLATES.travel}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-gray-900 px-6 py-3 text-white transition hover:scale-105 dark:bg-white dark:text-gray-900"
          >
            Copy my travel sheet template →
          </a>
        )}
      </header>

      <section className="mb-16">
        <h2 className="font-display mb-6 text-3xl">India</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {indiaDestinations.map((d) => (
            <DestinationCard key={d.name} d={d} />
          ))}
        </div>
        <p className="mt-8 mb-3 text-sm uppercase tracking-wider text-gray-500">Also on the sheet</p>
        <Chips items={indiaMore} />
      </section>

      <section>
        <h2 className="font-display mb-6 text-3xl">World</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {worldDestinations.map((d) => (
            <DestinationCard key={d.name} d={d} />
          ))}
        </div>
        <p className="mt-8 mb-3 text-sm uppercase tracking-wider text-gray-500">Wishlist</p>
        <Chips items={worldWishlist} />
      </section>

      <p className="mt-16 text-gray-600 dark:text-white/70">
        Going somewhere I&apos;ve been?{" "}
        <Link href="/#contact" className="text-link">
          Ask me
        </Link>
        , happy to share more.
      </p>
    </main>
  );
}
