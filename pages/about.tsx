import { useCurrentTheme, useThemeToggle } from "@/context/ThemeContext";
import React from "react";

const AboutPage = () => {
  const { currentTheme } = useCurrentTheme();

  console.log(currentTheme);

  return <div>AboutPage</div>;
};

export default AboutPage;
