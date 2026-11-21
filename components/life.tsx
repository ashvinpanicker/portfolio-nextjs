"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { travelStats } from "@/lib/life";

type Card = {
  emoji: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
  wide?: boolean;
};

const cards: Card[] = [
  {
    emoji: "🌍",
    title: "Travel sheets",
    body: `I keep a running sheet for every place I go: food, stays, treks, and what I'd skip. ${travelStats.india} Indian destinations and ${travelStats.countries} countries so far. Steal my picks.`,
    cta: "Browse the picks",
    href: "/travel",
    wide: true,
  },
  {
    emoji: "✅",
    title: "Daily activity log",
    body: "A dead-simple sheet I've used since 2023. A few tasks a day, a status each, and a journal row.",
    cta: "See the system",
    href: "/log",
  },
  {
    emoji: "🎸",
    title: "Guitar",
    body: "I used to teach beginners at Furtados. The fretboard up top is for you. My recordings are on SoundCloud.",
    cta: "Listen",
    href: "https://soundcloud.com/ashvin-panicker/sets",
    external: true,
  },
  {
    emoji: "🪁",
    title: "Kitesurfing",
    body: "I ride and train at Aqua Outback in Tamil Nadu. Next up: a kite-control simulator for beginners, built with two pro riders.",
    cta: "IKO profile",
    href: "https://beta.ikointl.com/members/186928",
    external: true,
  },
  {
    emoji: "💸",
    title: "TripSplit",
    body: "Free, open-source Splitwise alternative I built for our group trips. Correct money maths, works offline.",
    cta: "Try it",
    href: "https://gotripsplit.app",
    external: true,
  },
];

export default function Life() {
  const { ref } = useSectionInView("Life", 0.3);

  return (
    <section ref={ref} id="life" className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[56rem]">
      <SectionHeading kicker="Off the clock">Life</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c, i) => {
          const inner = (
            <>
              <div className="text-3xl">{c.emoji}</div>
              <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-white/70 leading-relaxed">{c.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                {c.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </>
          );
          const cls =
            "group block h-full rounded-2xl border border-black/5 bg-white/70 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5";
          return (
            <motion.div
              key={c.title}
              className={c.wide ? "sm:col-span-2" : ""}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {c.external ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link href={c.href} className={cls}>
                  {inner}
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
