import React from "react";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import Slider from "../Slider/Slider";

import ProductList from "../Product/ProductList";

class Main extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Cart />
        <Slider />
        <ProductList />
      </>
    );
  }
}

export default Main;
