import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt="logo" width={100} />
            <div className="flexCenter h-menu">
                <a href="">
                    Residências
                </a>
                <a href="">
                    Outros valores 
                </a>
                <a href="">
                    Contato-nos
                </a>
                <a href="">
                    Get Started
                </a>
                <button className='button'>
                    <a href="">Contato</a>
                </button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Header
