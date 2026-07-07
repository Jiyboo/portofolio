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
    
    // Menghitung lebar setengah track untuk masing-masing baris
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
      className="w-40 h-16 mx-3 flex-shrink-0 bg-gray-200 border border-gray-400 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors cursor-pointer" 
      key={technology.name + (isClone ? "-clone" : "")}
    >
      {/* Teks warna gelap */}
      <p className="text-gray-900 text-lg font-bold tracking-wider text-center">
        {technology.name}
      </p>
    </div>
  );

  return (
    <section className="overflow-hidden py-6 flex flex-col gap-6" ref={marqueeRef}>
      
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