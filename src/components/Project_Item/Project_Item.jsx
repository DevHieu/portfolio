import styles from "./Project_Item.module.scss";
import PropTypes from "prop-types";
import { MdOutlineArrowOutward } from "react-icons/md";
import Reveal from "../RevealText";

export default function TypingText({
  title,
  describe,
  image,
  ascii,
  link,
  isEven,
}) {
  TypingText.propTypes = {
    title: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ascii: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isEven: PropTypes.bool.isRequired,
  };
  return (
    <div
      className={
        isEven ? `${styles.container} ${styles.reverse}` : styles.container
      }
    >
      <div className={styles.image}>
        <img src={image} alt="image" className={styles.full} />
        <img src={ascii} alt="image" className={styles.ascii} />
      </div>
      <div
        className={
          isEven ? `${styles.content} ${styles.reverse2}` : styles.content
        }
      >
        <Reveal isEven={isEven}>
          <h2>{title}</h2>
        </Reveal>
        <Reveal isEven={isEven}>
          <p>{describe}</p>
        </Reveal>
        <div>
          <a className={styles.button} href={link}>
            <p>Visit</p>
            <MdOutlineArrowOutward />
          </a>
        </div>
      </div>
    </div>
  );
}
