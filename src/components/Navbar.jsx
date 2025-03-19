import React from "react";
import { useState } from "react";
import {BsPerson, BsSearch} from 'react-icons/bs'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const Navbar =()=>{
    const[open,setOpen] =useState(false);
    const nav=()=>{
        setOpen(!open);
    }
    return(
        <>
        <div className=" flex justify-between items-center h-20 px-7">
            <div className=" font-bold cursor-pointer text-3xl md:text-4xl text-blue-500 ">
                <h1 >TRAVEL.X</h1>
            </div>
            <ul className=" font-semibold hidden md:flex">
                <li className="p-5">Home</li>
                <li className="p-5">Destination</li>
                <li className="p-5">Travel</li>
                <li className="p-5">View</li>
                <li className="p-5">Book</li>
            </ul>
            <div className=" hidden md:flex mr-4 ">
                <BsSearch className="mr-3 hover:text-blue-500" size={20}/>
                <BsPerson className="bg-gray-400 rounded-full " size={20}/>
                <p className="ml-2 uppercase text-black cursor-pointer">user</p>
            </div>
            <div onClick={nav} className="md:hidden block z-20 mr-5 border-2 border-cyan-400">
                {open?<AiOutlineClose size={23}/>:<AiOutlineMenu size={23}/>}
              
               
            </div>
            {/* mobile menu */}
            <div onClick={nav} className={open?'absolute  top-0  bg-gray-100 w-full left-0 px-4 py-7 flex flex-col duration-500':'absolute top-[-100%] w-full duration-700'}>
            {/* bg-gray-100/90 transparency */}
                <ul className="text-2xl font-medium ">
                    <h1 className="font-bold cursor-pointer text-xl  md:text-2xl text-blue-500">TRAVEL.X</h1>
                <li className="p-4 border-b border-gray-500">Home</li>
                <li className="p-4 border-b border-gray-500">Destination</li>
                <li className="p-4 border-b border-gray-500">Travel</li>
                <li className="p-4 border-b border-gray-500">View</li>
                <li className="p-4 border-b border-gray-500">Book</li>
                </ul>
                <div className="flex flex-col  ">
                    <button className="border p-2 my-2.5 bg-gradient-to-l from-blue-500 to-cyan-300 text-white font-bold rounded-2xl uppercase">Search</button>
                    <button className="border p-2 my-2.5 bg-gradient-to-l from-blue-500 to-cyan-300 text-white font-bold rounded-2xl uppercase">Account</button>
                </div>
                <div className="flex px-4 gap-5  my-5 md:hidden">
                    <FaFacebook size={20} className="text-blue-500"/>
                    <FaInstagram size={20} className="text-pink-500"/>
                    <FaTwitter size={20} className="text-blue-500"/>
                    <FaLinkedin size={20} className="text-blue-700"/>
                    <FaYoutube size={20} className="text-red-500"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar