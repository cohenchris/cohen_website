import React, { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import Footer from "../../components/Footer/Footer.js";
import "react-awesome-slider/dist/styles.css";
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
          I recently graduated from Purdue University with a Bachelor's Degree in
          Computer Science, with emphasis on software engineering and cybersecurity.
          I'm currently working for Qualcomm in San Diego, California
          as a software engineer.
        </p>

        <p>
          I have experience with a multitude of programming and markup languages,
          though I am strongest in low-level work using C and Assembly. I am
          particularly interested in fields concerning systems programming, embedded
          systems, system administration, and cyber security. Systems administration
          and personal network-related projects have been a hobby of mine recently.
          I've made a couple of servers that host my personal website and cloud server
          (read more about these in the Projects section).
        </p>

        <p>
          My hobbies vary depending on how I'm feeling on that particular day.
          I love experimenting in the kitchen on my own and trying foods from
          all sorts of different cultures. My favorite has to be anything from
          the Mediterranean! One of my favorite hobbies, though, is playing the cello,
          which I have done for 12 years. I played in the Purdue symphony orchestra
          for 4 years, and am currently practicing solo for the forseeable future.
          I also love to get out and enjoy the beautiful San Diego weather! I take
          up my time by biking, surfing, and reading outside after work. When I have
          time to travel, I also try to snowboard, which I've done for around 10 years.
        </p>
        <p>
          Feel free to reach out and contact me! Information is located in the
          footer.
        </p>
      </div>
      <div className="me">
        <img src={me} width={width} alt="" />
      </div>
      <Footer />
    </div>
  );
}
