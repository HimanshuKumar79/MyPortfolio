import React from "react";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";

const Projects = ({ projects }) => {
  const projectList = [
    {
      index: 1,
      name: "Portfolio",
      desc: "This Portfolio website is responsive. I use ReactJs and TailwindCSS to make it",
      stack: ["ReactJs", "TailwindCSS"],
      url: Project2,
      link: "",
    },
    {
      index: 0,
      name: "Movie Station",
      desc: "In this website you can search any Movies and Tv shows and get information about",
      stack: ["ReactJs", "Firebase", "TailwindCSS", "TMDB", "ContextAPI"],
      url: Project1,
      link: "https://stationmovie.netlify.app/",
    },
  ];
  return (
    <div
      ref={projects}
      className="h-fit max-w-[1080px] mx-auto flex flex-col gap-7 justify-center pb-3 pt-[6rem] md:pt-[5rem]"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-[25px] md:text-[36px] font-extrabold">Projects</p>
        <p className="text-[16px] sm:text-[16px] px-2 text-[#888585] md:text-start text-center">
          Most recent work
        </p>
      </div>
      <div className="h-full flex flex-col gap-6 ">
        {projectList.map((project) => {
          return (
            <div
              key={project.index}
              className="flex w-[100vw] px-6 md:max-w-[56.3rem] mx-auto gap-6 md:flex-row flex-col items-center"
            >
              <div className="w-full h-full px-6">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.url}
                    alt="Thumbnail"
                    className="w-full md:max-w-[30rem] shadow-xl hover:shadow-2xl transition-shadow duration-200 hover:shadow-gray-400 rounded-xl"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-4 max-w-[26rem]">
                <div>
                  <p className="text-[20px] font-semibold">{project.name}</p>
                  <p className="text-[16px] text-[#c8c1c1]">{project.desc}</p>
                </div>
                <div className="w-full h-fit flex flex-wrap gap-4">
                  {project.stack.map((tech) => {
                    return (
                      <div className="px-3 py-2 h-fit w-fit rounded-3xl bg-[#cfc5c5] text-[#6262df] text-[10px]">
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
