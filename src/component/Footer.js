import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='about'>
            <div className="about-contents">
                <h5>POPULAR LOCATIONS</h5>
                <h6>Kolkata</h6>
                <h6>Mumbai</h6>
                <h6>Chennai</h6>
                <h6>Pune</h6>

            </div>
            <div className="about-contents">
            <h5>Trending Location</h5>
                <h6>Bhuweneswar</h6>
                <h6>Hyderabad</h6>
                <h6>Chandigrah</h6>
                <h6>Nashik</h6>
            </div>
            <div className="about-contents">
            <h5>ABOUT US</h5>
                <h6>About OLX Groups</h6>
                <h6>Careers</h6>
                <h6>Contact Us</h6>
                <h6>OLX People</h6>
                <h6>Waah Jobs</h6>
            </div>
            <div className="about-contents">
            <h5>OLX</h5>
                <h6>Help</h6>
                <h6>Sitemaps</h6>
                <h6>Legal and Privacy Information</h6>
                <h6>Blog</h6>
                <h6>OLX Auto sells Cars</h6>
                <h6>Vulnerability Disclosure Program</h6>
                
            </div>
            <div className="about-icon">
            <h5>FOLLOW US</h5>
            </div>


        </div>
        <div className='developer'>
            <h6>Help-Sitemap</h6>
            <h6>All rights reserved&#169;2006-2023 OLX </h6>
        </div>

    </div>
  )
}

export default Footer