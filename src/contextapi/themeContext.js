'use client';
import React,{createContext,useContext, useEffect} from "react";

const ThemeContext = createContext();

export  const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = React.useState('dark');

    useEffect(() => {
        // Set initial theme attribute on mount
        document.documentElement.setAttribute('data-theme', 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        // localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
  }
  return (
    <ThemeContext.Provider value={{ theme   ,toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);