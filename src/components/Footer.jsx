import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { styles } from "../style";

const Footer = () => {
  return (
    <div>
      <div
        className={`${styles.padding} xs:h-full md:h-full bg-tertiary text-white`}
      >
        <div className="">
          <h1 className={`${styles.sectionHeadText}`}>
            Create Moments not things
          </h1>
          <p className={`${styles.sectionSubText}`}>
            Transforming Ideas into Seamless Digital Experiences
          </p>
        </div>
        <div className="md:flex items-center justify-center">
          <div className="flex flex-[0.5] items-center justify-center">
            <Link
              to="/"
              className="flex flex-col items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt="logo" className=" xs:h-20 md:h-40 object-contain" />
              <p className="text-white xs:text-[20px] md:text-[40px] font-bold cursor-pointer">
                Jayesh Wadhe
              </p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center flex-[0.5]">
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
                className=" py-4 px-8 bg-secondary rounded-sm"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#28244f] h-[10vh]">
        <p>Made with {'\u2764'} by Me</p>
      </div>
    </div>
  );
};

export default Footer;
