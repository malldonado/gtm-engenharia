import Sidebar from "../components/sidebar/sidebar";
import ContainerPanel from "../components/containerPanel/containerPanel";
import NavbarPanel from "../components/navbar/navbarPanel";
import React from "react";

function ProjectsPanel() {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <NavbarPanel />
      <div className="max-w-[80%] h-[90vh] m-auto flex overflow-hidden">
        <Sidebar />
        <ContainerPanel />
      </div>
    </div>
  )
}

export default ProjectsPanel
