import React from 'react';
import borabora from '../assets/borabora.jpg';
import uk from '../assets/uk.jpg';
import keywest from '../assets/keywest.jpg';
import lakh from '../assets/lakh.jpg';
import Paris from '../assets/paris.jpg'
import maldives3 from '../assets/maldives3.jpg';

function Selects() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-13 grid  sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative ">
        <img
          src={maldives3}
          alt='/'
          className="w-full h-full object-cover rounded-lg row-span-2"
        />
        <div className="bg-gray-900/30 h-full w-full absolute top-0 left-0 rounded-lg">
          <p className="bottom-4 left-4 text-xl text-white absolute">Maldives</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={Paris}
          alt="/"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="bg-gray-900/30 h-full w-full absolute top-0 left-0 rounded-lg">
          <p className="bottom-4 left-4 text-xl text-white absolute">Paris</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={keywest}
          alt="Maldives"
          className="w-full  h-full object-cover rounded-lg"
        />
        <div className="bg-gray-900/30 h-full w-full absolute top-0 left-0 rounded-lg">
          <p className="bottom-4 left-4 text-xl text-white absolute">Goa</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={lakh}
          alt="/"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="bg-gray-900/30 h-full w-full absolute top-0 left-0 rounded-lg">
          <p className="bottom-4 left-4 text-xl text-white absolute">lakshadweep</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={uk}
          alt="/"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="bg-gray-900/30 h-full w-full absolute top-0 left-0 rounded-lg">
          <p className="bottom-4 left-4 text-xl text-white absolute">Maldives</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={borabora}
          alt="/"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="bg-gray-900/30 h-full w-full absolute top-0 left-0 rounded-lg">
          <p className="bottom-4 left-4 text-xl text-white absolute">Palolem</p>
        </div>
      </div>
      
    </div>
  );
}

export default Selects;
