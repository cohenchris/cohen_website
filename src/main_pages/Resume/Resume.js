import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Resume.css";
import { Button } from "react-bootstrap";
import pdf_resume from "../../files/Cohen_Resume_9-19-19.pdf";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resumeBackground">
        <NavigationBar color="black" />
        <div className="resumeStyle">
          <br />
          <Button variant="outline-info" href={pdf_resume}>
            Get Resume
          </Button>
        </div>
      </div>
    );
  }
}
