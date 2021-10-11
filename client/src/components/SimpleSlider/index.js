import React, { Component } from "react";
import Slider from "react-slick";
// import "./styles.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: true,
      arrows: false,
    };
    return (
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <div>
            <h3>stats </h3>
          </div>
          <div>
            <h3>stats</h3>
          </div>
          <div>
            <h3>stats</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
