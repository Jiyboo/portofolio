import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { github, link } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ project, position }) => {
  const baseStyle =
    "bg-tertiary p-5 rounded-2xl w-[280px] sm:w-[320px] mx-[-40px]"; // jarak rapat

  let xPos = 0;
  let scale = 0.85;
  let opacity = 0.4;
  let zIndex = 5;

if (position === "left") {
  xPos = -200;
  opacity = 0.7;
  scale = 0.9;
} else if (position === "center") {
  xPos = 0;
  scale = 1.05;
  opacity = 1;
  zIndex = 20;
} else if (position === "right") {
  xPos = 200;
  opacity = 0.7;
  scale = 0.9;
}
  return (
    <Tilt options={{ max: 25, scale: 1, speed: 400 }}>
      <motion.div
        key={project.name}
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ x: xPos, scale, opacity, zIndex }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`${baseStyle}`}
        style={{ zIndex }}
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={
                  project.source_code_link.includes("github.com") ? github : link
                }
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[18px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>
          <div className="mt-4 flex flex-wrap gap-2">
    {project.tags.map((tag, index) => (
      <p
        key={`${project.name}-${tag.name}-${index}`}
        className={`text-[14px] ${tag.color}`}
      >
        #{tag.name}
      </p>
    ))}

</div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(100);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setProgress(100); 
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setProgress(100); 
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p <= 0) {
          nextSlide();
          return 100;
        }
        return p - 2; 
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  return (
    <>
     <div>
  <p className={styles.sectionSubText}>Portofolio</p>
  <h2 className={styles.sectionHeadText}>Proyek</h2>
</div>
<div className="w-full flex">
  <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
    Saya telah mengembangkan berbagai proyek selama masa studi dan magang, 
    mulai dari aplikasi manajemen mahasiswa hingga sistem manajemen gudang. 
    Proyek-proyek ini memberikan saya kesempatan untuk memperkuat keahlian teknis, 
    mengasah kemampuan pemecahan masalah, serta memperoleh pengalaman langsung 
    dalam membangun solusi perangkat lunak yang aplikatif di dunia nyata.
  </p>
</div>


      <div className="w-full flex justify-center items-center mt-10 relative">
        {}
        <button
          onClick={prevSlide}
          className="absolute left-0 text-3xl px-4 py-2 text-blue-400 hover:text-blue-600 z-30"
        >
          ❮
        </button>

        {}
        <div className="flex items-center justify-center overflow-hidden w-full 0 relative">
          <AnimatePresence mode="popLayout">
            <ProjectCard
              key={projects[prevIndex].name}
              project={projects[prevIndex]}
              position="left"
            />
            <ProjectCard
              key={projects[currentIndex].name}
              project={projects[currentIndex]}
              position="center"
            />
            <ProjectCard
              key={projects[nextIndex].name}
              project={projects[nextIndex]}
              position="right"
            />
          </AnimatePresence>
        </div>

        {}
        <button
          onClick={nextSlide}
          className="absolute right-0 text-3xl px-4 py-2 text-blue-400 hover:text-blue-600 z-30"
        >
          ❯
        </button>
      </div>

      {}
      <div className="w-full flex justify-center mt-6">
        <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-400 transition-all duration-100 linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
