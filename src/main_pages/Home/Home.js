import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import "./Home.css";
import Email from "../../images/email.png";
import LinkedIn from "../../images/linkedin.png";
import GitHub from "../../images/github.png";
import Skydiving1 from "../../images/Skydiving1.jpg";
import Skydiving1_mobile from "../../images/Skydiving1_mobile.jpg";
import "../../helper_functions";
import { useWindowDimensions } from "../../helper_functions";

export default function Home() {
  let { width } = useWindowDimensions();

  let bg_image = width > 650 ? Skydiving1 : Skydiving1_mobile;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        "background-image": `url(${bg_image})`
      }}
      className="homeStyle"
    >
      <NavigationBar color="white" />
      {width < 650 && (
        <div className="contactInfoMobile">
          <ContactInfo />
        </div>
      )}
      <div className={width >= 650 ? "homeText" : "homeTextMobile"}>
        <h1>Hi, I'm Chris Cohen</h1>
        <br />
        <h5>Incoming Software Engineering Intern for Qualcomm</h5>
        <h5>Computer Science student at Purdue University</h5>
        {width >= 650 && (
          <div>
            <br />
            <ContactInfo />
          </div>
        )}
      </div>
    </div>
  );
}

const ContactInfo = () => {
  return (
    <div>
      <a href="mailto:chriscohen@chriscohen.dev">
        <img src={Email} width="40" alt="Email" hspace="10" />
      </a>
      <a href="https://www.linkedin.com/in/chris-cohen-purdue/">
        <img src={LinkedIn} width="40" alt="LinkedIn" hspace="10" />
      </a>
      <a href="https://github.com/cohenchris">
        <img src={GitHub} width="40" alt="GitHub" hspace="10" />
      </a>
    </div>
  );
};
