import React, { useState } from "react";
import EducationWork from "../components/EducationWork";
import { CgReadme } from "react-icons/cg";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Qualifications = ({ qualifications }) => {
  const [educationExperience, setEducationExperience] = useState("Education");
  const clickHandler = (e) => {
    setEducationExperience(e.target.textContent);
  };
  const Education = [
    {
      degree: "Diploma Computer Engineering",
      intitute: "G.N.D.I.T College",
      duration: "2017 - 2020",
      index: "0",
    },
    {
      degree: "Secondary School",
      intitute: "S.S.K.V No-1",
      duration: "2007 - 2017",
      index: "1",
    },
  ];
  const Work = [
    {
      degree: "Airport Authority of India",
      intitute: "Apprenticeship",
      duration: "2021 - 2022",
      index: "2",
    },
  ];
  return (
    <div
      ref={qualifications}
      className="max-w-[1080px] h-fit pt-[6rem] md:pt-[8rem] mx-auto flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-16 max-h-[70vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[25px] md:text-[36px] font-extrabold">
            Qualifications
          </p>
          <p className="text-[16px] sm:text-[16px] px-2 text-[#888585] md:text-start text-center">
            My Educational Qualification & Work Experience
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-evenly max-w-full ">
            <div
              onClick={(e) => clickHandler(e)}
              className={`flex gap-3 items-center text-[1.3rem] sm:text-[1.4rem] cursor-pointer ${
                educationExperience === "Education"
                  ? "text-[blue]"
                  : "text-gray-500"
              }`}
            >
              <CgReadme />
              <p>Education</p>
            </div>
            <div
              onClick={(e) => clickHandler(e)}
              className={`flex gap-3 items-center text-[1.3rem] sm:text-[1.4rem] cursor-pointer ${
                educationExperience === "Work" ? "text-[blue]" : "text-gray-500"
              }`}
            >
              <HiOutlineBuildingOffice2 />
              <p>Work</p>
            </div>
          </div>
          <div>
            {(educationExperience === "Education" ? Education : Work).map(
              (qualification) => {
                return (
                  <EducationWork
                    degree={qualification.degree}
                    intitute={qualification.intitute}
                    duration={qualification.duration}
                    index={qualification.index}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
