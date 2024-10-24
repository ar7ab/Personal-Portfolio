import Navbar from "./Navbar";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
import YT_ProjectImg from "../assets/YouTube_Project.png";
import ToDo_ListImg from "../assets/ToDo-list-Img.png";
import PortfolioImg from "../assets/Portfolio_Img.png";
import project4Img from "../assets/MediVital_Img.png";
import project5Img from "../assets/weatherProjectImg.png";

const projects = [
  {
    id: 1,
    name: "YouTube Clone - App",
    Category: "React App",
    img: YT_ProjectImg,
    link: "https://ar7ab.github.io/YouTube-Clone/",
  },
  {
    id: 2,
    name: "ToDo List - App",
    Category: "React App",
    img: ToDo_ListImg,
    link: "https://ar7ab.github.io/ToDo-List-App/",
  },
  {
    id: 3,
    name: "Personal Portfolio - App",
    Category: "React App",
    img: PortfolioImg,
    link: "https://ar7ab.github.io/Personal-Portfolio/",
  },
  {
    id: 4,
    name: "E – Commerce Website (MediVital) App",
    Category: "WordPress App",
    img: project4Img,
    link: "https://dev-medivital.pantheonsite.io/",
  },
  {
    id: 5,
    name: "Weather App",
    Category: "React App",
    img: project5Img,
    link: "https://ar7ab.github.io/weather-app/",
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
            <a href={project.link} target="_blank" className="block">
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
