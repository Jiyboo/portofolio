import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import cvFile from "../assets/cv.pdf";
import cvImage from "../assets/cv.png";
import CVCode from "./CVCode";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl overflow-y-auto"
      >
        <p className={styles.sectionSubText}>Hubungi Saya</p>
        <h3 className={styles.sectionHeadText}>Resume</h3>
        {}
        <div className="block sm:hidden mt-2 w-full">
          <img
            src={cvImage}
            alt="CV Afsal Maulana"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="hidden sm:block mt-2 w-full h-[400px] overflow-y-auto border border-gray-700 rounded-lg bg-white p-4">
          <CVCode />
        </div>

        <a
          href={cvFile}
          download="Afsal_Maulana_CV.pdf"
          className="mt-4 inline-block bg-gradient-to-r from-green-500 to-emerald-600 py-2 px-6 rounded-lg text-white font-semibold shadow-md hover:opacity-90 transition duration-200"
        >
          📄 Unduh CV
        </a>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
