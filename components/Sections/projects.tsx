import React, { useEffect, useRef, useState } from "react";
import styles from "./projects.module.scss";
import interiorDesign from "@/public/interior-design.jpg";
import translator from "@/public/translator-portfolio.png";
import quizGame from "@/public/quiz-game.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({ subsets: ["latin"] });
interface ProjectInterface {
  id: number;
  title: string;
  img: any;
  desc: string;
  url: string;
  github: string;
}
const projects = [
  {
    id: 1,
    title: "Interior Design",
    img: interiorDesign,
    desc: "A sleek website showcasing the portfolio of an innovative interior design company. Created with Next.js, Framer Motion, Tailwind CSS, and powered by Vercel",
    url: "https://interior-design-gray.vercel.app/",
    github: "https://github.com/Aidan-Miranda/interior-design",
  },
  {
    id: 2,
    title: "Translator",
    img: translator,
    desc: "A website that translates text from one language to another. Built with Next.js, Tailwind CSS, and Microsoft Translator Text API",
    url: "https://translator-pi-lilac.vercel.app/",
    github: "https://github.com/Aidan-Miranda/translator",
  },
  {
    id: 3,
    title: "Quiz Game",
    img: quizGame,
    desc: "Embark on an exciting quiz adventure with the freedom to choose topics that pique your interest. Developed using Next.js, Tailwind CSS, and deployed on Vercel",
    url: "https://quiz-game-neon-six.vercel.app/",
    github: "https://github.com/Aidan-Miranda/quiz-website",
  },
];

const Single: React.FC<{ item: ProjectInterface; isSmOrMdScreen: any }> = ({
  item,
  isSmOrMdScreen,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 200]);

  return (
    <section className="lg:h-screen w-screen flex flex-col items-center">
      <div className={`${styles.container}`}>
        <div className={`${styles.wrapper} flex flex-col lg:flex-row py-4`}>
          <div
            className={`${styles.imageContainer} rounded-lg overflow-hidden `}
            ref={ref}
          >
            <img src={item.img.src} alt="project image" />
          </div>
          {isSmOrMdScreen ? (
            <div
              className={`${styles.textContainer} px-24 text-center flex flex-col items-center`}
            >
              <h2 className={`${roboto.className} text-3xl lg:text-6xl`}>
                {item.title}
              </h2>
              <p>{item.desc}</p>
              <div className="flex flex-col gap-4">
                <a
                  className={`${roboto.className} border border-zinc-100 text-zinc-100 py-3 rounded-full w-[200px] text-center cursor-pointer`}
                  href={item.url}
                  target="_blank"
                >
                  Check the Demo!
                </a>
                <a
                  className={`${roboto.className} border border-zinc-100 text-zinc-100 py-3 rounded-full w-[200px] text-center cursor-pointer`}
                  href={item.github}
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          ) : (
            <motion.div style={{ y }} className={`${styles.textContainer}`}>
              <h2 className={`${roboto.className} text-3xl lg:text-6xl`}>
                {item.title}
              </h2>
              <p className="text-2xl pb-2">{item.desc}</p>
              <div className="flex gap-4">
                <motion.a
                  className={`${roboto.className} border border-zinc-100 text-zinc-100 py-3 rounded-full w-[200px] text-center cursor-pointer`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.url}
                  target="_blank"
                >
                  Check the Demo!
                </motion.a>
                <motion.a
                  className={`${roboto.className} border border-zinc-100 text-zinc-100 py-3 rounded-full w-[200px] text-center cursor-pointer`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.github}
                  target="_blank"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Projects: React.FC<{ isSmOrMdScreen: any }> = ({ isSmOrMdScreen }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // when scrollYProgress finishes, hide the h1
  const opacity = useTransform(scrollYProgress, [0.0002, 0], [1, 0]);

  return (
    <div ref={ref} className="text-zinc-100">
      <div className={`${styles.progress}`}>
        <motion.h1
          style={{ opacity }}
          className={`${roboto.className} font-bold text-4xl lg:text-5xl xl:text-7xl text-neutral-50 text-center`}
        >
          Featured Projects
        </motion.h1>
        <motion.div
          style={{ scaleX }}
          className={`${styles.progressBar}`}
        ></motion.div>
      </div>
      {projects.map((item) => (
        <Single key={item.id} item={item} isSmOrMdScreen={isSmOrMdScreen} />
      ))}
    </div>
  );
};

export default Projects;