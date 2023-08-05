"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8">About me:</h2>
      <p className="mb-3">
        Hey there! I&#39;m <span className="font-semibold">Aidan Miranda</span>{" "}
        a passionate junior{" "}
        <span className="font-semibold">full stack developer</span> based in
        Spain.
      </p>
      <p>
        With a solid foundation in both front-end and back-end technologies,
        I&#39;ve honed my skills working with tools like{" "}
        <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">Node.js</span>. I thrive on the
        challenge of transforming ideas into functional, user-friendly
        applications that not only meet but{" "}
        <span className="italic">exceed expectations</span>.
      </p>
      <p className="mb-10">
        If you have any questions, feel free to{" "}
        <span className="font-semibold">contact me.</span>
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-5 px-4 text-lg font-medium">
        <motion.a
          href="#contact"
          className="bg-gray-900 text-gray-50 ml-2 px-7 py-3 flex items-center gap-2 shadow-lg
           shadow-black/[0.09] rounded-full"
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
        >
          Hire me! <BsArrowRight />
        </motion.a>
        <motion.a
          className=" bg-white text-gray-700 px-4 py-3 flex items-center shadow-md
           shadow-black/[0.09]  gap-2 rounded-full cursor-pointer border border-black/10"
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
        >
          Download CV <HiDownload />
        </motion.a>
        <motion.a
          className=" bg-white text-gray-700 px-4 py-3 flex items-center shadow-md
           shadow-black/[0.09]  gap-2 rounded-full cursor-pointer border border-black/10"
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{
            scale: 1.1,
          }}
          href="https://www.linkedin.com/in/aidan-miranda-blasco/"
          target="_blank"
        >
          <BsLinkedin />
        </motion.a>
      </div>
    </motion.section>
  );
}
