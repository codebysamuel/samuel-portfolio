import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react'; // Corrected import for ReactNode

// Define the shape of our context value
interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

// Create the context with a default value of null
const ThemeContext = createContext<ThemeContextType | null>(null);

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// The provider component that wraps our application
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const localTheme = localStorage.getItem('theme');
    return localTheme === 'light' ? 'light' : 'dark';
  });

  // Update the 'theme' class on the document's root element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};