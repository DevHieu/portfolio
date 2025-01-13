import styles from "./About.module.scss";
import TypingText from "../../components/TypingText";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function About({ setTextDone }) {
  About.propTypes = {
    setTextDone: PropTypes.func.isRequired,
  };

  const [done, isDone] = useState(false);

  useEffect(() => {
    if (done === true) {
      setTextDone(done);
    }
  }, [done, setTextDone]);

  return (
    <div className={styles.wrapper} id="About">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className="typing">
            <TypingText string="Hi i'm Minh Hieu" delay={150} isDone={isDone} />
          </h1>
          <div className={styles.description}>
            <h2>A student majoring in software development</h2>
            <h2>
              With a meticulous and dedicated personality, I will make your
              product perfect.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
