import React from "react";

import styles from "./Bottom.module.css";

const Bottom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Email: Joung.s@Husky.neu.edu</p>
        <p>Phone: (201) 856-7857</p>
        <p className={styles.site}>Site by Damon Joung</p>
      </div>
    </div>
  );
};

export default Bottom;
