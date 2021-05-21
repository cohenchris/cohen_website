import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import ProjectCard from "./ProjectCard.js";
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import "./Projects.css";
import "../../index.css";
import ProjectList from "./ProjectList.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Sort types
// name: numProjectsInThatCategory
let CATEGORIES = {
  "all": ProjectList.length,
  "linux": 0,
  "networks": 0,
  "security": 0,
  "web dev": 0,
  "android": 0,
  "extracurricular": 0,
  "professional": 0,
  "school": 0
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


    // Toast to notify users that you can click on project cards
    toast.dark('Click on any tile to learn more!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      progressClassName: 'customToastProgressBar'
    })
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
            <Dropdown.Toggle as={HeaderToggle}>
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

          {/* Used for notifying user that you can click on cards */}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;


// https://react-bootstrap.github.io/components/dropdowns/#custom-dropdown-components


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const HeaderToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="/"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="dropdownHeader"
  >
    {children}
    &#x25bc;
  </a>
));