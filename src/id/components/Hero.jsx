import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { styles } from "../styles";

const ComputersCanvas = lazy(() => import("../components/canvas/Computers"));

const Hero = () => {
  const typedEl = useRef(null);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => setIsCanvasLoaded(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const typed = new Typed(typedEl.current, {
        strings: [
          "Afsal Maulana",
          "Pengembang Website",
          "UI/UX Designer",
          "Software Quality Assurance",
        ],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
      });
      return () => typed.destroy();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      if (isMobile) return;
      const moveX = (e.clientX / window.innerWidth - 0.5) * 30;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 30;
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const size = isMobile ? 120 : 80;

    const cols = Math.ceil(width / size);
    const rows = Math.ceil(height / size);
    const grid = [];

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        grid.push({
          x: x * size,
          y: y * size,
          alpha: Math.random() * 0.2,
          targetAlpha: 0,
        });
      }
    }

    const randomizeTargets = () => {
      grid.forEach((cell) => {
        cell.targetAlpha = Math.random() < 0.05 ? 0.8 : 0.05;
      });
    };

    let glitchActive = false;
    let glitchTime = 0;

    const drawGlitch = () => {
      const sliceCount = 4 + Math.floor(Math.random() * 4);
      for (let i = 0; i < sliceCount; i++) {
        const sliceHeight = 20 + Math.random() * 100;
        const y = Math.random() * height;
        const offset = (Math.random() - 0.5) * 60;
        const imgData = ctx.getImageData(0, y, width, sliceHeight);
        ctx.putImageData(imgData, offset, y);
      }
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      grid.forEach((cell) => {
        cell.alpha += (cell.targetAlpha - cell.alpha) * 0.1;
        ctx.fillStyle = `rgba(37,99,235,${cell.alpha})`;
        ctx.fillRect(cell.x, cell.y, size, size);
      });

      if (glitchActive) {
        drawGlitch();
        if (time - glitchTime > 300 + Math.random() * 200) {
          glitchActive = false;
        }
      } else if (Math.random() < 0.003) {
        glitchActive = true;
        glitchTime = time;
      }
    };

    let lastChange = 0;
    let animationFrameId;
    let startTimeoutId;

    const animate = (time) => {
      if (time - lastChange > 300) {
        randomizeTargets();
        lastChange = time;
      }
      draw(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    startTimeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 2000);

    const handleResizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResizeCanvas);

    return () => {
      clearTimeout(startTimeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResizeCanvas);
    };
  }, [isMobile]);

  return (
    <section ref={heroRef} className="relative w-full h-screen mx-auto overflow-hidden hero bg-[#010409]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"></canvas>

      <motion.svg
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hero-wave absolute -left-[10%] -top-[5%] w-[135%] h-[135%] opacity-95 pointer-events-none mix-blend-screen animate-float-slow"
        viewBox="0 0 1800 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradBlue" x1="0" x2="1">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#gradBlue)" strokeWidth="2">
          <path d="M-200 560 C200 320 440 520 800 520 C1160 520 1400 320 1800 480" strokeOpacity="0.95" />
          <path d="M-200 590 C200 350 440 550 800 550 C1160 550 1400 350 1800 510" strokeOpacity="0.85" />
          <path d="M-200 620 C200 380 440 580 800 580 C1160 580 1400 380 1800 540" strokeOpacity="0.75" />
          <path d="M-200 650 C200 410 440 610 800 610 C1160 610 1400 410 1800 570" strokeOpacity="0.65" />
          <path d="M-200 680 C200 440 440 640 800 640 C1160 640 1400 440 1800 600" strokeOpacity="0.55" />
          <path d="M-200 710 C200 470 440 670 800 670 C1160 670 1400 470 1800 630" strokeOpacity="0.45" />
        </g>
      </motion.svg>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#2563EB]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-28 md:mt-5 lg:mt-5 min-h-[150px] z-10">
          <h1 className={`${styles.heroHeadText} text-white text-4xl md:text-5xl`}>
            Hallo, Saya <span className="text-[#2563EB]" ref={typedEl}></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Sebagai seorang Web Developer dengan latar belakang Sistem Informasi, <br />
            saya berfokus pada pembuatan solusi web yang modern dan profesional
          </p>
        </div>
      </div>

      <Suspense fallback={null}>
        {isCanvasLoaded && !isMobile && <ComputersCanvas />}
      </Suspense>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about" aria-label="Scroll to About">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;