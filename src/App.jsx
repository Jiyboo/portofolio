import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  About, Resume, Experience, Hero, Navbar, Tech, Works, CVCode 
} from "./components";
import Footer from "./components/Footer";

// import versi bahasa Indonesia
import {
  About as AboutID,
  Resume as ResumeID,
  Experience as ExperienceID,
  Hero as HeroID,
  Navbar as NavbarID,
  Tech as TechID,
  Works as WorksID,
  CVCode as CVCodeID,
  Footer as FooterID,
} from "./id";

import StarsCanvas from "./components/canvas/Stars"; // kalau canvas sama bisa share

const EnglishLayout = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <section id="hero"><Hero /></section>
    </div>
    <section id="about"><About /></section>
    <section id="experience"><Experience /></section>
    <section id="tech"><Tech /></section>
    <section id="works"><Works /></section>
    <section id="resume" className="relative z-0">
      <Resume />
      <StarsCanvas />
      <Footer />
    </section>
  </div>
);

const IndonesiaLayout = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <NavbarID />
      <section id="hero"><HeroID /></section>
    </div>
    <section id="about"><AboutID /></section>
    <section id="experience"><ExperienceID /></section>
    <section id="tech"><TechID /></section>
    <section id="works"><WorksID /></section>
    <section id="resume" className="relative z-0">
      <ResumeID />
      <StarsCanvas />
      <FooterID />
    </section>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default English */}
        <Route path="/" element={<EnglishLayout />} />

        {/* Indonesian */}
        <Route path="/id" element={<IndonesiaLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
