"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {

    const [move, setMove] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setMove(!move);
      }, 3000);
      return () => clearInterval(interval);
    }, [move]);

  return (
    <header className={"z-50 relative"}>
      <motion.div
        className={`flex fixed top-0 left-1/2 h-28 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
           shadow-black/[0.09] backdrop-blur-[0.4rem] sm:top-6 sm:h-16 sm:w-[36rem] sm:rounded-full`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-8 sm:h-[initial] sm:py-0">
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem]
         text-gray-600 font-semibold sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                className=" flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.a
        href="#contact"
        className="invisible xl:visible bg-gray-900 fixed left-3/4 top-6 h-16 text-gray-50 px-8 w-22 flex items-center shadow-lg
           shadow-black/[0.09] rounded-full"
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: move ? [-3, 3, -3, 3, -3, 0] : 0,
        }}
        whileHover={{ scale: 1.1 }}
      >
        Hire me!
      </motion.a>
    </header>
  );
}
