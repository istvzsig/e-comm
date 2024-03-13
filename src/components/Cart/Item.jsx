import React from "react";

class Item extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <li className="p-2 bg-[rgba(0,0,0,.8)] rounded-[8px] m-2 text-[10px] flex overflow-scroll text-white cursor-pointer">
        <img className="rounded-[8px] h-[50px]" src={item.img} alt="" />
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
  }
}

export default Item;
