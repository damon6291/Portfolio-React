import React from "react";

import styles from "./Bottom.module.css";

const Bottom = () => {
  return (
    <div className={styles.container} id="Bottom">
      <div className={styles.info}>
        <a
          className={styles.linkedin}
          href={`https://www.linkedin.com/in/damon-sangmin-joung-178042139/`}>
          LinkedIn
        </a>
        <p>Email: Joung.s@Husky.neu.edu</p>
        <p>Phone: (201) 856-7857</p>
        <p className={styles.site}>Site by Damon Joung</p>
      </div>
    </div>
  );
};

export default Bottom;
