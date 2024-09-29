// Footer.jsx
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="md:p-4 container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600">
        <div className=" flex space-x-4 mb-4 md:mb-0 flex-wrap justify-center">
          <a href="#" className="hover:text-gray-800">
            Home
          </a>
          <a href="#" className="hover:text-gray-800">
            About
          </a>
          <a href="#" className="hover:text-gray-800">
            Technologies
          </a>
          <a href="#" className="hover:text-gray-800">
            Projects
          </a>
          <a href="#" className="hover:text-gray-800">
            Contact
          </a>
        </div>

        <div className="text-center mb-4 md:mb-0 sm:flex gap-4">
          <p className="text-sm">+91 12345 09876</p>
          <p className="text-sm">info@example.com</p>
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com" className="hover:text-gray-800">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-800">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-800">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
