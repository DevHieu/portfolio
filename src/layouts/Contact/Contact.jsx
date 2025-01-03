import styles from "./Contact.module.scss";
import emailjs from "emailjs-com";

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
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          {/*Form i take from:  https://codepen.io/matmarsiglio/pen/pojoPR */}
          <header>Contact Me</header>
          <form className={styles.contact_form} onSubmit={sendEmail}>
            <input type="text" placeholder="NAME" name="from_name" />
            <input type="text" placeholder="E-MAIL" name="from_email" />
            <textarea type="text" placeholder="MESSAGE" name="subject" />
            <input className={styles.submit} type="submit" value="GO!" />
          </form>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};
export default Contact;
