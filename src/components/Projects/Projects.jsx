import React, { useRef, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Project from "./Project.jsx";
import Json from "../../data/Project.json";
import { sceneConstructor, sceneController } from "../Animation/Animation";

import styles from "./Projects.module.css";

const Projects = () => {
  let project = useRef(null);
  let projectImage = useRef(null);
  let controller = sceneController();

  useEffect(() => {
    let projectScene = sceneConstructor(project, 0, 150, 0.6);
    let imageScene = sceneConstructor(projectImage, 0, 60, 0.6);

    controller.addScene([projectScene, imageScene]);
  });
  return (
    <div className={styles.container} id="Projects">
      <h2 ref={(e) => (project = e)} className={styles.project}>
        Projects
      </h2>
      <Grid ref={(e) => (projectImage = e)} container spacing={1} justify="center">
        {Json.map((data, i) => (
          <Project
            key={i}
            title={data.title}
            language={data.language}
            explanation={data.explanation}
            link={data.link}
            demo={data.demo}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
