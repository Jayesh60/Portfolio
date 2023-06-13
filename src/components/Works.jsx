import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github, docker } from "../assets";
import { projects } from "../constants";
import { sectionWrapper } from "../sectionWrapper/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";


const ProjectCard = ({index,description, name, image, source_code_link ,hostlink, tags})=>{
  return(
    
    <motion.div variants={fadeIn("up", "spring", index *0.5, 0.75 )}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450,
        }}
        className="bg-tertiary h-full w-full p-5 rounded-2xl sm:w-[360px]"
      >
        <div className="relative w-full h-[200px]" >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-fill rounded-2xl"
          />
        </div>
        <div className=" inset-0 flex justify-start m-3 card-img_hover" >
          <div  className="black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
            <Link to={source_code_link} target="_blank" className="m-0">
              <img
              src={github}
              className="h-[100%] w-[100%] object-contain"
              />
            </Link>
          </div>
          <div  className="black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
            <Link to={hostlink} target="_blank" className="m-0">
              <img
              src={docker}
              className="h-[100%] w-[100%] object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[18px] cursor-pointer" >{name}</h3>
          
          <p className="mt-2 text-secondary text-[12px]">{description}</p>
        </div>

        <div className="mt-4  flex flex-wrap gap-2  ">
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
        <p className={`${styles.sectionSubText} text-[#D9E8F7]`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>Projects</h2>
      </motion.div>
      <div>
        <motion.p className="text-[14px] text-primary">
          Following projects showcases my skills and experience throught
          real-world examples of my projects. Each project is briefly described
          with links to its github. It reflects my ability to solve complex
          problems, work with different technologies and manage project
          effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap mt-20 gap-5 ">
        {projects.map((project, index)=>(
          <ProjectCard key={index} index={index} {...project}/>
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Works, "works");
