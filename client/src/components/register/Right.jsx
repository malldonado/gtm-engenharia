import React, { useState } from "react";
import Logo from "../../images/logo_login.png";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

function Right() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", {
        email,
        password,
      });
      alert("Registration successful. Now you can login.");
    } catch (error) {
      alert("Registration failed. Please try again later.");
    }
  }

  return (
    <div className="w-[40%]">
      <Link to="/">
        <IoCloseSharp className="absolute text-[45px] top-5 right-5 text-black cursor-pointer" />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <Link to="/">
          <img src={Logo} className="h-[40px] mt-8 cursor-pointer" alt="" />
        </Link>
        <div className="mt-10 w-[400px]">
          <h2 className="text-[26px] font-bold nunito-font">Register</h2>
          <p className="nunito-font text-[14px] mt-4 text-gray-500">
            Sign in with your data that you entered during your registration.
          </p>
          <form className="mt-6" onSubmit={registerUser}>
            <label
              className="nunito-font text-[14px] mt-4 text-gray-500"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-black font-bold nunito-font mt-1 mb-4 placeholder:font-normal"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <label
              className="nunito-font text-[14px] mt-4 text-gray-500"
              htmlFor="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            >
              Password
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-black font-bold nunito-font mt-1 mb-4 placeholder:font-normal"
              type="password"
              placeholder="Password"
            />
            {/* <label
              className="nunito-font text-[14px] mt-4 text-gray-500"
              htmlFor="Password"
            >
              Repeat Password
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-black font-bold nunito-font mt-1 mb-4 placeholder:font-normal"
              type="password"
              placeholder="Repeat Password"
            /> */}
            <button className="w-full h-[40px] bg-black mt-4 text-white nunito-font rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Right;
