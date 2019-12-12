import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import meAndCora from "../../images/SkyDeckCora.jpg";
import skydiving1 from "../../images/Skydiving1.jpg";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <AwesomeSlider>
          <div data-src={skydiving1} />
          <div data-src={meAndCora} />
        </AwesomeSlider>
        />
      </div>
    );
  }
}
