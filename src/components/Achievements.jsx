import React from "react";
import { sectionWrapper } from "../sectionWrapper/sectionWrapper";
import CodeOFiesta from "../assets/c.jpg";
import IITdelhi from "../assets/iitdelhi_2.jpg";


const Achievements = () => {
  return (
    <div className="w-full  ">
      <div className="flex flex-col justify-center items-center ">
        <div className="relative mb-20">
          <img className="h-[100%] lg:h-[90vh] " src={CodeOFiesta} alt="codeofiesta" />
          <div className="absolute inset-0 z-10 bg-gray-50 text-black font-semibold text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-1000">
            🥇Got first prize in Code-O-Fiesta organized by Department of AIDS
            and CSE DS Vidyavardhini's College of Engineering and Technology,
            Vasai, Maharashtra
          </div>
        </div>
        <div className="relative mb-20">
          <img className="h-[100%] lg:h-[90vh]" src={IITdelhi} alt="codeofiesta" />
          <div className="absolute inset-0 z-10 bg-gray-50 text-black font-semibold text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-1000">
            🥇 4th Rank In Appathon at IIT DELHI organized by IIT Tryst in collaboration with Awiros. 
             Computer vision centric appathon where we contributed to awiros by learning and creating computer vision apps. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
