import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "react-awesome-slider/dist/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import "./About.css";
import "../../index.css";
import Me from "../../images/me.jpg";
import { useWindowDimensions } from "../../helper_functions";

export default function About() {
  let { width } = useWindowDimensions();

  return (
    <div className="background">
      <NavigationBar />

      <div className="aboutStyle">
        <h2>Hi, I'm Chris Cohen</h2>
        <br />
        <p>
          I'm currently a junior in Purdue University's Computer Science
          program, focusing on a blend of cyber security, software engineering,
          and systems programming.
        </p>

        <p>
          I pride myself on having experience with a multitude of programming
          and markup languages, though my primary experience lies in low-level
          work like C and Assembly. I am particularly interested in fields
          concerning systems programming, embedded systems, or cyber security.
          During the Summer of 2020, I will be remotely interning for Qualcomm,
          where I will be working in embedded software engineering.
        </p>

        <p>
          Fortunately, I have other hobbies besides Computer Science. Being from
          St. Louis, I consider myself a huge foodie. One of my favorite things
          to do is revive old family recipes and tweak them to perfection. One
          of my favorite hobbies, though, is playing the cello, which I have
          done for 11 years. I currently play in the Purdue Symphony Orchestra.
        </p>
        <img
          className={width >= 650 ? "me" : "meMobile"}
          src={Me}
          alt="Me in front of the Elliot Hall of Music at Purdue University"
        />
      </div>

      <Footer />
    </div>
  );
}
