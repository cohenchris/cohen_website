import React, { useState } from "react";
import { Nav, Navbar, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import "../../helper_functions";
import { useWindowDimensions } from "../../helper_functions";

export default function NavigationBar(props) {
  const [show, setShow] = useState(false);
  const navLinkStyle = {
    "text-decoration": "none",
    color: props.color
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { width } = useWindowDimensions();
  let bg_color = navLinkStyle.color.localeCompare("white")
    ? "rgba(255, 255, 255, 1)"
    : "rgba(255, 255, 255, 0)";

  if (width >= 650) {
    return (
      <Navbar
        className="navBarLinks"
        fixed="bottom"
        style={{ "background-color": bg_color }}
      >
        <Col>
          <Nav>
            <Nav.Link>
              <Link className="navBarLinks" style={navLinkStyle} to="/">
                home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navBarLinks" style={navLinkStyle} to="/resume">
                resume
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navBarLinks" style={navLinkStyle} to="/projects">
                projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navBarLinks" style={navLinkStyle} to="/about">
                about
              </Link>
            </Nav.Link>
          </Nav>
        </Col>
      </Navbar>
    );
  } else {
    return (
      <Col>
        <Button
          variant={
            props.color.localeCompare("teal") ? "outline-light" : "outline-dark"
          }
          className="menuStyle"
          onClick={handleShow}
        >
          MENU
        </Button>

        <Modal
          show={show}
          size="xl"
          onHide={handleClose}
          className="modalFullscreen"
        >
          <Modal.Body
            className="modalLinks"
            style={{ "text-decoration": "none" }}
          >
            <ul>
              <Link to="/" style={{ "text-decoration": "none" }}>
                <li>home</li>
              </Link>
              <Link to="/resume" style={{ "text-decoration": "none" }}>
                <li>resume</li>
              </Link>
              <Link to="/projects" style={{ "text-decoration": "none" }}>
                <li>projects</li>
              </Link>
              <Link to="/about" style={{ "text-decoration": "none" }}>
                <li>about</li>
              </Link>
            </ul>
          </Modal.Body>
        </Modal>
      </Col>
    );
  }
}
