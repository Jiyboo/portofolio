import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";

const Tech = () => {
  const marqueeRef = useRef(null);
  const half = Math.ceil(technologies.length / 2);
  const topRow = technologies.slice(0, half);
  const bottomRow = technologies.slice(half);

  useEffect(() => {
    const trackLeft = marqueeRef.current.querySelector(".marquee-track-left");
    const trackRight = marqueeRef.current.querySelector(".marquee-track-right");
    
    const trackWidthLeft = trackLeft.scrollWidth / 2;
    const trackWidthRight = trackRight.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(trackLeft, {
        x: -trackWidthLeft,       
        duration: 20,
        repeat: -1,
        ease: "linear",
        modifiers: {
          x: (x) => {
            const mod = gsap.utils.wrap(-trackWidthLeft, 0);
            return mod(parseFloat(x)) + "px";
          }
        }
      });
      gsap.set(trackRight, { x: -trackWidthRight });
      gsap.to(trackRight, {
        x: 0,       
        duration: 20,
        repeat: -1,
        ease: "linear",
        modifiers: {
          x: (x) => {
            const mod = gsap.utils.wrap(-trackWidthRight, 0);
            return mod(parseFloat(x)) + "px";
          }
        }
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const renderBox = (technology, isClone = false) => (
    <div 
      className="min-w-[130px] h-12 px-4 mx-3 flex-shrink-0 bg-[#151030] border border-white/10 rounded-xl flex items-center justify-center shadow-lg hover:border-[#915eff] hover:bg-[#1d1836] transition-all duration-300 cursor-pointer group" 
      key={technology.name + (isClone ? "-clone" : "")}
    >
      {/* Teks dengan warna sekunder yang berubah jadi putih saat di-hover */}
      <p className="text-[#aaa6c3] group-hover:text-white text-sm font-semibold tracking-wider text-center transition-colors">
        {technology.name}
      </p>
    </div>
  );

  return (
    <section className="overflow-hidden py-6 flex flex-col gap-4" ref={marqueeRef}>
      
      <div className="flex marquee-track-left w-max">
        {topRow.map((technology) => renderBox(technology))}
        {topRow.map((technology) => renderBox(technology, true))}
      </div>

      <div className="flex marquee-track-right w-max">
        {bottomRow.map((technology) => renderBox(technology))}
        {bottomRow.map((technology) => renderBox(technology, true))}
      </div>

    </section>
  );
};

export default SectionWrapper(Tech, "");