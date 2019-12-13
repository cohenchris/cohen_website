import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import ChicagoNavyPier from "../../images/ChicagoNavyPierCropped.jpg";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <img
          width="392p"
          height="595.2"
          src={ChicagoNavyPier}
          alt="Me in Chicago"
        />
      </div>
    );
  }
}
