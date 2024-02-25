import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
    length: 3,
    animating: false, // State to track animation
  },
  reducers: {
    // Reducer to trigger animation
    startAnimation(state) {
      state.animating = true;
    },
    // Reducer to stop animation and set the final slide
    stopAnimation(state, action) {
      state.animating = false;
      state.value = action.payload;
    }
  },
});

export const { nextSlide, prevSlide, startAnimation, stopAnimation } = sliderSlice.actions;
export default sliderSlice.reducer;
