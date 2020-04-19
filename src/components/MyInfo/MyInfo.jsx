import React from "react";

import styles from "./MyInfo.module.css";
import collaboration from "../../assets/collaboration.jpg";

const MyInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.writtenInfo}>
        <h3>Professional Skills</h3>
        <p>
          Inquisitive and adaptive computer science major skilled with
          <strong> professional communication </strong>, a strong foundation in math, and
          programming algorithms. Seeking to utilize software development skills with a focus on
          <strong> collaboration, communication, passion, and creativity.</strong> Possess several
          experiences in building and testing single and multiplayer board games.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={collaboration} />
      </div>
    </div>
  );
};

export default MyInfo;
