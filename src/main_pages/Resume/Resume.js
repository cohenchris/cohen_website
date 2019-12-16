import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Resume.css";
import { Button } from "react-bootstrap";
import pdf_resume from "../../files/Cohen_Resume_9-19-19.pdf";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resumeBackground">
        <div className="resumeStyle">
          <NavigationBar color="teal" />
          <br />
          {/* TODO: ADD CONTAINER SIMILAR TO OTHER PAGES SO MENU DOESN'T FUCK UP */}
          <Button variant="outline-dark" href={pdf_resume}>
            Get Resume
          </Button>
          <br />
          <br />

          <h1
            style={{
              color: "teal",
              "font-family": "Francois One, sans-serif"
            }}
          >
            <strong>RESUME</strong>
          </h1>
        </div>
      </div>
    );
  }
}
