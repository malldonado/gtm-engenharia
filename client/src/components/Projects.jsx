import React from "react";
import Navbar from "./projects/Navbar";
import Banner from "./projects/Banner";
import Project from "./projects/Project";
import Paginations from "./projects/Paginations";
import Footer from "./projects/Footer";

function Projects() {
  return (
    <>
      <Navbar />
      <Banner />
      <Project/>
      <Paginations/>
      <Footer/>
    </>
  );
}

export default Projects;
