import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter ,Routes,Route } from "react-router-dom"; 
import App from "./App"; 
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Skills from './Components/Skills';
const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
     </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
