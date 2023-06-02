import React from "react";
import PortfolioImg from "../images/PortFolioImage.png";
import { AiOutlineFileText } from "react-icons/ai";

const AboutMe = ({ aboutme }) => {
  return (
    <div
      ref={aboutme}
      className="h-fit pt-[6rem] md:pt-[8rem] max-w-[1080px] flex flex-col items-center  font-semibold  mx-auto gap-16 px-6"
    >
      <div className="flex flex-col items-center">
        <p className="text-[36px]">AboutMe</p>
        <p className="text-[16px] text-[#888585]">My Introduction</p>
      </div>
      <div className="flex md:items-start sm:flex-row flex-col items-center justify-center gap-16">
        <img
          src={PortfolioImg}
          alt="profile"
          className="md:w-[22rem] w-[16rem] md:h-[22rem] h-16rem rounded-lg"
        />
        <div className="flex flex-col gap-8 items-center">
          <p className="text-[0.8rem] text-[#736e6e] max-w-[26rem] leading-loose tracking-wide md:text-start text-center">
            Hey there,👋 I'm HImanshu Kumar a 21-year-old who is passionate
            about Software Development, Frontend Development and Backend
            Development. Currently, I'm pursuing my career as a Full Stack Web
            Developer 👨🏻‍💻. I completed my Diploma in Computer Engineering.
            Currently i am learning Full Stack Web Development from CodeHelp. ✍🏻
          </p>
          <div className="w-fit text-white rounded-lg transition-colors duration-300 flex items-center gap-2 py-3 px-6 hover:bg-[#8c7be2] bg-[#6E57E0]">
            Resume
            <AiOutlineFileText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
