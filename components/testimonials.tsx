"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { testimonialsData } from "@/lib/data";

export default function Testimonials() {
  const { ref } = useSectionInView("Testimonials", 0.8);

  return (
    <motion.section
      id="testimonials"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Testimonials</SectionHeading>

      <div className="mt-8 mb-6 flex flex-col gap-4 text-left">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl borderBlack relative">
            <svg className="absolute top-4 left-4 w-6 h-6 text-gray-300 dark:text-white/10 -z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-700 dark:text-white/80 italic text-sm mb-4 relative z-10 pl-6">"{testimonial.quote}"</p>
            <div className="pl-6">
              <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{testimonial.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
