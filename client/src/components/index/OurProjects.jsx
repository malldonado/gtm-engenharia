import React from "react";
import Card from "../../images/cardBuilding.jpg";
import { Link } from 'react-router-dom';

function OurProjects() {
  return (
    <div className="max-w-[1050px] mx-auto right-0 left-0 mt-[200px]">
      <span className="text-white flex justify-center text-[50px] mb-4">
        OUR RESENT PROJECTS
      </span>
      <p className="text-white flex justify-center text-[18px] normal text-center leading-[1.5] opacity-70 mb-10">
        It is a long established fact that a reader will be distracted by the
        readable content <br /> of a page when looking at its layout.{" "}
      </p>
      <div className="flex mx-5 justify-between p-0">
        <div className="w-[32%] cursor-pointer">
          <img className="w-[400px] h-[450px] object-cover" src={Card} alt="" />
          <span></span>
        </div>
        <div className="w-[32%] cursor-pointer">
          <img className="w-[400px] h-[450px] object-cover" src={Card} alt="" />
          <span></span>
        </div>
        <div className="w-[32%] cursor-pointer">
          <img className="w-[400px] h-[450px] object-cover" src={Card} alt="" />
          <span></span>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link to={'/projects'} className="h-[50px] w-[160px] text-white bg-[#af9155] mt-10 cursor-pointer justify-center items-center flex hover:bg-[#7d5e21] transition duration-150 ease-in-out">
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default OurProjects;
