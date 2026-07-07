import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    gsap.set(dotRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(ringRef.current, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#915eff] rounded-full pointer-events-none z-[10000] shadow-[0_0_8px_rgba(145,94,255,0.8)]"
      ></div>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#915eff]/60 bg-[#915eff]/5 rounded-full pointer-events-none z-[9999]"
      ></div>
    </>
  );
};

export default CustomCursor;