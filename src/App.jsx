import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./layouts/Loading";
import NavBar from "./layouts/NavBar";
import About from "./layouts/About";
import Skills from "./layouts/Skills";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";

const lightTheme = {
  "--dark": "rgba(235,235,235,255)",
  "--white": "rgb(0, 0, 0)",
  "--shadow1": "rgba(20, 20, 20, 0.5)",
  "--shadow2": "rgba(20, 20, 20, 0.2)",
  "--shadow3": "rgba(20, 20, 20, 0)",
};
const darkTheme = {
  "--dark": "rgb(20, 20, 20)",
  "--white": "rgba(255, 255, 255, 0.87)",
  "--shadow1": "rgba(255, 255, 255, 0.5)",
  "--shadow2": "rgba(255, 255, 255, 0.2)",
  "--shadow3": "rgba(255, 255, 255, 0)",
};

function App() {
  const [textDone, setTextDone] = useState(false);
  const [loading, isLoading] = useState(true);

  //handle when user reload, they go to top of website
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      isLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  //Change theme
  const [currentMode, setCurrentMode] = useState("dark");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mode") === "light") {
      console.log("white");
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
    <div
      className={textDone ? "container done" : "container"}
      data-theme="white"
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar toggleTheme={toggleTheme} isChecked={isChecked} />
          <About setTextDone={setTextDone} />
          <Skills />
          <Projects currentMode={currentMode} />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
