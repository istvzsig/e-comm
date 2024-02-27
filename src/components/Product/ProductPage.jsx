import React from "react";
import { connect } from "react-redux";

class ProductPage extends React.Component {
  render() {
    const [product] = this.props.product;

    return (
      <div className="w-full py-12">
        <h1 className="text-black text-center font-bold text-6xl">
          {product.name}
        </h1>
        <h5 className="m-auto w-[80%] text-center py-6 mb-[1em]">
          {product.text}
        </h5>
        <img
          className="m-auto w-[70%] rounded-[1em] "
          src={product.img}
          alt="product-image"
        />
        {/* <img
            className="m-auto scale-[2] absolute top-0 w-full z-[-1] blur-[3px] opacity-[20%]"
            src={product.img}
            alt="product-image"
          /> */}
        <div className="flex w-[70%] m-auto justify-between mt-2">
          <div className="flex items-center">
            {product.sizes.map((size, index) => {
              return (
                <h3 key={index} className="mr-2 font-bold text-[12px] px-1">
                  {size}
                </h3>
              );
            })}
          </div>
          <div className="flex items-center">
            {/* <p className="text-[12px] mr-[5px]">COLORS:</p> */}
            {product.colors.map((color, index) => {
              return (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={color}
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                >
                  <path d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.products.product,
});
export default connect(mapStateToProps)(ProductPage);
