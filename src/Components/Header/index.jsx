// src/components/Header.js

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <div className=" mx-auto flex justify-between items-center p-4">
        <NavLink to="/">
          <p className="text-[50px] md:text-[60px] font-bold bg-gradient-to-r from-brandPrimary  to-brandSecondary inline-block  text-transparent bg-clip-text">
            R.P.
          </p>
        </NavLink>
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to={""}
            className=" text-brandText text-[20px] hover:text-brandPrimary"
          >
            Home
          </NavLink>
          <NavLink
            to="sobre"
            className=" text-brandText text-[20px] hover:text-brandPrimary"
          >
            Sobre mim
          </NavLink>
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
        <nav
          className="fixed left-0 right-0
 md:hidden bg-brandPrimary text-white space-y- p-4"
        >
          <NavLink to="" className="block">
            Home
          </NavLink>
          <NavLink to="sobre" className="block">
            About
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
