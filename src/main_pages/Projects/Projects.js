import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import ProjectCard from "./ProjectCard.js";
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import "./Projects.css";
import "../../index.css";
import ProjectList from "./ProjectList.js";

// Sort types
// name: numProjects
let CATEGORIES = {
  "all": ProjectList.length,
  "linux": 0,
  "networks": 0,
  "security": 0,
  "web dev": 0,
  "android": 0,
  "extracurricular": 0,
  "professional": 0
}

/**
 * Find number of projects for each category
 */
for (let i = 1; i < ProjectList.length; i++) {
  for (const category of ProjectList[i].categories) {
    CATEGORIES[category] = CATEGORIES[category] + 1;
  }
}


const Projects = () => {
  const [sortMethod, setSortMethod] = useState("all");
  const [Projects, setProjects] = useState(ProjectList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sortProjects = (projects) => {
      if (sortMethod === "all") {
        return ProjectList;
      }

      let sorted = [];
      for (let p of projects) {
        if (p.categories.includes(sortMethod)) {
          sorted.push(p);
        }
      }
      return sorted;
    };

    setProjects(sortProjects(ProjectList));
  }, [sortMethod]);

  return (
    <div className="background">
      <NavigationBar />

      <div className="projectsStyle">
        <Container fluid>

          {/* DROPDOWN */}
          <Dropdown className="header">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {sortMethod.toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.entries(CATEGORIES).map((category) => (
                <Dropdown.Item onClick={() => setSortMethod(category[0])}>
                  {category[0].toUpperCase()} ({category[1]})
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <h5 className="header">Click on any tile to learn more!</h5>

          {/* CARDS */}
          <Row>
            {Projects.map((project) => (
              <Col className="m-2">
                <ProjectCard
                  fullTitle={project.fullTitle}
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

export default Projects;