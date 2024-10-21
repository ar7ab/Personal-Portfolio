import Navbar from "./Navbar";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
import project1Img from "../assets/project-1.png";
import project2Img from "../assets/project-2.png";
import project3Img from "../assets/project-3.png";
import project4Img from "../assets/project-4.png";
import project5Img from "../assets/project-5.png";
import project6Img from "../assets/project-6.png";

const projects = [
  {
    id: 1,
    name: "Pixstock - Stock Media App",
    Category: "React App",
    img: project1Img,
  },
  {
    id: 2,
    name: "Pixstock - Stock Media App",
    Category: "React App",
    img: project2Img,
  },
  {
    id: 3,
    name: "Pixstock - Stock Media App",
    Category: "React App",
    img: project3Img,
  },
  {
    id: 4,
    name: "Pixstock - Stock Media App",
    Category: "React App",
    img: project4Img,
  },
  {
    id: 5,
    name: "Pixstock - Stock Media App",
    Category: "React App",
    img: project5Img,
  },
  {
    id: 6,
    name: "Pixstock - Stock Media App",
    Category: "React App",
    img: project6Img,
  },
];

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-dark-background text-dark-primary"
          : "bg-background text-black"
      } `}
    >
      <Navbar />
      <div
        className={`projects grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 px-6 md:px-32  relative py-8 top-20 font-open-sans w-full  ${
          darkMode
            ? "bg-dark-background text-dark-primary"
            : "bg-background text-black"
        }`}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project p-6 ${
              darkMode
                ? "bg-[#1E1C21] hover:bg-[#2E2C30]"
                : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
            }  flex flex-col justify-center items-center rounded-xl  transition-all duration-300 ease-linear cursor-pointer`}
          >
            <a href="#" className="block">
              {" "}
              <div className="project-banner rounded-xl overflow-hidden">
                <img src={project.img} alt="" className="rounded-xl" />
              </div>
              <div
                className={`project-category mt-2 ${
                  darkMode ? "text-dark-secondary" : "text-secondary"
                }`}
              >
                {project.Category}
              </div>
              <div className="project-title mt-1">{project.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
