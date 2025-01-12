import "./index.css";
import React, { useState, useEffect } from "react";

const darkTheme = {
  textColor: "rgba(255, 255, 255, 0.87)",
  background: "rgb(20, 20, 20)",
};

const lightTheme = {
  textColor: "rgb(20, 20, 20)",
  background: "rgba(255, 255, 255, 0.87)",
};

export default function theme({ children }) {
  const [currentMode, setCurrentMode] = useState("dark");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mode") === "light") {
      setCurrentMode("light");
      setIsChecked(true);
    }
  }, []);

  useEffect(() => {
    const theme = currentMode === "light" ? lightTheme : darkTheme;
    Object.keys(theme).forEach((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, [currentMode]);

  const toggleTheme = () => {
    const newMode = currentMode === "dark" ? "light" : "dark";
    setIsChecked(!isChecked);
    setCurrentMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <div className="site">
      <Header toggleTheme={toggleTheme} isChecked={isChecked} />
      <main>{children}</main>
    </div>
  );
}
