/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Link, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Col, Modal } from "react-bootstrap"

const muiBaseTheme = createMuiTheme();

export default function ProjectCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <Col>
        <MuiThemeProvider theme={createMuiTheme({
          overrides: ProjectCard.getTheme(muiBaseTheme)
        })} >
          <Card className="card" variant="outlined">
              <CardMedia className="pic" component="img" src={props.img_src} />
              <CardContent className="content">
                  <Typography variant="h4" className="title" gutterBottom>
                    {props.title.toUpperCase()}
                  </Typography>
                  <Typography className="body">
                    {props.desc}
                  </Typography>
                  <Typography className="link">
                    <Link onClick={handleShow}>LEARN MORE</Link>
                  </Typography>
              </CardContent>
          </Card>
        </MuiThemeProvider>


      {/* POPUP MODAL FOR EACH PROJECT */}

      <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {props.fulltitle}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p dangerouslySetInnerHTML={{__html: props.body}}></p>
          </Modal.Body>

          <Modal.Footer>
            {props.timestamp}
          </Modal.Footer>
        </Modal>

      </Col>

  );
}


/* THEME FOR MATERIAL-UI */

ProjectCard.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.card": {
        maxWidth: 304,
        position: "relative",
        borderRadius: 50,
        "&:hover": {
          "& .link": {
            transform: "scale(1.2)"
          }
        },
        "& .content": {
          position: "absolute",
          bottom: 0,
          padding: muiBaseTheme.spacing(5),
          color: muiBaseTheme.palette.common.white,
          textAlign: "center",
          "& .body": {
            lineHeight: 1.8,
            letterSpacing: 0.5,
            marginBottom: "40%"
          },
          "& .link": {
            marginBottom: 16,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            letterSpacing: 2
          }
        }
      }
    }
  }
});