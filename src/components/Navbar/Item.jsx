import React from "react";

class Item extends React.Component {
  render() {
    const { text, subText } = this.props;

    return (
      <li className="flex cursor-pointer relative mx-8">
        <button>{text}</button>
        {/* <p className="text-[8px] text-nowrap absolute top-[20px]">
          <i className="transition ease-out opacity-[10%] hover:opacity-[100%]">
            {subText}
          </i>
        </p> */}
      </li>
    );
  }
}

export default Item;
