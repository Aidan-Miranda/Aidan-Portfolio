"use client";

import React from "react";
import { motion } from "framer-motion";
import MarqueeBanner from "@/components/marquee";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="flex flex-col items-center gap-5 font-poppins justify-center">
      <motion.div
        className=" text-5xl font-semibold tracking-tight leading-6"
        style={{ transformOrigin: "0% 0%" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 100,
          delay: 0.4,
        }}
      >
        Hello, World!👋
      </motion.div>
      <motion.h1
        className=" text-8xl font-bold blue_gradient tracking-tighter leading-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I am Aidan Miranda
      </motion.h1>
      <MarqueeBanner />
    </section>
  );
}
