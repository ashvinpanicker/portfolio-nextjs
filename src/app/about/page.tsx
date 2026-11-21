import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import { experience, skills } from "@/content/work";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Ashvin Panicker: full-stack developer, ex-founder (Lastbit → Striga, acquired by Lightspark), kitesurfer and guitarist based in Bengaluru.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={<>Started with a floppy disk. <em className="text-kite">Still tinkering.</em></>} />
      <div className="container-x grid gap-16 pb-28 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-5 text-lg leading-relaxed text-sand/80">
          <p>
            My techie parents had me installing Dangerous Dave from a floppy disk at four. That turned into RC toys, Arduinos, custom ROMs and,
            eventually, a Computer Science degree from VIT.
          </p>
          <p>
            My first job was at a data analytics startup, where I fell for frontend and data viz and rebuilt the flagship tool as a React + D3
            PWA. In 2018 I{" "}
            <a className="link" href="https://medium.com/lastbitpay/building-a-crypto-startup-heres-how-two-indians-are-doing-it-415c8a200f86" target="_blank" rel="noopener noreferrer">
              co-founded Lastbit
            </a>
            : a hardware wallet, then a React Native app and a Lightning-powered debit card in Europe. Berkeley SkyDeck and BuildIt Riga taught me
            how businesses get built. The company later became Striga and was{" "}
            <a className="link" href="https://www.lightspark.com/news/lightspark/lightspark-acquires-striga" target="_blank" rel="noopener noreferrer">
              acquired by Lightspark in 2025
            </a>
            .
          </p>
          <p>
            After that came analytics dashboards at SuperProcure and lending tools at OakNorth. Since 2023 I&apos;ve run my own practice, helping
            founders and businesses get online and ship products, now with AI doing the boring parts so I can focus on the hard ones.
          </p>
          <p>
            Off the clock I kitesurf, play guitar, travel with a spreadsheet for everything, and keep a daily activity log.
          </p>

          <h2 className="eyebrow pt-10">Experience</h2>
          <ol className="divide-y divide-line border-y border-line text-base">
            {experience.map((e) => (
              <li key={e.org} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
                <span className="font-mono text-sm text-mute">{e.years}</span>
                <div>
                  <p className="font-semibold text-sand">
                    {e.role} · <span className="text-sand/70">{e.org}</span>
                  </p>
                  <p className="text-sand/65">{e.line}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="eyebrow pt-10">Toolbox</h2>
          <dl className="grid gap-4 text-base sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="font-semibold text-sand">{s.group}</dt>
                <dd className="text-sand/65">{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <Image src={site.portrait} alt="Portrait of Ashvin Panicker" width={640} height={640} className="aspect-square w-full rounded-3xl object-cover" priority />
          <a href={site.cv} className="block rounded-full border border-line px-5 py-3 text-center transition hover:border-kite">
            Download CV
          </a>
        </aside>
      </div>
    </>
  );
}
