import React, { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
// import "react-awesome-slider/dist/styles.css";
import "./About.css";
import "../../index.css";
import me from "../../images/me.jpg";

import { useWindowDimensions } from "../../helper_functions";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { width } = useWindowDimensions();

  return (
    <div className="background">
      <NavigationBar />

      <div className="aboutStyle">
        <h2>Hi, I'm Chris Cohen</h2>
        <br />
        <p>
          I graduated from Purdue University in May 2021 with a Bachelor's Degree in
          Computer Science, emphasizing software engineering and cybersecurity.
          I work for Qualcomm in San Diego, CA as a software engineer.
        </p>

        <p>
          My interests lie in low-level work using C/C++ and Assembly. Systems programming,
          embedded systems, system admininstration, and cyber security are my favorite
          fields. Systems administration and personal network-related projects
          have been a hobby of mine recently - I've created and managed a couple of servers that host my
          personal website and cloud server (read more about these in the Projects section).
        </p>

        <p>
          This website is intended as a portfolio and fun testing environment for myself.
          If you notice any bugs, please let me know! Feel free to reach out - contact information
          can be found on my resume, and in the footer.
        </p>

      </div>
      <div className="me">
        <img src={me} width={width} alt="" />
      </div>
      <Footer />
    </div>
  );
}
