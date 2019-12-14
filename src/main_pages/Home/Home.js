import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Home.css";
import Email from "../../images/email.png";
import LinkedIn from "../../images/linkedin.png";
import GitHub from "../../images/github.png";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%"
      }}
      className="homeStyle"
    >
      <NavigationBar color="white" />
      <div className="homeText">
        <h1>Hi, I'm Chris Cohen</h1>
        <br />
        <h5>Incoming Software Engineering Intern for Qualcomm</h5>
        <h5>Computer Science student at Purdue University</h5>
        <br />
        <a href="https://mailto:christopher.ryan.cohen@gmail.com">
          <img src={Email} width="2%" alt="Email" />
        </a>
        {"        "}
        <a href="https://www.linkedin.com/in/chris-cohen-purdue/">
          <img src={LinkedIn} width="2%" alt="LinkedIn" />
        </a>
        {"        "}
        <a href="https://github.com/cohenchris">
          <img src={GitHub} width="2%" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}
