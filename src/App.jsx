import { BrowserRouter } from "react-router-dom";
import { About, Resume, Experience, Hero, Navbar, Tech, Works, StarsCanvas, CVCode } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <section id="hero">
            <Hero />
          </section>
        </div>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Tech */}
        <section id="tech">
          <Tech />
        </section>

        {/* Works / Projects */}
        <section id="works">
          <Works />
        </section>

        {/* Contact */}
        <section id="resume" className="relative z-0">
          <Resume />
          <StarsCanvas />
          <Footer />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
