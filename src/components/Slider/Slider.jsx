import React from "react";
import { startAnimation, stopAnimation } from "../../features/slices/sliderSlice";
import { connect } from 'react-redux';
import { dummyData } from "../../assets/data/dummyData";

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
      setTimeout(this.animate, 4000);
    }, 4000);
  }

  render() {
    const { slideIndex } = this.props;
    return (
      <div className="relative bg-[#ffa555] h-[500px] overflow-hidden">
        <div>
          {dummyData.map((item, index) => (
            <div
              key={index}
              className={`absolute opacity-${item.id === slideIndex ? '100' : '0'} duration-700 ease-in-out scale-${item.id === slideIndex ? '100' : '105'}`}>
              <div className="">
                <img className="align-middle" src={item.img} alt="space" />
              </div>
              <div className="absolute top-[50%] left-[50%] text-white font-bold text-[15vw] text-center translate-x-[-50%] translate-y-[-50%]">
                <h3>{item.text.toUpperCase()}</h3>
              </div>
            </div>
          ))}
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => ({ slideIndex: state.slider.value });
export default connect(mapStateToProps)(Slider);