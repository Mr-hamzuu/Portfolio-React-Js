import React, { useState } from "react";
import "./navbar.css";
import Hamburger from "hamburger-react"; 
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container mx-auto sm:place-items-center">
      {/* Desktop Navbar */}
      <nav
        className={`sm:flex shadow-[#1E2A44] justify-between  items-center px-12 rounded-2xl transition-all duration-700  opacity-100 translate-y-0 hidden m-auto`}
      >
        <ul className="flex sm:w-10/12 gap-6 p-7 text-xl">
          <li>
          <Link to='/' className="transition duration-300 " >
              Home
            </Link>
          </li>
          <li>
           <Link to='/about'  className="transition duration-300 ">
              About
            </Link>
          </li>
          <li>
           <Link to='/services'  className="transition duration-300 ">
              Services
            </Link>
          </li>
          <li>
            <Link to='/contact'  className="transition duration-300 ">
              Contact 
            </Link>
          </li>
        </ul>
        <div >
          <a
            href="https://wa.me/923195260580/?text=urlencodedtext"
            className="px-6 py-2 text-xl text-shadow-none duration-600 whitespace-nowrap hire border rounded-full hover:shadow-inner transition"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex backdrop-blur-2xl justify-between items-center pt-2 px-6">
       <div>
        <img src={`${logo}`} width={80} alt="" />
       </div>

        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          aria-label="Toggle navigation menu"
        />
      </div>

      <ul
        className={`fixed top-0 right-0 h-screen w-1/2 bg-transparent backdrop-blur-md shadow-lg p-9 flex flex-col gap-7 z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0 shadow-cyan-400 " : "translate-x-full"
        }`}
      >
        <li>
          <Link to='/' onClick={() => setOpen(false)}>
              Home
            </Link>
        </li>
        <li>
         <Link to='/about' onClick={() => setOpen(false)}>
              About
            </Link>
        </li>
        <li>
          <Link to='/services' onClick={() => setOpen(false)}>
              Services
            </Link>
        </li>
        <li>
          <Link to='/contact' onClick={() => setOpen(false)}>
              Contact
            </Link>
        </li>
        <li>
          <button
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 text-white"
            aria-label="Close navigation menu"
          >
            Close
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;