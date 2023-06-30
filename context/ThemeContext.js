import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  currentTheme: "light",
  toggleTheme: () => {},
});

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme Context Does Not Exist.");
  }
  return context;
};

export const useCurrentTheme = () => {
  const { currentTheme } = useTheme();
  return { currentTheme };
};

export const useThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return { toggleTheme };
};

export const ThemeProivder = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  const value = {
    currentTheme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children} </ThemeContext.Provider>
  );
};
