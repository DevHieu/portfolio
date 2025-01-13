import styles from "./Skills.module.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaSass,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

export default function About() {
  const data = [
    { logo: <FaHtml5 />, name: "HTML" },
    { logo: <FaCss3Alt />, name: "CSS" },
    { logo: <FaJs />, name: "Javascript" },
    { logo: <FaReact />, name: "React" },
    { logo: <FaSass />, name: "Sass" },
    { logo: <FaJava />, name: "Java" },
    { logo: <DiMongodb />, name: "MongoDb" },
  ];

  return (
    <div className={styles.wrapper} id="Skills">
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.content}>
        <div className={styles.scroller}>
          <div className={styles.scroll}>
            <div>
              {data.map((value, index) => (
                <h3 className={styles.scroller_item} key={index}>
                  {value.logo}
                  {value.name}
                </h3>
              ))}
            </div>

            <div>
              {data.map((value, index) => (
                <h3 className={styles.scroller_item} key={index}>
                  <span>{value.logo}</span>
                  {value.name}
                </h3>
              ))}
            </div>
          </div>
        </div>
        <h2 className={styles.describe}>
          Starting as a frontend developer, I am currently learning more about
          Java and Spring boot to become a backend developer. And thanks to
          that, I have also used many different languages and frameworks
        </h2>
        <div className={`${styles.scroller} ${styles.reverse}`}>
          <div className={styles.scroll}>
            <div>
              {data.map((value, index) => (
                <h3 className={styles.scroller_item} key={index}>
                  {value.logo}
                  {value.name}
                </h3>
              ))}
            </div>

            <div>
              {data.map((value, index) => (
                <h3 className={styles.scroller_item} key={index}>
                  <span>{value.logo}</span>
                  {value.name}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
