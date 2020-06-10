import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import ProjectCard from "./ProjectCard.js";
import { Container, Col, Row, Modal } from "react-bootstrap";
import "./Projects.css";
import "../../index.css";
import ProjectList from "./ProjectList.js";

export default function Projects() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Click on any tile to learn more!</Modal.Title>
        </Modal.Header>
      </Modal>
      <NavigationBar />
      <div className="projectsStyle">
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
