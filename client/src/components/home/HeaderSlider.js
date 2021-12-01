import React from "react";
import Slider from "react-slick";
import Buttons from "../utils/Buttons"

const HeaderSlider = (props) => {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      img: "/images/featured/featured_home.jpg",
      lineOne: "Fender",
      lineTwo: "Custom Shop",
      linkTitle: "Shop Now",
      linkTo: "/shop",
    },
    {
      img: "/images/featured/featured_home_3.jpg",
      lineOne: "Fender",
      lineTwo: "Custom Shop",
      linkTitle: "Shop Now",
      linkTo: "/shop",
    },
  ];

  const generateSlides = () =>
    slides
      ? slides.map((item, i) => (
          <div key={i}>
            <div
              className="featured_image"
              style={{
                background: `url(${item.img})`,
                height: `${window.innerHeight}px`,
              }}
            >
              <div className="featured_action">
                <div className="tag title">{item.lineOne}</div>
                <div className="tag low_title">{item.lineTwo}</div>
                <div>
                    <Buttons
                        type='default'
                        title={item.linkTitle}
                        linkTo={item.linkTo}
                        addstyles={{
                            margin:'10px 0' 
                        }}
                    />
                </div>
              </div>
            </div>
          </div>
        ))
      : null;

  return (
    <>
      <div className="featured_container">
        <Slider {...settings}>{generateSlides()}</Slider>
      </div>
    </>
  );
};

export default HeaderSlider;