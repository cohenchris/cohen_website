import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Footer.css";
import "../../helper_functions";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <br />
      <br />
      <br />

      <Navbar className="footer" variant="dark">
        <Nav className="link">
          <Nav.Link href="https://www.linkedin.com/in/cohenchristopher/">
            LINKEDIN
          </Nav.Link>
          <Nav.Link href="https://github.com/cohenchris">GITHUB</Nav.Link>
        </Nav>

        <Navbar.Brand className="copyright">
          © 2019-{currentYear} Chris Cohen
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
