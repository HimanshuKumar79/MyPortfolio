import React, { useState } from "react";
import Logo from "../images/h.png";

const NavBar = ({
  scrollHandler,
  homepage,
  projects,
  skills,
  contactme,
  aboutme,
  qualifications,
}) => {
  const [shadow, setShadow] = useState(false);
  const shadowHandler = () => {
    if (window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  window.addEventListener("scroll", shadowHandler);
  return (
    <div
      className={`${
        shadow ? "shadow-md transition-shadow duration-200" : ""
      } fixed z-30 top-0 left-0 w-[100vw] backdrop-blur-sm md:block hidden`}
    >
      <ul className="bg-blur-sm my-7 font-medium flex items-center justify-between gap-6 max-w-[1080px] mx-auto">
        <li
          className="flex items-center text-[0.89rem] cursor-pointer ml-6"
          onClick={() => scrollHandler(homepage)}
        >
          <img src={Logo} alt="Logo" className="w-6 " />
          imanshu Kumar
        </li>
        <div className="flex gap-6 mr-6 text-[0.86rem] ">
          <li
            onClick={() => scrollHandler(homepage)}
            className="cursor-pointer hover:text-[#6747c8] transition-font duration-200"
          >
            HomePage
          </li>
          <li
            onClick={() => scrollHandler(aboutme)}
            className="cursor-pointer hover:text-[#6747c8] transition-font duration-200"
          >
            About
          </li>
          <li
            onClick={() => scrollHandler(skills)}
            className="cursor-pointer hover:text-[#6747c8] transition-font duration-200"
          >
            Skills
          </li>
          <li
            onClick={() => scrollHandler(qualifications)}
            className="cursor-pointer hover:text-[#6747c8] transition-font duration-200"
          >
            Qualifications
          </li>
          <li
            onClick={() => scrollHandler(projects)}
            className="cursor-pointer hover:text-[#6747c8] transition-font duration-200"
          >
            Projects
          </li>
          <li
            onClick={() => scrollHandler(contactme)}
            className="cursor-pointer hover:text-[#6747c8] transition-font duration-200"
          >
            ContactMe
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
