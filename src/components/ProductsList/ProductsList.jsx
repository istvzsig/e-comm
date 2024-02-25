import React from "react";
import spaceSuit from "../../assets/img/featured-space-suit.png";
import { connect, useSelector } from "react-redux";
import { storeData } from "../../assets/data/storeData";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

class ProductsList extends React.Component {
  render() {
    console.log(this.props.filteredProducts);
    return (
      <div className="flex flex-col bg-white py-12 relative z-[-1]">
        <div className="flex flex-wrap justify-center">
          {this.props.filteredProducts.map((item, index) => {
            return (
              <Card
                key={index}
                className="mt-12 w-96 mx-6 cursor-poinder grayscale-0 hover:grayscale"
              >
                <CardHeader className="relative h-56">
                  <img src={item.img} alt="card-image" />
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

                  <Typography>{item.text}</Typography>
                </CardBody>
                <CardFooter className="pt-0 flex">
                  <h1 className="text-black text-left font-bold text-4xl">
                    ${item.price}
                  </h1>
                  <p className="text-[10px] text-black font-bold">USD</p>
                </CardFooter>
              </Card>
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
