"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import PartitionChart from "./skills-icicle";
import skillsJson from "@/lib/skills.json";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading><div className="mt-[-20px]">My skills</div></SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 mb-8 text-sm font-medium text-gray-800 dark:text-gray-200">
        {["ReactJS", "TypeScript", "HTML5", "CSS3", "jQuery", "Node.js", "MySQL", "WordPress", "Webflow", "Wix", "Figma", "UI/UX", "SEO", "Git"].map((skill, index) => (
          <li key={index} className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-full px-4 py-2 shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white/80 hover:scale-105 transition-transform">
            {skill}
          </li>
        ))}
      </ul>
      <PartitionChart data={skillsJson} />
      {/* <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul> */}
    </section>
  );
}
