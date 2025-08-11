// src/components/About.tsx
// Removed unused 'useState' import
import { portfolioData } from "../data";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../theme-provider";

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo and Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div
              className={`
              w-64 h-64 rounded-full p-2 mb-8
              ${
                theme === "dark"
                  ? "bg-matrix-green/20 border-2 border-matrix-green"
                  : "bg-gray-200 border-2 border-gray-400"
              }
              transition-colors duration-500
            `}
            >
              <img
                src={portfolioData.photoUrl}
                alt="Samuel Peddakudala"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h2
              className={`
              text-5xl font-bold mb-4
              ${theme === "dark" ? "text-matrix-green" : "text-gray-900"}
            `}
            >
              {portfolioData.name}
            </h2>
            <p
              className={`
              text-lg mb-6
              ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
            `}
            >
              {portfolioData.title}
            </p>
            <div className="flex space-x-6">
              <a
                href={`mailto:${portfolioData.contactInfo.email}`}
                className={`
                  p-3 rounded-full transition-transform transform hover:scale-110
                  ${theme === "dark" ? "text-matrix-green" : "text-gray-800"}
                `}
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
              <a
                href={portfolioData.contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-3 rounded-full transition-transform transform hover:scale-110
                  ${theme === "dark" ? "text-matrix-green" : "text-gray-800"}
                `}
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href={portfolioData.contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-3 rounded-full transition-transform transform hover:scale-110
                  ${theme === "dark" ? "text-matrix-green" : "text-gray-800"}
                `}
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* About Me Text */}
          <div
            className={`
            p-8 rounded-lg shadow-lg transition-colors duration-500
            ${theme === "dark" ? "bg-slate-900" : "bg-gray-100"}
          `}
          >
            <h3
              className={`
              text-3xl font-bold mb-4
              ${theme === "dark" ? "text-matrix-green" : "text-gray-900"}
            `}
            >
              About Me
            </h3>
            <p
              className={`
                text-lg leading-relaxed
                ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
              `}
              dangerouslySetInnerHTML={{ __html: portfolioData.aboutText }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}
