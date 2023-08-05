import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function MarqueeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Marquee
        speed={100}
        style={{ height: "180px", gap: "0", width: "100vw" }}
        className=" gap-5"
      >
        <div className="text-8xl font-bold font-poppins tracking-tighter">
          Full Stack Developer.
        </div>
      </Marquee>
    </motion.div>
  );
}
