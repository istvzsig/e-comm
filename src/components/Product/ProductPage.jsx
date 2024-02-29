import React from "react";
import { connect } from "react-redux";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      size: "M",
      activeColor: "",
    };
  }

  setSize(size) {
    this.setState({
      size: size,
    });
  }

  setActiveColor(color) {
    this.setState({
      activeColor: color,
    });
  }

  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const [product] = this.props.product;

    return (
      <div className="flex flex-col md:flex-row h-[100vh] justify-center items-center p-12">
        <div className="flex flex-col m-8 w-[300px]">
          <img
            className="relative z-[1] rounded-[1em] self-center w-[100%] max-w-[300px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]"
            src={product.img}
            alt="product-image"
          />
        </div>
        <div className="flex flex-col max-w-[33%] md:max-w-[100]">
          <h1 className="font-bold text-3xl mb-2">{product.name}</h1>
          <h3 className="text-[#ffa555] font-bold mb-2">0% OFF</h3>
          <p className="relative z-[-1] text-[1em] text-[grey] py-4">
            {product.text}
          </p>
          <div>
            {product.sizes ? (
              <div className="mb-2">
                <label
                  htmlFor="sizes"
                  className="block mb-2 text-[12px] font-light text-grey-400"
                >
                  Pick your size:
                </label>
                <select
                  onChange={(e) => {
                    this.setSize(e.target.value);
                  }}
                  name="size"
                  value={this.state.size}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {product.sizes.map((size, index) => {
                    return (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    );
                  })}
                </select>
              </div>
            ) : (
              false
            )}
          </div>
          <div>
            <label
              htmlFor="sizes"
              className="block mb-2 text-[12px] font-light text-grey-400"
            >
              Select color:
            </label>
            <div className="flex items-center">
              {product.colors
                ? product.colors.map((color, index) => {
                    return (
                      <div key={index} className="flex items-center mr-2">
                        <button onClick={() => this.setActiveColor(color)}>
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              backgroundColor: color,
                              borderRadius: "50%",
                              boxShadow: `0 0 0 2px white, 0 0 0 4px ${
                                this.state.activeColor === color
                                  ? "blue"
                                  : "transparent"
                              }`,
                            }}
                          ></div>
                        </button>
                      </div>
                    );
                  })
                : false}
            </div>
            <h1 className="text-black text-left font-bold text-6xl my-4 mb-0">
              {product.price !== "FREE" ? `$${product.price}` : product.price}
              <span className="text-[20px] text-black font-bold self-start relative top-[-30px] left-[2px]">
                {product.price == "FREE" ? "" : "USD"}
              </span>
            </h1>
            <button className="font-bold text-[12px] bg-[blue] p-4  my-4 text-white rounded-lg">
              ADD TO CART
            </button>
          </div>
          {/* End product colors */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.products.product,
});
export default connect(mapStateToProps)(ProductPage);
