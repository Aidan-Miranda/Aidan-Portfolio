"use client";

import React from "react";
import { Josefin_Sans, Playfair_Display, Roboto_Slab } from "next/font/google";
import backgroundImage from "@/public/hero_background.png";
import Link from "next/link";
import { motion } from "framer-motion";

const josefin = Josefin_Sans({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function Intro() {
  return (
    <section className="flex flex-col items-center gap-5 w-full h-[90vh] font-poppins justify-center text-zinc-950 bg-zinc-100">
      <div className="absolute left-[6vw] top-[8vh] font-semibold text-2xl leading-5">
        <p className={`${josefin.className} tracking-tighter`}>Aidan</p>
        <p className={`${josefin.className} ml-4 tracking-tighter`}>Miranda</p>
      </div>
      <Link href={"/#contact"} className="absolute right-[6vw] top-[8vh]">
        <motion.button
          className={`${roboto.className} bg-zinc-100 border border-zinc-950 text-zinc-950 px-7 py-3 flex items-center gap-2 shadow-lg
            shadow-black/[0.09] rounded-full`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact me!
        </motion.button>
      </Link>
      <div
        className="absolute w-7/12 aspect-[16/10] rounded-xl"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="z-10">
        <div className="text-[12vw] font-semibold text-center leading-none translate-y-[-1%]">
          <h2 className={`${playfair.className} tracking-tight`}>
            Transforming
          </h2>
          <h2 className={`${roboto.className} outlined-text text-[14vw]`}>
            ideas
          </h2>
          <h2 className={`${playfair.className} tracking-tight`}>
            Into Reality
          </h2>
        </div>
      </div>
    </section>
  );
}
