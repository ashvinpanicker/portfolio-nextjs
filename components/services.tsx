"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { servicesData } from "@/lib/data";
import ServiceCard from "./service-card";
import { useSectionInView } from "@/lib/hooks";

export default function Services() {
  const { ref } = useSectionInView("Services", 0.5);

  return (
    <section ref={ref} id="services" className="scroll-mt-28 mb-28">
      <SectionHeading>Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard {...service} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
