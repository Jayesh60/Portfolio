import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants'
import { sectionWrapper } from '../sectionWrapper/sectionWrapper'
import { textVariant } from '../utils/motion'



const ExperienceCard = ({ experience}) =>{
  return(
    <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color:'#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon= {
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} className='w-[60px] h-[60px] object-contain ' />
      </div>
    }
    > 
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-[16px] font-semibold'>{experience.company_name}</p>
      </div>
      <ul className='mt-5 ml-5 space-y-2 list-disc'>
        {experience.points.map((point, index) => (
          <li key={`points-${index}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
    <motion.div 
    variants={ textVariant()}
    >
      {/* <p className={styles.sectionSubText}>What I have done so far</p> */}
      <h2 className={styles.sectionHeadText}>EXPERIENCE</h2>

    </motion.div>

    <div className="mt-20 flex flex-col ">
      <VerticalTimeline>
        {experiences.map((experience, index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default sectionWrapper(Experience, "work")