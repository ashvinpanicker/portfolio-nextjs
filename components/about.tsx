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
        earning my Computer Science degree, I began my career at a data
        analytics startup, where I discovered a love for frontend development
        and creatively visualizing data. I migrated the company’s legacy tool to
        a responsive PWA using ReactJS and d3JS.
      </p>
      <p className="mb-3">
        In 2018, I co-founded a Bitcoin startup, initially building a hardware
        wallet and later pivoting to a cross-platform mobile app using React
        Native and NodeJS. After successfully launching a Bitcoin
        Lightning-powered debit card in Europe, I transitioned to SuperProcure
        as a Senior Software Engineer, where I led the creation of custom
        analytics dashboards and managed a small team, while driving tech
        upgrades and streamlining processes.
      </p>
      <p className="mb-3">
        In 2023, I ventured into e-commerce, freelanced on projects like
        aquaoutback.com, and developed an AI chatbot for customer engagement.
        Currently, I'm a Software Consultant at Tailgrab Digital, focusing on
        React, Node.js, and MySQL. I'm passionate about emerging technologies in
        Fintech, AI, and AR/VR, and always eager to learn and innovate.
      </p>

      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
