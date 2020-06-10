import React, { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import ProjectCard from "./ProjectCard.js";
import { Container, Col, Row } from "react-bootstrap";
import "./Projects.css";
import "../../index.css";
import ProjectList from "./ProjectList.js";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background">

      <NavigationBar />
      <div className="projectsStyle">
        <h1 className="header">Click on any tile to learn more!</h1>
        <Container fluid>
          <Row>
            {ProjectList.map((project) => (
              <Col className="m-2">
                <ProjectCard
                  fulltitle={project.fulltitle}
                  title={project.title}
                  subtitle={project.subtitle}
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
