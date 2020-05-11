import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import "./NavigationBar.css";
import "../../helper_functions";
import { useWindowDimensions } from "../../helper_functions";

export default function NavigationBar(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  let { width } = useWindowDimensions();
  let bg_color = props.color.localeCompare("white")
    ? "rgba(255, 255, 255, 1)"
    : "rgba(255, 255, 255, 0)";

  if (width >= 650) {
    return (
      <div>
        <Navbar style={{ "background-color": bg_color }} className="brand">
          <Navbar.Brand className="brand" href="/">
            CHRIS COHEN
          </Navbar.Brand>

          <Nav className="link">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/resume">RESUME</Nav.Link>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
        </Navbar>
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar className="mobileMenu" bg="bg-black" variant="dark">
          <Navbar.Brand className="mobileBrand" href="/">
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
              <ListItemText primary="HOME" />
              <ListItemIcon>{}</ListItemIcon>
            </ListItem>

            <ListItem button key="PROJECTS">
              <ListItemText primary="PROJECTS" />
              <ListItemIcon>{}</ListItemIcon>
            </ListItem>

            <ListItem button key="RESUME">
              <ListItemText primary="RESUME" />
              <ListItemIcon>{}</ListItemIcon>
            </ListItem>

            <ListItem button key="ABOUT">
              <ListItemText primary="ABOUT" />
              <ListItemIcon>{}</ListItemIcon>
            </ListItem>

            <Divider />

            <ListItem button key="EMAIL">
              <ListItemText primary="EMAIL" />
              <ListItemIcon>{}</ListItemIcon>
            </ListItem>

            <ListItem button key="LINKEDIN">
              <ListItemText primary="LINKEDIN" />
              <ListItemIcon>{}</ListItemIcon>
            </ListItem>

            <ListItem button key="GITHUB">
              <ListItemText primary="GITHUB" />
              <ListItemIcon>{}</ListItemIcon>
            </ListItem>
          </Drawer>
        </Navbar>
        <br />
      </div>
    );
  }
}
