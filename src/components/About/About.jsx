import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Computer Engineer</h3>
              <p>
                I'm a Computer Engineering Sophomore with 3.83 CGPA and lab experience in these languages: Python, C++, C#, SQL, Java, and Assembly and Hardware experience of Digital Logic Design
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I have 1.5 years experience in making web applications using React, Next Js and Tailwind CSS, I am also keen to learn other technologies
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
