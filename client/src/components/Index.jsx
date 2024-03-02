import React from "react";
import Navbar from './index/Navbar'
import Banner from './index/Banner'
import Categories from './index/Categories'
import Footer from './index/Footer'
import CardOne from "./index/CardOne";
import OurProjects from "./index/OurProjects";
import Message from "./index/Message";
import './style/style.css';

function Index() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Categories/>
      <OurProjects/>
      <CardOne/>
      <Message/>
      <Footer/>
    </>
  )
}

export default Index
