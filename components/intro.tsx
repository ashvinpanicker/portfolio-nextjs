"use client";

import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { subtitles, socialLinks } from "@/lib/data";
import toast from "react-hot-toast";

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [mounted, setMounted] = useState(false);

  const shuffledSubtitles = useMemo(() => {
    // Only shuffle if mounted to prevent hydration errors between server and client
    const subs: { text: string; link?: string }[] = [...subtitles];
    return mounted ? shuffleArray(subs) : subs;
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || shuffledSubtitles.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % shuffledSubtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shuffledSubtitles, mounted]);

  const copyToClipboard = async (text: string, name: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Copied ${name} address!`);
    } catch (err) {
      toast.error('Failed to copy');
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/AP2.png"
              alt="Ashvin portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl cursor-default"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            whileHover={{ rotate: [0, 20, -20, 20, -20, 0], transition: { duration: 0.5 } }}
            whileTap={{ rotate: [0, 20, -20, 20, -20, 0], transition: { duration: 0.5 } }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl flex flex-col items-center justify-center min-h-[8rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hello, I'm <span className="font-bold">Ashvin Panicker</span>.</span>
        <div className="mt-2 text-xl sm:text-3xl text-gray-700 dark:text-gray-300 h-10 flex items-center">
          {mounted ? (
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSubtitle}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span>I am </span>
                {shuffledSubtitles[currentSubtitle]?.link ? (
                  <a
                    href={shuffledSubtitles[currentSubtitle].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {shuffledSubtitles[currentSubtitle].text}
                  </a>
                ) : (
                  shuffledSubtitles[currentSubtitle]?.text
                )}
              </motion.span>
            </AnimatePresence>
          ) : (
            <span className="opacity-0">I am loading</span>
          )}
        </div>
        <div className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-[40rem] text-center font-normal leading-relaxed">
          I co-founded a Bitcoin startup that got acquired by Lightspark. Now I help businesses build things that actually ship.
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium mb-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-8 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-lg dark:bg-gray-50 dark:text-gray-950"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let's talk{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >


        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name === "CV" ? undefined : "_blank"}
            rel={link.name === "CV" ? undefined : "noopener noreferrer"}
            download={link.name === "CV" ? true : undefined}
            title={link.name}
            className={`bg-white w-12 h-12 flex items-center justify-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-gray-700 dark:text-white/60 ${link.color} dark:hover:text-white`}
          >
            <Image src={link.icon} alt={link.name} width={20} height={20} className="w-5 h-5 dark:brightness-0 dark:invert" />
          </a>
        ))}
      </motion.div>
    </section>
  );
}

