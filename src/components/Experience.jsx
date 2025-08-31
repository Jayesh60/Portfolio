import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { sectionWrapper } from "../sectionWrapper/sectionWrapper";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#00ABE4" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        experience.icon ? (
          <div className="flex justify-center items-center w-full h-full ">
            <img
              src={experience.icon}
              className="w-[60px] h-[60px] object-contain rounded-full sm:rounded-full"
            />
          </div>
        ) : (
          <>
            <div className="bg-transparent"></div>
          </>
        )
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <Link
          target="_blank"
          to={experience.company_website}
          className="text-[16px] font-semibold"
        >
          {experience.company_name}
        </Link>
      </div>
      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point, index) => (
          <li key={`points-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#D9E8F7]`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>EXPERIENCE</h2>
      </motion.div>

      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default sectionWrapper(Experience, "work");
