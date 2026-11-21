import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import LiveWind from "@/components/live-wind";
import Fretboard from "@/components/fretboard";
import { travelStats } from "@/content/life";

export const metadata: Metadata = {
  title: "Life",
  description: "Kitesurfing, guitar, travel sheets and the daily log: what Ashvin Panicker does when he's not building software.",
  alternates: { canonical: "/life" },
};

function Block({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-sand/80">{children}</div>
      </div>
    </section>
  );
}

export default function LifePage() {
  return (
    <>
      <PageHeader eyebrow="Life" title={<>Wind, strings and <em className="text-kite">spreadsheets.</em></>}>
        The good stuff that happens away from the keyboard, and some tools I built because of it.
      </PageHeader>

      <Block id="kite" eyebrow="Kitesurfing" title={<>I go where the wind is.</>}>
        <p>
          My home spot is <a className="link" href="https://aquaoutback.com" target="_blank" rel="noopener noreferrer">Aqua Outback</a> on the
          Thoothukudi coast. I ride and train there, and I built their website too. The kite on the homepage flies on the live wind from that
          beach.
        </p>
        <LiveWind />
        <p>
          Next up: a kite-control simulator with an instrumented bar, built with two pro riders, so beginners can learn on no-wind days.
        </p>
      </Block>

      <Block id="guitar" eyebrow="Guitar" title={<>Pick a chord. Strum.</>}>
        <p>
          I used to teach beginners at Furtados, starting with songs they loved rather than scales. Here&apos;s a fretboard to play with. My
          recordings are on <a className="link" href="https://soundcloud.com/ashvin-panicker/sets" target="_blank" rel="noopener noreferrer">SoundCloud</a>.
        </p>
        <Fretboard />
      </Block>

      <Block id="travel" eyebrow="Travel" title={<>A sheet for every trip.</>}>
        <p>
          Every place gets a row: what it is, where it is, a one-line note, and whether I&apos;ve actually been. {travelStats.india} Indian
          destinations and {travelStats.countries} countries so far.
        </p>
        <Link href="/travel" className="inline-flex rounded-full bg-sand px-5 py-2.5 font-medium text-ink transition hover:bg-kite">
          Browse my picks →
        </Link>
        <p>
          For group trips I built <a className="link" href="https://gotripsplit.app" target="_blank" rel="noopener noreferrer">TripSplit</a>, a
          free, open-source Splitwise alternative that works offline.
        </p>
      </Block>

      <Block id="log" eyebrow="Productivity" title={<>One spreadsheet, every day.</>}>
        <p>No app, no streaks. A few tasks a day, a status each, and a journal row. Simple enough that I actually keep using it.</p>
        <Link href="/log" className="inline-flex rounded-full bg-sand px-5 py-2.5 font-medium text-ink transition hover:bg-kite">
          See the system →
        </Link>
      </Block>
    </>
  );
}
