import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import ProjectCard from "./ProjectCard.js";
import { Container, Col, Row } from "react-bootstrap";
import "./Projects.css";
import "../../index.css";
import ProjectList from "./ProjectList.js";

export default class Projects extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="background">
        <NavigationBar />

        <div className="projectsStyle">
          <Container fluid>
            <Row>
              {ProjectList.map((project) => (
                <Col className="m-2">
                  <ProjectCard
                    fulltitle={project.fulltitle}
                    title={project.title}
                    desc={project.desc}
                    body={project.body}
                    timestamp={project.timestamp}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
