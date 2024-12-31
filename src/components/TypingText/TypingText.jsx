import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useInView } from "motion/react";

// eslint-disable-next-line react/prop-types
export default function TypingText({ string, delay, isDone }) {
  TypingText.propTypes = {
    string: PropTypes.string.isRequired,
    delay: PropTypes.number,
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isInView && currentIndex < string.length) {
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
  }, [currentIndex, delay, string, isInView, isDone]);

  return <div ref={ref}>{currentText}</div>;
}
