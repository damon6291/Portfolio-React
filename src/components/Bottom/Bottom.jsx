import React from 'react';

import styles from './Bottom.module.css';

const Bottom = () => {
  return (
    <div className={styles.container} id="Bottom">
      <div className={styles.info}>
        <a
          className={styles.linkedin}
          href={`https://www.linkedin.com/in/damon-sangmin-joung-178042139/`}
        >
          LinkedIn
        </a>
        <a style={{color: 'black'}} href="mailto:damon6291@gmail.com">
          Email: Joung.s@Northeastern.edu
        </a>
        <a style={{color: 'black'}} href="tel:201-856-7857">
          Phone: (201) 856-7857
        </a>
        <p className={styles.site}>Site by Damon Joung</p>
      </div>
    </div>
  );
};

export default Bottom;
