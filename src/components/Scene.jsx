import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import Loader from "./Loader";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Tech from "./Tech";
import Works from "./Works";
import Resume from "./Resume";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

const Scene = () => {
  const [ready, setReady] = useState(false);

  return (
    <>
      {/* ===== CANVAS (BLANK SAAT LOADING) ===== */}
      <Canvas>
        <Suspense fallback={<Loader onDone={() => setReady(true)} />}>
          {/* Canvas sengaja kosong */}
        </Suspense>
      </Canvas>

      {/* ===== SEMUA UI BARU MUNCUL SETELAH READY ===== */}
      {ready && (
        <>
          <Navbar />
          <Hero visible={ready} />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Resume />
          <Footer />
          <BottomNav />
        </>
      )}
    </>
  );
};

export default Scene;
