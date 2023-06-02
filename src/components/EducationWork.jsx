import React from "react";
import { BsCalendar } from "react-icons/bs";

const EducationWork = (props) => {
  return (
    <div
      className={`flex sm:w-[27.3rem] pl-9 mb-3 sm:mb-0 md:pl-0 w-[100vw] h-[8rem] gap-9 m-0 p-0 justify-center ${
        Number(props.index) % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
      }`}
    >
      {Number(props.index) % 2 === 0 && (
        <div className="w-[11rem] h-full flex flex-col items-start justify-evenly sm:justify-between">
          <div>
            <p className="font-bold text-[1rem]">{props.degree}</p>
            <p className="text-[#716d6d] text-[1rem]">{props.intitute}</p>
          </div>
          <div className="flex gap-3 items-baseline text-[#716d6d] text-[0.9rem]">
            <BsCalendar />
            <p>{props.duration}</p>
          </div>
        </div>
      )}
      <div className="flex-col items-center justify-center md:flex hidden">
        <div className="h-3 w-3 rounded-full bg-[blue]"></div>
        <div className="sm:h-[86%] h-[76%] w-[1px] rounded-2xl bg-[blue]"></div>
      </div>
      {Number(props.index) % 2 !== 0 && (
        <div className="w-[11rem] h-full flex flex-col justify-evenly sm:justify-between">
          <div>
            <p className="font-bold text-[1rem]">{props.degree}</p>
            <p className="text-[#716d6d] text-[1rem]">{props.intitute}</p>
          </div>
          <div className="flex gap-3 items-baseline text-[#716d6d] text-[0.9rem]">
            <BsCalendar />
            <p>{props.duration}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationWork;
