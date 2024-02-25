import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";

class Main extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Slider />
      </div>
    );
  }
}

export default Main;