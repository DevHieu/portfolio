import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./layouts/Loading";
import NavBar from "./layouts/NavBar";
import About from "./layouts/About";
import Skills from "./layouts/Skills";

function App() {
  const [textDone, setTextDone] = useState(false);
  const [loading, isLoading] = useState(true);
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

  return (
    <div className={textDone ? "container done" : "container"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <About setTextDone={setTextDone} />
          <Skills />
        </>
      )}
    </div>
  );
}

export default App;
