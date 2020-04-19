import React from "react";
import BackgroundSlider from "react-background-slider";
import image1 from "../../assets/background.jpg";
import image2 from "../../assets/java.jpg";

import styles from "./Name.module.css";

const Name = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Damon Joung</h1>
    </div>
  );
};

export default Name;
