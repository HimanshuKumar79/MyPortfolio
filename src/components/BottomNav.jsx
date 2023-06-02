import React, { useState } from "react";
import Logo from "../images/h.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiHomeAlt } from "react-icons/bi";
import { IoPersonOutline, IoImagesOutline, IoClose } from "react-icons/io5";
import { RxReader } from "react-icons/rx";
import { SlGraduation } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";

const BottomNav = ({
  scrollHandler,
  homepage,
  projects,
  skills,
  contactme,
  aboutme,
  qualifications,
}) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-[100vw] bg-[white] md:hidden  fixed left-0 bottom-0 z-20">
      <ul className="flex justify-between items-center max-w-full py-5 px-4">
        <li
          className="flex items-center text-[0.89rem] cursor-pointer ml-6"
          onClick={() => scrollHandler(homepage)}
        >
          <img src={Logo} alt="Logo" className="w-6 " />
          imanshu Kumar
        </li>
        <li
          className="text-[26px] cursor-pointer"
          onClick={() => setMenu(true)}
        >
          <HiOutlineMenuAlt3 />
        </li>
      </ul>
      {menu && (
        <div
          className={`w-[100vw] h-[250px] bg-[white] absolute bottom-0 bottomanimationUp
           flex flex-col items-end justify-evenly `}
        >
          <ul className="grid grid-cols-3 grid-rows-2 mt-6 gap-y-9 w-full mx-auto">
            <li
              className="flex flex-col justify-center items-center"
              onClick={() => scrollHandler(homepage)}
            >
              <BiHomeAlt className="text-[20px] cursor-pointer" />
              <p className="cursor-pointer">Home</p>
            </li>
            <li
              className="flex flex-col justify-center items-center"
              onClick={() => scrollHandler(aboutme)}
            >
              <IoPersonOutline className="text-[20px] cursor-pointer" />
              <p className="cursor-pointer">About</p>
            </li>
            <li
              className="flex flex-col justify-center items-center"
              onClick={() => scrollHandler(skills)}
            >
              <RxReader className="text-[20px] cursor-pointer" />
              <p className="cursor-pointer">Skills</p>
            </li>
            <li
              className="flex flex-col justify-center items-center"
              onClick={() => scrollHandler(qualifications)}
            >
              <SlGraduation className="text-[20px] cursor-pointer" />
              <p className="cursor-pointer">Education</p>
            </li>
            <li
              className="flex flex-col justify-center items-center"
              onClick={() => scrollHandler(projects)}
            >
              <IoImagesOutline className="text-[20px] cursor-pointer" />
              <p className="cursor-pointer">Projects</p>
            </li>
            <li
              className="flex flex-col justify-center items-center"
              onClick={() => scrollHandler(contactme)}
            >
              <MdMailOutline className="text-[20px] cursor-pointer" />
              <p className="cursor-pointer">ContactMe</p>
            </li>
          </ul>
          <div
            className="text-[29px] font-bold text-[#7171e8] mr-4"
            onClick={() => setMenu(false)}
          >
            <IoClose />
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
