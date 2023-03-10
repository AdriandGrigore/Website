import React from 'react'
import "../Footer/Footer.css"
import {SiFacebook, SiTwitter, SiInstagram, SiLinkedin} from "react-icons/si"
import {SlPhone,SlLocationPin} from "react-icons/sl"
function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-copyright-container'>
            <p> &copy; Copyright HireChef-Grigore Adrian. All rights reserved </p>
        </div>
        <div className='footer-adress-container'>
            <h1><SlLocationPin/></h1>
            <p>1253 Random Street</p>
            <p>City, 332254</p>
        </div>
        <div className='footer-contact-container'>
            <h1><SlPhone/></h1>
            <p>E-mail: support@gmail.com</p>
            <p>Phone: 0134556789</p>
        </div>
        <div className='footer-social-container'>
            <button><SiFacebook/></button>
            <button><SiTwitter/></button>
            <button><SiInstagram/></button>
            <button><SiLinkedin/></button>
        </div>
    </div>
  )
}

export default Footer