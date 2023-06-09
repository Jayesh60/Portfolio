import React from "react";
import { Link } from "react-router-dom";
import { logo, github, linkedin, mail, leetcode } from "../assets";
import { styles } from "../style";

const Footer = () => {
  return (
    <div>
      <div
        className={`${styles.padding} xs:h-full md:h-[100vh] bg-tertiary text-white`}
      >
        <div className="flex flex-col text-center justify-center items-center md:mb-14 mb-10 ">
          <h1 className={`${styles.sectionHeadText}`}>
            Create Moments not things
          </h1>
          <p className={`${styles.sectionSubText}`}>
            Transforming Ideas into Seamless Digital Experiences
          </p>
        </div>
        <div className="md:flex items-center justify-center">
          <div className="flex flex-col flex-[0.5] items-center justify-center mb-14">
            <Link
              to="/"
              className=" flex md:flex-col items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="logo"
                className=" h-20 md:h-40 object-contain"
              />
              <p className="text-white xs:text-[30px] md:text-[40px] font-bold cursor-pointer">
                Jayesh Wadhe
              </p>
            </Link>
            <div className="flex items-center gap-3 mt-5 md:mt-10">
              <Link
                to="https://github.com/jayesh60"
                target="_blank"
                className=" flex md:flex-col "
              >
                <img
                  className=" h-[4rem] xs:h-[3.5rem] object-contain"
                  src={github}
                  alt="github"
                />
              </Link>

              <Link
                to="https://www.linkedin.com/in/jayesh60/"
                target="_blank"
                className=" flex md:flex-col items-center gap-2"
              >
                <img
                  className=" h-[4rem] xs:h-[3rem] object-contain"
                  src={linkedin}
                  alt="linkedin"
                />
              </Link>

              <Link
                to="mailto:jwadhe46@gmail.com"
                target="_blank"
                className=" flex md:flex-col items-center gap-2"
              >
                <img
                  className=" h-[4rem] xs:h-[3.5rem] object-contain"
                  src={mail}
                  alt="email"
                />
              </Link>

              <Link
                to="https://leetcode.com/jayesh60/"
                target="_blank"
                className=" flex md:flex-col items-center gap-2"
              >
                <img
                  className=" h-[4rem] xs:h-[3rem] object-contain"
                  src={leetcode}
                  alt="leetode"
                />
              </Link>

            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center flex-[0.5]">
            <h1 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] font-serif">
              Code. Create. Inspire.
            </h1>
            <p className="py-5">
              Together, we can unlock the endless possibilities that lie within
              the world of web development. Contact me today to start a
              conversation and embark on an exciting journey of transformation.
            </p>
            <div className=" py-4 px-8 ">
              <Link
                to="/contact "
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className=" py-4 px-8 bg-secondary rounded-sm text-black"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#28244f] md:h-[10vh] h-[8vh]">
        <p>Made with {"\u2764"} by Me</p>
      </div>
    </div>
  );
};

export default Footer;
