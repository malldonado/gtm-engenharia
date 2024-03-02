import React from "react";
import Logo from "../../images/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#000] w-full mt-[200px] h-full">
      <div className="flex w-full justify-center items-center h-full">
        <div className="items-center w-[30%] flex justify-center">
          <ul className="text-white">
            <Link to='/'>
              <img className="h-[36px] cursor-pointer mb-12" src={Logo} alt="" />
            </Link>
            <li className="mb-2">8 W.South St.Buford, GA 30518</li>
            <li>5 Briarwood LaneVienna, VA 22180 RER</li>
            <li className="flex justify-start gap-3 mt-4">
              <span className="text-[26px] cursor-pointer" href="">
                <FaFacebookSquare />
              </span>
              <span className="text-[26px] cursor-pointer" href="">
                <RiInstagramFill />
              </span>
              <span className="text-[26px] cursor-pointer" href="">
                <FaSquareXTwitter />
              </span>
            </li>
          </ul>
        </div>
        <div className="items-center w-[30%] flex justify-center mt-[-30px]">
          <ul className="text-white">
            <li className="text-[22px] font-medium mb-12 mt-8">Company Info</li>
            <li className="mb-3 cursor-pointer">About</li>
            <li className="mb-3 cursor-pointer">Services</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="items-center w-[30%] flex justify-center mt-[-30px]">
          <ul className="text-white">
            <li className="text-[22px] font-medium mb-12 mt-8">Contact</li>
            <li className="mb-3">+1100000-0000</li>
            <li className="mb-3">cartplaces@mail.com</li>
            <li>Phone: +1 12345678</li>
          </ul>
        </div>
      </div>
      <span className="text-white text-center flex justify-center align-bottom mt-20 pb-8 font-light opacity-75">
        © GTM Engenharia all rights 2023 - Designed by <Link className="pl-1 hover:underline md:decoration-white" to={'http://malldonado.dev'}> malldonado.dev</Link>
      </span>
    </div>
  );
}

export default Footer;
