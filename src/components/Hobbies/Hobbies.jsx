import React, {useRef, useEffect} from 'react';
import {sceneConstructor, sceneController} from '../Animation/Animation';
import camping from '../../assets/camping.webp';
import rockclimbing from '../../assets/rockclimbing.webp';
import workout from '../../assets/workout.webp';
import cooking from '../../assets/butchering.webp';

import styles from './Hobbies.module.css';
import cx from 'classnames';

const Hobbies = () => {
  let hobby = useRef(null);
  let hobbyImage = useRef(null);
  let controller = sceneController();

  useEffect(() => {
    let hobbyScene = sceneConstructor(hobby, 0, 150, 0.6);
    let imageScene = sceneConstructor(hobbyImage, 0, 60, 0.6);

    controller.addScene([hobbyScene, imageScene]);
  }, []);
  return (
    <div className={styles.container} id="Hobbies">
      <h2 ref={(e) => (hobby = e)} className={styles.skill}>
        Hobbies
      </h2>
      <div ref={(e) => (hobbyImage = e)} className={styles.hobbiesContainer}>
        <div className={styles.text}>
          <img src={camping} className={styles.image} alt="camping" />
          <h3>Camping</h3>
          <h5 className={styles.explanation}>Love to Grill outdoor!</h5>
        </div>
        <div className={styles.text}>
          <img src={cooking} className={styles.image} alt="cooking" />
          <h3>Cooking</h3>
          <h5 className={styles.explanation}>Enjoy cooking healthy & delicious meals</h5>
        </div>
        <div className={styles.text}>
          <img src={rockclimbing} className={styles.image} alt="rockclimbing" />
          <h3>Rock Climbing</h3>
          <h5 className={styles.explanation}>Excited to reach the goal</h5>
        </div>
        <div className={styles.text}>
          <img src={workout} className={styles.image} alt="workout" />
          <h3>Workout</h3>
          <h5 className={styles.explanation}>Like to stay fit and healty</h5>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
