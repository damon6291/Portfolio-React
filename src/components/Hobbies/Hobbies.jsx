import React from "react";
import camping from "../../assets/camping.jpg";
import rockclimbing from "../../assets/rockclimbing.jpg";
import workout from "../../assets/workout.jpg";
import cooking from "../../assets/butchering.jpg";

import styles from "./Hobbies.module.css";
import cx from "classnames";

const Hobbies = () => {
  return (
    <div className={styles.container} id="Hobbies">
      <h2 className={styles.skill}>Hobbies</h2>
      <div className={styles.hobbiesContainer}>
        <div className={styles.text}>
          <img src={camping} className={styles.image} alt="camping" />
          <h3>Camping</h3>
          <h5 className={styles.explanation}>Love to Grill outdoor!</h5>
        </div>
        <div className={styles.text}>
          <img src={cooking} className={cx(styles.image, styles.rotation)} alt="cooking" />
          <h3>Cooking</h3>
          <h5 className={styles.explanation}>Enjoy cooking healthy & delicious meals</h5>
        </div>
        <div className={styles.text}>
          <img src={rockclimbing} className={styles.image} alt="rockclimbing" />
          <h3>Rock Climbing</h3>
          <h5 className={styles.explanation}>Excited to reach the goal</h5>
        </div>
        <div className={styles.text}>
          <img src={workout} className={cx(styles.image, styles.rotation)} alt="workout" />
          <h3>Workout</h3>
          <h5 className={styles.explanation}>Like to stay fit and healty</h5>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
