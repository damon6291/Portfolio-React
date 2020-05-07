import React from "react";
import { CardContent, Typography, CardMedia, Button } from "@material-ui/core";

import Flippy, { FrontSide, BackSide } from "react-flippy";
import cx from "classnames";

import styles from "./Project.module.css";

const Project = ({ title, language, explanation, link, demo }) => {
  const findImage = () => {
    if (title === "CoronaTracker") return require("../../assets/corona.webp");
    if (title === "Movie") return require("../../assets/movie.webp");
    if (title === "Weather") return require("../../assets/weather.webp");
    if (title === "HackerNews") return require("../../assets/hacker.webp");
    if (title === "Visualization") return require("../../assets/vis.webp");
    if (title === "ShellToken") return require("../../assets/shell.webp");
    if (title === "HajuKitchen") return require("../../assets/haju.jpg");
  };

  const isDemo = () => {
    if (demo === "") return <div></div>;
    else
      return (
        <Button
          variant="contained"
          color="primary"
          className={cx(styles.button, styles.lightblue)}
          href={demo}>
          Demo
        </Button>
      );
  };

  return (
    <Flippy
      flipOnHover={true}
      flipDirection="horizontal"
      style={{
        width: "250px",
        height: "300px",
        margin: "3%",
        backgroundColor: "rgba(232, 233, 230, 1)",
      }}>
      <FrontSide animationDuration="1000" style={{ backgroundColor: "white" }}>
        <CardMedia style={{ height: 0, paddingTop: "50%" }} image={findImage()} />
        <CardContent>
          <Typography align="center" gutterBottom variant="h6">
            {title} ({language})
          </Typography>
          <Typography align="center" variant="body2" color="textSecondary" component="p">
            {explanation}
          </Typography>
        </CardContent>
      </FrontSide>
      <BackSide
        animationDuration="1000"
        style={{
          backgroundColor: "#92a8d1",
        }}>
        <div className={styles.back}>
          <CardContent>
            <Typography className={styles.title} align="center" gutterBottom variant="h5">
              {title}
            </Typography>
            <div className={styles.buttonContainer}>
              {isDemo()}
              <Button
                variant="contained"
                color="default"
                className={cx(styles.button, styles.blue)}
                href={link}>
                Link
              </Button>
            </div>
          </CardContent>
        </div>
      </BackSide>
    </Flippy>
  );
};

export default Project;
