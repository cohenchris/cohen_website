import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Resume.css";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resumeStyle">
        <NavigationBar color="black" />
        <h1>Resume</h1>
      </div>
    );
  }
}
