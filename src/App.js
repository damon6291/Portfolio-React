import React from "react";
import "./App.css";
import { Name, MyInfo, Projects, Skills, Bottom } from "./components";

function App() {
  return (
    <div className="App">
      <Name />
      <MyInfo />
      <Skills />
      <Projects />
      <Bottom />
    </div>
  );
}

export default App;
