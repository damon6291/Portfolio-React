import React from "react";

import styles from "./Skill.module.css";

const Skill = ({ language, handleHover }) => {
  const findImage = () => {
    if (language === "java") return require("../../assets/java.webp");
    if (language === "react") return require("../../assets/react.webp");
    if (language === "javaScript") return require("../../assets/javaScript.webp");
    if (language === "c") return require("../../assets/c.webp");
    if (language === "mysql") return require("../../assets/mysql.webp");
  };
  return (
    <div className={styles.container}>
      <img
        alt={language}
        src={findImage()}
        className={styles.image}
        onMouseEnter={() => handleHover(language)}
      />
    </div>
  );
};

export default Skill;
