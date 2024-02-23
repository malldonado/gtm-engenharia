import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from '../../images/banner.jpg'

function Categories() {
  return (
    <div className="max-w-[1200px] mx-auto mt-[40px] flex justify-center items-center h-auto p-0 mb-0">
     <div className="w-[30%] h-[300px] bg-[#1b1b1b]">
      <span className="text-white text-[30px] flex justify-end mr-4 mt-4">Architeture Plan</span>
     </div>
     <div className="w-[30%] h-[300px] bg-white">
      <span className="text-white">Architeture Plan</span>
     </div>
     <div className="w-[30%] h-[300px] bg-red">
      <span className="text-white">Architeture Plan</span>
     </div>
    </div>
  );
}

export default Categories;
