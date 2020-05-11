import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
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
      <div>
        <Navbar>
          <Navbar.Brand className="brand" href="/">
            CHRIS COHEN
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="link" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="link" href="/resume">
              RESUME
            </Nav.Link>
            <Nav.Link className="link" href="/projects">
              PROJECTS
            </Nav.Link>
            <Nav.Link className="link" href="/about">
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar>
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar className="mobileMenu" bg="bg-black" variant="dark">
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
                <ChevronRightIcon style={{ color: "white" }} />
              </IconButton>
            </div>

            <ListItem button key="HOME">
              <a href="/" style={{ "text-decoration": "none", color: "black" }}>
                <ListItemText primary="HOME" />
              </a>
            </ListItem>

            <ListItem button key="PROJECTS">
              <a
                href="/projects"
                style={{ "text-decoration": "none", color: "black" }}
              >
                <ListItemText primary="PROJECTS" />
              </a>
            </ListItem>

            <ListItem button key="RESUME">
              <a
                href="/resume"
                style={{ "text-decoration": "none", color: "black" }}
              >
                <ListItemText primary="RESUME" />
              </a>
            </ListItem>

            <ListItem button key="ABOUT">
              <a
                href="/about"
                style={{ "text-decoration": "none", color: "black" }}
              >
                <ListItemText primary="ABOUT" />
              </a>
            </ListItem>

            <Divider />

            <ListItem button key="EMAIL">
              <a
                href="mailto:chriscohen@chriscohen.dev"
                style={{ "text-decoration": "none", color: "black" }}
              >
                <ListItemText primary="EMAIL" />
              </a>
            </ListItem>

            <ListItem button key="LINKEDIN">
              <a
                href="https://www.linkedin.com/in/chris-cohen-purdue/"
                style={{ "text-decoration": "none", color: "black" }}
              >
                <ListItemText primary="LINKEDIN" />
              </a>
            </ListItem>

            <ListItem button key="GITHUB">
              <a
                href="https://github.com/cohenchris"
                style={{ "text-decoration": "none", color: "black" }}
              >
                <ListItemText primary="GITHUB" />
              </a>
            </ListItem>
          </Drawer>
        </Navbar>
        <br />
      </div>
    );
  }
}
