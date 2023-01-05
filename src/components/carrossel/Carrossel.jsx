import React from 'react';
import './Carrossel.css';
import banner from './images/banner.jpg';

function Carrossel() {
  return (
    <div className='banner'>
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
        <div className='bannerImg bannerComplements'>
            <card></card>
            <img
            className=""
            src={banner}
            alt="svelte logo" />
        </div>
    </div>
  )
}

export default Carrossel