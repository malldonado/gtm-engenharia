import React from 'react';
import './Carrossel.css';
import banner from './images/banner.jpg';
import modelo from './images/modelo.jpg';

function Carrossel() {
  return (
    <div className='banner container'>
        <div className='bannerText bannerComplements'>
            <div>
                <h1>Architecture width people in mind<span>.</span></h1>
                <p>Understanding the person or people living in a home is a greater need in a design.</p>
                <div>
                    <button className='ourServices'>Our Services</button>
                    <button className='viewProjects'>View Projects</button>
                </div>
            </div>
        </div>
        <div className='bannerSpacing'></div>
        <div className='bannerImg bannerComplements'>
            <div className='bannerCard'>
                <img className="" src={modelo} alt="" />
                <h4>Matheus Maldonado</h4>
                <p>Eu gostei muito feito com muito carrinho!</p>
            </div>
            <img className="bannerImage" src={banner} alt="" />
        </div>
    </div>
  )
}

export default Carrossel