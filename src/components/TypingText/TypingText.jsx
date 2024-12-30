import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function TypingText({ string, delay, inView, isDone }) {
  TypingText.propTypes = {
    string: PropTypes.string.isRequired,
    delay: PropTypes.number,
  };
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (inView && currentIndex < string.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + string[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    } else if (currentIndex == string.length) {
      isDone(true);
    }
  }, [currentIndex, delay, string, inView, isDone]);

  return <div>{currentText}</div>;
}
