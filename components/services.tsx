"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { servicesData } from "@/lib/data";
import ServiceCard from "./service-card";
import { useSectionInView } from "@/lib/hooks";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  const { ref } = useSectionInView("Services", 0.8);

  return (
    <section ref={ref} id="services" className="scroll-mt-28 mb-28">
      <SectionHeading>Services</SectionHeading>
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard {...service} />
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
