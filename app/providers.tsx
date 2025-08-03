'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme | null;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Initialize theme after mount to avoid hydration mismatch
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Apply theme class immediately to prevent flash of default theme
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(initialTheme);
    html.setAttribute('data-theme', initialTheme);
    
    setTheme(initialTheme);
  }, []);

  // Update theme class and localStorage when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined' && theme) {
      const html = document.documentElement;
      // Remove any existing theme classes
      html.classList.remove('light', 'dark');
      // Add the current theme class
      html.classList.add(theme);
      // Also set the data-theme attribute for compatibility
      html.setAttribute('data-theme', theme);
      // Save to localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Don't render children until theme is initialized
  if (theme === null) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  // This will only throw if the hook is used outside of a ThemeProvider
  // and the default context is still being used
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}