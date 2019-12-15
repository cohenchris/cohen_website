import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projectsBackground">
        <NavigationBar color="black" />

        <div className="projectsStyle">
          <h1>PROJECTS</h1>
        </div>
      </div>
    );
  }
}
