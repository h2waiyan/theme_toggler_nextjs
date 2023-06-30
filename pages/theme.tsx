import { useCurrentTheme, useThemeToggle } from "@/context/ThemeContext";
import { log } from "console";
import React from "react";

const Theme = () => {
  const { currentTheme } = useCurrentTheme();

  const { toggleTheme } = useThemeToggle();

  const onThemeChange = () => {
    console.log("HERE");
    toggleTheme();
  };

  return (
    <>
      <div className="text-lg">Theme - {currentTheme}</div>
      <button className="btn btn-blue" onClick={onThemeChange}>
        Toggle Theme
      </button>
    </>
  );
};

export default Theme;
