import React, { useRef, useState, useEffect } from "react";
import { sceneConstructor, sceneController } from "../Animation/Animation";
import Skill from "./Skill.jsx";
import Json from "../../data/Skills.json";

import styles from "./Skills.module.css";

const Skills = () => {
  const [lan, setLan] = useState("");
  let skill = useRef(null);
  let skillImage = useRef(null);
  let controller = sceneController();
  let text = useRef(null);

  useEffect(() => {
    let skillScene = sceneConstructor(skill, 0, 150, 0.6);
    let imageScene = sceneConstructor(skillImage, 0, 60, 0.6);
    let textScene = sceneConstructor(text, 0, 60, 0.6);

    controller.addScene([skillScene, imageScene, textScene]);
  }, []);

  const handleHover = async (language) => {
    setLan(language);
  };

  const findDescription = (language) => {
    var rv = "";
    Json.find(function (data) {
      if (data.language === language) {
        rv = data.description;
      }
      return rv;
    });
    return rv;
  };

  const showExplanation = () => {
    return lan ? findDescription(lan) : "Hover over Image to see Descriptions!";
  };

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={styles.container} id="Skills">
      <h2 ref={(e) => (skill = e)} className={styles.skill}>
        Skills
      </h2>
      <div ref={(e) => (skillImage = e)} className={styles.skillContainer}>
        {Json.map((data, i) => (
          <Skill key={i} language={data.language} handleHover={handleHover} />
        ))}
      </div>
      <h4>{Capitalize(lan)}</h4>
      <p ref={(e) => (text = e)} className={styles.text}>
        {showExplanation()}
      </p>
    </div>
  );
};

export default Skills;
