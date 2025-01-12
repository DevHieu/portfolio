import styles from "./NavBar.module.scss";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

export default function NavBar({ toggleTheme, isChecked }) {
  return (
    <div className={styles.wrapper}>
      <img src="image/logo.png" alt="logo" className={styles.logo} />
      <div className={styles.items}>
        <div className={styles.item}>About</div>
        <div className={styles.item}>Skills</div>
        <div className={styles.item}>Projects</div>
        <div className={styles.item}>Contact</div>
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
  );
}
