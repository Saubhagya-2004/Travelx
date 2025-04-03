import React, { useState } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const nav = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-between items-center h-20 px-7 w-full absolute z-20">
        <div className="font-bold cursor-pointer text-3xl md:text-4xl text-white">
          <h1>TRAVEL.X</h1>
        </div>
        <ul className="font-semibold hidden md:flex text-gray-200 hover:text-black">
          <li className="p-5">
            <Link to="/" onClick={nav}>
              Home
            </Link>
          </li>
          <li className="p-5">
            <Link to="/destination" onClick={nav}>
              Destination
            </Link>
          </li>
          <li className="p-5">
            <Link to="/booking" onClick={nav}>
              Book
            </Link>
          </li>
          <li className="p-5">
            <Link to="/selects" onClick={nav}>
              Travel
            </Link>
          </li>
          <li className="p-5">
            <Link to="/view" onClick={nav}>
              View
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex mr-4 text-teal-300">
          <BsSearch className="mr-3 hover:text-blue-500" size={20} />
          <BsPerson className="bg-gray-200 rounded-full" size={20} />
          <p className="ml-2 uppercase text-white cursor-pointer">user</p>
        </div>
        <div onClick={nav} className="md:hidden block z-20 border-2 border-cyan-400">
          {open ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
        </div>
        <div
          className={`${
            open ? "absolute top-0 bg-gray-300 w-full left-0 px-4 py-7 flex flex-col duration-500 md:hidden" : "absolute top-[-800%] left-0 duration-500 w-full"
          }`}
        >
          <ul className="text-2xl font-medium">
            <li className="p-4 border-b border-gray-500">
              <Link to="/" onClick={nav}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-500">
              <Link to="/destination" onClick={nav}>
                Destination
              </Link>
            </li>
            <li className="p-4 border-b border-gray-500">
              <Link to="/booking" onClick={nav}>
                Book
              </Link>
            </li>
            <li className="p-4 border-b border-gray-500">
              <Link to="/selects" onClick={nav}>
                Travel
              </Link>
            </li>
            <li className="p-4 border-b border-gray-500">
              <Link to="/view" onClick={nav}>
                View
              </Link>
            </li>
          </ul>
          <div className="flex flex-col">
            <button className="border p-2 my-2.5 bg-gradient-to-l from-blue-500 to-cyan-300 text-white font-bold rounded-2xl uppercase">
              Search
            </button>
            <button className="border p-2 my-2.5 bg-gradient-to-l from-blue-500 to-cyan-300 text-white font-bold rounded-2xl uppercase">
              Account
            </button>
          </div>
          <div className="flex px-4 gap-5 my-5 md:hidden">
            <FaFacebook size={20} className="text-blue-500" />
            <FaInstagram size={20} className="text-pink-500" />
            <FaTwitter size={20} className="text-blue-500" />
            <FaLinkedin size={20} className="text-blue-700" />
            <FaYoutube size={20} className="text-red-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;