import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "react-awesome-slider/dist/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import "./About.css";
import ChicagoNavyPier from "../../images/ChicagoNavyPierCropped.jpg";

export default class About extends React.Component {
  render() {
    return (
      <div className="aboutBackground">
        <div className="aboutStyle">
          <Container>
            <Row>
              <NavigationBar color="teal" />
              <Col>
                <img
                  height="548.5"
                  width="306.5"
                  src={ChicagoNavyPier}
                  alt="Me at Chicago's Navy Pier"
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
                    Summer of 2020, I will be interning for Qualcomm in San
                    Diego, where I will be working in that type of field.
                  </p>

                  <p>
                    This field can consume your life if you let it, so I make
                    sure that I keep mine well-balanced. Being from St. Louis, I
                    love to eat and cook different types of food. One of my
                    favorite things to do is revive old family recipes and tweak
                    them to perfection. My favorite stress-relieving hobby,
                    though, has to be playing the cello, which I have done for
                    11 years. I currently play in the Purdue Symphony Orchestra.
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
