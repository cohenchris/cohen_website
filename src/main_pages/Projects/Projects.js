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
            <Row noGutters />
            <Row>
              {ProjectList.map((project) => (
                <Col lg="2" md="6" sm="12" className="mb-2">
                  <ProjectCard
                    fulltitle={project.fulltitle}
                    title={project.title}
                    desc={project.desc}
                    body={project.body}
                    img_src={project.img_src}
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
