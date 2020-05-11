import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "./Home.css";
import "../../helper_functions";
import "../../index.css";

export default function Home() {
  return (
    <div className="background">
      <NavigationBar />
      <div className="home">
        <h1>Hi, I'm Chris Cohen</h1>
        <br />
        <h5>Incoming Software Engineering Intern for Qualcomm</h5>
        <h5>Computer Science student at Purdue University</h5>
      </div>
      <Footer />
    </div>
  );
}
