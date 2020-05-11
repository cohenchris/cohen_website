import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "./Home.css";
import "../../helper_functions";
import "../../index.css";
import CoverImg from "../../images/sideview.jpg";
import { useWindowDimensions } from "../../helper_functions";

export default function Home() {
  let { width } = useWindowDimensions();

  return (
    <div className="background">
      <NavigationBar />
      <div className="home">
        <img
          className={width >= 650 ? "cover" : "coverMobile"}
          src={CoverImg}
          alt="Me in front of the Elliot Hall of Music at Purdue University"
        />
        <br />
        <br />
        <h1>CHRIS COHEN</h1>
        {width >= 650 && (
          <div>
            <h2>Incoming Software Engineering Intern for Qualcomm</h2>
            <h2>Computer Science Student at Purdue University</h2>
          </div>
        )}
        {width < 650 && (
          <div>
            <h4>Incoming Software Engineering Intern for Qualcomm</h4>
            <h4>Computer Science Student at Purdue University</h4>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
