import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "react-awesome-slider/dist/styles.css";
import "./About.css";
import "../../index.css";
import Me from "../../images/me.jpg";

export default function About() {
  return (
    <div className="background">
      <NavigationBar />

      <div className="aboutStyle">
        <h2>Hi, I'm Chris Cohen</h2>
        <br />
        <p>
          I'm currently a senior in Purdue University's Computer Science
          program, specializing in a blend of cyber security, software
          engineering, and systems programming.
        </p>

        <p>
          I pride myself on having experience with a multitude of programming
          and markup languages, though my primary experience lies in low-level
          work like C and Assembly. I am particularly interested in fields
          concerning systems programming, embedded systems, or cyber security.
          During the Summer of 2020, I will be remotely interning for Qualcomm,
          where I will be working with embedded software engineering.
        </p>

        <p>
          Fortunately, I have other hobbies besides Computer Science. Being from
          St. Louis, I consider myself a foodie. I love experimenting in the
          kitchen on my own and trying foods from all sorts of different
          cultures. One of my favorite hobbies, though, is playing the cello,
          which I have done for 11 years. I currently play in the Purdue
          Symphony Orchestra.
        </p>
        <p>
          Feel free to reach out and contact me! Information is located in the
          footer.
        </p>
      </div>
      <div className="me">
        <img src={Me} alt="" />
      </div>

      <Footer />
    </div>
  );
}
