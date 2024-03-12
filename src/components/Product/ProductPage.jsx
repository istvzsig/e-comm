import React from "react";
import { addToCart } from "../../features/slices/cartSlice";
import { connect } from "react-redux";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      size: "M",
      color: "",
    };
  }

  setSize(size) {
    this.setState({
      size: size,
    });
  }

  setColor(color) {
    this.setState({
      color: color,
    });
  }

  componentDidMount() {
    // console.log(this.props.cart);
  }

  render() {
    const [item] = this.props.item;

    return (
      <div className="flex flex-col md:flex-row h-[100vh] justify-center items-center p-12">
        <div className="flex flex-col m-8 w-[300px]">
          <img
            className="relative z-[1] rounded-[1em] self-center w-[100%] max-w-[300px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]"
            src={item.img}
            alt="item-image"
          />
        </div>
        <div className="flex flex-col max-w-[33%] md:max-w-[100]">
          <h1 className="font-bold text-3xl">{item.name}</h1>
          <h3 className="text-[#ffa555] font-bold mb-1">0% OFF</h3>
          <p className="relative z-[-1] text-[1em] text-[grey] mb-2">
            {item.text}
          </p>
          <div>
            {item.sizes ? (
              <div className="mb-2">
                <label
                  htmlFor="sizes"
                  className="block text-[12px] font-light text-grey-400"
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
                  {item.sizes.map((size, index) => {
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
              {item.colors
                ? item.colors.map((color, index) => {
                    return (
                      <div key={index} className="flex items-center mr-2">
                        <button onClick={() => this.setColor(color)}>
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              backgroundColor: color,
                              borderRadius: "50%",
                              boxShadow: `0 0 0 2px white, 0 0 0 4px ${
                                this.state.color === color
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
              {item.price !== "FREE" ? `$${item.price}` : item.price}
              <span className="text-[20px] text-black font-bold self-start relative top-[-30px] left-[2px]">
                {item.price == "FREE" ? "" : "USD"}
              </span>
            </h1>
            <button
              onClick={() => {
                const { size, color } = this.state;
                this.props.dispatch(addToCart({ size, color, ...item }));
              }}
              className="font-bold text-[12px] bg-[blue] p-4  my-4 text-white rounded-lg"
            >
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
  item: state.products.product,
  cart: state.cart,
});
export default connect(mapStateToProps)(ProductPage);
