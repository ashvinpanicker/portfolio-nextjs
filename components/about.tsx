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
        My passion for technology began in childhood, from hacking TV cables to tinkering with Arduinos and flashing custom ROMs.
        After earning a degree in Computer Science in 2016, I launched my career at a data analytics startup, where I discovered my love for frontend development and data visualization.
        I led the migration of the company’s legacy tool into a responsive Progressive Web App (PWA) using React and d3.js, enhancing its usability and performance.
      </p>
      <p className="mb-3">
        In 2018, I co-founded a Bitcoin startup, where I spearheaded the development of a hardware wallet and later pivoted to creating a cross-platform mobile app with React Native and Node.js.
        Our work earned recognition from accelerators like Y Combinator (YC) and Berkeley SkyDeck, culminating in the launch of a Bitcoin Lightning-powered debit card in Europe.
        In 2020, I joined SuperProcure as a Senior Software Engineer, leading the development of custom analytics dashboards, managing a small engineering team, and implementing tech upgrades to streamline processes.
      </p>
      <p className="mb-3">
        Since 2023, I've ventured into e-commerce and freelance app development. As a Software Consultant, I help businesses enhance their online presence and build user-focused applications.
        I'm passionate about leveraging cutting-edge technologies to create impactful digital solutions.
        When I'm not behind a screen, I like to travel, play the guitar and Kitesurf.
      </p>
    </motion.section>
  );
}
