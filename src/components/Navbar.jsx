import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close, logo2 } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 sticky top-0 z-20 bg-[#D9E8F7] `}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo2} alt="logo" className=" h-10 object-contain" />
          <p className="text-[#2364D2]  text-[1.5rem] font-extrabold cursor-pointer">
            Jayesh Wadhe
          </p>
        </Link>
        <ul className="list-non hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#00ABE4]" : "text-primary"
              } hover:text-[#2364D2] text-[18px ] font-semibold cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {/* <a href={`${link.id}`}>{link.title}</a> */}
              <Link to={`${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1  justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-slate-700 bg-opacity-90 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10
           rounded`}
          >
            <ul className="list-non flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#00ABE4]" : "text-[#D9E8F7]"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link to={`${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
