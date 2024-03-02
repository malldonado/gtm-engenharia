import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from '../../images/banner.jpg';
import Card from '../../images/1.png';
import Card1 from '../../images/2.png';
import Card2 from '../../images/3.png';

function Categories() {
  return (
    <div className="max-w-[1200px] bg-black mx-auto mt-[150px] mb-[70px] flex justify-center items-center h-auto">
     <div className="w-[30%] ml-[50px]">
      <img src={Card} className="w-[300px] h-[350px] cursor-pointer" alt="" />
     </div>
     <div className="w-[30%]">
      <img src={Card1} className="w-[300px] h-[350px] cursor-pointer" alt="" />
     </div>
     <div className="w-[30%]">
      <img src={Card2} className="w-[300px] h-[350px] cursor-pointer" alt="" />
     </div>
    </div>
  );
}

export default Categories;
