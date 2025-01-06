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
        I've been passionate about tech since childhood, starting from hacking
        TV cables to tinkering with Arduinos and flashing custom ROMs. After
        earning my Computer Science degree in 2016, I began my career at a data
        analytics startup, where I discovered a love for frontend development
        and creatively visualizing data. I migrated the company’s legacy tool to
        a responsive PWA using React and d3JS.
      </p>
      <p className="mb-3">
        In 2018, I co-founded a Bitcoin startup, initially building a hardware
        wallet and later pivoting to a cross-platform mobile app using React
        Native and NodeJS. After being backed by top accelerators like YC and Berkeley Skydeck,
        we successfully launching a Bitcoin Lightning-powered debit card in Europe.
        Towards the end of 2020, I transitioned to SuperProcure as a Senior Software Engineer,
        where I led the creation of custom analytics dashboards and managed a small team, 
        while driving tech upgrades and streamlining processes.
      </p>
      <p className="mb-3">
        In 2023, I ventured into e-commerce and freelance app development.
        I'm a currently a Software Consultant, focusing on helping my clients
        with their online presence. I'm passionate about emerging technologies and am always eager to learn and innovate.
        When I'm not behind a screen, I like to travel, play the guitar and Kitesurf.
      </p>
    </motion.section>
  );
}
