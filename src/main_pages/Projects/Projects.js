import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js"
import { Container } from "react-bootstrap";
import "./Projects.css";
import ProjectList from "./ProjectList.js"



export default class Projects extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="projectsBackground">
        <NavigationBar color="teal" />

        <div className="projectsStyle">
          <Container fluid>
            {ProjectList.map( (project) => (
              <ProjectCard  fulltitle={project.fulltitle}
                            title={project.title}
                            desc={project.desc}
                            body={project.body}
                            img_src={project.img_src}
                            timestamp={project.timestamp}
                            />
            ))}
          </Container>
        </div>
      </div>
    );
  }
}

