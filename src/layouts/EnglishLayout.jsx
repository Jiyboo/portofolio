import {
  About, Resume, Experience, Hero, Navbar, Tech, Works
} from "../components";
import Footer from "../components/Footer";
import StarsCanvas from "../components/canvas/Stars";

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

export default EnglishLayout;
