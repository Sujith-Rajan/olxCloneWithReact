import React from 'react'
import './Post.css'
import { useState,useContext,useEffect } from 'react'

import { FirebaseContext } from '../store/Context'


function Post() {
  const[productsList ,setProductList] = useState([]) 
  const {firebaseApp} = useContext(FirebaseContext)
  useEffect(()=>{
    firebaseApp.firestore().collection('products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id

        }

      })
      // console.log(allPost)
      setProductList(allPost)
    })
    
  },[firebaseApp])

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
       
         
          <div className="fresh-arrival" >
          {productsList.map((product)=>(
          <div className="card">
          <div className='prdct-image'><img src={product.image} alt="" /></div>
             <div className='prdct-details'>
              <p className='prdct-rate'>&#x20B9;<b>{product.item_price}</b></p>
              <p className='prdct-name'>{product.item_name}</p>
              {/* <p className='prdct-catgory'>{product.item_catogory}</p>
              <p className='prdct-desc'>{product.item_desc}</p> */}
             </div>
          </div>
            ))
        
          } 

      </div>
      

      
    </div>
  )
}

export default Post