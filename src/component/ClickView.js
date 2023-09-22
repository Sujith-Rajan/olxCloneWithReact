import React from 'react'
import './ClickView.css'

function ClickView() {
  return (
    <div className='clickView'>
          <div className="view-card">
               <div className='prdct-image'><img src="" alt="" /></div>
               <div>
                <p className='prdct-rate'>&#x20B9; 250000</p>
                <p className='prdct-name'>Sofa Set</p>
                <p className='prdct-desc'>It's not too long used</p>
               </div>
            </div>
            <div className="seller-details">
            <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
            </div>

    </div>
  )
}

export default ClickView