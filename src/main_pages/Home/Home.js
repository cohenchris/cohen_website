import React, { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "./Home.css";
import "../../helper_functions";
import "../../index.css";
import CoverImg from "../../images/cover.png";
import { useWindowDimensions } from "../../helper_functions";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { width } = useWindowDimensions();

  return (
    <div className="background">
      <NavigationBar />
      <div className="home">
        <div className="cover">
          <img src={CoverImg} alt="" />
        </div>

        <br />
        <br />
        {width >= 650 && (
          <div>
            <h2>Embedded Software Engineering Intern for Qualcomm</h2>
            <h2>Cybersecurity Student at Purdue University</h2>
          </div>
        )}
        {width < 650 && (
          <div>
            <h4>Embedded Software Engineering Intern for Qualcomm</h4>
            <h4>Cybersecurity Student at Purdue University</h4>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
