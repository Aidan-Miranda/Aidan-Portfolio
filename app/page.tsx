"use client";
import About from "@/components/Sections/about";
import Intro from "@/components/Sections/intro";
import Header from "@/components/Sections/header";
import Card from "@/components/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Projects from "@/components/Sections/projects";
import ContactForm from "@/components/Sections/contact";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isSmOrMdScreen, setIsSmOrMdScreen] = useState(false);

  const handleResize = () => {
    setIsSmOrMdScreen(window.innerWidth < 1024);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmOrMdScreen(window.innerWidth < 1024);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const opacityFirst = useTransform(scrollYProgress, [0.05, 1], [1, 0]);
  const scaleFirst = useTransform(scrollYProgress, [0.05, 1], [1, 0]);

  if (typeof window === "undefined") {
    // Return a loading state or placeholder if window is undefined (during SSR)
    return (
      <div className="flex align-middle items-center justify-center h-screen">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <main className="bg-neutral-950">
      <div ref={containerRef}>
        <motion.div
          style={{
            opacity: opacityFirst,
            position: "sticky",
            top: 0,
            scale: scaleFirst,
          }}
        >
          <Card>
            <Intro />
          </Card>
        </motion.div>
        <motion.div className="z-10">
          {isSmOrMdScreen ? (
            <About />
          ) : (
            <Card>
              <About />
            </Card>
          )}
        </motion.div>
      </div>
      <motion.div>
        <Projects isSmOrMdScreen={isSmOrMdScreen} />
      </motion.div>
      <div className="bg-neutral-950 h-screen p-24">
        <h2
          id="contact"
          className={`${roboto.className} font-bold text-4xl lg:text-5xl xl:text-7xl text-neutral-50 text-center`}
        >
          Contact
        </h2>
        <ContactForm />
      </div>
    </main>
  );
}
