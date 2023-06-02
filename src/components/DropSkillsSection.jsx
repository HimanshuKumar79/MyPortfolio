import React, { useState } from "react";

const DropSkillsSection = (props) => {
  const [skill, setSkill] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(0);
  const rotateHandler = () => {
    if (rotateArrow === 0) {
      setRotateArrow(180);
    } else {
      setRotateArrow(0);
    }
  };
  const skillHandler = () => {
    setSkill(!skill);
  };
  return (
    <div className="flex flex-col w-[100vw] md:w-[29rem] gap-9 items-end md:px-0 mt-6 px-9">
      <div className="w-full flex items-center justify-between gap-3">
        <div className="flex gap-5 items-center">
          <props.icon1 className="text-[33px] text-[#6363f2]" />
          <div>
            <p>{props.title}</p>
            <p className="md:text-[16px] text-[14px] text-[#5f5b5b]">
              {props.desc}
            </p>
          </div>
        </div>
        <props.icon2
          className={`text-[29px] ${
            rotateArrow === 0 ? "rotate-[0]" : "rotate-[180deg]"
          } transition-rotate duration-300 text-[#4d4dcc]`}
          onClick={() => {
            rotateHandler();
            skillHandler();
          }}
        />
      </div>
      {skill && (
        <div className="sm:w-[90%] w-[87%] flex flex-col gap-6">
          {props.Language.map((language) => {
            return (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#4d4dcc] text-[1.7rem]">
                    {language.icon}
                  </div>
                  <p className="text-[1rem]">{language.name}</p>
                </div>
                <div className="w-full h-3 bg-[#4d4dcc] rounded-xl"></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropSkillsSection;
