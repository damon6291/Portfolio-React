import React from "react";
import Skill from "./Skill.jsx";
import Json from "../../data/Skills.json";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.skill}>Skills</h2>
      <div className={styles.skillContainer}>
        {Json.map((data, i) => (
          <Skill key={i} language={data.language} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
