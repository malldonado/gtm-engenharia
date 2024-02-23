import React from "react";
import Navbar from './index/Navbar'
import Banner from './index/Banner'
import Categories from './index/Categories'
import Footer from './index/Footer'
import Products from './index/Products'
import Featured from './index/Featured'
import './style/style.css';

function Index() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Banner/>
      <Categories/>
      {/* <Products/>
      <Featured/>
      <Footer/> */}
    </div>
  )
}

export default Index
