import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Drawer, IconButton, ListItem, Divider } from "@material-ui/core";
import "./NavigationBar.css";
import "../../helper_functions";
import { useWindowDimensions } from "../../helper_functions";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  let { width } = useWindowDimensions();

  if (width >= 650) {
    return (
      // DESKTOP MENU
      <div>
        <Navbar className="desktopnav">
          <Navbar.Brand className="brand" href="/">
            CHRIS COHEN
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="link">
              <Link to="/">HOME</Link>
            </Nav.Link>
            <Nav.Link className="link" href="/resume">
              <Link to="/resume">RESUME</Link>
            </Nav.Link>
            <Nav.Link className="link" href="/projects">
              <Link to="/projects">PROJECTS</Link>
            </Nav.Link>
            <Nav.Link className="link" href="/about">
              <Link to="/about">ABOUT</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <br />
      </div>
    );
  } else {
    // MOBILE MENU
    return (
      <div>
        <Navbar className="mobileMenu" variant="dark">
          <Navbar.Brand className="mr-auto" href="/">
            CHRIS COHEN
          </Navbar.Brand>
          <IconButton onClick={handleOpen}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Drawer
            variant="temporary"
            open={open}
            onClose={handleClose}
            anchor="right"
          >
            <div>
              <IconButton onClick={handleClose}>
                <ChevronRightIcon style={{ color: "black" }} />
              </IconButton>
            </div>

            <ListItem className="link" button key="HOME">
              <Link to="/">HOME</Link>
            </ListItem>

            <ListItem className="link" button key="PROJECTS">
              <Link to="/projects">PROJECTS</Link>
            </ListItem>

            <ListItem className="link" button key="RESUME">
              <Link to="/resume">RESUME</Link>
            </ListItem>

            <ListItem className="link" button key="ABOUT">
              <Link to="/about">ABOUT</Link>
            </ListItem>

            <Divider />

            <ListItem className="link" button key="EMAIL">
              <a href="mailto:chriscohen@chriscohen.dev">EMAIL</a>
            </ListItem>

            <ListItem className="link" button key="LINKEDIN">
              <a href="https://www.linkedin.com/in/chris-cohen-purdue/">
                LINKEDIN
              </a>
            </ListItem>

            <ListItem className="link" button key="GITHUB">
              <a href="https://github.com/cohenchris">GITHUB</a>
            </ListItem>
          </Drawer>
        </Navbar>
        <br />
      </div>
    );
  }
}
