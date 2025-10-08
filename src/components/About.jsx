import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon, description }) => {
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.8 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    },
    index * 0.2
  );

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div
        ref={cardRef}
        className="w-full h-[280px] perspective"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* FRONT */}
          <div className="absolute w-full h-full backface-hidden green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-full">
              <img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                {title}
              </h3>
            </div>
          </div>

          {/* BACK */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] py-5 px-6 flex justify-center items-center h-full">
              <p className="text-white text-center text-[14px] leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        ref={paragraphRef}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a versatile and experienced software developer with strong
        expertise in JavaScript, as well as proficiency in various frameworks,
        networking, and software testing. Beyond IT, I also possess hands-on
        skills in practical trades such as SMAW and GTAW welding, demonstrating
        adaptability and a broad technical skill set. I am a quick learner,
        highly collaborative, and committed to delivering efficient, scalable,
        and user-friendly solutions that address real-world challenges. I thrive
        on turning ideas into practical, impactful results.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
