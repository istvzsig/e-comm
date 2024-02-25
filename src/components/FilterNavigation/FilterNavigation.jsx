import React from "react";
import featuredSpaceSuit from "../../assets/img/featured-space-suit.png";
import { connect } from "react-redux";
import {
  filterProducts,
  resetFilter,
} from "../../features/slices/productsSlice";

class FilterNavigation extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "All",
    };
  }
  filterProductsByType = (itemType) => {
    this.props.dispatch(filterProducts(itemType));
    this.setState({ activeItem: itemType });
  };

  showAllProducts = () => {
    this.props.dispatch(resetFilter());
    this.setState({ activeItem: "All" });
  };

  render() {
    const { activeItem } = this.state;

    const itemTypes = [
      "All",
      "Spacehips",
      "Planets",
      "Suits",
      "Badges",
      "Boots",
      "Helmets",
      "Gloves",
      "Accessories",
    ];
    return (
      <div className="overflow-hidden bg-white relative z-1">
        <h1 className="text-black text-center font-bold py-12 text-8xl">
          PRODUCTS LIST
        </h1>
        <div className="text-center py-3 skew-x-[-12deg]">
          <h1 className="bg-black text-white inline p-3 px-20 font-bold text-3xl">
            SALES UP TO 50%
          </h1>
        </div>
        <div className="flex justify-center py-10 pb-20 mb-0 overflow-hidden">
          <img
            className="rounded-xl md:w-[40%]  sm:w-[80%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] "
            src={featuredSpaceSuit}
            alt="featured-img"
          />
        </div>
        <h1 className="text-black text-center font-bold pb-12 text-4xl">
          OUR PRODUCTS
        </h1>
        <div className="flex justify-center items-center py-8 px-8 overflow-scroll scrollbar-hide">
          {itemTypes.map((itemType, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  itemType === "All"
                    ? this.showAllProducts()
                    : this.filterProductsByType(itemType)
                }
                className="mr-8"
              >
                <button
                  className={`bg-none hover:bg-[blue] text-[grey] hover:text-[white] border-2 border-[#eee] px-4 py-2 rounded-lg text-[12px] transition ease-in-out ${
                    activeItem === itemType ? "bg-[blue] text-[white]" : ""
                  }`}
                >
                  {itemType.toUpperCase()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ filteredProducts: state.products });
export default connect(mapStateToProps)(FilterNavigation);
