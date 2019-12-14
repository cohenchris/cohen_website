import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projectsStyle">
        <NavigationBar color="black" />
        <h1>Projects</h1>
      </div>
    );
  }
}
