import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Footer.css";
import "../../helper_functions";

export default function Footer() {
  return (
    <Navbar className="footer" variant="dark">
      <Nav className="link">
        <Nav.Link href="mailto:chriscohen@chriscohen.dev">EMAIL</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/chris-cohen-purdue/">
          LINKEDIN
        </Nav.Link>
        <Nav.Link href="https://github.com/cohenchris">GITHUB</Nav.Link>
      </Nav>

      <Navbar.Brand className="copyright">
        © 2019-2020 Chris Cohen. All rights reserved.
      </Navbar.Brand>
    </Navbar>
  );
}
