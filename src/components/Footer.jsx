import React from "react";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Footer = ({ scrollHandler, homepage, projects, skills }) => {
  return (
    <div className="w-[100vw] h-[16rem] bg-[#6e57e0] mt-9 text-white  pt-9">
      <div className="flex justify-between w-full sm:px-[6rem] px-[2rem]">
        <div className="flex flex-col gap-2 ">
          <p className="font-semibold text-[20px] md:text-[26px] leading-9 overflow-hidden">
            Himanshu <br /> Kumar
          </p>
          <p>Full Stack Developer</p>
          <ul className="flex gap-6 text-[16px] h-fit sm:hidden">
            <li className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200">
              <a
                href="https://www.linkedin.com/in/himanshu-kumar-a50862192/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
            <li className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200">
              <a
                href="https://github.com/HimanshuKumar79"
                target="_blank"
                rel="noreferrer"
              >
                <ImGithub />
              </a>
            </li>
            <li className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200">
              <a
                href="https://www.instagram.com/kumar_himanshu_7090/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex gap-6 h-fit md:flex-row flex-col">
          <li
            onClick={() => scrollHandler(homepage)}
            className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200"
          >
            Home
          </li>
          <li
            onClick={() => scrollHandler(skills)}
            className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200"
          >
            Skills
          </li>
          <li
            onClick={() => scrollHandler(projects)}
            className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200"
          >
            Projects
          </li>
        </ul>
        <ul className="hidden gap-6 text-[22px] h-fit md:flex">
          <li className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200">
            <a
              href="https://www.linkedin.com/in/himanshu-kumar-a50862192/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200">
            <a
              href="https://github.com/HimanshuKumar79"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub />
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#c39f9f] transition-colors duration-200">
            <a
              href="https://www.instagram.com/kumar_himanshu_7090/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
      <p className="mx-auto pl-[53px] w-full text-center text-[13px] text-[#d0c9c9] mt-9">
        © Himanshu Kumar. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
