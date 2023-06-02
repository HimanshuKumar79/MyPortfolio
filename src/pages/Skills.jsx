import React from "react";
import { MdOutlineCode } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import DropSkillsSection from "../components/DropSkillsSection";
import { ImGithub } from "react-icons/im";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiFirebase, SiMongodb, SiDart } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { FaGit } from "react-icons/fa";

const Skills = ({ skills }) => {
  const Language = [
    {
      name: "JavaSctipt",
      icon: <TbBrandJavascript />,
    },
    {
      name: "Dart",
      icon: <SiDart />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
  ];
  const Frameworks = [
    {
      name: "ReactJs",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "NodeJs",
      icon: <FaNodeJs />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ];
  const Tools = [
    {
      name: "Git",
      icon: <FaGit />,
    },
    {
      name: "GitHub",
      icon: <ImGithub />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
  ];
  return (
    <div
      ref={skills}
      className="max-w-[1080px] h-fit pt-[6rem] md:pt-[8rem] mx-auto flex flex-col items-center gap-y-6"
    >
      <div className="flex flex-col items-center">
        <p className="text-[36px]">Skills</p>
        <p className="text-[16px] text-[#888585]">My Technical Skills</p>
      </div>
      <DropSkillsSection
        icon1={MdOutlineCode}
        icon2={IoIosArrowUp}
        Language={Language}
        desc="Languages that I have picked up over the years"
        title="Languages"
      />
      <DropSkillsSection
        icon1={BiCodeCurly}
        icon2={IoIosArrowUp}
        Language={Frameworks}
        desc="Libraries and Frameworks that I prefer to work with"
        title="Libraries & Frameworks"
      />
      <DropSkillsSection
        icon1={BsTools}
        icon2={IoIosArrowUp}
        Language={Tools}
        desc="Tools that I know and use on a daily basis "
        title="Tools"
      />
    </div>
  );
};

export default Skills;
