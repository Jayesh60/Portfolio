import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { projects } from "../constants";
import { sectionWrapper } from "../sectionWrapper/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({index,description, name, image, source_code_link , tags})=>{
  return(
    
    <motion.div variants={fadeIn("up", "spring", index *0.5, 0.75 )}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450,
        }}
        className="bg-tertiary h-[550px] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[240px]" 
        // onClick={window.open(source_code_link)}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-fill rounded-2xl"
          />
        </div>
        {/* <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
          <div  className="black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              src={github}
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div> */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3><span></span>
          <p className="mt-2 text-secondary text-[16px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[16px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div>
        <motion.p className="text-[17px] text-secondary">
          Following projects showcases my skills and experience throught
          real-world examples of my projects. Each project is briefly described
          with links to its github. It reflects my ability to solve complex
          problems, work with different technologies and manage project
          effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap mt-20 gap-7 ">
        {projects.map((project, index)=>(
          <ProjectCard key={index} index={index} {...project}/>
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Works, "works");
