import React from "react";
import "./App.css";
import { Name, MyInfo, Projects, Skills, Bottom, MyMenu, Hobbies } from "./components";

function App() {
  return (
    <div className="App">
      <MyMenu />
      <Name />
      <MyInfo />
      <Skills />
      <Projects />
      <Hobbies />
      <Bottom />
    </div>
  );
}

export default App;
