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
    }, 1000);
  }

  render() {
    const { slideIndex } = this.props;
    return (
      <div className="relative pb-4">
        <div className="z-0">
          {dummyData.map((item, index) => (
            <div
              key={index}
              className={`absolute z-0 opacity-${item.id === slideIndex ? '100' : '0'} duration-700 ease-in-out scale-${item.id === slideIndex ? '100' : '105'}`}>
              <div>
                <img src={item.img} alt="space" />
              </div>
              <div>
                <h3>{item.text}</h3>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ slideIndex: state.slider.value });
export default connect(mapStateToProps)(Slider);
