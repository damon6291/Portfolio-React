import React from "react";

import styles from "./Skill.module.css";

const Skill = ({ language }) => {
  const findImage = () => {
    if (language === "java") return require("../../assets/java.jpg");
    if (language === "react") return require("../../assets/react.jpg");
    if (language === "javaScript") return require("../../assets/javaScript.jpg");
    if (language === "c") return require("../../assets/c.jpg");
    if (language === "mysql") return require("../../assets/mysql.jpg");
  };
  return (
    <div className={styles.container}>
      <img src={findImage()} className={styles.image} />
    </div>
  );
};

export default Skill;
