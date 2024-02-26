import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { connect } from "react-redux";
import { getProduct } from "../../features/slices/productsSlice";

class ProductsList extends React.Component {
  showProduct = (id) => {
    this.props.dispatch(getProduct(id));
  };

  render() {
    return (
      <div className="flex flex-col bg-white py-12 relative z-[0]">
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
