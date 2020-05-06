import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "react-awesome-slider/dist/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import "./About.css";
import Me from "../../images/me.png";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="aboutBackground">
        <br/>
        <br/>
        <div>
          <Container className="aboutStyle">
            <Row>
              <Col lg="auto" md="auto" sm="auto" xl="auto" xs="auto">
              <NavigationBar color="teal" />
                <img
                  width="370px"
                  height="auto"
                  src={Me}
                  alt="Me in front of the Elliot Hall of Music at Purdue University"
                />
              </Col>
              <Col>
                <div className="paragraph">
                  <h2
                    style={{
                      color: "teal",
                      "font-family": "Francois One, sans-serif"
                    }}
                  >
                    My name is Chris Cohen
                  </h2>
                  <br />
                  <p>
                    I'm currently a junior in Purdue University's Computer
                    Science program, focusing on a blend of cyber security,
                    software engineering, and systems programming.
                  </p>

                  <p>
                    I pride myself on having experience with a multitude of
                    programming and markup languages, though my primary
                    experience lies in low-level work like C and Assembly. I am
                    particularly interested in fields concerning systems
                    programming, embedded systems, or cyber security. During the
                    Summer of 2020, I will be remotely interning for Qualcomm, 
                    where I will be working in embedded software engineering.
                  </p>

                  <p>
                    Fortunately, I have other hobbies besides Computer Science.
                    Being from St. Louis, I consider myself a huge foodie. One 
                    of my favorite things to do is revive old family recipes and 
                    tweak them to perfection. One of my favorite hobbies, though,
                    is playing the cello, which I have done for 11 years. I currently
                    play in the Purdue Symphony Orchestra.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
