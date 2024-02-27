import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { getProductById } from "../../features/slices/productsSlice";
import { connect } from "react-redux";

class ProductCard extends React.Component {
  render() {
    const { ...item } = this.props;

    return (
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
            <Typography className="font-bold text-[12px] mb-2 text-white p-2 rounded-lg bg-[rgba(0,0,255,1)]">
              {item.type}
            </Typography>
          </Typography>
          <Typography className="text-sm font-medium text-[rgba(0,0,0,.5)]">
            {item.text}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between items-center">
          <h1 className="text-black text-left font-bold text-4xl">
            {item.price !== "FREE" ? `$${item.price}` : item.price}
            <span className="text-[10px] text-black font-bold self-start relative top-[-18px] left-[2px]">
              {item.price == "FREE" ? "" : "USD"}
            </span>
          </h1>
          <Link
            to={`/products/${item.type.toLowerCase()}/${item.id}`}
            onClick={() => this.props.dispatch(getProductById(item.id))}
          >
            <p className="text-[12px] italic text-black font-bold">READ MORE</p>
          </Link>
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.products.product,
});
export default connect(mapStateToProps)(ProductCard);
