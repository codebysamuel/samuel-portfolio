// src/components/Certifications.tsx
import { portfolioData } from '../data';
import { useTheme } from '../theme-provider';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className={`
          text-4xl font-bold text-center mb-12
          ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
        `}>
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-300
                ${theme === 'dark' ? 'bg-slate-900 border-2 border-matrix-green/50 hover:bg-slate-800' : 'bg-gray-100 hover:bg-gray-200'}
              `}
            >
              <div className="flex items-start">
                <Award size={48} className="mr-4 flex-shrink-0" />
                <div>
                  <h3 className={`
                    text-xl font-bold mb-1
                    ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
                  `}>
                    {cert.name}
                  </h3>
                  <p className={`
                    text-sm
                    ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                  `}>
                    {cert.issuingOrganization} | {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center mt-2 font-semibold
                      ${theme === 'dark' ? 'text-matrix-green hover:underline' : 'text-gray-800 hover:underline'}
                    `}
                  >
                    View Credential
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}