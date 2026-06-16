import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { About, Resume, Experience, Hero, Navbar, Tech, Works } from "../components";
import Footer from "../components/Footer";
import {
  About as AboutID,
  Resume as ResumeID,
  Experience as ExperienceID,
  Hero as HeroID,
  Navbar as NavbarID,
  Tech as TechID,
  Works as WorksID,
  Footer as FooterID,
} from "./index";

const StarsCanvas = lazy(() => import("../components/canvas/Stars"));

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
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="tech"><Tech /></section>
      <section id="works"><Works /></section>
      <section id="resume" className="relative z-0" ref={ref}>
        <Resume />
        <Suspense fallback={null}>
          {inView && <StarsCanvas />}
        </Suspense>
        <Footer />
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
      <section id="about"><AboutID /></section>
      <section id="experience"><ExperienceID /></section>
      <section id="tech"><TechID /></section>
      <section id="works"><WorksID /></section>
      <section id="resume" className="relative z-0" ref={ref}>
        <ResumeID />
        <Suspense fallback={null}>
          {inView && <StarsCanvas />}
        </Suspense>
        <FooterID />
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