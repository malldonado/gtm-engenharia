import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <div>
        <div className='filterContainer container'>
            <div className='filterElements'>
                <p className='filterTitle'>Location</p>
                <p>Los Angeles, California</p>
            </div>
            <div className='filterElements'>
                <p className='filterTitle'>Type</p>
                <p>Luxury Home</p>
            </div>
            <div className='filterElements'>
                <p className='filterTitle'>Price</p>
                <p>R$ 10.000 - R$ 20.000</p>
            </div>
            <button className='filterButton'>SEARCH</button>
        </div>
    </div>
  )
}

export default Filter