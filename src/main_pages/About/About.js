import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "react-awesome-slider/dist/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import "./About.css";

export default class About extends React.Component {
  render() {
    return (
      <div className="aboutStyle">
        <NavigationBar color="black" />
        <Container>
          <Row>
            <Col lg="auto" md="auto" sm="auto" xs="auto" xl="auto">
              <h3>My name is Chris Cohen</h3>
              <p>I grew up in Chesterfield, Missouri.</p>
              <p>
                I'm currently a junior in Purdue University's Computer Science
                program, intending to focus on a blend of cybersecurity,
                software engineering, and systems programming.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
