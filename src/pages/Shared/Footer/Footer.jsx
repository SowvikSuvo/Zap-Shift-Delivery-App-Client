import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logo from "../../../components/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 py-10 px-5 rounded-t-3xl max-w-7xl mx-auto mt-16">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          <Logo />
        </div>

        {/* Description */}
        <p className="text-center text-sm max-w-md px-3">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Links */}
        <div
          className="
          flex flex-wrap justify-center gap-4 md:gap-8 
          text-sm font-medium 
          border-t border-b border-gray-700 py-4 px-3 w-full md:w-auto
        "
        >
          {[
            "Services",
            "Coverage",
            "About Us",
            "Pricing",
            "Blog",
            "Contact",
          ].map((item, idx) => (
            <a key={idx} href="#" className="hover:text-white duration-200">
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl mt-2">
          <a href="#" className="hover:text-blue-500 duration-200">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-white duration-200">
            <RxCross2 />
          </a>
          <a href="#" className="hover:text-blue-500 duration-200">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-red-500 duration-200">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
