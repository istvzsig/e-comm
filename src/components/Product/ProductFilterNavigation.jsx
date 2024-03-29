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
      activeButton: "All",
    };
  }

  filterProductsByType = (itemType) => {
    this.props.dispatch(filterProducts(itemType));
    this.setState({ activeItem: itemType, activeButton: itemType });
  };

  showAllProducts = () => {
    this.props.dispatch(resetFilter());
    this.setState({ activeItem: "All", activeButton: "All" });
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
      <div className="overflow-hidden relative z-1">
        <h1 className="text-black text-center font-bold py-12 text-8xl">
          PRODUCTS LIST
        </h1>
        <div className="text-center skew-x-[-12deg] my-12 mb-24">
          <h1 className="bg-black text-white inline p-3 px-20 font-bold text-3xl">
            SALES UP TO 50%
          </h1>
        </div>
        <div className="flex justify-center overflow-hidden mb-12">
          <img
            className="rounded-xl md:w-[40%]  sm:w-[80%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] "
            src={featuredSpaceSuit}
            alt="featured-img"
          />
        </div>
        <h1 className="text-black text-center font-bold mb-12 text-4xl">
          OUR PRODUCTS
        </h1>
        <div className="flex justify-center items-center pb-5 overflow-scroll scrollbar-hide relative z-[1]">
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

const mapStateToProps = (state) => ({
  filteredProducts: state.products.filteredProducts,
});
export default connect(mapStateToProps)(FilterNavigation);
