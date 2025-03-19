"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My fascination with technology started early, shaped by my <a className=" text-blue-400" href="https://citizenmatters.in/3945-should-city-women-care-about-womens-day/">techie parents</a>.
        At just four years old, I was figuring out how to install Dangerous Dave from a floppy disk—my first real problem-solving challenge.
        What started with RC toys and DIY electronics gradually escalated into hacking cables, building quirky gadgets, tinkering with Arduinos, and flashing custom ROMs.
      </p>
      <p className="mb-3">
        After earning my Computer Science degree from <a className=" text-blue-400" href="https://vit.ac.in/">VIT University</a> in 2016, I began my career at a data analytics startup, where I fell in love with frontend development and data visualization.
        There, I led the migration of a legacy tool into a responsive Progressive Web App (PWA) using React and D3.js, significantly improving its usability and performance.
      </p>
      <p className="mb-3">
        In 2018, I <a href="https://medium.com/lastbitpay/building-a-crypto-startup-heres-how-two-indians-are-doing-it-415c8a200f86" className=" text-blue-400">co-founded a Bitcoin startup</a>, leading the development of a hardware wallet and later pivoting to a cross-platform mobile app built with React Native and a backend service built on top of Bitcoind and C-Lightning using Node.js.
        Our work gained traction, earning recognition from accelerators like Y Combinator (YC) and Berkeley SkyDeck, and eventually led to the <a href="https://bitcoinmagazine.com/technical/lastbit-launches-two-lightning-payment-apps-to-boost-adoption-in-europe" className=" text-blue-400">launch of a Bitcoin Lightning-powered debit card in Europe.</a>
      </p>
      <p className="mb-3">
        By 2020, I joined <a href="https://www.superprocure.com/" className="text-blue-400">SuperProcure</a> as a Senior Software Engineer, leading the development of custom analytics dashboards, streamlining user interfaces and optimizing internal processes.
        My expertise in data visualization and frontend engineering played a key role in enhancing product usability and business insights and my experience wearing multiple hats at my previous startup helped me contribute to team growth and product strategy.
      </p>
      <p className="mb-3">
        Since 2023, I’ve been freelancing and consulting under my firm, Tailgrab Digital, helping businesses elevate their web and mobile presence so they can focus on what they do best.

      </p>
      <p className="mb-3">
        Beyond work, I’m an adventure enthusiast who enjoys traveling, kitesurfing, and <a href="https://soundcloud.com/ashvin-panicker/sets" className=" text-blue-400">playing the guitar.</a> I believe in the power of freedom, flexibility, and creativity, both in life and in code.
        If you’re building something exciting and need someone who can own the frontend from idea to execution—<a className="text-blue-400" href="#contact">let’s talk.</a>
      </p>
    </motion.section>
  );
}
