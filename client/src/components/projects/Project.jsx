import React from "react";
import Image from "../../images/banner.jpg";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="max-w-[1000px] mx-auto mt-14">
      <div className="flex justify-between cursor-pointer items-center mt-10">
        <div className="w-[50%] mr-[30px]">
          <img className="h-[300px] w-full object-cover" src={Image} alt="" />
        </div>
        <div className="text-white w-[50%] ml-[30px]">
          <span className="text-[40px]">Architecture Plan</span>
          <p className="mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <Link className="h-[40px] w-[100px] text-[14px] text-white bg-[#af9155] mt-6 cursor-pointer justify-center items-center flex">
            View More
          </Link>
        </div>
      </div>
      <div className="flex justify-between cursor-pointer items-center mt-10">
        <div className="w-[50%] mr-[30px]">
          <img className="h-[300px] w-full object-cover" src={Image} alt="" />
        </div>
        <div className="text-white w-[50%] ml-[30px]">
          <span className="text-[40px]">Architecture Plan</span>
          <p className="mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <Link className="h-[40px] w-[100px] text-[14px] text-white bg-[#af9155] mt-6 cursor-pointer justify-center items-center flex">
            View More
          </Link>
        </div>
      </div>
      <div className="flex justify-between cursor-pointer items-center mt-10">
        <div className="w-[50%] mr-[30px]">
          <img className="h-[300px] w-full object-cover" src={Image} alt="" />
        </div>
        <div className="text-white w-[50%] ml-[30px]">
          <span className="text-[40px]">Architecture Plan</span>
          <p className="mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <Link className="h-[40px] w-[100px] text-[14px] text-white bg-[#af9155] mt-6 cursor-pointer justify-center items-center flex">
            View More
          </Link>
        </div>
      </div>
      <div className="flex justify-between cursor-pointer items-center mt-10">
        <div className="w-[50%] mr-[30px]">
          <img className="h-[300px] w-full object-cover" src={Image} alt="" />
        </div>
        <div className="text-white w-[50%] ml-[30px]">
          <span className="text-[40px]">Architecture Plan</span>
          <p className="mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <Link className="h-[40px] w-[100px] text-[14px] text-white bg-[#af9155] mt-6 cursor-pointer justify-center items-center flex">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
