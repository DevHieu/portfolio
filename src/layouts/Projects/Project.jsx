import styles from "./Project.module.scss";
import ProjectsItem from "../../components/Project_Item";
import data from "../../data/ProjectsData.jsx";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Project({ currentMode }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.content}>
        <h2>
          During my years of studying and working,
          <br /> I participated and had myself many different projects
        </h2>
        <div className={styles.projects}>
          {data.map((value, index) => (
            <ProjectsItem
              title={value.title}
              describe={value.describe}
              image={value.image}
              ascii={
                currentMode === "light" ? value.asciiWhite : value.asciiBlack
              }
              link={value.link}
              key={index}
              isEven={index % 2 == 0 ? false : true}
            />
          ))}
        </div>
        <div className={styles.seeAll}>
          <button>
            <p>See all project</p>
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
}
