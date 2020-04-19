import React from "react";
import { Grid } from "@material-ui/core";
import Project from "./Project.jsx";
import Json from "../../data/Project.json";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.project}>Projects</h2>
      <Grid container spacing={1} justify="center">
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
