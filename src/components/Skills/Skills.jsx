import React, { Component } from "react";
import Skill from "./Skill.jsx";
import Json from "../../data/Skills.json";

import styles from "./Skills.module.css";

class Skills extends Component {
  state = {
    language: "",
  };

  handleHover = async (language) => {
    this.setState({ language });
  };

  findDescription = (language) => {
    var rv = "";
    Json.find(function (data) {
      if (data.language === language) {
        rv = data.description;
      }
      return rv;
    });
    return rv;
  };

  showExplanation = () => {
    const { language } = this.state;
    return language ? this.findDescription(language) : "Hover over Image to see Descriptions";
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div className={styles.container} id="Skills">
        <h2 className={styles.skill}>Skills</h2>
        <div className={styles.skillContainer}>
          {Json.map((data, i) => (
            <Skill key={i} language={data.language} handleHover={this.handleHover} />
          ))}
        </div>
        <h4>{this.Capitalize(this.state.language)}</h4>
        <p className="">{this.showExplanation()}</p>
      </div>
    );
  }
}

export default Skills;
