import { motion } from "framer-motion";
import React from "react";
import { styles } from "../style";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import About from "./About";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 xs:top-[120px] md:top-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#915eff]">Jayesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Software Developer Enthusiast
            {/* | <br className='sm:block hidden'/> data science | Mern Stack */}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xl:hidden bottom-40 w-full flex justify-center items-end">
        <a href="#about">
          <div className="w-[25px] h-[40px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
           <motion.div
            animate={{ y: [0, 12, 0]}}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType:"loop"
            }}
            className="w-1.5 h-1.5 rounded-full bg-secondary  "
           />
          </div>
        </a>
      </div>
    </section>
    <About/>
    </>
    
  );
};

export default Hero;
