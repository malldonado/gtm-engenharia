import React from "react";
import Left from "./login/Left";
import Right from "./login/Right";

function Login() {
  return (
    <div className="flex justify-center mx-auto md:h-screen bg-white">
      <Left/>
      <Right/>
    </div>
  );
}

export default Login;
