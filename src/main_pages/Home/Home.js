import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "./Home.css";
import "../../helper_functions";
import "../../index.css";
import cover from "../../images/cover.png";
import { useWindowDimensions } from "../../helper_functions";

// Detects if user is using Internet Explorer
var isIE = false || !!document.documentMode;

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { width } = useWindowDimensions();

  return (
    <div className="background">
      <NavigationBar />
      <div className="home">
        {isIE && <IEModal />}
        <div className="cover">
          <img src={cover} alt="" />
        </div>

        <br />
        <br />
        {width >= 650 && (
          <div>
            <h2>Software Engineer for Qualcomm</h2>
            <h2>Cybersecurity Student at Purdue University</h2>
          </div>
        )}
        {width < 650 && (
          <div>
            <h4>Software Engineer for Qualcomm</h4>
            <h4>Cybersecurity Student at Purdue University</h4>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function IEModal() {
  const [show, setShow] = useState(isIE);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Attention</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You seem to be using Internet Explorer to view this webpage. For
        compatibility, I have allowed Internet Explorer users to see this
        webpage, but ReactJS does not work well with it. Please switch to a more
        compatible browser for optimal viewing. Chrome and Firefox are the best
        choices, but Edge or Safari both work too.
      </Modal.Body>
    </Modal>
  );
}
