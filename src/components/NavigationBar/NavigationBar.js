import React from "react";
import { Nav, Navbar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinkStyle: {
        "text-decoration": "none",
        color: this.props.color
      }
    };
  }

  render() {
    return (
      <Navbar className="navBarLinks" fixed="bottom">
        <Col>
          <Nav>
            <Nav.Link>
              <Link
                className="navBarLinks"
                style={this.state.navLinkStyle}
                to="/"
              >
                home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="navBarLinks"
                style={this.state.navLinkStyle}
                to="/resume"
              >
                resume
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="navBarLinks"
                style={this.state.navLinkStyle}
                to="/projects"
              >
                projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="navBarLinks"
                style={this.state.navLinkStyle}
                to="/about"
              >
                about
              </Link>
            </Nav.Link>
          </Nav>
        </Col>
      </Navbar>
    );
  }
}
