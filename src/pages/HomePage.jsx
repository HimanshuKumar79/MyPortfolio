import React from "react";
import { SiLinkedin } from "react-icons/si";
import { ImGithub, ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightFilled } from "react-icons/tb";
import OrbitalAnimation from "../components/OrbitalAnimation";
import TypeWriter from "typewriter-effect";

const HomePage = ({ homepage, scrollHandler, contactme }) => {
  return (
    <div
      ref={homepage}
      className="h-[39rem] max-w-[1080px] mx-auto  md:pt-[2rem] pt-[1rem] flex sm:flex-row flex-col items-center justify-evenly  gap-x-3 px-3"
    >
      <div className="flex sm:gap-9 gap-0 items-center">
        <div>
          <ul className="flex-col gap-3 text-[1.2rem] lg:text-[1.5rem] lg:flex hidden">
            <li className="text-blue-700 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/himanshu-kumar-a50862192/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
            <li className=" cursor-pointer">
              <a
                href="https://github.com/HimanshuKumar79"
                target="_blank"
                rel="noreferrer"
              >
                <ImGithub />
              </a>
            </li>
            <li className="text-blue-500 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/himanshu-kumar-a50862192/"
                target="_blank"
                rel="noreferrer"
              >
                <ImTwitter />
              </a>
            </li>
            <li className="text-purple-600 cursor-pointer">
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
        <div className="flex flex-col gap-9 max-w-[24.6rem] items-center sm:items-start sm:text-start text-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-[1.7rem] lg:text-[2rem] font-semibold text-[#242329]">
              Hi, I'm Himanshu <br /> Kumar
            </h1>
            <p className="text-[#757577] text-[1rem] lg:text-[1.3rem] flex gap-2 sm:mx-0 mx-auto">
              I am a
              <span>
                <TypeWriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Web Developer",
                      "Front-end Developer",
                      "Back-end Developer",
                      "Full Stack Developer",
                    ],
                  }}
                />
              </span>
            </p>
            <p className="text-[0.8rem] lg:text-[0.9rem] text-[#9a9a9c] ">
              I'am a software developer and there is my potfolio website. Here
              you'll learn about my journy as a software developer.
            </p>
          </div>
          <div
            onClick={() => scrollHandler(contactme)}
            className="flex items-center gap-2 transition-colors duration-200 cursor-pointer hover:bg-[#8c7be2] bg-[#6E57E0] w-fit text-white font-semibold py-3 px-5 rounded-lg"
          >
            Contact Me <TbArrowBigRightFilled className="move" />
          </div>
        </div>
      </div>
      <div>
        <OrbitalAnimation />
      </div>
    </div>
  );
};

export default HomePage;
