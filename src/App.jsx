import Home from "./Components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import Projects from "./Components/Projects.jsx"; // Ensure this file exists
import Resume from "./Components/Resume.jsx"; // Ensure this file exists
import Contact from "./Components/Contact.jsx";


const App = () => {
  return (
    <DarkModeProvider>
      <Routes basename="/Personal-Portofolio/">
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </DarkModeProvider>
  );
};

export default App;
