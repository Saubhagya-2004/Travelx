import React from "react";
import viedio from '../assets/viedio.mp4'
import { AiOutlineSearch } from "react-icons/ai";
import { ReactTyped } from "react-typed";
const Header=()=>{
    return(
        <>

        <div className="w-full  h-screen relative">
           <video src={viedio} autoPlay loop muted className="w-full h-full object-cover"></video>
        <div className="w-full h-full absolute left-0 top-0 bg-gray-800/10">
        
        <div className=" top-0 w-full h-full flex flex-col justify-center text-center text-white">
            <h2 className="text-3xl md:text-4xl p-4">First class Travel</h2>
            <h3 className="text-2xl md:text-3xl pb-2">Top 1% locations <ReactTyped className="text-green-500" strings={['Worldwide']} 
                    typeSpeed={340}
                    backSpeed={200}
                    loop/>  </h3>
           
            <form className="flex justify-between items-center mx-auto max-w-[600px] w-full border-2 border-white p-1 text-black rounded-2xl bg-gray-100">
                <div >
                    <input className=" sm:w-[500px] focus:outline-none font-semibold placeholder:text-pink-600" type="text" placeholder="Search Destination" />
                </div>
                <div className="px-5 ">
                    <button><AiOutlineSearch size={20}/>
                    </button>
                </div>
            </form>
        </div>
         </div>
        </div>
        </>
    )
}
export default Header