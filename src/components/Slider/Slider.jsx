import React from "react";
import { nextSlide, prevSlide, animSlide } from "../../features/slices/sliderSlice";
import { connect } from 'react-redux';
import { dummyData } from "../../assets/data/dummyData";

class Slider extends React.Component {
  //   componentDidMount() {
  //     setTimeout(() => {
  //       console.log(this.props.slideIndex)
  //       this.props.dispatch(animSlide(this.props.slideIndex + 1))
  //     }, 1000);
  //   }
  render() {
    const { slideIndex } = this.props;
    return (
      <div className="relative pb-4">
        <div className="flex justify-between absolute z-10 w-full h-full">
          <div
            className="text-white px-5 py-3 border-r-3 z-1 cursor-pointer"
            onClick={() => this.props.dispatch(prevSlide(slideIndex - 1))}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#eee" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          <div
            className="text-white px-5 py-3 border-r-3 z-1 cursor-pointer"
            onClick={() => this.props.dispatch(nextSlide(slideIndex + 1))}>
            <svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1,1)" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#eee" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
        </div>
        <div className="z-0">
          {dummyData.map((item, index) => {
            return <div
              key={index}
              className={item.id === slideIndex
                ? "absolute z-0 opacity-100 duration-700 ease-in-out scale-100"
                : "absolute z-0 opacity-0 duration-700 ease-in-out scale-105"}>
              <div>
                <img src={item.img} alt="space" />
              </div>
              <div>
                <h3>{item.text}</h3>
              </div>
              <div></div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ slideIndex: state.slider.value });
export default connect(mapStateToProps)(Slider);