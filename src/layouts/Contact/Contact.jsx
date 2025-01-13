import styles from "./Contact.module.scss";
import emailjs from "emailjs-com";

import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_5op2z1m",
        "template_30x6jyl",
        e.target,
        "u07FEGZfBwg8GTMez"
      )
      .then(
        () => {
          alert("Your email send successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.wrapper} id="Contact">
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.content}>
        <header>Contact Me</header>
        <div className={styles.contentContainer}>
          <div className={styles.left}>
            {/*Form i take from:  https://codepen.io/matmarsiglio/pen/pojoPR */}
            <form className={styles.contact_form} onSubmit={sendEmail}>
              <input type="text" placeholder="NAME" name="from_name" />
              <input type="text" placeholder="E-MAIL" name="from_email" />
              <textarea type="text" placeholder="MESSAGE" name="subject" />
              <input className={styles.submit} type="submit" value="GO!" />
            </form>
          </div>
          <div className={styles.right}>
            <p>
              If you have any questions or concerns, please don't hesitate to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>
            <div className={styles.link}>
              <div className={styles.linkItem}>
                <span>
                  <MdOutlineAlternateEmail size={20} />
                </span>
                <p>hieudd2090@gmail.com</p>
              </div>
              <div className={styles.linkItem}>
                <span>
                  <FaMapMarkerAlt size={20} />
                </span>
                <p>Ho Chi Minh city, VietNam</p>
              </div>
            </div>
            <div className={styles.socialList}>
              <span>
                <a href="https://github.com/DevHieu" target="_blank">
                  <FaGithub size={25} />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/minh-hieu-11aa04228/"
                  target="_blank"
                >
                  <FaLinkedin size={25} />
                </a>
              </span>
              <span>
                <a href="https://leetcode.com/u/DevHieu/" target="_blank">
                  <SiLeetcode size={25} />
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/profile.php?id=100047384421975"
                  target="_blank"
                >
                  <FaFacebook size={25} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
