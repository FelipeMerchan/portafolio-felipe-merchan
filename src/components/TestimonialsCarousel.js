import React from 'react'
import Slider from "react-slick"

export const TestimonialsCarousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "Slider",
  }

  return (
    <>
      <Slider {...settings}>
        {children}
      </Slider>
    </>
  )
}
