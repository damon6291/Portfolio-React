import React, { useRef, useEffect } from "react";
import { sceneConstructor, sceneController } from "../Animation/Animation";

import styles from "./MyInfo.module.css";
import collaboration from "../../assets/collaboration.webp";

const MyInfo = () => {
  let image = useRef(null);
  let text = useRef(null);
  let controller = sceneController();

  useEffect(() => {
    let textScene = sceneConstructor(text, -60, 0, 0.6);
    let imageScene = sceneConstructor(image, 60, 0, 0.6);

    controller.addScene([textScene, imageScene]);
  });

  return (
    <div className={styles.container} id="MyInfo">
      <div ref={(e) => (text = e)} className={styles.writtenInfo}>
        <h3>Professional Skills</h3>
        <p className={styles.info}>
          Inquisitive and adaptive computer science major skilled with
          <strong> professional communication </strong>, a strong foundation in math, and
          programming algorithms. Seeking to utilize software development skills with a focus on
          <strong> collaboration, communication, passion, and creativity.</strong>
        </p>
      </div>
      <div ref={(e) => (image = e)} className={styles.imageContainer}>
        <img alt="study" className={styles.image} src={collaboration} />
      </div>
    </div>
  );
};

export default MyInfo;
