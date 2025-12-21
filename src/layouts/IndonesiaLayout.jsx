import {
  About as AboutID,
  Resume as ResumeID,
  Experience as ExperienceID,
  Hero as HeroID,
  Navbar as NavbarID,
  Tech as TechID,
  Works as WorksID,
} from "../id";

import Footer from "../components/Footer";
import StarsCanvas from "../components/canvas/Stars";

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
      <Footer />
    </section>
  </div>
);

export default IndonesiaLayout;
