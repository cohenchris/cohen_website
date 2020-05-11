/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { Col, Modal } from "react-bootstrap";

const muiBaseTheme = createMuiTheme();

export default function ProjectCard(props) {
  const [show, setShow] = useState(false);

  const modalHide = () => setShow(false);
  const modalShow = () => setShow(true);

  return (
    <Col>
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
        <Card className="card" variant="outlined" onClick={modalShow}>
          {/*<CardMedia className="pic" component="img" src={props.img_src} />*/}
          <CardContent className="content">
            <Typography variant="h4" className="title" gutterBottom>
              {props.title.toUpperCase()}
            </Typography>
            <Typography className="body">{props.desc}</Typography>
          </CardContent>
        </Card>
      </MuiThemeProvider>

      {/* POPUP MODAL FOR EACH PROJECT */}

      <Modal show={show} onHide={modalHide} size="lg">
        <Modal.Header closeButton style={{ "font-family": "Oswald" }}>
          <Modal.Title>{props.fulltitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p dangerouslySetInnerHTML={{ __html: props.body }}></p>
        </Modal.Body>

        <Modal.Footer>{props.timestamp}</Modal.Footer>
      </Modal>
    </Col>
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
