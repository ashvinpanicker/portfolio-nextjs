"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] lg:top-6 lg:h-[3.25rem] lg:w-[50rem] lg:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-0 left-1/2 h-[3.5rem] w-full -translate-x-1/2 lg:top-[1.7rem] lg:h-[initial] lg:w-[50rem] lg:py-0 justify-between lg:justify-center px-6 lg:px-0 items-center">
        
        {/* Mobile Logo / Text */}
        <div className="lg:hidden flex items-center h-full text-gray-900 dark:text-gray-100 font-bold text-lg tracking-tight">
          Ashvin.
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden flex items-center justify-center h-full text-gray-600 dark:text-gray-300 p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex w-[initial] flex-nowrap items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-[3.5rem] left-0 w-full bg-white dark:bg-gray-950 shadow-xl border-b border-black/10 dark:border-white/10 lg:hidden flex flex-col"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col items-center py-4 gap-2 text-lg font-medium text-gray-600 dark:text-gray-300">
              {links.map((link) => (
                <li key={link.hash} className="w-full">
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition",
                      {
                        "text-gray-950 dark:text-gray-200 bg-gray-50 dark:bg-gray-800/50": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
