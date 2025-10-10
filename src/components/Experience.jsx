import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, isOpen, onToggle }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isOpen
          ? "linear-gradient(135deg, rgba(37,99,235,0.25), rgba(147,51,234,0.25))"
          : "rgba(20,20,35,0.6)",
        backdropFilter: "blur(6px)",
        color: "#fff",
        borderRadius: "16px",
        border: isOpen
          ? "1px solid rgba(37,99,235,0.6)"
          : "1px solid rgba(255,255,255,0.05)",
        boxShadow: isOpen
          ? "0 0 25px rgba(37,99,235,0.5), inset 0 0 20px rgba(147,51,234,0.3)"
          : "0 0 10px rgba(0,0,0,0.4)",
        padding: "0px",
        transition: "all 0.4s ease",
      }}
      contentArrowStyle={{ borderRight: "7px solid #2563EB" }}
      date={isOpen ? experience.date : ""}
      iconStyle={{
        background: isOpen
          ? "radial-gradient(circle, #2563EB 0%, #9333EA 100%)"
          : experience.iconBg || "rgba(30,30,50,0.9)",
        boxShadow: isOpen
          ? "0 0 20px rgba(37,99,235,0.6)"
          : "0 0 10px rgba(147,51,234,0.3)",
        cursor: "pointer",
        transition: "transform 0.4s ease, box-shadow 0.3s ease",
      }}
      icon={
        <motion.div
          className="flex justify-center items-center w-full h-full"
          onClick={onToggle}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(147,51,234,0.6)" }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      }
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0, y: 30 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="p-5 relative"
          >
            <div>
              <h3 className="text-white text-[24px] font-bold drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                {experience.title}
              </h3>
              <p
                className="text-gray-300 text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {experience.company_name}
              </p>
            </div>

            <motion.ul
              className="mt-5 list-disc ml-5 space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              {experience.points.map((point, index) => (
                <motion.li
                  key={`experience-point-${index}`}
                  className="text-blue-100 text-[14px] pl-1 tracking-wider"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [openCards, setOpenCards] = useState([]);

  const handleToggle = (index) => {
    setOpenCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I’ve Achieved So Far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Career Highlights
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(37,99,235,0.6)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isOpen={openCards.includes(index)}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "works");
