import React from "react";
import cardBuilding from '../../images/cardBuilding.jpg'
import houseBuilding from '../../images/cardHouse.jpg'
import { Link } from 'react-router-dom';

function CardOne() {
  return (
    <div className="flex justify-center max-w-[1200px] mx-auto pt-10 h-[700px] mb-[200px] mt-[100px]">
      <div className="w-[50%] mt-20 ml-[90px]">
        <span className="text-white text-[60px]">WHERE <br /> ARCHITECTURE <br /> MEET <br /> INNOVATION</span>
        <span className="text-white block mt-4 max-w-[500px] text-[20px] opacity-70">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece.
        </span>
      </div>
      <Link to={'/about'} className="w-[50%] flex justify-start items-center ml-3 relative">
        <div className="cursor-pointer">
            <img className="h-[450px] w-[350px]" src={cardBuilding} alt="" />
        </div>
        <div className="absolute bottom-[20px] left-[130px] cursor-pointer">
            <img className="h-[400px] w-[320px]" src={houseBuilding} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default CardOne;
