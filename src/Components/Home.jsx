import React, { useContext } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { DarkModeContext } from "../context/DarkModeContext";
const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen ${darkMode
          ? "bg-dark-background text-dark-primary"
          : "bg-background text-black"
        }`}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
