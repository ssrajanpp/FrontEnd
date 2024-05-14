
import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import featureDetail from '../api/features.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderPage (submenu, setSubmenu){
  setSubmenu = true;
    var settings = {
      arrow: true,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear",
      nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
      prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
      responsive: [
        
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }, {
          breakpoint: 922,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const dateSet = featureDetail.map (sliderDetails =>
      <div className="fd-slider-box" key={sliderDetails.id}>
        <div className="fd-slick-inner">
          <h3 className="fd-heading">{sliderDetails.heading}</h3>
          <p className="fd-message">{sliderDetails.message}</p>
        </div>
    </div>
    )

    return (
      <section className="section fd-section-slider" >
        <div className="fd-section-inner"><h2 className="fd-heading">Donec nec justo </h2>
          <Slider {...settings}>
          {dateSet}
          </Slider>
        </div>
      </section>
    )
}