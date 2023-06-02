import React from "react";
import Portfolioimg from "../images/PortFolioImage.png";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiFirebase, SiMongodb } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const OrbitalAnimation = () => {
  return (
    <div className="relative flex h-fit w-fit items-center justify-center p-12">
      <div className=" relative rounded-full flex items-center justify-center w-[14rem] lg:w-[21rem] md:w-[18rem] h-[14rem] lg:h-[21rem] md:h-[18rem] border-solid border-2 border-sky-500 circleOuterMove">
        <div className=" relative rounded-full w-[8rem] lg:w-[14rem] md:w-[12rem] h-[8rem] lg:h-[14rem] md:h-[12rem] border-solid border-2 border-sky-500 circleInnerMove">
          <div className="h-[30px] md:h-[40px] lg:h-[50px] md:top-2 top-0 md:left-2 left-0 rounded-full w-[30px] lg:w-[50px] md:w-[40px] text-red-600 bg-[#ead9d9] flex items-center justify-center absolute">
            <ImHtmlFive className="skillrotateinner lg:text-[30px] md:text-[25px] text-[20px]" />
          </div>
          <div className="h-[30px] md:h-[40px] lg:h-[50px] md:top-2 top-0 md:right-2 right-0 w-[30px] lg:w-[50px] md:w-[40px] rounded-full text-blue-600 bg-[#ead9d9] flex items-center justify-center absolute">
            <IoLogoCss3 className="skillrotateinner lg:text-[30px] md:text-[25px] text-[20px]" />
          </div>
          <div className="h-[30px] md:h-[40px] lg:h-[50px] md:bottom-2 bottom-0 md:left-2 left-0 w-[30px] lg:w-[50px] md:w-[40px] rounded-full text-yellow-500 bg-[#ead9d9] flex items-center justify-center absolute">
            <TbBrandJavascript className="skillrotateinner lg:text-[30px] md:text-[25px] text-[20px]" />
          </div>
          <div className="h-[30px] md:h-[40px] lg:h-[50px] md:bottom-2 bottom-0 md:right-2 right-0 w-[30px] lg:w-[50px] md:w-[40px] rounded-full text-cyan-600 bg-[#ead9d9] flex items-center justify-center absolute">
            <SiTailwindcss className="skillrotateinner lg:text-[30px] md:text-[25px] text-[20px]" />
          </div>
        </div>
        <div className="h-[35px] md:h-[40px] lg:h-[50px] md:top-6 top-4 md:left-6 left-4 rounded-full w-[35px] lg:w-[50px] md:w-[40px] text-cyan-700 bg-[#ead9d9] flex items-center justify-center absolute">
          <FaReact className="skillrotateouter lg:text-[30px] md:text-[25px] text-[20px]" />
        </div>
        <div className="h-[35px] md:h-[40px] lg:h-[50px] md:top-6 top-4 md:right-6 right-4 w-[35px] lg:w-[50px] md:w-[40px] rounded-full text-yellow-400 bg-[#ead9d9] flex items-center justify-center absolute">
          <SiFirebase className="skillrotateouter lg:text-[30px] md:text-[25px] text-[20px]" />
        </div>
        <div className="h-[35px] md:h-[40px] lg:h-[50px] md:bottom-6 bottom-4 md:left-6 left-4 w-[35px] lg:w-[50px] md:w-[40px] rounded-full text-green-600 bg-[#ead9d9] flex items-center justify-center absolute">
          <SiMongodb className="skillrotateouter lg:text-[30px] md:text-[25px] text-[20px]" />
        </div>
        <div className="h-[35px] md:h-[40px] lg:h-[50px] md:bottom-6 bottom-4 md:right-6 right-4 w-[35px] lg:w-[50px] md:w-[40px] rounded-full text-green-800 bg-[#ead9d9] flex items-center justify-center absolute">
          <FaNodeJs className="skillrotateouter lg:text-[30px] md:text-[25px] text-[20px]" />
        </div>
      </div>
      <img
        src={Portfolioimg}
        alt="profile"
        className="w-[80px] md:w-[120px] lg:w-[150px] rounded-full absolute"
      />
    </div>
  );
};

export default OrbitalAnimation;
