// src/components/Header.js

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center p-4">
        <p className="text-[50px] md:text-[60px] font-bold bg-gradient-to-r from-brandPrimary  to-brandSecondary inline-block  text-transparent bg-clip-text">
          R.P.
        </p>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className=" text-brandText text-[20px] hover:text-brandPrimary"
          >
            Home
          </a>
          <a
            href="#"
            className=" text-brandText text-[20px] hover:text-brandPrimary"
          >
            About
          </a>
          <a
            href="#"
            className=" text-brandText text-[20px] hover:text-brandPrimary"
          >
            Services
          </a>
          <a
            href="#"
            className=" text-brandText text-[20px] hover:text-brandPrimary"
          >
            Contact
          </a>
        </nav>
        <button
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoMdClose size={"24px"} /> : <IoMdMenu size={"24px"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-brandPrimary text-white space-y- p-4">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Services
          </a>
          <a href="#" className="block">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
