import { useState } from 'react';
import React from 'react';
import img from '../assets/image/img.jpg';
import img2 from '../assets/paris.jpg';
import img3 from '../assets/image/img3.jpg';
import img4 from '../assets/image/img4.jpg';
import img5 from '../assets/image/img5.jpg';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

const slide = [
  { id: 0, img: img },
  { id: 1, img: img2 },
  { id: 2, img: img3 },
  { id: 3, img: img4 },
  { id: 4, img: img5 },
];

function View() {
  const [view, setView] = useState(0);

  const prevSlide = () => {
    setView(view === 0 ? slide.length - 1 : view - 1);
  };

  const nextSlide = () => {
    setView(view === slide.length - 1 ? 0 : view + 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 flex relative items-center">
      {/* Left Arrow */}
      <BsArrowLeftSquare
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white left-8 cursor-pointer z-10"
      />
      {/* Right Arrow */}
      <BsArrowRightSquare
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white right-8 cursor-pointer z-10"
      />
      {slide.map((item, index) => (
        <div
          className={index === view ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}
          key={index}
        >
          {index === view && <img className="w-full rounded-2xl h-full object-cover" src={item.img} alt="/" /> }
        </div>
      ))}
    </div>
  );
}

export default View;
