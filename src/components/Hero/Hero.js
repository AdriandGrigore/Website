import React from 'react'
import HeroImage from "../../assets/hero.jpg"
import "../Hero/Hero.css"

function Hero() {
  return (
    <>
        <div className='hero'>
          <img src={HeroImage} loading="lazy" alt="heroImage"/>
        </div>
        <div className='hero-text'>
            <h1>Planning an important event?</h1>
            <h2>Hire one of our chefs!</h2>
            <a href="#chefs">Our chefs</a>
        </div>
    </>
  )
}

export default Hero