"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServiceProps } from "@/lib/types";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceProps) {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      className="group relative bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl hover:dark:bg-white/10 transition-all duration-300 flex flex-col text-left overflow-hidden"
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500 -z-10" />

      {/* Icon Container */}
      <div className="mb-6 w-14 h-14 rounded-xl bg-gray-50 dark:bg-white/10 flex items-center justify-center border border-black/5 dark:border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
        <Icon className="text-2xl text-gray-700 dark:text-white/80" />
      </div>
      
      {/* Text Content */}
      <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white/90 leading-tight">
        {title}
      </h3>
      <p className="leading-relaxed text-sm text-gray-600 dark:text-white/60">
        {description}
      </p>
    </motion.div>
  );
}