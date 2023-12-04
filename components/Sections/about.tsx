"use client";

import React from "react";
import { Roboto_Slab } from "next/font/google";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiPython,
} from "react-icons/si";
import styles from "./about.module.scss";
import bg1 from "@/public/bg-1.jpg";
import bg2 from "@/public/bg-2.jpg";
import bg3 from "@/public/bg-3.jpg";
import bg4 from "@/public/bg-4.jpg";
import bg5 from "@/public/bg-5.jpg";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function About() {
  const bentoboxStyles = "row-span-1 rounded-2xl p-10 bg-zinc-100 z-20";

  const TechStack = [
    SiNextdotjs,
    SiReact,
    SiJavascript,
    SiTailwindcss,
    SiNodedotjs,
    SiSass,
    SiRedux,
    SiTypescript,
    SiPython,
    SiMongodb,
  ];

  return (
    <section className="h-full w-full text-center lg:text-left p-4 lg:p-0 flex flex-col lg:grid lg:grid-cols-3 gap-8 auto-rows-fr overflow-clip">
      {/* Intro */}
      <div
        className={`${bentoboxStyles} col-span-2 row-span-2 flex lg:items-end flex-col lg:flex-row justify-center gap-4`}
        style={{
          backgroundImage: `url(${bg3.src})`,
          backgroundSize: "cover",
        }}
      >
        <h2 className={`text-2xl lg:text-5xl font-bold ${roboto.className}`}>
          I&#39;m Aidan, a software developer based in Spain.
        </h2>
        <div className={`text-lg xl:text-xl lg:max-w-[50%]`}>
          <p>
            With a solid foundation in both front-end and back-end technologies,
            I&#39;ve honed my skills working with tools like{" "}
            <span className="font-bold">React</span> and{" "}
            <span className="font-bold">Node.js</span>. I thrive on the
            challenge of transforming ideas into functional, user-friendly
            applications that not only meet but also{" "}
            <span className="italic">exceed expectations</span>.
          </p>
          <p>
            If you have any questions, feel free to{" "}
            <a href="#contact" className="font-bold underline">
              contact me
            </a>
            .
          </p>
        </div>
      </div>

      {/* Experience */}
      <div
        className={`${bentoboxStyles} -mb-32 flex flex-col gap-4 `}
        style={{
          backgroundImage: `url(${bg1.src})`,
        }}
      >
        <h2 className={`text-2xl xl:text-3xl font-bold ${roboto.className}`}>
          Experience
        </h2>
        <p className="text-lg xl:text-2xl">
          Front-end developer at NTT Data, working with React, Next.js, Node.js,
          and MongoDB.
        </p>
      </div>

      {/* Skills */}
      <div
        className={`${bentoboxStyles} mt-32  row-span-2 flex flex-col align-middle justify-center gap-4`}
        style={{
          backgroundImage: `url(${bg2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h2
            className={`text-xl xl:text-3xl font-bold ${roboto.className} border-b-black border-b-2`}
          >
            Tech Stack
          </h2>
          <div className="grid grid-cols-5 text-2xl xl:text-4xl items-center justify-center gap-2 py-4">
            {TechStack.map((Icon, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 220 }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2
            className={`text-xl xl:text-3xl font-bold ${roboto.className} border-b-black border-b-2 mb-2`}
          >
            Languages
          </h2>
          <p className="text-lg xl:text-xl font-bold tracking-wide">
            English - C2
          </p>
          <p className="text-lg xl:text-xl font-bold tracking-wide">
            Spanish - Native
          </p>
        </div>
      </div>

      {/* Education */}
      <div
        className={`${bentoboxStyles} flex flex-col justify-center gap-4`}
        style={{
          backgroundImage: `url(${bg5.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <h2 className={`text-2xl xl:text-3xl font-bold ${roboto.className}`}>
          Education
        </h2>
        <p className="text-lg xl:text-2xl">
          Higher Technician in Development of Web Applications (Los Enlaces)
        </p>
      </div>

      {/* Contact */}
      <div
        className={`${bentoboxStyles} auto-rows-fr grid grid-cols-4 justify-center gap-4`}
        style={{ backgroundImage: `url(${bg4.src})` }}
      >
        <motion.div
          className="flex items-center text-left text-zinc-950 justify-center col-span-3 w-10/12 h-full"
          whileHover={{ scaleY: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#contact"
            className={`${styles.cta} w-full h-full flex items-center`}
          >
            <span>Contact me!</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </motion.div>
        <motion.a
          href="https://www.linkedin.com/in/aidan-miranda-blasco/"
          target="_blank"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 220 }}
          className="flex items-center justify-center text-4xl"
        >
          <BsLinkedin />
        </motion.a>
        <motion.div
          className="flex items-center text-zinc-950 justify-center col-span-3 w-10/12 h-full"
          whileHover={{ scaleY: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/CurriculumAidanEngSpa.pdf"
            download
            className={`${styles.cta} w-full h-full text-left flex items-center`}
          >
            <span>Download CV</span>
            <HiDownload />
          </a>
        </motion.div>
        <motion.a
          href="https://github.com/Aidan-Miranda"
          target="_blank"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 220 }}
          className="flex items-center justify-center text-4xl"
        >
          <BsGithub />
        </motion.a>
      </div>
    </section>
  );
}
