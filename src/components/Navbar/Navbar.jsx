import React from "react";
import logo from '../../assets/img/logo-white.png';

class Navbar extends React.Component {
  constructor() {
    super();
    this.scrolled = false;
  }
  componentDidMount() {
    window.addEventListener("mousewheel", event => {
      if (event.offsetY > 200) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    });
  }

  render() {
    return (
      <div className={`sticky top-0 z-10 backdrop-blur-md text-white ${this.scrolled ? "bg-[rgba(255,255,255,1)]" : "bg-[rgba(0,0,0,.4)]"}`}>
        <nav className="w-full flex justify-between z-1111 items-center px-[2em]">
          <img className="h-[55px] my-2" src={logo} alt="logo" />
          <ul className="flex">
            <li className="flex mx-2">
              <button>
                Logout
              </button>
            </li>
            <li className="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <p className="pl-2">Wish List</p>
            </li>
            <li className="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <p className="pl-2">Bag</p>
            </li>
          </ul>
        </nav >
        <div className="hidden bg-white flex flex-wrap p-3 justify-center">
          <p className="text-white font-inter text-base font-medium px-2">50& OFF</p>
          <p className="text-white font-inter text-base font-medium mx-96">Free shipping returns</p>
          <p className="text-white font-inter text-base font-medium ">Diffrent payment methods</p>
        </div>
      </div>
    );
  }

}

export default Navbar;