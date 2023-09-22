import React from 'react'
import './Post.css'
import { useState } from 'react'

function Post() {
  const[productsList ,setProductList] = useState([]) 

  return (
    <div className='post'>
         <h2>Recent Search</h2>
        <div className="recent-search">
           
            <div className="card">
               <div className='prdct-image'><img src="" alt="" /></div>
               <div>
                <p className='prdct-rate'>&#x20B9; 250000</p>
                <p className='prdct-name'>Sofa Set</p>
                <p className='prdct-catgory'>category</p>
                <p className='prdct-desc'>It's not too long used</p>
               </div>
            </div>
           

        </div>
        <h2>New Arrivals</h2>
        <div className="fresh-arrival">
            <div className="card">
            <div className='prdct-image'><img src="" alt="" /></div>
               <div>
                <p className='prdct-rate'>&#x20B9; 250000</p>
                <p className='prdct-name'>Sofa Set</p>
                <p className='prdct-desc'>It's not too long used</p>
               </div>
            </div>
            

        </div>

    </div>
  )
}

export default Post