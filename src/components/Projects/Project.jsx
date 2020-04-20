import React from "react";
import { CardContent, Typography, CardMedia, Button } from "@material-ui/core";

import Flippy, { FrontSide, BackSide } from "react-flippy";

import styles from "./Project.module.css";

const Project = ({ title, language, explanation, link, demo }) => {
  const findImage = () => {
    if (title === "CoronaTracker") return require("../../assets/corona.jpg");
    if (title === "Movie") return require("../../assets/movie.jpg");
    if (title === "Weather") return require("../../assets/weather.jpg");
    if (title === "HackerNews") return require("../../assets/hacker.jpg");
    if (title === "Visualization") return require("../../assets/vis.jpg");
    if (title === "ShellToken") return require("../../assets/shell.jpg");
  };
  const linkOrDemo = () => {
    if (link === "") return "Demo";
    else return "Link";
  };
  const reference = () => {
    if (link === "") return demo;
    else return link;
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
            <Typography align="center" gutterBottom variant="h5">
              {title}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              href={reference()}>
              {linkOrDemo()}
            </Button>
          </CardContent>
        </div>
      </BackSide>
    </Flippy>
  );
};

export default Project;
