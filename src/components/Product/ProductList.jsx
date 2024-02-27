import React from "react";
import ProductsFilterNavigation from "./ProductFilterNavigation";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";

class ProductsList extends React.Component {
  render() {
    return (
      <div className="flex flex-col bg-white py-12 relative z-[0]">
        <ProductsFilterNavigation />
        <div className="flex flex-wrap justify-center mt-12">
          {this.props.filteredProducts.map((item, index) => {
            return <ProductCard key={index} {...item} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredProducts: state.products.filteredProducts,
});
export default connect(mapStateToProps)(ProductsList);
