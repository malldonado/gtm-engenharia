import React from "react";
import Left from "./register/Left";
import Right from "./register/Right";

function Register() {
  return (
    <div className="flex justify-center mx-auto md:h-screen bg-white">
      <Left/>
      <Right/>
    </div>
  );
}

export default Register;
