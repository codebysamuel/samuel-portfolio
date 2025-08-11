// src/App.tsx
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useTheme } from './theme-provider';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500
      ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-950'}`}>
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className={`py-8 transition-colors duration-500
        ${theme === 'dark' ? 'bg-slate-900 text-slate-400' : 'bg-gray-100 text-gray-500'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Samuel Peddakudala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;