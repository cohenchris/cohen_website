import React from "react";
import { Nav, Navbar, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const navLinkStyle = {
  "text-decoration": "none",
  color: "black"
};

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar expand="sm" bg="light" variant="light" className="navBar">
        <Link to="/">
          <Navbar.Brand href="/">CHRIS COHEN</Navbar.Brand>
        </Link>

        <Col>
          <Nav className="float-right">
            <Nav.Link>
              <Link className="navBarLinks" style={navLinkStyle} to="/resume">
                resume
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
  }
}
