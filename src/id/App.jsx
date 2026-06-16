import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Navbar = lazy(() => import("./components").then((m) => ({ default: m.Navbar })));
const Hero = lazy(() => import("./components").then((m) => ({ default: m.Hero })));
const About = lazy(() => import("./components").then((m) => ({ default: m.About })));
const Experience = lazy(() => import("./components").then((m) => ({ default: m.Experience })));
const Tech = lazy(() => import("./components").then((m) => ({ default: m.Tech })));
const Works = lazy(() => import("./components").then((m) => ({ default: m.Works })));
const Resume = lazy(() => import("./components").then((m) => ({ default: m.Resume })));
const Footer = lazy(() => import("./components/Footer"));

const NavbarID = lazy(() => import("./id").then((m) => ({ default: m.Navbar })));
const HeroID = lazy(() => import("./id").then((m) => ({ default: m.Hero })));
const AboutID = lazy(() => import("./id").then((m) => ({ default: m.About })));
const ExperienceID = lazy(() => import("./id").then((m) => ({ default: m.Experience })));
const TechID = lazy(() => import("./id").then((m) => ({ default: m.Tech })));
const WorksID = lazy(() => import("./id").then((m) => ({ default: m.Works })));
const ResumeID = lazy(() => import("./id").then((m) => ({ default: m.Resume })));
const FooterID = lazy(() => import("./id").then((m) => ({ default: m.Footer })));

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
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="tech"><Tech /></section>
      <section id="works"><Works /></section>
      <section id="resume" className="relative z-0" ref={ref}>
        <Resume />
        {inView && <StarsCanvas />}
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
        {inView && <StarsCanvas />}
        <FooterID />
      </section>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="w-full h-screen bg-primary" />}>
        <Routes>
          <Route path="/" element={<EnglishLayout />} />
          <Route path="/id" element={<IndonesiaLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;