import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { styles } from "../style";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <div>
      <div
        className={`${styles.padding} xs:h-full md:h-full bg-tertiary text-white`}
      >
        <div className="flex flex-col text-center justify-center items-center  ">
          <h1 className=" text-[2.2rem] font-thin">
            Create Moments not things
          </h1>
          <p className={`${styles.sectionSubText}  font-light`}>
            Transforming Ideas into Seamless Digital Experiences
          </p>
        </div>

        <div className="md:flex items-center justify-center">
          <div className="flex flex-col flex-[0.2] items-center xs:mt-[2rem] md:mt-0 justify-center xs:pt-0 pt-3 ">
            <Link
              to="/"
              className=" flex md:flex items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="logo"
                className=" h-10 md:h-16 object-contain"
              />
              <p className="text-white xs:text-[2rem] xs:font-thin md:font-bold  md:text-[1.5rem] cursor-pointer">
                Jayesh Wadhe
              </p>
            </Link>
            <div className="flex justify-center text-center items-center gap-3 my-2 md:my-4">
              <Link
                to="https://github.com/jayesh60"
                target="_blank"
                className=" flex md:flex-col "
              >
                <svg
                  className=" h-[1.8rem] xs:h-[1.8rem] object-contain"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <g>
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="akarIconsGithubFill0">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </Link>

              <Link
                to="https://www.linkedin.com/in/jayesh60/"
                target="_blank"
                className=" flex md:flex-col items-center gap-2"
              >
                <svg
                  className=" h-[1.6rem] xs:h-[1.8rem] object-contain"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="currentColor"
                    d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1 1 10.49-10.5a10.5 10.5 0 0 1-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                  />
                </svg>
              </Link>

              <Link
                to="mailto:jwadhe46@gmail.com"
                target="_blank"
                className=" flex md:flex-col items-center gap-2"
              >
                <svg
                  className=" h-[2rem] xs:h-[2.2rem] object-contain"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
                  />
                </svg>
              </Link>

              <Link
                to="https://leetcode.com/jayesh60/"
                target="_blank"
                className=" flex md:flex-col items-center gap-2"
              >
                <svg
                  className=" h-[1.6rem] xs:h-[1.8rem] object-contain"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-[0.4] md:mb-0 mb-5 w-full justify-evenly px-5 xs:py-0 py-7">
            <div className="flex flex-col">
              <Link onClick={scrollToTop} tabIndex={0} to={"/about"}>
                About
              </Link>
              <Link onClick={scrollToTop} to={"/works"}>
                Projects
              </Link>
              <Link onClick={scrollToTop} to={"/experience"}>
                Experience
              </Link>
              <Link onClick={scrollToTop} to={"/achievements"}>
                Achievements
              </Link>
              <Link onClick={scrollToTop} to={"/contact"}>
                Contact
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to={"/"}>Resume</Link>
              <Link
                to={"https://www.linkedin.com/in/jayesh60/"}
                target="_blank"
              >
                Linkedin
              </Link>
              <Link to={"https://github.com/jayesh60"} target="_blank">
                Github
              </Link>
              <Link to={"https://leetcode.com/jayesh60/"} target="_blank">
                Leetcode
              </Link>
              <Link to={"https://www.fiverr.com/jayeshwadhe"} target="_blank">
                Fiverr
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center  flex-[0.4]">
            <h1 className="text-white font-black md:text-[30px] sm:text-[25px] xs:text-[25px] font-serif">
              Code. Create. Inspire.
            </h1>
            <p className="font-thin py-2  text-center ">
              Together, we can unlock the endless possibilities that lie within
              the world of web development. Contact me today to start a
              conversation and embark on an exciting journey of transformation.
            </p>
            <div className="py-2 px-2 ">
              <Link
                to="/contact "
                onClick={scrollToTop}
                className=" py-2 px-4 bg-secondary from-neutral-50 rounded-sm text-black"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-justify bg-[#28244f] md:h-[8.5vh] h-[8.5vh]">
        <span className="hidden sm:flex text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">
          © 2023  —
          <a
            href="https://www.linkedin.com/in/jayesh60"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Jayesh Wadhe
          </a>
        </span>
        <span className="w-full sm:w-44 inline-flex sm:ml-auto sm:mt-0 mt-4 mr-3 items-center justify-center sm:justify-start">Made with {"\u2764"} by Me</span>
        <span className=" hidden sm:inline-flex  sm:ml-auto sm:mt-0 mt-4 mr-3 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>

    </div>
  );
};

export default Footer;
