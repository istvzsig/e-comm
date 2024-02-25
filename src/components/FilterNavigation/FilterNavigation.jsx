import React from "react";
import featuredSpaceSuit from '../../assets/img/featured-space-suit.png';
import { filterProducts, resetFilter } from "../../features/slices/productsSlice";
import { connect } from 'react-redux';

class FilterNavigation extends React.Component {
  filterProductsByType = (itemType) => {
    this.props.dispatch(filterProducts(itemType));
  }

  showAllProducts = () => {
    this.props.dispatch(resetFilter()); // Dispatch resetFilter action
  }

  render() {
    const itemTypes = ['All', 'Spacehips', 'Planets', 'Suits', 'Badges', 'Boots', 'Helmets', 'Gloves', 'Accessories'];
    return (
      <div className="overflow-hidden bg-white relative z-1">
        <h1 className="text-black text-center font-bold py-12 text-8xl">PRODUCTS LIST</h1>
        <div className="text-center py-3 skew-x-[-12deg]">
          <h1 className="bg-black text-white inline p-3 px-20 font-bold text-3xl">
            SALES UP TO 50%
          </h1>
        </div>
        <div className="flex justify-center py-10 pb-20 mb-0 overflow-hidden">
          <img className="rounded-xl md:w-[40%]  sm:w-[80%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] " src={featuredSpaceSuit} alt="featured-img" />
        </div>
        <h1 className="text-black text-center font-bold pb-12 text-4xl">OUR PRODUCTS</h1>
        <div className="flex justify-center items-center py-8 px-8 overflow-scroll scrollbar-hide">
          {itemTypes.map((itemType, index) => {
            return <div
              key={index}
              onClick={() => itemType === 'All' ? this.showAllProducts() : this.filterProductsByType(itemType)}
              className="mr-8"
            >
              <button className="bg-none border-2 border-[#eee] text-[grey] px-8 py-4 rounded-lg text-[12px]">
                {itemType.toUpperCase()}
              </button>
            </div>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ filteredProducts: state.products });
export default connect(mapStateToProps)(FilterNavigation);


