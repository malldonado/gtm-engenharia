import React from "react";
import NavbarLeft from "./panel/NavbarLeft";
import ContainerPanel from "./panel/ContainerPanel";
import Navbar from "./panel/Navbar";

function Panel() {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <Navbar />
      <div className="max-w-[80%] h-[90vh] m-auto flex">
        <NavbarLeft />
        <ContainerPanel />
      </div>
    </div>
  );
}

export default Panel;
