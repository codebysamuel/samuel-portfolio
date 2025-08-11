// src/components/Navbar.tsx
import { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../theme-provider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinkClass = `
    relative block transition duration-300
    after:block after:content-[''] after:absolute after:h-[3px]
    after:bg-matrix-green after:w-full after:scale-x-0 after:hover:scale-x-100
    after:transition after:duration-300 after:origin-left
  `;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300
      ${
        theme === "dark"
          ? "bg-slate-950/80 text-matrix-green shadow-lg backdrop-blur-sm"
          : "bg-white/80 text-gray-800 shadow-md backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a
            href="#home"
            onClick={() => handleScrollTo("home")}
            className={`${
              theme === "dark" ? "text-matrix-green" : "text-gray-800"
            }`}
          >
            Samuel P | Frontend Developer
          </a>
        </h1>

        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a
              href="#about"
              onClick={() => handleScrollTo("about")}
              className={`${navLinkClass} ${
                theme === "dark" ? "text-matrix-green" : "text-gray-800"
              }`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleScrollTo("skills")}
              className={`${navLinkClass} ${
                theme === "dark" ? "text-matrix-green" : "text-gray-800"
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handleScrollTo("projects")}
              className={`${navLinkClass} ${
                theme === "dark" ? "text-matrix-green" : "text-gray-800"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              onClick={() => handleScrollTo("certifications")}
              className={`${navLinkClass} ${
                theme === "dark" ? "text-matrix-green" : "text-gray-800"
              }`}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleScrollTo("contact")}
              className={`${navLinkClass} ${
                theme === "dark" ? "text-matrix-green" : "text-gray-800"
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Samuel-Peddakudala-Resume.pdf"
              download
              className="flex items-center px-4 py-2 rounded-full font-semibold border-2 border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-slate-950 transition-colors duration-300"
            >
              <Download size={16} className="mr-2" />
              Resume
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-transform transform hover:scale-110 ${
                theme === "dark" ? "text-matrix-green" : "text-gray-800"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </li>
        </ul>

        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-transform transform hover:scale-110 ${
              theme === "dark" ? "text-matrix-green" : "text-gray-800"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${
              theme === "dark" ? "text-matrix-green" : "text-gray-800"
            } focus:outline-none`}
            aria-label="Open navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${isMenuOpen ? "max-h-screen py-4" : "max-h-0"}
        ${theme === "dark" ? "bg-slate-950" : "bg-white"}`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <a
              href="#about"
              onClick={() => handleScrollTo("about")}
              className={`nav-link text-xl ${
                theme === "dark"
                  ? "text-matrix-green hover:text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleScrollTo("skills")}
              className={`nav-link text-xl ${
                theme === "dark"
                  ? "text-matrix-green hover:text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handleScrollTo("projects")}
              className={`nav-link text-xl ${
                theme === "dark"
                  ? "text-matrix-green hover:text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              onClick={() => handleScrollTo("certifications")}
              className={`nav-link text-xl ${
                theme === "dark"
                  ? "text-matrix-green hover:text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleScrollTo("contact")}
              className={`nav-link text-xl ${
                theme === "dark"
                  ? "text-matrix-green hover:text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Samuel-Peddakudala-Resume.pdf"
              download
              className="flex items-center px-4 py-2 rounded-full font-semibold border-2 border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-slate-950 transition-colors duration-300"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
