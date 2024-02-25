import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import FilterNavigation from "../FilterNavigation/FilterNavigation";
class Main extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <Slider />
        <FilterNavigation />
      </>
    );
  }
}

export default Main;