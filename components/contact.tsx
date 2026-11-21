"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import clsx from "clsx";

const TOPICS = ["New project", "Collab", "Travel tips", "Just saying hi"] as const;

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.8);
  const [isPending, setIsPending] = useState(false);
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("New project");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    if (!senderEmail || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsPending(true);
    console.log("Sending email...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ senderEmail, message, topic }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        toast.error(responseData.message || "Failed to send email.");
      } else {
        toast.success("Email sent successfully!");
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
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
      <SectionHeading kicker="Say hello">Let&apos;s talk</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Pick a topic and drop a note. I’ll get back to you soon.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {TOPICS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTopic(t)}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-sm transition",
              t === topic
                ? "border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900"
                : "border-black/10 hover:border-black/30 dark:border-white/15 dark:hover:border-white/40"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <form
        className="mt-6 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={isPending} />
      </form>
    </motion.section>
  );
}
