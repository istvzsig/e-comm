import React from "react";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import Slider from "../Slider/Slider";

import ProductList from "../Product/ProductList";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isCartOpen: false,
    };
  }

  toggleCart() {
    this.setState((prevState) => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  }

  render() {
    return (
      <>
        <Navbar toggleCart={this.toggleCart.bind(this)} />
        <Cart isOpened={this.state.isCartOpen} />
        <Slider />
        <ProductList />
      </>
    );
  }
}

export default Main;
