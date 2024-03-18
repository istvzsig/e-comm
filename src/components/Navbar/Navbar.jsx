import React from "react";
import logo from "../../assets/img/logo-white.png";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 200) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const { cartTotalAmount } = this.props;

    return (
      <div
        id="topNavigation"
        className={`sticky top-0 z-10 transition ease-in-out duration-700 backdrop-blur-md text-white ${
          scrolled ? "bg-[rgba(0,0,0,1)]" : "bg-[rgba(0,0,0,.4)]"
        }`}
      >
        <nav className="w-full flex justify-between z-1111 px-[2em] font-bold">
          <img className="h-[55px] my-2" src={logo} alt="logo" />
          <ul className="flex items-center">
            <li className="mx-4">
              <button onClick={() => {}}>SIGN IN</button>
            </li>
            <li className="mx-2">
              <button onClick={() => {}}>WISH LIST</button>
            </li>
            <li
              onClick={this.props.toggleCart}
              className="flex mx-2 relative top-[-2px] cursor-pointer"
            >
              <div className="relative left-[40px] top-[-8px] text-[10px] bg-[blue] w-[20px] h-[20px] rounded-[50%] text-center leading-[20px]">
                {cartTotalAmount}
              </div>
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
              >
                <path
                  d="M2.87644 7.73909C3.00737 6.74395 3.85563 6 4.85934 6H17.1407C18.1444 6 18.9926 6.74395 19.1236 7.73909L20.7025 19.7391C20.8601 20.937 19.9278 22 18.7196 22H3.2804C2.0722 22 1.13987 20.937 1.29749 19.7391L2.87644 7.73909Z"
                  stroke="white"
                />
                <path
                  d="M7 11V4.71901C7 2.66506 8.79086 1 11 1C13.2091 1 15 2.66506 15 4.71901V11"
                  stroke="white"
                />
                <circle
                  cx="1"
                  cy="1"
                  r="1"
                  transform="matrix(-1 0 0 1 8 10)"
                  fill="white"
                />
                <circle
                  cx="1"
                  cy="1"
                  r="1"
                  transform="matrix(-1 0 0 1 16 10)"
                  fill="white"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartTotalAmount: state.cart.totalAmount,
});
export default connect(mapStateToProps)(Navbar);
