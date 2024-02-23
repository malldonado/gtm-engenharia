import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoIndex from "../../images/logo.svg";

function Navbar() {
  return (
    <div className="bg-black">
      <div className="h-16 flex mx-auto px-2 sm:px-6 lg:px-8 flex-wrap justify-between items-center">
        <Link to="/">
          <img className="h-[30px] my-auto cursor-pointer" src={LogoIndex} />
        </Link>
        <div className="flex justify-center items-center">
          <span className="text-white mr-10 flex justify-center items-center cursor-pointer span-navbar relative hover:text-[#af9155] transition duration-150 ease-out hover:ease-in">
            Home
            <IoMdArrowDropdown className="ml-3 text-[10px]" />
          </span>
          <span className="text-white mr-10 flex justify-center items-center cursor-pointer span-navbar relative hover:text-[#af9155] transition duration-150 ease-out hover:ease-in">
            Pages
            <IoMdArrowDropdown className="ml-3 text-[10px]" />
          </span>
          <span className="text-white mr-10 flex justify-center items-center cursor-pointer span-navbar relative hover:text-[#af9155] transition duration-150 ease-out hover:ease-in">
            About us
            <IoMdArrowDropdown className="ml-3 text-[10px]" />
          </span>
          <span className="text-white mr-10 flex justify-center items-center cursor-pointer span-navbar relative hover:text-[#af9155] transition duration-150 ease-out hover:ease-in">
            Project
            <IoMdArrowDropdown className="ml-3 text-[10px]" />
          </span>
          <span className="text-white mr-10 flex justify-center items-center cursor-pointer span-navbar relative hover:text-[#af9155] transition duration-150 ease-out hover:ease-in">
            Contact
            <IoMdArrowDropdown className="ml-3 text-[10px]" />
          </span>
          <span className="cursor-pointer">
            <RxHamburgerMenu className="ml-3 text-[20px] text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
