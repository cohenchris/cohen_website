import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Resume.css";
import { Button } from "react-bootstrap";
import pdf_resume from "../../files/Cohen_Resume_1-10-20.pdf";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resumeBackground">
        <NavigationBar color="teal" />
        <div className="resumeStyle">
          <br />
          <br />
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
                  <p>Security and Software Engineering Tracks</p>
                  <p>Purdue Dean's List and Semester Honors</p>
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
                <strong>Software/Hardware</strong>
              </h5>
              <ul>
                <li>
                  <p>
                    UNIX, VSCode, PyCharm, IntelliJ, VIM, Anaconda, Android
                    Studio, Raspberry Pi
                  </p>
                </li>
              </ul>
              <h5>
                <strong>Computer Programming and Markup</strong>
              </h5>
              <ul>
                <li>
                  <p>
                    Python, C, C++, Java, Bash, ReactJS, ARM Assembly, HTML,
                    CSS, LaTeX
                  </p>
                </li>
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
                Software Engineering Intern | --Coming Summer 2020--
              </p>
              <br />
              <h5>
                <strong>Classes Taken</strong>
              </h5>
              <ul>
                <li>Systems Programming</li>
                <li>Software Engineering</li>
                <li>Data Structures and Algorithms</li>
                <li>Computer Architecture</li>
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
                CS25000 (Computer Architecture) | Aug. 2019 - Present
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
      </div>
    );
  }
}
