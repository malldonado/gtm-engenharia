import React from 'react'
import './Navbar.css';
import logo from './images/logo.png';

function Navbar() {
  return (
    <div>
      
      <div className="navbar">
        <div>
          <img
          className=""
          src={logo}
          alt="svelte logo" />
          </div>
          <span>Design</span>
          <span>About us</span>
          <span>Blog</span>
          <span>Projects</span>
          <span>Awards</span>
          <button>Contact Us</button>
      </div>

    </div>
  )
}

export default Navbar