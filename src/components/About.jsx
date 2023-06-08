import React from 'react'
import { Tilt } from 'react-tilt'
import { motion, spring } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { sectionWrapper } from '../sectionWrapper/sectionWrapper'


const ServiceCard = ({index , icon , title}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              options={{
                max:45,
                scale:1,
                speed:450
              }} >
                <img src={icon} alt="icon"className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] opacity-1'>

        As an IT engineering student at Vidyavardhini's College of Engineering, Vasai, <p><strong>I am passionate about exploring the realms of web development, data science, and React development.  Through my coursework and practical projects, I have gained a solid understanding of front-end technologies like HTML, CSS, and JavaScript, as well as popular frameworks like ReactJS. </strong></p> Additionally, I have delved into the world of data science, acquiring knowledge in machine learning, data visualization, and data analysis using tools like Python, TensorFlow, and Pandas. Furthermore, I have honed my skills in React development, gaining experience in building modern web applications with reusable UI components and effective state management. With my strong foundation in IT engineering and a keen focus on web development, data science, and React development, I am eager to contribute to the dynamic field of technology and create innovative solutions for real-world challenges. 
        
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard 
            key={service.title}
            index= {index}
            {...service}

          />
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(About, "about")