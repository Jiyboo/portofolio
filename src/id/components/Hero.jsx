import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Afsal Maulana", "a Web Developer", "a UI/UX Enthusiast", "Quality Assurance"],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden hero">
      {}
      <motion.svg
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hero-wave absolute -left-[10%] -top-[5%] w-[135%] h-[135%] opacity-95 pointer-events-none mix-blend-screen animate-float-slow"
        viewBox="0 0 1800 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gradBlue" x1="0" x2="1">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        <g
          fill="none"
          stroke="url(#gradBlue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M-200 560 C200 320 440 520 800 520 C1160 520 1400 320 1800 480" strokeOpacity="0.95" />
          <path d="M-200 590 C200 350 440 550 800 550 C1160 550 1400 350 1800 510" strokeOpacity="0.85" />
          <path d="M-200 620 C200 380 440 580 800 580 C1160 580 1400 380 1800 540" strokeOpacity="0.75" />
          <path d="M-200 650 C200 410 440 610 800 610 C1160 610 1400 410 1800 570" strokeOpacity="0.65" />
          <path d="M-200 680 C200 440 440 640 800 640 C1160 640 1400 440 1800 600" strokeOpacity="0.55" />
          <path d="M-200 710 C200 470 440 670 800 670 C1160 670 1400 470 1800 630" strokeOpacity="0.45" />
        </g>
      </motion.svg>

      {}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Dot & Line */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#2563EB]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-28 md:mt-5 lg:mt-5"
        >
          <h1 className={`${styles.heroHeadText} text-white text-4xl md:text-5xl`}>
  Hallo, Saya <span className="text-[#2563EB]" ref={typedEl}></span>
</h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  Sebagai seorang Web Developer dengan latar belakang pendidikan Sistem Informasi, <br />
  saya berfokus pada pengembangan solusi web yang inovatif, modern, dan profesional.
</p>


        </motion.div>
      </div>

      <ComputersCanvas />

      {}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
