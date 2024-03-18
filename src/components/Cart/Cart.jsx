import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div
        className={`p-2 flex flex-col h-[100vh] w-[240px] bg-[rgba(255,255,255,1)] fixed top-[71px] z-10 text-[rgba(0,0,0,1)] backdrop-blur-md overflow-scoll transition ease-in-out right-0 ${
          this.props.isOpened ? "translate-x-[0]" : "translate-x-[240px]"
        }`}
      >
        <h1 className="font-bold py-2 text-center text-[24px]">YOUR CART</h1>
        <div>
          <p className="font-bold py-2 text-[12px] text-center">TOTAL PRICE:</p>
          <p className="font-bold text-[24px] text-center">
            ${this.props.totalPrice} USD
          </p>
        </div>
        <ul className="overflow-y-scroll max-h-[60vh]">
          {cartItems.length ? (
            cartItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="p-2 bg-[rgba(0,0,0,.8)] rounded-[8px] m-2 text-[10px] flex overflow-scroll text-white"
                >
                  <img
                    className="rounded-[8px] h-[50px]"
                    src={item.img}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="px-2 mb-1 italic font-bold">{item.name}</p>
                    <div className="flex">
                      <p className="px-2 mb-1 italic">SIZE: {item.size}</p>
                      <p className="px-2 mb-1 italic">
                        COLOR: {item.color.toUpperCase() || "N/A"}
                      </p>
                    </div>
                    <p className="px-2 font-bold">${item.price} USD</p>
                  </div>
                </li>
              );
            })
          ) : (
            <li>Empty</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  totalPrice: state.cart.totalPrice,
});
export default connect(mapStateToProps)(Cart);
