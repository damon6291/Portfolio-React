import React from "react";

import styles from "./Name.module.css";

const Name = () => {
  return (
    <div className={styles.container} id="Name">
      <h1 className={styles.text}>Damon Joung</h1>
      <h2 className={styles.job}>Software Engineer</h2>
    </div>
  );
};

export default Name;
