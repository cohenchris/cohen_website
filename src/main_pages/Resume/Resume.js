import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "./Resume.css";
import "../../index.css";
import { Button } from "react-bootstrap";
import pdf_resume from "../../files/resume.pdf";

export default class Resume extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="background">
        <NavigationBar color="black" highlight="resume" />
        <div className="resumeStyle">
          <ul>
            <li>
              <Button variant="outline-dark" href={pdf_resume}>
                See Full Resume
              </Button>
            </li>
            <br />
            <li>
              <h3>
                <strong>Education</strong>
              </h3>
            </li>
            <div>
              <h5>
                <strong>Purdue University</strong>
              </h5>
              <ul>
                <li>
                  <p>
                    Bachelor's Degree in Computer Science -{" "}
                    <strong>3.83 GPA</strong>
                  </p>
                  <p>Cybersecurity and Software Engineering Tracks</p>
                  <p>6x Dean's List and 5x Semester Honors</p>
                </li>
              </ul>
            </div>
            <br />
            <br />
            <li>
              <h3>
                <strong>Technical Skills</strong>
              </h3>
            </li>
            <div>
              <h5>
                <strong>Languages</strong>
              </h5>
              <ul>
                <li>
                  <p>
                    C, C++, Python, ARM Assembly, x86 Assembly, Bash,
                    Javascript, HTML/CSS, LaTeX
                  </p>
                </li>
              </ul>

              <h5>
                <strong>Memory Management</strong>
              </h5>
              <ul>
                <li>Paging, Virtualization</li>
                <li>Cache Memory Hierarchy</li>
                <li>Stack and Heap Management for ARM and x86</li>
              </ul>

              <h5>
                <strong>OS and Systems Programming</strong>
              </h5>
              <ul>
                <li>Software/Hardware Interrupts and Device Management</li>
                <li>Asynchronous Inter-Process Communication</li>
                <li>Return-Oriented Programming</li>
                <li>
                  Concurrency and Parallelism (Semaphores, Locks, Forking,
                  Threading, Scheduling)
                </li>
              </ul>

              <h5>
                <strong>OSI/ISO 7-Layer Model</strong>
              </h5>
              <ul>
                <li>TCP, UDP, HTTP</li>
                <li>IP addressing/routing, DHCP, DNS translation</li>
                <li>MAC addressing/routing, ARP</li>
                <li>Basic cryptography and security approaches</li>
              </ul>
            </div>
            <br />
            <br />

            <li>
              <h3>
                <strong>Professional/Technical Experience</strong>
              </h3>
            </li>
            <div>
              <h5>
                <strong>Naval Surface Warfare Center, Crane Division</strong>
              </h5>
              <p style={{ "font-size": "14px", color: "teal" }}>
                Software Engineering Intern | May 2019 - Aug. 2019
              </p>
              <br />
              <h5>
                <strong>Qualcomm, QGOV Division</strong>
              </h5>
              <p style={{ "font-size": "14px", color: "teal" }}>
                Software Engineering Intern | May 2020 - Present
              </p>
              <br />
              <h5>
                <strong>Classes Taken</strong>
              </h5>
              <ul>
                <li>Computer Architecture</li>
                <li>Data Structures and Algorithms</li>
                <li>Systems Programming</li>
                <li>Software Engineering</li>
                <li>Operating Systems</li>
                <li>Computer Networks</li>
              </ul>
            </div>
            <br />
            <br />

            <li>
              <h3>
                <strong>Extracurricular Involvement</strong>
              </h3>
            </li>
            <div>
              <h5>
                <strong>
                  Purdue University Undergraduate Teaching Assistant
                </strong>
              </h5>
              <p style={{ "font-size": "14px", color: "teal" }}>
                CS25000 (Computer Architecture) | Aug. 2019 - May 2020
              </p>
              <br />
              <h5>
                <strong>
                  Purdue University Special Interest Group App Club
                </strong>
              </h5>
              <p style={{ "font-size": "14px", color: "teal" }}>
                Software Developer | Aug. 2018 - December 2019
              </p>
            </div>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
