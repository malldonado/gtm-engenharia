import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function Message() {
  return (
    <div className="max-w-[1010px] flex justify-center items-top text-white mx-auto mt-[200px]">
      <div className="w-[50%] pr-5">
          <span className="text-center text-[60px] leading-tight">
            {"LET'S DISCUSS"}
            <br /> NEXT PROJECT
          </span>
          <span className="block mt-5 text-[18px] opacity-70">
            There are many variations of passages of Lorem Ipsum available,{" "}
            but the majority have suffered alteration in some form, by injected
            humour.
          </span>
      </div>
      <div className="w-[50%]">
        <form className="max-w-[100%] ml-5" action="">
          <input
            type="text"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80"
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80"
            placeholder="Enter your email address"
          />
          <input
            type="number"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80"
            placeholder="Enter your mobile number"
          />
          <textarea
            className="w-full h-[150px] bg-transparent outline-none border-2 border-[#bbb9b9] p-2 resize-none placeholder:opacity-80"
            placeholder="Enter your message"
          />
          <button className="flex justify-center items-center text-white bg-[#af9155] hover:bg-[#7d5e21] transition duration-150 ease-in-out h-[50px] w-[160px] mt-5">
            Send Mail
            <IoMdArrowForward />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
