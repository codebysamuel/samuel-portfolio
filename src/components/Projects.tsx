// src/components/Projects.tsx
import { portfolioData } from '../data';
import { useTheme } from '../theme-provider';
import { GitFork } from 'lucide-react';

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className={`
          text-4xl font-bold text-center mb-12
          ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
        `}>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-300
                ${theme === 'dark' ? 'bg-slate-900 border-2 border-matrix-green/50 hover:bg-slate-800' : 'bg-gray-100 hover:bg-gray-200'}
              `}
            >
              <img
                src={project.screenshotUrl}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-matrix-green/50"
              />
              <h3 className={`
                text-2xl font-bold mb-2
                ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
              `}>
                {project.title}
              </h3>
              <p className={`
                text-sm mb-4 leading-relaxed
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              `}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${theme === 'dark' ? 'bg-matrix-green/20 text-matrix-green' : 'bg-gray-300 text-gray-800'}
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center px-4 py-2 rounded-full font-semibold border-2
                  ${theme === 'dark' ? 'border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-slate-950' : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'}
                  transition-colors duration-300
                `}
              >
                <GitFork size={16} className="mr-2" />
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}