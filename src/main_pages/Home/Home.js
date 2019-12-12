import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Container } from "react-bootstrap";

import SkyDeckCora from "../../images/SkyDeckCora.jpg";
import Skydiving1 from "../../images/Skydiving1.jpg";
import ChicagoNavyPier from "../../images/ChicagoNavyPier.jpg";
import ColoradoPanorama from "../../images/ColoradoPanorama.jpg";
import MountainPicture from "../../images/MountainPicture.jpg";
import Skydiving2 from "../../images/Skydiving2.jpg";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";

const AutoplaySlider = withAutoplay(AwesomeSlider);
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            fillParent={false}
          >
            <div data-src={Skydiving1} />
            <div data-src={SkyDeckCora} />
            <div data-src={ChicagoNavyPier} />
            <div data-src={ColoradoPanorama} />
            <div data-src={MountainPicture} />
            <div data-src={Skydiving2} />
          </AutoplaySlider>
        </Container>
      </div>
    );
  }
}
