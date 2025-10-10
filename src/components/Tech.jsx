import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";

const Tech = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const track = marqueeRef.current.querySelector(".marquee-track");
    const trackWidth = track.scrollWidth / 2;
    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -trackWidth,       
        duration: 20,
        repeat: -1,
        ease: "linear",
        modifiers: {
          x: (x) => {
            const mod = gsap.utils.wrap(-trackWidth, 0);
            return mod(parseFloat(x)) + "px";
          }
        }
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden" ref={marqueeRef}>
      <div className="flex marquee-track">
        {technologies.map((technology) => (
          <div className="w-28 h-28 flex-shrink-0" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        {technologies.map((technology) => (
          <div className="w-28 h-28 flex-shrink-0" key={technology.name + "-clone"}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
