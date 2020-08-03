import React, {useRef, useEffect} from 'react';
import {sceneConstructor, sceneController} from '../Animation/Animation';

import styles from './Name.module.css';

const Name = () => {
  let name = useRef(null);
  let job = useRef(null);
  let controller = sceneController();

  useEffect(() => {
    let textScene = sceneConstructor(name, -60, 0, 0.6);
    let jobScene = sceneConstructor(job, 60, 0, 0.6);

    controller.addScene([textScene, jobScene]);
  });

  return (
    <div className={styles.container} id="Name">
      <h1 ref={(e) => (name = e)} className={styles.text}>
        Damon Joung
      </h1>
      <h2 ref={(e) => (job = e)} className={styles.job}>
        Software Developer
      </h2>
    </div>
  );
};

export default Name;
