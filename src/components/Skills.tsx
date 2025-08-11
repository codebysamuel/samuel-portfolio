// src/components/Skills.tsx
import { portfolioData } from '../data';
import { useTheme } from '../theme-provider';
import { FileCode, Palette, Terminal, Cpu, Layers, Smartphone, Layout, GitBranch } from 'lucide-react';
import React from 'react';

// A mapping of icon names to Lucide-React components.
// The key strings MUST match the 'icon' property in data.ts.
const iconComponents: { [key: string]: React.FC<any> } = {
    FileCode: FileCode,
    Palette: Palette,
    Terminal: Terminal,
    Cpu: Cpu,
    Layers: Layers,
    Smartphone: Smartphone,
    Layout: Layout,
    GitBranch: GitBranch
};

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className={`
          text-4xl font-bold text-center mb-12
          ${theme === 'dark' ? 'text-matrix-green' : 'text-gray-900'}
        `}>
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {portfolioData.skills.map((skill, index) => {
            const IconComponent = iconComponents[skill.icon];
            return (
              <div
                key={index}
                className={`
                  p-6 rounded-lg text-center shadow-lg transition-transform transform hover:-translate-y-2 duration-300
                  ${theme === 'dark' ? 'bg-slate-900 border-2 border-matrix-green/50 hover:bg-slate-800' : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                {IconComponent && <IconComponent size={48} className="mx-auto mb-4" />}
                <h3 className={`
                  text-xl font-semibold
                  ${theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}
                `}>
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}