"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

import { Josefin_Sans, Roboto_Slab } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });
const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function Header() {
  const [move, setMove] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMove(!move);
    }, 3000);
    return () => clearInterval(interval);
  }, [move]);

  return (
    <header
      className={
        "z-50 fixed bg-zinc-50 w-full p-2 px-4 flex justify-between items-center"
      }
    >
      <div className="font-semibold text-2xl leading-5">
        <p className={`${josefin.className} tracking-tighter`}>Aidan</p>
        <p className={`${josefin.className} ml-4 tracking-tighter`}>Miranda</p>
      </div>
      {/* buttons for the about, projects, experience and contact, each individually, no map */}
      <div className="flex gap-6 -ml-4">
        {links.map((link) => (
          <Link href={link.hash} key={link.hash}>
            <motion.p
              className={`text-xl font-medium ${roboto.className}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.p>
          </Link>
        ))}
      </div>
      <Link href={"/#contact"}>
        <motion.button
          className={`${roboto.className} bg-gray-50 border border-zinc-950 text-zinc-950 px-7 py-3 flex items-center gap-2 shadow-lg
            shadow-black/[0.09] rounded-full`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact me!
        </motion.button>
      </Link>
    </header>
  );
}
