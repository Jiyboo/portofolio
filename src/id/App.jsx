import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NavbarID from "./id/Navbar";
import HeroID from "./id/Hero";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Resume = lazy(() => import("./components/Resume"));
const Footer = lazy(() => import("./components/Footer"));

const AboutID = lazy(() => import("./id/About"));
const ExperienceID = lazy(() => import("./id/Experience"));
const TechID = lazy(() => import("./id/Tech"));
const WorksID = lazy(() => import("./id/Works"));
const ResumeID = lazy(() => import("./id/Resume"));
const FooterID = lazy(() => import("./id/Footer"));

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const EnglishLayout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <section id="hero"><Hero /></section>
      </div>
      <Suspense fallback={<div className="h-[40vh]" />}>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="tech"><Tech /></section>
        <section id="works"><Works /></section>
      </Suspense>
      <section id="resume" className="relative z-0" ref={ref}>
        <Suspense fallback={<div className="h-[40vh]" />}>
          <Resume />
          {inView && <StarsCanvas />}
          <Footer />
        </Suspense>
      </section>
    </div>
  );
};

const IndonesiaLayout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavbarID />
        <section id="hero"><HeroID /></section>
      </div>
      <Suspense fallback={<div className="h-[40vh]" />}>
        <section id="about"><AboutID /></section>
        <section id="experience"><ExperienceID /></section>
        <section id="tech"><TechID /></section>
        <section id="works"><WorksID /></section>
      </Suspense>
      <section id="resume" className="relative z-0" ref={ref}>
        <Suspense fallback={<div className="h-[40vh]" />}>
          <ResumeID />
          {inView && <StarsCanvas />}
          <FooterID />
        </Suspense>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnglishLayout />} />
        <Route path="/id" element={<IndonesiaLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;