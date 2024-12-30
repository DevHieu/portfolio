import styles from "./NavBar.module.scss";
import { FaMoon } from "react-icons/fa";

export default function NavBar() {
  const handleToggle = () => {
    console.log("change theme");
  };

  return (
    <div className={styles.wrapper}>
      <img src="image/logo.png" alt="logo" className={styles.logo} />
      <div className={styles.items}>
        <div className={styles.item}>About</div>
        <div className={styles.item}>Skills</div>
        <div className={styles.item}>Projects</div>
        <div className={styles.item}>Contact</div>
        <FaMoon
          className={`${styles.item} ${styles.toggle}`}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
}
