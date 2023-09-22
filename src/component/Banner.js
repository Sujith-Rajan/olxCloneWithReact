import React from 'react'
import './Banner.css'
import YouTube from 'react-youtube'

function Banner() {
    const opts ={
        height:"260px",
        width:'60%',
       
        playerVars:{
            autoplay:0,
        }
    }
  return (
    <div className='banner'>
     <YouTube videoId='vg5KB3hPmp8' opts={opts}/>
    </div>
  )
}

export default Banner