/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { Modal } from "react-bootstrap";
import "./Projects.css";

const muiBaseTheme = createMuiTheme();

export default function ProjectCard(props) {
  const [show, setShow] = useState(false);

  const modalHide = () => setShow(false);
  const modalShow = () => setShow(true);

  return (
    <div>
      <MuiThemeProvider
        theme={createMuiTheme({
          palette: {
            type: "dark",
          },
          overrides: ProjectCard.getTheme(muiBaseTheme),
          typography: {
            fontFamily: "Oswald",
          },
        })}
      >
        <Card
          className="card"
          variant="outlined"
          onClick={modalShow}
          style={{ "background-color": "#262522" }}
        >
          <CardContent className="content">
            <Typography variant="h4" className="title">
              {props.title.toUpperCase()}
            </Typography>
            <Typography variant="h7" className="subtitle" gutterBottom>
              {props.subtitle.toUpperCase()}
            </Typography>
            <Typography className="body">{props.desc}</Typography>
          </CardContent>
        </Card>
      </MuiThemeProvider>

      {/* POPUP MODAL FOR EACH PROJECT */}
      <div className="popupDescription">
        <Modal show={show} onHide={modalHide} size="lg">
          <Modal.Header closeButton style={{ "font-family": "Oswald" }}>
            <Modal.Title>
              <strong>{props.fulltitle}</strong>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="popupDescription">
            <p dangerouslySetInnerHTML={{ __html: props.body }}></p>
          </Modal.Body>

          <Modal.Footer className="popupDescription">
            {props.timestamp}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

/* THEME FOR MATERIAL-UI */

ProjectCard.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      "&.card": {
        width: 300,
        height: 300,
        position: "relative",
        borderRadius: 0,
        "&:hover": {
          transition: "0.75s cubic-bezier(0.2,0.2,1.2,1.2)",
          transform: "scale(1.04)",
        },
        "& .content": {
          position: "absolute",
          padding: muiBaseTheme.spacing(4),
          color: muiBaseTheme.palette.common.white,
          textAlign: "center",
          "& .body": {
            lineHeight: 1.5,
            letterSpacing: 1,
            marginBottom: "10%",
          },
        },
      },
    },
  },
});
