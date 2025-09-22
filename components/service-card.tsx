"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServiceProps } from "@/lib/types";

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

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
}: ServiceProps & { index: number }) {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden p-5 hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col items-center text-center"
    >
      <div className="mb-4">
        <Icon className="text-5xl text-gray-700 dark:text-white/70" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="leading-relaxed text-gray-700 dark:text-white/70">
        {description}
      </p>
    </motion.div>
  );
}