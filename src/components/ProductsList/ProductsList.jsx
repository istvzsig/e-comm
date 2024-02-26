import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../../features/slices/productsSlice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

class ProductsList extends React.Component {
  showProduct = (id) => {
    this.props.dispatch(getProduct(id));
  };

  render() {
    return (
      <div className="flex flex-col bg-white py-12 relative z-[0]">
        <div className="flex flex-wrap justify-center mt-12">
          {this.props.filteredProducts.map((item, index) => {
            const { type, id } = item;

            return (
              <Link
                key={index}
                to={`/product/${type.toLowerCase()}/${id}`}
                onClick={() => this.showProduct(id)}
              >
                <Card className="select-none mt-12 w-96 mx-6 cursor-poinder">
                  <CardHeader className="grayscale-0 hover:grayscale relative transition ease-in-out delay-150 ">
                    <img className="rounded" src={item.img} alt="card-image" />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-2 flex justify-between items-center"
                    >
                      {item.name}
                      <Typography className="font-bold italic text-[12px] mb-2 text-white p-2 rounded-lg bg-[rgba(0,0,255,1)]">
                        {item.type}
                      </Typography>
                    </Typography>
                    <Typography className="text-sm font-medium text-[rgba(0,0,0,.5)]">
                      {item.text}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex">
                    <h1 className="text-black text-left font-bold text-4xl">
                      ${item.price}
                    </h1>
                    <p className="text-[10px] text-black font-bold">USD</p>
                  </CardFooter>
                </Card>
              </Link>
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
export default connect(mapStateToProps)(ProductsList);
