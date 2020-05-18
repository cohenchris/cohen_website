import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import ProjectCard from "./ProjectCard.js";
import { Container, Col, Row, Toast } from "react-bootstrap";
import "./Projects.css";
import "../../index.css";
import ProjectList from "./ProjectList.js";

export default function Projects() {
  const [showToast, setShowToast] = useState(true);

  const closeToast = () => setShowToast(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background">
      <NavigationBar />

      <div className="projectsStyle">
        <Toast show={showToast} onClose={closeToast}>
          <Toast.Header>
            <strong>Click on a tile to learn more about the project!</strong>
          </Toast.Header>
        </Toast>

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
