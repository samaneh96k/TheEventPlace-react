import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../resources/images/slide_one.jpg";
import img2 from "../../resources/images/slide_two.jpeg";
import img3 from "../../resources/images/slide_three.jpg";
const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{ background: `url(${img1})` ,height:`${window.innerHeight}px`}}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{ background: `url(${img2})`  ,height:`${window.innerHeight}px`}}
          >
            {" "}
          </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{ background: `url(${img3})`  ,height:`${window.innerHeight}px`}}
          >
            {" "}
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Carrousel;
