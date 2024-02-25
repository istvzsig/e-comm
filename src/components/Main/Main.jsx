import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import ProductsFilterNavigation from "../ProductsFilterNavigation/ProductsFilterNavigation";
import ProductsList from "../ProductsList/ProductsList";

class Main extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Slider />
        <ProductsFilterNavigation />
        <ProductsList />
      </>
    );
  }
}

export default Main;
