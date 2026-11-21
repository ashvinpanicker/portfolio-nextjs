import Link from "next/link";
import WindHero from "@/components/wind-hero";
import Section from "@/components/section";
import Reveal from "@/components/reveal";
import WorkCard from "@/components/work-card";
import AskAI from "@/components/ask-ai";
import ContactForm from "@/components/contact-form";
import { site } from "@/content/site";
import { work, services, process, testimonials } from "@/content/work";

const proof = ["Acquired by Lightspark", "Berkeley SkyDeck", "BuildIt Riga", "OakNorth Bank", "SuperProcure", "8+ years shipping", "Clients in India & Europe"];

export default function Home() {
  const featured = work.filter((w) => w.featured);

  return (
    <>
      <WindHero>
        <div className="max-w-3xl">
          {site.available && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sea/40 bg-sea/10 px-3 py-1 text-xs font-medium text-sea">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sea opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sea" />
              </span>
              Taking on projects for 2027
            </p>
          )}
          <h1 className="font-display text-[3.4rem] leading-[0.95] tracking-tight sm:text-8xl">
            I build software
            <br />
            that <em className="text-kite">ships.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-sand/75">
            I&apos;m Ashvin, a full-stack web and app developer in Bengaluru. I co-founded a Bitcoin startup that Lightspark later
            acquired. Now I take founders and businesses from idea to production, with AI in the loop.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#contact" className="rounded-full bg-kite px-6 py-3 font-medium text-ink transition hover:bg-sand">
              Start a project
            </Link>
            <Link href="#ask" className="rounded-full border border-sand/30 px-6 py-3 font-medium backdrop-blur transition hover:border-sand">
              Ask my AI
            </Link>
          </div>
        </div>
      </WindHero>

      <div className="overflow-hidden border-y border-line py-4" aria-label="Highlights">
        <ul className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-mute">
          {[...proof, ...proof].map((p, i) => (
            <li key={i} aria-hidden={i >= proof.length}>
              {p} <span className="ml-10 text-kite">✦</span>
            </li>
          ))}
        </ul>
      </div>

      <Section id="work" eyebrow="Selected work" title={<>Things I&apos;ve built and shipped.</>}>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 2) * 0.08}>
              <WorkCard item={w} priority={i < 2} />
            </Reveal>
          ))}
        </div>
        <Link href="/work" className="link mt-10 inline-block">
          All work and side projects →
        </Link>
      </Section>

      <Section eyebrow="Services" title={<>Launch it. Build it. <em className="text-kite">Run it.</em></>} className="border-t border-line">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className="rounded-2xl border border-line p-6">
              <h3 className="font-display text-4xl">{s.name}</h3>
              <p className="mt-2 text-sand/75">{s.line}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-mute">
                {s.items.map((it) => (
                  <li key={it}>— {it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([step, line], i) => (
            <li key={step}>
              <p className="font-mono text-xs text-kite">0{i + 1}</p>
              <p className="mt-2 text-lg font-semibold">{step}</p>
              <p className="mt-1 text-sand/70">{line}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Kind words" className="border-t border-line">
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure>
                <blockquote className="font-display text-2xl leading-snug text-sand/90">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-mute">
                  {t.name} · {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="ask" eyebrow="Ask my AI" title={<>Questions? My AI has read everything.</>} className="border-t border-line">
        <div className="max-w-3xl">
          <AskAI />
        </div>
      </Section>

      <Section eyebrow="Off the clock" title={<>Wind, strings and spreadsheets.</>} className="border-t border-line">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["/life#kite", "🪁", "Kitesurfing", "The kite up top is real-time wind at my home spot."],
            ["/travel", "🌍", "Travel picks", "Curated from the sheets I keep for every trip."],
            ["/life#guitar", "🎸", "Guitar", "Play the fretboard. I used to teach."],
          ].map(([href, emoji, title, line]) => (
            <Link key={href} href={href} className="group rounded-2xl border border-line p-6 transition hover:-translate-y-1 hover:border-kite/50">
              <p className="text-3xl">{emoji}</p>
              <p className="mt-4 text-xl font-semibold">{title}</p>
              <p className="mt-1 text-sand/70">{line}</p>
              <p className="mt-4 text-sm text-mute transition group-hover:text-kite">Explore →</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title={<>Got something to build? <em className="text-kite">Let&apos;s talk.</em></>} className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4 text-sand/75">
            <p>Tell me what you&apos;re building and where you&apos;re stuck. I&apos;ll come back with honest thoughts, even if I&apos;m not the right fit.</p>
            <p>
              Prefer email? <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="text-mute">{site.location} · {site.timezone} · Working with clients worldwide</p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
