import styles from "./NavBar.module.scss";
import { Link as ScrollLink, scroller } from "react-scroll";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

export default function NavBar({ toggleTheme, isChecked }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src="image/logo.png" alt="logo" className={styles.logo} />
        <div className={styles.items}>
          <ScrollLink
            to="About"
            smooth="true"
            delay={100}
            duration={1500}
            offset={-70}
          >
            <div className={styles.item}>About</div>
          </ScrollLink>
          <ScrollLink
            to="Skills"
            smooth="true"
            delay={100}
            duration={1500}
            offset={-70}
          >
            <div className={styles.item}>Skills</div>
          </ScrollLink>
          <ScrollLink
            to="Projects"
            smooth="true"
            delay={100}
            duration={1500}
            offset={-70}
          >
            <div className={styles.item}>Projects</div>
          </ScrollLink>
          <ScrollLink
            to="Contact"
            smooth="true"
            delay={100}
            duration={1500}
            offset={-70}
          >
            <div className={styles.item}>Contact</div>
          </ScrollLink>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              id="checkbox"
              onChange={toggleTheme}
              checked={isChecked}
              className={styles.toggleBtn}
            />
            <span className="checkmark">
              {isChecked ? <IoIosMoon size={25} /> : <IoIosSunny size={25} />}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
