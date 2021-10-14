import React from "react";
import Slider from "react-slick";
import Avatar1 from "../../images/Avatars1.png";
import Avatar2 from "../../images/Avatars2.png";
import Avatar3 from "../../images/Avatars3.png";
import Avatar4 from "../../images/Avatars4.png";
import Avatar5 from "../../images/Avatars5.png";
import Avatar6 from "../../images/Avatars6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

export default function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="avatar">
          <img src={Avatar1} />
        </div>

        <div className="avatar">
          <img src={Avatar2} />
        </div>

        <div className="avatar">
          <img src={Avatar3} />
        </div>

        <div className="avatar">
          <img src={Avatar4} />
        </div>

        <div className="avatar">
          <img src={Avatar5} />
        </div>

        <div className="avatar">
          <img src={Avatar6} />
        </div>
      </Slider>
    </div>
  );
}
