// src/components/Contact.tsx
import { portfolioData } from '../data';
import { useTheme } from '../theme-provider';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className={`
          text-4xl font-bold text-center mb-12
          ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
        `}>
          Contact Me
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          <a
            href={`mailto:${portfolioData.contactInfo.email}`}
            className={`
              flex items-center space-x-4 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-300
              ${theme === 'dark' ? 'bg-slate-900 border-2 border-matrix-green/50 hover:bg-slate-800' : 'bg-gray-100 hover:bg-gray-200'}
            `}
          >
            <Mail size={48} className="flex-shrink-0" />
            <div>
              <h3 className={`
                text-xl font-bold
                ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
              `}>Email</h3>
              <p className={`
                text-sm
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              `}>
                {portfolioData.contactInfo.email}
              </p>
            </div>
          </a>
          <a
            href={`tel:${portfolioData.contactInfo.phone}`}
            className={`
              flex items-center space-x-4 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-300
              ${theme === 'dark' ? 'bg-slate-900 border-2 border-matrix-green/50 hover:bg-slate-800' : 'bg-gray-100 hover:bg-gray-200'}
            `}
          >
            <Phone size={48} className="flex-shrink-0" />
            <div>
              <h3 className={`
                text-xl font-bold
                ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
              `}>Phone</h3>
              <p className={`
                text-sm
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              `}>
                {portfolioData.contactInfo.phone}
              </p>
            </div>
          </a>
          <a
            href={portfolioData.contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center space-x-4 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-300
              ${theme === 'dark' ? 'bg-slate-900 border-2 border-matrix-green/50 hover:bg-slate-800' : 'bg-gray-100 hover:bg-gray-200'}
            `}
          >
            <Linkedin size={48} className="flex-shrink-0" />
            <div>
              <h3 className={`
                text-xl font-bold
                ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
              `}>LinkedIn</h3>
              <p className={`
                text-sm
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              `}>
                /in/samuel-peddakudala
              </p>
            </div>
          </a>
          <a
            href={portfolioData.contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center space-x-4 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-300
              ${theme === 'dark' ? 'bg-slate-900 border-2 border-matrix-green/50 hover:bg-slate-800' : 'bg-gray-100 hover:bg-gray-200'}
            `}
          >
            <Github size={48} className="flex-shrink-0" />
            <div>
              <h3 className={`
                text-xl font-bold
                ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
              `}>GitHub</h3>
              <p className={`
                text-sm
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              `}>
                /codebysamuel
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}