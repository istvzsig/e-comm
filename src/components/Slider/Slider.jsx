import React from "react";
import {
  startAnimation,
  stopAnimation,
} from "../../features/slices/sliderSlice";
import { connect } from "react-redux";
import { dummyData } from "../../assets/data/dummyData";

const UPDATE_DELAY = 4000;

class Slider extends React.Component {
  componentDidMount() {
    this.animate();
  }

  animate = () => {
    const { slideIndex } = this.props;
    // Dispatch the startAnimation action to trigger the animation
    this.props.dispatch(startAnimation());
    // After a delay, stop the animation and move to the next slide
    setTimeout(() => {
      const nextIndex = (slideIndex + 1) % dummyData.length; // Calculate the next index with wrapping
      this.props.dispatch(stopAnimation(nextIndex));
      // Trigger the animation again after a short delay
      setTimeout(this.animate, UPDATE_DELAY);
    }, UPDATE_DELAY);
  };

  render() {
    const { slideIndex } = this.props;
    return (
      <div
        id="slider"
        className="sticky top-[71px] translate-y-[-71px] relative bg-[#ffa555]overflow-hidden h-[100vh] z-[-1]"
      >
        <div>
          {dummyData.map((item, index) => (
            <div
              key={index}
              className={`absolute opacity-${
                item.id === slideIndex ? "100" : "0"
              } duration-700 ease-in-out scale-${
                item.id === slideIndex ? "100" : "105"
              }`}
            >
              <div className="">
                <img className="align-middle" src={item.img} alt="space" />
              </div>
              <div className="absolute top-[50%] left-[50%] text-white font-bold text-[15vw] text-center translate-x-[-50%] translate-y-[-45%]">
                <h3>{item.text.toUpperCase()}</h3>
              </div>
            </div>
          ))}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 55 55"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ slideIndex: state.slider.value });
export default connect(mapStateToProps)(Slider);
