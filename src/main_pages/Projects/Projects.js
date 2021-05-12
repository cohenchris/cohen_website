import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import ProjectCard from "./ProjectCard.js";
import { Container, Col, Row, Dropdown, DropdownItem } from "react-bootstrap";
import "./Projects.css";
import "../../index.css";
import ProjectList from "./ProjectList.js";

// Sort types
const ALL = "all";
const LINUX = "linux";
const NETWORKS = "networks";
const WEBDEV = "web dev";
const FUN = "fun";
const ANDROID = "android";
const MISC = "misc";

export default function Projects() {
  const [sortMethod, setSortMethod] = useState(ALL);
  const [Projects, setProjects] = useState(ProjectList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sortProjects = (projects) => {
      if (sortMethod === ALL) {
        return ProjectList;
      }

      let sorted = [];
      for (let p of projects) {
        if (p.category === sortMethod) {
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
          <Dropdown className="header">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {sortMethod.toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortMethod(ALL)}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortMethod(LINUX)}>
                Linux
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortMethod(NETWORKS)}>
                Networks
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortMethod(WEBDEV)}>
                Web Dev
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortMethod(FUN)}>
                Fun
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortMethod(ANDROID)}>
                Android
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortMethod(MISC)}>
                Misc
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h5 className="header">Click on any tile to learn more!</h5>
          <Row>
            {Projects.map((project) => (
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
