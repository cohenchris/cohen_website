import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Footer.css";
import "../../helper_functions";

export default function Footer() {
  return (
    <div>
      <br />
      <br />
      <br />

      <Navbar className="footer" variant="dark">
        <Nav className="link">
          <Nav.Link href="mailto:chris@chriscohen.dev">EMAIL</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/cohenchristopher/">
            LINKEDIN
          </Nav.Link>
          <Nav.Link href="https://github.com/cohenchris">GITHUB</Nav.Link>
        </Nav>

        <Navbar.Brand className="copyright">
          © 2019-2021 Chris Cohen
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
