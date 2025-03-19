import React from "react";
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import keywest from '../assets/keywest.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'

function Destination() {
  return (
    <div className="max-w-[1240px] mx-auto py-12 px-4 text-center">
        <h2>All-Inclusive Resorts</h2>
        <p className="font-semibold text-lg py-2">On the Crrebean's Best Beaches</p>
        <div className="grid md:grid-cols-4 grid-rows-none py-4 gap-3 md:gap-4">
             <img className="w-full h-full object-cover row-span-2 md:col-span-2 col-span-2 rounded-2xl" src={borabora}   alt="/" />
             <img className="w-full h-full object-cover rounded-2xl " src={borabora2} alt="" />
             <img className="w-full h-full object-cover rounded-2xl " src={keywest} alt="" />
             <img className="w-full h-full object-cover rounded-2xl " src={maldives} alt="" />
             <img className="w-full h-full object-cover rounded-2xl " src={maldives2} alt="" />
        </div>
        <h2 className="text-pink-400 ">ENJOY YOUR TRIP !!</h2>
    </div>
  )
}

export default Destination
