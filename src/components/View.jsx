// import { useState } from 'react';
import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../assets/image/img.jpg';
import img2 from '../assets/paris.jpg';
import img3 from '../assets/image/img3.jpg';
import img4 from '../assets/image/img4.jpg';
import img5 from '../assets/image/img5.jpg';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

const slide = [
  { id: 1, img: img },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
];

function View() {
 const settings ={
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  intialSlide:0,
  arrows:false,
  autoplay:true,
  autoplaySpeed: 1100,
  cssEase:'linear',
 }

  return (
    <div className='lg:container mx-auto px-4 mb-5 bg-white'>
      <div className='slider-container w-full '>
    <Slider {...settings}>
    {slide.map((item)=>(
      <div key={item.id}>
        <img src={item.img} alt="image" 
        className='w-full h-[500px] object-cover'
         loading='lazy'
        />
       
      </div>
    ))}
  </Slider>
  </div>
  </div>
  );
}

export default View;
